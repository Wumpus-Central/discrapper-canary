n.d(e, {
    default: () => M,
}),
    n(896048);
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    o = n(158954),
    s = n(311907),
    u = n(843282),
    c = n(421380),
    d = n(397927),
    m = n(565645),
    f = n(765671),
    g = n(964486),
    p = n(793574),
    h = n(688810),
    b = n(375499),
    T = n(937773),
    A = n(287809),
    y = n(954571),
    O = n(177975),
    S = n(576241),
    j = n(57990),
    v = n(569921),
    x = n(267859),
    P = n(334310),
    _ = n(685396),
    w = n(16663),
    D = n(403918),
    N = n(652215),
    R = n(307731),
    E = n(985018),
    U = n(501336);
let C = "CLEAR_AFTER";

function M(t) {
    var e, n;
    let { transitionState: r, onClose: M, sourceAnalyticsLocations: k = [], prompt: H = null } = t,
        Y = (0, S.h)({
            location: "CustomStatusModalWithPreview",
        }),
        I = (0, O.R)({
            location: "CustomStatusModalWithPreview",
        }),
        { analyticsLocations: L } = (0, h.Ay)(k, p.A.CUSTOM_STATUS_MODAL),
        F = (0, s.bG)([A.default], () => {
            var t;
            return null != (t = A.default.getCurrentUser()) ? t : null;
        }),
        Z = (0, _.K)(),
        [z, V] = a.useState(null != (e = null == Z ? void 0 : Z.state) ? e : ""),
        [W, q] = a.useState(null != (n = null == Z ? void 0 : Z.emoji) ? n : null),
        [G, X] = a.useState((0, v.A)()),
        B = a.useRef(null),
        K = a.useRef(null),
        Q = a.useRef(null),
        J = Y && null != H ? H.label() : E.intl.string(E.t.xod367),
        [$, tt] = a.useState(J),
        { ref: te, width: tn } = (0, f.Ay)(J);
    a.useEffect(() => {
        let t = Q.current;
        if (null == tn || null == t) return;
        let e = tn - 78;
        t.textContent = J;
        let n = t.getBoundingClientRect().width;
        if (n <= e) tt(J);
        else {
            let t = n / J.length,
                l = Math.floor((e - 3 * t) / t);
            tt("".concat(J.substring(0, l)).concat("..."));
        }
    }, [tn, J]),
        a.useEffect(() => {
            y.default.track(N.HAw.OPEN_MODAL, {
                type: p.A.CUSTOM_STATUS_MODAL,
                location_stack: L,
            });
        }, [L]),
        (0, g.Ay)(() => {
            var t, e;
            null == (t = B.current) || t.focus(), null == (e = B.current) || e.setSelection(z.length, z.length);
        });
    let tl = () => {
            G !== C &&
                ((0, j.A)({
                    text: z,
                    emojiInfo: W,
                    clearAfter: G,
                    prompt: H,
                    analyticsLocations: L,
                }),
                M());
        },
        ta = Y ? E.intl.string(E.t.rp0ahn) : E.intl.string(E.t.UcdRn2),
        tr = "custom-status-input";
    return (0, l.jsxs)(o.Modal, {
        title: E.intl.string(E.t.Zx4jzN),
        actionBarInput: (0, l.jsx)("div", {
            className: U.l3,
            children: (0, l.jsx)(u.Te, {
                maxVisibleItems: D.SX.length + 1,
                value: G,
                options: I
                    ? [
                          {
                              value: C,
                              key: C,
                              label: E.intl.string(E.t.E45wvP),
                              disabled: !0,
                          },
                          ...D.SX.map((t) => ({
                              value: t,
                              key: t,
                              label: (0, x.A)(t, !0),
                          })),
                      ]
                    : D.SX.map((t) => ({
                          value: t,
                          key: t,
                          label: (0, x.A)(t),
                      })),
                onChange: (t) => X(t),
                optionClassName: U.Pl,
                renderOptionLabel: (t) => {
                    let { value: e, label: n, disabled: a } = t;
                    return (0, l.jsx)("span", {
                        className: i()(U.j3, a ? U.r9 : void 0),
                        children: e === C ? n : (0, P.A)(e, I),
                    });
                },
                variant: "text-only",
                popoutWidth: "auto",
                popoutPosition: "right",
                "data-migration-pending": !0,
            }),
        }),
        onClose: async () => {
            await M();
        },
        transitionState: r,
        actions: [
            {
                text: E.intl.string(E.t["R3BPH+"]),
                variant: "primary",
                onClick: tl,
            },
        ],
        children: [
            null != F &&
                (0, l.jsx)("div", {
                    className: U.q5,
                    children: (0, l.jsx)(w.A, {
                        user: F,
                        previewText: z,
                        previewEmoji: W,
                        placeHolderText: J,
                        transitionState: r,
                    }),
                }),
            (0, l.jsxs)("div", {
                className: U.eH,
                children: [
                    (0, l.jsx)(d.Text, {
                        tag: "label",
                        htmlFor: tr,
                        variant: "heading-md/semibold",
                        className: U.wW,
                        children: ta,
                    }),
                    (0, l.jsxs)("div", {
                        className: U.Kf,
                        ref: te,
                        children: [
                            (0, l.jsx)("span", {
                                ref: Q,
                                className: U._D,
                                "aria-hidden": "true",
                            }),
                            (0, l.jsx)("div", {
                                className: U.S0,
                                children: (0, l.jsx)(d.YNO, {
                                    targetElementRef: K,
                                    renderPopout: (t) => {
                                        let { closePopout: e } = t;
                                        return (0, l.jsx)(T.A, {
                                            closePopout: e,
                                            onSelectEmoji: (t) => {
                                                let { emoji: n, willClose: l } = t;
                                                null == n ||
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
                                                    l && e();
                                            },
                                            pickerIntention: R.b_.STATUS,
                                            onNavigateAway: M,
                                        });
                                    },
                                    position: "left",
                                    animation: d.YNO.Animation.NONE,
                                    align: "top",
                                    children: (t, e) => {
                                        var n, a;
                                        let { isShown: r } = e;
                                        return (0, l.jsx)(
                                            b.A,
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
                                                    ref: K,
                                                    active: r,
                                                    className: U.Z8,
                                                    spriteSize: 24,
                                                    tabIndex: 0,
                                                    renderButtonContents:
                                                        null == W
                                                            ? null
                                                            : () =>
                                                                  (0, l.jsx)(m.A, {
                                                                      className: U.Zg,
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
                            (0, l.jsx)(c.f9, {
                                autosize: !0,
                                value: z,
                                maxLength: D.hp,
                                rows: 1,
                                showRemainingCharacterCount: !1,
                                placeholder: $,
                                onChange: (t) => {
                                    V(t);
                                },
                                onKeyDown: (t) => {
                                    "Enter" === t.key && tl();
                                },
                                className: U.hF,
                                inputRef: B,
                                id: tr,
                            }),
                            (z.length > 0 || null != W) &&
                                (0, l.jsx)(d.DUT, {
                                    "aria-label": E.intl.string(E.t.wfYTHe),
                                    className: U.mt,
                                    onClick: () => {
                                        V(""), q(null);
                                    },
                                    children: (0, l.jsx)(d.aXh, {
                                        size: "md",
                                        color: "currentColor",
                                        className: U.hj,
                                    }),
                                }),
                        ],
                    }),
                    (0, l.jsx)(d.AC4, {
                        children: "".concat(E.intl.string(E.t.EVV6uZ), ": ").concat(J),
                    }),
                ],
            }),
        ],
    });
}
