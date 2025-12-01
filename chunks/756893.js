n.d(e, { Z: () => S });
var i = n(473749),
    r = n(442837),
    l = n(509613),
    u = n(28682),
    s = n(292959),
    a = n(313789),
    o = n(518596),
    c = n(103644),
    d = n(320851),
    E = n(388032);
let S = (0, l.k4)(a.n.SOUNDS_CATEGORY, {
    useTitle: () => E.intl.string(E.t.MKWyKc),
    useNotice: function () {
        let t = (0, r.e7)([s.Z], () => s.Z.getDisableAllSounds());
        return i.useMemo(() => {
            if (t)
                return {
                    type: u.y1.INLINE_NOTICE,
                    noticeType: "warning",
                    useText: () =>
                        E.intl.format(E.t.fRvixS, {
                            onClick: () => (0, o.openUserSettings)(a.n.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                };
        }, [t]);
    },
    buildLayout: () => [d.Z, c.X],
});
