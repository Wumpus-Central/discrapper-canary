n.d(t, { c: () => Q, default: () => $ });
var i = n(627968),
    l = n(64700),
    a = n(621466),
    r = n(477782),
    s = n(861672),
    o = n(442433),
    d = n(155718),
    c = n(793574),
    u = n(688810),
    g = n(50268),
    A = n(486503),
    h = n(373963),
    m = n(115184),
    f = n(777933),
    p = n(826308),
    E = n(51512),
    y = n(773699),
    v = n(954571),
    _ = n(363398),
    S = n(880457),
    I = n(840088),
    x = n(276887),
    b = n(345254),
    T = n(734495),
    M = n(483768),
    C = n(522333),
    D = n(692457),
    j = n(253925),
    N = n(513560),
    O = n(360977),
    R = n(20883),
    L = n(979766),
    w = n(982308),
    G = n(959239),
    P = n(420975),
    U = n(207115),
    k = n(614323),
    F = n(292103),
    H = n(878956),
    Z = n(389889),
    B = n(729883),
    V = n(474445),
    X = n(304795),
    K = n(25287),
    J = n(220167),
    z = n(772331),
    W = n(649455),
    q = n(652215),
    Y = n(985018);
function $(e) {
    let t,
        n,
        l,
        r,
        {
            channel: s,
            message: d,
            target: g,
            mediaItem: A,
            shouldHideMediaOptions: h,
            onSelect: m,
            onHeightUpdate: f,
        } = e,
        { analyticsLocations: p } = (0, u.Ay)([c.A.MESSAGE_CONTEXT_MENU]),
        E = g,
        y = g.getAttribute("data-type"),
        v = g.getAttribute("data-id"),
        _ = g.getAttribute("data-name");
    if (null != A) n = t = l = A.url;
    else
        for (; (0, a.vq)(E); )
            (0, a.vq)(E, HTMLImageElement) && null != E.src && (n = E.src),
                (0, a.vq)(E, HTMLAnchorElement) &&
                    null != E.href &&
                    ((t = E.href),
                    (r = E.textContent),
                    null == n &&
                        "img" === E.getAttribute("data-role") &&
                        ((n = t),
                        E.hasAttribute("data-safe-src") &&
                            "" !== E.getAttribute("data-safe-src") &&
                            (l = E.getAttribute("data-safe-src")))),
                (E = E.parentNode);
    let S = document.getSelection()?.toString() ?? "";
    return (0, i.jsx)(u.f5, {
        value: p,
        children: Q({
            message: d,
            channel: s,
            mediaItem: A,
            textSelection: S,
            favoriteableType: y,
            favoriteableId: v,
            favoriteableName: _,
            itemHref: t,
            itemSrc: n,
            itemSafeSrc: l,
            itemTextContent: r,
            canReport: !0,
            onHeightUpdate: f,
            onSelect: m,
            onClose: o.Z_,
            navId: "message",
            ariaLabel: Y.intl.string(Y.t.ChPNkN),
            shouldHideMediaOptions: h,
        }),
    });
}
function Q(e) {
    let {
            message: t,
            channel: n,
            mediaItem: a,
            textSelection: o,
            favoriteableType: c,
            favoriteableId: u,
            favoriteableName: $,
            itemHref: Q,
            itemSrc: ee,
            itemSafeSrc: et,
            itemTextContent: en,
            canReport: ei,
            onHeightUpdate: el,
            onSelect: ea,
            onClose: er,
            navId: es,
            ariaLabel: eo,
            shouldHideMediaOptions: ed = !1,
        } = e,
        ec = l.useRef(null);
    l.useEffect(() => {
        ec.current = Date.now();
    }, []),
        l.useEffect(
            () => () => {
                if (null != ec.current) {
                    let e = Date.now() - ec.current;
                    v.default.track(q.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: e,
                        channel_id: n.id,
                        guild_id: n.getGuildId() ?? void 0,
                        message_id: t.id,
                    });
                }
            },
            [n, t],
        );
    let eu = l.useCallback(() => {
            if (null != ec.current) {
                let e = Date.now() - ec.current;
                v.default.track(q.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: n.id,
                    guild_id: n.getGuildId() ?? void 0,
                    message_id: t.id,
                });
            }
            ea?.();
        }, [ea, n, t]),
        { tidaWebformEnabled: eg } = A.A.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
        eA = (0, w.A)(t, n),
        eh = (0, h.A)(o),
        em = (0, p.A)(o),
        ef = (0, I.A)(t, n),
        ep = (0, D.A)(t, n),
        eE = (0, k.A)(t, n),
        ey = (0, N.A)(t, n),
        ev = (0, B.A)(t, n),
        e_ = (0, T.A)(t),
        eS = (0, V.A)(t, n),
        eI = (0, L.A)(t, n),
        ex = (0, O.A)(t, n),
        eb = (0, S.A)(t),
        eT = (0, y.A)({
            commandType: d.kc.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: el,
            showIcon: !0,
        }),
        eM = (0, H.A)(t, n),
        eC = (0, R.A)(t, n),
        eD = (0, x.A)(t, n),
        ej = (0, b.A)(t, n),
        eN = (0, X.A)(t, n),
        eO = (0, Z.A)(t, n),
        eR = (0, G.A)(t),
        eL = (0, E.A)(t),
        ew = (0, K.A)(t),
        eG = (0, U.A)(t, n),
        eP = (0, P.A)(t, n),
        eU = (0, M.A)(t, n),
        ek = (0, F.Ay)(t),
        eF = (0, F.S_)(t),
        eH = (0, F.zo)(t),
        eZ = (0, j.A)({ type: c, id: u, name: $ }),
        eB = (0, _.A)(o, n.getGuildId()),
        eV = (0, m.A)(et, t, {
            shouldHideMediaOptions: ed,
            contentType: a?.contentType,
            originalContentType: a?.originalContentType,
        }),
        eX = (0, J.A)(t, a),
        eK = (0, z.A)(t),
        eJ = (0, W.A)(a, { shouldHideMediaOptions: ed }),
        ez = (0, f.A)(Q ?? ee, en, t, { shouldHideMediaOptions: ed }),
        eW = (0, g.A)({ id: t.id, label: Y.intl.string(Y.t.zBoHlf), shiftId: `${t.channel_id}-${t.id}` }),
        eq = (0, C.A)({ messageId: t.id, itemId: u, type: c, imageSrc: ee }),
        eY = (0, i.jsx)(r.rX, { children: eq ?? eW }),
        e$ = (0, i.jsxs)(r.rX, { children: [eZ, eB, eV, eX, eK, eJ] });
    return (0, i.jsxs)(s.W, {
        "data-menu-migrated": !0,
        navId: es,
        onClose: er,
        "aria-label": eo,
        onSelect: eu,
        children: [
            (0, i.jsx)(r.rX, { children: eh }),
            (0, i.jsx)(r.rX, { children: em }),
            (0, i.jsxs)(r.rX, { children: ["" === o ? eA : null, ef, eR] }),
            (0, i.jsxs)(r.rX, { children: [ep, eE, ey, ev] }),
            (0, i.jsxs)(r.rX, { children: [e_, eS, eI, ex, eb, eT, eM, eC, eD, ej, eN, eO, eL, ew] }),
            (0, i.jsxs)(r.rX, { children: [eG, eP, eU, ei && ek, ei && eF, eH] }),
            eg
                ? (0, i.jsxs)(i.Fragment, { children: [eY, e$, null == eq && (0, i.jsx)(r.rX, { children: ez })] })
                : (0, i.jsxs)(i.Fragment, { children: [e$, (0, i.jsx)(r.rX, { children: ez }), eY] }),
        ],
    });
}
