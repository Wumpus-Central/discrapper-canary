n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    l = n(451988),
    a = n(964486),
    s = n(430452),
    o = n(383501),
    c = n(927813),
    u = n(340913),
    d = n(731854);
let p = 2.5 * c.A.Millis.SECOND,
    f = +c.A.Millis.HOUR;

function h() {
    let [e, t] = r.useState(!1),
        n = (0, i.bG)([s.A], () => s.A.getMode() === d.TB.PUSH_TO_TALK),
        c = (0, i.bG)([o.A], () => {
            var e;
            return null != o.A.getChannelId() && (null != (e = o.A.getDuration()) ? e : Number.MAX_VALUE) < p;
        }),
        [h, A] = r.useState(!1),
        { showPTTJoinTooltip: g } = u.A.useConfig({
            location: "usePTTJoinTooltip",
        }),
        m = r.useRef(new l.Ep()),
        b = r.useRef(new l.Ep());
    r.useEffect(() => {
        if (c && n && !e) {
            if (
                (u.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip",
                }),
                !g)
            )
                return;
            A(!0),
                t(!0),
                b.current.start(f, () => {
                    t(!1);
                }),
                m.current.start(p, () => {
                    A(!1);
                });
        }
        c || A(!1);
    }, [c, n, g, e]);
    let _ = r.useCallback(() => {
        A(!1), m.current.stop();
    }, []);
    return (
        (0, a.l0)(() => {
            m.current.stop(), b.current.stop();
        }),
        {
            shouldShowTooltip: h,
            dismissTooltip: _,
        }
    );
}
