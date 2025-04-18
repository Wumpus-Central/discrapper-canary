n.d(t, { Z: () => c });
var r = n(192379),
    i = n(268146),
    l = n(846519),
    s = n(59468);
let a = [i.vA.CAMERA],
    o = [i.vA.SCREEN, i.vA.WINDOW, i.vA.CAMERA];
function c(e, t) {
    let n = r.useRef(new l.Xp());
    r.useEffect(() => {
        let r = n.current,
            i = {
                width: 376,
                height: 212,
                types: e ? a : o
            };
        return (
            (0, s.t)(i).then((e) => {
                let { screenSources: n, windowSources: r, cameraSources: i } = e;
                t({
                    type: 'set_source_candidates',
                    screenSources: n,
                    windowSources: r,
                    deviceSources: i
                });
            }),
            r.start(1000, async () => {
                let { screenSources: e, windowSources: n, cameraSources: r } = await (0, s.t)(i);
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
