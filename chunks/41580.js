n.d(t, { A: () => _ });
var i = n(64700),
    r = n(311907),
    a = n(451988),
    l = n(964486),
    s = n(430452),
    o = n(383501),
    d = n(927813),
    c = n(340913),
    u = n(731854);
let A = 2.5 * d.A.Millis.SECOND,
    h = +d.A.Millis.HOUR;
function _() {
    let [e, t] = i.useState(!1),
        n = (0, r.bG)([s.Ay], () => s.Ay.getMode() === u.TB.PUSH_TO_TALK),
        d = (0, r.bG)([o.A], () => null != o.A.getChannelId() && (o.A.getDuration() ?? Number.MAX_VALUE) < A),
        [_, m] = i.useState(!1),
        { showPTTJoinTooltip: p } = c.A.useConfig({ location: "usePTTJoinTooltip" }),
        g = i.useRef(new a.Ep()),
        E = i.useRef(new a.Ep());
    i.useEffect(() => {
        if (d && n && !e) {
            if ((c.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !p)) return;
            m(!0),
                t(!0),
                E.current.start(h, () => {
                    t(!1);
                }),
                g.current.start(A, () => {
                    m(!1);
                });
        }
        d || m(!1);
    }, [d, n, p, e]);
    let I = i.useCallback(() => {
        m(!1), g.current.stop();
    }, []);
    return (
        (0, l.l0)(() => {
            g.current.stop(), E.current.stop();
        }),
        { shouldShowTooltip: _, dismissTooltip: I }
    );
}
