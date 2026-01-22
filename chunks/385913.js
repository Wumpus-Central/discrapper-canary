n.d(t, {
    default: () => B,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(442433),
    a = n(847767),
    o = n(358367),
    s = n(155718),
    d = n(468389),
    c = n(793574),
    u = n(810845),
    A = n(854182),
    f = n(734337),
    b = n(855187),
    g = n(479335),
    p = n(343328),
    h = n(848977),
    j = n(995102),
    O = n(50268),
    y = n(133238),
    v = n(795144),
    m = n(671470),
    _ = n(222311),
    x = n(803664),
    D = n(29293),
    E = n(509302),
    P = n(497600),
    I = n(773699),
    C = n(239211),
    S = n(707378),
    M = n(486524),
    T = n(631637),
    U = n(984894),
    w = n(399476),
    N = n(889460),
    V = n(460597),
    L = n(313998),
    R = n(198229),
    G = n(243949),
    k = n(972432),
    X = n(77544),
    F = n(652215),
    Y = n(985018);
let B = (0, o.A)(
    (0, a.A)(
        function (e) {
            let {
                    user: t,
                    channel: n,
                    channelSelected: a = !1,
                    showMute: o = !0,
                    showMediaItems: c = !1,
                    showChannelCallItems: F = !1,
                    showModalItems: B = !0,
                    targetIsUser: W = !1,
                    context: J,
                    onSelect: K,
                    onHeightUpdate: H,
                    onInteraction: q,
                } = e,
                z = (0, G.A)({
                    userId: t.id,
                    guildId: null,
                }),
                Z = (0, S.A)({
                    user: t,
                    context: J,
                }),
                Q = (0, P.A)({
                    user: t,
                    channelId: n.id,
                    context: J,
                }),
                $ = (0, D.A)({
                    user: t,
                }),
                ee = (0, X.A)(t.id),
                et = (0, M.A)(n.id, a),
                en = (0, N.A)({
                    user: t,
                }),
                er = (0, d.A)(null, t),
                ei = (0, k.A)(t.id),
                el = (0, L.g)(n.id, "DMUserContextMenu"),
                ea = (0, L.A)(t, el),
                eo = (0, x.A)({
                    user: t,
                }),
                es = (0, E.A)({
                    user: t,
                }),
                ed = (0, V.A)({
                    user: t,
                }),
                ec = (0, R.A)(t.id),
                eu = (0, g.u)({
                    userId: t.id,
                    channelId: n.id,
                    guildId: n.getGuildId(),
                }),
                eA = (0, U.A)(t.id, n.id),
                ef = (0, C.A)({
                    user: t,
                    location: "DMUserContextMenu",
                }),
                eb = (0, w.A)({
                    user: t,
                    location: "DMUserContextMenu",
                }),
                eg = (0, j.Ay)(n),
                ep = (0, O.A)({
                    id: t.id,
                    label: Y.intl.string(Y.t["/AXYnE"]),
                }),
                eh = (0, O.A)({
                    id: n.id,
                    label: Y.intl.string(Y.t.gFHI3k),
                }),
                ej = (0, h.A)(n),
                eO = (0, f.A)(t.id),
                ey = (0, A.A)(n.id),
                ev = (0, _.A)(t),
                em = (0, b.A)(t.id),
                e_ = (0, u.A)(n.id, t.id),
                ex = (0, I.A)({
                    commandType: s.kc.USER,
                    commandTargetId: t.id,
                    channel: n,
                    guildId: void 0,
                    onHeightUpdate: H,
                }),
                eD = (0, y.m)(n),
                eE = (0, y.y)(n),
                eP = (0, v.A)(n),
                eI = (0, m.A)(n),
                eC = (0, T.A)({
                    channel: n,
                }),
                eS = n.isManaged(),
                eM = t.isNonUserBot();
            return (0, r.jsxs)(i.W1t, {
                navId: "user-context",
                onClose: l.Z_,
                "aria-label": Y.intl.string(Y.t.liqwPJ),
                onSelect: K,
                onInteraction: q,
                children: [
                    (0, r.jsx)(i.rXV, {
                        children: !(eM && !(0, p.A)(n.id)) && ej,
                    }),
                    (0, r.jsxs)(i.rXV, {
                        children: [eD, eP, eI],
                    }),
                    (0, r.jsx)(i.rXV, {
                        children: !eM && ev,
                    }),
                    (0, r.jsxs)(i.rXV, {
                        children: [
                            !eM &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [B && z, Z, !eS && ea, B && Q, B && $, ee],
                                }),
                            (0, p.A)(n.id) && z,
                            et,
                        ],
                    }),
                    !eM &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.rXV, {
                                    children: c && ei,
                                }),
                                (0, r.jsx)(i.rXV, {
                                    children: B && er,
                                }),
                                (0, r.jsxs)(i.rXV, {
                                    children: [
                                        c && ec,
                                        B && eu,
                                        c && eA,
                                        ex,
                                        B && en,
                                        eo,
                                        es,
                                        ed,
                                        B && eb,
                                        B && ef,
                                        c && em,
                                    ],
                                }),
                                (0, r.jsx)(i.rXV, {
                                    children: o && eg,
                                }),
                                F &&
                                    (0, r.jsxs)(i.rXV, {
                                        children: [e_, ey, eO],
                                    }),
                            ],
                        }),
                    (0, p.A)(n.id) &&
                        (0, r.jsx)(i.rXV, {
                            children: o && eg,
                        }),
                    (0, r.jsx)(i.rXV, {
                        children: eE,
                    }),
                    (0, r.jsx)(i.rXV, {
                        children: eC,
                    }),
                    (0, r.jsxs)(i.rXV, {
                        children: [ep, !W && eh],
                    }),
                ],
            });
        },
        {
            object: F.ZSU.CONTEXT_MENU,
        },
    ),
    [c.A.CONTEXT_MENU, c.A.DM_USER_MENU],
);
