n.d(t, {
    S: () => K,
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
    h = n(268623),
    y = n(986240),
    v = n(667922),
    E = n(941389),
    j = n(449751),
    S = n(749339),
    _ = n(601184),
    P = n(6148),
    Z = n(519110),
    N = n(759875),
    I = n(168405),
    w = n(536639),
    M = n(720904),
    T = n(88791),
    x = n(385302),
    D = n(873699),
    A = n(134323),
    C = n(429260),
    R = n(1626),
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
        { channel: f, message: g, target: b, mediaItem: p, shouldHideMediaOptions: O, onSelect: m, onHeightUpdate: h } = e,
        { analyticsLocations: y } = (0, c.ZP)([s.Z.MESSAGE_CONTEXT_MENU]),
        v = b,
        E = b.getAttribute('data-type'),
        j = b.getAttribute('data-id'),
        S = b.getAttribute('data-name');
    if (null != p) o = l = u = p.url;
    else for (; (0, i.k)(v); ) (0, i.k)(v, HTMLImageElement) && null != v.src && (o = v.src), (0, i.k)(v, HTMLAnchorElement) && null != v.href && ((l = v.href), (d = v.textContent), null == o && 'img' === v.getAttribute('data-role') && ((o = l), v.hasAttribute('data-safe-src') && '' !== v.getAttribute('data-safe-src') && (u = v.getAttribute('data-safe-src')))), (v = v.parentNode);
    let _ = null != (n = null == (t = document.getSelection()) ? void 0 : t.toString()) ? n : '';
    return (0, r.jsx)(c.Gt, {
        value: y,
        children: K({
            message: g,
            channel: f,
            mediaItem: p,
            textSelection: _,
            favoriteableType: E,
            favoriteableId: j,
            favoriteableName: S,
            itemHref: l,
            itemSrc: o,
            itemSafeSrc: u,
            itemTextContent: d,
            canReport: !0,
            onHeightUpdate: h,
            onSelect: m,
            onClose: a.Zy,
            navId: 'message',
            ariaLabel: H.intl.string(H.t.ChPNkJ),
            shouldHideMediaOptions: O
        })
    });
}
function K(e) {
    let { message: t, channel: n, mediaItem: i, textSelection: a, favoriteableType: s, favoriteableId: c, favoriteableName: z, itemHref: K, itemSrc: X, itemSafeSrc: q, itemTextContent: V, canReport: B, onHeightUpdate: W, onSelect: J, onClose: Q, navId: Y, ariaLabel: $, shouldHideMediaOptions: ee = !1 } = e,
        et = (0, d.Z)(a),
        en = (0, b.Z)(a),
        er = (0, M.Z)(t, n),
        ei = (0, v.Z)(t, n),
        el = (0, P.Z)(t, n),
        ea = (0, w.Z)(t, n),
        eo = (0, Z.Z)({
            type: s,
            id: c,
            name: z
        }),
        es = (0, R.Z)(t, n),
        ec = (0, I.Z)(t, n),
        eu = (0, T.Z)(t),
        ed = (0, E.Z)(t, n),
        ef = (0, j.Z)(t, n),
        eg = (0, x.Z)(t, n),
        eb = (0, D.Z)(t, n),
        ep = (0, _.Z)(t, n),
        eO = (0, C.ZP)(t),
        em = (0, C.wY)(t),
        eh = (0, C.eH)(t),
        ey = (0, L.Z)(t, n),
        ev = (0, g.Z)(null != K ? K : X, V, t, { shouldHideMediaOptions: ee }),
        eE = (0, f.Z)(q, t, { shouldHideMediaOptions: ee }),
        ej = (0, U.Z)(t, i),
        eS = (0, u.Z)({
            id: t.id,
            label: H.intl.string(H.t.zBoHlZ),
            shiftId: ''.concat(t.channel_id, '-').concat(t.id)
        }),
        e_ = (0, A.Z)(t, n),
        eP = (0, N.Z)(t, n),
        eZ = (0, k.Z)(t, n),
        eN = (0, m.Z)(a, n.getGuildId()),
        eI = (0, h.Z)(t),
        ew = (0, S.Z)(t),
        eM = (0, F.Z)(t),
        eT = (0, y.Z)(t, n),
        ex = (0, O.Z)({
            commandType: o.yU.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: W
        }),
        eD = (0, G.Z)(t),
        eA = (0, p.Z)(t);
    return (0, r.jsxs)(l.v2r, {
        navId: Y,
        onClose: Q,
        'aria-label': $,
        onSelect: J,
        children: [
            (0, r.jsx)(l.kSQ, { children: et }),
            (0, r.jsx)(l.kSQ, { children: en }),
            (0, r.jsxs)(l.kSQ, {
                children: ['' === a ? er : null, ei, eu, eT]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [el, e_, eP, eZ]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [ew, ea, eI, ex, es, ec, ed, ef, ey, eA, eD]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [eb, eg, ep, B && eO, B && eh, em]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [eo, eN, eE, ej, eM]
            }),
            (0, r.jsx)(l.kSQ, { children: ev }),
            (0, r.jsx)(l.kSQ, { children: eS })
        ]
    });
}
