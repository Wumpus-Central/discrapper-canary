n.d(t, { c: () => $, default: () => Z });
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
    I = n(345254),
    T = n(734495),
    x = n(483768),
    j = n(522333),
    D = n(692457),
    M = n(253925),
    C = n(513560),
    O = n(360977),
    N = n(20883),
    R = n(979766),
    G = n(982308),
    L = n(959239),
    w = n(420975),
    P = n(207115),
    U = n(614323),
    F = n(292103),
    k = n(878956),
    X = n(389889),
    V = n(729883),
    B = n(474445),
    K = n(304795),
    H = n(25287),
    J = n(220167),
    q = n(772331),
    W = n(649455),
    Y = n(652215),
    z = n(985018);
function Z(e) {
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
        children: $({
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
function $(e) {
    let {
            message: t,
            channel: n,
            mediaItem: a,
            textSelection: s,
            favoriteableType: d,
            favoriteableId: c,
            favoriteableName: Z,
            itemHref: $,
            itemSrc: Q,
            itemSafeSrc: ee,
            itemTextContent: et,
            canReport: en,
            onHeightUpdate: ei,
            onSelect: el,
            onClose: ea,
            navId: er,
            ariaLabel: es,
            shouldHideMediaOptions: eo = !1,
        } = e,
        ed = l.useRef(null);
    l.useEffect(() => {
        ed.current = Date.now();
    }, []),
        l.useEffect(
            () => () => {
                if (null != ed.current) {
                    let e = Date.now() - ed.current;
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
    let ec = l.useCallback(() => {
            if (null != ed.current) {
                let e = Date.now() - ed.current;
                E.default.track(Y.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: e,
                    channel_id: n.id,
                    guild_id: n.getGuildId() ?? void 0,
                    message_id: t.id,
                });
            }
            el?.();
        }, [el, n, t]),
        { tidaWebformEnabled: eu } = g.A.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
        eg = (0, G.A)(t, n),
        eA = (0, A.A)(s),
        ep = (0, f.A)(s),
        em = (0, b.A)(t, n),
        ef = (0, D.A)(t, n),
        eh = (0, U.A)(t, n),
        ey = (0, C.A)(t, n),
        eE = (0, V.A)(t, n),
        e_ = (0, T.A)(t),
        eS = (0, B.A)(t, n),
        eb = (0, R.A)(t, n),
        ev = (0, O.A)(t, n),
        eI = (0, S.A)(t),
        eT = (0, y.A)({
            commandType: o.kc.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: ei,
            showIcon: !0,
        }),
        ex = (0, k.A)(t, n),
        ej = (0, N.A)(t, n),
        eD = (0, v.A)(t, n),
        eM = (0, I.A)(t, n),
        eC = (0, K.A)(t, n),
        eO = (0, X.A)(t, n),
        eN = (0, L.A)(t),
        eR = (0, h.A)(t),
        eG = (0, H.A)(t),
        eL = (0, P.A)(t, n),
        ew = (0, w.A)(t, n),
        eP = (0, x.A)(t, n),
        eU = (0, F.Ay)(t),
        eF = (0, F.S_)(t),
        ek = (0, F.zo)(t),
        eX = (0, M.A)({ type: d, id: c, name: Z }),
        eV = (0, _.A)(s, n.getGuildId()),
        eB = (0, p.A)(ee, t, {
            shouldHideMediaOptions: eo,
            contentType: a?.contentType,
            originalContentType: a?.originalContentType,
        }),
        eK = (0, J.A)(t, a),
        eH = (0, q.A)(t),
        eJ = (0, W.A)(a, { shouldHideMediaOptions: eo }),
        eq = (0, m.A)($ ?? Q, et, t, { shouldHideMediaOptions: eo }),
        eW = (0, u.A)({ id: t.id, label: z.intl.string(z.t.zBoHlf), shiftId: `${t.channel_id}-${t.id}` }),
        eY = (0, j.A)({ messageId: t.id, itemId: c, type: d, imageSrc: Q }),
        ez = (0, i.jsx)(r.rXV, { children: eY ?? eW }),
        eZ = (0, i.jsxs)(r.rXV, { children: [eX, eV, eB, eK, eH, eJ] });
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: er,
        onClose: ea,
        "aria-label": es,
        onSelect: ec,
        children: [
            (0, i.jsx)(r.rXV, { children: eA }),
            (0, i.jsx)(r.rXV, { children: ep }),
            (0, i.jsxs)(r.rXV, { children: ["" === s ? eg : null, em, eN] }),
            (0, i.jsxs)(r.rXV, { children: [ef, eh, ey, eE] }),
            (0, i.jsxs)(r.rXV, { children: [e_, eS, eb, ev, eI, eT, ex, ej, eD, eM, eC, eO, eR, eG] }),
            (0, i.jsxs)(r.rXV, { children: [eL, ew, eP, en && eU, en && eF, ek] }),
            eu
                ? (0, i.jsxs)(i.Fragment, { children: [ez, eZ, null == eY && (0, i.jsx)(r.rXV, { children: eq })] })
                : (0, i.jsxs)(i.Fragment, { children: [eZ, (0, i.jsx)(r.rXV, { children: eq }), ez] }),
        ],
    });
}
