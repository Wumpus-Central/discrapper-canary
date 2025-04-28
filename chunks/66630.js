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
    let { transitionState: r, onClose: A, sourceAnalyticsContext: L, sourceAnalyticsLocations: Z, prompt: B = null, label: R = null, showLabelSelectorNewTooltip: U = !1 } = e,
        M = (0, g.p)({ location: 'CustomStatusModalWithPreview' }),
        z = (0, S.P)({ location: 'CustomStatusModalWithPreview' }),
        Y = (0, j.Z)({ location: 'CustomStatusModalWithPreview' }),
        F = (0, o.e7)([p.default], () => {
            var e;
            return null != (e = p.default.getCurrentUser()) ? e : null;
        }),
        W = (0, P.a)(),
        [H, K] = a.useState(null != (t = null == W ? void 0 : W.state) ? t : ''),
        [V, G] = a.useState(null != (n = null == W ? void 0 : W.emoji) ? n : null),
        [q, X] = a.useState((0, O.Z)()),
        $ = a.useRef(null),
        Q = a.useRef(null),
        J = a.useRef(null),
        [ee, et] = a.useState(null != W && Y && null == R ? (0, C.Z)(W) : R),
        [en, el] = a.useState(U),
        ea = M && null != B ? B.label() : I.intl.string(I.t['xod36+']),
        [er, ei] = a.useState(ea),
        { ref: eo, width: es } = (0, c.ZP)(ea);
    a.useEffect(() => {
        let e = J.current;
        if (null == es || null == e) return;
        let t = es - 78;
        e.textContent = ea;
        let n = e.getBoundingClientRect().width;
        if (n <= t) ei(ea);
        else {
            let e = n / ea.length,
                l = Math.floor((t - 3 * e) / e);
            ei(''.concat(ea.substring(0, l)).concat('...'));
        }
    }, [es, ea]),
        a.useEffect(() => {
            b.default.track(E.rMx.OPEN_MODAL, {
                type: m.Z.CUSTOM_STATUS_MODAL,
                location_stack: Z
            });
        }, [Z]),
        (0, d.ZP)(() => {
            var e, t;
            null == (e = $.current) || e.focus(), null == (t = $.current) || t.setSelection(H.length, H.length);
        });
    let eu = (e) => {
            null != e &&
                G(
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
        ec = () => {
            (0, x.Z)({
                text: H,
                emojiInfo: V,
                clearAfter: q,
                prompt: B,
                customStatusLabel: ee,
                analyticsContext: L
            }),
                A();
        },
        ed = () =>
            null == V
                ? null
                : () =>
                      (0, l.jsx)(u.Z, {
                          className: D.emoji,
                          emojiId: V.id,
                          emojiName: V.name,
                          animated: !!V.animated
                      }),
        em = M ? I.intl.string(I.t.rp0aho) : I.intl.string(I.t.UcdRn5),
        eh = 'custom-status-placeholder-text';
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
                    null != F &&
                        (0, l.jsx)('div', {
                            className: D.profilePreview,
                            children: (0, l.jsx)(N.Z, {
                                user: F,
                                previewText: H,
                                previewEmoji: V,
                                placeHolderText: ea,
                                transitionState: r,
                                label: ee
                            })
                        }),
                    (0, l.jsxs)(s.hjN, {
                        className: D.formGroup,
                        titleClassName: D.customStatusInputTitle,
                        title: em,
                        children: [
                            Y &&
                                (0, l.jsx)('div', {
                                    className: D.labelSelectorContainer,
                                    children: (0, l.jsx)(s.DY3, {
                                        position: 'right',
                                        color: s.FGA.BRAND,
                                        'aria-label': I.intl.string(I.t.y2b7CA),
                                        shouldShow: en,
                                        forceOpen: en && r === s.Dvm.ENTERED,
                                        tooltipClassName: D.labelSelectorTooltip,
                                        text: I.intl.string(I.t.y2b7CA),
                                        children: (0, l.jsx)(y.Z, {
                                            currentValue: ee,
                                            onChange: (e) => {
                                                let t = e === ee ? null : e;
                                                b.default.track(E.rMx.CUSTOM_STATUS_LABEL_CLICKED, {
                                                    previous_label: ee,
                                                    new_label: t,
                                                    location_stack: Z
                                                }),
                                                    et(t),
                                                    el(!1);
                                            }
                                        })
                                    })
                                }),
                            (0, l.jsxs)('div', {
                                className: D.inputContainer,
                                ref: eo,
                                children: [
                                    (0, l.jsx)('span', {
                                        ref: J,
                                        className: D.hiddenPlaceholder,
                                        'aria-hidden': 'true'
                                    }),
                                    (0, l.jsx)('div', {
                                        className: i()(D.emojiButtonContainer, null != ee && D.emojiButtonContainerWithLabel),
                                        children: (0, l.jsx)(s.yRy, {
                                            targetElementRef: Q,
                                            renderPopout: (e) => {
                                                let { closePopout: t } = e;
                                                return (0, l.jsx)(f.Z, {
                                                    closePopout: t,
                                                    onSelectEmoji: (e, n) => {
                                                        eu(e), n && t();
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
                                                            ref: Q,
                                                            active: r,
                                                            className: D.emojiButton,
                                                            tabIndex: 0,
                                                            renderButtonContents: ed()
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
                                            'aria-describedby': eh,
                                            value: H,
                                            maxLength: w.s0,
                                            rows: 1,
                                            showRemainingCharacterCount: !1,
                                            placeholder: er,
                                            onChange: (e) => {
                                                K(e);
                                            },
                                            onKeyDown: (e) => {
                                                'Enter' === e.key && ec();
                                            },
                                            className: i()(D.input, null != ee && D.inputWithLabel),
                                            inputRef: $
                                        },
                                        null != ee ? 'with-label' : 'without-label'
                                    ),
                                    null != ee &&
                                        (0, l.jsx)('div', {
                                            className: D.inputCustomStatusLabelRow,
                                            children: (0, l.jsx)(T.Z, { label: ee })
                                        }),
                                    (0, l.jsx)(s.nn4, {
                                        id: eh,
                                        children: ''.concat(I.intl.string(I.t.EVV6ub), ': ').concat(ea)
                                    }),
                                    (H.length > 0 || null != V) &&
                                        (0, l.jsx)('div', {
                                            className: i()(D.clearButtonWrapper, null != ee && D.buttonContainerWithLabel),
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
                                                    K(''), G(null);
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
                                value: q,
                                options: w.wS.map((e) => ({
                                    value: e,
                                    key: e,
                                    label: (0, v.Z)(e, z)
                                })),
                                onChange: (e) => X(e),
                                optionClassName: D.clearAfterSelectOption,
                                renderOptionLabel: (e) => {
                                    let { value: t } = e;
                                    return (0, l.jsx)('span', {
                                        className: D.clearAfterSelectOptionLabel,
                                        children: (0, _.Z)(t, z)
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
                            onClick: ec,
                            children: I.intl.string(I.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
