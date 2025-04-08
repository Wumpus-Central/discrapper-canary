n.d(t, {
    S: () => F,
    default: () => U
});
var r = n(200651);
n(192379);
var i = n(374470),
    a = n(481060),
    l = n(239091),
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
    N = n(749339),
    v = n(601184),
    j = n(6148),
    S = n(519110),
    P = n(759875),
    _ = n(168405),
    Z = n(536639),
    I = n(720904),
    x = n(88791),
    T = n(385302),
    A = n(873699),
    M = n(134323),
    D = n(429260),
    w = n(1626),
    C = n(279329),
    W = n(627938),
    L = n(512303),
    R = n(481300),
    k = n(975368),
    G = n(388032);
function U(e) {
    var t, n;
    let r,
        a,
        o,
        s,
        { channel: c, message: u, target: d, mediaItem: f, shouldHideMediaOptions: g, onSelect: m, onHeightUpdate: b } = e,
        h = d,
        p = d.getAttribute('data-type'),
        O = d.getAttribute('data-id'),
        y = d.getAttribute('data-name');
    if (null != f) a = r = o = f.url;
    else for (; (0, i.k)(h); ) (0, i.k)(h, HTMLImageElement) && null != h.src && (a = h.src), (0, i.k)(h, HTMLAnchorElement) && null != h.href && ((r = h.href), (s = h.textContent), null == a && 'img' === h.getAttribute('data-role') && ((a = r), h.hasAttribute('data-safe-src') && '' !== h.getAttribute('data-safe-src') && (o = h.getAttribute('data-safe-src')))), (h = h.parentNode);
    return F({
        message: u,
        channel: c,
        mediaItem: f,
        textSelection: null != (n = null == (t = document.getSelection()) ? void 0 : t.toString()) ? n : '',
        favoriteableType: p,
        favoriteableId: O,
        favoriteableName: y,
        itemHref: r,
        itemSrc: a,
        itemSafeSrc: o,
        itemTextContent: s,
        canReport: !0,
        onHeightUpdate: b,
        onSelect: m,
        onClose: l.Zy,
        navId: 'message',
        ariaLabel: G.NW.string(G.t.ChPNkJ),
        shouldHideMediaOptions: g
    });
}
function F(e) {
    let { message: t, channel: n, mediaItem: i, textSelection: l, favoriteableType: U, favoriteableId: F, favoriteableName: H, itemHref: K, itemSrc: z, itemSafeSrc: B, itemTextContent: X, canReport: q, onHeightUpdate: V, onSelect: J, onClose: Q, navId: Y, ariaLabel: $, shouldHideMediaOptions: ee = !1 } = e,
        et = (0, c.Z)(l),
        en = (0, f.Z)(l),
        er = (0, I.Z)(t, n),
        ei = (0, O.Z)(t, n),
        ea = (0, j.Z)(t, n),
        el = (0, Z.Z)(t, n),
        eo = (0, S.Z)({
            type: U,
            id: F,
            name: H
        }),
        es = (0, w.Z)(t, n),
        ec = (0, _.Z)(t, n),
        eu = (0, x.Z)(t),
        ed = (0, y.Z)(t, n),
        ef = (0, E.Z)(t, n),
        eg = (0, T.Z)(t, n),
        em = (0, A.Z)(t, n),
        eb = (0, v.Z)(t, n),
        eh = (0, D.Z)(t),
        ep = (0, D.e)(t),
        eO = (0, C.Z)(t, n),
        ey = (0, d.Z)(null != K ? K : z, X, t, { shouldHideMediaOptions: ee }),
        eE = (0, u.Z)(B, t, { shouldHideMediaOptions: ee }),
        eN = (0, R.Z)(t, i),
        ev = (0, s.Z)({
            id: t.id,
            label: G.NW.string(G.t.zBoHlZ),
            shiftId: ''.concat(t.channel_id, '-').concat(t.id)
        }),
        ej = (0, M.Z)(t, n),
        eS = (0, P.Z)(t, n),
        eP = (0, W.Z)(t, n),
        e_ = (0, b.Z)(l, n.getGuildId()),
        eZ = (0, h.Z)(t),
        eI = (0, N.Z)(t),
        ex = (0, k.Z)(t),
        eT = (0, p.Z)(t, n),
        eA = (0, m.Z)({
            commandType: o.yU.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: V
        }),
        eM = (0, L.Z)(t),
        eD = (0, g.Z)(t);
    return (0, r.jsxs)(a.v2r, {
        navId: Y,
        onClose: Q,
        'aria-label': $,
        onSelect: J,
        children: [
            (0, r.jsx)(a.kSQ, { children: et }),
            (0, r.jsx)(a.kSQ, { children: en }),
            (0, r.jsxs)(a.kSQ, {
                children: ['' === l ? er : null, ei, eu, eT]
            }),
            (0, r.jsxs)(a.kSQ, {
                children: [ea, ej, eS, eP]
            }),
            (0, r.jsxs)(a.kSQ, {
                children: [eI, el, eZ, eA, es, ec, ed, ef, eO, eD, eM]
            }),
            (0, r.jsxs)(a.kSQ, {
                children: [em, eg, eb, q && eh, q && ep]
            }),
            (0, r.jsxs)(a.kSQ, {
                children: [eo, e_, eE, eN, ex]
            }),
            (0, r.jsx)(a.kSQ, { children: ey }),
            (0, r.jsx)(a.kSQ, { children: ev })
        ]
    });
}
