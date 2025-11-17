n.d(t, { Z: () => P }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(704215),
    s = n(433517),
    o = n(705348),
    c = n(243778),
    u = n(377743),
    d = n(834743),
    p = n(862099),
    f = n(704631),
    h = n(819792),
    g = n(919285),
    m = n(118470),
    _ = n(413307),
    b = n(374023),
    E = n(661599),
    O = n(617899),
    y = n(8521),
    v = n(760326),
    I = n(536687),
    C = n(652785),
    S = n(921944);
let T = new Set([a.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, a.z.CHANNEL_NOTICE_GUILD_BANNER]);
function N(e) {
    e.stopPropagation();
}
function j(e) {
    var t;
    let { guild: n } = e,
        [p, h] = i.useState(null != (t = s.K.get(C.Iv)) ? t : 0),
        g = (0, l.Wu)(
            C.HG,
            () =>
                C.XN.filter((e) => {
                    let { dismissibleContentType: t, store: r } = e;
                    return !0 === (null == r ? void 0 : r.channelNoticePredicate(n, p)) && !T.has(t);
                }).map((e) => e.dismissibleContentType),
            [n, p],
        );
    return (0, r.jsx)(c.ZP, {
        contentTypes: g,
        groupName: S.R.CHANNEL_NOTICES,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: i } = e,
                l = () => {
                    var e;
                    (e = Date.now()), s.K.set(C.Iv, e), h(e), i(S.L.UNKNOWN);
                },
                c = (() => {
                    switch (t) {
                        case a.z.CHANNEL_NOTICE_HUBLINK:
                            return (0, r.jsx)(f.Z, {
                                guild: n,
                                markAsDismissed: l,
                            });
                        case a.z.CHANNEL_NOTICE_INVITE:
                            return (0, r.jsx)(O.Z, {
                                guild: n,
                                markAsDismissed: l,
                            });
                        case a.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                            return (0, r.jsx)(d.Z, {
                                guild: n,
                                markAsDismissed: l,
                            });
                        case a.z.CHANNEL_NOTICE_QUICKSWITCHER:
                            return (0, r.jsx)(v.Z, {
                                guild: n,
                                markAsDismissed: l,
                            });
                        case a.z.CHANNEL_NOTICE_GUILD_BANNER:
                            return (0, r.jsx)(u.Z, {
                                guild: n,
                                markAsDismissed: l,
                            });
                        case a.z.LINKED_ROLE_ADMIN_GUILD:
                            return (0, r.jsx)(o.Z, {
                                guild: n,
                                markAsDismissed: () => i(S.L.UNKNOWN),
                            });
                        default:
                            return null;
                    }
                })();
            return null == c
                ? null
                : (0, r.jsx)("div", {
                      onContextMenu: N,
                      children: c,
                  });
        },
    });
}
let P = (e) => {
    let { guild: t } = e;
    switch ((0, I.Z)(t)) {
        case I.R.ENABLE_PUBLIC_GUILD:
            return (0, r.jsx)(_.Z, { guild: t });
        case I.R.MAX_MEMBER_COUNT:
            return (0, r.jsx)(y.Z, { guild: t });
        case I.R.GUILD_LIVE_CHANNEL:
            return (0, r.jsx)(p.ZP, { guild: t });
        case I.R.GUILD_MFA_WARNING:
            return (0, r.jsx)(E.Z, { guild: t });
        case I.R.COMMANDS_MIGRATION:
            return (0, r.jsx)(g.Z, { guild: t });
        case I.R.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, r.jsx)(m.Z, { guild: t });
        case I.R.HUB_STUDY_ROOM:
            return (0, r.jsx)(h.Z, { guild: t });
    }
    return b.s.isDisallowPopupsSet() ? null : (0, r.jsx)(j, { guild: e.guild });
};
