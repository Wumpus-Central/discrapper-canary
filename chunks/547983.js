n.d(t, {
    c: () => Y,
    default: () => W,
});
var r = n(627968),
    i = n(64700),
    l = n(621466),
    a = n(397927),
    o = n(442433),
    c = n(155718),
    s = n(793574),
    d = n(688810),
    u = n(50268),
    g = n(486503),
    p = n(373963),
    f = n(115184),
    y = n(777933),
    b = n(826308),
    A = n(51512),
    m = n(773699),
    O = n(954571),
    v = n(363398),
    j = n(880457),
    h = n(840088),
    E = n(276887),
    S = n(345254),
    _ = n(734495),
    D = n(483768),
    P = n(522333),
    T = n(692457),
    I = n(253925),
    x = n(513560),
    w = n(20883),
    M = n(979766),
    C = n(982308),
    N = n(959239),
    R = n(420975),
    G = n(207115),
    L = n(614323),
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
    z = n(985018);

function W(e) {
    var t, n;
    let i,
        a,
        c,
        u,
        {
            channel: g,
            message: p,
            target: f,
            mediaItem: y,
            shouldHideMediaOptions: b,
            onSelect: A,
            onHeightUpdate: m,
        } = e,
        { analyticsLocations: O } = (0, d.Ay)([s.A.MESSAGE_CONTEXT_MENU]),
        v = f,
        j = f.getAttribute("data-type"),
        h = f.getAttribute("data-id"),
        E = f.getAttribute("data-name");
    if (null != y) a = i = c = y.url;
    else
        for (; (0, l.vq)(v); )
            (0, l.vq)(v, HTMLImageElement) && null != v.src && (a = v.src),
                (0, l.vq)(v, HTMLAnchorElement) &&
                    null != v.href &&
                    ((i = v.href),
                    (u = v.textContent),
                    null == a &&
                        "img" === v.getAttribute("data-role") &&
                        ((a = i),
                        v.hasAttribute("data-safe-src") &&
                            "" !== v.getAttribute("data-safe-src") &&
                            (c = v.getAttribute("data-safe-src")))),
                (v = v.parentNode);
    let S = null != (t = null == (n = document.getSelection()) ? void 0 : n.toString()) ? t : "";
    return (0, r.jsx)(d.f5, {
        value: O,
        children: Y({
            message: p,
            channel: g,
            mediaItem: y,
            textSelection: S,
            favoriteableType: j,
            favoriteableId: h,
            favoriteableName: E,
            itemHref: i,
            itemSrc: a,
            itemSafeSrc: c,
            itemTextContent: u,
            canReport: !0,
            onHeightUpdate: m,
            onSelect: A,
            onClose: o.Z_,
            navId: "message",
            ariaLabel: z.intl.string(z.t.ChPNkN),
            shouldHideMediaOptions: b,
        }),
    });
}

function Y(e) {
    let {
            message: t,
            channel: n,
            mediaItem: l,
            textSelection: o,
            favoriteableType: s,
            favoriteableId: d,
            favoriteableName: W,
            itemHref: Y,
            itemSrc: Z,
            itemSafeSrc: $,
            itemTextContent: Q,
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
                    O.default.track(J.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: r,
                        channel_id: n.id,
                        guild_id: null != (e = n.getGuildId()) ? e : void 0,
                        message_id: t.id,
                    });
                }
            },
            [n, t],
        );
    let ec = i.useCallback(() => {
            if (null != eo.current) {
                var e;
                let r = Date.now() - eo.current;
                O.default.track(J.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: r,
                    channel_id: n.id,
                    guild_id: null != (e = n.getGuildId()) ? e : void 0,
                    message_id: t.id,
                });
            }
            null == en || en();
        }, [en, n, t]),
        { tidaWebformEnabled: es } = g.A.useExperiment(
            {
                location: "MessageContextMenu",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        ed = (0, C.A)(t, n),
        eu = (0, p.A)(o),
        eg = (0, b.A)(o),
        ep = (0, h.A)(t, n),
        ef = (0, T.A)(t, n),
        ey = (0, L.A)(t, n),
        eb = (0, x.A)(t, n),
        eA = (0, X.A)(t, n),
        em = (0, _.A)(t),
        eO = (0, V.A)(t, n),
        ev = (0, M.A)(t, n),
        ej = (0, j.A)(t),
        eh = (0, m.A)({
            commandType: c.kc.MESSAGE,
            commandTargetId: t.id,
            channel: n,
            guildId: void 0,
            onHeightUpdate: et,
        }),
        eE = (0, k.A)(t, n),
        eS = (0, w.A)(t, n),
        e_ = (0, E.A)(t, n),
        eD = (0, S.A)(t, n),
        eP = (0, F.A)(t, n),
        eT = (0, N.A)(t),
        eI = (0, A.A)(t),
        ex = (0, B.A)(t),
        ew = (0, G.A)(t, n),
        eM = (0, R.A)(t, n),
        eC = (0, D.A)(t, n),
        eN = (0, U.Ay)(t),
        eR = (0, U.S_)(t),
        eG = (0, U.zo)(t),
        eL = (0, I.A)({
            type: s,
            id: d,
            name: W,
        }),
        eU = (0, v.A)(o, n.getGuildId()),
        ek = (0, f.A)($, t, {
            shouldHideMediaOptions: ea,
            contentType: null == l ? void 0 : l.contentType,
            originalContentType: null == l ? void 0 : l.originalContentType,
        }),
        eF = (0, H.A)(t, l),
        eX = (0, K.A)(t),
        eV = (0, q.A)(l, {
            shouldHideMediaOptions: ea,
        }),
        eB = (0, y.A)(null != Y ? Y : Z, Q, t, {
            shouldHideMediaOptions: ea,
        }),
        eH = (0, u.A)({
            id: t.id,
            label: z.intl.string(z.t.zBoHlf),
            shiftId: "".concat(t.channel_id, "-").concat(t.id),
        }),
        eK = (0, P.A)({
            messageId: t.id,
            itemId: d,
            type: s,
            imageSrc: Z,
        }),
        eq = (0, r.jsx)(a.rXV, {
            children: null != eK ? eK : eH,
        }),
        eJ = (0, r.jsxs)(a.rXV, {
            children: [eL, eU, ek, eF, eX, eV],
        });
    return (0, r.jsxs)(a.W1t, {
        "data-menu-mixed": !0,
        navId: ei,
        onClose: er,
        "aria-label": el,
        onSelect: ec,
        children: [
            (0, r.jsx)(a.rXV, {
                children: eu,
            }),
            (0, r.jsx)(a.rXV, {
                children: eg,
            }),
            (0, r.jsxs)(a.rXV, {
                children: ["" === o ? ed : null, ep, eT],
            }),
            (0, r.jsxs)(a.rXV, {
                children: [ef, ey, eb, eA],
            }),
            (0, r.jsxs)(a.rXV, {
                children: [em, eO, ev, ej, eh, eE, eS, e_, eD, eP, eI, ex],
            }),
            (0, r.jsxs)(a.rXV, {
                children: [ew, eM, eC, ee && eN, ee && eR, eG],
            }),
            es
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          eq,
                          eJ,
                          (0, r.jsx)(a.rXV, {
                              children: eB,
                          }),
                      ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          eJ,
                          (0, r.jsx)(a.rXV, {
                              children: eB,
                          }),
                          eq,
                      ],
                  }),
        ],
    });
}
