n.d(e, { g: () => E });
var i = n(473749),
    l = n(442837),
    s = n(509613),
    r = n(970013),
    u = n(292959),
    a = n(313789),
    o = n(518596),
    c = n(103644),
    d = n(320851),
    T = n(388032);
let E = (0, s.k4)(a.n.SOUNDS_CATEGORY, {
    useTitle: () => T.intl.string(T.t.MKWyKc),
    useNotice: function () {
        let t = (0, l.e7)([u.Z], () => u.Z.getDisableAllSounds());
        return i.useMemo(() => {
            if (t)
                return {
                    type: r.v.INLINE_NOTICE,
                    noticeType: "warning",
                    useText: () =>
                        T.intl.format(T.t.fRvixS, {
                            onClick: () => (0, o.openUserSettings)(a.n.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                };
        }, [t]);
    },
    buildLayout: () => [d.J, c.X],
});
