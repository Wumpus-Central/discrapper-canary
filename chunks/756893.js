n.d(e, { g: () => T });
var i = n(473749),
    l = n(442837),
    s = n(509613),
    u = n(970013),
    r = n(292959),
    a = n(313789),
    o = n(518596),
    c = n(103644),
    d = n(320851),
    S = n(388032);
let T = (0, s.k4)(a.n.SOUNDS_CATEGORY, {
    useTitle: () => S.intl.string(S.t.MKWyKc),
    useNotice: function () {
        let t = (0, l.e7)([r.Z], () => r.Z.getDisableAllSounds());
        return i.useMemo(() => {
            if (t)
                return {
                    type: u.v.INLINE_NOTICE,
                    noticeType: "warning",
                    useText: () =>
                        S.intl.format(S.t.fRvixS, {
                            onClick: () => (0, o.openUserSettings)(a.n.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                };
        }, [t]);
    },
    buildLayout: () => [d.J, c.X],
});
