i.d(e, { t: () => S });
var n = i(311907),
    l = i(181079),
    s = i(422258),
    r = i(419954),
    a = i(287809),
    u = i(474090),
    o = i(780964),
    d = i(788868),
    A = i(985018),
    T = i(665606);
let S = (0, r.zD)(o.X.CHAT_FAVORITES_TOGGLE, {
    useTitle: () => A.intl.string(T.default["0h2CcM"]),
    useSubtitle: () => A.intl.string(T.default.IF7iE0),
    useValue: () => (0, n.bG)([l.A], () => l.A.favoriteGuildEnabled),
    useDisabled: () =>
        (0, n.bG)([a.default], () => {
            let t = a.default.getCurrentUser();
            return null == t || !u.Ay.isPremiumExactly(t, d.PremiumTypes.TIER_2);
        }),
    setValue: s.tV,
});
