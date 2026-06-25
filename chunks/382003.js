s.d(t, { A: () => es });
var n = s(627968),
    l = s(64700),
    i = s(17928),
    a = s(192308),
    o = s(452027),
    r = s(212245),
    c = s(287809),
    d = s(428262),
    u = s(285918),
    m = s(912630),
    x = s(965162),
    p = s(413339),
    A = s(952572),
    g = s(503698),
    j = s.n(g),
    f = s(990078),
    N = s(939249),
    _ = s(834730),
    h = s(782134),
    E = s(812993),
    O = s(403581),
    v = s(750943),
    I = s(638495),
    C = s(428678),
    b = s(635739),
    y = s(442433),
    S = s(964486),
    T = s(793574),
    k = s(688810),
    D = s(607470),
    U = s(421838),
    B = s(891540),
    L = s(738011),
    P = s(174459),
    M = s(486020),
    w = s(935208),
    G = s(498559),
    R = s(577718),
    V = s(652215),
    H = s(897513),
    F = s(339984),
    K = s(788868),
    W = s(375708),
    z = s(545819);
function J(e) {
    let {
        icon: t,
        onClick: s,
        text: l,
        children: i,
        className: a,
        selected: o = !1,
        disabled: r = !1,
        onMouseLeave: c,
        onBlur: d,
    } = e;
    return (0, n.jsxs)(N.D, {
        className: j()(a, z.gf, { [z.JI]: o, [z.A7]: r }),
        onMouseLeave: c,
        onBlur: d,
        onClick: r ? void 0 : s,
        children: [
            o ? (0, n.jsx)("div", { className: z.SH }) : null,
            (0, n.jsxs)("div", {
                className: z.kV,
                children: [
                    i,
                    (0, n.jsxs)("div", {
                        className: z.fP,
                        children: [
                            (0, n.jsx)(t, {
                                className: z.ob,
                                color: "currentColor",
                                size: "custom",
                                width: 18,
                                height: 18,
                            }),
                            (0, n.jsx)(_.E, { className: z.V7, color: "none", variant: "text-sm/normal", children: l }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function Q(e) {
    let { option: t, source: s, isAnimated: i } = e,
        [a, o] = l.useState(!1);
    if (
        (l.useEffect(() => {
            new Image().src = s;
        }, [s]),
        !i || null == t)
    )
        return (0, n.jsx)("div", { className: z.PQ, style: { backgroundImage: `url(${s})` } });
    let r = (0, M.Bo)({ userId: t.user_id, assetId: t.id, assetHash: t.asset, size: 720, canAnimate: !1 });
    return (0, n.jsx)("img", {
        onMouseMove: () => o(!0),
        onMouseLeave: () => o(!1),
        className: z.PQ,
        src: a ? s : r,
        alt: t.id,
    });
}
function Y(e) {
    let {
            option: t,
            source: a,
            selected: o = !1,
            onSelectOption: c,
            isAnimatedImage: d,
            isVideo: u,
            hotspotLocation: m,
            ariaLabel: p,
        } = e,
        A = (0, r.p)(),
        { analyticsLocations: g } = (0, k.Ay)(T.A.VIDEO_BACKGROUND_IMAGE_OPTION),
        f = (0, i.bG)([B.A], () => null != m && B.A.hasHotspot(m)),
        _ = l.useCallback((e) => {
            if (!(0, L.u)(e)) throw e;
        }, []),
        O = u
            ? (0, n.jsx)(D.A, { className: z.PQ, src: a, loop: !0, playOnHover: !0, muted: !0, onPlayError: _ })
            : (0, n.jsx)(Q, { isAnimated: d, option: (0, x.d1)(t) ? t : void 0, source: a });
    function v() {
        null != m &&
            f &&
            (U.sF(m),
            P.default.track(V.HAw.PREMIUM_UPSELL_VIEWED, {
                type: K.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: A.location,
                location_stack: g,
            }));
    }
    return (0, n.jsxs)(N.D, {
        className: j()(z.gf, { [z.JI]: o }),
        "aria-label": p,
        onClick: () => c(t),
        onContextMenu: (e) =>
            (0, y.L3)(e, async () => {
                let { default: e } = await s.e("22305").then(s.bind(s, 5752));
                return (s) => (0, n.jsx)(e, { ...s, backgroundOption: t, optionIsInUse: o });
            }),
        children: [
            o ? (0, n.jsx)("div", { className: z.SH }) : null,
            (0, n.jsx)("div", { onFocus: v, onMouseEnter: v, className: z.kV, children: O }),
            u || d
                ? (0, n.jsx)("div", {
                      className: z.uZ,
                      children: (0, n.jsx)(h.u, { size: "xxs", color: "currentColor" }),
                  })
                : null,
            f && (0, n.jsx)(E.Lp, { text: W.intl.string(W.t.y2b7CA), className: z.$5 }),
        ],
    });
}
function Z() {
    return (0, n.jsxs)("div", {
        className: z.j1,
        children: [
            (0, n.jsx)(O.t, { size: "md", color: "currentColor", className: z.eo }),
            (0, n.jsx)(_.E, { variant: "text-sm/normal", children: W.intl.string(W.t["T+yRY3"]) }),
        ],
    });
}
function $(e) {
    let { onClick: t, tooltipText: s, disabled: l = !1 } = e,
        a = (0, i.bG)([B.A], () => B.A.hasHotspot(H._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function o() {
        U.sF(H._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let r = a ? W.intl.string(W.t["5TUJOv"]) : s;
    return (0, n.jsx)(f.m, {
        text: r,
        children: (0, n.jsxs)("div", {
            className: z.$g,
            children: [
                (0, n.jsxs)(J, {
                    className: z.__invalid_backgroundOptionBlurred,
                    disabled: l,
                    icon: v.X,
                    onClick: t,
                    onMouseLeave: o,
                    onBlur: o,
                    text: (0, n.jsxs)("div", {
                        className: z.Us,
                        children: [
                            (0, n.jsx)(O.t, { size: "md", color: "currentColor", className: z.PK }),
                            (0, n.jsx)("div", { className: z.kr, children: W.intl.string(W.t["1t7U8W"]) }),
                        ],
                    }),
                    children: [(0, n.jsx)("div", { className: z.eD }), (0, n.jsx)("div", { className: z.G5 })],
                }),
                a && (0, n.jsx)(E.Lp, { text: W.intl.string(W.t.y2b7CA), className: z.$5 }),
            ],
        }),
    });
}
function q(e) {
    let { onClick: t } = e,
        s = (0, r.p)(),
        { analyticsLocations: l } = (0, k.Ay)(T.A.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, S.Ay)(() => {
            P.default.track(V.HAw.PREMIUM_UPSELL_VIEWED, {
                type: K.e.VIDEO_BACKGROUNDS_INLINE,
                location: s.location,
                location_stack: l,
            });
        }),
        (0, n.jsx)($, { onClick: t, tooltipText: W.intl.string(W.t["IqE0T/"]) })
    );
}
function X(e) {
    let { onAddBackgroundImage: t, disabled: l } = e,
        i = (0, I.k)(),
        o = l ? W.intl.formatToPlainString(W.t.ykGFeD, { maxCustomBackgrounds: 25 }) : W.intl.string(W.t.Qx0tFc),
        r = [{ name: W.intl.string(W.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "png", "gif", "mp4"] }];
    return (0, n.jsx)($, {
        disabled: l,
        onClick: function () {
            (0, a.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        s.e("27565"),
                        s.e("84059"),
                        s.e("55306"),
                        s.e("56989"),
                        s.e("54048"),
                        s.e("99666"),
                        s.e("50015"),
                        s.e("62680"),
                        s.e("88559"),
                        s.e("21825"),
                        s.e("33902"),
                        s.e("99999"),
                        s.e("1555"),
                        s.e("29666"),
                        s.e("93513"),
                        s.e("47011"),
                        s.e("79149"),
                        s.e("90017"),
                        s.e("99150"),
                        s.e("60987"),
                    ]).then(s.bind(s, 902550));
                    return (s) =>
                        (0, n.jsx)(e, {
                            maxFileSizeBytes: R.G9,
                            onComplete: (e) => {
                                let { imageUri: s, file: n, isFromTenor: l } = e;
                                return t(s, n, l);
                            },
                            uploadType: F.HL.VIDEO_BACKGROUND,
                            filters: r,
                            modalTitle: W.intl.string(W.t.yG2pUi),
                            imageSpecifications: W.intl.string(W.t["72OaxN"]),
                            uploadOptionTitle: W.intl.string(W.t.xsW8u6),
                            showUpsellHeader: !0,
                            ...s,
                        });
                },
                { contextKey: i },
            );
        },
        tooltipText: o,
    });
}
function ee(e) {
    let {
            canUseCustomBackgrounds: t,
            customBackgroundOptions: s,
            selectedOption: i,
            onSelectOption: a,
            onUpsellClick: o,
            onAddBackgroundImage: r,
        } = e,
        c = l.useMemo(
            () =>
                s.sort((e, t) =>
                    null == e.last_used || null == t.last_used
                        ? w.default.compare(t.id, e.id)
                        : new Date(t.last_used).getTime() - new Date(e.last_used).getTime(),
                ),
            [s],
        ),
        d = c.length >= 25,
        { analyticsLocations: u } = (0, k.Ay)(T.A.VIDEO_BACKGROUND_OPTIONS),
        m = Object.values((0, G.A)()).sort((e, t) => R.sl[e.id] - R.sl[t.id]);
    return (0, n.jsx)(k.f5, {
        value: u,
        children: (0, n.jsxs)("div", {
            className: z.to,
            children: [
                (0, n.jsx)(J, {
                    selected: null == i,
                    icon: C.K,
                    onClick: () => a(null),
                    text: W.intl.string(W.t.fUdMeO),
                }),
                (0, n.jsx)(J, {
                    selected: "blur" === i,
                    icon: b.f,
                    onClick: () => a("blur"),
                    text: W.intl.string(W.t.LhSyL8),
                    children: (0, n.jsx)("div", { className: z.LJ }),
                }),
                t ? (0, n.jsx)(X, { onAddBackgroundImage: r, disabled: d }) : (0, n.jsx)(q, { onClick: o }),
                c.map((e) => {
                    let t = (0, M.Bo)({ userId: e.user_id, assetId: e.id, assetHash: e.asset, size: 720 });
                    return null == t
                        ? null
                        : (0, n.jsx)(
                              f.m,
                              {
                                  __unsupportedReactNodeAsText: (0, n.jsx)(Z, {}),
                                  "aria-label": W.intl.string(W.t["T+yRY3"]),
                                  ariaHidden: !0,
                                  children: (0, n.jsx)(
                                      Y,
                                      {
                                          option: e,
                                          source: t,
                                          selected: (0, x.d1)(i) && i.id === e.id,
                                          onSelectOption: a,
                                          isVideo: (0, M.q6)(e.asset),
                                          isAnimatedImage: (0, M.VI)(e.asset),
                                          ariaLabel: W.intl.string(W.t["T+yRY3"]),
                                      },
                                      e.id,
                                  ),
                              },
                              e.id,
                          );
                }),
                m.map((e) => {
                    let t = !0 === e.isVideo;
                    return (0, n.jsx)(
                        f.m,
                        {
                            text: e.name,
                            "aria-label": e.name,
                            ariaHidden: !0,
                            children: (0, n.jsx)(
                                Y,
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
var et = s(693591);
function es(e) {
    let {
            onLearnMore: t,
            selectedBackgroundOption: g,
            onSelectBackgroundOption: j,
            currentDeviceId: f,
            className: N,
        } = e,
        _ = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        [h, E] = l.useState(null),
        O = (0, A.A)(),
        v = d.Ay.canUseCustomBackgrounds(_);
    l.useEffect(() => {
        (0, u.HR)();
    }, []);
    let I = (0, i.cf)([m.A], () => (v ? m.A.videoFilterAssets : {})),
        C = l.useMemo(() => Object.values(I).filter((e) => e.type === R.yZ.BACKGROUND), [I]),
        b = (0, r.p)(),
        y = { isVideoBackgroundSupported: O, onSelectBackgroundOption: j, selectedBackgroundOption: g },
        S = l.useRef(y);
    function T(e) {
        j(e),
            (0, p.S1)(e, f, { location: b.location })
                .then(() => E(null))
                .catch(() => {
                    E(W.intl.string(W.t.ejrSLe)), (0, p.S1)(null, f, { location: b.location });
                });
    }
    return (
        l.useEffect(() => {
            S.current = y;
        }),
        l.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: s } = S.current;
            e ? (0, p.S1)(s, f, { track: !1 }).catch(() => t(null)) : null != s && t(null);
        }, [f]),
        O
            ? (0, n.jsx)("div", {
                  className: N,
                  children: (0, n.jsx)(o.D, {
                      label: W.intl.string(W.t.lZTUPs),
                      errorMessage: h,
                      children: (0, n.jsx)(ee, {
                          canUseCustomBackgrounds: v,
                          customBackgroundOptions: C,
                          selectedOption: g,
                          onSelectOption: T,
                          onUpsellClick: function () {
                              (0, a.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      s.e("58247"),
                                      s.e("44078"),
                                      s.e("38789"),
                                      s.e("53915"),
                                      s.e("46903"),
                                      s.e("69738"),
                                      s.e("93601"),
                                      s.e("41842"),
                                      s.e("61749"),
                                      s.e("36027"),
                                      s.e("84346"),
                                      s.e("97106"),
                                      s.e("10038"),
                                      s.e("11586"),
                                      s.e("64923"),
                                      s.e("85414"),
                                      s.e("12126"),
                                      s.e("87870"),
                                      s.e("11006"),
                                      s.e("40719"),
                                      s.e("44384"),
                                      s.e("41577"),
                                      s.e("93514"),
                                      s.e("30320"),
                                      s.e("8289"),
                                      s.e("24839"),
                                      s.e("16614"),
                                      s.e("36732"),
                                      s.e("63661"),
                                      s.e("80309"),
                                      s.e("50815"),
                                      s.e("4693"),
                                      s.e("50878"),
                                      s.e("71696"),
                                      s.e("2912"),
                                      s.e("16336"),
                                      s.e("59539"),
                                      s.e("75518"),
                                      s.e("34041"),
                                      s.e("44204"),
                                      s.e("10849"),
                                      s.e("51416"),
                                      s.e("87751"),
                                      s.e("76375"),
                                      s.e("82372"),
                                      s.e("12633"),
                                      s.e("68880"),
                                      s.e("74577"),
                                      s.e("44613"),
                                      s.e("6643"),
                                      s.e("70369"),
                                      s.e("12932"),
                                      s.e("86380"),
                                      s.e("52564"),
                                      s.e("11868"),
                                      s.e("64633"),
                                      s.e("17665"),
                                      s.e("8872"),
                                      s.e("68006"),
                                      s.e("61661"),
                                      s.e("7364"),
                                      s.e("26736"),
                                      s.e("58201"),
                                      s.e("49279"),
                                      s.e("42977"),
                                      s.e("6712"),
                                      s.e("5990"),
                                      s.e("84059"),
                                      s.e("46864"),
                                      s.e("77388"),
                                      s.e("16633"),
                                      s.e("16058"),
                                      s.e("47813"),
                                      s.e("36810"),
                                      s.e("85244"),
                                      s.e("64248"),
                                      s.e("1491"),
                                      s.e("32394"),
                                      s.e("26729"),
                                      s.e("840"),
                                      s.e("16907"),
                                      s.e("71455"),
                                      s.e("35422"),
                                      s.e("2043"),
                                      s.e("14148"),
                                      s.e("57836"),
                                      s.e("39367"),
                                      s.e("9473"),
                                      s.e("35186"),
                                      s.e("66225"),
                                      s.e("77573"),
                                      s.e("76084"),
                                      s.e("58865"),
                                      s.e("22944"),
                                      s.e("33365"),
                                      s.e("89969"),
                                      s.e("51695"),
                                      s.e("65126"),
                                      s.e("50175"),
                                      s.e("78071"),
                                      s.e("41724"),
                                      s.e("86744"),
                                      s.e("3311"),
                                      s.e("22084"),
                                      s.e("57801"),
                                      s.e("79183"),
                                      s.e("51628"),
                                      s.e("32911"),
                                      s.e("84868"),
                                      s.e("6919"),
                                      s.e("37363"),
                                      s.e("9466"),
                                      s.e("84949"),
                                      s.e("71334"),
                                      s.e("10940"),
                                      s.e("77015"),
                                      s.e("61355"),
                                      s.e("97101"),
                                      s.e("45446"),
                                      s.e("41117"),
                                      s.e("33958"),
                                      s.e("84411"),
                                      s.e("15426"),
                                      s.e("54377"),
                                      s.e("10436"),
                                      s.e("19353"),
                                      s.e("73523"),
                                      s.e("65485"),
                                      s.e("69184"),
                                      s.e("71436"),
                                      s.e("66270"),
                                      s.e("71716"),
                                      s.e("27184"),
                                      s.e("66238"),
                                      s.e("78771"),
                                      s.e("17640"),
                                      s.e("7266"),
                                      s.e("38413"),
                                      s.e("11152"),
                                      s.e("74756"),
                                      s.e("97865"),
                                      s.e("12030"),
                                      s.e("75370"),
                                      s.e("68463"),
                                      s.e("37842"),
                                      s.e("67962"),
                                      s.e("39754"),
                                      s.e("34689"),
                                      s.e("49996"),
                                      s.e("98515"),
                                      s.e("45522"),
                                      s.e("11411"),
                                      s.e("8473"),
                                      s.e("79479"),
                                      s.e("20939"),
                                      s.e("23443"),
                                      s.e("47336"),
                                      s.e("48058"),
                                      s.e("35837"),
                                      s.e("89088"),
                                      s.e("48902"),
                                      s.e("38119"),
                                      s.e("45914"),
                                      s.e("22843"),
                                      s.e("32577"),
                                      s.e("2423"),
                                      s.e("76487"),
                                      s.e("93247"),
                                      s.e("43440"),
                                      s.e("97867"),
                                      s.e("54702"),
                                      s.e("46195"),
                                      s.e("82130"),
                                      s.e("91680"),
                                      s.e("57036"),
                                      s.e("57174"),
                                      s.e("86847"),
                                      s.e("48226"),
                                      s.e("207"),
                                      s.e("24199"),
                                      s.e("54048"),
                                      s.e("88941"),
                                      s.e("61379"),
                                      s.e("25693"),
                                      s.e("32606"),
                                      s.e("28154"),
                                      s.e("4369"),
                                      s.e("11523"),
                                      s.e("4361"),
                                      s.e("77473"),
                                      s.e("31549"),
                                      s.e("23353"),
                                      s.e("18943"),
                                      s.e("7167"),
                                      s.e("56048"),
                                      s.e("25279"),
                                      s.e("39810"),
                                      s.e("87306"),
                                      s.e("57598"),
                                      s.e("92789"),
                                      s.e("37687"),
                                      s.e("41043"),
                                      s.e("26780"),
                                      s.e("44265"),
                                      s.e("95569"),
                                      s.e("84103"),
                                      s.e("78179"),
                                      s.e("65030"),
                                      s.e("63095"),
                                      s.e("70653"),
                                      s.e("52266"),
                                      s.e("53039"),
                                      s.e("76640"),
                                      s.e("92583"),
                                      s.e("64615"),
                                      s.e("31825"),
                                      s.e("36320"),
                                      s.e("97526"),
                                      s.e("79525"),
                                      s.e("82069"),
                                      s.e("75134"),
                                      s.e("1462"),
                                      s.e("99666"),
                                      s.e("55184"),
                                      s.e("74926"),
                                      s.e("28866"),
                                      s.e("50015"),
                                      s.e("72442"),
                                      s.e("54282"),
                                      s.e("21574"),
                                      s.e("90889"),
                                      s.e("62931"),
                                      s.e("59880"),
                                      s.e("14805"),
                                      s.e("73547"),
                                      s.e("24761"),
                                      s.e("99593"),
                                      s.e("45587"),
                                      s.e("83057"),
                                      s.e("50997"),
                                      s.e("36845"),
                                      s.e("2773"),
                                      s.e("27582"),
                                      s.e("18573"),
                                      s.e("29177"),
                                      s.e("61935"),
                                      s.e("88990"),
                                      s.e("21856"),
                                      s.e("58038"),
                                      s.e("24622"),
                                      s.e("32551"),
                                      s.e("62680"),
                                      s.e("40218"),
                                      s.e("43426"),
                                      s.e("96443"),
                                      s.e("65743"),
                                      s.e("88559"),
                                      s.e("21825"),
                                      s.e("60177"),
                                      s.e("39665"),
                                      s.e("75676"),
                                      s.e("23532"),
                                      s.e("43549"),
                                      s.e("89790"),
                                      s.e("86949"),
                                      s.e("33902"),
                                      s.e("53614"),
                                      s.e("52574"),
                                      s.e("18401"),
                                      s.e("31145"),
                                      s.e("27773"),
                                      s.e("63618"),
                                      s.e("99999"),
                                      s.e("53374"),
                                      s.e("93158"),
                                      s.e("56313"),
                                      s.e("31445"),
                                      s.e("71577"),
                                      s.e("52073"),
                                      s.e("34691"),
                                      s.e("92731"),
                                      s.e("28152"),
                                      s.e("36126"),
                                      s.e("7962"),
                                      s.e("64325"),
                                      s.e("1555"),
                                      s.e("66901"),
                                      s.e("40716"),
                                  ]).then(s.bind(s, 629959));
                                  return (s) =>
                                      (0, n.jsx)(e, {
                                          ...s,
                                          onLearnMore: t,
                                          analyticsSource: { ...b.location, object: V.ZSU.BUTTON_CTA },
                                      });
                              });
                          },
                          onAddBackgroundImage: function (e, t) {
                              let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                              return new Promise(async (n) => {
                                  try {
                                      let n = await (0, u.F9)(e, R.yZ.BACKGROUND);
                                      T(n), (0, x.D1)(n, t.type === et.a.MP4, s), E(null);
                                  } catch (e) {
                                      E(e.message);
                                  }
                                  n();
                              });
                          },
                      }),
                  }),
              })
            : null
    );
}
