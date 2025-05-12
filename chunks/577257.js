n.d(t, { Z: () => c });
var r = n(73800),
    l = n(268146),
    i = n(846519),
    s = n(59468);
let o = [l.vA.CAMERA],
    a = [l.vA.SCREEN, l.vA.WINDOW, l.vA.CAMERA];
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = r.useRef(new i.Xp());
    r.useEffect(() => {
        if (n) return;
        let r = l.current,
            i = {
                width: 376,
                height: 212,
                types: e ? o : a
            };
        return (
            (0, s.t)(i).then((e) => {
                let { screenSources: n, windowSources: r, cameraSources: l } = e;
                t({
                    type: 'set_source_candidates',
                    screenSources: n,
                    windowSources: r,
                    deviceSources: l
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
    }, [t, e, n]);
}
