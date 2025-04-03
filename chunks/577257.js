n.d(t, { Z: () => c });
var r = n(192379),
    l = n(268146),
    i = n(846519),
    s = n(59468);
let o = [l.vA.CAMERA],
    a = [l.vA.SCREEN, l.vA.WINDOW, l.vA.CAMERA];
function c(e, t) {
    let n = r.useRef(new i.Xp());
    r.useEffect(() => {
        let r = n.current,
            l = {
                width: 376,
                height: 212,
                types: e ? o : a
            };
        return (
            (0, s.t)(l).then((e) => {
                let { screenSources: n, windowSources: r, cameraSources: l } = e;
                t({
                    type: 'set_source_candidates',
                    screenSources: n,
                    windowSources: r,
                    deviceSources: l
                });
            }),
            r.start(1000, async () => {
                let { screenSources: e, windowSources: n, cameraSources: r } = await (0, s.t)(l);
                t({
                    type: 'set_source_candidates',
                    screenSources: e,
                    windowSources: n,
                    deviceSources: r
                });
            }),
            () => {
                r.stop();
            }
        );
    }, [t, e]);
}
