s.d(t, { A: () => u });
var r = s(64700),
    i = s(141931),
    n = s(311907),
    l = s(451988),
    a = s(15285),
    o = s(920281);
let c = [i.fS.CAMERA],
    d = [i.fS.SCREEN, i.fS.WINDOW, i.fS.CAMERA];
function u(e, t) {
    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = (0, n.bG)([a.Ay], () => a.Ay.getRunningGames().length > 0),
        u = r.useRef(0),
        f = i ? 2e3 : 1e3,
        h = r.useRef(new l.Ep());
    r.useEffect(() => {
        if (s) return;
        let r = h.current,
            i = u.current,
            n = { width: 447, height: 251, types: e ? c : d };
        async function l() {
            let { screenSources: e, windowSources: s, cameraSources: a } = await (0, o.d)(n);
            u.current > i ||
                (t({ type: "set_source_candidates", screenSources: e, windowSources: s, deviceSources: a }),
                r.start(f, l));
        }
        return (
            l(),
            () => {
                (u.current += 1), r.stop();
            }
        );
    }, [t, f, e, s]);
}
