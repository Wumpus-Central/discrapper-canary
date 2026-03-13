n.d(t, { c: () => Z, default: () => z });
var i = n(627968),
    l = n(64700),
    r = n(621466),
    a = n(397927),
    s = n(442433),
    o = n(155718),
    d = n(793574),
    c = n(688810),
    u = n(50268),
    g = n(486503),
    A = n(373963),
    m = n(115184),
    f = n(777933),
    p = n(826308),
    h = n(51512),
    y = n(773699),
    E = n(954571),
    S = n(363398),
    _ = n(880457),
    b = n(840088),
    T = n(276887),
    v = n(345254),
    I = n(734495),
    x = n(483768),
    C = n(522333),
    j = n(692457),
    M = n(253925),
    D = n(513560),
    N = n(20883),
    O = n(979766),
    R = n(982308),
    G = n(959239),
    L = n(420975),
    w = n(207115),
    P = n(614323),
    F = n(292103),
    U = n(878956),
    V = n(389889),
    k = n(729883),
    X = n(474445),
    H = n(304795),
    B = n(25287),
    K = n(220167),
    q = n(772331),
    J = n(649455),
    W = n(652215),
    Y = n(985018);
function z(e) {
    let t,
        n,
        l,
        a,
        {
            channel: o,
            message: u,
            target: g,
            mediaItem: A,
            shouldHideMediaOptions: m,
            onSelect: f,
            onHeightUpdate: p,
        } = e,
        { analyticsLocations: h } = (0, c.Ay)([d.A.MESSAGE_CONTEXT_MENU]),
        y = g,
        E = g.getAttribute("data-type"),
        S = g.getAttribute("data-id"),
        _ = g.getAttribute("data-name");
    if (null != A) n = t = l = A.url;
    else
        for (; (0, r.vq)(y); )
            (0, r.vq)(y, HTMLImageElement) && null != y.src && (n = y.src),
                (0, r.vq)(y, HTMLAnchorElement) &&
                    null != y.href &&
                    ((t = y.href),
                    (a = y.textContent),
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
        children: Z({
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
            itemTextContent: a,
            canReport: !0,
            onHeightUpdate: p,
            onSelect: f,
            onClose: s.Z_,
            navId: "message",
            ariaLabel: Y.intl.string(Y.t.ChPNkN),
            shouldHideMediaOptions: m,
        }),
    });
}
function Z(e) {
    let {
            message: t,
            channel: n,
            mediaItem: r,
            textSelection: s,
            favoriteableType: d,
            favoriteableId: c,
            favoriteableName: z,
            itemHref: Z,
            itemSrc: $,
            itemSafeSrc: Q,
            itemTextContent: ee,
            canReport: et,
            onHeightUpdate: en,
            onSelect: ei,
            onClose: el,
            navId: er,
            ariaLabel: ea,
            shouldHideMediaOptions: es = !1,
        } = e,
        eo = l.useRef(null);
    l.useEffect(() => {
        eo.current = Date.now();
    }, []),
        l.useEffect(
            () => () => {
                if (null != eo.current) {
                    let e = Date.now() - eo.current;
                    E.default.track(W.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: n.id,
                        guild_id: n.getGuildId() ?? void 0,
                        message_id: t.id,
                    });
                }
            },
            [n, t],
        );
    let ed = l.useCallback(() => {
            if (null != eo.current) {
                let e = Date.now() - eo.current;
                E.default.track(W.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: n.id,
                    guild_id: n.getGuildId() ?? void 0,
                    message_id: t.id,
                });
            }
            ei?.();
        }, [ei, n, t]),
        { tidaWebformEnabled: ec } = g.A.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
        eu = (0, R.A)(t, n),
        eg = (0, A.A)(s),
        eA = (0, p.A)(s),
        em = (0, b.A)(t, n),
        ef = (0, j.A)(t, n),
        ep = (0, P.A)(t, n),
        eh = (0, D.A)(t, n),
        ey = (0, k.A)(t, n),
        eE = (0, I.A)(t),
        eS = (0, X.A)(t, n),
        e_ = (0, O.A)(t, n),
        eb = (0, _.A)(t),
        eT = (0, y.A)({
            commandType: o.kc.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: en,
            showIcon: !0,
        }),
        ev = (0, U.A)(t, n),
        eI = (0, N.A)(t, n),
        ex = (0, T.A)(t, n),
        eC = (0, v.A)(t, n),
        ej = (0, H.A)(t, n),
        eM = (0, V.A)(t, n),
        eD = (0, G.A)(t),
        eN = (0, h.A)(t),
        eO = (0, B.A)(t),
        eR = (0, w.A)(t, n),
        eG = (0, L.A)(t, n),
        eL = (0, x.A)(t, n),
        ew = (0, F.Ay)(t),
        eP = (0, F.S_)(t),
        eF = (0, F.zo)(t),
        eU = (0, M.A)({ type: d, id: c, name: z }),
        eV = (0, S.A)(s, n.getGuildId()),
        ek = (0, m.A)(Q, t, {
            shouldHideMediaOptions: es,
            contentType: r?.contentType,
            originalContentType: r?.originalContentType,
        }),
        eX = (0, K.A)(t, r),
        eH = (0, q.A)(t),
        eB = (0, J.A)(r, { shouldHideMediaOptions: es }),
        eK = (0, f.A)(Z ?? $, ee, t, { shouldHideMediaOptions: es }),
        eq = (0, u.A)({ id: t.id, label: Y.intl.string(Y.t.zBoHlf), shiftId: `${t.channel_id}-${t.id}` }),
        eJ = (0, C.A)({ messageId: t.id, itemId: c, type: d, imageSrc: $ }),
        eW = (0, i.jsx)(a.rXV, { children: eJ ?? eq }),
        eY = (0, i.jsxs)(a.rXV, { children: [eU, eV, ek, eX, eH, eB] });
    return (0, i.jsxs)(a.W1t, {
        "data-menu-migrated": !0,
        navId: er,
        onClose: el,
        "aria-label": ea,
        onSelect: ed,
        children: [
            (0, i.jsx)(a.rXV, { children: eg }),
            (0, i.jsx)(a.rXV, { children: eA }),
            (0, i.jsxs)(a.rXV, { children: ["" === s ? eu : null, em, eD] }),
            (0, i.jsxs)(a.rXV, { children: [ef, ep, eh, ey] }),
            (0, i.jsxs)(a.rXV, { children: [eE, eS, e_, eb, eT, ev, eI, ex, eC, ej, eM, eN, eO] }),
            (0, i.jsxs)(a.rXV, { children: [eR, eG, eL, et && ew, et && eP, eF] }),
            ec
                ? (0, i.jsxs)(i.Fragment, { children: [eW, eY, (0, i.jsx)(a.rXV, { children: eK })] })
                : (0, i.jsxs)(i.Fragment, { children: [eY, (0, i.jsx)(a.rXV, { children: eK }), eW] }),
        ],
    });
}
