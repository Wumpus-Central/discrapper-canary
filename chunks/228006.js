n.d(t, {
    default: () => J,
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    s = n(442433),
    o = n(847767),
    a = n(358367),
    d = n(155718),
    c = n(468389),
    u = n(793574),
    A = n(810845),
    b = n(854182),
    g = n(734337),
    p = n(855187),
    f = n(479335),
    m = n(50268),
    h = n(222311),
    j = n(164891),
    v = n(734057),
    x = n(309010),
    O = n(803664),
    y = n(29293),
    D = n(509302),
    C = n(497600),
    I = n(773699),
    P = n(239211),
    w = n(707378),
    E = n(827936),
    M = n(984894),
    U = n(399476),
    L = n(889460),
    _ = n(448290),
    S = n(301541),
    T = n(460597),
    N = n(635443),
    k = n(313998),
    V = n(198229),
    G = n(243949),
    B = n(972432),
    R = n(77544),
    X = n(652215),
    F = n(985018);
let J = (0, a.A)(
    (0, o.A)(
        function (e) {
            var t;
            let {
                    user: n,
                    channel: o,
                    context: a,
                    showChatItems: u = !0,
                    showMediaItems: X = !1,
                    showChannelCallItems: J = !1,
                    showModalItems: z = !0,
                    onSelect: Y,
                    onHeightUpdate: W,
                    onInteraction: Z,
                } = e,
                H = (0, G.A)({
                    userId: n.id,
                    guildId: null,
                }),
                K = (0, _.A)(n, null, a),
                q = (0, r.bG)([x.A, v.A], () => {
                    let e = x.A.getVoiceChannelId();
                    return v.A.getChannel(e);
                }),
                { enabled: Q } = j.A.useExperiment({
                    guildId: null == q ? void 0 : q.guild_id,
                    location: "GroupDMUserContextMenu",
                }),
                $ = Q ? (null == q ? void 0 : q.id) : o.id,
                ee = (0, k.A)(n, $),
                et = (0, S.A)(n.id, a),
                en = (0, w.A)({
                    user: n,
                    context: a,
                }),
                ei = (0, C.A)({
                    user: n,
                    channelId: o.id,
                    context: a,
                }),
                er = (0, y.A)({
                    user: n,
                }),
                el = (0, B.A)(n.id),
                es = (0, N.A)(n.id, o.id),
                eo = (0, V.A)(n.id),
                ea = (0, f.u)({
                    userId: n.id,
                    channelId: o.id,
                    guildId: o.getGuildId(),
                }),
                ed = (0, M.A)(n.id, o.id),
                ec = (0, L.A)({
                    user: n,
                }),
                eu = (0, c.A)(null, n),
                eA = (0, O.A)({
                    user: n,
                }),
                eb = (0, D.A)({
                    user: n,
                }),
                eg = (0, T.A)({
                    user: n,
                }),
                ep = (0, P.A)({
                    user: n,
                    location: "GroupDMUserContextMenu",
                }),
                ef = (0, U.A)({
                    user: n,
                    location: "GroupDMUserContextMenu",
                }),
                em = (0, m.A)({
                    id: n.id,
                    label: F.intl.string(F.t["/AXYnE"]),
                }),
                eh = (0, R.A)(n.id),
                ej = (0, g.A)(n.id),
                ev = (0, b.A)(o.id),
                ex = (0, h.A)(n),
                eO = (0, p.A)(n.id),
                ey = (0, A.A)(o.id, n.id),
                eD = (0, I.A)({
                    commandType: d.kc.USER,
                    commandTargetId: n.id,
                    channel: o,
                    guildId: void 0,
                    onHeightUpdate: W,
                }),
                eC = (0, E.A)(n, o),
                eI = n.isNonUserBot(),
                eP = o.isManaged(),
                ew = null == (t = o.recipients) ? void 0 : t.includes(n.id);
            return (0, i.jsxs)(l.W1t, {
                navId: "user-context",
                onClose: s.Z_,
                "aria-label": F.intl.string(F.t.liqwPJ),
                onSelect: Y,
                onInteraction: Z,
                children: [
                    !eI &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.rXV, {
                                    children: ex,
                                }),
                                (0, i.jsxs)(l.rXV, {
                                    children: [z && H, u && K, et, en, !eP && ee, z && ei, z && er, eh],
                                }),
                                X &&
                                    (0, i.jsx)(l.rXV, {
                                        children: el,
                                    }),
                                ew &&
                                    (0, i.jsxs)(l.rXV, {
                                        children: [!eP && es, eC],
                                    }),
                                (0, i.jsx)(l.rXV, {
                                    children: z && eu,
                                }),
                                (0, i.jsxs)(l.rXV, {
                                    children: [
                                        X && eo,
                                        X && ea,
                                        X && ed,
                                        eD,
                                        z && ec,
                                        eA,
                                        eb,
                                        eg,
                                        z && ef,
                                        z && ep,
                                        X && eO,
                                    ],
                                }),
                                J &&
                                    (0, i.jsxs)(l.rXV, {
                                        children: [ey, ev, ej],
                                    }),
                            ],
                        }),
                    (0, i.jsx)(l.rXV, {
                        children: em,
                    }),
                ],
            });
        },
        {
            object: X.ZSU.CONTEXT_MENU,
        },
    ),
    [u.A.CONTEXT_MENU, u.A.GROUP_DM_USER_MENU],
);
