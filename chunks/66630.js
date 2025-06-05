n.d(e, { Z: () => Z }), n(388685);
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
    f = n(906732),
    h = n(318766),
    p = n(907040),
    b = n(594174),
    S = n(626135),
    j = n(644540),
    g = n(359588),
    O = n(368326),
    x = n(720449),
    v = n(684269),
    C = n(397416),
    _ = n(745579),
    T = n(74340),
    P = n(166655),
    N = n(676035),
    y = n(346565),
    w = n(562577),
    E = n(926563),
    I = n(875425),
    k = n(981631),
    D = n(185923),
    A = n(388032),
    L = n(782628);
function Z(t) {
    var e, n;
    let { transitionState: a, onClose: Z, sourceAnalyticsContext: R, sourceAnalyticsLocations: B = [], prompt: M = null, showLabelSelectorNewTooltip: U = !1 } = t,
        z = (0, O.p)({ location: 'CustomStatusModalWithPreview' }),
        Y = (0, j.P)({ location: 'CustomStatusModalWithPreview' }),
        F = (0, g.Z)({ location: 'CustomStatusModalWithPreview' }),
        { analyticsLocations: W } = (0, f.ZP)(B, m.Z.CUSTOM_STATUS_MODAL),
        H = (0, o.e7)([b.default], () => {
            var t;
            return null != (t = b.default.getCurrentUser()) ? t : null;
        }),
        K = (0, N.a)(),
        [V, G] = r.useState(null != (e = null == K ? void 0 : K.state) ? e : ''),
        [q, X] = r.useState(null != (n = null == K ? void 0 : K.emoji) ? n : null),
        [Q, $] = r.useState((0, v.Z)()),
        J = r.useRef(null),
        tt = r.useRef(null),
        te = r.useRef(null),
        [tn, tl] = r.useState(null != K && F ? (0, T.Z)(K) : null),
        [tr, ta] = r.useState(U),
        [ti, to] = r.useState(() => (z && null != M ? M.label() : A.intl.string(A.t['xod36+']))),
        [ts, tu] = r.useState(ti),
        { ref: tc, width: td } = (0, c.ZP)(ti);
    r.useEffect(() => {
        let t = te.current;
        if (null == td || null == t) return;
        let e = td - 78;
        t.textContent = ti;
        let n = t.getBoundingClientRect().width;
        if (n <= e) tu(ti);
        else {
            let t = n / ti.length,
                l = Math.floor((e - 3 * t) / t);
            tu(''.concat(ti.substring(0, l)).concat('...'));
        }
    }, [td, ti]),
        r.useEffect(() => {
            S.default.track(k.rMx.OPEN_MODAL, {
                type: m.Z.CUSTOM_STATUS_MODAL,
                location_stack: W
            });
        }, [W]),
        (0, d.ZP)(() => {
            var t, e;
            null == (t = J.current) || t.focus(), null == (e = J.current) || e.setSelection(V.length, V.length);
        });
    let tm = (t) => {
            null != t &&
                X(
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
        tf = () => {
            (0, x.Z)({
                text: V,
                emojiInfo: q,
                clearAfter: Q,
                prompt: M,
                customStatusLabel: tn,
                analyticsLocations: W,
                analyticsContext: R
            }),
                Z();
        },
        th = () =>
            null == q
                ? null
                : () =>
                      (0, l.jsx)(u.Z, {
                          className: L.emoji,
                          emojiId: q.id,
                          emojiName: q.name,
                          animated: !!q.animated
                      }),
        tp = z ? A.intl.string(A.t.rp0aho) : A.intl.string(A.t.UcdRn5),
        tb = 'custom-status-placeholder-text';
    return (0, l.jsxs)(s.Y0X, {
        transitionState: a,
        parentComponent: 'CustomStatusModalWithPreview',
        children: [
            (0, l.jsxs)(s.xBx, {
                separator: !1,
                className: L.header,
                children: [
                    (0, l.jsx)('div', {
                        className: L.headerTitle,
                        children: (0, l.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            children: A.intl.string(A.t.Zx4jzM)
                        })
                    }),
                    (0, l.jsx)('div', {
                        className: L.headerCloseButton,
                        children: (0, l.jsx)(s.olH, { onClick: Z })
                    })
                ]
            }),
            (0, l.jsxs)(s.hzk, {
                children: [
                    null != H &&
                        (0, l.jsx)('div', {
                            className: L.profilePreview,
                            children: (0, l.jsx)(E.Z, {
                                user: H,
                                previewText: V,
                                previewEmoji: q,
                                placeHolderText: ti,
                                transitionState: a,
                                label: tn
                            })
                        }),
                    (0, l.jsxs)(s.hjN, {
                        className: L.formGroup,
                        titleClassName: L.customStatusInputTitle,
                        title: tp,
                        children: [
                            F &&
                                (0, l.jsx)('div', {
                                    className: L.labelSelectorContainer,
                                    children: (0, l.jsx)(s.DY3, {
                                        position: 'right',
                                        color: s.FGA.BRAND,
                                        'aria-label': A.intl.string(A.t.y2b7CA),
                                        shouldShow: tr,
                                        forceOpen: tr && a === s.Dvm.ENTERED,
                                        tooltipClassName: L.labelSelectorTooltip,
                                        text: A.intl.string(A.t.y2b7CA),
                                        children: (0, l.jsx)(w.Z, {
                                            currentValue: tn,
                                            onChange: (t) => {
                                                let e = t === tn ? null : t;
                                                S.default.track(k.rMx.CUSTOM_STATUS_LABEL_CLICKED, {
                                                    previous_label: tn,
                                                    new_label: e,
                                                    location_stack: B
                                                }),
                                                    tl(e),
                                                    ta(!1),
                                                    null != e && to((0, P.Z)(e));
                                            }
                                        })
                                    })
                                }),
                            (0, l.jsxs)('div', {
                                className: L.inputContainer,
                                ref: tc,
                                children: [
                                    (0, l.jsx)('span', {
                                        ref: te,
                                        className: L.hiddenPlaceholder,
                                        'aria-hidden': 'true'
                                    }),
                                    (0, l.jsx)('div', {
                                        className: i()(L.emojiButtonContainer, null != tn && L.emojiButtonContainerWithLabel),
                                        children: (0, l.jsx)(s.yRy, {
                                            targetElementRef: tt,
                                            renderPopout: (t) => {
                                                let { closePopout: e } = t;
                                                return (0, l.jsx)(p.Z, {
                                                    closePopout: e,
                                                    onSelectEmoji: (t) => {
                                                        let { emoji: n, willClose: l } = t;
                                                        tm(n), l && e();
                                                    },
                                                    pickerIntention: D.Hz.STATUS,
                                                    onNavigateAway: Z
                                                });
                                            },
                                            position: 'left',
                                            animation: s.yRy.Animation.NONE,
                                            align: 'top',
                                            children: (t, e) => {
                                                var n, r;
                                                let { isShown: a } = e;
                                                return (0, l.jsx)(
                                                    h.Z,
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
                                                            ref: tt,
                                                            active: a,
                                                            className: L.emojiButton,
                                                            tabIndex: 0,
                                                            renderButtonContents: th()
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
                                            'aria-describedby': tb,
                                            value: V,
                                            maxLength: I.s0,
                                            rows: 1,
                                            showRemainingCharacterCount: !1,
                                            placeholder: ts,
                                            onChange: (t) => {
                                                G(t);
                                            },
                                            onKeyDown: (t) => {
                                                'Enter' === t.key && tf();
                                            },
                                            className: i()(L.input, null != tn && L.inputWithLabel),
                                            inputRef: J
                                        },
                                        null != tn ? 'with-label' : 'without-label'
                                    ),
                                    null != tn &&
                                        (0, l.jsx)('div', {
                                            className: L.inputCustomStatusLabelRow,
                                            children: (0, l.jsx)(y.Z, { label: tn })
                                        }),
                                    (0, l.jsx)(s.nn4, {
                                        id: tb,
                                        children: ''.concat(A.intl.string(A.t.EVV6ub), ': ').concat(ti)
                                    }),
                                    (V.length > 0 || null != q) &&
                                        (0, l.jsx)('div', {
                                            className: i()(L.clearButtonWrapper, null != tn && L.buttonContainerWithLabel),
                                            children: (0, l.jsx)(s.zxk, {
                                                focusProps: {
                                                    offset: {
                                                        top: 8,
                                                        bottom: 8,
                                                        left: -2,
                                                        right: -2
                                                    }
                                                },
                                                'aria-label': A.intl.string(A.t.wfYTHR),
                                                className: L.clearButton,
                                                onClick: () => {
                                                    G(''), X(null);
                                                },
                                                look: s.zxk.Looks.BLANK,
                                                size: s.zxk.Sizes.NONE,
                                                children: (0, l.jsx)(s.k$p, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: L.clearIcon
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
                    className: L.footer,
                    children: [
                        (0, l.jsx)('div', {
                            className: L.clearAfterSelectContainer,
                            children: (0, l.jsx)(s.q4e, {
                                maxVisibleItems: I.wS.length,
                                value: Q,
                                options: I.wS.map((t) => ({
                                    value: t,
                                    key: t,
                                    label: (0, C.Z)(t, Y)
                                })),
                                onChange: (t) => $(t),
                                optionClassName: L.clearAfterSelectOption,
                                renderOptionLabel: (t) => {
                                    let { value: e } = t;
                                    return (0, l.jsx)('span', {
                                        className: L.clearAfterSelectOptionLabel,
                                        children: (0, _.Z)(e, Y)
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
                            onClick: tf,
                            children: A.intl.string(A.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
