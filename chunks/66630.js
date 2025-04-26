n.d(t, { Z: () => A }), n(388685);
var l = n(200651),
    a = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(442837),
    s = n(481060),
    u = n(596454),
    c = n(393238),
    d = n(493773),
    m = n(100527),
    h = n(318766),
    f = n(907040),
    p = n(594174),
    b = n(626135),
    S = n(644540),
    j = n(359588),
    g = n(368326),
    x = n(720449),
    O = n(684269),
    v = n(397416),
    _ = n(745579),
    C = n(74340),
    P = n(676035),
    T = n(346565),
    y = n(562577),
    N = n(926563),
    w = n(875425),
    E = n(981631),
    k = n(185923),
    I = n(388032),
    D = n(782628);
function A(e) {
    var t, n;
    let { transitionState: r, onClose: A, sourceAnalyticsContext: L, sourceAnalyticsLocations: Z, prompt: B = null, showLabelSelectorNewTooltip: R = !1 } = e,
        U = (0, g.p)({ location: 'CustomStatusModalWithPreview' }),
        M = (0, S.P)({ location: 'CustomStatusModalWithPreview' }),
        z = (0, j.Z)({ location: 'CustomStatusModalWithPreview' }),
        Y = (0, o.e7)([p.default], () => {
            var e;
            return null != (e = p.default.getCurrentUser()) ? e : null;
        }),
        F = (0, P.a)(),
        [W, H] = a.useState(null != (t = null == F ? void 0 : F.state) ? t : ''),
        [K, V] = a.useState(null != (n = null == F ? void 0 : F.emoji) ? n : null),
        [G, q] = a.useState((0, O.Z)()),
        X = a.useRef(null),
        $ = a.useRef(null),
        Q = a.useRef(null),
        [J, ee] = a.useState(null != F && z ? (0, C.Z)(F) : null),
        [et, en] = a.useState(R),
        el = U && null != B ? B.label() : I.intl.string(I.t['xod36+']),
        [ea, er] = a.useState(el),
        { ref: ei, width: eo } = (0, c.ZP)(el);
    a.useEffect(() => {
        let e = Q.current;
        if (null == eo || null == e) return;
        let t = eo - 78;
        e.textContent = el;
        let n = e.getBoundingClientRect().width;
        if (n <= t) er(el);
        else {
            let e = n / el.length,
                l = Math.floor((t - 3 * e) / e);
            er(''.concat(el.substring(0, l)).concat('...'));
        }
    }, [eo, el]),
        a.useEffect(() => {
            b.default.track(E.rMx.OPEN_MODAL, {
                type: m.Z.CUSTOM_STATUS_MODAL,
                location_stack: Z
            });
        }, [Z]),
        (0, d.ZP)(() => {
            var e, t;
            null == (e = X.current) || e.focus(), null == (t = X.current) || t.setSelection(W.length, W.length);
        });
    let es = (e) => {
            null != e &&
                V(
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
        eu = () => {
            (0, x.Z)({
                text: W,
                emojiInfo: K,
                clearAfter: G,
                prompt: B,
                customStatusLabel: J,
                analyticsContext: L
            }),
                A();
        },
        ec = () =>
            null == K
                ? null
                : () =>
                      (0, l.jsx)(u.Z, {
                          className: D.emoji,
                          emojiId: K.id,
                          emojiName: K.name,
                          animated: !!K.animated
                      }),
        ed = U ? I.intl.string(I.t.rp0aho) : I.intl.string(I.t.UcdRn5),
        em = 'custom-status-placeholder-text';
    return (0, l.jsxs)(s.Y0X, {
        transitionState: r,
        children: [
            (0, l.jsxs)(s.xBx, {
                separator: !1,
                className: D.header,
                children: [
                    (0, l.jsx)('div', {
                        className: D.headerTitle,
                        children: (0, l.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            children: I.intl.string(I.t.Zx4jzM)
                        })
                    }),
                    (0, l.jsx)('div', {
                        className: D.headerCloseButton,
                        children: (0, l.jsx)(s.olH, { onClick: A })
                    })
                ]
            }),
            (0, l.jsxs)(s.hzk, {
                children: [
                    null != Y &&
                        (0, l.jsx)('div', {
                            className: D.profilePreview,
                            children: (0, l.jsx)(N.Z, {
                                user: Y,
                                previewText: W,
                                previewEmoji: K,
                                placeHolderText: el,
                                transitionState: r,
                                label: J
                            })
                        }),
                    (0, l.jsxs)(s.hjN, {
                        className: D.formGroup,
                        titleClassName: D.customStatusInputTitle,
                        title: ed,
                        children: [
                            z &&
                                (0, l.jsx)('div', {
                                    className: D.labelSelectorContainer,
                                    children: (0, l.jsx)(s.DY3, {
                                        position: 'right',
                                        color: s.FGA.BRAND,
                                        'aria-label': I.intl.string(I.t.y2b7CA),
                                        shouldShow: et,
                                        forceOpen: et && r === s.Dvm.ENTERED,
                                        tooltipClassName: D.labelSelectorTooltip,
                                        text: I.intl.string(I.t.y2b7CA),
                                        children: (0, l.jsx)(y.Z, {
                                            currentValue: J,
                                            onChange: (e) => {
                                                let t = e === J ? null : e;
                                                b.default.track(E.rMx.CUSTOM_STATUS_LABEL_CLICKED, {
                                                    previous_label: J,
                                                    new_label: t,
                                                    location_stack: Z
                                                }),
                                                    ee(t),
                                                    en(!1);
                                            }
                                        })
                                    })
                                }),
                            (0, l.jsxs)('div', {
                                className: D.inputContainer,
                                ref: ei,
                                children: [
                                    (0, l.jsx)('span', {
                                        ref: Q,
                                        className: D.hiddenPlaceholder,
                                        'aria-hidden': 'true'
                                    }),
                                    (0, l.jsx)('div', {
                                        className: i()(D.emojiButtonContainer, null != J && D.emojiButtonContainerWithLabel),
                                        children: (0, l.jsx)(s.yRy, {
                                            targetElementRef: $,
                                            renderPopout: (e) => {
                                                let { closePopout: t } = e;
                                                return (0, l.jsx)(f.Z, {
                                                    closePopout: t,
                                                    onSelectEmoji: (e, n) => {
                                                        es(e), n && t();
                                                    },
                                                    pickerIntention: k.Hz.STATUS,
                                                    onNavigateAway: A
                                                });
                                            },
                                            position: 'left',
                                            animation: s.yRy.Animation.NONE,
                                            align: 'top',
                                            children: (e, t) => {
                                                var n, a;
                                                let { isShown: r } = t;
                                                return (0, l.jsx)(
                                                    h.Z,
                                                    ((n = (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                l = Object.keys(n);
                                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                                (l = l.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                    })
                                                                )),
                                                                l.forEach(function (t) {
                                                                    var l;
                                                                    (l = n[t]),
                                                                        t in e
                                                                            ? Object.defineProperty(e, t, {
                                                                                  value: l,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0
                                                                              })
                                                                            : (e[t] = l);
                                                                });
                                                        }
                                                        return e;
                                                    })({}, e)),
                                                    (a = a =
                                                        {
                                                            ref: $,
                                                            active: r,
                                                            className: D.emojiButton,
                                                            tabIndex: 0,
                                                            renderButtonContents: ec()
                                                        }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                                                        : (function (e, t) {
                                                              var n = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var l = Object.getOwnPropertySymbols(e);
                                                                  n.push.apply(n, l);
                                                              }
                                                              return n;
                                                          })(Object(a)).forEach(function (e) {
                                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                                                          }),
                                                    n)
                                                );
                                            }
                                        })
                                    }),
                                    (0, l.jsx)(
                                        s.Kx8,
                                        {
                                            autosize: !0,
                                            'aria-describedby': em,
                                            value: W,
                                            maxLength: w.s0,
                                            rows: 1,
                                            showRemainingCharacterCount: !1,
                                            placeholder: ea,
                                            onChange: (e) => {
                                                H(e);
                                            },
                                            onKeyDown: (e) => {
                                                'Enter' === e.key && eu();
                                            },
                                            className: i()(D.input, null != J && D.inputWithLabel),
                                            inputRef: X
                                        },
                                        null != J ? 'with-label' : 'without-label'
                                    ),
                                    null != J &&
                                        (0, l.jsx)('div', {
                                            className: D.inputCustomStatusLabelRow,
                                            children: (0, l.jsx)(T.Z, { label: J })
                                        }),
                                    (0, l.jsx)(s.nn4, {
                                        id: em,
                                        children: ''.concat(I.intl.string(I.t.EVV6ub), ': ').concat(el)
                                    }),
                                    (W.length > 0 || null != K) &&
                                        (0, l.jsx)('div', {
                                            className: i()(D.clearButtonWrapper, null != J && D.buttonContainerWithLabel),
                                            children: (0, l.jsx)(s.zxk, {
                                                focusProps: {
                                                    offset: {
                                                        top: 8,
                                                        bottom: 8,
                                                        left: -2,
                                                        right: -2
                                                    }
                                                },
                                                className: D.clearButton,
                                                onClick: () => {
                                                    H(''), V(null);
                                                },
                                                look: s.zxk.Looks.BLANK,
                                                size: s.zxk.Sizes.NONE,
                                                children: (0, l.jsx)(s.k$p, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: D.clearIcon
                                                })
                                            })
                                        })
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, l.jsx)(s.mzw, {
                children: (0, l.jsxs)('div', {
                    className: D.footer,
                    children: [
                        (0, l.jsx)('div', {
                            className: D.clearAfterSelectContainer,
                            children: (0, l.jsx)(s.q4e, {
                                maxVisibleItems: w.wS.length,
                                value: G,
                                options: w.wS.map((e) => ({
                                    value: e,
                                    key: e,
                                    label: (0, v.Z)(e, M)
                                })),
                                onChange: (e) => q(e),
                                optionClassName: D.clearAfterSelectOption,
                                renderOptionLabel: (e) => {
                                    let { value: t } = e;
                                    return (0, l.jsx)('span', {
                                        className: D.clearAfterSelectOptionLabel,
                                        children: (0, _.Z)(t, M)
                                    });
                                },
                                look: s.qQH.CUSTOM,
                                popoutWidth: 'auto',
                                popoutPosition: 'right'
                            })
                        }),
                        (0, l.jsx)(s.zxk, {
                            type: 'submit',
                            size: s.zxk.Sizes.MEDIUM,
                            color: s.zxk.Colors.BRAND,
                            onClick: eu,
                            children: I.intl.string(I.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
