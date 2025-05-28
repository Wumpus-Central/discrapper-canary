n.d(t, {
    J: () => s,
    V: () => c
}),
    n(388685),
    n(415506);
var r = n(308521),
    i = n(381814),
    a = n(570833),
    o = n(493773),
    s = (function (e) {
        return (e.Loading = 'loading'), (e.Loaded = 'loaded'), e;
    })({});
let l = (0, i.U)(() => ({ riveAssetCache: new Map() }));
function c(e) {
    let t = l((t) => t.riveAssetCache.get(e));
    return (
        (0, o.ZP)(() => {
            if (l.getState().riveAssetCache.has(e)) return;
            let t = new r.RiveFile({ src: e }),
                n = () => {
                    t.init(),
                        t.on(r.EventType.Load, () => {
                            let n = {
                                status: 'loaded',
                                buffer: t.buffer
                            };
                            l.setState((t) => ({ riveAssetCache: t.riveAssetCache.set(e, n) }));
                        }),
                        t.on(r.EventType.LoadError, (t) => {
                            console.error('Rive file load error', e, t);
                        });
                };
            (0, a.f)(n);
        }),
        null != t
            ? t
            : {
                  status: 'loading',
                  buffer: null
              }
    );
}
