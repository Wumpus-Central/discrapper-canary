n.d(t, {
    S: () => Q,
    default: () => q,
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
    K = n(975368),
    X = n(981631),
    V = n(388032);
function q(e) {
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
        children: Q({
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
            ariaLabel: V.intl.string(V.t.ChPNkN),
            shouldHideMediaOptions: m,
        }),
    });
}
function Q(e) {
    let {
            message: t,
            channel: n,
            mediaItem: l,
            textSelection: o,
            favoriteableType: c,
            favoriteableId: u,
            favoriteableName: q,
            itemHref: Q,
            itemSrc: W,
            itemSafeSrc: J,
            itemTextContent: Y,
            canReport: $,
            onHeightUpdate: ee,
            onSelect: et,
            onClose: en,
            navId: er,
            ariaLabel: ei,
            shouldHideMediaOptions: el = !1,
        } = e,
        ea = i.useRef(null);
    i.useEffect(() => {
        ea.current = Date.now();
    }, []),
        i.useEffect(
            () => () => {
                if (null != ea.current) {
                    var e;
                    let r = Date.now() - ea.current;
                    h.default.track(X.rMx.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: r,
                        channel_id: n.id,
                        guild_id: null != (e = n.getGuildId()) ? e : void 0,
                        message_id: t.id,
                    });
                }
            },
            [n, t],
        );
    let eo = i.useCallback(() => {
            if (null != ea.current) {
                var e;
                let r = Date.now() - ea.current;
                h.default.track(X.rMx.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: r,
                    channel_id: n.id,
                    guild_id: null != (e = n.getGuildId()) ? e : void 0,
                    message_id: t.id,
                });
            }
            null == et || et();
        }, [et, n, t]),
        es = (0, g.Z)(o),
        ec = (0, m.Z)(o),
        eu = (0, A.Z)(t, n),
        ed = (0, S.Z)(t, n),
        ef = (0, T.Z)(t, n),
        eg = (0, x.Z)(t, n),
        eb = (0, N.Z)({
            type: c,
            id: u,
            name: q,
        }),
        ep = (0, G.Z)(t, n),
        em = (0, w.Z)(t, n),
        eO = (0, D.Z)(t),
        ey = (0, P.Z)(t, n),
        eh = (0, _.Z)(t, n),
        ev = (0, C.Z)(t, n),
        ej = (0, L.Z)(t, n),
        eE = (0, I.Z)(t, n),
        eS = (0, k.ZP)(t),
        eP = (0, k.wY)(t),
        e_ = (0, k.eH)(t),
        eZ = (0, U.Z)(t, n),
        eI = (0, p.Z)(null != Q ? Q : W, Y, t, { shouldHideMediaOptions: el }),
        eT = (0, b.Z)(J, t, {
            shouldHideMediaOptions: el,
            contentType: null == l ? void 0 : l.contentType,
            originalContentType: null == l ? void 0 : l.originalContentType,
        }),
        eN = (0, B.Z)(t, l),
        eM = (0, f.Z)({
            id: t.id,
            label: V.intl.string(V.t.zBoHlf),
            shiftId: "".concat(t.channel_id, "-").concat(t.id),
        }),
        ew = (0, R.Z)(t, n),
        ex = (0, M.Z)(t, n),
        eA = (0, F.Z)(t, n),
        eD = (0, v.Z)(o, n.getGuildId()),
        eC = (0, j.Z)(t),
        eL = (0, Z.Z)(t),
        eR = (0, z.Z)(t, n),
        ek = (0, K.Z)(t),
        eG = (0, E.Z)(t, n),
        eU = (0, y.Z)({
            commandType: s.yU.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: ee,
        }),
        eF = (0, H.Z)(t),
        ez = (0, O.Z)(t),
        { forceIconsLeft: eH, reorderMessageMenuItems: eB } = (0, d.d)("MessageContextMenu");
    return (0, r.jsxs)(a.v2r, {
        navId: er,
        onClose: en,
        "aria-label": ei,
        onSelect: eo,
        forceIconsLeft: eH,
        children: [
            (0, r.jsx)(a.kSQ, { children: es }),
            (0, r.jsx)(a.kSQ, { children: ec }),
            (0, r.jsxs)(a.kSQ, {
                children: ["" === o ? eu : null, ed, eO, eG],
            }),
            (0, r.jsxs)(a.kSQ, {
                children: [ef, ew, ex, eA],
            }),
            (0, r.jsxs)(a.kSQ, {
                children: [eL, eR, eg, eC, eU, ep, em, ey, eh, eZ, ez, eF],
            }),
            (0, r.jsxs)(a.kSQ, {
                children: [ej, ev, eE, $ && eS, $ && e_, eP],
            }),
            (0, r.jsxs)(a.kSQ, {
                children: [eb, eD, eT, eN, ek],
            }),
            (0, r.jsx)(a.kSQ, { children: eI }),
            (0, r.jsx)(a.kSQ, { children: eM }),
        ],
    });
}
