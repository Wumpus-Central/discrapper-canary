n.d(t, { Z: () => L }), n(388685);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
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
    N = n(74340),
    C = n(429467),
    y = n(676035),
    T = n(346565),
    P = n(562577),
    I = n(926563),
    w = n(875425),
    E = n(981631),
    k = n(185923),
    D = n(388032),
    Z = n(782628);
let W = [w.HO.ADD_STATUS, w.HO.WHATS_ON_YOUR_MIND];
function L(e) {
    var t, n;
    let { transitionState: l, onClose: L, sourceAnalyticsContext: B, sourceAnalyticsLocations: A, prompt: R = null } = e,
        M = (0, g.p)({ location: 'CustomStatusModalWithPreview' }),
        U = (0, S.P)({ location: 'CustomStatusModalWithPreview' }),
        z = (0, j.Z)({ location: 'CustomStatusModalWithPreview' }),
        F = (0, o.e7)([p.default], () => {
            var e;
            return null != (e = p.default.getCurrentUser()) ? e : null;
        }),
        Y = (0, y.a)(),
        [H, K] = r.useState(null != (t = null == Y ? void 0 : Y.state) ? t : ''),
        [V, G] = r.useState(null != (n = null == Y ? void 0 : Y.emoji) ? n : null),
        [q, X] = r.useState((0, v.Z)()),
        $ = r.useRef(null),
        Q = r.useRef(null),
        J = r.useRef(null),
        [ee, et] = r.useState(null != R ? R : null),
        [en, ea] = r.useState(null != Y && z ? (0, N.Z)(Y) : null),
        er = H.length > 0 || null != V,
        el = M && null != ee ? ee.label() : D.NW.string(D.t['xod36+']),
        [ei, eo] = r.useState(el),
        { ref: es, width: eu } = (0, c.ZP)(el);
    r.useEffect(() => {
        let e = J.current;
        if (null == eu || null == e) return;
        let t = eu - 78;
        e.textContent = el;
        let n = e.getBoundingClientRect().width;
        if (n <= t) eo(el);
        else {
            let e = n / el.length,
                a = Math.floor((t - 3 * e) / e);
            eo(''.concat(el.substring(0, a)).concat('...'));
        }
    }, [eu, el]),
        r.useEffect(() => {
            b.default.track(E.rMx.OPEN_MODAL, {
                type: m.Z.CUSTOM_STATUS_MODAL,
                location_stack: A
            });
        }, [A]),
        (0, d.ZP)(() => {
            var e, t;
            null == (e = $.current) || e.focus(), null == (t = $.current) || t.setSelection(H.length, H.length);
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
                text: H,
                emojiInfo: V,
                clearAfter: q,
                analyticsContext: B,
                prompt: ee,
                customStatusLabel: en
            }),
                L();
        },
        em = () =>
            null == V
                ? null
                : () =>
                      (0, a.jsx)(u.Z, {
                          className: Z.emoji,
                          emojiId: V.id,
                          emojiName: V.name,
                          animated: !!V.animated
                      }),
        ef = M ? D.NW.string(D.t.rp0aho) : D.NW.string(D.t.UcdRn5),
        eh = 'custom-status-placeholder-text';
    return (0, a.jsxs)(s.Y0X, {
        transitionState: l,
        children: [
            (0, a.jsxs)(s.xBx, {
                separator: !1,
                className: Z.header,
                children: [
                    (0, a.jsx)('div', {
                        className: Z.headerTitle,
                        children: (0, a.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            children: D.NW.string(D.t.Zx4jzM)
                        })
                    }),
                    (0, a.jsx)('div', {
                        className: Z.headerCloseButton,
                        children: (0, a.jsx)(s.olH, { onClick: L })
                    })
                ]
            }),
            (0, a.jsxs)(s.hzk, {
                children: [
                    null != F &&
                        (0, a.jsx)('div', {
                            className: Z.profilePreview,
                            children: (0, a.jsx)(I.Z, {
                                user: F,
                                previewText: H,
                                previewEmoji: V,
                                placeHolderText: el,
                                transitionState: l,
                                label: en
                            })
                        }),
                    (0, a.jsxs)(s.hjN, {
                        className: Z.formGroup,
                        titleClassName: Z.customStatusInputTitle,
                        title: ef,
                        children: [
                            z &&
                                (0, a.jsx)('div', {
                                    className: Z.labelSelectorContainer,
                                    children: (0, a.jsx)(P.Z, {
                                        currentValue: en,
                                        onChange: (e) => {
                                            let t = e === en ? null : e;
                                            b.default.track(E.rMx.CUSTOM_STATUS_LABEL_CLICKED, {
                                                previous_label: en,
                                                new_label: t,
                                                location_stack: A
                                            }),
                                                ea(t);
                                        }
                                    })
                                }),
                            (0, a.jsxs)('div', {
                                className: Z.inputContainer,
                                ref: es,
                                children: [
                                    (0, a.jsx)('span', {
                                        ref: J,
                                        className: Z.hiddenPlaceholder,
                                        'aria-hidden': 'true'
                                    }),
                                    (0, a.jsx)('div', {
                                        className: i()(Z.emojiButtonContainer, null != en && Z.emojiButtonContainerWithLabel),
                                        children: (0, a.jsx)(s.yRy, {
                                            targetElementRef: Q,
                                            renderPopout: (e) => {
                                                let { closePopout: t } = e;
                                                return (0, a.jsx)(h.Z, {
                                                    closePopout: t,
                                                    onSelectEmoji: (e, n) => {
                                                        ec(e), n && t();
                                                    },
                                                    pickerIntention: k.Hz.STATUS,
                                                    onNavigateAway: L
                                                });
                                            },
                                            position: 'left',
                                            animation: s.yRy.Animation.NONE,
                                            align: 'top',
                                            children: (e, t) => {
                                                var n, r;
                                                let { isShown: l } = t;
                                                return (0, a.jsx)(
                                                    f.Z,
                                                    ((n = (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                a = Object.keys(n);
                                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                                (a = a.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                    })
                                                                )),
                                                                a.forEach(function (t) {
                                                                    var a;
                                                                    (a = n[t]),
                                                                        t in e
                                                                            ? Object.defineProperty(e, t, {
                                                                                  value: a,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0
                                                                              })
                                                                            : (e[t] = a);
                                                                });
                                                        }
                                                        return e;
                                                    })({}, e)),
                                                    (r = r =
                                                        {
                                                            ref: Q,
                                                            active: l,
                                                            className: Z.emojiButton,
                                                            tabIndex: 0,
                                                            renderButtonContents: em()
                                                        }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                                        : (function (e, t) {
                                                              var n = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var a = Object.getOwnPropertySymbols(e);
                                                                  n.push.apply(n, a);
                                                              }
                                                              return n;
                                                          })(Object(r)).forEach(function (e) {
                                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                                          }),
                                                    n)
                                                );
                                            }
                                        })
                                    }),
                                    (0, a.jsx)(
                                        s.Kx8,
                                        {
                                            autosize: !0,
                                            'aria-describedby': eh,
                                            value: H,
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
                                        (0, a.jsx)('div', {
                                            className: Z.inputCustomStatusLabelRow,
                                            children: (0, a.jsx)(T.Z, { label: en })
                                        }),
                                    (0, a.jsx)(s.nn4, {
                                        id: eh,
                                        children: ''.concat(D.NW.string(D.t.EVV6ub), ': ').concat(el)
                                    }),
                                    (H.length > 0 || null != V) &&
                                        (0, a.jsx)('div', {
                                            className: i()(Z.clearButtonWrapper, null != en && Z.buttonContainerWithLabel),
                                            children: (0, a.jsx)(s.zxk, {
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
                                                children: (0, a.jsx)(s.k$p, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: Z.clearIcon
                                                })
                                            })
                                        })
                                ]
                            }),
                            M &&
                                (0, a.jsxs)(s.P3F, {
                                    ignoreKeyPress: er,
                                    'aria-disabled': er,
                                    className: i()(Z.needInspiration, er && Z.needInspirationDisabled),
                                    onClick: er
                                        ? void 0
                                        : () => {
                                              let e = (0, C.Z)((null == ee ? void 0 : ee.value) != null ? new Set([ee.value, ...W]) : void 0);
                                              b.default.track(E.rMx.CUSTOM_STATUS_RANDOMIZER_CLICKED, {
                                                  previous_prompt_type: null == ee ? void 0 : ee.value,
                                                  new_prompt_type: null == e ? void 0 : e.value,
                                                  location_stack: A
                                              }),
                                                  K(''),
                                                  et(e),
                                                  null != e && s.uvj.announce(e.label());
                                          },
                                    children: [
                                        (0, a.jsx)(s.$2U, { size: 'xs' }),
                                        (0, a.jsx)(s.Text, {
                                            variant: 'text-xs/medium',
                                            children: D.NW.string(D.t.UH6ieX)
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            }),
            (0, a.jsx)(s.mzw, {
                children: (0, a.jsxs)('div', {
                    className: Z.footer,
                    children: [
                        (0, a.jsx)('div', {
                            className: Z.clearAfterSelectContainer,
                            children: (0, a.jsx)(s.q4e, {
                                maxVisibleItems: w.wS.length,
                                value: q,
                                options: w.wS.map((e) => ({
                                    value: e,
                                    key: e,
                                    label: (0, _.Z)(e, U)
                                })),
                                onChange: (e) => X(e),
                                renderOptionLabel: (e) => {
                                    let { value: t } = e;
                                    return (0, O.Z)(t, U);
                                },
                                look: s.qQH.CUSTOM,
                                popoutWidth: 200,
                                popoutPosition: 'right'
                            })
                        }),
                        (0, a.jsx)(s.zxk, {
                            type: 'submit',
                            size: s.zxk.Sizes.MEDIUM,
                            color: s.zxk.Colors.BRAND,
                            onClick: ed,
                            children: D.NW.string(D.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
