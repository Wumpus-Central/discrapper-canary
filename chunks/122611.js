n.d(t, { Z: () => x }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(704215),
    o = n(433517),
    s = n(705348),
    c = n(243778),
    u = n(360453),
    d = n(377743),
    p = n(834743),
    h = n(862099),
    f = n(704631),
    g = n(819792),
    m = n(919285),
    b = n(50101),
    _ = n(118470),
    E = n(413307),
    O = n(849688),
    N = n(374023),
    y = n(661599),
    I = n(617899),
    v = n(8521),
    C = n(760326),
    S = n(785203),
    T = n(652785),
    P = n(921944);
let j = new Set([a.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, a.z.CHANNEL_NOTICE_GUILD_BANNER]);
function A(e) {
    e.stopPropagation();
}
function Z(e) {
    var t;
    let { guild: n } = e,
        [u, h] = i.useState(null != (t = o.K.get(T.Iv)) ? t : 0),
        g = (e) => {
            o.K.set(T.Iv, e), h(e);
        },
        m = (0, b.Ek)(n.id, 'ChannelNoticesGuard'),
        _ = (0, l.Wu)(
            T.HG,
            () =>
                T.XN.filter((e) => {
                    let { dismissibleContentType: t, store: r } = e;
                    return !0 === (null == r ? void 0 : r.channelNoticePredicate(n, u)) && (!j.has(t) || !m);
                }).map((e) => e.dismissibleContentType),
            [m, n, u]
        );
    return (0, r.jsx)(c.ZP, {
        contentTypes: _,
        groupName: P.R.CHANNEL_NOTICES,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: i } = e,
                l = () => {
                    g(Date.now()), i(P.L.UNKNOWN);
                },
                o = (() => {
                    switch (t) {
                        case a.z.CHANNEL_NOTICE_HUBLINK:
                            return (0, r.jsx)(f.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.CHANNEL_NOTICE_INVITE:
                            return (0, r.jsx)(I.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                            return (0, r.jsx)(p.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.CHANNEL_NOTICE_QUICKSWITCHER:
                            return (0, r.jsx)(C.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.CHANNEL_NOTICE_GUILD_BANNER:
                            return (0, r.jsx)(d.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.LINKED_ROLE_ADMIN_GUILD:
                            return (0, r.jsx)(s.Z, {
                                guild: n,
                                markAsDismissed: () => i(P.L.UNKNOWN)
                            });
                        default:
                            return null;
                    }
                })();
            return null == o
                ? null
                : (0, r.jsx)('div', {
                      onContextMenu: A,
                      children: o
                  });
        }
    });
}
let x = (e) => {
    let { guild: t } = e;
    switch ((0, S.Z)(t)) {
        case S.R.ENABLE_PUBLIC_GUILD:
            return (0, r.jsx)(E.Z, { guild: t });
        case S.R.APPLIED_GUILD_BOOST_GRACE_PERIOD:
            return (0, r.jsx)(u.Z, { guild: t });
        case S.R.MAX_MEMBER_COUNT:
            return (0, r.jsx)(v.Z, { guild: t });
        case S.R.GUILD_LIVE_CHANNEL:
            return (0, r.jsx)(h.ZP, { guild: t });
        case S.R.GUILD_MFA_WARNING:
            return (0, r.jsx)(y.Z, { guild: t });
        case S.R.COMMANDS_MIGRATION:
            return (0, r.jsx)(m.Z, { guild: t });
        case S.R.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, r.jsx)(_.Z, { guild: t });
        case S.R.HUB_STUDY_ROOM:
            return (0, r.jsx)(g.Z, { guild: t });
        case S.R.SIGNUP:
            return (0, r.jsx)(O.Z, { guild: t });
    }
    return N.s.isDisallowPopupsSet() ? null : (0, r.jsx)(Z, { guild: e.guild });
};
