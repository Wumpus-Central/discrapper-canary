r.d(n, { default: () => W });
var t = r(255367);
r(73800);
var i = r(442837),
    s = r(481060),
    o = r(239091),
    l = r(883385),
    a = r(108843),
    d = r(911969),
    c = r(947440),
    u = r(100527),
    m = r(441061),
    h = r(167675),
    b = r(737013),
    g = r(607783),
    p = r(299206),
    f = r(819403),
    Z = r(163612),
    j = r(592125),
    x = r(944486),
    v = r(777658),
    _ = r(858488),
    O = r(44652),
    I = r(185457),
    w = r(570870),
    y = r(389052),
    C = r(24311),
    k = r(915193),
    P = r(332576),
    E = r(158508),
    M = r(710631),
    N = r(297047),
    S = r(88966),
    T = r(47091),
    U = r(397616),
    D = r(558924),
    Q = r(991307),
    R = r(37258),
    A = r(700994),
    z = r(332031),
    G = r(981631),
    L = r(388032);
let W = (0, a.Z)(
    (0, l.Z)(
        function (e) {
            var n;
            let { user: r, channel: l, context: a, showChatItems: u = !0, showMediaItems: G = !1, showChannelCallItems: W = !1, showModalItems: q = !0, onSelect: B, onHeightUpdate: F, onInteraction: J } = e,
                X = (0, R.Z)({
                    userId: r.id,
                    guildId: null
                }),
                Y = (0, N.Z)(r, null, a),
                H = (0, i.e7)([x.Z, j.Z], () => {
                    let e = x.Z.getVoiceChannelId();
                    return j.Z.getChannel(e);
                }),
                { enabled: K } = Z.Z.useExperiment({
                    guildId: null == H ? void 0 : H.guild_id,
                    location: 'GroupDMUserContextMenu'
                }),
                V = K ? (null == H ? void 0 : H.id) : l.id,
                $ = (0, D.Z)(r, V),
                ee = (0, S.Z)(r.id, a),
                en = (0, C.Z)({
                    user: r,
                    context: a
                }),
                er = (0, I.Z)({
                    user: r,
                    channelId: l.id,
                    context: a
                }),
                et = (0, _.Z)({ user: r }),
                ei = (0, A.Z)(r.id),
                es = (0, U.Z)(r.id, l.id),
                eo = (0, Q.Z)(r.id),
                el = (0, g.B)({
                    userId: r.id,
                    channelId: l.id,
                    guildId: l.getGuildId()
                }),
                ea = (0, P.Z)(r.id, l.id),
                ed = (0, M.Z)({ user: r }),
                ec = (0, c.Z)(null, r),
                eu = (0, v.Z)({ user: r }),
                em = (0, O.Z)({ user: r }),
                eh = (0, T.Z)({ user: r }),
                eb = (0, y.Z)({
                    user: r,
                    location: 'GroupDMUserContextMenu'
                }),
                eg = (0, E.Z)({
                    user: r,
                    location: 'GroupDMUserContextMenu'
                }),
                ep = (0, p.Z)({
                    id: r.id,
                    label: L.intl.string(L.t['/AXYnJ'])
                }),
                ef = (0, z.Z)(r.id),
                eZ = (0, h.Z)(r.id),
                ej = (0, m.Z)(l.id),
                ex = (0, f.Z)(r),
                ev = (0, b.Z)(r.id),
                e_ = (0, w.Z)({
                    commandType: d.yU.USER,
                    commandTargetId: r.id,
                    channel: l,
                    guildId: void 0,
                    onHeightUpdate: F
                }),
                eO = (0, k.Z)(r, l),
                eI = r.isNonUserBot(),
                ew = l.isManaged(),
                ey = null == (n = l.recipients) ? void 0 : n.includes(r.id);
            return (0, t.jsxs)(s.v2r, {
                navId: 'user-context',
                onClose: o.Zy,
                'aria-label': L.intl.string(L.t.liqwPD),
                onSelect: B,
                onInteraction: J,
                children: [
                    !eI &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(s.kSQ, { children: ex }),
                                (0, t.jsxs)(s.kSQ, {
                                    children: [q && X, u && Y, ee, en, !ew && $, q && er, q && et, ef]
                                }),
                                G && (0, t.jsx)(s.kSQ, { children: ei }),
                                ey &&
                                    (0, t.jsxs)(s.kSQ, {
                                        children: [!ew && es, eO]
                                    }),
                                (0, t.jsx)(s.kSQ, { children: q && ec }),
                                (0, t.jsxs)(s.kSQ, {
                                    children: [G && eo, G && el, G && ea, e_, q && ed, eu, em, eh, q && eg, q && eb, G && ev]
                                }),
                                W &&
                                    (0, t.jsxs)(s.kSQ, {
                                        children: [ej, eZ]
                                    })
                            ]
                        }),
                    (0, t.jsx)(s.kSQ, { children: ep })
                ]
            });
        },
        { object: G.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU]
);
