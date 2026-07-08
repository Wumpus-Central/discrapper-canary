i.d(o, { s: () => f, geolocationMachine: () => d });
var e = i(209688),
    n = i(588233),
    s = i(171251),
    a = i(64755),
    c = i(958027);
async function r(t, o) {
    let i = await e.t.post(s.t.addGeolocation, { latitude: t.latitude, longitude: t.longitude }, { signal: o });
    if (!i.ok) throw Error(`POST ${s.t.addGeolocation} failed: ${i.status} ${i.statusText}`);
    return i.data;
}
function u() {
    return (0, c.r)() ? "ios" : (0, c.t)() ? "android" : "desktop";
}
let d = (0, a.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        requestPosition: (0, a.a)(async ({ input: t }) => t.geolocation.getCurrentPosition()),
        submitPosition: (0, a.a)(async ({ input: t, signal: o }) => {
            try {
                return await r(t, o);
            } catch {
                return { location: "Unknown" };
            }
        }),
    },
    actions: {
        setCoords: (0, a.r)(({ event: t }) => ({ coords: t.output })),
        setLocation: (0, a.r)(({ event: t }) => ({ location: t.output.location })),
        setDeviceType: (0, a.r)({ deviceType: () => u() }),
        resetContext: (0, a.r)(({ context: t }) => ({
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
                onError: { target: "locationAcquired", actions: (0, a.r)({ location: () => "Unknown" }) },
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
    let { context: o } = t;
    return t.matches("idle")
        ? { status: "idle" }
        : t.matches("requestingLocation")
          ? { status: "requestingLocation" }
          : t.matches("submitting")
            ? { status: "submitting" }
            : t.matches("locationAcquired")
              ? { status: "locationAcquired", location: o.location ?? "Unknown" }
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
function f(t) {
    let o;
    return (0, a.c)({
        actor: ((o = t.geolocation ?? new l()), (0, a.s)(d, { input: { config: t.config, geolocation: o } }).start()),
        mapState: g,
        createApi: p,
        instrumentation: (0, n.o)(n.n.geolocation),
    });
}
