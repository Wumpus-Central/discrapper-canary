n.d(e, { _: () => N });
var i = n(54381),
    l = n(473749),
    s = n(481060),
    u = n(493683),
    r = n(915009),
    a = n(631885),
    o = n(509613),
    T = n(970013),
    S = n(313789),
    c = n(342386),
    E = n(122145),
    d = n(523044),
    _ = n(56404),
    g = n(388032),
    I = n(517319);
let N = (0, o.k4)(S.n.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_CATEGORY, {
    useTitle: () => g.intl.string(g.t["1Qn8iV"]),
    buildLayout: () => [E.Y, d.y, _.Z],
    useNotice: () => {
        let t = (0, r.LN)(),
            e = (0, a.ZM)(),
            n = l.useCallback(() => {
                (0, c.default)(), u.Z.openPrivateChannel({ recipientIds: e });
            }, [e]);
        return l.useMemo(() => {
            if (t)
                return {
                    type: T.v.INLINE_NOTICE,
                    noticeType: "info",
                    useText: () =>
                        g.intl.format(I.default.i284fU, {
                            hook: (t, e) =>
                                (0, i.jsx)(
                                    s.eee,
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
