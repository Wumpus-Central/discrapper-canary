n.d(e, { Z: () => B }), n(388685);
var a = n(951288),
    l = n(647438),
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
    y = n(397416),
    T = n(745579),
    w = n(74340),
    P = n(166655),
    N = n(676035),
    E = n(346565),
    D = n(562577),
    I = n(926563),
    Z = n(875425),
    A = n(981631),
    R = n(185923),
    L = n(388032),
    k = n(343190);
let M = "CLEAR_AFTER";
function B(t) {
    var e, n;
    let {
            transitionState: r,
            onClose: B,
            sourceAnalyticsContext: U,
            sourceAnalyticsLocations: F = [],
            prompt: Y = null,
            showLabelSelectorNewTooltip: W = !1,
        } = t,
        H = (0, x.p)({ location: "CustomStatusModalWithPreview" }),
        z = (0, O.P)({ location: "CustomStatusModalWithPreview" }),
        V = (0, v.Z)({ location: "CustomStatusModalWithPreview" }),
        { analyticsLocations: G } = (0, h.ZP)(F, p.Z.CUSTOM_STATUS_MODAL),
        K = (0, o.e7)([g.default], () => {
            var t;
            return null != (t = g.default.getCurrentUser()) ? t : null;
        }),
        q = (0, N.a)(),
        [X, Q] = l.useState(null != (e = null == q ? void 0 : q.state) ? e : ""),
        [J, $] = l.useState(null != (n = null == q ? void 0 : q.emoji) ? n : null),
        [tt, te] = l.useState((0, _.Z)()),
        tn = l.useRef(null),
        ta = l.useRef(null),
        tl = l.useRef(null),
        [tr, ti] = l.useState(null != q && V ? (0, w.Z)(q) : null),
        [to, ts] = l.useState(W),
        [tu, tc] = l.useState(() => (H && null != Y ? Y.label() : L.intl.string(L.t["xod36+"]))),
        [td, tm] = l.useState(tu),
        { ref: tf, width: tp } = (0, m.ZP)(tu);
    l.useEffect(() => {
        let t = tl.current;
        if (null == tp || null == t) return;
        let e = tp - 78;
        t.textContent = tu;
        let n = t.getBoundingClientRect().width;
        if (n <= e) tm(tu);
        else {
            let t = n / tu.length,
                a = Math.floor((e - 3 * t) / t);
            tm("".concat(tu.substring(0, a)).concat("..."));
        }
    }, [tp, tu]),
        l.useEffect(() => {
            j.default.track(A.rMx.OPEN_MODAL, {
                type: p.Z.CUSTOM_STATUS_MODAL,
                location_stack: G,
            });
        }, [G]),
        (0, f.ZP)(() => {
            var t, e;
            null == (t = tn.current) || t.focus(), null == (e = tn.current) || e.setSelection(X.length, X.length);
        });
    let th = () => {
            tt !== M &&
                ((0, C.Z)({
                    text: X,
                    emojiInfo: J,
                    clearAfter: tt,
                    prompt: Y,
                    customStatusLabel: tr,
                    analyticsLocations: G,
                    analyticsContext: U,
                }),
                B());
        },
        tb = H ? L.intl.string(L.t.rp0aho) : L.intl.string(L.t.UcdRn5),
        tS = "custom-status-placeholder-text";
    return (0, a.jsxs)(s.Modal, {
        title: L.intl.string(L.t.Zx4jzM),
        actionBarInput: (0, a.jsx)("div", {
            className: k.clearAfterSelectContainer,
            children: (0, a.jsx)(c.q4e, {
                maxVisibleItems: Z.wS.length + 1,
                value: tt,
                options: z
                    ? [
                          {
                              value: M,
                              key: M,
                              label: L.intl.string(L.t.E45wvL),
                              disabled: !0,
                          },
                          ...Z.wS.map((t) => ({
                              value: t,
                              key: t,
                              label: (0, y.Z)(t, !0),
                          })),
                      ]
                    : Z.wS.map((t) => ({
                          value: t,
                          key: t,
                          label: (0, y.Z)(t),
                      })),
                onChange: (t) => te(t),
                optionClassName: k.clearAfterSelectOption,
                renderOptionLabel: (t) => {
                    let { value: e, label: n, disabled: l } = t;
                    return (0, a.jsx)("span", {
                        className: i()(k.clearAfterSelectOptionLabel, l ? k.disabled : void 0),
                        children: e === M ? n : (0, T.Z)(e, z),
                    });
                },
                variant: "text-only",
                popoutWidth: "auto",
                popoutPosition: "right",
            }),
        }),
        onClose: async () => {
            await B();
        },
        transitionState: r,
        actions: [
            {
                text: L.intl.string(L.t.R3BPHx),
                variant: "primary",
                onClick: th,
            },
        ],
        children: [
            null != K &&
                (0, a.jsx)("div", {
                    className: k.profilePreview,
                    children: (0, a.jsx)(I.Z, {
                        user: K,
                        previewText: X,
                        previewEmoji: J,
                        placeHolderText: tu,
                        transitionState: r,
                        label: tr,
                    }),
                }),
            (0, a.jsxs)(c.hjN, {
                className: k.formGroup,
                titleClassName: k.customStatusInputTitle,
                title: tb,
                children: [
                    V &&
                        (0, a.jsx)("div", {
                            className: k.labelSelectorContainer,
                            children: (0, a.jsx)(c.DY3, {
                                position: "right",
                                color: c.FGA.BRAND,
                                "aria-label": L.intl.string(L.t.y2b7CA),
                                shouldShow: to,
                                forceOpen: to && r === c.Dvm.ENTERED,
                                tooltipClassName: k.labelSelectorTooltip,
                                text: L.intl.string(L.t.y2b7CA),
                                children: (0, a.jsx)(D.Z, {
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
                                            null != e && tc((0, P.Z)(e));
                                    },
                                }),
                            }),
                        }),
                    (0, a.jsxs)("div", {
                        className: k.inputContainer,
                        ref: tf,
                        children: [
                            (0, a.jsx)("span", {
                                ref: tl,
                                className: k.hiddenPlaceholder,
                                "aria-hidden": "true",
                            }),
                            (0, a.jsx)("div", {
                                className: i()(k.emojiButtonContainer, null != tr && k.emojiButtonContainerWithLabel),
                                children: (0, a.jsx)(c.yRy, {
                                    targetElementRef: ta,
                                    renderPopout: (t) => {
                                        let { closePopout: e } = t;
                                        return (0, a.jsx)(S.Z, {
                                            closePopout: e,
                                            onSelectEmoji: (t) => {
                                                var n;
                                                let { emoji: a, willClose: l } = t;
                                                null != (n = a) &&
                                                    $(
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
                                                    l && e();
                                            },
                                            pickerIntention: R.Hz.STATUS,
                                            onNavigateAway: B,
                                        });
                                    },
                                    position: "left",
                                    animation: c.yRy.Animation.NONE,
                                    align: "top",
                                    children: (t, e) => {
                                        var n, l;
                                        let { isShown: r } = e;
                                        return (0, a.jsx)(
                                            b.Z,
                                            ((n = (function (t) {
                                                for (var e = 1; e < arguments.length; e++) {
                                                    var n = null != arguments[e] ? arguments[e] : {},
                                                        a = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols &&
                                                        (a = a.concat(
                                                            Object.getOwnPropertySymbols(n).filter(function (t) {
                                                                return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                            }),
                                                        )),
                                                        a.forEach(function (e) {
                                                            var a;
                                                            (a = n[e]),
                                                                e in t
                                                                    ? Object.defineProperty(t, e, {
                                                                          value: a,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0,
                                                                      })
                                                                    : (t[e] = a);
                                                        });
                                                }
                                                return t;
                                            })({}, t)),
                                            (l = l =
                                                {
                                                    ref: ta,
                                                    active: r,
                                                    className: k.emojiButton,
                                                    tabIndex: 0,
                                                    renderButtonContents:
                                                        null == J
                                                            ? null
                                                            : () =>
                                                                  (0, a.jsx)(d.Z, {
                                                                      className: k.emoji,
                                                                      emojiId: J.id,
                                                                      emojiName: J.name,
                                                                      animated: !!J.animated,
                                                                  }),
                                                }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                                : (function (t, e) {
                                                      var n = Object.keys(t);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var a = Object.getOwnPropertySymbols(t);
                                                          n.push.apply(n, a);
                                                      }
                                                      return n;
                                                  })(Object(l)).forEach(function (t) {
                                                      Object.defineProperty(
                                                          n,
                                                          t,
                                                          Object.getOwnPropertyDescriptor(l, t),
                                                      );
                                                  }),
                                            n),
                                        );
                                    },
                                }),
                            }),
                            (0, a.jsx)(
                                u.iS,
                                {
                                    autosize: !0,
                                    "aria-describedby": tS,
                                    value: X,
                                    maxLength: Z.s0,
                                    rows: 1,
                                    showRemainingCharacterCount: !1,
                                    placeholder: td,
                                    onChange: (t) => {
                                        Q(t);
                                    },
                                    onKeyDown: (t) => {
                                        "Enter" === t.key && th();
                                    },
                                    className: i()(k.input, null != tr && k.inputWithLabel),
                                    inputRef: tn,
                                },
                                null != tr ? "with-label" : "without-label",
                            ),
                            null != tr &&
                                (0, a.jsx)("div", {
                                    className: k.inputCustomStatusLabelRow,
                                    children: (0, a.jsx)(E.Z, { label: tr }),
                                }),
                            (0, a.jsx)(c.nn4, {
                                id: tS,
                                children: "".concat(L.intl.string(L.t.EVV6ub), ": ").concat(tu),
                            }),
                            (X.length > 0 || null != J) &&
                                (0, a.jsx)("div", {
                                    className: i()(k.clearButtonWrapper, null != tr && k.buttonContainerWithLabel),
                                    children: (0, a.jsx)(c.P3F, {
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
                                            Q(""), $(null);
                                        },
                                        children: (0, a.jsx)(c.k$p, {
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
