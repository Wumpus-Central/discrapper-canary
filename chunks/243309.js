a.d(e, { v: () => l });
var r = a(696486),
    n = a(263449),
    _ = a(101284),
    o = a(622916),
    i = a(394798),
    c = a(454463),
    s = a(163162),
    E = a(748688);
function l(t) {
    let e;
    (0, E.x5)(t) && (e = 1000 * (0, _.ph)());
    let a = (0, E.Ei)();
    if (!a) return;
    c.X && o.kg.log(`[Profiling] started profiling span: ${(0, r.XU)(t).description}`);
    let l = (0, i.DM)();
    async function u() {
        if (t && a)
            return a
                .stop()
                .then((e) => {
                    if ((I && (s.m9.clearTimeout(I), (I = void 0)), c.X && o.kg.log(`[Profiling] stopped profiling of span: ${(0, r.XU)(t).description}`), !e)) {
                        c.X && o.kg.log(`[Profiling] profiler returned null profile for: ${(0, r.XU)(t).description}`, 'this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started');
                        return;
                    }
                    (0, E.dz)(l, e);
                })
                .catch((t) => {
                    c.X && o.kg.log('[Profiling] error while stopping profiler:', t);
                });
    }
    (0, n.nZ)().setContext('profile', {
        profile_id: l,
        start_timestamp: e
    });
    let I = s.m9.setTimeout(() => {
            c.X && o.kg.log('[Profiling] max profile duration elapsed, stopping profiling for:', (0, r.XU)(t).description), u();
        }, E.WU),
        R = t.end.bind(t);
    t.end = function () {
        return t
            ? (u().then(
                  () => {
                      R();
                  },
                  () => {
                      R();
                  }
              ),
              t)
            : R();
    };
}
