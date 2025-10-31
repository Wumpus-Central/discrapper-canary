n.d(t, { Z: () => u });
var r = n(647438),
    i = n(268146),
    l = n(442837),
    o = n(846519),
    s = n(594190),
    a = n(59468);
let c = [i.vA.CAMERA],
    d = [i.vA.SCREEN, i.vA.WINDOW, i.vA.CAMERA];
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = (0, l.e7)([s.ZP], () => s.ZP.getRunningGames().length > 0),
        u = r.useRef(0),
        f = i ? 2000 : 1000,
        p = r.useRef(new o.V7());
    r.useEffect(() => {
        if (n) return;
        let r = p.current,
            i = u.current,
            l = {
                width: 376,
                height: 212,
                types: e ? c : d,
            };
        async function o() {
            let { screenSources: e, windowSources: n, cameraSources: s } = await (0, a.t)(l);
            u.current > i ||
                (t({
                    type: "set_source_candidates",
                    screenSources: e,
                    windowSources: n,
                    deviceSources: s,
                }),
                r.start(f, o));
        }
        return (
            o(),
            () => {
                (u.current += 1), r.stop();
            }
        );
    }, [t, f, e, n]);
}
