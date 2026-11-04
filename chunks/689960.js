(e.r(o), e.d(o, { createGeolocationManager: () => f, geolocationMachine: () => u }));
var i = e(41851),
    n = e(269882),
    s = e(528239),
    a = e(886347),
    c = e(646613);
function r() {
    return (0, a.r)() ? "ios" : (0, a.t)() ? "android" : "desktop";
}
let u = (0, c.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        requestPosition: (0, c.a)(async ({ input: t }) => t.geolocation.getCurrentPosition()),
        submitPosition: (0, c.a)(async ({ input: t, signal: o }) => {
            try {
                return await (async function (t, o) {
                    let e = await i.t.post(
                        s.t.addGeolocation,
                        { latitude: t.latitude, longitude: t.longitude },
                        { signal: o },
                    );
                    if (!e.ok) throw Error(`POST ${s.t.addGeolocation} failed: ${e.status} ${e.statusText}`);
                    return e.data;
                })(t, o);
            } catch {
                return { location: null };
            }
        }),
    },
    actions: {
        setCoords: (0, c.r)(({ event: t }) => ({ coords: t.output })),
        setLocation: (0, c.r)(({ event: t }) => ({ location: t.output.location })),
        setDeviceType: (0, c.r)({ deviceType: () => r() }),
        resetContext: (0, c.r)(({ context: t }) => ({
            config: t.config,
            geolocation: t.geolocation,
            coords: void 0,
            location: void 0,
            deviceType: r(),
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
        deviceType: r(),
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
var d = class {
    getCurrentPosition() {
        return new Promise((t, o) => {
            navigator.geolocation.getCurrentPosition(
                (o) => t({ latitude: o.coords.latitude, longitude: o.coords.longitude }),
                o,
            );
        });
    }
};
function l(t) {
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
function g(t) {
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
function p({ actor: t, trackElementClicked: o }) {
    return {
        request() {
            (o?.("request"), t.send({ type: "REQUEST" }));
        },
        continue() {
            (o?.("continue"), t.send({ type: "CONTINUE" }));
        },
        skip() {
            (o?.("skip"), t.send({ type: "SKIP" }));
        },
        reset() {
            t.send({ type: "RESET" });
        },
    };
}
function f(t) {
    var o;
    let e;
    return (
        (o = ((e = t.geolocation ?? new d()), (0, c.s)(u, { input: { config: t.config, geolocation: e } }).start())),
        (0, c.l)({
            actor: o,
            mapState: g,
            createApi: p,
            instrumentation: (0, n.s)(n.n.geolocation, { getEventScreenName: l }),
        })
    );
}
