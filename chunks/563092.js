n.d(e, { _: () => N });
var i = n(54381),
    l = n(473749),
    s = n(481060),
    u = n(493683),
    r = n(915009),
    a = n(631885),
    o = n(509613),
    S = n(970013),
    T = n(313789),
    c = n(342386),
    E = n(122145),
    d = n(523044),
    g = n(56404),
    _ = n(388032),
    I = n(517319);
let N = (0, o.k4)(T.n.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_CATEGORY, {
    useTitle: () => _.intl.string(_.t["1Qn8iV"]),
    buildLayout: () => [E.Y, d.y, g.Z],
    useNotice: () => {
        let t = (0, r.LN)(),
            e = (0, a.ZM)(),
            n = l.useCallback(() => {
                (0, c.default)(), u.Z.openPrivateChannel({ recipientIds: e });
            }, [e]);
        return l.useMemo(() => {
            if (t)
                return {
                    type: S.v.INLINE_NOTICE,
                    noticeType: "info",
                    useText: () =>
                        _.intl.format(I.default.i284fU, {
                            hook: (t, e) =>
                                (0, i.jsx)(
                                    s.Anchor,
                                    {
                                        onClick: n,
                                        children: t,
                                    },
                                    e,
                                ),
                            count: e.length,
                        }),
                };
        }, [n, t, e.length]);
    },
});
