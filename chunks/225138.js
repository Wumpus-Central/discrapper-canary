n.d(t, {
    S: () => z,
    default: () => K
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
    h = n(988500),
    b = n(570870),
    p = n(786095),
    O = n(268623),
    y = n(986240),
    E = n(667922),
    v = n(941389),
    j = n(449751),
    S = n(749339),
    P = n(601184),
    _ = n(6148),
    Z = n(519110),
    N = n(759875),
    I = n(168405),
    x = n(536639),
    T = n(720904),
    M = n(88791),
    D = n(385302),
    w = n(873699),
    A = n(134323),
    C = n(429260),
    L = n(1626),
    R = n(279329),
    k = n(627938),
    G = n(512303),
    U = n(481300),
    F = n(975368),
    H = n(388032);
function K(e) {
    var t, n;
    let l,
        o,
        u,
        d,
        { channel: f, message: g, target: m, mediaItem: h, shouldHideMediaOptions: b, onSelect: p, onHeightUpdate: O } = e,
        { analyticsLocations: y } = (0, c.ZP)([s.Z.MESSAGE_CONTEXT_MENU]),
        E = m,
        v = m.getAttribute('data-type'),
        j = m.getAttribute('data-id'),
        S = m.getAttribute('data-name');
    if (null != h) o = l = u = h.url;
    else for (; (0, r.k)(E); ) (0, r.k)(E, HTMLImageElement) && null != E.src && (o = E.src), (0, r.k)(E, HTMLAnchorElement) && null != E.href && ((l = E.href), (d = E.textContent), null == o && 'img' === E.getAttribute('data-role') && ((o = l), E.hasAttribute('data-safe-src') && '' !== E.getAttribute('data-safe-src') && (u = E.getAttribute('data-safe-src')))), (E = E.parentNode);
    let P = null != (n = null == (t = document.getSelection()) ? void 0 : t.toString()) ? n : '';
    return (0, i.jsx)(c.Gt, {
        value: y,
        children: z({
            message: g,
            channel: f,
            mediaItem: h,
            textSelection: P,
            favoriteableType: v,
            favoriteableId: j,
            favoriteableName: S,
            itemHref: l,
            itemSrc: o,
            itemSafeSrc: u,
            itemTextContent: d,
            canReport: !0,
            onHeightUpdate: O,
            onSelect: p,
            onClose: a.Zy,
            navId: 'message',
            ariaLabel: H.intl.string(H.t.ChPNkJ),
            shouldHideMediaOptions: b
        })
    });
}
function z(e) {
    let { message: t, channel: n, mediaItem: r, textSelection: a, favoriteableType: s, favoriteableId: c, favoriteableName: K, itemHref: z, itemSrc: B, itemSafeSrc: X, itemTextContent: q, canReport: V, onHeightUpdate: W, onSelect: J, onClose: Q, navId: Y, ariaLabel: $, shouldHideMediaOptions: ee = !1 } = e,
        et = (0, d.Z)(a),
        en = (0, m.Z)(a),
        ei = (0, T.Z)(t, n),
        er = (0, E.Z)(t, n),
        el = (0, _.Z)(t, n),
        ea = (0, x.Z)(t, n),
        eo = (0, Z.Z)({
            type: s,
            id: c,
            name: K
        }),
        es = (0, L.Z)(t, n),
        ec = (0, I.Z)(t, n),
        eu = (0, M.Z)(t),
        ed = (0, v.Z)(t, n),
        ef = (0, j.Z)(t, n),
        eg = (0, D.Z)(t, n),
        em = (0, w.Z)(t, n),
        eh = (0, P.Z)(t, n),
        eb = (0, C.ZP)(t),
        ep = (0, C.wY)(t),
        eO = (0, C.eH)(t),
        ey = (0, R.Z)(t, n),
        eE = (0, g.Z)(null != z ? z : B, q, t, { shouldHideMediaOptions: ee }),
        ev = (0, f.Z)(X, t, { shouldHideMediaOptions: ee }),
        ej = (0, U.Z)(t, r),
        eS = (0, u.Z)({
            id: t.id,
            label: H.intl.string(H.t.zBoHlZ),
            shiftId: ''.concat(t.channel_id, '-').concat(t.id)
        }),
        eP = (0, A.Z)(t, n),
        e_ = (0, N.Z)(t, n),
        eZ = (0, k.Z)(t, n),
        eN = (0, p.Z)(a, n.getGuildId()),
        eI = (0, O.Z)(t),
        ex = (0, S.Z)(t),
        eT = (0, F.Z)(t),
        eM = (0, y.Z)(t, n),
        eD = (0, b.Z)({
            commandType: o.yU.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: W
        }),
        ew = (0, G.Z)(t),
        eA = (0, h.Z)(t);
    return (0, i.jsxs)(l.v2r, {
        navId: Y,
        onClose: Q,
        'aria-label': $,
        onSelect: J,
        children: [
            (0, i.jsx)(l.kSQ, { children: et }),
            (0, i.jsx)(l.kSQ, { children: en }),
            (0, i.jsxs)(l.kSQ, {
                children: ['' === a ? ei : null, er, eu, eM]
            }),
            (0, i.jsxs)(l.kSQ, {
                children: [el, eP, e_, eZ]
            }),
            (0, i.jsxs)(l.kSQ, {
                children: [ex, ea, eI, eD, es, ec, ed, ef, ey, eA, ew]
            }),
            (0, i.jsxs)(l.kSQ, {
                children: [em, eg, eh, V && eb, V && eO, ep]
            }),
            (0, i.jsxs)(l.kSQ, {
                children: [eo, eN, ev, ej, eT]
            }),
            (0, i.jsx)(l.kSQ, { children: eE }),
            (0, i.jsx)(l.kSQ, { children: eS })
        ]
    });
}
