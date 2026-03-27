n.d(t, { c: () => Z, default: () => W });
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
    p = n(115184),
    m = n(777933),
    f = n(826308),
    h = n(51512),
    y = n(773699),
    E = n(954571),
    _ = n(363398),
    S = n(880457),
    b = n(840088),
    v = n(276887),
    x = n(345254),
    I = n(734495),
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
    F = n(878956),
    k = n(389889),
    X = n(729883),
    V = n(474445),
    B = n(304795),
    H = n(25287),
    K = n(220167),
    q = n(772331),
    J = n(649455),
    Y = n(652215),
    z = n(985018);
function W(e) {
    let t,
        n,
        l,
        r,
        {
            channel: o,
            message: u,
            target: g,
            mediaItem: A,
            shouldHideMediaOptions: p,
            onSelect: m,
            onHeightUpdate: f,
        } = e,
        { analyticsLocations: h } = (0, c.Ay)([d.A.MESSAGE_CONTEXT_MENU]),
        y = g,
        E = g.getAttribute("data-type"),
        _ = g.getAttribute("data-id"),
        S = g.getAttribute("data-name");
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
        children: Z({
            message: u,
            channel: o,
            mediaItem: A,
            textSelection: b,
            favoriteableType: E,
            favoriteableId: _,
            favoriteableName: S,
            itemHref: t,
            itemSrc: n,
            itemSafeSrc: l,
            itemTextContent: r,
            canReport: !0,
            onHeightUpdate: f,
            onSelect: m,
            onClose: s.Z_,
            navId: "message",
            ariaLabel: z.intl.string(z.t.ChPNkN),
            shouldHideMediaOptions: p,
        }),
    });
}
function Z(e) {
    let {
            message: t,
            channel: n,
            mediaItem: a,
            textSelection: s,
            favoriteableType: d,
            favoriteableId: c,
            favoriteableName: W,
            itemHref: Z,
            itemSrc: $,
            itemSafeSrc: Q,
            itemTextContent: ee,
            canReport: et,
            onHeightUpdate: en,
            onSelect: ei,
            onClose: el,
            navId: ea,
            ariaLabel: er,
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
                    E.default.track(Y.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
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
                E.default.track(Y.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
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
        eA = (0, f.A)(s),
        ep = (0, b.A)(t, n),
        em = (0, D.A)(t, n),
        ef = (0, P.A)(t, n),
        eh = (0, C.A)(t, n),
        ey = (0, X.A)(t, n),
        eE = (0, I.A)(t),
        e_ = (0, V.A)(t, n),
        eS = (0, O.A)(t, n),
        eb = (0, S.A)(t),
        ev = (0, y.A)({
            commandType: o.kc.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: en,
            showIcon: !0,
        }),
        ex = (0, F.A)(t, n),
        eI = (0, N.A)(t, n),
        ej = (0, v.A)(t, n),
        eT = (0, x.A)(t, n),
        eD = (0, B.A)(t, n),
        eM = (0, k.A)(t, n),
        eC = (0, G.A)(t),
        eN = (0, h.A)(t),
        eO = (0, H.A)(t),
        eR = (0, w.A)(t, n),
        eG = (0, L.A)(t, n),
        eL = (0, j.A)(t, n),
        ew = (0, U.Ay)(t),
        eP = (0, U.S_)(t),
        eU = (0, U.zo)(t),
        eF = (0, M.A)({ type: d, id: c, name: W }),
        ek = (0, _.A)(s, n.getGuildId()),
        eX = (0, p.A)(Q, t, {
            shouldHideMediaOptions: es,
            contentType: a?.contentType,
            originalContentType: a?.originalContentType,
        }),
        eV = (0, K.A)(t, a),
        eB = (0, q.A)(t),
        eH = (0, J.A)(a, { shouldHideMediaOptions: es }),
        eK = (0, m.A)(Z ?? $, ee, t, { shouldHideMediaOptions: es }),
        eq = (0, u.A)({ id: t.id, label: z.intl.string(z.t.zBoHlf), shiftId: `${t.channel_id}-${t.id}` }),
        eJ = (0, T.A)({ messageId: t.id, itemId: c, type: d, imageSrc: $ }),
        eY = (0, i.jsx)(r.rXV, { children: eJ ?? eq }),
        ez = (0, i.jsxs)(r.rXV, { children: [eF, ek, eX, eV, eB, eH] });
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: ea,
        onClose: el,
        "aria-label": er,
        onSelect: ed,
        children: [
            (0, i.jsx)(r.rXV, { children: eg }),
            (0, i.jsx)(r.rXV, { children: eA }),
            (0, i.jsxs)(r.rXV, { children: ["" === s ? eu : null, ep, eC] }),
            (0, i.jsxs)(r.rXV, { children: [em, ef, eh, ey] }),
            (0, i.jsxs)(r.rXV, { children: [eE, e_, eS, eb, ev, ex, eI, ej, eT, eD, eM, eN, eO] }),
            (0, i.jsxs)(r.rXV, { children: [eR, eG, eL, et && ew, et && eP, eU] }),
            ec
                ? (0, i.jsxs)(i.Fragment, { children: [eY, ez, null == eJ && (0, i.jsx)(r.rXV, { children: eK })] })
                : (0, i.jsxs)(i.Fragment, { children: [ez, (0, i.jsx)(r.rXV, { children: eK }), eY] }),
        ],
    });
}
