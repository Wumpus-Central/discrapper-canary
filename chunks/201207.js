e.d(o, { s: () => m, geolocationMachine: () => d });
var i = e(768672),
    n = e(368499),
    s = e(288052),
    a = e(749378),
    c = e(168056);
async function r(t, o) {
    let e = await i.t.post(s.t.addGeolocation, { latitude: t.latitude, longitude: t.longitude }, { signal: o });
    if (!e.ok) throw Error(`POST ${s.t.addGeolocation} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
function u() {
    return (0, a.r)() ? "ios" : (0, a.t)() ? "android" : "desktop";
}
let d = (0, c.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        requestPosition: (0, c.a)(async ({ input: t }) => t.geolocation.getCurrentPosition()),
        submitPosition: (0, c.a)(async ({ input: t, signal: o }) => {
            try {
                return await r(t, o);
            } catch {
                return { location: null };
            }
        }),
    },
    actions: {
        setCoords: (0, c.r)(({ event: t }) => ({ coords: t.output })),
        setLocation: (0, c.r)(({ event: t }) => ({ location: t.output.location })),
        setDeviceType: (0, c.r)({ deviceType: () => u() }),
        resetContext: (0, c.r)(({ context: t }) => ({
            config: t.config,
            geolocation: t.geolocation,
            coords: void 0,
            location: void 0,
            deviceType: u(),
        })),
    },
    guards: { canSkip: ({ context: t }) => !0 === t.config.allowUserToSkipGeolocation },
}).createMachine({
    id: "geolocation",
    initial: "idle",
    context: ({ input: t }) => ({
        config: t.config,
        geolocation: t.geolocation,
        coords: void 0,
        location: void 0,
        deviceType: u(),
    }),
    states: {
        idle: { on: { REQUEST: { target: "requestingLocation" } } },
        requestingLocation: {
            invoke: {
                id: "requestPosition",
                src: "requestPosition",
                input: ({ context: t }) => ({ geolocation: t.geolocation }),
                onDone: { target: "submitting", actions: "setCoords" },
                onError: { target: "permissionDenied", actions: "setDeviceType" },
            },
        },
        submitting: {
            invoke: {
                id: "submitPosition",
                src: "submitPosition",
                input: ({ context: t }) => ({ latitude: t.coords?.latitude ?? 0, longitude: t.coords?.longitude ?? 0 }),
                onDone: { target: "locationAcquired", actions: "setLocation" },
                onError: { target: "locationAcquired", actions: (0, c.r)({ location: () => null }) },
            },
        },
        locationAcquired: { on: { CONTINUE: { target: "finished" } } },
        permissionDenied: { on: { SKIP: { target: "finished", guard: "canSkip" } } },
        finished: { type: "final" },
    },
});
var l = class {
    getCurrentPosition() {
        return new Promise((t, o) => {
            navigator.geolocation.getCurrentPosition(
                (o) => t({ latitude: o.coords.latitude, longitude: o.coords.longitude }),
                o,
            );
        });
    }
};
function g(t) {
    let { value: o } = t;
    if ("string" == typeof o)
        switch (o) {
            case "idle":
                return "Geolocation.default";
            case "requestingLocation":
            case "submitting":
                return "Geolocation.permission";
            case "locationAcquired":
            case "finished":
                return "Geolocation.continue";
            case "permissionDenied":
                return "Geolocation.allowLocation";
            default:
                return;
        }
}
function p(t) {
    let { context: o } = t;
    return t.matches("idle")
        ? { status: "idle" }
        : t.matches("requestingLocation")
          ? { status: "requestingLocation" }
          : t.matches("submitting")
            ? { status: "submitting" }
            : t.matches("locationAcquired")
              ? { status: "locationAcquired", location: o.location ?? null }
              : t.matches("permissionDenied")
                ? {
                      status: "permissionDenied",
                      deviceType: o.deviceType,
                      canSkip: !0 === o.config.allowUserToSkipGeolocation,
                  }
                : t.matches("finished")
                  ? { status: "finished" }
                  : { status: "idle" };
}
function f({ actor: t, trackElementClicked: o }) {
    return {
        request() {
            o?.("request"), t.send({ type: "REQUEST" });
        },
        continue() {
            o?.("continue"), t.send({ type: "CONTINUE" });
        },
        skip() {
            o?.("skip"), t.send({ type: "SKIP" });
        },
        reset() {
            t.send({ type: "RESET" });
        },
    };
}
function m(t) {
    var o;
    let e;
    return (
        (o = ((e = t.geolocation ?? new l()), (0, c.s)(d, { input: { config: t.config, geolocation: e } }).start())),
        (0, c.l)({
            actor: o,
            mapState: p,
            createApi: f,
            instrumentation: (0, n.s)(n.n.geolocation, { getEventScreenName: g }),
        })
    );
}
