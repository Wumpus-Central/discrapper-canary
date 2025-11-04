n.d(t, { l: () => z }), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    l = n.n(o),
    a = n(358458),
    s = n(442837),
    c = n(481060),
    u = n(493773),
    d = n(347469),
    p = n(100527),
    m = n(906732),
    f = n(659580),
    b = n(795318),
    v = n(728285),
    g = n(670863),
    y = n(53691),
    j = n(457165),
    O = n(131951),
    h = n(594174),
    x = n(626135),
    E = n(111361),
    P = n(74538),
    _ = n(743498),
    w = n(967021),
    C = n(709706),
    S = n(378441),
    I = n(358820),
    N = n(448697),
    T = n(946196),
    D = n(365831),
    k = n(639539),
    Z = n(627325),
    M = n(981631),
    A = n(354459),
    L = n(474936),
    R = n(65154),
    V = n(312357),
    F = n(388032),
    U = n(640292);
function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function z(e) {
    let { onSettingsButtonClick: t, wide: n, showOutputDevices: o = !1, showSearchBar: z = !0 } = e,
        [B, G] = i.useState(""),
        { analyticsLocations: W, newestAnalyticsLocation: q } = (0, m.ZP)(p.Z.VOICE_FILTER_POPOUT),
        K = i.useRef(null),
        X = (0, d.Z)({
            minDimension: 400,
            maxDimension: 600,
            resizableDomNodeRef: K,
            onElementResize: (e, t) => {},
            onElementResizeEnd: (e) => {},
            orientation: d.y.VERTICAL_TOP,
        });
    (0, F.useSyncMessages)(V.messagesLoader);
    let Q = (0, s.e7)([h.default], () => (0, E.I5)(h.default.getCurrentUser())),
        J = (0, s.e7)([C.Z], () => C.Z.getCatalogUpdateTime()),
        [$, ee] = i.useState(!1),
        [et, en] = i.useState(!1),
        { activeVoice: er } = (0, S.o)(),
        ei = (0, w.HM)({
            location: W[0],
            autoTrackExposure: !0,
        }),
        eo = (0, c.q_F)({
            transform: $ ? "translateY(-8px) scale(".concat(0.96, ")") : "translateY(0px) scale(1)",
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40,
            },
        }),
        el = (0, c.q_F)({
            y: 50 * !$,
            config: {
                duration: 150,
                mass: 1,
                stiffness: 711.1,
                damping: 40,
            },
        }),
        ea = (0, c.q_F)({
            to: {
                bottom: "" !== B ? "translateY(75px)" : "translateY(50px)",
                opacity: +("" === B),
            },
            config: {
                tension: 280,
                friction: 24,
                duration: 200,
            },
        }),
        es = i.useRef(null);
    (0, u.ZP)(() => {
        (0, I.r5)(),
            ei && (0, _.jG)(),
            x.default.track(M.rMx.VOICE_FILTER_PICKER_OPENED, { active_voice_filter_id: null != er ? er : null });
    });
    let ec = i.useCallback(() => G(""), [G]),
        eu = i.useRef(null),
        ed = (0, v.bp)() !== M.IlC.OVERLAY;
    return (0, r.jsx)(m.Gt, {
        value: W,
        children: (0, r.jsxs)("div", {
            ref: K,
            className: l()(U.voiceFiltersPopout, {
                [U.wide]: n,
                [U.notResizable]: !ed,
            }),
            style: { height: 500 },
            children: [
                ed &&
                    (0, r.jsx)("div", {
                        className: U.resizeHandle,
                        onMouseDown: X,
                        children: (0, r.jsx)("div", { className: U.resizePill }),
                    }),
                z &&
                    (0, r.jsx)(c.E1j, {
                        placeholder: F.intl.string(F.t.hHCZJQ),
                        autoFocus: !0,
                        onChange: G,
                        query: B,
                        onClear: ec,
                    }),
                (0, r.jsx)(Z.w, {
                    query: B,
                    columns: n ? 5 : 4,
                    handleScroll: (e) => {
                        let t = es.current;
                        if (null == t || (ee(e > 0), et)) return;
                        let { height: n, totalHeight: r } = t.getListDimensions();
                        e < r - n || (en(!0), x.default.track(M.rMx.VOICE_FILTER_PICKER_SCROLLED));
                    },
                    voiceListRef: es,
                }),
                !Q &&
                    (0, r.jsxs)(a.animated.div, {
                        style: H(Y({}, ea), { display: ea.opacity.to((e) => (0 === e ? "none" : "block")) }),
                        className: U.upsellCountdownContainer,
                        children: [
                            null != J &&
                                (0, r.jsx)(a.animated.div, {
                                    style: eo,
                                    children: (0, r.jsx)(k.J, {
                                        catalogUpdateTime: J,
                                        isScrolled: $,
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                className: U.upsellContainer,
                                children: (0, r.jsx)(a.animated.div, {
                                    style: {
                                        y: el.y,
                                        opacity: el.y.to((e) => +(50 !== e)),
                                    },
                                    children: (0, r.jsx)(y.p, {
                                        showUpsell: !0,
                                        text: F.intl.format(F.t.XMDm8z, {
                                            nitroTierName: (0, P.Px)(L.PremiumTypes.TIER_2),
                                            onClick: () => (0, j.i)(),
                                        }),
                                        button: F.intl.string(F.t.cRCCJ3),
                                        buttonAnalyticsObject: { section: M.jXE.VOICE_FILTERS_FLOATING_UPSELL },
                                        showShadow: !1,
                                        position: "inline",
                                        className: U.upsell,
                                        buttonSize: "sm",
                                        useLockIcon: !0,
                                        buttonStyles: U.subscribeButton,
                                    }),
                                }),
                            }),
                        ],
                    }),
                (0, r.jsx)(T.l, {}),
                (0, r.jsx)(N.R, {}),
                (0, r.jsx)(D.y, {}),
                (0, r.jsxs)("div", {
                    className: l()(U.voiceFiltersFooter, { [U.hasActiveVoice]: null != er }),
                    children: [
                        (0, r.jsx)(g.j, {
                            deviceType: R.h7.AUDIO_INPUT,
                            location: "VoiceFiltersPopout",
                            onOpen: () => {
                                var e;
                                x.default.track(M.rMx.VOICE_FILTER_MIC_SELECTOR_OPENED, {
                                    active_voice_filter_id: null != (e = O.Z.getActiveVoiceFilter()) ? e : null,
                                });
                            },
                            popoutPosition: "top",
                        }),
                        o &&
                            (0, r.jsx)(g.j, {
                                deviceType: R.h7.AUDIO_OUTPUT,
                                location: "VoiceFiltersPopout",
                                popoutPosition: "top",
                            }),
                        (0, r.jsx)(c.yRy, {
                            targetElementRef: eu,
                            position: "top",
                            align: "right",
                            renderPopout: () =>
                                (0, r.jsx)(f.default, {
                                    renderInputModes: !0,
                                    renderInputVolume: !0,
                                    renderInputDevices: !0,
                                    renderOutputDevices: o,
                                    renderOutputVolume: o,
                                    onClose: t,
                                    onInteraction: (0, b.u)("AudioDeviceMenu", q, { entrypoint: A.A5.THREE_DOT }),
                                    minimal: !0,
                                }),
                            children: (e) =>
                                (0, r.jsx)(
                                    c.hU,
                                    H(Y({ variant: "secondary" }, e), {
                                        buttonRef: eu,
                                        icon: c.Huf,
                                        onClick: (t) => {
                                            var n;
                                            x.default.track(M.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, {
                                                active_voice_filter_id: null != er ? er : null,
                                            }),
                                                null == (n = e.onClick) || n.call(e, t);
                                        },
                                        "aria-label": F.intl.string(F.t["ClGM/G"]),
                                    }),
                                ),
                        }),
                    ],
                }),
            ],
        }),
    });
}
