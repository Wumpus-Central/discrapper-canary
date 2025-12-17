n.d(e, { g: () => E });
var i = n(473749),
    l = n(442837),
    s = n(509613),
    u = n(970013),
    r = n(292959),
    a = n(313789),
    o = n(518596),
    S = n(103644),
    T = n(320851),
    c = n(388032);
let E = (0, s.k4)(a.n.SOUNDS_CATEGORY, {
    useTitle: () => c.intl.string(c.t.MKWyKc),
    useNotice: function () {
        let t = (0, l.e7)([r.Z], () => r.Z.getDisableAllSounds());
        return i.useMemo(() => {
            if (t)
                return {
                    type: u.v.INLINE_NOTICE,
                    noticeType: "warning",
                    useText: () =>
                        c.intl.format(c.t.fRvixS, {
                            onClick: () => (0, o.openUserSettings)(a.n.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                };
        }, [t]);
    },
    buildLayout: () => [T.J, S.X],
});
