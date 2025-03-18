n.d(r, { default: () => L });
var t = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    s = n(239091),
    a = n(883385),
    l = n(108843),
    d = n(911969),
    c = n(947440),
    u = n(100527),
    m = n(441061),
    h = n(167675),
    b = n(737013),
    g = n(607783),
    p = n(299206),
    f = n(819403),
    Z = n(163612),
    j = n(592125),
    v = n(944486),
    x = n(777658),
    _ = n(858488),
    O = n(44652),
    N = n(185457),
    I = n(570870),
    w = n(389052),
    y = n(24311),
    C = n(915193),
    k = n(332576),
    P = n(158508),
    E = n(710631),
    M = n(297047),
    S = n(88966),
    T = n(47091),
    U = n(397616),
    W = n(558924),
    D = n(991307),
    Q = n(37258),
    R = n(700994),
    A = n(332031),
    z = n(981631),
    G = n(388032);
let L = (0, l.Z)(
    (0, a.Z)(
        function (e) {
            var r;
            let { user: n, channel: a, context: l, showChatItems: u = !0, showMediaItems: z = !1, showChannelCallItems: L = !1, showModalItems: q = !0, onSelect: B, onHeightUpdate: F, onInteraction: J } = e,
                X = (0, Q.Z)({
                    userId: n.id,
                    guildId: null
                }),
                Y = (0, M.Z)(n, null, l),
                H = (0, i.e7)([v.Z, j.Z], () => {
                    let e = v.Z.getVoiceChannelId();
                    return j.Z.getChannel(e);
                }),
                { enabled: K } = Z.Z.useExperiment({
                    guildId: null == H ? void 0 : H.guild_id,
                    location: 'GroupDMUserContextMenu'
                }),
                V = K ? (null == H ? void 0 : H.id) : a.id,
                $ = (0, W.Z)(n, V),
                ee = (0, S.Z)(n.id, l),
                er = (0, y.Z)({
                    user: n,
                    context: l
                }),
                en = (0, N.Z)({
                    user: n,
                    channelId: a.id,
                    context: l
                }),
                et = (0, _.Z)({ user: n }),
                ei = (0, R.Z)(n.id),
                eo = (0, U.Z)(n.id, a.id),
                es = (0, D.Z)(n.id),
                ea = (0, g.B)({
                    userId: n.id,
                    channelId: a.id,
                    guildId: a.getGuildId()
                }),
                el = (0, k.Z)(n.id, a.id),
                ed = (0, E.Z)({ user: n }),
                ec = (0, c.Z)(null, n),
                eu = (0, x.Z)({ user: n }),
                em = (0, O.Z)({ user: n }),
                eh = (0, T.Z)({ user: n }),
                eb = (0, w.Z)({
                    user: n,
                    location: 'GroupDMUserContextMenu'
                }),
                eg = (0, P.Z)({
                    user: n,
                    location: 'GroupDMUserContextMenu'
                }),
                ep = (0, p.Z)({
                    id: n.id,
                    label: G.NW.string(G.t['/AXYnJ'])
                }),
                ef = (0, A.Z)(n.id),
                eZ = (0, h.Z)(n.id),
                ej = (0, m.Z)(a.id),
                ev = (0, f.Z)(n),
                ex = (0, b.Z)(n.id),
                e_ = (0, I.Z)({
                    commandType: d.yU.USER,
                    commandTargetId: n.id,
                    channel: a,
                    guildId: void 0,
                    onHeightUpdate: F
                }),
                eO = (0, C.Z)(n, a),
                eN = n.isNonUserBot(),
                eI = a.isManaged(),
                ew = null === (r = a.recipients) || void 0 === r ? void 0 : r.includes(n.id);
            return (0, t.jsxs)(o.v2r, {
                navId: 'user-context',
                onClose: s.Zy,
                'aria-label': G.NW.string(G.t.liqwPD),
                onSelect: B,
                onInteraction: J,
                children: [
                    !eN &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(o.kSQ, { children: ev }),
                                (0, t.jsxs)(o.kSQ, {
                                    children: [q && X, u && Y, ee, er, !eI && $, q && en, q && et, ef]
                                }),
                                z && (0, t.jsx)(o.kSQ, { children: ei }),
                                ew &&
                                    (0, t.jsxs)(o.kSQ, {
                                        children: [!eI && eo, eO]
                                    }),
                                (0, t.jsx)(o.kSQ, { children: q && ec }),
                                (0, t.jsxs)(o.kSQ, {
                                    children: [z && es, z && ea, z && el, e_, q && ed, eu, em, eh, q && eg, q && eb, z && ex]
                                }),
                                L &&
                                    (0, t.jsxs)(o.kSQ, {
                                        children: [ej, eZ]
                                    })
                            ]
                        }),
                    (0, t.jsx)(o.kSQ, { children: ep })
                ]
            });
        },
        { object: z.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU]
);
