n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
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
    f = n(919285),
    _ = n(118470),
    E = n(413307),
    I = n(849688),
    C = n(374023),
    N = n(661599),
    v = n(617899),
    S = n(8521),
    T = n(760326),
    A = n(785203),
    b = n(652785),
    Z = n(921944);
function x(e) {
    e.stopPropagation();
}
function L(e) {
    var t;
    let { guild: n } = e,
        [d, m] = r.useState(null !== (t = s.K.get(b.Iv)) && void 0 !== t ? t : 0),
        g = (e) => {
            s.K.set(b.Iv, e), m(e);
        },
        f = (0, l.Wu)(b.HG, () =>
            b.XN.filter((e) => {
                let { store: t } = e;
                return null == t ? void 0 : t.channelNoticePredicate(n, d);
            }).map((e) => e.dismissibleContentType)
        );
    return (0, i.jsx)(c.ZP, {
        contentTypes: f,
        groupName: Z.R.CHANNEL_NOTICES,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e,
                l = () => {
                    g(Date.now()), r(Z.L.UNKNOWN);
                },
                s = (() => {
                    switch (t) {
                        case a.z.CHANNEL_NOTICE_HUBLINK:
                            return (0, i.jsx)(p.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.CHANNEL_NOTICE_INVITE:
                            return (0, i.jsx)(v.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                            return (0, i.jsx)(h.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.CHANNEL_NOTICE_QUICKSWITCHER:
                            return (0, i.jsx)(T.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.CHANNEL_NOTICE_GUILD_BANNER:
                            return (0, i.jsx)(u.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.LINKED_ROLE_ADMIN_GUILD:
                            return (0, i.jsx)(o.Z, {
                                guild: n,
                                markAsDismissed: () => r(Z.L.UNKNOWN)
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
t.Z = (e) => {
    let { guild: t } = e;
    switch ((0, A.Z)(t)) {
        case A.R.ENABLE_PUBLIC_GUILD:
            return (0, i.jsx)(E.Z, { guild: t });
        case A.R.APPLIED_GUILD_BOOST_GRACE_PERIOD:
            return (0, i.jsx)(d.Z, { guild: t });
        case A.R.MAX_MEMBER_COUNT:
            return (0, i.jsx)(S.Z, { guild: t });
        case A.R.GUILD_LIVE_CHANNEL:
            return (0, i.jsx)(m.ZP, { guild: t });
        case A.R.GUILD_MFA_WARNING:
            return (0, i.jsx)(N.Z, { guild: t });
        case A.R.COMMANDS_MIGRATION:
            return (0, i.jsx)(f.Z, { guild: t });
        case A.R.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, i.jsx)(_.Z, { guild: t });
        case A.R.HUB_STUDY_ROOM:
            return (0, i.jsx)(g.Z, { guild: t });
        case A.R.SIGNUP:
            return (0, i.jsx)(I.Z, { guild: t });
    }
    return C.s.isDisallowPopupsSet() ? null : (0, i.jsx)(L, { guild: e.guild });
};
