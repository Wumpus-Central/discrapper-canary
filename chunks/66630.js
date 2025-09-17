n.d(e, { Z: () => R }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(120356),
    l = n.n(i),
    o = n(442837),
    s = n(82659),
    u = n(755721),
    c = n(481060),
    d = n(596454),
    m = n(393238),
    f = n(493773),
    p = n(100527),
    h = n(906732),
    b = n(318766),
    S = n(907040),
    g = n(594174),
    O = n(626135),
    j = n(644540),
    v = n(368326),
    x = n(720449),
    y = n(684269),
    _ = n(397416),
    C = n(745579),
    P = n(676035),
    T = n(926563),
    w = n(875425),
    N = n(981631),
    D = n(185923),
    E = n(388032),
    Z = n(343190);
let A = "CLEAR_AFTER";
function R(t) {
    var e, n;
    let {
            transitionState: i,
            onClose: R,
            sourceAnalyticsContext: k,
            sourceAnalyticsLocations: I = [],
            prompt: B = null,
        } = t,
        M = (0, v.p)({ location: "CustomStatusModalWithPreview" }),
        U = (0, j.P)({ location: "CustomStatusModalWithPreview" }),
        { analyticsLocations: F } = (0, h.ZP)(I, p.Z.CUSTOM_STATUS_MODAL),
        L = (0, o.e7)([g.default], () => {
            var t;
            return null != (t = g.default.getCurrentUser()) ? t : null;
        }),
        Y = (0, P.a)(),
        [H, z] = a.useState(null != (e = null == Y ? void 0 : Y.state) ? e : ""),
        [W, G] = a.useState(null != (n = null == Y ? void 0 : Y.emoji) ? n : null),
        [V, q] = a.useState((0, y.Z)()),
        K = a.useRef(null),
        X = a.useRef(null),
        J = a.useRef(null),
        $ = M && null != B ? B.label() : E.intl.string(E.t["xod36+"]),
        [Q, tt] = a.useState($),
        { ref: te, width: tn } = (0, m.ZP)($);
    a.useEffect(() => {
        let t = J.current;
        if (null == tn || null == t) return;
        let e = tn - 78;
        t.textContent = $;
        let n = t.getBoundingClientRect().width;
        if (n <= e) tt($);
        else {
            let t = n / $.length,
                r = Math.floor((e - 3 * t) / t);
            tt("".concat($.substring(0, r)).concat("..."));
        }
    }, [tn, $]),
        a.useEffect(() => {
            O.default.track(N.rMx.OPEN_MODAL, {
                type: p.Z.CUSTOM_STATUS_MODAL,
                location_stack: F,
            });
        }, [F]),
        (0, f.ZP)(() => {
            var t, e;
            null == (t = K.current) || t.focus(), null == (e = K.current) || e.setSelection(H.length, H.length);
        });
    let tr = () => {
            V !== A &&
                ((0, x.Z)({
                    text: H,
                    emojiInfo: W,
                    clearAfter: V,
                    prompt: B,
                    analyticsLocations: F,
                    analyticsContext: k,
                }),
                R());
        },
        ta = M ? E.intl.string(E.t.rp0aho) : E.intl.string(E.t.UcdRn5),
        ti = "custom-status-placeholder-text";
    return (0, r.jsxs)(s.Modal, {
        title: E.intl.string(E.t.Zx4jzM),
        actionBarInput: (0, r.jsx)("div", {
            className: Z.clearAfterSelectContainer,
            children: (0, r.jsx)(c.q4e, {
                maxVisibleItems: w.wS.length + 1,
                value: V,
                options: U
                    ? [
                          {
                              value: A,
                              key: A,
                              label: E.intl.string(E.t.E45wvL),
                              disabled: !0,
                          },
                          ...w.wS.map((t) => ({
                              value: t,
                              key: t,
                              label: (0, _.Z)(t, !0),
                          })),
                      ]
                    : w.wS.map((t) => ({
                          value: t,
                          key: t,
                          label: (0, _.Z)(t),
                      })),
                onChange: (t) => q(t),
                optionClassName: Z.clearAfterSelectOption,
                renderOptionLabel: (t) => {
                    let { value: e, label: n, disabled: a } = t;
                    return (0, r.jsx)("span", {
                        className: l()(Z.clearAfterSelectOptionLabel, a ? Z.disabled : void 0),
                        children: e === A ? n : (0, C.Z)(e, U),
                    });
                },
                variant: "text-only",
                popoutWidth: "auto",
                popoutPosition: "right",
            }),
        }),
        onClose: async () => {
            await R();
        },
        transitionState: i,
        actions: [
            {
                text: E.intl.string(E.t.R3BPHx),
                variant: "primary",
                onClick: tr,
            },
        ],
        children: [
            null != L &&
                (0, r.jsx)("div", {
                    className: Z.profilePreview,
                    children: (0, r.jsx)(T.Z, {
                        user: L,
                        previewText: H,
                        previewEmoji: W,
                        placeHolderText: $,
                        transitionState: i,
                    }),
                }),
            (0, r.jsx)(c.hjN, {
                className: Z.formGroup,
                titleClassName: Z.customStatusInputTitle,
                title: ta,
                children: (0, r.jsxs)("div", {
                    className: Z.inputContainer,
                    ref: te,
                    children: [
                        (0, r.jsx)("span", {
                            ref: J,
                            className: Z.hiddenPlaceholder,
                            "aria-hidden": "true",
                        }),
                        (0, r.jsx)("div", {
                            className: Z.emojiButtonContainer,
                            children: (0, r.jsx)(c.yRy, {
                                targetElementRef: X,
                                renderPopout: (t) => {
                                    let { closePopout: e } = t;
                                    return (0, r.jsx)(S.Z, {
                                        closePopout: e,
                                        onSelectEmoji: (t) => {
                                            var n;
                                            let { emoji: r, willClose: a } = t;
                                            null != (n = r) &&
                                                G(
                                                    null != n.id
                                                        ? {
                                                              id: n.id,
                                                              name: n.name,
                                                              animated: n.animated,
                                                          }
                                                        : {
                                                              id: null,
                                                              name: n.optionallyDiverseSequence,
                                                              animated: !1,
                                                          },
                                                ),
                                                a && e();
                                        },
                                        pickerIntention: D.Hz.STATUS,
                                        onNavigateAway: R,
                                    });
                                },
                                position: "left",
                                animation: c.yRy.Animation.NONE,
                                align: "top",
                                children: (t, e) => {
                                    var n, a;
                                    let { isShown: i } = e;
                                    return (0, r.jsx)(
                                        b.Z,
                                        ((n = (function (t) {
                                            for (var e = 1; e < arguments.length; e++) {
                                                var n = null != arguments[e] ? arguments[e] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (r = r.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (t) {
                                                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                        }),
                                                    )),
                                                    r.forEach(function (e) {
                                                        var r;
                                                        (r = n[e]),
                                                            e in t
                                                                ? Object.defineProperty(t, e, {
                                                                      value: r,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (t[e] = r);
                                                    });
                                            }
                                            return t;
                                        })({}, t)),
                                        (a = a =
                                            {
                                                ref: X,
                                                active: i,
                                                className: Z.emojiButton,
                                                tabIndex: 0,
                                                renderButtonContents:
                                                    null == W
                                                        ? null
                                                        : () =>
                                                              (0, r.jsx)(d.Z, {
                                                                  className: Z.emoji,
                                                                  emojiId: W.id,
                                                                  emojiName: W.name,
                                                                  animated: !!W.animated,
                                                              }),
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                                            : (function (t, e) {
                                                  var n = Object.keys(t);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(t);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(a)).forEach(function (t) {
                                                  Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(a, t));
                                              }),
                                        n),
                                    );
                                },
                            }),
                        }),
                        (0, r.jsx)(u.iS, {
                            autosize: !0,
                            "aria-describedby": ti,
                            value: H,
                            maxLength: w.s0,
                            rows: 1,
                            showRemainingCharacterCount: !1,
                            placeholder: Q,
                            onChange: (t) => {
                                z(t);
                            },
                            onKeyDown: (t) => {
                                "Enter" === t.key && tr();
                            },
                            className: Z.input,
                            inputRef: K,
                        }),
                        (0, r.jsx)(c.nn4, {
                            id: ti,
                            children: "".concat(E.intl.string(E.t.EVV6ub), ": ").concat($),
                        }),
                        (H.length > 0 || null != W) &&
                            (0, r.jsx)("div", {
                                className: Z.clearButtonWrapper,
                                children: (0, r.jsx)(c.P3F, {
                                    focusProps: {
                                        offset: {
                                            top: 8,
                                            bottom: 8,
                                            left: -2,
                                            right: -2,
                                        },
                                    },
                                    "aria-label": E.intl.string(E.t.wfYTHR),
                                    className: Z.clearButton,
                                    onClick: () => {
                                        z(""), G(null);
                                    },
                                    children: (0, r.jsx)(c.k$p, {
                                        size: "md",
                                        color: "currentColor",
                                        className: Z.clearIcon,
                                    }),
                                }),
                            }),
                    ],
                }),
            }),
        ],
    });
}
