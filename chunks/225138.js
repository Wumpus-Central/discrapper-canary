n.d(t, {
    S: () => z,
    default: () => K
});
var i = n(200651);
n(192379);
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
    b = n(988500),
    h = n(570870),
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
    A = n(385302),
    D = n(873699),
    w = n(134323),
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
        { channel: f, message: g, target: m, mediaItem: b, shouldHideMediaOptions: h, onSelect: p, onHeightUpdate: O } = e,
        { analyticsLocations: y } = (0, c.ZP)([s.Z.MESSAGE_CONTEXT_MENU]),
        E = m,
        v = m.getAttribute('data-type'),
        j = m.getAttribute('data-id'),
        S = m.getAttribute('data-name');
    if (null != b) o = l = u = b.url;
    else for (; (0, r.k)(E); ) (0, r.k)(E, HTMLImageElement) && null != E.src && (o = E.src), (0, r.k)(E, HTMLAnchorElement) && null != E.href && ((l = E.href), (d = E.textContent), null == o && 'img' === E.getAttribute('data-role') && ((o = l), E.hasAttribute('data-safe-src') && '' !== E.getAttribute('data-safe-src') && (u = E.getAttribute('data-safe-src')))), (E = E.parentNode);
    let P = null != (n = null == (t = document.getSelection()) ? void 0 : t.toString()) ? n : '';
    return (0, i.jsx)(c.Gt, {
        value: y,
        children: z({
            message: g,
            channel: f,
            mediaItem: b,
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
            shouldHideMediaOptions: h
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
        eg = (0, A.Z)(t, n),
        em = (0, D.Z)(t, n),
        eb = (0, P.Z)(t, n),
        eh = (0, C.Z)(t),
        ep = (0, C.e)(t),
        eO = (0, R.Z)(t, n),
        ey = (0, g.Z)(null != z ? z : B, q, t, { shouldHideMediaOptions: ee }),
        eE = (0, f.Z)(X, t, { shouldHideMediaOptions: ee }),
        ev = (0, U.Z)(t, r),
        ej = (0, u.Z)({
            id: t.id,
            label: H.intl.string(H.t.zBoHlZ),
            shiftId: ''.concat(t.channel_id, '-').concat(t.id)
        }),
        eS = (0, w.Z)(t, n),
        eP = (0, N.Z)(t, n),
        e_ = (0, k.Z)(t, n),
        eZ = (0, p.Z)(a, n.getGuildId()),
        eN = (0, O.Z)(t),
        eI = (0, S.Z)(t),
        ex = (0, F.Z)(t),
        eT = (0, y.Z)(t, n),
        eM = (0, h.Z)({
            commandType: o.yU.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: W
        }),
        eA = (0, G.Z)(t),
        eD = (0, b.Z)(t);
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
                children: [eI, ea, eN, eM, es, ec, ed, ef, eO, eD, eA]
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
