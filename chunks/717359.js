n.d(t, { A: () => el });
var s = n(477900),
    l = n(582128),
    i = n(855986),
    a = n(192308),
    o = n(452027),
    r = n(212245),
    c = n(287809),
    d = n(722178),
    u = n(352430),
    m = n(912630),
    x = n(965162),
    A = n(854325),
    E = n(952572),
    g = n(503698),
    p = n.n(g),
    N = n(939249),
    _ = n(834730),
    j = n(782134),
    I = n(805251),
    f = n(403581),
    h = n(866665),
    v = n(750943),
    O = n(638495),
    y = n(428678),
    S = n(635739),
    b = n(442433),
    C = n(964486),
    D = n(793574),
    U = n(688810),
    T = n(607470),
    k = n(421838),
    B = n(891540),
    M = n(738011),
    P = n(739053),
    L = n(82498),
    R = n(129230),
    G = n(486020),
    w = n(811091),
    V = n(665096),
    W = n(577718),
    H = n(652215),
    F = n(897513),
    K = n(339984),
    z = n(682901),
    J = n(792996),
    q = n(516978);
function Q(e) {
    let {
        icon: t,
        onClick: n,
        text: l,
        children: i,
        className: a,
        selected: o = !1,
        disabled: r = !1,
        onMouseLeave: c,
        onBlur: d,
    } = e;
    return (0, s.jsxs)(N.D, {
        className: p()(a, q.gf, { [q.JI]: o, [q.A7]: r }),
        onMouseLeave: c,
        onBlur: d,
        onClick: r ? void 0 : n,
        children: [
            o ? (0, s.jsx)("div", { className: q.SH }) : null,
            (0, s.jsxs)("div", {
                className: q.kV,
                children: [
                    i,
                    (0, s.jsxs)("div", {
                        className: q.fP,
                        children: [
                            (0, s.jsx)(t, {
                                className: q.ob,
                                color: "currentColor",
                                size: "custom",
                                width: 18,
                                height: 18,
                            }),
                            (0, s.jsx)(_.E, { className: q.V7, color: "none", variant: "body-sm/normal", children: l }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function Y(e) {
    let { option: t, source: n, isAnimated: i } = e,
        [a, o] = l.useState(!1);
    if (
        (l.useEffect(() => {
            new Image().src = n;
        }, [n]),
        !i || null == t)
    )
        return (0, s.jsx)("div", { className: q.PQ, style: { backgroundImage: `url(${n})` } });
    let r = (0, G.Bo)({ userId: t.user_id, assetId: t.id, assetHash: t.asset, size: 720, canAnimate: !1 });
    return (0, s.jsx)("img", {
        onMouseMove: () => o(!0),
        onMouseLeave: () => o(!1),
        className: q.PQ,
        src: a ? n : r,
        alt: t.id,
    });
}
function Z(e) {
    let {
            option: t,
            source: a,
            selected: o = !1,
            onSelectOption: c,
            isAnimatedImage: d,
            isVideo: u,
            hotspotLocation: m,
            ariaLabel: A,
        } = e,
        E = (0, r.p)(),
        { analyticsLocations: g } = (0, U.Ay)(D.A.VIDEO_BACKGROUND_IMAGE_OPTION),
        _ = (0, i.bG)([B.A], () => null != m && B.A.hasHotspot(m)),
        f = l.useCallback((e) => {
            if (!(0, M.u)(e)) throw e;
        }, []),
        h = u
            ? (0, s.jsx)(T.A, { className: q.PQ, src: a, loop: !0, playOnHover: !0, muted: !0, onPlayError: f })
            : (0, s.jsx)(Y, { isAnimated: d, option: (0, x.d1)(t) ? t : void 0, source: a });
    function v() {
        null != m &&
            _ &&
            (k.sF(m),
            R.default.track(H.HAw.PREMIUM_UPSELL_VIEWED, {
                type: z.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: E.location,
                location_stack: g,
            }),
            (0, P.sq)(H.U7l.PREMIUM_UPSELL_VIEWED, g, () => (0, L.uq)(z.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET)));
    }
    return (0, s.jsxs)(N.D, {
        className: p()(q.gf, { [q.JI]: o }),
        "aria-label": A,
        onClick: () => c(t),
        onContextMenu: (e) =>
            (0, b.L3)(e, async () => {
                let { default: e } = await n.e(422305).then(n.bind(n, 5752));
                return (n) => (0, s.jsx)(e, { ...n, backgroundOption: t, optionIsInUse: o });
            }),
        children: [
            o ? (0, s.jsx)("div", { className: q.SH }) : null,
            (0, s.jsx)("div", { onFocus: v, onMouseEnter: v, className: q.kV, children: h }),
            u || d
                ? (0, s.jsx)("div", {
                      className: q.uZ,
                      children: (0, s.jsx)(j.PlayIcon, { size: "xxs", color: "currentColor" }),
                  })
                : null,
            _ &&
                (0, s.jsx)("div", { className: q.sL, children: (0, s.jsx)(I.E, { type: "new", variant: "inverted" }) }),
        ],
    });
}
function $() {
    return (0, s.jsxs)("div", {
        className: q.j1,
        children: [
            (0, s.jsx)(f.NitroWheelIcon, { size: "md", color: "currentColor", className: q.eo }),
            (0, s.jsx)(_.E, { variant: "body-sm/normal", children: J.intl.string(J.t["T+yRY3"]) }),
        ],
    });
}
function X(e) {
    let { onClick: t, tooltipText: n, disabled: l = !1 } = e,
        a = (0, i.bG)([B.A], () => B.A.hasHotspot(F._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function o() {
        k.sF(F._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let r = a ? J.intl.string(J.t["5TUJOv"]) : n;
    return (0, s.jsx)(h.m, {
        text: r,
        children: (0, s.jsxs)("div", {
            className: q.$g,
            children: [
                (0, s.jsxs)(Q, {
                    className: q.__invalid_backgroundOptionBlurred,
                    disabled: l,
                    icon: v.ImagePlusIcon,
                    onClick: t,
                    onMouseLeave: o,
                    onBlur: o,
                    text: (0, s.jsxs)("div", {
                        className: q.Us,
                        children: [
                            (0, s.jsx)(f.NitroWheelIcon, { size: "md", color: "currentColor", className: q.PK }),
                            (0, s.jsx)("div", { className: q.kr, children: J.intl.string(J.t["1t7U8W"]) }),
                        ],
                    }),
                    children: [(0, s.jsx)("div", { className: q.eD }), (0, s.jsx)("div", { className: q.G5 })],
                }),
                a &&
                    (0, s.jsx)("div", {
                        className: q.sL,
                        children: (0, s.jsx)(I.E, { type: "new", variant: "inverted" }),
                    }),
            ],
        }),
    });
}
function ee(e) {
    let { onClick: t } = e,
        n = (0, r.p)(),
        { analyticsLocations: l } = (0, U.Ay)(D.A.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, C.Ay)(() => {
            (R.default.track(H.HAw.PREMIUM_UPSELL_VIEWED, {
                type: z.e.VIDEO_BACKGROUNDS_INLINE,
                location: n.location,
                location_stack: l,
            }),
                (0, P.sq)(H.U7l.PREMIUM_UPSELL_VIEWED, l, () => (0, L.uq)(z.e.VIDEO_BACKGROUNDS_INLINE)));
        }),
        (0, s.jsx)(X, { onClick: t, tooltipText: J.intl.string(J.t["IqE0T/"]) })
    );
}
function et(e) {
    let { onAddBackgroundImage: t, disabled: l } = e,
        i = (0, O.k)(),
        o = l ? J.intl.formatToPlainString(J.t.ykGFeD, { maxCustomBackgrounds: 25 }) : J.intl.string(J.t.Qx0tFc),
        r = [{ name: J.intl.string(J.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "png", "gif", "mp4"] }];
    return (0, s.jsx)(X, {
        disabled: l,
        onClick: function () {
            (0, a.mM)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e(191601),
                        n.e(67702),
                        n.e(1214),
                        n.e(475006),
                        n.e(454048),
                        n.e(863232),
                        n.e(300699),
                        n.e(349619),
                        n.e(922716),
                        n.e(221825),
                        n.e(901555),
                        n.e(199999),
                        n.e(844695),
                        n.e(133902),
                        n.e(50015),
                        n.e(790244),
                        n.e(229666),
                        n.e(660953),
                        n.e(647011),
                        n.e(779149),
                        n.e(90017),
                        n.e(199150),
                        n.e(774836),
                    ]).then(n.bind(n, 685663));
                    return (n) =>
                        (0, s.jsx)(e, {
                            maxFileSizeBytes: W.G9,
                            onComplete: (e) => {
                                let { imageUri: n, file: s, isFromTenor: l } = e;
                                return t(n, s, l);
                            },
                            uploadType: K.HL.VIDEO_BACKGROUND,
                            filters: r,
                            modalTitle: J.intl.string(J.t.yG2pUi),
                            imageSpecifications: J.intl.string(J.t["72OaxN"]),
                            uploadOptionTitle: J.intl.string(J.t.xsW8u6),
                            showUpsellHeader: !0,
                            ...n,
                        });
                },
                { contextKey: i },
            );
        },
        tooltipText: o,
    });
}
function en(e) {
    let {
            canUseCustomBackgrounds: t,
            customBackgroundOptions: n,
            selectedOption: i,
            onSelectOption: a,
            onUpsellClick: o,
            onAddBackgroundImage: r,
        } = e,
        c = l.useMemo(
            () =>
                n.sort((e, t) =>
                    null == e.last_used || null == t.last_used
                        ? w.default.compare(t.id, e.id)
                        : new Date(t.last_used).getTime() - new Date(e.last_used).getTime(),
                ),
            [n],
        ),
        d = c.length >= 25,
        { analyticsLocations: u } = (0, U.Ay)(D.A.VIDEO_BACKGROUND_OPTIONS),
        m = Object.values((0, V.A)()).sort((e, t) => W.sl[e.id] - W.sl[t.id]);
    return (0, s.jsx)(U.f5, {
        value: u,
        children: (0, s.jsxs)("div", {
            className: q.to,
            children: [
                (0, s.jsx)(Q, {
                    selected: null == i,
                    icon: y.DenyIcon,
                    onClick: () => a(null),
                    text: J.intl.string(J.t.fUdMeO),
                }),
                (0, s.jsx)(Q, {
                    selected: "blur" === i,
                    icon: S.BlurBackgroundIcon,
                    onClick: () => a("blur"),
                    text: J.intl.string(J.t.LhSyL8),
                    children: (0, s.jsx)("div", { className: q.LJ }),
                }),
                t ? (0, s.jsx)(et, { onAddBackgroundImage: r, disabled: d }) : (0, s.jsx)(ee, { onClick: o }),
                c.map((e) => {
                    let t = (0, G.Bo)({ userId: e.user_id, assetId: e.id, assetHash: e.asset, size: 720 });
                    return null == t
                        ? null
                        : (0, s.jsx)(
                              h.m,
                              {
                                  __unsupportedReactNodeAsText: (0, s.jsx)($, {}),
                                  "aria-label": J.intl.string(J.t["T+yRY3"]),
                                  ariaHidden: !0,
                                  children: (0, s.jsx)(
                                      Z,
                                      {
                                          option: e,
                                          source: t,
                                          selected: (0, x.d1)(i) && i.id === e.id,
                                          onSelectOption: a,
                                          isVideo: (0, G.q6)(e.asset),
                                          isAnimatedImage: (0, G.VI)(e.asset),
                                          ariaLabel: J.intl.string(J.t["T+yRY3"]),
                                      },
                                      e.id,
                                  ),
                              },
                              e.id,
                          );
                }),
                m.map((e) => {
                    let t = !0 === e.isVideo;
                    return (0, s.jsx)(
                        h.m,
                        {
                            text: e.name,
                            "aria-label": e.name,
                            ariaHidden: !0,
                            children: (0, s.jsx)(
                                Z,
                                {
                                    option: e.id,
                                    source: e.source,
                                    selected: i === e.id,
                                    onSelectOption: a,
                                    isVideo: t,
                                    isAnimatedImage: !1,
                                    hotspotLocation: e.hotspotLocation,
                                    ariaLabel: e.name,
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
var es = n(693591);
function el(e) {
    let {
            onLearnMore: t,
            selectedBackgroundOption: g,
            onSelectBackgroundOption: p,
            currentDeviceId: N,
            className: _,
        } = e,
        j = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        [I, f] = l.useState(null),
        h = (0, E.A)(),
        v = d.Ay.canUseCustomBackgrounds(j);
    l.useEffect(() => {
        (0, u.HR)();
    }, []);
    let O = (0, i.cf)([m.A], () => (v ? m.A.videoFilterAssets : {})),
        y = l.useMemo(() => Object.values(O).filter((e) => e.type === W.yZ.BACKGROUND || (e.type, !1)), [O]),
        S = (0, r.p)(),
        b = { isVideoBackgroundSupported: h, onSelectBackgroundOption: p, selectedBackgroundOption: g },
        C = l.useRef(b);
    function D(e) {
        (p(e),
            (0, A.S1)(e, N, { location: S.location })
                .then(() => f(null))
                .catch(() => {
                    (f(J.intl.string(J.t.ejrSLe)), (0, A.S1)(null, N, { location: S.location }));
                }));
    }
    return (
        l.useEffect(() => {
            C.current = b;
        }),
        l.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: n } = C.current;
            e ? (0, A.S1)(n, N, { track: !1 }).catch(() => t(null)) : null != n && t(null);
        }, [N]),
        h
            ? (0, s.jsx)("div", {
                  className: _,
                  children: (0, s.jsx)(o.D, {
                      label: J.intl.string(J.t.lZTUPs),
                      errorMessage: I,
                      children: (0, s.jsx)(en, {
                          canUseCustomBackgrounds: v,
                          customBackgroundOptions: y,
                          selectedOption: g,
                          onSelectOption: D,
                          onUpsellClick: function () {
                              (0, a.mM)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e(166171),
                                      n.e(392028),
                                      n.e(629972),
                                      n.e(334168),
                                      n.e(935205),
                                      n.e(454048),
                                      n.e(300699),
                                      n.e(349619),
                                      n.e(922716),
                                      n.e(398125),
                                      n.e(221825),
                                      n.e(930758),
                                      n.e(776195),
                                      n.e(901555),
                                      n.e(707826),
                                      n.e(832817),
                                      n.e(561216),
                                      n.e(799657),
                                      n.e(562168),
                                      n.e(843117),
                                      n.e(241351),
                                  ]).then(n.bind(n, 647098));
                                  return (n) =>
                                      (0, s.jsx)(e, {
                                          ...n,
                                          onLearnMore: t,
                                          analyticsSource: { ...S.location, object: H.ZSU.BUTTON_CTA },
                                      });
                              });
                          },
                          onAddBackgroundImage: async function (e, t) {
                              let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                              try {
                                  let s = await (0, u.F9)(e, W.yZ.BACKGROUND);
                                  (D(s), (0, x.D1)(s, t.type === es.a.MP4, n), f(null));
                              } catch (e) {
                                  f(e.message);
                              }
                          },
                      }),
                  }),
              })
            : null
    );
}
