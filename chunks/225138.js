n.d(t, {
    S: () => K,
    default: () => z
});
var i = n(255367);
n(73800);
var r = n(374470),
    l = n(481060),
    a = n(239091),
    o = n(911969),
    s = n(100527),
    c = n(906732),
    u = n(299206),
    d = n(26737),
    f = n(29264),
    g = n(905041),
    m = n(89013),
    p = n(988500),
    b = n(570870),
    h = n(786095),
    O = n(268623),
    E = n(986240),
    y = n(667922),
    v = n(941389),
    S = n(449751),
    j = n(749339),
    _ = n(601184),
    P = n(6148),
    I = n(519110),
    N = n(759875),
    Z = n(168405),
    D = n(536639),
    A = n(720904),
    x = n(88791),
    T = n(385302),
    M = n(873699),
    w = n(134323),
    C = n(429260),
    L = n(1626),
    R = n(279329),
    G = n(627938),
    k = n(512303),
    U = n(481300),
    F = n(975368),
    H = n(388032);
function z(e) {
    var t, n;
    let l,
        o,
        u,
        d,
        { channel: f, message: g, target: m, mediaItem: p, shouldHideMediaOptions: b, onSelect: h, onHeightUpdate: O } = e,
        { analyticsLocations: E } = (0, c.ZP)([s.Z.MESSAGE_CONTEXT_MENU]),
        y = m,
        v = m.getAttribute('data-type'),
        S = m.getAttribute('data-id'),
        j = m.getAttribute('data-name');
    if (null != p) o = l = u = p.url;
    else for (; (0, r.k)(y); ) (0, r.k)(y, HTMLImageElement) && null != y.src && (o = y.src), (0, r.k)(y, HTMLAnchorElement) && null != y.href && ((l = y.href), (d = y.textContent), null == o && 'img' === y.getAttribute('data-role') && ((o = l), y.hasAttribute('data-safe-src') && '' !== y.getAttribute('data-safe-src') && (u = y.getAttribute('data-safe-src')))), (y = y.parentNode);
    let _ = null != (n = null == (t = document.getSelection()) ? void 0 : t.toString()) ? n : '';
    return (0, i.jsx)(c.Gt, {
        value: E,
        children: K({
            message: g,
            channel: f,
            mediaItem: p,
            textSelection: _,
            favoriteableType: v,
            favoriteableId: S,
            favoriteableName: j,
            itemHref: l,
            itemSrc: o,
            itemSafeSrc: u,
            itemTextContent: d,
            canReport: !0,
            onHeightUpdate: O,
            onSelect: h,
            onClose: a.Zy,
            navId: 'message',
            ariaLabel: H.intl.string(H.t.ChPNkJ),
            shouldHideMediaOptions: b
        })
    });
}
function K(e) {
    let { message: t, channel: n, mediaItem: r, textSelection: a, favoriteableType: s, favoriteableId: c, favoriteableName: z, itemHref: K, itemSrc: B, itemSafeSrc: X, itemTextContent: W, canReport: q, onHeightUpdate: V, onSelect: J, onClose: Q, navId: Y, ariaLabel: $, shouldHideMediaOptions: ee = !1 } = e,
        et = (0, d.Z)(a),
        en = (0, m.Z)(a),
        ei = (0, A.Z)(t, n),
        er = (0, y.Z)(t, n),
        el = (0, P.Z)(t, n),
        ea = (0, D.Z)(t, n),
        eo = (0, I.Z)({
            type: s,
            id: c,
            name: z
        }),
        es = (0, L.Z)(t, n),
        ec = (0, Z.Z)(t, n),
        eu = (0, x.Z)(t),
        ed = (0, v.Z)(t, n),
        ef = (0, S.Z)(t, n),
        eg = (0, T.Z)(t, n),
        em = (0, M.Z)(t, n),
        ep = (0, _.Z)(t, n),
        eb = (0, C.ZP)(t),
        eh = (0, C.wY)(t),
        eO = (0, C.eH)(t),
        eE = (0, R.Z)(t, n),
        ey = (0, g.Z)(null != K ? K : B, W, t, { shouldHideMediaOptions: ee }),
        ev = (0, f.Z)(X, t, { shouldHideMediaOptions: ee }),
        eS = (0, U.Z)(t, r),
        ej = (0, u.Z)({
            id: t.id,
            label: H.intl.string(H.t.zBoHlZ),
            shiftId: ''.concat(t.channel_id, '-').concat(t.id)
        }),
        e_ = (0, w.Z)(t, n),
        eP = (0, N.Z)(t, n),
        eI = (0, G.Z)(t, n),
        eN = (0, h.Z)(a, n.getGuildId()),
        eZ = (0, O.Z)(t),
        eD = (0, j.Z)(t),
        eA = (0, F.Z)(t),
        ex = (0, E.Z)(t, n),
        eT = (0, b.Z)({
            commandType: o.yU.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: V
        }),
        eM = (0, k.Z)(t),
        ew = (0, p.Z)(t);
    return (0, i.jsxs)(l.v2r, {
        navId: Y,
        onClose: Q,
        'aria-label': $,
        onSelect: J,
        children: [
            (0, i.jsx)(l.kSQ, { children: et }),
            (0, i.jsx)(l.kSQ, { children: en }),
            (0, i.jsxs)(l.kSQ, {
                children: ['' === a ? ei : null, er, eu, ex]
            }),
            (0, i.jsxs)(l.kSQ, {
                children: [el, e_, eP, eI]
            }),
            (0, i.jsxs)(l.kSQ, {
                children: [eD, ea, eZ, eT, es, ec, ed, ef, eE, ew, eM]
            }),
            (0, i.jsxs)(l.kSQ, {
                children: [em, eg, ep, q && eb, q && eO, eh]
            }),
            (0, i.jsxs)(l.kSQ, {
                children: [eo, eN, ev, eS, eA]
            }),
            (0, i.jsx)(l.kSQ, { children: ey }),
            (0, i.jsx)(l.kSQ, { children: ej })
        ]
    });
}
