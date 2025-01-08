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
    d = t(29264),
    c = t(905041),
    f = t(89013),
    g = t(988500),
    m = t(570870),
    h = t(786095),
    E = t(268623),
    v = t(986240),
    I = t(667922),
    p = t(941389),
    M = t(449751),
    Z = t(749339),
    x = t(601184),
    S = t(6148),
    j = t(519110),
    _ = t(759875),
    T = t(168405),
    b = t(536639),
    A = t(720904),
    P = t(88791),
    N = t(385302),
    y = t(873699),
    C = t(134323),
    L = t(429260),
    D = t(1626),
    R = t(279329),
    O = t(627938),
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
        { channel: u, message: d, target: c, mediaItem: f, shouldHideMediaOptions: g, onSelect: m, onHeightUpdate: h } = e,
        E = c,
        v = c.getAttribute('data-type'),
        I = c.getAttribute('data-id'),
        p = c.getAttribute('data-name');
    if (null != f) r = i = o = f.url;
    else for (; (0, l.k)(E); ) (0, l.k)(E, HTMLImageElement) && null != E.src && (r = E.src), (0, l.k)(E, HTMLAnchorElement) && null != E.href && ((i = E.href), (s = E.textContent), null == r && 'img' === E.getAttribute('data-role') && ((r = i), E.hasAttribute('data-safe-src') && '' !== E.getAttribute('data-safe-src') && (o = E.getAttribute('data-safe-src')))), (E = E.parentNode);
    return z({
        message: d,
        channel: u,
        mediaItem: f,
        textSelection: null !== (t = null === (n = document.getSelection()) || void 0 === n ? void 0 : n.toString()) && void 0 !== t ? t : '',
        favoriteableType: v,
        favoriteableId: I,
        favoriteableName: p,
        itemHref: i,
        itemSrc: r,
        itemSafeSrc: o,
        itemTextContent: s,
        canReport: !0,
        onHeightUpdate: h,
        onSelect: m,
        onClose: a.Zy,
        navId: 'message',
        ariaLabel: k.intl.string(k.t.ChPNkJ),
        shouldHideMediaOptions: g
    });
}
function z(e) {
    let { message: n, channel: t, mediaItem: l, textSelection: a, favoriteableType: F, favoriteableId: z, favoriteableName: K, itemHref: H, itemSrc: B, itemSafeSrc: X, itemTextContent: V, canReport: q, onHeightUpdate: J, onSelect: W, onClose: $, navId: Y, ariaLabel: Q, shouldHideMediaOptions: ee = !1 } = e,
        en = (0, u.Z)(a),
        et = (0, f.Z)(a),
        ei = (0, A.Z)(n, t),
        el = (0, I.Z)(n, t),
        er = (0, S.Z)(n, t),
        ea = (0, b.Z)(n, t),
        eo = (0, j.Z)({
            type: F,
            id: z,
            name: K
        }),
        es = (0, D.Z)(n, t),
        eu = (0, T.Z)(n, t),
        ed = (0, P.Z)(n),
        ec = (0, p.Z)(n, t),
        ef = (0, M.Z)(n, t),
        eg = (0, N.Z)(n, t),
        em = (0, y.Z)(n, t),
        eh = (0, x.Z)(n, t),
        eE = (0, L.Z)(n),
        ev = (0, L.e)(n),
        eI = (0, R.Z)(n, t),
        ep = (0, c.Z)(null != H ? H : B, V, n, { shouldHideMediaOptions: ee }),
        eM = (0, d.Z)(X, n, { shouldHideMediaOptions: ee }),
        eZ = (0, w.Z)(n, l),
        ex = (0, s.Z)({
            id: n.id,
            label: k.intl.string(k.t.zBoHlZ),
            shiftId: ''.concat(n.channel_id, '-').concat(n.id)
        }),
        eS = (0, C.Z)(n, t),
        ej = (0, _.Z)(n, t),
        e_ = (0, O.Z)(n, t),
        eT = (0, h.Z)(a, t.getGuildId()),
        eb = (0, E.Z)(n),
        eA = (0, Z.Z)(n),
        eP = (0, U.Z)(n),
        eN = (0, v.Z)(n, t),
        ey = (0, m.Z)({
            commandType: o.yU.MESSAGE,
            commandTargetId: n.id,
            channel: t,
            guildId: void 0,
            onHeightUpdate: J
        }),
        eC = (0, G.Z)(n),
        eL = (0, g.Z)(n);
    return (0, i.jsxs)(r.Menu, {
        navId: Y,
        onClose: $,
        'aria-label': Q,
        onSelect: W,
        children: [
            (0, i.jsx)(r.MenuGroup, { children: en }),
            (0, i.jsx)(r.MenuGroup, { children: et }),
            (0, i.jsxs)(r.MenuGroup, {
                children: ['' === a ? ei : null, el, ed, eN]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [er, eS, ej, e_]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [eA, ea, eb, ey, es, eu, ec, ef, eI, eL, eC]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [em, eg, eh, q && eE, q && ev]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [eo, eT, eM, eZ, eP]
            }),
            (0, i.jsx)(r.MenuGroup, { children: ep }),
            (0, i.jsx)(r.MenuGroup, { children: ex })
        ]
    });
}
