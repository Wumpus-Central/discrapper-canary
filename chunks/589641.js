n.d(t, { A: () => E, I: () => h });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(308528),
    l = n(171316),
    o = n(834981),
    c = n(558001),
    d = n(866945),
    u = n(933297),
    _ = n(12901),
    m = n(835002),
    A = n(985018),
    g = n(842130);
function E() {
    let e = (0, o.vx)();
    return (0, i.jsx)(d.e, {
        label: g.default.i284fU,
        labelHook: () => {
            (0, _.default)(), a.A.openPrivateChannel({ recipientIds: e });
        },
        noticeType: m.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
        count: e.length,
    });
}
function h() {
    let e = (0, l.uM)(),
        t = (0, o.vx)(),
        n = s.useCallback(() => {
            (0, _.default)(),
                a.A.openPrivateChannel({ recipientIds: t }),
                (0, c.N)(m.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, m.YX.LEARN_MORE);
        }, [t]),
        d = s.useCallback(() => {
            (0, c.N)(m.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, m.YX.VIEWED);
        }, []);
    return s.useMemo(() => {
        if (e)
            return {
                type: u.W.INLINE_NOTICE,
                noticeType: "info",
                trackView: d,
                useText: () =>
                    A.intl.format(g.default.i284fU, {
                        hook: (e, t) => (0, i.jsx)(r.MzZ, { onClick: n, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [n, e, t.length, d]);
}
