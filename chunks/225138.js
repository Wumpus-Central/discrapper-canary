n.d(t, {
    S: () => K,
    default: () => F
});
var i = n(200651);
n(192379);
var l = n(374470),
    a = n(481060),
    s = n(239091),
    r = n(911969),
    o = n(299206),
    d = n(26737),
    c = n(29264),
    u = n(905041),
    g = n(89013),
    f = n(988500),
    m = n(570870),
    h = n(786095),
    E = n(268623),
    v = n(986240),
    Z = n(667922),
    x = n(941389),
    S = n(449751),
    N = n(749339),
    I = n(601184),
    p = n(6148),
    _ = n(519110),
    T = n(759875),
    M = n(168405),
    j = n(536639),
    b = n(720904),
    A = n(88791),
    P = n(385302),
    C = n(873699),
    y = n(134323),
    D = n(429260),
    L = n(1626),
    O = n(279329),
    R = n(627938),
    G = n(512303),
    k = n(481300),
    w = n(975368),
    U = n(388032);
function F(e) {
    var t, n;
    let i,
        a,
        r,
        o,
        { channel: d, message: c, target: u, mediaItem: g, shouldHideMediaOptions: f, onSelect: m, onHeightUpdate: h } = e,
        E = u,
        v = u.getAttribute('data-type'),
        Z = u.getAttribute('data-id'),
        x = u.getAttribute('data-name');
    if (null != g) a = i = r = g.url;
    else for (; (0, l.k)(E); ) (0, l.k)(E, HTMLImageElement) && null != E.src && (a = E.src), (0, l.k)(E, HTMLAnchorElement) && null != E.href && ((i = E.href), (o = E.textContent), null == a && 'img' === E.getAttribute('data-role') && ((a = i), E.hasAttribute('data-safe-src') && '' !== E.getAttribute('data-safe-src') && (r = E.getAttribute('data-safe-src')))), (E = E.parentNode);
    return K({
        message: c,
        channel: d,
        mediaItem: g,
        textSelection: null !== (n = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : '',
        favoriteableType: v,
        favoriteableId: Z,
        favoriteableName: x,
        itemHref: i,
        itemSrc: a,
        itemSafeSrc: r,
        itemTextContent: o,
        canReport: !0,
        onHeightUpdate: h,
        onSelect: m,
        onClose: s.Zy,
        navId: 'message',
        ariaLabel: U.intl.string(U.t.ChPNkJ),
        shouldHideMediaOptions: f
    });
}
function K(e) {
    let { message: t, channel: n, mediaItem: l, textSelection: s, favoriteableType: F, favoriteableId: K, favoriteableName: z, itemHref: H, itemSrc: B, itemSafeSrc: X, itemTextContent: q, canReport: J, onHeightUpdate: Q, onSelect: V, onClose: W, navId: Y, ariaLabel: $, shouldHideMediaOptions: ee = !1 } = e,
        et = (0, d.Z)(s),
        en = (0, g.Z)(s),
        ei = (0, b.Z)(t, n),
        el = (0, Z.Z)(t, n),
        ea = (0, p.Z)(t, n),
        es = (0, j.Z)(t, n),
        er = (0, _.Z)({
            type: F,
            id: K,
            name: z
        }),
        eo = (0, L.Z)(t, n),
        ed = (0, M.Z)(t, n),
        ec = (0, A.Z)(t),
        eu = (0, x.Z)(t, n),
        eg = (0, S.Z)(t, n),
        ef = (0, P.Z)(t, n),
        em = (0, C.Z)(t, n),
        eh = (0, I.Z)(t, n),
        eE = (0, D.Z)(t),
        ev = (0, D.e)(t),
        eZ = (0, O.Z)(t, n),
        ex = (0, u.Z)(null != H ? H : B, q, t, { shouldHideMediaOptions: ee }),
        eS = (0, c.Z)(X, t, { shouldHideMediaOptions: ee }),
        eN = (0, k.Z)(t, l),
        eI = (0, o.Z)({
            id: t.id,
            label: U.intl.string(U.t.zBoHlZ),
            shiftId: ''.concat(t.channel_id, '-').concat(t.id)
        }),
        ep = (0, y.Z)(t, n),
        e_ = (0, T.Z)(t, n),
        eT = (0, R.Z)(t, n),
        eM = (0, h.Z)(s, n.getGuildId()),
        ej = (0, E.Z)(t),
        eb = (0, N.Z)(t),
        eA = (0, w.Z)(t),
        eP = (0, v.Z)(t, n),
        eC = (0, m.Z)({
            commandType: r.yU.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: Q
        }),
        ey = (0, G.Z)(t),
        eD = (0, f.Z)(t);
    return (0, i.jsxs)(a.v2r, {
        navId: Y,
        onClose: W,
        'aria-label': $,
        onSelect: V,
        children: [
            (0, i.jsx)(a.kSQ, { children: et }),
            (0, i.jsx)(a.kSQ, { children: en }),
            (0, i.jsxs)(a.kSQ, {
                children: ['' === s ? ei : null, el, ec, eP]
            }),
            (0, i.jsxs)(a.kSQ, {
                children: [ea, ep, e_, eT]
            }),
            (0, i.jsxs)(a.kSQ, {
                children: [eb, es, ej, eC, eo, ed, eu, eg, eZ, eD, ey]
            }),
            (0, i.jsxs)(a.kSQ, {
                children: [em, ef, eh, J && eE, J && ev]
            }),
            (0, i.jsxs)(a.kSQ, {
                children: [er, eM, eS, eN, eA]
            }),
            (0, i.jsx)(a.kSQ, { children: ex }),
            (0, i.jsx)(a.kSQ, { children: eI })
        ]
    });
}
