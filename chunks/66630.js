n.d(e, { Z: () => L }), n(388685);
var l = n(200651),
    r = n(192379),
    a = n(120356),
    i = n.n(a),
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
    O = n(684269),
    v = n(397416),
    C = n(745579),
    _ = n(74340),
    P = n(166655),
    T = n(676035),
    N = n(346565),
    y = n(562577),
    w = n(926563),
    E = n(875425),
    I = n(981631),
    k = n(185923),
    D = n(388032),
    A = n(782628);
function L(t) {
    var e, n;
    let { transitionState: a, onClose: L, sourceAnalyticsContext: Z, sourceAnalyticsLocations: B, prompt: R = null, label: U = null, showLabelSelectorNewTooltip: M = !1 } = t,
        z = (0, g.p)({ location: 'CustomStatusModalWithPreview' }),
        Y = (0, S.P)({ location: 'CustomStatusModalWithPreview' }),
        F = (0, j.Z)({ location: 'CustomStatusModalWithPreview' }),
        W = (0, o.e7)([p.default], () => {
            var t;
            return null != (t = p.default.getCurrentUser()) ? t : null;
        }),
        H = (0, T.a)(),
        [V, K] = r.useState(null != (e = null == H ? void 0 : H.state) ? e : ''),
        [G, q] = r.useState(null != (n = null == H ? void 0 : H.emoji) ? n : null),
        [X, $] = r.useState((0, O.Z)()),
        J = r.useRef(null),
        Q = r.useRef(null),
        tt = r.useRef(null),
        [te, tn] = r.useState(null != H && F && null == U ? (0, _.Z)(H) : U),
        [tl, tr] = r.useState(M),
        [ta, ti] = r.useState(() => (null != U ? (0, P.Z)(U) : z && null != R ? R.label() : D.intl.string(D.t['xod36+']))),
        [to, ts] = r.useState(ta),
        { ref: tu, width: tc } = (0, c.ZP)(ta);
    r.useEffect(() => {
        let t = tt.current;
        if (null == tc || null == t) return;
        let e = tc - 78;
        t.textContent = ta;
        let n = t.getBoundingClientRect().width;
        if (n <= e) ts(ta);
        else {
            let t = n / ta.length,
                l = Math.floor((e - 3 * t) / t);
            ts(''.concat(ta.substring(0, l)).concat('...'));
        }
    }, [tc, ta]),
        r.useEffect(() => {
            b.default.track(I.rMx.OPEN_MODAL, {
                type: m.Z.CUSTOM_STATUS_MODAL,
                location_stack: B
            });
        }, [B]),
        (0, d.ZP)(() => {
            var t, e;
            null == (t = J.current) || t.focus(), null == (e = J.current) || e.setSelection(V.length, V.length);
        });
    let td = (t) => {
            null != t &&
                q(
                    null != t.id
                        ? {
                              id: t.id,
                              name: t.name,
                              animated: t.animated
                          }
                        : {
                              id: null,
                              name: t.optionallyDiverseSequence,
                              animated: !1
                          }
                );
        },
        tm = () => {
            (0, x.Z)({
                text: V,
                emojiInfo: G,
                clearAfter: X,
                prompt: R,
                customStatusLabel: te,
                analyticsContext: Z
            }),
                L();
        },
        tf = () =>
            null == G
                ? null
                : () =>
                      (0, l.jsx)(u.Z, {
                          className: A.emoji,
                          emojiId: G.id,
                          emojiName: G.name,
                          animated: !!G.animated
                      }),
        th = z ? D.intl.string(D.t.rp0aho) : D.intl.string(D.t.UcdRn5),
        tp = 'custom-status-placeholder-text';
    return (0, l.jsxs)(s.Y0X, {
        transitionState: a,
        children: [
            (0, l.jsxs)(s.xBx, {
                separator: !1,
                className: A.header,
                children: [
                    (0, l.jsx)('div', {
                        className: A.headerTitle,
                        children: (0, l.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            children: D.intl.string(D.t.Zx4jzM)
                        })
                    }),
                    (0, l.jsx)('div', {
                        className: A.headerCloseButton,
                        children: (0, l.jsx)(s.olH, { onClick: L })
                    })
                ]
            }),
            (0, l.jsxs)(s.hzk, {
                children: [
                    null != W &&
                        (0, l.jsx)('div', {
                            className: A.profilePreview,
                            children: (0, l.jsx)(w.Z, {
                                user: W,
                                previewText: V,
                                previewEmoji: G,
                                placeHolderText: ta,
                                transitionState: a,
                                label: te
                            })
                        }),
                    (0, l.jsxs)(s.hjN, {
                        className: A.formGroup,
                        titleClassName: A.customStatusInputTitle,
                        title: th,
                        children: [
                            F &&
                                (0, l.jsx)('div', {
                                    className: A.labelSelectorContainer,
                                    children: (0, l.jsx)(s.DY3, {
                                        position: 'right',
                                        color: s.FGA.BRAND,
                                        'aria-label': D.intl.string(D.t.y2b7CA),
                                        shouldShow: tl,
                                        forceOpen: tl && a === s.Dvm.ENTERED,
                                        tooltipClassName: A.labelSelectorTooltip,
                                        text: D.intl.string(D.t.y2b7CA),
                                        children: (0, l.jsx)(y.Z, {
                                            currentValue: te,
                                            onChange: (t) => {
                                                let e = t === te ? null : t;
                                                b.default.track(I.rMx.CUSTOM_STATUS_LABEL_CLICKED, {
                                                    previous_label: te,
                                                    new_label: e,
                                                    location_stack: B
                                                }),
                                                    tn(e),
                                                    tr(!1),
                                                    null != e && ti((0, P.Z)(e));
                                            }
                                        })
                                    })
                                }),
                            (0, l.jsxs)('div', {
                                className: A.inputContainer,
                                ref: tu,
                                children: [
                                    (0, l.jsx)('span', {
                                        ref: tt,
                                        className: A.hiddenPlaceholder,
                                        'aria-hidden': 'true'
                                    }),
                                    (0, l.jsx)('div', {
                                        className: i()(A.emojiButtonContainer, null != te && A.emojiButtonContainerWithLabel),
                                        children: (0, l.jsx)(s.yRy, {
                                            targetElementRef: Q,
                                            renderPopout: (t) => {
                                                let { closePopout: e } = t;
                                                return (0, l.jsx)(h.Z, {
                                                    closePopout: e,
                                                    onSelectEmoji: (t, n) => {
                                                        td(t), n && e();
                                                    },
                                                    pickerIntention: k.Hz.STATUS,
                                                    onNavigateAway: L
                                                });
                                            },
                                            position: 'left',
                                            animation: s.yRy.Animation.NONE,
                                            align: 'top',
                                            children: (t, e) => {
                                                var n, r;
                                                let { isShown: a } = e;
                                                return (0, l.jsx)(
                                                    f.Z,
                                                    ((n = (function (t) {
                                                        for (var e = 1; e < arguments.length; e++) {
                                                            var n = null != arguments[e] ? arguments[e] : {},
                                                                l = Object.keys(n);
                                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                                (l = l.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                                    })
                                                                )),
                                                                l.forEach(function (e) {
                                                                    var l;
                                                                    (l = n[e]),
                                                                        e in t
                                                                            ? Object.defineProperty(t, e, {
                                                                                  value: l,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0
                                                                              })
                                                                            : (t[e] = l);
                                                                });
                                                        }
                                                        return t;
                                                    })({}, t)),
                                                    (r = r =
                                                        {
                                                            ref: Q,
                                                            active: a,
                                                            className: A.emojiButton,
                                                            tabIndex: 0,
                                                            renderButtonContents: tf()
                                                        }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                                        : (function (t, e) {
                                                              var n = Object.keys(t);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var l = Object.getOwnPropertySymbols(t);
                                                                  n.push.apply(n, l);
                                                              }
                                                              return n;
                                                          })(Object(r)).forEach(function (t) {
                                                              Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(r, t));
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
                                            'aria-describedby': tp,
                                            value: V,
                                            maxLength: E.s0,
                                            rows: 1,
                                            showRemainingCharacterCount: !1,
                                            placeholder: to,
                                            onChange: (t) => {
                                                K(t);
                                            },
                                            onKeyDown: (t) => {
                                                'Enter' === t.key && tm();
                                            },
                                            className: i()(A.input, null != te && A.inputWithLabel),
                                            inputRef: J
                                        },
                                        null != te ? 'with-label' : 'without-label'
                                    ),
                                    null != te &&
                                        (0, l.jsx)('div', {
                                            className: A.inputCustomStatusLabelRow,
                                            children: (0, l.jsx)(N.Z, { label: te })
                                        }),
                                    (0, l.jsx)(s.nn4, {
                                        id: tp,
                                        children: ''.concat(D.intl.string(D.t.EVV6ub), ': ').concat(ta)
                                    }),
                                    (V.length > 0 || null != G) &&
                                        (0, l.jsx)('div', {
                                            className: i()(A.clearButtonWrapper, null != te && A.buttonContainerWithLabel),
                                            children: (0, l.jsx)(s.zxk, {
                                                focusProps: {
                                                    offset: {
                                                        top: 8,
                                                        bottom: 8,
                                                        left: -2,
                                                        right: -2
                                                    }
                                                },
                                                className: A.clearButton,
                                                onClick: () => {
                                                    K(''), q(null);
                                                },
                                                look: s.zxk.Looks.BLANK,
                                                size: s.zxk.Sizes.NONE,
                                                children: (0, l.jsx)(s.k$p, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: A.clearIcon
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
                    className: A.footer,
                    children: [
                        (0, l.jsx)('div', {
                            className: A.clearAfterSelectContainer,
                            children: (0, l.jsx)(s.q4e, {
                                maxVisibleItems: E.wS.length,
                                value: X,
                                options: E.wS.map((t) => ({
                                    value: t,
                                    key: t,
                                    label: (0, v.Z)(t, Y)
                                })),
                                onChange: (t) => $(t),
                                optionClassName: A.clearAfterSelectOption,
                                renderOptionLabel: (t) => {
                                    let { value: e } = t;
                                    return (0, l.jsx)('span', {
                                        className: A.clearAfterSelectOptionLabel,
                                        children: (0, C.Z)(e, Y)
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
                            onClick: tm,
                            children: D.intl.string(D.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
