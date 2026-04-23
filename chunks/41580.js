n.d(t, { A: () => m });
var i = n(64700),
    s = n(311907),
    l = n(451988),
    a = n(964486),
    r = n(430452),
    o = n(383501),
    d = n(927813),
    c = n(499156),
    u = n(731854);
let p = 2.5 * d.A.Millis.SECOND,
    h = +d.A.Millis.HOUR;
function m() {
    let [e, t] = i.useState(!1),
        n = (0, s.bG)([r.Ay], () => r.Ay.getMode() === u.TB.PUSH_TO_TALK),
        d = (0, s.bG)([o.A], () => null != o.A.getChannelId() && (o.A.getDuration() ?? Number.MAX_VALUE) < p),
        [m, _] = i.useState(!1),
        { showPTTJoinTooltip: A } = c.A.useConfig({ location: "usePTTJoinTooltip" }),
        f = i.useRef(new l.Ep()),
        g = i.useRef(new l.Ep());
    i.useEffect(() => {
        if (d && n && !e) {
            if ((c.A.getConfig({ location: "usePTTJoinTooltip:couldDisplayTooltip" }), !A)) return;
            _(!0),
                t(!0),
                g.current.start(h, () => {
                    t(!1);
                }),
                f.current.start(p, () => {
                    _(!1);
                });
        }
        d || _(!1);
    }, [d, n, A, e]);
    let x = i.useCallback(() => {
        _(!1), f.current.stop();
    }, []);
    return (
        (0, a.l0)(() => {
            f.current.stop(), g.current.stop();
        }),
        { shouldShowTooltip: m, dismissTooltip: x }
    );
}
