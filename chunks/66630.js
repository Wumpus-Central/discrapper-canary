n.d(t, { default: () => M }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(793030),
    u = n(442837),
    s = n(199849),
    c = n(755721),
    d = n(481060),
    m = n(596454),
    f = n(393238),
    p = n(493773),
    O = n(100527),
    g = n(906732),
    b = n(318766),
    h = n(907040),
    S = n(594174),
    T = n(626135),
    v = n(644540),
    j = n(368326),
    P = n(720449),
    _ = n(684269),
    x = n(397416),
    w = n(745579),
    y = n(676035),
    C = n(926563),
    D = n(875425),
    Z = n(981631),
    A = n(185923),
    N = n(388032),
    R = n(343190);
let E = "CLEAR_AFTER";
function M(e) {
    var t, n;
    let { transitionState: l, onClose: M, sourceAnalyticsLocations: U = [], prompt: F = null } = e,
        k = (0, j.p)({ location: "CustomStatusModalWithPreview" }),
        I = (0, v.P)({ location: "CustomStatusModalWithPreview" }),
        { analyticsLocations: Y } = (0, g.ZP)(U, O.Z.CUSTOM_STATUS_MODAL),
        B = (0, u.e7)([S.default], () => {
            var e;
            return null != (e = S.default.getCurrentUser()) ? e : null;
        }),
        H = (0, y.a)(),
        [L, z] = i.useState(null != (t = null == H ? void 0 : H.state) ? t : ""),
        [V, W] = i.useState(null != (n = null == H ? void 0 : H.emoji) ? n : null),
        [q, G] = i.useState((0, _.Z)()),
        J = i.useRef(null),
        K = i.useRef(null),
        Q = i.useRef(null),
        X = k && null != F ? F.label() : N.intl.string(N.t.xod367),
        [$, ee] = i.useState(X),
        { ref: et, width: en } = (0, f.ZP)(X);
    i.useEffect(() => {
        let e = Q.current;
        if (null == en || null == e) return;
        let t = en - 78;
        e.textContent = X;
        let n = e.getBoundingClientRect().width;
        if (n <= t) ee(X);
        else {
            let e = n / X.length,
                r = Math.floor((t - 3 * e) / e);
            ee("".concat(X.substring(0, r)).concat("..."));
        }
    }, [en, X]),
        i.useEffect(() => {
            T.default.track(Z.rMx.OPEN_MODAL, {
                type: O.Z.CUSTOM_STATUS_MODAL,
                location_stack: Y,
            });
        }, [Y]),
        (0, p.ZP)(() => {
            var e, t;
            null == (e = J.current) || e.focus(), null == (t = J.current) || t.setSelection(L.length, L.length);
        });
    let er = () => {
            q !== E &&
                ((0, P.Z)({
                    text: L,
                    emojiInfo: V,
                    clearAfter: q,
                    prompt: F,
                    analyticsLocations: Y,
                }),
                M());
        },
        ei = k ? N.intl.string(N.t.rp0ahn) : N.intl.string(N.t.UcdRn2),
        el = "custom-status-input";
    return (0, r.jsxs)(o.Modal, {
        title: N.intl.string(N.t.Zx4jzN),
        actionBarInput: (0, r.jsx)("div", {
            className: R.clearAfterSelectContainer,
            children: (0, r.jsx)(s.y6, {
                maxVisibleItems: D.wS.length + 1,
                value: q,
                options: I
                    ? [
                          {
                              value: E,
                              key: E,
                              label: N.intl.string(N.t.E45wvP),
                              disabled: !0,
                          },
                          ...D.wS.map((e) => ({
                              value: e,
                              key: e,
                              label: (0, x.Z)(e, !0),
                          })),
                      ]
                    : D.wS.map((e) => ({
                          value: e,
                          key: e,
                          label: (0, x.Z)(e),
                      })),
                onChange: (e) => G(e),
                optionClassName: R.clearAfterSelectOption,
                renderOptionLabel: (e) => {
                    let { value: t, label: n, disabled: i } = e;
                    return (0, r.jsx)("span", {
                        className: a()(R.clearAfterSelectOptionLabel, i ? R.disabled : void 0),
                        children: t === E ? n : (0, w.Z)(t, I),
                    });
                },
                variant: "text-only",
                popoutWidth: "auto",
                popoutPosition: "right",
            }),
        }),
        onClose: async () => {
            await M();
        },
        transitionState: l,
        actions: [
            {
                text: N.intl.string(N.t["R3BPH+"]),
                variant: "primary",
                onClick: er,
            },
        ],
        children: [
            null != B &&
                (0, r.jsx)("div", {
                    className: R.profilePreview,
                    children: (0, r.jsx)(C.Z, {
                        user: B,
                        previewText: L,
                        previewEmoji: V,
                        placeHolderText: X,
                        transitionState: l,
                    }),
                }),
            (0, r.jsxs)("div", {
                className: R.formGroup,
                children: [
                    (0, r.jsx)(d.Text, {
                        tag: "label",
                        htmlFor: el,
                        variant: "heading-md/semibold",
                        className: R.customStatusInputTitle,
                        children: ei,
                    }),
                    (0, r.jsxs)("div", {
                        className: R.inputContainer,
                        ref: et,
                        children: [
                            (0, r.jsx)("span", {
                                ref: Q,
                                className: R.hiddenPlaceholder,
                                "aria-hidden": "true",
                            }),
                            (0, r.jsx)("div", {
                                className: R.emojiButtonContainer,
                                children: (0, r.jsx)(d.yRy, {
                                    targetElementRef: K,
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, r.jsx)(h.Z, {
                                            closePopout: t,
                                            onSelectEmoji: (e) => {
                                                var n;
                                                let { emoji: r, willClose: i } = e;
                                                null != (n = r) &&
                                                    W(
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
                                            pickerIntention: A.Hz.STATUS,
                                            onNavigateAway: M,
                                        });
                                    },
                                    position: "left",
                                    animation: d.yRy.Animation.NONE,
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
                                                    className: R.emojiButton,
                                                    spriteSize: 24,
                                                    tabIndex: 0,
                                                    renderButtonContents:
                                                        null == V
                                                            ? null
                                                            : () =>
                                                                  (0, r.jsx)(m.Z, {
                                                                      className: R.emoji,
                                                                      emojiId: V.id,
                                                                      emojiName: V.name,
                                                                      animated: !!V.animated,
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
                                                      Object.defineProperty(
                                                          n,
                                                          e,
                                                          Object.getOwnPropertyDescriptor(i, e),
                                                      );
                                                  }),
                                            n),
                                        );
                                    },
                                }),
                            }),
                            (0, r.jsx)(c.iS, {
                                autosize: !0,
                                value: L,
                                maxLength: D.s0,
                                rows: 1,
                                showRemainingCharacterCount: !1,
                                placeholder: $,
                                onChange: (e) => {
                                    z(e);
                                },
                                onKeyDown: (e) => {
                                    "Enter" === e.key && er();
                                },
                                className: R.input,
                                inputRef: J,
                                id: el,
                            }),
                            (L.length > 0 || null != V) &&
                                (0, r.jsx)(d.P3F, {
                                    "aria-label": N.intl.string(N.t.wfYTHe),
                                    className: R.clearButton,
                                    onClick: () => {
                                        z(""), W(null);
                                    },
                                    children: (0, r.jsx)(d.k$p, {
                                        size: "md",
                                        color: "currentColor",
                                        className: R.clearIcon,
                                    }),
                                }),
                        ],
                    }),
                    (0, r.jsx)(d.nn4, { children: "".concat(N.intl.string(N.t.EVV6uZ), ": ").concat(X) }),
                ],
            }),
        ],
    });
}
