n.d(t, { A: () => P }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(554146),
    s = n(506774),
    o = n(108722),
    d = n(932001),
    u = n(975076),
    c = n(67602),
    A = n(571616),
    h = n(541041),
    _ = n(289357),
    E = n(264328),
    p = n(636781),
    m = n(935158),
    g = n(836953),
    I = n(314457),
    C = n(536194),
    f = n(612340),
    T = n(860768),
    S = n(90166),
    N = n(940447),
    O = n(665037),
    L = n(946960),
    y = n(49999);
let v = new Set([l.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, l.M.CHANNEL_NOTICE_GUILD_BANNER]);
function b(e) {
    e.stopPropagation();
}
let D = [];
function R(e) {
    var t;
    let n,
        { guild: _ } = e,
        [p, m] = r.useState(s.w.get(L.hV) ?? 0),
        g =
            ((t = _.id),
            (n = (0, u.I)(t)),
            r.useMemo(() => {
                let e = [];
                return n && e.push(l.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : D;
            }, [n])),
        [I, C] = (0, d.ww)(g, _.id, y.m.CHANNEL_NOTICES, !0),
        f = null != I,
        S = (0, a.yK)(
            L.cJ,
            () =>
                f
                    ? []
                    : L.cA
                          .filter((e) => {
                              let { dismissibleContentType: t, store: n } = e;
                              return !0 === n?.channelNoticePredicate(_, p) && !v.has(t);
                          })
                          .map((e) => e.dismissibleContentType),
            [_, p, f],
        ),
        [O, R] = (0, d.kn)(S, y.m.CHANNEL_NOTICES),
        P = I ?? O,
        w = null != I ? C : R,
        M = r.useCallback(() => {
            var e;
            (e = Date.now()), s.w.set(L.hV, e), m(e), w(y.i.UNKNOWN);
        }, [w]),
        U = (() => {
            switch (P) {
                case l.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, i.jsx)(E.A, { guild: _, markAsDismissed: M });
                case l.M.CHANNEL_NOTICE_INVITE:
                    return (0, i.jsx)(T.A, { guild: _, markAsDismissed: M });
                case l.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, i.jsx)(h.A, { guild: _, markAsDismissed: M });
                case l.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, i.jsx)(N.A, { guild: _, markAsDismissed: M });
                case l.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, i.jsx)(A.A, { guild: _, markAsDismissed: M });
                case l.M.LINKED_ROLE_ADMIN_GUILD:
                    return (0, i.jsx)(o.A, { guild: _, markAsDismissed: () => w(y.i.UNKNOWN) });
                case l.M.GAME_CLAIM_COACHMARK:
                    return (0, i.jsx)(c.A, { guild: _, markAsDismissed: w });
                default:
                    return null;
            }
        })();
    return null == U ? null : (0, i.jsx)("div", { onContextMenu: b, children: U });
}
let P = (e) => {
    let { guild: t } = e;
    switch ((0, O.A)(t)) {
        case O.G.ENABLE_PUBLIC_GUILD:
            return (0, i.jsx)(I.A, { guild: t });
        case O.G.MAX_MEMBER_COUNT:
            return (0, i.jsx)(S.A, { guild: t });
        case O.G.GUILD_LIVE_CHANNEL:
            return (0, i.jsx)(_.Ay, { guild: t });
        case O.G.GUILD_MFA_WARNING:
            return (0, i.jsx)(f.A, { guild: t });
        case O.G.COMMANDS_MIGRATION:
            return (0, i.jsx)(m.A, { guild: t });
        case O.G.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, i.jsx)(g.A, { guild: t });
        case O.G.HUB_STUDY_ROOM:
            return (0, i.jsx)(p.A, { guild: t });
    }
    return C.P.isDisallowPopupsSet() ? null : (0, i.jsx)(R, { guild: e.guild });
};
