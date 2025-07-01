n.d(t, {
    S: () => B,
    default: () => z
});
var r = n(255367);
n(73800);
var i = n(374470),
    l = n(481060),
    a = n(239091),
    o = n(911969),
    s = n(100527),
    c = n(906732),
    u = n(299206),
    d = n(26737),
    f = n(29264),
    g = n(905041),
    b = n(89013),
    p = n(988500),
    O = n(570870),
    m = n(786095),
    y = n(268623),
    h = n(986240),
    v = n(667922),
    j = n(941389),
    E = n(449751),
    S = n(749339),
    _ = n(601184),
    P = n(6148),
    Z = n(519110),
    I = n(759875),
    T = n(168405),
    w = n(536639),
    N = n(720904),
    A = n(88791),
    x = n(385302),
    M = n(873699),
    D = n(134323),
    R = n(429260),
    C = n(1626),
    L = n(279329),
    k = n(627938),
    G = n(512303),
    U = n(481300),
    F = n(975368),
    H = n(388032);
function z(e) {
    var t, n;
    let l,
        o,
        u,
        d,
        { channel: f, message: g, target: b, mediaItem: p, shouldHideMediaOptions: O, onSelect: m, onHeightUpdate: y } = e,
        { analyticsLocations: h } = (0, c.ZP)([s.Z.MESSAGE_CONTEXT_MENU]),
        v = b,
        j = b.getAttribute('data-type'),
        E = b.getAttribute('data-id'),
        S = b.getAttribute('data-name');
    if (null != p) o = l = u = p.url;
    else for (; (0, i.k)(v); ) ((0, i.k)(v, HTMLImageElement) && null != v.src && (o = v.src), (0, i.k)(v, HTMLAnchorElement) && null != v.href && ((l = v.href), (d = v.textContent), null == o && 'img' === v.getAttribute('data-role') && ((o = l), v.hasAttribute('data-safe-src') && '' !== v.getAttribute('data-safe-src') && (u = v.getAttribute('data-safe-src')))), (v = v.parentNode));
    let _ = null != (n = null == (t = document.getSelection()) ? void 0 : t.toString()) ? n : '';
    return (0, r.jsx)(c.Gt, {
        value: h,
        children: B({
            message: g,
            channel: f,
            mediaItem: p,
            textSelection: _,
            favoriteableType: j,
            favoriteableId: E,
            favoriteableName: S,
            itemHref: l,
            itemSrc: o,
            itemSafeSrc: u,
            itemTextContent: d,
            canReport: !0,
            onHeightUpdate: y,
            onSelect: m,
            onClose: a.Zy,
            navId: 'message',
            ariaLabel: H.intl.string(H.t.ChPNkJ),
            shouldHideMediaOptions: O
        })
    });
}
function B(e) {
    let { message: t, channel: n, mediaItem: i, textSelection: a, favoriteableType: s, favoriteableId: c, favoriteableName: z, itemHref: B, itemSrc: X, itemSafeSrc: K, itemTextContent: W, canReport: q, onHeightUpdate: V, onSelect: J, onClose: Q, navId: Y, ariaLabel: $, shouldHideMediaOptions: ee = !1 } = e,
        et = (0, d.Z)(a),
        en = (0, b.Z)(a),
        er = (0, N.Z)(t, n),
        ei = (0, v.Z)(t, n),
        el = (0, P.Z)(t, n),
        ea = (0, w.Z)(t, n),
        eo = (0, Z.Z)({
            type: s,
            id: c,
            name: z
        }),
        es = (0, C.Z)(t, n),
        ec = (0, T.Z)(t, n),
        eu = (0, A.Z)(t),
        ed = (0, j.Z)(t, n),
        ef = (0, E.Z)(t, n),
        eg = (0, x.Z)(t, n),
        eb = (0, M.Z)(t, n),
        ep = (0, _.Z)(t, n),
        eO = (0, R.ZP)(t),
        em = (0, R.wY)(t),
        ey = (0, R.eH)(t),
        eh = (0, L.Z)(t, n),
        ev = (0, g.Z)(null != B ? B : X, W, t, { shouldHideMediaOptions: ee }),
        ej = (0, f.Z)(K, t, {
            shouldHideMediaOptions: ee,
            contentType: null == i ? void 0 : i.contentType
        }),
        eE = (0, U.Z)(t, i),
        eS = (0, u.Z)({
            id: t.id,
            label: H.intl.string(H.t.zBoHlZ),
            shiftId: ''.concat(t.channel_id, '-').concat(t.id)
        }),
        e_ = (0, D.Z)(t, n),
        eP = (0, I.Z)(t, n),
        eZ = (0, k.Z)(t, n),
        eI = (0, m.Z)(a, n.getGuildId()),
        eT = (0, y.Z)(t),
        ew = (0, S.Z)(t),
        eN = (0, F.Z)(t),
        eA = (0, h.Z)(t, n),
        ex = (0, O.Z)({
            commandType: o.yU.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: V
        }),
        eM = (0, G.Z)(t),
        eD = (0, p.Z)(t);
    return (0, r.jsxs)(l.v2r, {
        navId: Y,
        onClose: Q,
        'aria-label': $,
        onSelect: J,
        children: [
            (0, r.jsx)(l.kSQ, { children: et }),
            (0, r.jsx)(l.kSQ, { children: en }),
            (0, r.jsxs)(l.kSQ, {
                children: ['' === a ? er : null, ei, eu, eA]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [el, e_, eP, eZ]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [ew, ea, eT, ex, es, ec, ed, ef, eh, eD, eM]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [eb, eg, ep, q && eO, q && ey, em]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [eo, eI, ej, eE, eN]
            }),
            (0, r.jsx)(l.kSQ, { children: ev }),
            (0, r.jsx)(l.kSQ, { children: eS })
        ]
    });
}
