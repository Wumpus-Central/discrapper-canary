s.d(t, { A: () => u });
var i = s(64700),
    r = s(141931),
    n = s(311907),
    l = s(451988),
    a = s(15285),
    o = s(920281);
let c = [r.fS.CAMERA],
    d = [r.fS.SCREEN, r.fS.WINDOW, r.fS.CAMERA];
function u(e, t) {
    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = (0, n.bG)([a.Ay], () => a.Ay.getRunningGames().length > 0),
        u = i.useRef(0),
        f = r ? 2e3 : 1e3,
        h = i.useRef(new l.Ep());
    i.useEffect(() => {
        if (s) return;
        let i = h.current,
            r = u.current,
            n = { width: 447, height: 251, types: e ? c : d };
        async function l() {
            let { screenSources: e, windowSources: s, cameraSources: a } = await (0, o.d)(n);
            u.current > r ||
                (t({ type: "set_source_candidates", screenSources: e, windowSources: s, deviceSources: a }),
                i.start(f, l));
        }
        return (
            l(),
            () => {
                (u.current += 1), i.stop();
            }
        );
    }, [t, f, e, s]);
}
