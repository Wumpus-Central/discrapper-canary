(n.d(t, { Z: () => j }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(704215),
    o = n(433517),
    s = n(705348),
    c = n(243778),
    u = n(377743),
    d = n(834743),
    p = n(862099),
    h = n(704631),
    f = n(819792),
    g = n(919285),
    m = n(118470),
    b = n(413307),
    _ = n(374023),
    O = n(661599),
    E = n(617899),
    y = n(8521),
    v = n(760326),
    I = n(785203),
    C = n(652785),
    S = n(921944);
let N = new Set([a.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, a.z.CHANNEL_NOTICE_GUILD_BANNER]);
function T(e) {
    e.stopPropagation();
}
function P(e) {
    var t;
    let { guild: n } = e,
        [p, f] = i.useState(null != (t = o.K.get(C.Iv)) ? t : 0),
        g = (e) => {
            (o.K.set(C.Iv, e), f(e));
        },
        m = (0, l.Wu)(
            C.HG,
            () =>
                C.XN.filter((e) => {
                    let { dismissibleContentType: t, store: r } = e;
                    return !0 === (null == r ? void 0 : r.channelNoticePredicate(n, p)) && !N.has(t);
                }).map((e) => e.dismissibleContentType),
            [n, p]
        );
    return (0, r.jsx)(c.ZP, {
        contentTypes: m,
        groupName: S.R.CHANNEL_NOTICES,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: i } = e,
                l = () => {
                    (g(Date.now()), i(S.L.UNKNOWN));
                },
                o = (() => {
                    switch (t) {
                        case a.z.CHANNEL_NOTICE_HUBLINK:
                            return (0, r.jsx)(h.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.CHANNEL_NOTICE_INVITE:
                            return (0, r.jsx)(E.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                            return (0, r.jsx)(d.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.CHANNEL_NOTICE_QUICKSWITCHER:
                            return (0, r.jsx)(v.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.CHANNEL_NOTICE_GUILD_BANNER:
                            return (0, r.jsx)(u.Z, {
                                guild: n,
                                markAsDismissed: l
                            });
                        case a.z.LINKED_ROLE_ADMIN_GUILD:
                            return (0, r.jsx)(s.Z, {
                                guild: n,
                                markAsDismissed: () => i(S.L.UNKNOWN)
                            });
                        default:
                            return null;
                    }
                })();
            return null == o
                ? null
                : (0, r.jsx)('div', {
                      onContextMenu: T,
                      children: o
                  });
        }
    });
}
let j = (e) => {
    let { guild: t } = e;
    switch ((0, I.Z)(t)) {
        case I.R.ENABLE_PUBLIC_GUILD:
            return (0, r.jsx)(b.Z, { guild: t });
        case I.R.MAX_MEMBER_COUNT:
            return (0, r.jsx)(y.Z, { guild: t });
        case I.R.GUILD_LIVE_CHANNEL:
            return (0, r.jsx)(p.ZP, { guild: t });
        case I.R.GUILD_MFA_WARNING:
            return (0, r.jsx)(O.Z, { guild: t });
        case I.R.COMMANDS_MIGRATION:
            return (0, r.jsx)(g.Z, { guild: t });
        case I.R.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, r.jsx)(m.Z, { guild: t });
        case I.R.HUB_STUDY_ROOM:
            return (0, r.jsx)(f.Z, { guild: t });
    }
    return _.s.isDisallowPopupsSet() ? null : (0, r.jsx)(P, { guild: e.guild });
};
