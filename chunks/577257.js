n.d(t, { Z: () => c });
var r = n(73800),
    i = n(268146),
    l = n(846519),
    s = n(59468);
let o = [i.vA.CAMERA],
    a = [i.vA.SCREEN, i.vA.WINDOW, i.vA.CAMERA];
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = r.useRef(new l.Xp());
    r.useEffect(() => {
        if (n) return;
        let r = i.current,
            l = {
                width: 376,
                height: 212,
                types: e ? o : a
            };
        return (
            (0, s.t)(l).then((e) => {
                let { screenSources: n, windowSources: r, cameraSources: i } = e;
                t({
                    type: 'set_source_candidates',
                    screenSources: n,
                    windowSources: r,
                    deviceSources: i
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
    }, [t, e, n]);
}
