n.d(t, { Z: () => f });
var r = n(647438),
    i = n(268146),
    l = n(442837),
    s = n(846519),
    o = n(594190),
    a = n(869580),
    c = n(59468);
let d = [i.vA.CAMERA],
    u = [i.vA.SCREEN, i.vA.WINDOW, i.vA.CAMERA];
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        { previewSizeMultiplier: i } = (0, a.j)({ location: "usePollSources" }),
        f = (0, l.e7)([o.ZP], () => o.ZP.getRunningGames().length > 0),
        m = r.useRef(0),
        h = f ? 2000 : 1000,
        p = r.useRef(new s.V7());
    r.useEffect(() => {
        if (n) return;
        let r = p.current,
            l = m.current,
            s = {
                width: 376 * i,
                height: 212 * i,
                types: e ? d : u,
            };
        async function o() {
            let { screenSources: e, windowSources: n, cameraSources: i } = await (0, c.t)(s);
            m.current > l ||
                (t({
                    type: "set_source_candidates",
                    screenSources: e,
                    windowSources: n,
                    deviceSources: i,
                }),
                r.start(h, o));
        }
        return (
            o(),
            () => {
                (m.current += 1), r.stop();
            }
        );
    }, [t, h, e, n, i]);
}
