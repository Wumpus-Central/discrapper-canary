r.d(t, { A: () => f });
var n = r(64700),
    l = r(141931),
    s = r(311907),
    i = r(451988),
    a = r(15285),
    c = r(920281);
let o = [l.fS.CAMERA],
    d = [l.fS.SCREEN, l.fS.WINDOW, l.fS.CAMERA];
function f(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = (0, s.bG)([a.Ay], () => a.Ay.getRunningGames().length > 0),
        f = n.useRef(0),
        u = l ? 2000 : 1000,
        h = n.useRef(new i.Ep());
    n.useEffect(() => {
        if (r) return;
        let n = h.current,
            l = f.current,
            s = {
                width: 447,
                height: 251,
                types: e ? o : d,
            };
        async function i() {
            let { screenSources: e, windowSources: r, cameraSources: a } = await (0, c.d)(s);
            f.current > l ||
                (t({
                    type: "set_source_candidates",
                    screenSources: e,
                    windowSources: r,
                    deviceSources: a,
                }),
                n.start(u, i));
        }
        return (
            i(),
            () => {
                (f.current += 1), n.stop();
            }
        );
    }, [t, u, e, r]);
}
