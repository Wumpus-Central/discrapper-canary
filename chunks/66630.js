n.d(t, { default: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(793030),
    u = n(442837),
    s = n(755721),
    c = n(481060),
    d = n(596454),
    m = n(393238),
    f = n(493773),
    p = n(100527),
    O = n(906732),
    g = n(318766),
    b = n(907040),
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
    Z = n(185923),
    A = n(388032),
    N = n(343190);
let R = "CLEAR_AFTER";
function E(e) {
    var t, n;
    let { transitionState: l, onClose: E, sourceAnalyticsLocations: M = [], prompt: U = null } = e,
        F = (0, v.p)({ location: "CustomStatusModalWithPreview" }),
        k = (0, T.P)({ location: "CustomStatusModalWithPreview" }),
        { analyticsLocations: I } = (0, O.ZP)(M, p.Z.CUSTOM_STATUS_MODAL),
        Y = (0, u.e7)([h.default], () => {
            var e;
            return null != (e = h.default.getCurrentUser()) ? e : null;
        }),
        B = (0, w.a)(),
        [H, L] = i.useState(null != (t = null == B ? void 0 : B.state) ? t : ""),
        [z, q] = i.useState(null != (n = null == B ? void 0 : B.emoji) ? n : null),
        [V, W] = i.useState((0, P.Z)()),
        G = i.useRef(null),
        J = i.useRef(null),
        K = i.useRef(null),
        Q = F && null != U ? U.label() : A.intl.string(A.t.xod367),
        [X, $] = i.useState(Q),
        { ref: ee, width: et } = (0, m.ZP)(Q);
    i.useEffect(() => {
        let e = K.current;
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
                location_stack: I,
            });
        }, [I]),
        (0, f.ZP)(() => {
            var e, t;
            null == (e = G.current) || e.focus(), null == (t = G.current) || t.setSelection(H.length, H.length);
        });
    let en = () => {
            V !== R &&
                ((0, j.Z)({
                    text: H,
                    emojiInfo: z,
                    clearAfter: V,
                    prompt: U,
                    analyticsLocations: I,
                }),
                E());
        },
        er = F ? A.intl.string(A.t.rp0ahn) : A.intl.string(A.t.UcdRn2),
        ei = "custom-status-input";
    return (0, r.jsxs)(o.Modal, {
        title: A.intl.string(A.t.Zx4jzN),
        actionBarInput: (0, r.jsx)("div", {
            className: N.clearAfterSelectContainer,
            children: (0, r.jsx)(c.q4e, {
                maxVisibleItems: C.wS.length + 1,
                value: V,
                options: k
                    ? [
                          {
                              value: R,
                              key: R,
                              label: A.intl.string(A.t.E45wvP),
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
                onChange: (e) => W(e),
                optionClassName: N.clearAfterSelectOption,
                renderOptionLabel: (e) => {
                    let { value: t, label: n, disabled: i } = e;
                    return (0, r.jsx)("span", {
                        className: a()(N.clearAfterSelectOptionLabel, i ? N.disabled : void 0),
                        children: t === R ? n : (0, x.Z)(t, k),
                    });
                },
                variant: "text-only",
                popoutWidth: "auto",
                popoutPosition: "right",
            }),
        }),
        onClose: async () => {
            await E();
        },
        transitionState: l,
        actions: [
            {
                text: A.intl.string(A.t["R3BPH+"]),
                variant: "primary",
                onClick: en,
            },
        ],
        children: [
            null != Y &&
                (0, r.jsx)("div", {
                    className: N.profilePreview,
                    children: (0, r.jsx)(y.Z, {
                        user: Y,
                        previewText: H,
                        previewEmoji: z,
                        placeHolderText: Q,
                        transitionState: l,
                    }),
                }),
            (0, r.jsxs)("div", {
                className: N.formGroup,
                children: [
                    (0, r.jsx)(c.Text, {
                        tag: "label",
                        htmlFor: ei,
                        variant: "heading-md/semibold",
                        className: N.customStatusInputTitle,
                        children: er,
                    }),
                    (0, r.jsxs)("div", {
                        className: N.inputContainer,
                        ref: ee,
                        children: [
                            (0, r.jsx)("span", {
                                ref: K,
                                className: N.hiddenPlaceholder,
                                "aria-hidden": "true",
                            }),
                            (0, r.jsx)("div", {
                                className: N.emojiButtonContainer,
                                children: (0, r.jsx)(c.yRy, {
                                    targetElementRef: J,
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, r.jsx)(b.Z, {
                                            closePopout: t,
                                            onSelectEmoji: (e) => {
                                                var n;
                                                let { emoji: r, willClose: i } = e;
                                                null != (n = r) &&
                                                    q(
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
                                            pickerIntention: Z.Hz.STATUS,
                                            onNavigateAway: E,
                                        });
                                    },
                                    position: "left",
                                    animation: c.yRy.Animation.NONE,
                                    align: "top",
                                    children: (e, t) => {
                                        var n, i;
                                        let { isShown: l } = t;
                                        return (0, r.jsx)(
                                            g.Z,
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
                                                    ref: J,
                                                    active: l,
                                                    className: N.emojiButton,
                                                    spriteSize: 24,
                                                    tabIndex: 0,
                                                    renderButtonContents:
                                                        null == z
                                                            ? null
                                                            : () =>
                                                                  (0, r.jsx)(d.Z, {
                                                                      className: N.emoji,
                                                                      emojiId: z.id,
                                                                      emojiName: z.name,
                                                                      animated: !!z.animated,
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
                            (0, r.jsx)(s.iS, {
                                autosize: !0,
                                value: H,
                                maxLength: C.s0,
                                rows: 1,
                                showRemainingCharacterCount: !1,
                                placeholder: X,
                                onChange: (e) => {
                                    L(e);
                                },
                                onKeyDown: (e) => {
                                    "Enter" === e.key && en();
                                },
                                className: N.input,
                                inputRef: G,
                                id: ei,
                            }),
                            (H.length > 0 || null != z) &&
                                (0, r.jsx)(c.P3F, {
                                    "aria-label": A.intl.string(A.t.wfYTHe),
                                    className: N.clearButton,
                                    onClick: () => {
                                        L(""), q(null);
                                    },
                                    children: (0, r.jsx)(c.k$p, {
                                        size: "md",
                                        color: "currentColor",
                                        className: N.clearIcon,
                                    }),
                                }),
                        ],
                    }),
                    (0, r.jsx)(c.nn4, { children: "".concat(A.intl.string(A.t.EVV6uZ), ": ").concat(Q) }),
                ],
            }),
        ],
    });
}
