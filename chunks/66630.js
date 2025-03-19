n.d(t, { Z: () => w }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(481060),
    l = n(596454),
    s = n(493773),
    u = n(100527),
    c = n(318766),
    d = n(907040),
    m = n(594174),
    p = n(626135),
    h = n(368326),
    f = n(720449),
    b = n(684269),
    j = n(429467),
    S = n(676035),
    x = n(926563),
    v = n(875425),
    g = n(981631),
    O = n(185923),
    y = n(388032),
    _ = n(32533);
function C(e) {
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
function N(e, t) {
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
function w(e) {
    var t, n;
    let { transitionState: w, onClose: P, sourceAnalyticsContext: k, sourceAnalyticsLocations: I, prompt: E = null } = e,
        T = (0, h.p)({ location: 'CustomStatusModalWithPreview' }),
        D = (0, a.e7)([m.default], () => {
            var e;
            return null !== (e = m.default.getCurrentUser()) && void 0 !== e ? e : null;
        }),
        B = (0, S.a)(),
        [Z, A] = i.useState(null !== (t = null == B ? void 0 : B.state) && void 0 !== t ? t : ''),
        [z, M] = i.useState(null !== (n = null == B ? void 0 : B.emoji) && void 0 !== n ? n : null),
        [W, L] = i.useState((0, b.Z)()),
        R = i.useRef(null),
        [U, F] = i.useState(null != E ? E : null),
        H = T && null != U ? U.label() : y.NW.string(y.t['xod36+']);
    i.useEffect(() => {
        p.default.track(g.rMx.OPEN_MODAL, {
            type: u.Z.CUSTOM_STATUS_MODAL,
            location_stack: I
        });
    }, [I]),
        (0, s.ZP)(() => {
            var e, t;
            null === (e = R.current) || void 0 === e || e.focus(), null === (t = R.current) || void 0 === t || t.setSelection(Z.length, Z.length);
        });
    let Y = (e) => {
            null != e &&
                M(
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
        K = () => {
            (0, f.Z)({
                text: Z,
                emojiInfo: z,
                clearAfter: W,
                analyticsContext: k,
                prompt: U
            }),
                P();
        },
        q = () =>
            null == z
                ? null
                : () =>
                      (0, r.jsx)(l.Z, {
                          className: _.emoji,
                          emojiId: z.id,
                          emojiName: z.name,
                          animated: !!z.animated
                      }),
        G = T ? y.NW.string(y.t.rp0aho) : y.NW.string(y.t.UcdRn5);
    return (0, r.jsxs)(o.Y0X, {
        transitionState: w,
        children: [
            (0, r.jsxs)(o.xBx, {
                separator: !1,
                className: _.header,
                children: [
                    (0, r.jsx)('div', {
                        className: _.headerTitle,
                        children: (0, r.jsx)(o.X6q, {
                            variant: 'heading-xl/semibold',
                            children: y.NW.string(y.t.Zx4jzM)
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: _.headerCloseButton,
                        children: (0, r.jsx)(o.olH, { onClick: P })
                    })
                ]
            }),
            (0, r.jsxs)(o.hzk, {
                children: [
                    null != D &&
                        (0, r.jsx)('div', {
                            className: _.profilePreview,
                            children: (0, r.jsx)(x.Z, {
                                user: D,
                                previewText: Z,
                                previewEmoji: z,
                                placeHolderText: H,
                                transitionState: w
                            })
                        }),
                    (0, r.jsx)(o.hjN, {
                        className: _.formGroup,
                        titleClassName: _.customStatusInputTitle,
                        title: (0, r.jsxs)('div', {
                            className: _.customStatusInputTitleContainer,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-xs/medium',
                                    children: G
                                }),
                                T &&
                                    (0, r.jsxs)(o.P3F, {
                                        className: _.needInspiration,
                                        onClick: () => {
                                            var e;
                                            A(''), F((e) => (0, j.Z)(null == e ? void 0 : e.value)), null === (e = R.current) || void 0 === e || e.focus();
                                        },
                                        children: [
                                            (0, r.jsx)(o.$2U, { size: 'xs' }),
                                            (0, r.jsx)(o.Text, {
                                                variant: 'text-xs/medium',
                                                children: y.NW.string(y.t.UH6ieX)
                                            })
                                        ]
                                    })
                            ]
                        }),
                        children: (0, r.jsxs)('div', {
                            className: _.inputContainer,
                            children: [
                                (0, r.jsx)('div', {
                                    className: _.emojiButtonContainer,
                                    children: (0, r.jsx)(o.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(d.Z, {
                                                closePopout: t,
                                                onSelectEmoji: (e, n) => {
                                                    Y(e), n && t();
                                                },
                                                pickerIntention: O.Hz.STATUS,
                                                onNavigateAway: P
                                            });
                                        },
                                        position: 'left',
                                        animation: o.yRy.Animation.NONE,
                                        align: 'top',
                                        children: (e, t) => {
                                            let { isShown: n } = t;
                                            return (0, r.jsx)(
                                                c.Z,
                                                N(C({}, e), {
                                                    active: n,
                                                    className: _.emojiButton,
                                                    tabIndex: 0,
                                                    renderButtonContents: q()
                                                })
                                            );
                                        }
                                    })
                                }),
                                (0, r.jsx)(o.Kx8, {
                                    autosize: !0,
                                    value: Z,
                                    maxLength: v.s0,
                                    rows: 1,
                                    showRemainingCharacterCount: !1,
                                    placeholder: null != H ? H : void 0,
                                    onChange: (e) => {
                                        A(e);
                                    },
                                    onKeyDown: (e) => {
                                        'Enter' === e.key && K();
                                    },
                                    className: _.input,
                                    inputRef: R
                                }),
                                (Z.length > 0 || null != z) &&
                                    (0, r.jsx)('div', {
                                        className: _.clearButtonWrapper,
                                        children: (0, r.jsx)(o.zxk, {
                                            focusProps: {
                                                offset: {
                                                    top: 8,
                                                    bottom: 8,
                                                    left: -2,
                                                    right: -2
                                                }
                                            },
                                            className: _.clearButton,
                                            onClick: () => {
                                                A(''), M(null);
                                            },
                                            look: o.zxk.Looks.BLANK,
                                            size: o.zxk.Sizes.NONE,
                                            children: (0, r.jsx)(o.k$p, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: _.clearIcon
                                            })
                                        })
                                    })
                            ]
                        })
                    })
                ]
            }),
            (0, r.jsx)(o.mzw, {
                children: (0, r.jsxs)('div', {
                    className: _.footer,
                    children: [
                        (0, r.jsx)('div', {
                            className: _.clearAfterSelectContainer,
                            children: (0, r.jsx)(o.q4e, {
                                maxVisibleItems: v.Q9.length,
                                value: W,
                                options: v.Q9.map((e) =>
                                    N(C({}, e), {
                                        key: e.value,
                                        value: e.value,
                                        label: e.label()
                                    })
                                ),
                                onChange: L,
                                look: o.qQH.CUSTOM,
                                popoutWidth: 200,
                                popoutPosition: 'right'
                            })
                        }),
                        (0, r.jsx)(o.zxk, {
                            type: 'submit',
                            size: o.zxk.Sizes.MEDIUM,
                            color: o.zxk.Colors.BRAND,
                            onClick: K,
                            children: y.NW.string(y.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
