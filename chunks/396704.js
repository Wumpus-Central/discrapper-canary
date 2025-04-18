n.d(t, { V: () => l }), n(388685), n(415506);
var r = n(530548),
    i = n(290486),
    a = n(570833),
    o = n(493773);
let s = (0, i.U)(() => ({ riveAssetCache: new Map() }));
function l(e) {
    let t = s((t) => t.riveAssetCache.get(e));
    return (
        (0, o.ZP)(() => {
            if (s.getState().riveAssetCache.has(e)) return;
            let t = new r.RiveFile({ src: e }),
                n = () => {
                    t.init(),
                        t.on(r.EventType.Load, () => {
                            let n = {
                                status: 'loaded',
                                buffer: t.buffer
                            };
                            s.setState((t) => ({ riveAssetCache: t.riveAssetCache.set(e, n) }));
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
