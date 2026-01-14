n.d(t, {
    Z: () => h,
    a: () => g,
});
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(493683),
    s = n(915009),
    l = n(631885),
    c = n(711703),
    u = n(907995),
    d = n(970013),
    f = n(342386),
    p = n(484710),
    _ = n(388032),
    m = n(517319);
function h() {
    let e = (0, l.ZM)(),
        t = () => {
            (0, f.default)(), o.Z.openPrivateChannel({ recipientIds: e });
        };
    return (0, r.jsx)(u.f, {
        label: m.default.i284fU,
        labelHook: t,
        noticeType: p.nq.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
        count: e.length,
    });
}
function g() {
    let e = (0, s.LN)(),
        t = (0, l.ZM)(),
        n = i.useCallback(() => {
            (0, f.default)(),
                o.Z.openPrivateChannel({ recipientIds: t }),
                (0, c.l)(p.nq.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, p.up.LEARN_MORE);
        }, [t]),
        u = i.useCallback(() => {
            (0, c.l)(p.nq.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, p.up.VIEWED);
        }, []);
    return i.useMemo(() => {
        if (e)
            return {
                type: d.v.INLINE_NOTICE,
                noticeType: "info",
                trackView: u,
                useText: () =>
                    _.intl.format(m.default.i284fU, {
                        hook: (e, t) =>
                            (0, r.jsx)(
                                a.eee,
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
