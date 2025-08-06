n.d(e, { Z: () => M }), n(388685);
var l = n(255367),
    a = n(73800),
    r = n(120356),
    i = n.n(r),
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
    j = n(626135),
    O = n(644540),
    v = n(359588),
    x = n(368326),
    C = n(720449),
    _ = n(684269),
    T = n(397416),
    y = n(745579),
    P = n(74340),
    w = n(166655),
    N = n(676035),
    E = n(346565),
    D = n(562577),
    I = n(926563),
    Z = n(875425),
    A = n(981631),
    R = n(185923),
    L = n(388032),
    k = n(782628);
let B = "CLEAR_AFTER";
function M(t) {
    var e, n;
    let {
            transitionState: r,
            onClose: M,
            sourceAnalyticsContext: U,
            sourceAnalyticsLocations: F = [],
            prompt: Y = null,
            showLabelSelectorNewTooltip: H = !1,
        } = t,
        W = (0, x.p)({ location: "CustomStatusModalWithPreview" }),
        z = (0, O.P)({ location: "CustomStatusModalWithPreview" }),
        V = (0, v.Z)({ location: "CustomStatusModalWithPreview" }),
        { analyticsLocations: G } = (0, h.ZP)(F, p.Z.CUSTOM_STATUS_MODAL),
        K = (0, o.e7)([g.default], () => {
            var t;
            return null != (t = g.default.getCurrentUser()) ? t : null;
        }),
        q = (0, N.a)(),
        [X, Q] = a.useState(null != (e = null == q ? void 0 : q.state) ? e : ""),
        [$, J] = a.useState(null != (n = null == q ? void 0 : q.emoji) ? n : null),
        [tt, te] = a.useState((0, _.Z)()),
        tn = a.useRef(null),
        tl = a.useRef(null),
        ta = a.useRef(null),
        [tr, ti] = a.useState(null != q && V ? (0, P.Z)(q) : null),
        [to, ts] = a.useState(H),
        [tu, tc] = a.useState(() => (W && null != Y ? Y.label() : L.intl.string(L.t["xod36+"]))),
        [td, tm] = a.useState(tu),
        { ref: tf, width: tp } = (0, m.ZP)(tu);
    a.useEffect(() => {
        let t = ta.current;
        if (null == tp || null == t) return;
        let e = tp - 78;
        t.textContent = tu;
        let n = t.getBoundingClientRect().width;
        if (n <= e) tm(tu);
        else {
            let t = n / tu.length,
                l = Math.floor((e - 3 * t) / t);
            tm("".concat(tu.substring(0, l)).concat("..."));
        }
    }, [tp, tu]),
        a.useEffect(() => {
            j.default.track(A.rMx.OPEN_MODAL, {
                type: p.Z.CUSTOM_STATUS_MODAL,
                location_stack: G,
            });
        }, [G]),
        (0, f.ZP)(() => {
            var t, e;
            null == (t = tn.current) || t.focus(), null == (e = tn.current) || e.setSelection(X.length, X.length);
        });
    let th = (t) => {
            null != t &&
                J(
                    null != t.id
                        ? {
                              id: t.id,
                              name: t.name,
                              animated: t.animated,
                          }
                        : {
                              id: null,
                              name: t.optionallyDiverseSequence,
                              animated: !1,
                          },
                );
        },
        tb = () => {
            tt !== B &&
                ((0, C.Z)({
                    text: X,
                    emojiInfo: $,
                    clearAfter: tt,
                    prompt: Y,
                    customStatusLabel: tr,
                    analyticsLocations: G,
                    analyticsContext: U,
                }),
                M());
        },
        tS = () =>
            null == $
                ? null
                : () =>
                      (0, l.jsx)(d.Z, {
                          className: k.emoji,
                          emojiId: $.id,
                          emojiName: $.name,
                          animated: !!$.animated,
                      }),
        tg = W ? L.intl.string(L.t.rp0aho) : L.intl.string(L.t.UcdRn5),
        tj = "custom-status-placeholder-text";
    return (0, l.jsxs)(s.Modal, {
        title: L.intl.string(L.t.Zx4jzM),
        actionBarInput: (0, l.jsx)("div", {
            className: k.clearAfterSelectContainer,
            children: (0, l.jsx)(c.q4e, {
                maxVisibleItems: Z.wS.length + 1,
                value: tt,
                options: z
                    ? [
                          {
                              value: B,
                              key: B,
                              label: L.intl.string(L.t.E45wvL),
                              disabled: !0,
                          },
                          ...Z.wS.map((t) => ({
                              value: t,
                              key: t,
                              label: (0, T.Z)(t, !0),
                          })),
                      ]
                    : Z.wS.map((t) => ({
                          value: t,
                          key: t,
                          label: (0, T.Z)(t),
                      })),
                onChange: (t) => te(t),
                optionClassName: k.clearAfterSelectOption,
                renderOptionLabel: (t) => {
                    let { value: e, label: n, disabled: a } = t;
                    return (0, l.jsx)("span", {
                        className: i()(k.clearAfterSelectOptionLabel, a ? k.disabled : void 0),
                        children: e === B ? n : (0, y.Z)(e, z),
                    });
                },
                look: c.qQH.CUSTOM,
                popoutWidth: "auto",
                popoutPosition: "right",
            }),
        }),
        onClose: async () => {
            await M();
        },
        transitionState: r,
        actions: [
            {
                text: L.intl.string(L.t.R3BPHx),
                variant: "primary",
                onClick: tb,
            },
        ],
        children: [
            null != K &&
                (0, l.jsx)("div", {
                    className: k.profilePreview,
                    children: (0, l.jsx)(I.Z, {
                        user: K,
                        previewText: X,
                        previewEmoji: $,
                        placeHolderText: tu,
                        transitionState: r,
                        label: tr,
                    }),
                }),
            (0, l.jsxs)(c.hjN, {
                className: k.formGroup,
                titleClassName: k.customStatusInputTitle,
                title: tg,
                children: [
                    V &&
                        (0, l.jsx)("div", {
                            className: k.labelSelectorContainer,
                            children: (0, l.jsx)(c.DY3, {
                                position: "right",
                                color: c.FGA.BRAND,
                                "aria-label": L.intl.string(L.t.y2b7CA),
                                shouldShow: to,
                                forceOpen: to && r === c.Dvm.ENTERED,
                                tooltipClassName: k.labelSelectorTooltip,
                                text: L.intl.string(L.t.y2b7CA),
                                children: (0, l.jsx)(D.Z, {
                                    currentValue: tr,
                                    onChange: (t) => {
                                        let e = t === tr ? null : t;
                                        j.default.track(A.rMx.CUSTOM_STATUS_LABEL_CLICKED, {
                                            previous_label: tr,
                                            new_label: e,
                                            location_stack: F,
                                        }),
                                            ti(e),
                                            ts(!1),
                                            null != e && tc((0, w.Z)(e));
                                    },
                                }),
                            }),
                        }),
                    (0, l.jsxs)("div", {
                        className: k.inputContainer,
                        ref: tf,
                        children: [
                            (0, l.jsx)("span", {
                                ref: ta,
                                className: k.hiddenPlaceholder,
                                "aria-hidden": "true",
                            }),
                            (0, l.jsx)("div", {
                                className: i()(k.emojiButtonContainer, null != tr && k.emojiButtonContainerWithLabel),
                                children: (0, l.jsx)(c.yRy, {
                                    targetElementRef: tl,
                                    renderPopout: (t) => {
                                        let { closePopout: e } = t;
                                        return (0, l.jsx)(S.Z, {
                                            closePopout: e,
                                            onSelectEmoji: (t) => {
                                                let { emoji: n, willClose: l } = t;
                                                th(n), l && e();
                                            },
                                            pickerIntention: R.Hz.STATUS,
                                            onNavigateAway: M,
                                        });
                                    },
                                    position: "left",
                                    animation: c.yRy.Animation.NONE,
                                    align: "top",
                                    children: (t, e) => {
                                        var n, a;
                                        let { isShown: r } = e;
                                        return (0, l.jsx)(
                                            b.Z,
                                            ((n = (function (t) {
                                                for (var e = 1; e < arguments.length; e++) {
                                                    var n = null != arguments[e] ? arguments[e] : {},
                                                        l = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols &&
                                                        (l = l.concat(
                                                            Object.getOwnPropertySymbols(n).filter(function (t) {
                                                                return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                            }),
                                                        )),
                                                        l.forEach(function (e) {
                                                            var l;
                                                            (l = n[e]),
                                                                e in t
                                                                    ? Object.defineProperty(t, e, {
                                                                          value: l,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0,
                                                                      })
                                                                    : (t[e] = l);
                                                        });
                                                }
                                                return t;
                                            })({}, t)),
                                            (a = a =
                                                {
                                                    ref: tl,
                                                    active: r,
                                                    className: k.emojiButton,
                                                    tabIndex: 0,
                                                    renderButtonContents: tS(),
                                                }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                                                : (function (t, e) {
                                                      var n = Object.keys(t);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var l = Object.getOwnPropertySymbols(t);
                                                          n.push.apply(n, l);
                                                      }
                                                      return n;
                                                  })(Object(a)).forEach(function (t) {
                                                      Object.defineProperty(
                                                          n,
                                                          t,
                                                          Object.getOwnPropertyDescriptor(a, t),
                                                      );
                                                  }),
                                            n),
                                        );
                                    },
                                }),
                            }),
                            (0, l.jsx)(
                                u.iS,
                                {
                                    autosize: !0,
                                    "aria-describedby": tj,
                                    value: X,
                                    maxLength: Z.s0,
                                    rows: 1,
                                    showRemainingCharacterCount: !1,
                                    placeholder: td,
                                    onChange: (t) => {
                                        Q(t);
                                    },
                                    onKeyDown: (t) => {
                                        "Enter" === t.key && tb();
                                    },
                                    className: i()(k.input, null != tr && k.inputWithLabel),
                                    inputRef: tn,
                                },
                                null != tr ? "with-label" : "without-label",
                            ),
                            null != tr &&
                                (0, l.jsx)("div", {
                                    className: k.inputCustomStatusLabelRow,
                                    children: (0, l.jsx)(E.Z, { label: tr }),
                                }),
                            (0, l.jsx)(c.nn4, {
                                id: tj,
                                children: "".concat(L.intl.string(L.t.EVV6ub), ": ").concat(tu),
                            }),
                            (X.length > 0 || null != $) &&
                                (0, l.jsx)("div", {
                                    className: i()(k.clearButtonWrapper, null != tr && k.buttonContainerWithLabel),
                                    children: (0, l.jsx)(c.P3F, {
                                        focusProps: {
                                            offset: {
                                                top: 8,
                                                bottom: 8,
                                                left: -2,
                                                right: -2,
                                            },
                                        },
                                        "aria-label": L.intl.string(L.t.wfYTHR),
                                        className: k.clearButton,
                                        onClick: () => {
                                            Q(""), J(null);
                                        },
                                        children: (0, l.jsx)(c.k$p, {
                                            size: "md",
                                            color: "currentColor",
                                            className: k.clearIcon,
                                        }),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
