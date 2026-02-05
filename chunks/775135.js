n.d(t, { A: () => L });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(554146),
    s = n(506774),
    o = n(108722),
    d = n(379848),
    c = n(571616),
    u = n(541041),
    A = n(289357),
    h = n(264328),
    _ = n(636781),
    m = n(935158),
    p = n(836953),
    g = n(314457),
    E = n(536194),
    f = n(612340),
    I = n(860768),
    C = n(90166),
    N = n(940447),
    T = n(665037),
    S = n(946960),
    x = n(49999);
let v = new Set([l.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, l.M.CHANNEL_NOTICE_GUILD_BANNER]);
function b(e) {
    e.stopPropagation();
}
function y(e) {
    let { guild: t } = e,
        [n, A] = r.useState(s.w.get(S.hV) ?? 0),
        _ = (0, a.yK)(
            S.cJ,
            () =>
                S.cA
                    .filter((e) => {
                        let { dismissibleContentType: i, store: r } = e;
                        return !0 === r?.channelNoticePredicate(t, n) && !v.has(i);
                    })
                    .map((e) => e.dismissibleContentType),
            [t, n],
        );
    return (0, i.jsx)(d.Ay, {
        contentTypes: _,
        groupName: x.m.CHANNEL_NOTICES,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: r } = e,
                a = () => {
                    var e;
                    (e = Date.now()), s.w.set(S.hV, e), A(e), r(x.i.UNKNOWN);
                },
                d = (() => {
                    switch (n) {
                        case l.M.CHANNEL_NOTICE_HUBLINK:
                            return (0, i.jsx)(h.A, { guild: t, markAsDismissed: a });
                        case l.M.CHANNEL_NOTICE_INVITE:
                            return (0, i.jsx)(I.A, { guild: t, markAsDismissed: a });
                        case l.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                            return (0, i.jsx)(u.A, { guild: t, markAsDismissed: a });
                        case l.M.CHANNEL_NOTICE_QUICKSWITCHER:
                            return (0, i.jsx)(N.A, { guild: t, markAsDismissed: a });
                        case l.M.CHANNEL_NOTICE_GUILD_BANNER:
                            return (0, i.jsx)(c.A, { guild: t, markAsDismissed: a });
                        case l.M.LINKED_ROLE_ADMIN_GUILD:
                            return (0, i.jsx)(o.A, { guild: t, markAsDismissed: () => r(x.i.UNKNOWN) });
                        default:
                            return null;
                    }
                })();
            return null == d ? null : (0, i.jsx)("div", { onContextMenu: b, children: d });
        },
    });
}
let L = (e) => {
    let { guild: t } = e;
    switch ((0, T.A)(t)) {
        case T.G.ENABLE_PUBLIC_GUILD:
            return (0, i.jsx)(g.A, { guild: t });
        case T.G.MAX_MEMBER_COUNT:
            return (0, i.jsx)(C.A, { guild: t });
        case T.G.GUILD_LIVE_CHANNEL:
            return (0, i.jsx)(A.Ay, { guild: t });
        case T.G.GUILD_MFA_WARNING:
            return (0, i.jsx)(f.A, { guild: t });
        case T.G.COMMANDS_MIGRATION:
            return (0, i.jsx)(m.A, { guild: t });
        case T.G.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, i.jsx)(p.A, { guild: t });
        case T.G.HUB_STUDY_ROOM:
            return (0, i.jsx)(_.A, { guild: t });
    }
    return E.P.isDisallowPopupsSet() ? null : (0, i.jsx)(y, { guild: e.guild });
};
