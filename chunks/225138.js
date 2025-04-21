n.d(t, {
    S: () => H,
    default: () => F
});
var i = n(200651);
n(192379);
var r = n(374470),
    l = n(481060),
    a = n(239091),
    o = n(911969),
    s = n(299206),
    c = n(26737),
    u = n(29264),
    d = n(905041),
    f = n(89013),
    g = n(988500),
    m = n(570870),
    b = n(786095),
    h = n(268623),
    p = n(986240),
    O = n(667922),
    y = n(941389),
    E = n(449751),
    v = n(749339),
    j = n(601184),
    S = n(6148),
    P = n(519110),
    _ = n(759875),
    Z = n(168405),
    N = n(536639),
    I = n(720904),
    x = n(88791),
    T = n(385302),
    A = n(873699),
    M = n(134323),
    D = n(429260),
    w = n(1626),
    C = n(279329),
    L = n(627938),
    R = n(512303),
    k = n(481300),
    G = n(975368),
    U = n(388032);
function F(e) {
    var t, n;
    let i,
        l,
        o,
        s,
        { channel: c, message: u, target: d, mediaItem: f, shouldHideMediaOptions: g, onSelect: m, onHeightUpdate: b } = e,
        h = d,
        p = d.getAttribute('data-type'),
        O = d.getAttribute('data-id'),
        y = d.getAttribute('data-name');
    if (null != f) l = i = o = f.url;
    else for (; (0, r.k)(h); ) (0, r.k)(h, HTMLImageElement) && null != h.src && (l = h.src), (0, r.k)(h, HTMLAnchorElement) && null != h.href && ((i = h.href), (s = h.textContent), null == l && 'img' === h.getAttribute('data-role') && ((l = i), h.hasAttribute('data-safe-src') && '' !== h.getAttribute('data-safe-src') && (o = h.getAttribute('data-safe-src')))), (h = h.parentNode);
    return H({
        message: u,
        channel: c,
        mediaItem: f,
        textSelection: null != (n = null == (t = document.getSelection()) ? void 0 : t.toString()) ? n : '',
        favoriteableType: p,
        favoriteableId: O,
        favoriteableName: y,
        itemHref: i,
        itemSrc: l,
        itemSafeSrc: o,
        itemTextContent: s,
        canReport: !0,
        onHeightUpdate: b,
        onSelect: m,
        onClose: a.Zy,
        navId: 'message',
        ariaLabel: U.intl.string(U.t.ChPNkJ),
        shouldHideMediaOptions: g
    });
}
function H(e) {
    let { message: t, channel: n, mediaItem: r, textSelection: a, favoriteableType: F, favoriteableId: H, favoriteableName: K, itemHref: z, itemSrc: B, itemSafeSrc: X, itemTextContent: q, canReport: V, onHeightUpdate: W, onSelect: J, onClose: Q, navId: Y, ariaLabel: $, shouldHideMediaOptions: ee = !1 } = e,
        et = (0, c.Z)(a),
        en = (0, f.Z)(a),
        ei = (0, I.Z)(t, n),
        er = (0, O.Z)(t, n),
        el = (0, S.Z)(t, n),
        ea = (0, N.Z)(t, n),
        eo = (0, P.Z)({
            type: F,
            id: H,
            name: K
        }),
        es = (0, w.Z)(t, n),
        ec = (0, Z.Z)(t, n),
        eu = (0, x.Z)(t),
        ed = (0, y.Z)(t, n),
        ef = (0, E.Z)(t, n),
        eg = (0, T.Z)(t, n),
        em = (0, A.Z)(t, n),
        eb = (0, j.Z)(t, n),
        eh = (0, D.Z)(t),
        ep = (0, D.e)(t),
        eO = (0, C.Z)(t, n),
        ey = (0, d.Z)(null != z ? z : B, q, t, { shouldHideMediaOptions: ee }),
        eE = (0, u.Z)(X, t, { shouldHideMediaOptions: ee }),
        ev = (0, k.Z)(t, r),
        ej = (0, s.Z)({
            id: t.id,
            label: U.intl.string(U.t.zBoHlZ),
            shiftId: ''.concat(t.channel_id, '-').concat(t.id)
        }),
        eS = (0, M.Z)(t, n),
        eP = (0, _.Z)(t, n),
        e_ = (0, L.Z)(t, n),
        eZ = (0, b.Z)(a, n.getGuildId()),
        eN = (0, h.Z)(t),
        eI = (0, v.Z)(t),
        ex = (0, G.Z)(t),
        eT = (0, p.Z)(t, n),
        eA = (0, m.Z)({
            commandType: o.yU.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: W
        }),
        eM = (0, R.Z)(t),
        eD = (0, g.Z)(t);
    return (0, i.jsxs)(l.v2r, {
        navId: Y,
        onClose: Q,
        'aria-label': $,
        onSelect: J,
        children: [
            (0, i.jsx)(l.kSQ, { children: et }),
            (0, i.jsx)(l.kSQ, { children: en }),
            (0, i.jsxs)(l.kSQ, {
                children: ['' === a ? ei : null, er, eu, eT]
            }),
            (0, i.jsxs)(l.kSQ, {
                children: [el, eS, eP, e_]
            }),
            (0, i.jsxs)(l.kSQ, {
                children: [eI, ea, eN, eA, es, ec, ed, ef, eO, eD, eM]
            }),
            (0, i.jsxs)(l.kSQ, {
                children: [em, eg, eb, V && eh, V && ep]
            }),
            (0, i.jsxs)(l.kSQ, {
                children: [eo, eZ, eE, ev, ex]
            }),
            (0, i.jsx)(l.kSQ, { children: ey }),
            (0, i.jsx)(l.kSQ, { children: ej })
        ]
    });
}
