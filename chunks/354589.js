t.r(n);
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(239091),
    a = t(883385),
    o = t(108843),
    d = t(911969),
    u = t(947440),
    s = t(100527),
    c = t(441061),
    f = t(167675),
    m = t(737013),
    p = t(607783),
    h = t(299206),
    g = t(819403),
    _ = t(777658),
    v = t(858488),
    E = t(185457),
    Z = t(570870),
    x = t(389052),
    T = t(24311),
    I = t(915193),
    A = t(332576),
    M = t(158508),
    b = t(710631),
    C = t(297047),
    S = t(88966),
    j = t(397616),
    N = t(558924),
    y = t(991307),
    O = t(37258),
    P = t(700994),
    w = t(332031),
    k = t(981631),
    U = t(388032);
n.default = (0, o.Z)(
    (0, a.Z)(
        function (e) {
            var n;
            let { user: t, channel: a, context: o, showChatItems: s = !0, showMediaItems: k = !1, showChannelCallItems: D = !1, showModalItems: R = !0, onSelect: G, onHeightUpdate: W } = e,
                B = (0, O.Z)({
                    userId: t.id,
                    guildId: null
                }),
                V = (0, C.Z)(t, null, o),
                L = (0, N.Z)(t, a.id),
                H = (0, S.Z)(t.id, o),
                K = (0, T.Z)({
                    user: t,
                    context: o
                }),
                z = (0, E.Z)({
                    user: t,
                    channelId: a.id,
                    context: o
                }),
                q = (0, v.Z)({ user: t }),
                Y = (0, P.Z)(t.id),
                F = (0, j.Z)(t.id, a.id),
                J = (0, y.Z)(t.id),
                Q = (0, p.B)({
                    userId: t.id,
                    channelId: a.id,
                    guildId: a.getGuildId(),
                    location: 'GroupDMUserContextMenu'
                }),
                X = (0, A.Z)(t.id, a.id),
                $ = (0, b.Z)({ user: t }),
                ee = (0, u.Z)(null, t),
                en = (0, _.Z)(t),
                et = (0, x.Z)({
                    user: t,
                    location: 'GroupDMUserContextMenu'
                }),
                ei = (0, M.Z)({
                    user: t,
                    location: 'GroupDMUserContextMenu'
                }),
                er = (0, h.Z)({
                    id: t.id,
                    label: U.intl.string(U.t['/AXYnJ'])
                }),
                el = (0, w.Z)(t.id),
                ea = (0, f.Z)(t.id),
                eo = (0, c.Z)(a.id),
                ed = (0, g.Z)(t),
                eu = (0, m.Z)(t.id),
                es = (0, Z.Z)({
                    commandType: d.yU.USER,
                    commandTargetId: t.id,
                    channel: a,
                    guildId: void 0,
                    onHeightUpdate: W
                }),
                ec = (0, I.Z)(t, a),
                ef = t.isNonUserBot(),
                em = a.isManaged(),
                ep = null === (n = a.recipients) || void 0 === n ? void 0 : n.includes(t.id);
            return (0, i.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': U.intl.string(U.t.liqwPD),
                onSelect: G,
                children: [
                    !ef &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.MenuGroup, { children: ed }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [R && B, s && V, H, K, !em && L, R && z, R && q, el]
                                }),
                                k && (0, i.jsx)(r.MenuGroup, { children: Y }),
                                ep &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [!em && F, ec]
                                    }),
                                (0, i.jsx)(r.MenuGroup, { children: R && ee }),
                                (0, i.jsxs)(r.MenuGroup, {
                                    children: [k && J, k && Q, k && X, es, R && $, en, R && ei, R && et, k && eu]
                                }),
                                D &&
                                    (0, i.jsxs)(r.MenuGroup, {
                                        children: [eo, ea]
                                    })
                            ]
                        }),
                    (0, i.jsx)(r.MenuGroup, { children: er })
                ]
            });
        },
        { object: k.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.GROUP_DM_USER_MENU]
);
