n.d(t, { c: () => W, default: () => z });
var i = n(627968),
    l = n(64700),
    a = n(621466),
    r = n(397927),
    s = n(442433),
    o = n(155718),
    d = n(793574),
    c = n(688810),
    u = n(50268),
    g = n(486503),
    A = n(373963),
    m = n(115184),
    p = n(777933),
    f = n(826308),
    h = n(51512),
    y = n(773699),
    E = n(954571),
    S = n(363398),
    _ = n(880457),
    b = n(840088),
    I = n(276887),
    v = n(345254),
    x = n(734495),
    j = n(483768),
    T = n(522333),
    D = n(692457),
    M = n(253925),
    C = n(513560),
    N = n(20883),
    O = n(979766),
    R = n(982308),
    G = n(959239),
    L = n(420975),
    w = n(207115),
    P = n(614323),
    U = n(292103),
    k = n(878956),
    F = n(389889),
    X = n(729883),
    V = n(474445),
    B = n(25287),
    H = n(220167),
    K = n(772331),
    q = n(649455),
    J = n(652215),
    Y = n(985018);
function z(e) {
    let t,
        n,
        l,
        r,
        {
            channel: o,
            message: u,
            target: g,
            mediaItem: A,
            shouldHideMediaOptions: m,
            onSelect: p,
            onHeightUpdate: f,
        } = e,
        { analyticsLocations: h } = (0, c.Ay)([d.A.MESSAGE_CONTEXT_MENU]),
        y = g,
        E = g.getAttribute("data-type"),
        S = g.getAttribute("data-id"),
        _ = g.getAttribute("data-name");
    if (null != A) n = t = l = A.url;
    else
        for (; (0, a.vq)(y); )
            (0, a.vq)(y, HTMLImageElement) && null != y.src && (n = y.src),
                (0, a.vq)(y, HTMLAnchorElement) &&
                    null != y.href &&
                    ((t = y.href),
                    (r = y.textContent),
                    null == n &&
                        "img" === y.getAttribute("data-role") &&
                        ((n = t),
                        y.hasAttribute("data-safe-src") &&
                            "" !== y.getAttribute("data-safe-src") &&
                            (l = y.getAttribute("data-safe-src")))),
                (y = y.parentNode);
    let b = document.getSelection()?.toString() ?? "";
    return (0, i.jsx)(c.f5, {
        value: h,
        children: W({
            message: u,
            channel: o,
            mediaItem: A,
            textSelection: b,
            favoriteableType: E,
            favoriteableId: S,
            favoriteableName: _,
            itemHref: t,
            itemSrc: n,
            itemSafeSrc: l,
            itemTextContent: r,
            canReport: !0,
            onHeightUpdate: f,
            onSelect: p,
            onClose: s.Z_,
            navId: "message",
            ariaLabel: Y.intl.string(Y.t.ChPNkN),
            shouldHideMediaOptions: m,
        }),
    });
}
function W(e) {
    let {
            message: t,
            channel: n,
            mediaItem: a,
            textSelection: s,
            favoriteableType: d,
            favoriteableId: c,
            favoriteableName: z,
            itemHref: W,
            itemSrc: Z,
            itemSafeSrc: $,
            itemTextContent: Q,
            canReport: ee,
            onHeightUpdate: et,
            onSelect: en,
            onClose: ei,
            navId: el,
            ariaLabel: ea,
            shouldHideMediaOptions: er = !1,
        } = e,
        es = l.useRef(null);
    l.useEffect(() => {
        es.current = Date.now();
    }, []),
        l.useEffect(
            () => () => {
                if (null != es.current) {
                    let e = Date.now() - es.current;
                    E.default.track(J.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: n.id,
                        guild_id: n.getGuildId() ?? void 0,
                        message_id: t.id,
                    });
                }
            },
            [n, t],
        );
    let eo = l.useCallback(() => {
            if (null != es.current) {
                let e = Date.now() - es.current;
                E.default.track(J.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: n.id,
                    guild_id: n.getGuildId() ?? void 0,
                    message_id: t.id,
                });
            }
            en?.();
        }, [en, n, t]),
        { tidaWebformEnabled: ed } = g.A.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
        ec = (0, R.A)(t, n),
        eu = (0, A.A)(s),
        eg = (0, f.A)(s),
        eA = (0, b.A)(t, n),
        em = (0, D.A)(t, n),
        ep = (0, P.A)(t, n),
        ef = (0, C.A)(t, n),
        eh = (0, X.A)(t, n),
        ey = (0, x.A)(t),
        eE = (0, V.A)(t, n),
        eS = (0, O.A)(t, n),
        e_ = (0, _.A)(t),
        eb = (0, y.A)({
            commandType: o.kc.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: et,
            showIcon: !0,
        }),
        eI = (0, k.A)(t, n),
        ev = (0, N.A)(t, n),
        ex = (0, I.A)(t, n),
        ej = (0, v.A)(t, n),
        eT = (0, F.A)(t, n),
        eD = (0, G.A)(t),
        eM = (0, h.A)(t),
        eC = (0, B.A)(t),
        eN = (0, w.A)(t, n),
        eO = (0, L.A)(t, n),
        eR = (0, j.A)(t, n),
        eG = (0, U.Ay)(t),
        eL = (0, U.S_)(t),
        ew = (0, U.zo)(t),
        eP = (0, M.A)({ type: d, id: c, name: z }),
        eU = (0, S.A)(s, n.getGuildId()),
        ek = (0, m.A)($, t, {
            shouldHideMediaOptions: er,
            contentType: a?.contentType,
            originalContentType: a?.originalContentType,
        }),
        eF = (0, H.A)(t, a),
        eX = (0, K.A)(t),
        eV = (0, q.A)(a, { shouldHideMediaOptions: er }),
        eB = (0, p.A)(W ?? Z, Q, t, { shouldHideMediaOptions: er }),
        eH = (0, u.A)({ id: t.id, label: Y.intl.string(Y.t.zBoHlf), shiftId: `${t.channel_id}-${t.id}` }),
        eK = (0, T.A)({ messageId: t.id, itemId: c, type: d, imageSrc: Z }),
        eq = (0, i.jsx)(r.rXV, { children: eK ?? eH }),
        eJ = (0, i.jsxs)(r.rXV, { children: [eP, eU, ek, eF, eX, eV] });
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: el,
        onClose: ei,
        "aria-label": ea,
        onSelect: eo,
        children: [
            (0, i.jsx)(r.rXV, { children: eu }),
            (0, i.jsx)(r.rXV, { children: eg }),
            (0, i.jsxs)(r.rXV, { children: ["" === s ? ec : null, eA, eD] }),
            (0, i.jsxs)(r.rXV, { children: [em, ep, ef, eh] }),
            (0, i.jsxs)(r.rXV, { children: [ey, eE, eS, e_, eb, eI, ev, ex, ej, eT, eM, eC] }),
            (0, i.jsxs)(r.rXV, { children: [eN, eO, eR, ee && eG, ee && eL, ew] }),
            ed
                ? (0, i.jsxs)(i.Fragment, { children: [eq, eJ, (0, i.jsx)(r.rXV, { children: eB })] })
                : (0, i.jsxs)(i.Fragment, { children: [eJ, (0, i.jsx)(r.rXV, { children: eB }), eq] }),
        ],
    });
}
