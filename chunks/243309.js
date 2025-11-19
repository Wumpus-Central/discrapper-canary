_.d(e, { v: () => l });
var a = _(696486),
    r = _(263449),
    n = _(101284),
    o = _(622916),
    E = _(394798),
    i = _(454463),
    c = _(163162),
    s = _(748688);
function l(t) {
    let e;
    (0, s.x5)(t) && (e = 1000 * (0, n.ph)());
    let _ = (0, s.Ei)();
    if (!_) return;
    i.X && o.kg.log(`[Profiling] started profiling span: ${((0, a.XU))(t).description}`);
    let l = (0, E.DM)();
    async function I() {
        if (t && _)
            return _.stop()
                .then((e) => {
                    if (
                        (R && (c.m9.clearTimeout(R), (R = void 0)),
                        i.X && o.kg.log(`[Profiling] stopped profiling of span: ${((0, a.XU))(t).description}`),
                        !e)
                    ) {
                        i.X &&
                            o.kg.log(
                                `[Profiling] profiler returned null profile for: ${((0, a.XU))(t).description}`,
                                "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started",
                            );
                        return;
                    }
                    (0, s.dz)(l, e);
                })
                .catch((t) => {
                    i.X && o.kg.log("[Profiling] error while stopping profiler:", t);
                });
    }
    (0, r.nZ)().setContext("profile", {
        profile_id: l,
        start_timestamp: e,
    });
    let R = c.m9.setTimeout(() => {
            i.X &&
                o.kg.log("[Profiling] max profile duration elapsed, stopping profiling for:", (0, a.XU)(t).description),
                I();
        }, s.WU),
        N = t.end.bind(t);
    t.end = function () {
        return t
            ? (I().then(
                  () => {
                      N();
                  },
                  () => {
                      N();
                  },
              ),
              t)
            : N();
    };
}
