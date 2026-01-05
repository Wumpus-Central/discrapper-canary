n.d(t, { Z: () => u });
var r = n(473749),
    i = n(268146),
    s = n(442837),
    l = n(846519),
    o = n(594190),
    c = n(59468);
let a = [i.vA.CAMERA],
    d = [i.vA.SCREEN, i.vA.WINDOW, i.vA.CAMERA];
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = (0, s.e7)([o.ZP], () => o.ZP.getRunningGames().length > 0),
        u = r.useRef(0),
        f = i ? 2000 : 1000,
        h = r.useRef(new l.V7());
    r.useEffect(() => {
        if (n) return;
        let r = h.current,
            i = u.current,
            s = {
                width: 447,
                height: 251,
                types: e ? a : d,
            };
        async function l() {
            let { screenSources: e, windowSources: n, cameraSources: o } = await (0, c.t)(s);
            u.current > i ||
                (t({
                    type: "set_source_candidates",
                    screenSources: e,
                    windowSources: n,
                    deviceSources: o,
                }),
                r.start(f, l));
        }
        return (
            l(),
            () => {
                (u.current += 1), r.stop();
            }
        );
    }, [t, f, e, n]);
}
