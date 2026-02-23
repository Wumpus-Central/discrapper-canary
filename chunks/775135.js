n.d(t, { A: () => P }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(554146),
    s = n(506774),
    o = n(108722),
    d = n(379848),
    c = n(975076),
    u = n(67602),
    A = n(571616),
    h = n(541041),
    _ = n(289357),
    m = n(264328),
    p = n(636781),
    g = n(935158),
    E = n(836953),
    I = n(314457),
    f = n(536194),
    C = n(612340),
    T = n(860768),
    N = n(90166),
    S = n(940447),
    x = n(665037),
    v = n(946960),
    y = n(49999);
let b = new Set([a.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, a.M.CHANNEL_NOTICE_GUILD_BANNER]);
function O(e) {
    e.stopPropagation();
}
let L = [];
function R(e) {
    var t;
    let n,
        { guild: _ } = e,
        [p, g] = r.useState(s.w.get(v.hV) ?? 0),
        E = (0, l.yK)(
            v.cJ,
            () =>
                v.cA
                    .filter((e) => {
                        let { dismissibleContentType: t, store: n } = e;
                        return !0 === n?.channelNoticePredicate(_, p) && !b.has(t);
                    })
                    .map((e) => e.dismissibleContentType),
            [_, p],
        ),
        [I, f] = (0, d.kn)(E, y.m.CHANNEL_NOTICES),
        C =
            ((t = _.id),
            (n = (0, c.I)(t)),
            r.useMemo(() => {
                let e = [];
                return n && e.push(a.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : L;
            }, [n])),
        [N, x] = (0, d.ww)(C, _.id, y.m.CHANNEL_NOTICES, !0),
        R = I ?? N,
        P = null != I ? f : x,
        j = r.useCallback(() => {
            var e;
            (e = Date.now()), s.w.set(v.hV, e), g(e), P(y.i.UNKNOWN);
        }, [P]),
        D = (() => {
            switch (R) {
                case a.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, i.jsx)(m.A, { guild: _, markAsDismissed: j });
                case a.M.CHANNEL_NOTICE_INVITE:
                    return (0, i.jsx)(T.A, { guild: _, markAsDismissed: j });
                case a.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, i.jsx)(h.A, { guild: _, markAsDismissed: j });
                case a.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, i.jsx)(S.A, { guild: _, markAsDismissed: j });
                case a.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, i.jsx)(A.A, { guild: _, markAsDismissed: j });
                case a.M.LINKED_ROLE_ADMIN_GUILD:
                    return (0, i.jsx)(o.A, { guild: _, markAsDismissed: () => P(y.i.UNKNOWN) });
                case a.M.GAME_CLAIM_COACHMARK:
                    return (0, i.jsx)(u.A, { guild: _, markAsDismissed: P });
                default:
                    return null;
            }
        })();
    return null == D ? null : (0, i.jsx)("div", { onContextMenu: O, children: D });
}
let P = (e) => {
    let { guild: t } = e;
    switch ((0, x.A)(t)) {
        case x.G.ENABLE_PUBLIC_GUILD:
            return (0, i.jsx)(I.A, { guild: t });
        case x.G.MAX_MEMBER_COUNT:
            return (0, i.jsx)(N.A, { guild: t });
        case x.G.GUILD_LIVE_CHANNEL:
            return (0, i.jsx)(_.Ay, { guild: t });
        case x.G.GUILD_MFA_WARNING:
            return (0, i.jsx)(C.A, { guild: t });
        case x.G.COMMANDS_MIGRATION:
            return (0, i.jsx)(g.A, { guild: t });
        case x.G.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, i.jsx)(E.A, { guild: t });
        case x.G.HUB_STUDY_ROOM:
            return (0, i.jsx)(p.A, { guild: t });
    }
    return f.P.isDisallowPopupsSet() ? null : (0, i.jsx)(R, { guild: e.guild });
};
