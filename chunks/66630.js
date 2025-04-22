n.d(t, { Z: () => L }), n(388685);
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
    O = n(720449),
    x = n(684269),
    v = n(397416),
    _ = n(745579),
    C = n(74340),
    P = n(676035),
    y = n(346565),
    N = n(562577),
    T = n(926563),
    w = n(875425),
    E = n(981631),
    k = n(185923),
    I = n(388032),
    D = n(782628);
function L(e) {
    var t, n;
    let { transitionState: r, onClose: L, sourceAnalyticsContext: Z, sourceAnalyticsLocations: A, prompt: B = null } = e,
        R = (0, g.p)({ location: 'CustomStatusModalWithPreview' }),
        U = (0, S.P)({ location: 'CustomStatusModalWithPreview' }),
        M = (0, j.Z)({ location: 'CustomStatusModalWithPreview' }),
        z = (0, o.e7)([p.default], () => {
            var e;
            return null != (e = p.default.getCurrentUser()) ? e : null;
        }),
        Y = (0, P.a)(),
        [F, W] = a.useState(null != (t = null == Y ? void 0 : Y.state) ? t : ''),
        [H, K] = a.useState(null != (n = null == Y ? void 0 : Y.emoji) ? n : null),
        [V, G] = a.useState((0, x.Z)()),
        q = a.useRef(null),
        X = a.useRef(null),
        $ = a.useRef(null),
        [Q, J] = a.useState(null != Y && M ? (0, C.Z)(Y) : null),
        ee = R && null != B ? B.label() : I.intl.string(I.t['xod36+']),
        [et, en] = a.useState(ee),
        { ref: el, width: ea } = (0, c.ZP)(ee);
    a.useEffect(() => {
        let e = $.current;
        if (null == ea || null == e) return;
        let t = ea - 78;
        e.textContent = ee;
        let n = e.getBoundingClientRect().width;
        if (n <= t) en(ee);
        else {
            let e = n / ee.length,
                l = Math.floor((t - 3 * e) / e);
            en(''.concat(ee.substring(0, l)).concat('...'));
        }
    }, [ea, ee]),
        a.useEffect(() => {
            b.default.track(E.rMx.OPEN_MODAL, {
                type: m.Z.CUSTOM_STATUS_MODAL,
                location_stack: A
            });
        }, [A]),
        (0, d.ZP)(() => {
            var e, t;
            null == (e = q.current) || e.focus(), null == (t = q.current) || t.setSelection(F.length, F.length);
        });
    let er = (e) => {
            null != e &&
                K(
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
        ei = () => {
            (0, O.Z)({
                text: F,
                emojiInfo: H,
                clearAfter: V,
                prompt: B,
                customStatusLabel: Q,
                analyticsContext: Z
            }),
                L();
        },
        eo = () =>
            null == H
                ? null
                : () =>
                      (0, l.jsx)(u.Z, {
                          className: D.emoji,
                          emojiId: H.id,
                          emojiName: H.name,
                          animated: !!H.animated
                      }),
        es = R ? I.intl.string(I.t.rp0aho) : I.intl.string(I.t.UcdRn5),
        eu = 'custom-status-placeholder-text';
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
                        children: (0, l.jsx)(s.olH, { onClick: L })
                    })
                ]
            }),
            (0, l.jsxs)(s.hzk, {
                children: [
                    null != z &&
                        (0, l.jsx)('div', {
                            className: D.profilePreview,
                            children: (0, l.jsx)(T.Z, {
                                user: z,
                                previewText: F,
                                previewEmoji: H,
                                placeHolderText: ee,
                                transitionState: r,
                                label: Q
                            })
                        }),
                    (0, l.jsxs)(s.hjN, {
                        className: D.formGroup,
                        titleClassName: D.customStatusInputTitle,
                        title: es,
                        children: [
                            M &&
                                (0, l.jsx)('div', {
                                    className: D.labelSelectorContainer,
                                    children: (0, l.jsx)(N.Z, {
                                        currentValue: Q,
                                        onChange: (e) => {
                                            let t = e === Q ? null : e;
                                            b.default.track(E.rMx.CUSTOM_STATUS_LABEL_CLICKED, {
                                                previous_label: Q,
                                                new_label: t,
                                                location_stack: A
                                            }),
                                                J(t);
                                        }
                                    })
                                }),
                            (0, l.jsxs)('div', {
                                className: D.inputContainer,
                                ref: el,
                                children: [
                                    (0, l.jsx)('span', {
                                        ref: $,
                                        className: D.hiddenPlaceholder,
                                        'aria-hidden': 'true'
                                    }),
                                    (0, l.jsx)('div', {
                                        className: i()(D.emojiButtonContainer, null != Q && D.emojiButtonContainerWithLabel),
                                        children: (0, l.jsx)(s.yRy, {
                                            targetElementRef: X,
                                            renderPopout: (e) => {
                                                let { closePopout: t } = e;
                                                return (0, l.jsx)(f.Z, {
                                                    closePopout: t,
                                                    onSelectEmoji: (e, n) => {
                                                        er(e), n && t();
                                                    },
                                                    pickerIntention: k.Hz.STATUS,
                                                    onNavigateAway: L
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
                                                            ref: X,
                                                            active: r,
                                                            className: D.emojiButton,
                                                            tabIndex: 0,
                                                            renderButtonContents: eo()
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
                                            'aria-describedby': eu,
                                            value: F,
                                            maxLength: w.s0,
                                            rows: 1,
                                            showRemainingCharacterCount: !1,
                                            placeholder: et,
                                            onChange: (e) => {
                                                W(e);
                                            },
                                            onKeyDown: (e) => {
                                                'Enter' === e.key && ei();
                                            },
                                            className: i()(D.input, null != Q && D.inputWithLabel),
                                            inputRef: q
                                        },
                                        null != Q ? 'with-label' : 'without-label'
                                    ),
                                    null != Q &&
                                        (0, l.jsx)('div', {
                                            className: D.inputCustomStatusLabelRow,
                                            children: (0, l.jsx)(y.Z, { label: Q })
                                        }),
                                    (0, l.jsx)(s.nn4, {
                                        id: eu,
                                        children: ''.concat(I.intl.string(I.t.EVV6ub), ': ').concat(ee)
                                    }),
                                    (F.length > 0 || null != H) &&
                                        (0, l.jsx)('div', {
                                            className: i()(D.clearButtonWrapper, null != Q && D.buttonContainerWithLabel),
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
                                                    W(''), K(null);
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
                                value: V,
                                options: w.wS.map((e) => ({
                                    value: e,
                                    key: e,
                                    label: (0, v.Z)(e, U)
                                })),
                                onChange: (e) => G(e),
                                optionClassName: D.clearAfterSelectOption,
                                renderOptionLabel: (e) => {
                                    let { value: t } = e;
                                    return (0, l.jsx)('span', {
                                        className: D.clearAfterSelectOptionLabel,
                                        children: (0, _.Z)(t, U)
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
                            onClick: ei,
                            children: I.intl.string(I.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
