n.d(t, {
    S: () => Y,
    default: () => H
});
var r = n(255367);
n(73800);
var i = n(374470),
    a = n(481060),
    o = n(239091),
    s = n(911969),
    l = n(100527),
    c = n(906732),
    u = n(299206),
    d = n(26737),
    f = n(29264),
    _ = n(905041),
    p = n(89013),
    h = n(988500),
    m = n(570870),
    g = n(786095),
    E = n(268623),
    b = n(986240),
    y = n(667922),
    O = n(941389),
    v = n(449751),
    I = n(749339),
    T = n(601184),
    S = n(6148),
    A = n(519110),
    N = n(759875),
    C = n(168405),
    w = n(536639),
    R = n(720904),
    P = n(88791),
    D = n(385302),
    L = n(873699),
    x = n(134323),
    k = n(429260),
    j = n(1626),
    M = n(279329),
    U = n(627938),
    G = n(189976),
    B = n(512303),
    Z = n(481300),
    F = n(975368),
    V = n(388032);
function H(e) {
    var t, n;
    let a,
        s,
        u,
        d,
        { channel: f, message: _, target: p, mediaItem: h, shouldHideMediaOptions: m, onSelect: g, onHeightUpdate: E } = e,
        { analyticsLocations: b } = (0, c.ZP)([l.Z.MESSAGE_CONTEXT_MENU]),
        y = p,
        O = p.getAttribute('data-type'),
        v = p.getAttribute('data-id'),
        I = p.getAttribute('data-name');
    if (null != h) s = a = u = h.url;
    else for (; (0, i.k)(y); ) ((0, i.k)(y, HTMLImageElement) && null != y.src && (s = y.src), (0, i.k)(y, HTMLAnchorElement) && null != y.href && ((a = y.href), (d = y.textContent), null == s && 'img' === y.getAttribute('data-role') && ((s = a), y.hasAttribute('data-safe-src') && '' !== y.getAttribute('data-safe-src') && (u = y.getAttribute('data-safe-src')))), (y = y.parentNode));
    let T = null != (n = null == (t = document.getSelection()) ? void 0 : t.toString()) ? n : '';
    return (0, r.jsx)(c.Gt, {
        value: b,
        children: Y({
            message: _,
            channel: f,
            mediaItem: h,
            textSelection: T,
            favoriteableType: O,
            favoriteableId: v,
            favoriteableName: I,
            itemHref: a,
            itemSrc: s,
            itemSafeSrc: u,
            itemTextContent: d,
            canReport: !0,
            onHeightUpdate: E,
            onSelect: g,
            onClose: o.Zy,
            navId: 'message',
            ariaLabel: V.intl.string(V.t.ChPNkJ),
            shouldHideMediaOptions: m
        })
    });
}
function Y(e) {
    let { message: t, channel: n, mediaItem: i, textSelection: o, favoriteableType: l, favoriteableId: c, favoriteableName: H, itemHref: Y, itemSrc: W, itemSafeSrc: K, itemTextContent: z, canReport: q, onHeightUpdate: $, onSelect: X, onClose: Q, navId: J, ariaLabel: ee, shouldHideMediaOptions: et = !1 } = e,
        en = (0, d.Z)(o),
        er = (0, p.Z)(o),
        ei = (0, R.Z)(t, n),
        ea = (0, y.Z)(t, n),
        eo = (0, S.Z)(t, n),
        es = (0, w.Z)(t, n),
        el = (0, A.Z)({
            type: l,
            id: c,
            name: H
        }),
        ec = (0, j.Z)(t, n),
        eu = (0, C.Z)(t, n),
        ed = (0, P.Z)(t),
        ef = (0, O.Z)(t, n),
        e_ = (0, v.Z)(t, n),
        ep = (0, D.Z)(t, n),
        eh = (0, L.Z)(t, n),
        em = (0, T.Z)(t, n),
        eg = (0, k.ZP)(t),
        eE = (0, k.wY)(t),
        eb = (0, k.eH)(t),
        ey = (0, M.Z)(t, n),
        eO = (0, _.Z)(null != Y ? Y : W, z, t, { shouldHideMediaOptions: et }),
        ev = (0, f.Z)(K, t, {
            shouldHideMediaOptions: et,
            contentType: null == i ? void 0 : i.contentType
        }),
        eI = (0, Z.Z)(t, i),
        eT = (0, u.Z)({
            id: t.id,
            label: V.intl.string(V.t.zBoHlZ),
            shiftId: ''.concat(t.channel_id, '-').concat(t.id)
        }),
        eS = (0, x.Z)(t, n),
        eA = (0, N.Z)(t, n),
        eN = (0, U.Z)(t, n),
        eC = (0, g.Z)(o, n.getGuildId()),
        ew = (0, E.Z)(t),
        eR = (0, I.Z)(t),
        eP = (0, G.Z)(t, n),
        eD = (0, F.Z)(t),
        eL = (0, b.Z)(t, n),
        ex = (0, m.Z)({
            commandType: s.yU.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: $
        }),
        ek = (0, B.Z)(t),
        ej = (0, h.Z)(t);
    return (0, r.jsxs)(a.v2r, {
        navId: J,
        onClose: Q,
        'aria-label': ee,
        onSelect: X,
        children: [
            (0, r.jsx)(a.kSQ, { children: en }),
            (0, r.jsx)(a.kSQ, { children: er }),
            (0, r.jsxs)(a.kSQ, {
                children: ['' === o ? ei : null, ea, ed, eL]
            }),
            (0, r.jsxs)(a.kSQ, {
                children: [eo, eS, eA, eN]
            }),
            (0, r.jsxs)(a.kSQ, {
                children: [eR, eP, es, ew, ex, ec, eu, ef, e_, ey, ej, ek]
            }),
            (0, r.jsxs)(a.kSQ, {
                children: [eh, ep, em, q && eg, q && eb, eE]
            }),
            (0, r.jsxs)(a.kSQ, {
                children: [el, eC, ev, eI, eD]
            }),
            (0, r.jsx)(a.kSQ, { children: eO }),
            (0, r.jsx)(a.kSQ, { children: eT })
        ]
    });
}
