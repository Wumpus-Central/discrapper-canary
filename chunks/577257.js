n.d(t, { Z: () => u });
var r = n(473749),
    i = n(268146),
    l = n(442837),
    s = n(846519),
    o = n(594190),
    a = n(59468);
let c = [i.vA.CAMERA],
    d = [i.vA.SCREEN, i.vA.WINDOW, i.vA.CAMERA];
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = (0, l.e7)([o.ZP], () => o.ZP.getRunningGames().length > 0),
        u = r.useRef(0),
        f = i ? 2000 : 1000,
        p = r.useRef(new s.V7());
    r.useEffect(() => {
        if (n) return;
        let r = p.current,
            i = u.current,
            l = {
                width: 447,
                height: 251,
                types: e ? c : d,
            };
        async function s() {
            let { screenSources: e, windowSources: n, cameraSources: o } = await (0, a.t)(l);
            u.current > i ||
                (t({
                    type: "set_source_candidates",
                    screenSources: e,
                    windowSources: n,
                    deviceSources: o,
                }),
                r.start(f, s));
        }
        return (
            s(),
            () => {
                (u.current += 1), r.stop();
            }
        );
    }, [t, f, e, n]);
}
