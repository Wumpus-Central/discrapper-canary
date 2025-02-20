n.d(t, { Z: () => A }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(704215),
    a = n(433517),
    s = n(705348),
    c = n(243778),
    u = n(360453),
    d = n(377743),
    p = n(834743),
    h = n(862099),
    g = n(704631),
    f = n(819792),
    m = n(919285),
    b = n(118470),
    _ = n(413307),
    E = n(849688),
    O = n(374023),
    N = n(661599),
    v = n(617899),
    y = n(8521),
    I = n(760326),
    C = n(785203),
    S = n(652785),
    T = n(921944);
function P(e) {
    e.stopPropagation();
}
function j(e) {
    var t;
    let { guild: n } = e,
        [u, h] = i.useState(null !== (t = a.K.get(S.Iv)) && void 0 !== t ? t : 0),
        f = (e) => {
            a.K.set(S.Iv, e), h(e);
        },
        m = (0, l.Wu)(S.HG, () =>
            S.XN.filter((e) => {
                let { store: t } = e;
                return null == t ? void 0 : t.channelNoticePredicate(n, u);
            }).map((e) => e.dismissibleContentType)
        );
    return (0, r.jsx)(c.ZP, {
        contentTypes: m,
        groupName: T.R.CHANNEL_NOTICES,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: i } = e,
                l = () => {
                    f(Date.now()), i(T.L.UNKNOWN);
                },
                a = (() => {
                    switch (t) {
                        case o.z.CHANNEL_NOTICE_HUBLINK:
                            return (0, r.jsx)(g.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case o.z.CHANNEL_NOTICE_INVITE:
                            return (0, r.jsx)(v.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case o.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                            return (0, r.jsx)(p.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case o.z.CHANNEL_NOTICE_QUICKSWITCHER:
                            return (0, r.jsx)(I.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case o.z.CHANNEL_NOTICE_GUILD_BANNER:
                            return (0, r.jsx)(d.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case o.z.LINKED_ROLE_ADMIN_GUILD:
                            return (0, r.jsx)(s.Z, {
                                guild: n,
                                markAsDismissed: () => i(T.L.UNKNOWN)
                            });
                        default:
                            return null;
                    }
                })();
            return null == a
                ? null
                : (0, r.jsx)('div', {
                      onContextMenu: P,
                      children: a
                  });
        }
    });
}
let A = (e) => {
    let { guild: t } = e;
    switch ((0, C.Z)(t)) {
        case C.R.ENABLE_PUBLIC_GUILD:
            return (0, r.jsx)(_.Z, { guild: t });
        case C.R.APPLIED_GUILD_BOOST_GRACE_PERIOD:
            return (0, r.jsx)(u.Z, { guild: t });
        case C.R.MAX_MEMBER_COUNT:
            return (0, r.jsx)(y.Z, { guild: t });
        case C.R.GUILD_LIVE_CHANNEL:
            return (0, r.jsx)(h.ZP, { guild: t });
        case C.R.GUILD_MFA_WARNING:
            return (0, r.jsx)(N.Z, { guild: t });
        case C.R.COMMANDS_MIGRATION:
            return (0, r.jsx)(m.Z, { guild: t });
        case C.R.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, r.jsx)(b.Z, { guild: t });
        case C.R.HUB_STUDY_ROOM:
            return (0, r.jsx)(f.Z, { guild: t });
        case C.R.SIGNUP:
            return (0, r.jsx)(E.Z, { guild: t });
    }
    return O.s.isDisallowPopupsSet() ? null : (0, r.jsx)(j, { guild: e.guild });
};
