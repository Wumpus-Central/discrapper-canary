a.d(e, { v: () => l });
var r = a(696486),
    _ = a(263449),
    n = a(101284),
    o = a(622916),
    i = a(394798),
    E = a(454463),
    c = a(163162),
    s = a(748688);
function l(t) {
    let e;
    (0, s.x5)(t) && (e = 1000 * (0, n.ph)());
    let a = (0, s.Ei)();
    if (!a) return;
    E.X && o.kg.log(`[Profiling] started profiling span: ${((0, r.XU))(t).description}`);
    let l = (0, i.DM)();
    async function I() {
        if (t && a)
            return a
                .stop()
                .then((e) => {
                    if (
                        (R && (c.m9.clearTimeout(R), (R = void 0)),
                        E.X && o.kg.log(`[Profiling] stopped profiling of span: ${((0, r.XU))(t).description}`),
                        !e)
                    ) {
                        E.X &&
                            o.kg.log(
                                `[Profiling] profiler returned null profile for: ${((0, r.XU))(t).description}`,
                                "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started",
                            );
                        return;
                    }
                    (0, s.dz)(l, e);
                })
                .catch((t) => {
                    E.X && o.kg.log("[Profiling] error while stopping profiler:", t);
                });
    }
    (0, _.nZ)().setContext("profile", {
        profile_id: l,
        start_timestamp: e,
    });
    let R = c.m9.setTimeout(() => {
            E.X &&
                o.kg.log("[Profiling] max profile duration elapsed, stopping profiling for:", (0, r.XU)(t).description),
                I();
        }, s.WU),
        u = t.end.bind(t);
    t.end = function () {
        return t
            ? (I().then(
                  () => {
                      u();
                  },
                  () => {
                      u();
                  },
              ),
              t)
            : u();
    };
}
