t.r(n),
    t.d(n, {
        default: function () {
            return F;
        },
        useMessageMenu: function () {
            return z;
        }
    });
var i = t(200651);
t(192379);
var l = t(513431),
    r = t(481060),
    a = t(239091),
    o = t(911969),
    s = t(299206),
    u = t(26737),
    c = t(29264),
    d = t(905041),
    m = t(89013),
    g = t(988500),
    f = t(570870),
    h = t(786095),
    E = t(268623),
    I = t(986240),
    v = t(667922),
    p = t(941389),
    M = t(449751),
    x = t(749339),
    S = t(601184),
    Z = t(6148),
    j = t(519110),
    T = t(759875),
    N = t(168405),
    _ = t(536639),
    b = t(720904),
    A = t(88791),
    C = t(385302),
    P = t(873699),
    y = t(134323),
    D = t(429260),
    L = t(1626),
    O = t(279329),
    R = t(627938),
    G = t(512303),
    w = t(481300),
    U = t(975368),
    k = t(388032);
function F(e) {
    var n, t;
    let i,
        r,
        o,
        s,
        { channel: u, message: c, target: d, mediaItem: m, shouldHideMediaOptions: g, onSelect: f, onHeightUpdate: h } = e,
        E = d,
        I = d.getAttribute('data-type'),
        v = d.getAttribute('data-id'),
        p = d.getAttribute('data-name');
    if (null != m) r = i = o = m.url;
    else for (; (0, l.k)(E); ) (0, l.k)(E, HTMLImageElement) && null != E.src && (r = E.src), (0, l.k)(E, HTMLAnchorElement) && null != E.href && ((i = E.href), (s = E.textContent), null == r && 'img' === E.getAttribute('data-role') && ((r = i), E.hasAttribute('data-safe-src') && '' !== E.getAttribute('data-safe-src') && (o = E.getAttribute('data-safe-src')))), (E = E.parentNode);
    return z({
        message: c,
        channel: u,
        mediaItem: m,
        textSelection: null !== (t = null === (n = document.getSelection()) || void 0 === n ? void 0 : n.toString()) && void 0 !== t ? t : '',
        favoriteableType: I,
        favoriteableId: v,
        favoriteableName: p,
        itemHref: i,
        itemSrc: r,
        itemSafeSrc: o,
        itemTextContent: s,
        canReport: !0,
        onHeightUpdate: h,
        onSelect: f,
        onClose: a.Zy,
        navId: 'message',
        ariaLabel: k.intl.string(k.t.ChPNkJ),
        shouldHideMediaOptions: g
    });
}
function z(e) {
    let { message: n, channel: t, mediaItem: l, textSelection: a, favoriteableType: F, favoriteableId: z, favoriteableName: K, itemHref: B, itemSrc: H, itemSafeSrc: X, itemTextContent: V, canReport: q, onHeightUpdate: J, onSelect: W, onClose: Y, navId: $, ariaLabel: Q, shouldHideMediaOptions: ee = !1 } = e,
        en = (0, u.Z)(a),
        et = (0, m.Z)(a),
        ei = (0, b.Z)(n, t),
        el = (0, v.Z)(n, t),
        er = (0, Z.Z)(n, t),
        ea = (0, _.Z)(n, t),
        eo = (0, j.Z)({
            type: F,
            id: z,
            name: K
        }),
        es = (0, L.Z)(n, t),
        eu = (0, N.Z)(n, t),
        ec = (0, A.Z)(n),
        ed = (0, p.Z)(n, t),
        em = (0, M.Z)(n, t),
        eg = (0, C.Z)(n, t),
        ef = (0, P.Z)(n, t),
        eh = (0, S.Z)(n, t),
        eE = (0, D.Z)(n),
        eI = (0, D.e)(n),
        ev = (0, O.Z)(n, t),
        ep = (0, d.Z)(null != B ? B : H, V, n, { shouldHideMediaOptions: ee }),
        eM = (0, c.Z)(X, n, { shouldHideMediaOptions: ee }),
        ex = (0, w.Z)(n, l),
        eS = (0, s.Z)({
            id: n.id,
            label: k.intl.string(k.t.zBoHlZ),
            shiftId: ''.concat(n.channel_id, '-').concat(n.id)
        }),
        eZ = (0, y.Z)(n, t),
        ej = (0, T.Z)(n, t),
        eT = (0, R.Z)(n, t),
        eN = (0, h.Z)(a, t.getGuildId()),
        e_ = (0, E.Z)(n),
        eb = (0, x.Z)(n),
        eA = (0, U.Z)(n),
        eC = (0, I.Z)(n, t),
        eP = (0, f.Z)({
            commandType: o.yU.MESSAGE,
            commandTargetId: n.id,
            channel: t,
            guildId: void 0,
            onHeightUpdate: J
        }),
        ey = (0, G.Z)(n),
        eD = (0, g.Z)(n);
    return (0, i.jsxs)(r.Menu, {
        navId: $,
        onClose: Y,
        'aria-label': Q,
        onSelect: W,
        children: [
            (0, i.jsx)(r.MenuGroup, { children: en }),
            (0, i.jsx)(r.MenuGroup, { children: et }),
            (0, i.jsxs)(r.MenuGroup, {
                children: ['' === a ? ei : null, el, ec, eC]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [er, eZ, ej, eT]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [eb, ea, e_, eP, es, eu, ed, em, ev, eD, ey]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [ef, eg, eh, q && eE, q && eI]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [eo, eN, eM, ex, eA]
            }),
            (0, i.jsx)(r.MenuGroup, { children: ep }),
            (0, i.jsx)(r.MenuGroup, { children: eS })
        ]
    });
}
