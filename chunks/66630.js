n.d(t, { Z: () => E }), n(47120);
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
    S = n(676035),
    g = n(926563),
    _ = n(875425),
    O = n(981631),
    y = n(185923),
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
let w = [_.HO.ADD_STATUS, _.HO.WHATS_ON_YOUR_MIND];
function E(e) {
    var t, n;
    let { transitionState: l, onClose: E, sourceAnalyticsContext: k, sourceAnalyticsLocations: T, prompt: D = null } = e,
        B = (0, b.p)({ location: 'CustomStatusModalWithPreview' }),
        Z = (0, a.e7)([f.default], () => {
            var e;
            return null !== (e = f.default.getCurrentUser()) && void 0 !== e ? e : null;
        }),
        A = (0, S.a)(),
        [z, M] = i.useState(null !== (t = null == A ? void 0 : A.state) && void 0 !== t ? t : ''),
        [W, R] = i.useState(null !== (n = null == A ? void 0 : A.emoji) && void 0 !== n ? n : null),
        [U, L] = i.useState((0, x.Z)()),
        H = i.useRef(null),
        F = i.useRef(null),
        [Y, K] = i.useState(null != D ? D : null),
        q = z.length > 0 || null != W,
        G = B && null != Y ? Y.label() : C.NW.string(C.t['xod36+']);
    i.useEffect(() => {
        h.default.track(O.rMx.OPEN_MODAL, {
            type: d.Z.CUSTOM_STATUS_MODAL,
            location_stack: T
        });
    }, [T]),
        (0, c.ZP)(() => {
            var e, t;
            null === (e = H.current) || void 0 === e || e.focus(), null === (t = H.current) || void 0 === t || t.setSelection(z.length, z.length);
        });
    let V = (e) => {
            null != e &&
                R(
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
                text: z,
                emojiInfo: W,
                clearAfter: U,
                analyticsContext: k,
                prompt: Y
            }),
                E();
        },
        $ = () =>
            null == W
                ? null
                : () =>
                      (0, r.jsx)(u.Z, {
                          className: N.emoji,
                          emojiId: W.id,
                          emojiName: W.name,
                          animated: !!W.animated
                      }),
        Q = B ? C.NW.string(C.t.rp0aho) : C.NW.string(C.t.UcdRn5),
        J = 'custom-status-placeholder-text';
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
                        children: (0, r.jsx)(s.olH, { onClick: E })
                    })
                ]
            }),
            (0, r.jsxs)(s.hzk, {
                children: [
                    null != Z &&
                        (0, r.jsx)('div', {
                            className: N.profilePreview,
                            children: (0, r.jsx)(g.Z, {
                                user: Z,
                                previewText: z,
                                previewEmoji: W,
                                placeHolderText: G,
                                transitionState: l
                            })
                        }),
                    (0, r.jsxs)(s.hjN, {
                        className: N.formGroup,
                        titleClassName: N.customStatusInputTitle,
                        title: Q,
                        children: [
                            (0, r.jsxs)('div', {
                                className: N.inputContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: N.emojiButtonContainer,
                                        children: (0, r.jsx)(s.yRy, {
                                            targetElementRef: F,
                                            renderPopout: (e) => {
                                                let { closePopout: t } = e;
                                                return (0, r.jsx)(m.Z, {
                                                    closePopout: t,
                                                    onSelectEmoji: (e, n) => {
                                                        V(e), n && t();
                                                    },
                                                    pickerIntention: y.Hz.STATUS,
                                                    onNavigateAway: E
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
                                                        ref: F,
                                                        active: n,
                                                        className: N.emojiButton,
                                                        tabIndex: 0,
                                                        renderButtonContents: $()
                                                    })
                                                );
                                            }
                                        })
                                    }),
                                    (0, r.jsx)(s.Kx8, {
                                        autosize: !0,
                                        'aria-describedby': J,
                                        value: z,
                                        maxLength: _.s0,
                                        rows: 1,
                                        showRemainingCharacterCount: !1,
                                        placeholder: null != G ? G : void 0,
                                        onChange: (e) => {
                                            M(e);
                                        },
                                        onKeyDown: (e) => {
                                            'Enter' === e.key && X();
                                        },
                                        className: N.input,
                                        inputRef: H
                                    }),
                                    (0, r.jsx)(s.nn4, {
                                        id: J,
                                        children: ''.concat(C.NW.string(C.t.EVV6ub), ': ').concat(G)
                                    }),
                                    (z.length > 0 || null != W) &&
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
                                                    M(''), R(null);
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
                            B &&
                                (0, r.jsxs)(s.P3F, {
                                    ignoreKeyPress: q,
                                    'aria-disabled': q,
                                    className: o()(N.needInspiration, q && N.needInspirationDisabled),
                                    onClick: q
                                        ? void 0
                                        : () => {
                                              let e = (0, v.Z)((null == Y ? void 0 : Y.value) != null ? new Set([Y.value, ...w]) : void 0);
                                              h.default.track(O.rMx.CUSTOM_STATUS_RANDOMIZER_CLICKED, {
                                                  previous_prompt_type: null == Y ? void 0 : Y.value,
                                                  new_prompt_type: null == e ? void 0 : e.value,
                                                  location_stack: T
                                              }),
                                                  M(''),
                                                  K(e),
                                                  null != e && s.uvj.announce(e.label());
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
                                value: U,
                                options: _.Q9.map((e) =>
                                    P(I({}, e), {
                                        key: e.value,
                                        value: e.value,
                                        label: e.label()
                                    })
                                ),
                                onChange: L,
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
