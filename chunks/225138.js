n.d(t, {
    S: () => W,
    default: () => Q,
});
var r = n(54381),
    i = n(473749),
    l = n(374470),
    a = n(481060),
    o = n(239091),
    s = n(911969),
    c = n(100527),
    u = n(906732),
    d = n(285230),
    f = n(299206),
    g = n(26737),
    b = n(29264),
    p = n(905041),
    m = n(89013),
    O = n(988500),
    y = n(570870),
    h = n(626135),
    v = n(786095),
    j = n(268623),
    E = n(986240),
    S = n(667922),
    P = n(941389),
    _ = n(449751),
    Z = n(749339),
    I = n(601184),
    T = n(6148),
    N = n(519110),
    M = n(759875),
    w = n(168405),
    x = n(536639),
    A = n(720904),
    D = n(88791),
    C = n(385302),
    L = n(873699),
    R = n(134323),
    k = n(429260),
    G = n(1626),
    U = n(279329),
    F = n(627938),
    z = n(189976),
    H = n(512303),
    B = n(481300),
    X = n(975368),
    K = n(304685),
    V = n(981631),
    q = n(388032);
function Q(e) {
    var t, n;
    let i,
        a,
        s,
        d,
        {
            channel: f,
            message: g,
            target: b,
            mediaItem: p,
            shouldHideMediaOptions: m,
            onSelect: O,
            onHeightUpdate: y,
        } = e,
        { analyticsLocations: h } = (0, u.ZP)([c.Z.MESSAGE_CONTEXT_MENU]),
        v = b,
        j = b.getAttribute("data-type"),
        E = b.getAttribute("data-id"),
        S = b.getAttribute("data-name");
    if (null != p) a = i = s = p.url;
    else
        for (; (0, l.kK)(v); )
            (0, l.kK)(v, HTMLImageElement) && null != v.src && (a = v.src),
                (0, l.kK)(v, HTMLAnchorElement) &&
                    null != v.href &&
                    ((i = v.href),
                    (d = v.textContent),
                    null == a &&
                        "img" === v.getAttribute("data-role") &&
                        ((a = i),
                        v.hasAttribute("data-safe-src") &&
                            "" !== v.getAttribute("data-safe-src") &&
                            (s = v.getAttribute("data-safe-src")))),
                (v = v.parentNode);
    let P = null != (n = null == (t = document.getSelection()) ? void 0 : t.toString()) ? n : "";
    return (0, r.jsx)(u.Gt, {
        value: h,
        children: W({
            message: g,
            channel: f,
            mediaItem: p,
            textSelection: P,
            favoriteableType: j,
            favoriteableId: E,
            favoriteableName: S,
            itemHref: i,
            itemSrc: a,
            itemSafeSrc: s,
            itemTextContent: d,
            canReport: !0,
            onHeightUpdate: y,
            onSelect: O,
            onClose: o.Zy,
            navId: "message",
            ariaLabel: q.intl.string(q.t.ChPNkN),
            shouldHideMediaOptions: m,
        }),
    });
}
function W(e) {
    let {
            message: t,
            channel: n,
            mediaItem: l,
            textSelection: o,
            favoriteableType: c,
            favoriteableId: u,
            favoriteableName: Q,
            itemHref: W,
            itemSrc: J,
            itemSafeSrc: Y,
            itemTextContent: $,
            canReport: ee,
            onHeightUpdate: et,
            onSelect: en,
            onClose: er,
            navId: ei,
            ariaLabel: el,
            shouldHideMediaOptions: ea = !1,
        } = e,
        eo = i.useRef(null);
    i.useEffect(() => {
        eo.current = Date.now();
    }, []),
        i.useEffect(
            () => () => {
                if (null != eo.current) {
                    var e;
                    let r = Date.now() - eo.current;
                    h.default.track(V.rMx.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: r,
                        channel_id: n.id,
                        guild_id: null != (e = n.getGuildId()) ? e : void 0,
                        message_id: t.id,
                    });
                }
            },
            [n, t],
        );
    let es = i.useCallback(() => {
            if (null != eo.current) {
                var e;
                let r = Date.now() - eo.current;
                h.default.track(V.rMx.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: r,
                    channel_id: n.id,
                    guild_id: null != (e = n.getGuildId()) ? e : void 0,
                    message_id: t.id,
                });
            }
            null == en || en();
        }, [en, n, t]),
        ec = (0, g.Z)(o),
        eu = (0, m.Z)(o),
        ed = (0, A.Z)(t, n),
        ef = (0, S.Z)(t, n),
        eg = (0, T.Z)(t, n),
        eb = (0, x.Z)(t, n),
        ep = (0, N.Z)({
            type: c,
            id: u,
            name: Q,
        }),
        em = (0, G.Z)(t, n),
        eO = (0, w.Z)(t, n),
        ey = (0, D.Z)(t),
        eh = (0, P.Z)(t, n),
        ev = (0, _.Z)(t, n),
        ej = (0, C.Z)(t, n),
        eE = (0, L.Z)(t, n),
        eS = (0, I.Z)(t, n),
        eP = (0, k.ZP)(t),
        e_ = (0, k.wY)(t),
        eZ = (0, k.eH)(t),
        eI = (0, U.Z)(t, n),
        eT = (0, p.Z)(null != W ? W : J, $, t, { shouldHideMediaOptions: ea }),
        eN = (0, b.Z)(Y, t, {
            shouldHideMediaOptions: ea,
            contentType: null == l ? void 0 : l.contentType,
            originalContentType: null == l ? void 0 : l.originalContentType,
        }),
        eM = (0, B.Z)(t, l),
        ew = (0, f.Z)({
            id: t.id,
            label: q.intl.string(q.t.zBoHlf),
            shiftId: "".concat(t.channel_id, "-").concat(t.id),
        }),
        ex = (0, R.Z)(t, n),
        eA = (0, M.Z)(t, n),
        eD = (0, F.Z)(t, n),
        eC = (0, v.Z)(o, n.getGuildId()),
        eL = (0, j.Z)(t),
        eR = (0, Z.Z)(t),
        ek = (0, z.Z)(t, n),
        eG = (0, X.Z)(t),
        eU = (0, E.Z)(t, n),
        eF = (0, K.Z)(l, { shouldHideMediaOptions: ea }),
        ez = (0, y.Z)({
            commandType: s.yU.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: et,
        }),
        eH = (0, H.Z)(t),
        eB = (0, O.Z)(t),
        { forceIconsLeft: eX, reorderMessageMenuItems: eK } = (0, d.d)("MessageContextMenu");
    return (0, r.jsxs)(a.v2r, {
        navId: ei,
        onClose: er,
        "aria-label": el,
        onSelect: es,
        forceIconsLeft: eX,
        children: [
            (0, r.jsx)(a.kSQ, { children: ec }),
            (0, r.jsx)(a.kSQ, { children: eu }),
            (0, r.jsxs)(a.kSQ, {
                children: ["" === o ? ed : null, ef, ey, eU],
            }),
            (0, r.jsxs)(a.kSQ, {
                children: [eg, ex, eA, eD],
            }),
            (0, r.jsxs)(a.kSQ, {
                children: [eR, ek, eb, eL, ez, em, eO, eh, ev, eI, eB, eH],
            }),
            (0, r.jsxs)(a.kSQ, {
                children: [eE, ej, eS, ee && eP, ee && eZ, e_],
            }),
            (0, r.jsxs)(a.kSQ, {
                children: [ep, eC, eN, eM, eG, eF],
            }),
            (0, r.jsx)(a.kSQ, { children: eT }),
            (0, r.jsx)(a.kSQ, { children: ew }),
        ],
    });
}
