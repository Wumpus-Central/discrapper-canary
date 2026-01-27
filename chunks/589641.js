n.d(t, {
    A: () => A,
    I: () => f,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(308528),
    a = n(171316),
    o = n(834981),
    c = n(558001),
    d = n(866945),
    u = n(933297),
    _ = n(12901),
    p = n(835002),
    m = n(985018),
    g = n(842130);

function A() {
    let e = (0, o.vx)();
    return (0, r.jsx)(d.e, {
        label: g.default.i284fU,
        labelHook: () => {
            (0, _.default)(),
                s.A.openPrivateChannel({
                    recipientIds: e,
                });
        },
        noticeType: p.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
        count: e.length,
    });
}

function f() {
    let e = (0, a.uM)(),
        t = (0, o.vx)(),
        n = i.useCallback(() => {
            (0, _.default)(),
                s.A.openPrivateChannel({
                    recipientIds: t,
                }),
                (0, c.N)(p.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, p.YX.LEARN_MORE);
        }, [t]),
        d = i.useCallback(() => {
            (0, c.N)(p.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, p.YX.VIEWED);
        }, []);
    return i.useMemo(() => {
        if (e)
            return {
                type: u.W.INLINE_NOTICE,
                noticeType: "info",
                trackView: d,
                useText: () =>
                    m.intl.format(g.default.i284fU, {
                        hook: (e, t) =>
                            (0, r.jsx)(
                                l.MzZ,
                                {
                                    onClick: n,
                                    children: e,
                                },
                                t,
                            ),
                        count: t.length,
                    }),
            };
    }, [n, e, t.length, d]);
}
