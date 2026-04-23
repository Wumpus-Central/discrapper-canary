s.d(t, { A: () => J });
var n = s(627968),
    l = s(64700),
    i = s(503698),
    a = s.n(i),
    o = s(311907),
    r = s(990078),
    c = s(939249),
    d = s(834730),
    u = s(782134),
    m = s(777666),
    x = s(403581),
    p = s(750943),
    g = s(638495),
    A = s(192308),
    h = s(428678),
    v = s(635739),
    f = s(442433),
    j = s(212245),
    N = s(964486),
    _ = s(793574),
    I = s(688810),
    D = s(607470),
    O = s(421838),
    E = s(891540),
    C = s(738011),
    b = s(954571),
    T = s(486020),
    S = s(661191),
    U = s(965162),
    y = s(957153),
    k = s(577718),
    M = s(652215),
    w = s(897513),
    L = s(339984),
    P = s(788868),
    V = s(985018),
    B = s(941531);
function R(e) {
    let {
        icon: t,
        onClick: s,
        text: l,
        children: i,
        className: o,
        selected: r = !1,
        disabled: u = !1,
        onMouseLeave: m,
        onBlur: x,
    } = e;
    return (0, n.jsxs)(c.D, {
        className: a()(o, B.gf, { [B.JI]: r, [B.A7]: u }),
        onMouseLeave: m,
        onBlur: x,
        onClick: u ? void 0 : s,
        children: [
            r ? (0, n.jsx)("div", { className: B.SH }) : null,
            (0, n.jsxs)("div", {
                className: B.kV,
                children: [
                    i,
                    (0, n.jsxs)("div", {
                        className: B.fP,
                        children: [
                            (0, n.jsx)(t, {
                                className: B.ob,
                                color: "currentColor",
                                size: "custom",
                                width: 18,
                                height: 18,
                            }),
                            (0, n.jsx)(d.E, { className: B.V7, color: "none", variant: "text-sm/normal", children: l }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function G(e) {
    let { option: t, source: s, isAnimated: i } = e,
        [a, o] = l.useState(!1);
    if (
        (l.useEffect(() => {
            new Image().src = s;
        }, [s]),
        !i || null == t)
    )
        return (0, n.jsx)("div", { className: B.PQ, style: { backgroundImage: `url(${s})` } });
    let r = (0, T.Bo)({ userId: t.user_id, assetId: t.id, assetHash: t.asset, size: 720, canAnimate: !1 });
    return (0, n.jsx)("img", {
        onMouseMove: () => o(!0),
        onMouseLeave: () => o(!1),
        className: B.PQ,
        src: a ? s : r,
        alt: t.id,
    });
}
function H(e) {
    let {
            option: t,
            source: i,
            selected: r = !1,
            onSelectOption: d,
            isAnimatedImage: x,
            isVideo: p,
            hotspotLocation: g,
        } = e,
        A = (0, j.p)(),
        { analyticsLocations: h } = (0, I.Ay)(_.A.VIDEO_BACKGROUND_IMAGE_OPTION),
        v = (0, o.bG)([E.A], () => null != g && E.A.hasHotspot(g)),
        N = l.useCallback((e) => {
            if (!(0, C.u)(e)) throw e;
        }, []),
        T = p
            ? (0, n.jsx)(D.A, { className: B.PQ, src: i, loop: !0, playOnHover: !0, muted: !0, onPlayError: N })
            : (0, n.jsx)(G, { isAnimated: x, option: (0, U.d1)(t) ? t : void 0, source: i });
    function S() {
        null != g &&
            v &&
            (O.sF(g),
            b.default.track(M.HAw.PREMIUM_UPSELL_VIEWED, {
                type: P.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: A.location,
                location_stack: h,
            }));
    }
    return (0, n.jsxs)(c.D, {
        className: a()(B.gf, { [B.JI]: r }),
        onClick: () => d(t),
        onContextMenu: (e) =>
            (0, f.L3)(e, async () => {
                let { default: e } = await s.e("22305").then(s.bind(s, 5752));
                return (s) => (0, n.jsx)(e, { ...s, backgroundOption: t, optionIsInUse: r });
            }),
        children: [
            r ? (0, n.jsx)("div", { className: B.SH }) : null,
            (0, n.jsx)("div", { onFocus: S, onMouseEnter: S, className: B.kV, children: T }),
            p || x
                ? (0, n.jsx)("div", {
                      className: B.uZ,
                      children: (0, n.jsx)(u.u, { size: "xxs", color: "currentColor" }),
                  })
                : null,
            v && (0, n.jsx)(m.Lp, { text: V.intl.string(V.t.y2b7CA), className: B.$5 }),
        ],
    });
}
function W() {
    return (0, n.jsxs)("div", {
        className: B.j1,
        children: [
            (0, n.jsx)(x.t, { size: "md", color: "currentColor", className: B.eo }),
            (0, n.jsx)(d.E, { variant: "text-sm/normal", children: V.intl.string(V.t["T+yRY3"]) }),
        ],
    });
}
function F(e) {
    let { onClick: t, tooltipText: s, disabled: l = !1 } = e,
        i = (0, o.bG)([E.A], () => E.A.hasHotspot(w._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function a() {
        O.sF(w._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let c = i ? V.intl.string(V.t["5TUJOv"]) : s;
    return (0, n.jsx)(r.m, {
        text: c,
        children: (0, n.jsxs)("div", {
            className: B.$g,
            children: [
                (0, n.jsxs)(R, {
                    className: B.__invalid_backgroundOptionBlurred,
                    disabled: l,
                    icon: p.X,
                    onClick: t,
                    onMouseLeave: a,
                    onBlur: a,
                    text: (0, n.jsxs)("div", {
                        className: B.Us,
                        children: [
                            (0, n.jsx)(x.t, { size: "md", color: "currentColor", className: B.PK }),
                            (0, n.jsx)("div", { className: B.kr, children: V.intl.string(V.t["1t7U8W"]) }),
                        ],
                    }),
                    children: [(0, n.jsx)("div", { className: B.eD }), (0, n.jsx)("div", { className: B.G5 })],
                }),
                i && (0, n.jsx)(m.Lp, { text: V.intl.string(V.t.y2b7CA), className: B.$5 }),
            ],
        }),
    });
}
function K(e) {
    let { onClick: t } = e,
        s = (0, j.p)(),
        { analyticsLocations: l } = (0, I.Ay)(_.A.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, N.Ay)(() => {
            b.default.track(M.HAw.PREMIUM_UPSELL_VIEWED, {
                type: P.e.VIDEO_BACKGROUNDS_INLINE,
                location: s.location,
                location_stack: l,
            });
        }),
        (0, n.jsx)(F, { onClick: t, tooltipText: V.intl.string(V.t["IqE0T/"]) })
    );
}
function z(e) {
    let { onAddBackgroundImage: t, disabled: l } = e,
        i = (0, g.k)(),
        a = l ? V.intl.formatToPlainString(V.t.ykGFeD, { maxCustomBackgrounds: 25 }) : V.intl.string(V.t.Qx0tFc),
        o = [{ name: V.intl.string(V.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "png", "gif", "mp4"] }];
    return (0, n.jsx)(F, {
        disabled: l,
        onClick: function () {
            (0, A.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([s.e("79149"), s.e("53653"), s.e("79354")]).then(
                        s.bind(s, 551028),
                    );
                    return (s) =>
                        (0, n.jsx)(e, {
                            maxFileSizeBytes: k.G9,
                            onComplete: (e) => {
                                let { imageUri: s, file: n, isFromTenor: l } = e;
                                return t(s, n, l);
                            },
                            uploadType: L.HL.VIDEO_BACKGROUND,
                            filters: o,
                            modalTitle: V.intl.string(V.t.yG2pUi),
                            imageSpecifications: V.intl.string(V.t["72OaxN"]),
                            uploadOptionTitle: V.intl.string(V.t.xsW8u6),
                            showUpsellHeader: !0,
                            ...s,
                        });
                },
                { contextKey: i },
            );
        },
        tooltipText: a,
    });
}
function J(e) {
    let {
            canUseCustomBackgrounds: t,
            customBackgroundOptions: s,
            selectedOption: i,
            onSelectOption: a,
            onUpsellClick: o,
            onAddBackgroundImage: c,
        } = e,
        d = l.useMemo(
            () =>
                s.sort((e, t) =>
                    null == e.last_used || null == t.last_used
                        ? S.default.compare(t.id, e.id)
                        : new Date(t.last_used).getTime() - new Date(e.last_used).getTime(),
                ),
            [s],
        ),
        u = d.length >= 25,
        { analyticsLocations: m } = (0, I.Ay)(_.A.VIDEO_BACKGROUND_OPTIONS),
        x = Object.values((0, y.A)()).sort((e, t) => k.sl[e.id] - k.sl[t.id]);
    return (0, n.jsx)(I.f5, {
        value: m,
        children: (0, n.jsxs)("div", {
            className: B.to,
            children: [
                (0, n.jsx)(R, {
                    selected: null == i,
                    icon: h.K,
                    onClick: () => a(null),
                    text: V.intl.string(V.t.fUdMeO),
                }),
                (0, n.jsx)(R, {
                    selected: "blur" === i,
                    icon: v.f,
                    onClick: () => a("blur"),
                    text: V.intl.string(V.t.LhSyL8),
                    children: (0, n.jsx)("div", { className: B.LJ }),
                }),
                t ? (0, n.jsx)(z, { onAddBackgroundImage: c, disabled: u }) : (0, n.jsx)(K, { onClick: o }),
                d.map((e) => {
                    let t = (0, T.Bo)({ userId: e.user_id, assetId: e.id, assetHash: e.asset, size: 720 });
                    return null == t
                        ? null
                        : (0, n.jsx)(
                              r.m,
                              {
                                  __unsupportedReactNodeAsText: (0, n.jsx)(W, {}),
                                  "aria-label": V.intl.string(V.t["T+yRY3"]),
                                  children: (0, n.jsx)(
                                      H,
                                      {
                                          option: e,
                                          source: t,
                                          selected: (0, U.d1)(i) && i.id === e.id,
                                          onSelectOption: a,
                                          isVideo: (0, T.q6)(e.asset),
                                          isAnimatedImage: (0, T.VI)(e.asset),
                                      },
                                      e.id,
                                  ),
                              },
                              e.id,
                          );
                }),
                x.map((e) => {
                    let t = !0 === e.isVideo;
                    return (0, n.jsx)(
                        r.m,
                        {
                            text: e.name,
                            "aria-label": e.name,
                            children: (0, n.jsx)(
                                H,
                                {
                                    option: e.id,
                                    source: e.source,
                                    selected: i === e.id,
                                    onSelectOption: a,
                                    isVideo: t,
                                    isAnimatedImage: !1,
                                    hotspotLocation: e.hotspotLocation,
                                },
                                e.id,
                            ),
                        },
                        e.id,
                    );
                }),
            ],
        }),
    });
}
