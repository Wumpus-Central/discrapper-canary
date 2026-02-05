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
    p = n(115184),
    m = n(777933),
    f = n(826308),
    y = n(51512),
    h = n(773699),
    E = n(954571),
    S = n(363398),
    _ = n(880457),
    b = n(840088),
    v = n(276887),
    I = n(345254),
    T = n(734495),
    x = n(483768),
    D = n(522333),
    j = n(692457),
    M = n(253925),
    C = n(513560),
    N = n(20883),
    O = n(979766),
    R = n(982308),
    G = n(959239),
    L = n(420975),
    P = n(207115),
    U = n(614323),
    w = n(292103),
    F = n(878956),
    k = n(389889),
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
            shouldHideMediaOptions: p,
            onSelect: m,
            onHeightUpdate: f,
        } = e,
        { analyticsLocations: y } = (0, c.Ay)([d.A.MESSAGE_CONTEXT_MENU]),
        h = g,
        E = g.getAttribute("data-type"),
        S = g.getAttribute("data-id"),
        _ = g.getAttribute("data-name");
    if (null != A) n = t = l = A.url;
    else
        for (; (0, a.vq)(h); )
            (0, a.vq)(h, HTMLImageElement) && null != h.src && (n = h.src),
                (0, a.vq)(h, HTMLAnchorElement) &&
                    null != h.href &&
                    ((t = h.href),
                    (r = h.textContent),
                    null == n &&
                        "img" === h.getAttribute("data-role") &&
                        ((n = t),
                        h.hasAttribute("data-safe-src") &&
                            "" !== h.getAttribute("data-safe-src") &&
                            (l = h.getAttribute("data-safe-src")))),
                (h = h.parentNode);
    let b = document.getSelection()?.toString() ?? "";
    return (0, i.jsx)(c.f5, {
        value: y,
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
            onSelect: m,
            onClose: s.Z_,
            navId: "message",
            ariaLabel: Y.intl.string(Y.t.ChPNkN),
            shouldHideMediaOptions: p,
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
        ep = (0, j.A)(t, n),
        em = (0, U.A)(t, n),
        ef = (0, C.A)(t, n),
        ey = (0, X.A)(t, n),
        eh = (0, T.A)(t),
        eE = (0, V.A)(t, n),
        eS = (0, O.A)(t, n),
        e_ = (0, _.A)(t),
        eb = (0, h.A)({
            commandType: o.kc.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: et,
        }),
        ev = (0, F.A)(t, n),
        eI = (0, N.A)(t, n),
        eT = (0, v.A)(t, n),
        ex = (0, I.A)(t, n),
        eD = (0, k.A)(t, n),
        ej = (0, G.A)(t),
        eM = (0, y.A)(t),
        eC = (0, B.A)(t),
        eN = (0, P.A)(t, n),
        eO = (0, L.A)(t, n),
        eR = (0, x.A)(t, n),
        eG = (0, w.Ay)(t),
        eL = (0, w.S_)(t),
        eP = (0, w.zo)(t),
        eU = (0, M.A)({ type: d, id: c, name: z }),
        ew = (0, S.A)(s, n.getGuildId()),
        eF = (0, p.A)($, t, {
            shouldHideMediaOptions: er,
            contentType: a?.contentType,
            originalContentType: a?.originalContentType,
        }),
        ek = (0, H.A)(t, a),
        eX = (0, K.A)(t),
        eV = (0, q.A)(a, { shouldHideMediaOptions: er }),
        eB = (0, m.A)(W ?? Z, Q, t, { shouldHideMediaOptions: er }),
        eH = (0, u.A)({ id: t.id, label: Y.intl.string(Y.t.zBoHlf), shiftId: `${t.channel_id}-${t.id}` }),
        eK = (0, D.A)({ messageId: t.id, itemId: c, type: d, imageSrc: Z }),
        eq = (0, i.jsx)(r.rXV, { children: eK ?? eH }),
        eJ = (0, i.jsxs)(r.rXV, { children: [eU, ew, eF, ek, eX, eV] });
    return (0, i.jsxs)(r.W1t, {
        "data-menu-needs-review": !0,
        navId: el,
        onClose: ei,
        "aria-label": ea,
        onSelect: eo,
        children: [
            (0, i.jsx)(r.rXV, { children: eu }),
            (0, i.jsx)(r.rXV, { children: eg }),
            (0, i.jsxs)(r.rXV, { children: ["" === s ? ec : null, eA, ej] }),
            (0, i.jsxs)(r.rXV, { children: [ep, em, ef, ey] }),
            (0, i.jsxs)(r.rXV, { children: [eh, eE, eS, e_, eb, ev, eI, eT, ex, eD, eM, eC] }),
            (0, i.jsxs)(r.rXV, { children: [eN, eO, eR, ee && eG, ee && eL, eP] }),
            ed
                ? (0, i.jsxs)(i.Fragment, { children: [eq, eJ, (0, i.jsx)(r.rXV, { children: eB })] })
                : (0, i.jsxs)(i.Fragment, { children: [eJ, (0, i.jsx)(r.rXV, { children: eB }), eq] }),
        ],
    });
}
