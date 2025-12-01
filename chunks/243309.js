r.d(t, { v: () => l });
var n = r(696486),
    a = r(263449),
    i = r(101284),
    o = r(622916),
    _ = r(394798),
    s = r(454463),
    c = r(163162),
    E = r(748688);
function l(e) {
    let t;
    (0, E.x5)(e) && (t = 1000 * (0, i.ph)());
    let r = (0, E.Ei)();
    if (!r) return;
    s.X && o.kg.log(`[Profiling] started profiling span: ${((0, n.XU))(e).description}`);
    let l = (0, _.DM)();
    async function u() {
        if (e && r)
            return r
                .stop()
                .then((t) => {
                    if (
                        (d && (c.m9.clearTimeout(d), (d = void 0)),
                        s.X && o.kg.log(`[Profiling] stopped profiling of span: ${((0, n.XU))(e).description}`),
                        !t)
                    ) {
                        s.X &&
                            o.kg.log(
                                `[Profiling] profiler returned null profile for: ${((0, n.XU))(e).description}`,
                                "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started",
                            );
                        return;
                    }
                    (0, E.dz)(l, t);
                })
                .catch((e) => {
                    s.X && o.kg.log("[Profiling] error while stopping profiler:", e);
                });
    }
    (0, a.nZ)().setContext("profile", {
        profile_id: l,
        start_timestamp: t,
    });
    let d = c.m9.setTimeout(() => {
            s.X &&
                o.kg.log("[Profiling] max profile duration elapsed, stopping profiling for:", (0, n.XU)(e).description),
                u();
        }, E.WU),
        I = e.end.bind(e);
    e.end = function () {
        return e
            ? (u().then(
                  () => {
                      I();
                  },
                  () => {
                      I();
                  },
              ),
              e)
            : I();
    };
}
