n.d(r, { default: () => L });
var t = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    s = n(239091),
    a = n(883385),
    d = n(108843),
    l = n(911969),
    c = n(947440),
    u = n(100527),
    m = n(441061),
    h = n(167675),
    b = n(737013),
    g = n(607783),
    p = n(299206),
    f = n(819403),
    Z = n(163612),
    x = n(592125),
    j = n(944486),
    v = n(777658),
    _ = n(858488),
    O = n(44652),
    N = n(185457),
    C = n(570870),
    I = n(389052),
    w = n(24311),
    y = n(915193),
    k = n(332576),
    M = n(158508),
    P = n(710631),
    E = n(297047),
    S = n(88966),
    T = n(47091),
    U = n(397616),
    W = n(558924),
    D = n(991307),
    Q = n(37258),
    R = n(700994),
    A = n(332031),
    G = n(981631),
    z = n(388032);
let L = (0, d.Z)(
    (0, a.Z)(
        function (e) {
            var r;
            let { user: n, channel: a, context: d, showChatItems: u = !0, showMediaItems: G = !1, showChannelCallItems: L = !1, showModalItems: q = !0, onSelect: B, onHeightUpdate: F, onInteraction: J } = e,
                X = (0, Q.Z)({
                    userId: n.id,
                    guildId: null
                }),
                Y = (0, E.Z)(n, null, d),
                H = (0, i.e7)([j.Z, x.Z], () => {
                    let e = j.Z.getVoiceChannelId();
                    return x.Z.getChannel(e);
                }),
                { enabled: K } = Z.Z.useExperiment({
                    guildId: null == H ? void 0 : H.guild_id,
                    location: 'GroupDMUserContextMenu'
                }),
                V = K ? (null == H ? void 0 : H.id) : a.id,
                $ = (0, W.Z)(n, V),
                ee = (0, S.Z)(n.id, d),
                er = (0, w.Z)({
                    user: n,
                    context: d
                }),
                en = (0, N.Z)({
                    user: n,
                    channelId: a.id,
                    context: d
                }),
                et = (0, _.Z)({ user: n }),
                ei = (0, R.Z)(n.id),
                eo = (0, U.Z)(n.id, a.id),
                es = (0, D.Z)(n.id),
                ea = (0, g.B)({
                    userId: n.id,
                    channelId: a.id,
                    guildId: a.getGuildId(),
                    location: 'GroupDMUserContextMenu'
                }),
                ed = (0, k.Z)(n.id, a.id),
                el = (0, P.Z)({ user: n }),
                ec = (0, c.Z)(null, n),
                eu = (0, v.Z)({ user: n }),
                em = (0, O.Z)({ user: n }),
                eh = (0, T.Z)({ user: n }),
                eb = (0, I.Z)({
                    user: n,
                    location: 'GroupDMUserContextMenu'
                }),
                eg = (0, M.Z)({
                    user: n,
                    location: 'GroupDMUserContextMenu'
                }),
                ep = (0, p.Z)({
                    id: n.id,
                    label: z.NW.string(z.t['/AXYnJ'])
                }),
                ef = (0, A.Z)(n.id),
                eZ = (0, h.Z)(n.id),
                ex = (0, m.Z)(a.id),
                ej = (0, f.Z)(n),
                ev = (0, b.Z)(n.id),
                e_ = (0, C.Z)({
                    commandType: l.yU.USER,
                    commandTargetId: n.id,
                    channel: a,
                    guildId: void 0,
                    onHeightUpdate: F
                }),
                eO = (0, y.Z)(n, a),
                eN = n.isNonUserBot(),
                eC = a.isManaged(),
                eI = null === (r = a.recipients) || void 0 === r ? void 0 : r.includes(n.id);
            return (0, t.jsxs)(o.v2r, {
                navId: 'user-context',
                onClose: s.Zy,
                'aria-label': z.NW.string(z.t.liqwPD),
                onSelect: B,
                onInteraction: J,
                children: [
                    !eN &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(o.kSQ, { children: ej }),
                                (0, t.jsxs)(o.kSQ, {
                                    children: [q && X, u && Y, ee, er, !eC && $, q && en, q && et, ef]
                                }),
                                G && (0, t.jsx)(o.kSQ, { children: ei }),
                                eI &&
                                    (0, t.jsxs)(o.kSQ, {
                                        children: [!eC && eo, eO]
                                    }),
                                (0, t.jsx)(o.kSQ, { children: q && ec }),
                                (0, t.jsxs)(o.kSQ, {
                                    children: [G && es, G && ea, G && ed, e_, q && el, eu, em, eh, q && eg, q && eb, G && ev]
                                }),
                                L &&
                                    (0, t.jsxs)(o.kSQ, {
                                        children: [ex, eZ]
                                    })
                            ]
                        }),
                    (0, t.jsx)(o.kSQ, { children: ep })
                ]
            });
        },
        { object: G.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU]
);
