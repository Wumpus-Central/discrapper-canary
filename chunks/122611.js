n.d(t, { Z: () => y }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(704215),
    s = n(433517),
    o = n(705348),
    c = n(243778),
    d = n(360453),
    u = n(377743),
    h = n(834743),
    m = n(862099),
    p = n(704631),
    g = n(819792),
    _ = n(919285),
    f = n(118470),
    E = n(413307),
    I = n(849688),
    C = n(374023),
    N = n(661599),
    v = n(617899),
    T = n(8521),
    S = n(760326),
    Z = n(785203),
    A = n(652785),
    b = n(921944);
function x(e) {
    e.stopPropagation();
}
function L(e) {
    var t;
    let { guild: n } = e,
        [d, m] = l.useState(null !== (t = s.K.get(A.Iv)) && void 0 !== t ? t : 0),
        g = (e) => {
            s.K.set(A.Iv, e), m(e);
        },
        _ = (0, r.Wu)(A.HG, () =>
            A.XN.filter((e) => {
                let { store: t } = e;
                return null == t ? void 0 : t.channelNoticePredicate(n, d);
            }).map((e) => e.dismissibleContentType)
        );
    return (0, i.jsx)(c.ZP, {
        contentTypes: _,
        groupName: b.R.CHANNEL_NOTICES,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: l } = e,
                r = () => {
                    g(Date.now()), l(b.L.UNKNOWN);
                },
                s = (() => {
                    switch (t) {
                        case a.z.CHANNEL_NOTICE_HUBLINK:
                            return (0, i.jsx)(p.Z, {
                                guild: n,
                                markAsDismissed: r
                            });
                        case a.z.CHANNEL_NOTICE_INVITE:
                            return (0, i.jsx)(v.Z, {
                                guild: n,
                                markAsDismissed: r
                            });
                        case a.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                            return (0, i.jsx)(h.Z, {
                                guild: n,
                                markAsDismissed: r
                            });
                        case a.z.CHANNEL_NOTICE_QUICKSWITCHER:
                            return (0, i.jsx)(S.Z, {
                                guild: n,
                                markAsDismissed: r
                            });
                        case a.z.CHANNEL_NOTICE_GUILD_BANNER:
                            return (0, i.jsx)(u.Z, {
                                guild: n,
                                markAsDismissed: r
                            });
                        case a.z.LINKED_ROLE_ADMIN_GUILD:
                            return (0, i.jsx)(o.Z, {
                                guild: n,
                                markAsDismissed: () => l(b.L.UNKNOWN)
                            });
                        default:
                            return null;
                    }
                })();
            return null == s
                ? null
                : (0, i.jsx)('div', {
                      onContextMenu: x,
                      children: s
                  });
        }
    });
}
let y = (e) => {
    let { guild: t } = e;
    switch ((0, Z.Z)(t)) {
        case Z.R.ENABLE_PUBLIC_GUILD:
            return (0, i.jsx)(E.Z, { guild: t });
        case Z.R.APPLIED_GUILD_BOOST_GRACE_PERIOD:
            return (0, i.jsx)(d.Z, { guild: t });
        case Z.R.MAX_MEMBER_COUNT:
            return (0, i.jsx)(T.Z, { guild: t });
        case Z.R.GUILD_LIVE_CHANNEL:
            return (0, i.jsx)(m.ZP, { guild: t });
        case Z.R.GUILD_MFA_WARNING:
            return (0, i.jsx)(N.Z, { guild: t });
        case Z.R.COMMANDS_MIGRATION:
            return (0, i.jsx)(_.Z, { guild: t });
        case Z.R.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, i.jsx)(f.Z, { guild: t });
        case Z.R.HUB_STUDY_ROOM:
            return (0, i.jsx)(g.Z, { guild: t });
        case Z.R.SIGNUP:
            return (0, i.jsx)(I.Z, { guild: t });
    }
    return C.s.isDisallowPopupsSet() ? null : (0, i.jsx)(L, { guild: e.guild });
};
