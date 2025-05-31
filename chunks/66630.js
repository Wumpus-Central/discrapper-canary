n.d(e, { Z: () => L }), n(388685);
var l = n(255367),
    r = n(73800),
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
    b = n(594174),
    p = n(626135),
    S = n(644540),
    j = n(359588),
    g = n(368326),
    O = n(720449),
    x = n(684269),
    v = n(397416),
    C = n(745579),
    _ = n(74340),
    N = n(166655),
    P = n(676035),
    T = n(346565),
    y = n(562577),
    w = n(926563),
    E = n(875425),
    I = n(981631),
    k = n(185923),
    D = n(388032),
    A = n(782628);
function L(t) {
    var e, n;
    let { transitionState: a, onClose: L, sourceAnalyticsContext: Z, sourceAnalyticsLocations: R, prompt: B = null, showLabelSelectorNewTooltip: M = !1 } = t,
        U = (0, g.p)({ location: 'CustomStatusModalWithPreview' }),
        z = (0, S.P)({ location: 'CustomStatusModalWithPreview' }),
        Y = (0, j.Z)({ location: 'CustomStatusModalWithPreview' }),
        F = (0, o.e7)([b.default], () => {
            var t;
            return null != (t = b.default.getCurrentUser()) ? t : null;
        }),
        W = (0, P.a)(),
        [H, K] = r.useState(null != (e = null == W ? void 0 : W.state) ? e : ''),
        [V, G] = r.useState(null != (n = null == W ? void 0 : W.emoji) ? n : null),
        [q, X] = r.useState((0, x.Z)()),
        Q = r.useRef(null),
        $ = r.useRef(null),
        J = r.useRef(null),
        [tt, te] = r.useState(null != W && Y ? (0, _.Z)(W) : null),
        [tn, tl] = r.useState(M),
        [tr, ta] = r.useState(() => (U && null != B ? B.label() : D.intl.string(D.t['xod36+']))),
        [ti, to] = r.useState(tr),
        { ref: ts, width: tu } = (0, c.ZP)(tr);
    r.useEffect(() => {
        let t = J.current;
        if (null == tu || null == t) return;
        let e = tu - 78;
        t.textContent = tr;
        let n = t.getBoundingClientRect().width;
        if (n <= e) to(tr);
        else {
            let t = n / tr.length,
                l = Math.floor((e - 3 * t) / t);
            to(''.concat(tr.substring(0, l)).concat('...'));
        }
    }, [tu, tr]),
        r.useEffect(() => {
            p.default.track(I.rMx.OPEN_MODAL, {
                type: m.Z.CUSTOM_STATUS_MODAL,
                location_stack: R
            });
        }, [R]),
        (0, d.ZP)(() => {
            var t, e;
            null == (t = Q.current) || t.focus(), null == (e = Q.current) || e.setSelection(H.length, H.length);
        });
    let tc = (t) => {
            null != t &&
                G(
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
        td = () => {
            (0, O.Z)({
                text: H,
                emojiInfo: V,
                clearAfter: q,
                prompt: B,
                customStatusLabel: tt,
                analyticsContext: Z
            }),
                L();
        },
        tm = () =>
            null == V
                ? null
                : () =>
                      (0, l.jsx)(u.Z, {
                          className: A.emoji,
                          emojiId: V.id,
                          emojiName: V.name,
                          animated: !!V.animated
                      }),
        tf = U ? D.intl.string(D.t.rp0aho) : D.intl.string(D.t.UcdRn5),
        th = 'custom-status-placeholder-text';
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
                    null != F &&
                        (0, l.jsx)('div', {
                            className: A.profilePreview,
                            children: (0, l.jsx)(w.Z, {
                                user: F,
                                previewText: H,
                                previewEmoji: V,
                                placeHolderText: tr,
                                transitionState: a,
                                label: tt
                            })
                        }),
                    (0, l.jsxs)(s.hjN, {
                        className: A.formGroup,
                        titleClassName: A.customStatusInputTitle,
                        title: tf,
                        children: [
                            Y &&
                                (0, l.jsx)('div', {
                                    className: A.labelSelectorContainer,
                                    children: (0, l.jsx)(s.DY3, {
                                        position: 'right',
                                        color: s.FGA.BRAND,
                                        'aria-label': D.intl.string(D.t.y2b7CA),
                                        shouldShow: tn,
                                        forceOpen: tn && a === s.Dvm.ENTERED,
                                        tooltipClassName: A.labelSelectorTooltip,
                                        text: D.intl.string(D.t.y2b7CA),
                                        children: (0, l.jsx)(y.Z, {
                                            currentValue: tt,
                                            onChange: (t) => {
                                                let e = t === tt ? null : t;
                                                p.default.track(I.rMx.CUSTOM_STATUS_LABEL_CLICKED, {
                                                    previous_label: tt,
                                                    new_label: e,
                                                    location_stack: R
                                                }),
                                                    te(e),
                                                    tl(!1),
                                                    null != e && ta((0, N.Z)(e));
                                            }
                                        })
                                    })
                                }),
                            (0, l.jsxs)('div', {
                                className: A.inputContainer,
                                ref: ts,
                                children: [
                                    (0, l.jsx)('span', {
                                        ref: J,
                                        className: A.hiddenPlaceholder,
                                        'aria-hidden': 'true'
                                    }),
                                    (0, l.jsx)('div', {
                                        className: i()(A.emojiButtonContainer, null != tt && A.emojiButtonContainerWithLabel),
                                        children: (0, l.jsx)(s.yRy, {
                                            targetElementRef: $,
                                            renderPopout: (t) => {
                                                let { closePopout: e } = t;
                                                return (0, l.jsx)(h.Z, {
                                                    closePopout: e,
                                                    onSelectEmoji: (t) => {
                                                        let { emoji: n, willClose: l } = t;
                                                        tc(n), l && e();
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
                                                            ref: $,
                                                            active: a,
                                                            className: A.emojiButton,
                                                            tabIndex: 0,
                                                            renderButtonContents: tm()
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
                                            'aria-describedby': th,
                                            value: H,
                                            maxLength: E.s0,
                                            rows: 1,
                                            showRemainingCharacterCount: !1,
                                            placeholder: ti,
                                            onChange: (t) => {
                                                K(t);
                                            },
                                            onKeyDown: (t) => {
                                                'Enter' === t.key && td();
                                            },
                                            className: i()(A.input, null != tt && A.inputWithLabel),
                                            inputRef: Q
                                        },
                                        null != tt ? 'with-label' : 'without-label'
                                    ),
                                    null != tt &&
                                        (0, l.jsx)('div', {
                                            className: A.inputCustomStatusLabelRow,
                                            children: (0, l.jsx)(T.Z, { label: tt })
                                        }),
                                    (0, l.jsx)(s.nn4, {
                                        id: th,
                                        children: ''.concat(D.intl.string(D.t.EVV6ub), ': ').concat(tr)
                                    }),
                                    (H.length > 0 || null != V) &&
                                        (0, l.jsx)('div', {
                                            className: i()(A.clearButtonWrapper, null != tt && A.buttonContainerWithLabel),
                                            children: (0, l.jsx)(s.zxk, {
                                                focusProps: {
                                                    offset: {
                                                        top: 8,
                                                        bottom: 8,
                                                        left: -2,
                                                        right: -2
                                                    }
                                                },
                                                'aria-label': D.intl.string(D.t.wfYTHR),
                                                className: A.clearButton,
                                                onClick: () => {
                                                    K(''), G(null);
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
                                value: q,
                                options: E.wS.map((t) => ({
                                    value: t,
                                    key: t,
                                    label: (0, v.Z)(t, z)
                                })),
                                onChange: (t) => X(t),
                                optionClassName: A.clearAfterSelectOption,
                                renderOptionLabel: (t) => {
                                    let { value: e } = t;
                                    return (0, l.jsx)('span', {
                                        className: A.clearAfterSelectOptionLabel,
                                        children: (0, C.Z)(e, z)
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
                            onClick: td,
                            children: D.intl.string(D.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
