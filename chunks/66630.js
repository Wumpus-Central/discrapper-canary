n.d(t, { Z: () => k }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    u = n(596454),
    c = n(493773),
    d = n(100527),
    p = n(318766),
    m = n(907040),
    f = n(594174),
    h = n(626135),
    b = n(368326),
    j = n(720449),
    x = n(684269),
    v = n(429467),
    g = n(676035),
    S = n(926563),
    _ = n(875425),
    y = n(981631),
    O = n(185923),
    C = n(388032),
    N = n(32533);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function P(e, t) {
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
function k(e) {
    var t, n;
    let { transitionState: l, onClose: k, sourceAnalyticsContext: w, sourceAnalyticsLocations: E, prompt: T = null } = e,
        D = (0, b.p)({ location: 'CustomStatusModalWithPreview' }),
        B = (0, a.e7)([f.default], () => {
            var e;
            return null !== (e = f.default.getCurrentUser()) && void 0 !== e ? e : null;
        }),
        Z = (0, g.a)(),
        [A, z] = i.useState(null !== (t = null == Z ? void 0 : Z.state) && void 0 !== t ? t : ''),
        [M, L] = i.useState(null !== (n = null == Z ? void 0 : Z.emoji) && void 0 !== n ? n : null),
        [R, W] = i.useState((0, x.Z)()),
        U = i.useRef(null),
        H = i.useRef(null),
        [F, Y] = i.useState(null != T ? T : null),
        K = A.length > 0 || null != M,
        q = D && null != F ? F.label() : C.NW.string(C.t['xod36+']);
    i.useEffect(() => {
        h.default.track(y.rMx.OPEN_MODAL, {
            type: d.Z.CUSTOM_STATUS_MODAL,
            location_stack: E
        });
    }, [E]),
        (0, c.ZP)(() => {
            var e, t;
            null === (e = U.current) || void 0 === e || e.focus(), null === (t = U.current) || void 0 === t || t.setSelection(A.length, A.length);
        });
    let G = (e) => {
            null != e &&
                L(
                    null != e.id
                        ? {
                              id: e.id,
                              name: e.name,
                              animated: e.animated
                          }
                        : {
                              id: null,
                              name: e.optionallyDiverseSequence,
                              animated: !1
                          }
                );
        },
        X = () => {
            (0, j.Z)({
                text: A,
                emojiInfo: M,
                clearAfter: R,
                analyticsContext: w,
                prompt: F
            }),
                k();
        },
        V = () =>
            null == M
                ? null
                : () =>
                      (0, r.jsx)(u.Z, {
                          className: N.emoji,
                          emojiId: M.id,
                          emojiName: M.name,
                          animated: !!M.animated
                      }),
        $ = D ? C.NW.string(C.t.rp0aho) : C.NW.string(C.t.UcdRn5);
    return (0, r.jsxs)(s.Y0X, {
        transitionState: l,
        children: [
            (0, r.jsxs)(s.xBx, {
                separator: !1,
                className: N.header,
                children: [
                    (0, r.jsx)('div', {
                        className: N.headerTitle,
                        children: (0, r.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            children: C.NW.string(C.t.Zx4jzM)
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: N.headerCloseButton,
                        children: (0, r.jsx)(s.olH, { onClick: k })
                    })
                ]
            }),
            (0, r.jsxs)(s.hzk, {
                children: [
                    null != B &&
                        (0, r.jsx)('div', {
                            className: N.profilePreview,
                            children: (0, r.jsx)(S.Z, {
                                user: B,
                                previewText: A,
                                previewEmoji: M,
                                placeHolderText: q,
                                transitionState: l
                            })
                        }),
                    (0, r.jsxs)(s.hjN, {
                        className: N.formGroup,
                        titleClassName: N.customStatusInputTitle,
                        title: $,
                        children: [
                            (0, r.jsxs)('div', {
                                className: N.inputContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: N.emojiButtonContainer,
                                        children: (0, r.jsx)(s.yRy, {
                                            targetElementRef: H,
                                            renderPopout: (e) => {
                                                let { closePopout: t } = e;
                                                return (0, r.jsx)(m.Z, {
                                                    closePopout: t,
                                                    onSelectEmoji: (e, n) => {
                                                        G(e), n && t();
                                                    },
                                                    pickerIntention: O.Hz.STATUS,
                                                    onNavigateAway: k
                                                });
                                            },
                                            position: 'left',
                                            animation: s.yRy.Animation.NONE,
                                            align: 'top',
                                            children: (e, t) => {
                                                let { isShown: n } = t;
                                                return (0, r.jsx)(
                                                    p.Z,
                                                    P(I({}, e), {
                                                        ref: H,
                                                        active: n,
                                                        className: N.emojiButton,
                                                        tabIndex: 0,
                                                        renderButtonContents: V()
                                                    })
                                                );
                                            }
                                        })
                                    }),
                                    (0, r.jsx)(s.Kx8, {
                                        autosize: !0,
                                        value: A,
                                        maxLength: _.s0,
                                        rows: 1,
                                        showRemainingCharacterCount: !1,
                                        placeholder: null != q ? q : void 0,
                                        onChange: (e) => {
                                            z(e);
                                        },
                                        onKeyDown: (e) => {
                                            'Enter' === e.key && X();
                                        },
                                        className: N.input,
                                        inputRef: U
                                    }),
                                    (A.length > 0 || null != M) &&
                                        (0, r.jsx)('div', {
                                            className: N.clearButtonWrapper,
                                            children: (0, r.jsx)(s.zxk, {
                                                focusProps: {
                                                    offset: {
                                                        top: 8,
                                                        bottom: 8,
                                                        left: -2,
                                                        right: -2
                                                    }
                                                },
                                                className: N.clearButton,
                                                onClick: () => {
                                                    z(''), L(null);
                                                },
                                                look: s.zxk.Looks.BLANK,
                                                size: s.zxk.Sizes.NONE,
                                                children: (0, r.jsx)(s.k$p, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: N.clearIcon
                                                })
                                            })
                                        })
                                ]
                            }),
                            D &&
                                (0, r.jsxs)(s.P3F, {
                                    ignoreKeyPress: K,
                                    'aria-disabled': K,
                                    className: o()(N.needInspiration, K && N.needInspirationDisabled),
                                    onClick: K
                                        ? void 0
                                        : () => {
                                              let e = (0, v.Z)(null == F ? void 0 : F.value);
                                              h.default.track(y.rMx.CUSTOM_STATUS_RANDOMIZER_CLICKED, {
                                                  previous_prompt_type: null == F ? void 0 : F.value,
                                                  new_prompt_type: null == e ? void 0 : e.value,
                                                  location_stack: E
                                              }),
                                                  z(''),
                                                  Y(e);
                                          },
                                    children: [
                                        (0, r.jsx)(s.$2U, { size: 'xs' }),
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-xs/medium',
                                            children: C.NW.string(C.t.UH6ieX)
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(s.mzw, {
                children: (0, r.jsxs)('div', {
                    className: N.footer,
                    children: [
                        (0, r.jsx)('div', {
                            className: N.clearAfterSelectContainer,
                            children: (0, r.jsx)(s.q4e, {
                                maxVisibleItems: _.Q9.length,
                                value: R,
                                options: _.Q9.map((e) =>
                                    P(I({}, e), {
                                        key: e.value,
                                        value: e.value,
                                        label: e.label()
                                    })
                                ),
                                onChange: W,
                                look: s.qQH.CUSTOM,
                                popoutWidth: 200,
                                popoutPosition: 'right'
                            })
                        }),
                        (0, r.jsx)(s.zxk, {
                            type: 'submit',
                            size: s.zxk.Sizes.MEDIUM,
                            color: s.zxk.Colors.BRAND,
                            onClick: X,
                            children: C.NW.string(C.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
