n.d(t, { default: () => R }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    u = n(82659),
    s = n(755721),
    c = n(481060),
    d = n(596454),
    m = n(393238),
    f = n(493773),
    p = n(100527),
    O = n(906732),
    b = n(318766),
    g = n(907040),
    h = n(594174),
    S = n(626135),
    T = n(644540),
    v = n(368326),
    j = n(720449),
    P = n(684269),
    _ = n(397416),
    x = n(745579),
    w = n(676035),
    y = n(926563),
    C = n(875425),
    D = n(981631),
    N = n(185923),
    A = n(388032),
    Z = n(343190);
let E = "CLEAR_AFTER";
function R(e) {
    var t, n;
    let { transitionState: l, onClose: R, sourceAnalyticsLocations: M = [], prompt: U = null } = e,
        F = (0, v.p)({ location: "CustomStatusModalWithPreview" }),
        k = (0, T.P)({ location: "CustomStatusModalWithPreview" }),
        { analyticsLocations: Y } = (0, O.ZP)(M, p.Z.CUSTOM_STATUS_MODAL),
        I = (0, o.e7)([h.default], () => {
            var e;
            return null != (e = h.default.getCurrentUser()) ? e : null;
        }),
        B = (0, w.a)(),
        [L, H] = i.useState(null != (t = null == B ? void 0 : B.state) ? t : ""),
        [W, z] = i.useState(null != (n = null == B ? void 0 : B.emoji) ? n : null),
        [G, q] = i.useState((0, P.Z)()),
        J = i.useRef(null),
        K = i.useRef(null),
        V = i.useRef(null),
        Q = F && null != U ? U.label() : A.intl.string(A.t["xod36+"]),
        [X, $] = i.useState(Q),
        { ref: ee, width: et } = (0, m.ZP)(Q);
    i.useEffect(() => {
        let e = V.current;
        if (null == et || null == e) return;
        let t = et - 78;
        e.textContent = Q;
        let n = e.getBoundingClientRect().width;
        if (n <= t) $(Q);
        else {
            let e = n / Q.length,
                r = Math.floor((t - 3 * e) / e);
            $("".concat(Q.substring(0, r)).concat("..."));
        }
    }, [et, Q]),
        i.useEffect(() => {
            S.default.track(D.rMx.OPEN_MODAL, {
                type: p.Z.CUSTOM_STATUS_MODAL,
                location_stack: Y,
            });
        }, [Y]),
        (0, f.ZP)(() => {
            var e, t;
            null == (e = J.current) || e.focus(), null == (t = J.current) || t.setSelection(L.length, L.length);
        });
    let en = () => {
            G !== E &&
                ((0, j.Z)({
                    text: L,
                    emojiInfo: W,
                    clearAfter: G,
                    prompt: U,
                    analyticsLocations: Y,
                }),
                R());
        },
        er = F ? A.intl.string(A.t.rp0aho) : A.intl.string(A.t.UcdRn5),
        ei = "custom-status-placeholder-text";
    return (0, r.jsxs)(u.Modal, {
        title: A.intl.string(A.t.Zx4jzM),
        actionBarInput: (0, r.jsx)("div", {
            className: Z.clearAfterSelectContainer,
            children: (0, r.jsx)(c.q4e, {
                maxVisibleItems: C.wS.length + 1,
                value: G,
                options: k
                    ? [
                          {
                              value: E,
                              key: E,
                              label: A.intl.string(A.t.E45wvL),
                              disabled: !0,
                          },
                          ...C.wS.map((e) => ({
                              value: e,
                              key: e,
                              label: (0, _.Z)(e, !0),
                          })),
                      ]
                    : C.wS.map((e) => ({
                          value: e,
                          key: e,
                          label: (0, _.Z)(e),
                      })),
                onChange: (e) => q(e),
                optionClassName: Z.clearAfterSelectOption,
                renderOptionLabel: (e) => {
                    let { value: t, label: n, disabled: i } = e;
                    return (0, r.jsx)("span", {
                        className: a()(Z.clearAfterSelectOptionLabel, i ? Z.disabled : void 0),
                        children: t === E ? n : (0, x.Z)(t, k),
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
        transitionState: l,
        actions: [
            {
                text: A.intl.string(A.t.R3BPHx),
                variant: "primary",
                onClick: en,
            },
        ],
        children: [
            null != I &&
                (0, r.jsx)("div", {
                    className: Z.profilePreview,
                    children: (0, r.jsx)(y.Z, {
                        user: I,
                        previewText: L,
                        previewEmoji: W,
                        placeHolderText: Q,
                        transitionState: l,
                    }),
                }),
            (0, r.jsx)(c.hjN, {
                className: Z.formGroup,
                titleClassName: Z.customStatusInputTitle,
                title: er,
                children: (0, r.jsxs)("div", {
                    className: Z.inputContainer,
                    ref: ee,
                    children: [
                        (0, r.jsx)("span", {
                            ref: V,
                            className: Z.hiddenPlaceholder,
                            "aria-hidden": "true",
                        }),
                        (0, r.jsx)("div", {
                            className: Z.emojiButtonContainer,
                            children: (0, r.jsx)(c.yRy, {
                                targetElementRef: K,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, r.jsx)(g.Z, {
                                        closePopout: t,
                                        onSelectEmoji: (e) => {
                                            var n;
                                            let { emoji: r, willClose: i } = e;
                                            null != (n = r) &&
                                                z(
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
                                                i && t();
                                        },
                                        pickerIntention: N.Hz.STATUS,
                                        onNavigateAway: R,
                                    });
                                },
                                position: "left",
                                animation: c.yRy.Animation.NONE,
                                align: "top",
                                children: (e, t) => {
                                    var n, i;
                                    let { isShown: l } = t;
                                    return (0, r.jsx)(
                                        b.Z,
                                        ((n = (function (e) {
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
                                        })({}, e)),
                                        (i = i =
                                            {
                                                ref: K,
                                                active: l,
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
                                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(i)).forEach(function (e) {
                                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                              }),
                                        n),
                                    );
                                },
                            }),
                        }),
                        (0, r.jsx)(s.iS, {
                            autosize: !0,
                            "aria-describedby": ei,
                            value: L,
                            maxLength: C.s0,
                            rows: 1,
                            showRemainingCharacterCount: !1,
                            placeholder: X,
                            onChange: (e) => {
                                H(e);
                            },
                            onKeyDown: (e) => {
                                "Enter" === e.key && en();
                            },
                            className: Z.input,
                            inputRef: J,
                        }),
                        (0, r.jsx)(c.nn4, {
                            id: ei,
                            children: "".concat(A.intl.string(A.t.EVV6ub), ": ").concat(Q),
                        }),
                        (L.length > 0 || null != W) &&
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
                                    "aria-label": A.intl.string(A.t.wfYTHR),
                                    className: Z.clearButton,
                                    onClick: () => {
                                        H(""), z(null);
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
