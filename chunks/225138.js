n.d(t, {
    S: () => X,
    default: () => B
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
    m = n(570870),
    O = n(786095),
    y = n(268623),
    h = n(986240),
    v = n(667922),
    j = n(941389),
    S = n(449751),
    E = n(749339),
    _ = n(601184),
    P = n(6148),
    Z = n(519110),
    T = n(759875),
    I = n(168405),
    N = n(536639),
    A = n(720904),
    w = n(88791),
    x = n(385302),
    M = n(873699),
    D = n(134323),
    C = n(429260),
    R = n(1626),
    L = n(279329),
    k = n(627938),
    G = n(189976),
    U = n(512303),
    F = n(481300),
    H = n(975368),
    z = n(388032);
function B(e) {
    var t, n;
    let l,
        o,
        u,
        d,
        { channel: f, message: g, target: b, mediaItem: p, shouldHideMediaOptions: m, onSelect: O, onHeightUpdate: y } = e,
        { analyticsLocations: h } = (0, c.ZP)([s.Z.MESSAGE_CONTEXT_MENU]),
        v = b,
        j = b.getAttribute('data-type'),
        S = b.getAttribute('data-id'),
        E = b.getAttribute('data-name');
    if (null != p) o = l = u = p.url;
    else for (; (0, i.k)(v); ) ((0, i.k)(v, HTMLImageElement) && null != v.src && (o = v.src), (0, i.k)(v, HTMLAnchorElement) && null != v.href && ((l = v.href), (d = v.textContent), null == o && 'img' === v.getAttribute('data-role') && ((o = l), v.hasAttribute('data-safe-src') && '' !== v.getAttribute('data-safe-src') && (u = v.getAttribute('data-safe-src')))), (v = v.parentNode));
    let _ = null != (n = null == (t = document.getSelection()) ? void 0 : t.toString()) ? n : '';
    return (0, r.jsx)(c.Gt, {
        value: h,
        children: X({
            message: g,
            channel: f,
            mediaItem: p,
            textSelection: _,
            favoriteableType: j,
            favoriteableId: S,
            favoriteableName: E,
            itemHref: l,
            itemSrc: o,
            itemSafeSrc: u,
            itemTextContent: d,
            canReport: !0,
            onHeightUpdate: y,
            onSelect: O,
            onClose: a.Zy,
            navId: 'message',
            ariaLabel: z.intl.string(z.t.ChPNkJ),
            shouldHideMediaOptions: m
        })
    });
}
function X(e) {
    let { message: t, channel: n, mediaItem: i, textSelection: a, favoriteableType: s, favoriteableId: c, favoriteableName: B, itemHref: X, itemSrc: K, itemSafeSrc: W, itemTextContent: q, canReport: V, onHeightUpdate: Q, onSelect: J, onClose: Y, navId: $, ariaLabel: ee, shouldHideMediaOptions: et = !1 } = e,
        en = (0, d.Z)(a),
        er = (0, b.Z)(a),
        ei = (0, A.Z)(t, n),
        el = (0, v.Z)(t, n),
        ea = (0, P.Z)(t, n),
        eo = (0, N.Z)(t, n),
        es = (0, Z.Z)({
            type: s,
            id: c,
            name: B
        }),
        ec = (0, R.Z)(t, n),
        eu = (0, I.Z)(t, n),
        ed = (0, w.Z)(t),
        ef = (0, j.Z)(t, n),
        eg = (0, S.Z)(t, n),
        eb = (0, x.Z)(t, n),
        ep = (0, M.Z)(t, n),
        em = (0, _.Z)(t, n),
        eO = (0, C.ZP)(t),
        ey = (0, C.wY)(t),
        eh = (0, C.eH)(t),
        ev = (0, L.Z)(t, n),
        ej = (0, g.Z)(null != X ? X : K, q, t, { shouldHideMediaOptions: et }),
        eS = (0, f.Z)(W, t, {
            shouldHideMediaOptions: et,
            contentType: null == i ? void 0 : i.contentType
        }),
        eE = (0, F.Z)(t, i),
        e_ = (0, u.Z)({
            id: t.id,
            label: z.intl.string(z.t.zBoHlZ),
            shiftId: ''.concat(t.channel_id, '-').concat(t.id)
        }),
        eP = (0, D.Z)(t, n),
        eZ = (0, T.Z)(t, n),
        eT = (0, k.Z)(t, n),
        eI = (0, O.Z)(a, n.getGuildId()),
        eN = (0, y.Z)(t),
        eA = (0, E.Z)(t),
        ew = (0, G.Z)(t, n),
        ex = (0, H.Z)(t),
        eM = (0, h.Z)(t, n),
        eD = (0, m.Z)({
            commandType: o.yU.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: Q
        }),
        eC = (0, U.Z)(t),
        eR = (0, p.Z)(t);
    return (0, r.jsxs)(l.v2r, {
        navId: $,
        onClose: Y,
        'aria-label': ee,
        onSelect: J,
        children: [
            (0, r.jsx)(l.kSQ, { children: en }),
            (0, r.jsx)(l.kSQ, { children: er }),
            (0, r.jsxs)(l.kSQ, {
                children: ['' === a ? ei : null, el, ed, eM]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [ea, eP, eZ, eT]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [eA, ew, eo, eN, eD, ec, eu, ef, eg, ev, eR, eC]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [ep, eb, em, V && eO, V && eh, ey]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [es, eI, eS, eE, ex]
            }),
            (0, r.jsx)(l.kSQ, { children: ej }),
            (0, r.jsx)(l.kSQ, { children: e_ })
        ]
    });
}
