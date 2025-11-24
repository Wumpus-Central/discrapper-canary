n.d(e, { Z: () => S });
var i = n(473749),
    l = n(442837),
    r = n(509613),
    u = n(28682),
    s = n(292959),
    a = n(313789),
    o = n(518596),
    c = n(103644),
    E = n(320851),
    d = n(388032);
let S = (0, r.k4)(a.n.SOUNDS_CATEGORY, {
    useTitle: () => d.intl.string(d.t.MKWyKc),
    useNotice: function () {
        let t = (0, l.e7)([s.Z], () => s.Z.getDisableAllSounds());
        return i.useMemo(() => {
            if (t)
                return {
                    type: u.y1.INLINE_NOTICE,
                    noticeType: "warning",
                    useText: () =>
                        d.intl.format(d.t.fRvixS, {
                            onClick: () => (0, o.openUserSettings)(a.n.NOTIFICATIONS_SOUNDS_CATEGORY),
                        }),
                };
        }, [t]);
    },
    buildLayout: () => [E.Z, c.X],
});
