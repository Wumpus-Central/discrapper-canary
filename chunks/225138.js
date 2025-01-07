t.r(n),
    t.d(n, {
        default: function () {
            return k;
        },
        useMessageMenu: function () {
            return F;
        }
    });
var i = t(200651);
t(192379);
var l = t(374470),
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
    v = t(667922),
    I = t(941389),
    p = t(449751),
    M = t(749339),
    Z = t(601184),
    x = t(6148),
    S = t(519110),
    j = t(759875),
    _ = t(168405),
    T = t(536639),
    b = t(720904),
    A = t(88791),
    P = t(385302),
    N = t(873699),
    y = t(134323),
    C = t(429260),
    L = t(1626),
    D = t(279329),
    R = t(627938),
    O = t(512303),
    G = t(481300),
    w = t(975368),
    U = t(388032);
function k(e) {
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
    return F({
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
        ariaLabel: U.intl.string(U.t.ChPNkJ),
        shouldHideMediaOptions: g
    });
}
function F(e) {
    let { message: n, channel: t, mediaItem: l, textSelection: a, favoriteableType: k, favoriteableId: F, favoriteableName: z, itemHref: K, itemSrc: H, itemSafeSrc: B, itemTextContent: X, canReport: V, onHeightUpdate: q, onSelect: J, onClose: W, navId: $, ariaLabel: Y, shouldHideMediaOptions: Q = !1 } = e,
        ee = (0, u.Z)(a),
        en = (0, f.Z)(a),
        et = (0, b.Z)(n, t),
        ei = (0, v.Z)(n, t),
        el = (0, x.Z)(n, t),
        er = (0, T.Z)(n, t),
        ea = (0, S.Z)({
            type: k,
            id: F,
            name: z
        }),
        eo = (0, L.Z)(n, t),
        es = (0, _.Z)(n, t),
        eu = (0, A.Z)(n),
        ed = (0, I.Z)(n, t),
        ec = (0, p.Z)(n, t),
        ef = (0, P.Z)(n, t),
        eg = (0, N.Z)(n, t),
        em = (0, Z.Z)(n, t),
        eh = (0, C.Z)(n),
        eE = (0, C.e)(n),
        ev = (0, D.Z)(n, t),
        eI = (0, c.Z)(null != K ? K : H, X, n, { shouldHideMediaOptions: Q }),
        ep = (0, d.Z)(B, n, { shouldHideMediaOptions: Q }),
        eM = (0, G.Z)(n, l),
        eZ = (0, s.Z)({
            id: n.id,
            label: U.intl.string(U.t.zBoHlZ),
            shiftId: ''.concat(n.channel_id, '-').concat(n.id)
        }),
        ex = (0, y.Z)(n, t),
        eS = (0, j.Z)(n, t),
        ej = (0, R.Z)(n, t),
        e_ = (0, h.Z)(a, t.getGuildId()),
        eT = (0, E.Z)(n),
        eb = (0, M.Z)(n),
        eA = (0, w.Z)(n),
        eP = (0, m.Z)({
            commandType: o.yU.MESSAGE,
            commandTargetId: n.id,
            channel: t,
            guildId: void 0,
            onHeightUpdate: q
        }),
        eN = (0, O.Z)(n),
        ey = (0, g.Z)(n);
    return (0, i.jsxs)(r.Menu, {
        navId: $,
        onClose: W,
        'aria-label': Y,
        onSelect: J,
        children: [
            (0, i.jsx)(r.MenuGroup, { children: ee }),
            (0, i.jsx)(r.MenuGroup, { children: en }),
            (0, i.jsxs)(r.MenuGroup, {
                children: ['' === a ? et : null, ei, eu]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [el, ex, eS, ej]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [eb, er, eT, eP, eo, es, ed, ec, ev, ey, eN]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [eg, ef, em, V && eh, V && eE]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [ea, e_, ep, eM, eA]
            }),
            (0, i.jsx)(r.MenuGroup, { children: eI }),
            (0, i.jsx)(r.MenuGroup, { children: eZ })
        ]
    });
}
