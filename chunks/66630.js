n.d(t, { Z: () => B }), n(388685);
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
    f = n(318766),
    h = n(907040),
    p = n(594174),
    b = n(626135),
    S = n(644540),
    j = n(359588),
    g = n(368326),
    x = n(720449),
    v = n(684269),
    _ = n(397416),
    O = n(745579),
    C = n(74340),
    y = n(429467),
    T = n(676035),
    N = n(346565),
    P = n(562577),
    I = n(926563),
    w = n(875425),
    E = n(981631),
    k = n(185923),
    D = n(388032),
    Z = n(782628);
let L = [w.HO.ADD_STATUS, w.HO.WHATS_ON_YOUR_MIND];
function B(e) {
    var t, n;
    let { transitionState: r, onClose: B, sourceAnalyticsContext: A, sourceAnalyticsLocations: R, prompt: M = null } = e,
        U = (0, g.p)({ location: 'CustomStatusModalWithPreview' }),
        z = (0, S.P)({ location: 'CustomStatusModalWithPreview' }),
        F = (0, j.Z)({ location: 'CustomStatusModalWithPreview' }),
        Y = (0, o.e7)([p.default], () => {
            var e;
            return null != (e = p.default.getCurrentUser()) ? e : null;
        }),
        H = (0, T.a)(),
        [W, K] = a.useState(null != (t = null == H ? void 0 : H.state) ? t : ''),
        [V, G] = a.useState(null != (n = null == H ? void 0 : H.emoji) ? n : null),
        [q, X] = a.useState((0, v.Z)()),
        $ = a.useRef(null),
        Q = a.useRef(null),
        J = a.useRef(null),
        [ee, et] = a.useState(null != M ? M : null),
        [en, el] = a.useState(null != H && F ? (0, C.Z)(H) : null),
        ea = W.length > 0 || null != V,
        er = U && null != ee ? ee.label() : D.intl.string(D.t['xod36+']),
        [ei, eo] = a.useState(er),
        { ref: es, width: eu } = (0, c.ZP)(er);
    a.useEffect(() => {
        let e = J.current;
        if (null == eu || null == e) return;
        let t = eu - 78;
        e.textContent = er;
        let n = e.getBoundingClientRect().width;
        if (n <= t) eo(er);
        else {
            let e = n / er.length,
                l = Math.floor((t - 3 * e) / e);
            eo(''.concat(er.substring(0, l)).concat('...'));
        }
    }, [eu, er]),
        a.useEffect(() => {
            b.default.track(E.rMx.OPEN_MODAL, {
                type: m.Z.CUSTOM_STATUS_MODAL,
                location_stack: R
            });
        }, [R]),
        (0, d.ZP)(() => {
            var e, t;
            null == (e = $.current) || e.focus(), null == (t = $.current) || t.setSelection(W.length, W.length);
        });
    let ec = (e) => {
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
        ed = () => {
            (0, x.Z)({
                text: W,
                emojiInfo: V,
                clearAfter: q,
                analyticsContext: A,
                prompt: ee,
                customStatusLabel: en
            }),
                B();
        },
        em = () =>
            null == V
                ? null
                : () =>
                      (0, l.jsx)(u.Z, {
                          className: Z.emoji,
                          emojiId: V.id,
                          emojiName: V.name,
                          animated: !!V.animated
                      }),
        ef = U ? D.intl.string(D.t.rp0aho) : D.intl.string(D.t.UcdRn5),
        eh = 'custom-status-placeholder-text';
    return (0, l.jsxs)(s.Y0X, {
        transitionState: r,
        children: [
            (0, l.jsxs)(s.xBx, {
                separator: !1,
                className: Z.header,
                children: [
                    (0, l.jsx)('div', {
                        className: Z.headerTitle,
                        children: (0, l.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            children: D.intl.string(D.t.Zx4jzM)
                        })
                    }),
                    (0, l.jsx)('div', {
                        className: Z.headerCloseButton,
                        children: (0, l.jsx)(s.olH, { onClick: B })
                    })
                ]
            }),
            (0, l.jsxs)(s.hzk, {
                children: [
                    null != Y &&
                        (0, l.jsx)('div', {
                            className: Z.profilePreview,
                            children: (0, l.jsx)(I.Z, {
                                user: Y,
                                previewText: W,
                                previewEmoji: V,
                                placeHolderText: er,
                                transitionState: r,
                                label: en
                            })
                        }),
                    (0, l.jsxs)(s.hjN, {
                        className: Z.formGroup,
                        titleClassName: Z.customStatusInputTitle,
                        title: ef,
                        children: [
                            F &&
                                (0, l.jsx)('div', {
                                    className: Z.labelSelectorContainer,
                                    children: (0, l.jsx)(P.Z, {
                                        currentValue: en,
                                        onChange: (e) => {
                                            let t = e === en ? null : e;
                                            b.default.track(E.rMx.CUSTOM_STATUS_LABEL_CLICKED, {
                                                previous_label: en,
                                                new_label: t,
                                                location_stack: R
                                            }),
                                                el(t);
                                        }
                                    })
                                }),
                            (0, l.jsxs)('div', {
                                className: Z.inputContainer,
                                ref: es,
                                children: [
                                    (0, l.jsx)('span', {
                                        ref: J,
                                        className: Z.hiddenPlaceholder,
                                        'aria-hidden': 'true'
                                    }),
                                    (0, l.jsx)('div', {
                                        className: i()(Z.emojiButtonContainer, null != en && Z.emojiButtonContainerWithLabel),
                                        children: (0, l.jsx)(s.yRy, {
                                            targetElementRef: Q,
                                            renderPopout: (e) => {
                                                let { closePopout: t } = e;
                                                return (0, l.jsx)(h.Z, {
                                                    closePopout: t,
                                                    onSelectEmoji: (e, n) => {
                                                        ec(e), n && t();
                                                    },
                                                    pickerIntention: k.Hz.STATUS,
                                                    onNavigateAway: B
                                                });
                                            },
                                            position: 'left',
                                            animation: s.yRy.Animation.NONE,
                                            align: 'top',
                                            children: (e, t) => {
                                                var n, a;
                                                let { isShown: r } = t;
                                                return (0, l.jsx)(
                                                    f.Z,
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
                                                            className: Z.emojiButton,
                                                            tabIndex: 0,
                                                            renderButtonContents: em()
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
                                            value: W,
                                            maxLength: w.s0,
                                            rows: 1,
                                            showRemainingCharacterCount: !1,
                                            placeholder: ei,
                                            onChange: (e) => {
                                                K(e);
                                            },
                                            onKeyDown: (e) => {
                                                'Enter' === e.key && ed();
                                            },
                                            className: i()(Z.input, null != en && Z.inputWithLabel),
                                            inputRef: $
                                        },
                                        null != en ? 'with-label' : 'without-label'
                                    ),
                                    null != en &&
                                        (0, l.jsx)('div', {
                                            className: Z.inputCustomStatusLabelRow,
                                            children: (0, l.jsx)(N.Z, { label: en })
                                        }),
                                    (0, l.jsx)(s.nn4, {
                                        id: eh,
                                        children: ''.concat(D.intl.string(D.t.EVV6ub), ': ').concat(er)
                                    }),
                                    (W.length > 0 || null != V) &&
                                        (0, l.jsx)('div', {
                                            className: i()(Z.clearButtonWrapper, null != en && Z.buttonContainerWithLabel),
                                            children: (0, l.jsx)(s.zxk, {
                                                focusProps: {
                                                    offset: {
                                                        top: 8,
                                                        bottom: 8,
                                                        left: -2,
                                                        right: -2
                                                    }
                                                },
                                                className: Z.clearButton,
                                                onClick: () => {
                                                    K(''), G(null);
                                                },
                                                look: s.zxk.Looks.BLANK,
                                                size: s.zxk.Sizes.NONE,
                                                children: (0, l.jsx)(s.k$p, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: Z.clearIcon
                                                })
                                            })
                                        })
                                ]
                            }),
                            U &&
                                (0, l.jsxs)(s.P3F, {
                                    ignoreKeyPress: ea,
                                    'aria-disabled': ea,
                                    className: i()(Z.needInspiration, ea && Z.needInspirationDisabled),
                                    onClick: ea
                                        ? void 0
                                        : () => {
                                              let e = (0, y.Z)((null == ee ? void 0 : ee.value) != null ? new Set([ee.value, ...L]) : void 0);
                                              b.default.track(E.rMx.CUSTOM_STATUS_RANDOMIZER_CLICKED, {
                                                  previous_prompt_type: null == ee ? void 0 : ee.value,
                                                  new_prompt_type: null == e ? void 0 : e.value,
                                                  location_stack: R
                                              }),
                                                  K(''),
                                                  et(e),
                                                  null != e && s.uvj.announce(e.label());
                                          },
                                    children: [
                                        (0, l.jsx)(s.$2U, { size: 'xs' }),
                                        (0, l.jsx)(s.Text, {
                                            variant: 'text-xs/medium',
                                            children: D.intl.string(D.t.UH6ieX)
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            }),
            (0, l.jsx)(s.mzw, {
                children: (0, l.jsxs)('div', {
                    className: Z.footer,
                    children: [
                        (0, l.jsx)('div', {
                            className: Z.clearAfterSelectContainer,
                            children: (0, l.jsx)(s.q4e, {
                                maxVisibleItems: w.wS.length,
                                value: q,
                                options: w.wS.map((e) => ({
                                    value: e,
                                    key: e,
                                    label: (0, _.Z)(e, z)
                                })),
                                onChange: (e) => X(e),
                                renderOptionLabel: (e) => {
                                    let { value: t } = e;
                                    return (0, O.Z)(t, z);
                                },
                                look: s.qQH.CUSTOM,
                                popoutWidth: 200,
                                popoutPosition: 'right'
                            })
                        }),
                        (0, l.jsx)(s.zxk, {
                            type: 'submit',
                            size: s.zxk.Sizes.MEDIUM,
                            color: s.zxk.Colors.BRAND,
                            onClick: ed,
                            children: D.intl.string(D.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
