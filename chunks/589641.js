n.d(t, {
    A: () => m,
    I: () => g,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(308528),
    o = n(171316),
    l = n(834981),
    c = n(558001),
    u = n(866945),
    d = n(933297),
    f = n(12901),
    p = n(835002),
    _ = n(985018),
    h = n(842130);
function m() {
    let e = (0, l.vx)(),
        t = () => {
            (0, f.default)(), s.A.openPrivateChannel({ recipientIds: e });
        };
    return (0, r.jsx)(u.e, {
        label: h.default.i284fU,
        labelHook: t,
        noticeType: p.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
        count: e.length,
    });
}
function g() {
    let e = (0, o.uM)(),
        t = (0, l.vx)(),
        n = i.useCallback(() => {
            (0, f.default)(),
                s.A.openPrivateChannel({ recipientIds: t }),
                (0, c.N)(p.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, p.YX.LEARN_MORE);
        }, [t]),
        u = i.useCallback(() => {
            (0, c.N)(p.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, p.YX.VIEWED);
        }, []);
    return i.useMemo(() => {
        if (e)
            return {
                type: d.W.INLINE_NOTICE,
                noticeType: "info",
                trackView: u,
                useText: () =>
                    _.intl.format(h.default.i284fU, {
                        hook: (e, t) =>
                            (0, r.jsx)(
                                a.MzZ,
                                {
                                    onClick: n,
                                    children: e,
                                },
                                t,
                            ),
                        count: t.length,
                    }),
            };
    }, [n, e, t.length, u]);
}
