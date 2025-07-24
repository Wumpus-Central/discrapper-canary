(n.d(e, { Z: () => k }), n(388685));
var l = n(255367),
    a = n(73800),
    r = n(120356),
    i = n.n(r),
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
    y = n(676035),
    w = n(346565),
    N = n(562577),
    E = n(926563),
    D = n(875425),
    I = n(981631),
    Z = n(185923),
    A = n(388032),
    R = n(782628);
let L = 'CLEAR_AFTER';
function k(t) {
    var e, n;
    let { transitionState: r, onClose: k, sourceAnalyticsContext: B, sourceAnalyticsLocations: M = [], prompt: U = null, showLabelSelectorNewTooltip: F = !1 } = t,
        Y = (0, O.p)({ location: 'CustomStatusModalWithPreview' }),
        H = (0, j.P)({ location: 'CustomStatusModalWithPreview' }),
        W = (0, g.Z)({ location: 'CustomStatusModalWithPreview' }),
        { analyticsLocations: z } = (0, f.ZP)(M, m.Z.CUSTOM_STATUS_MODAL),
        V = (0, o.e7)([b.default], () => {
            var t;
            return null != (t = b.default.getCurrentUser()) ? t : null;
        }),
        G = (0, y.a)(),
        [K, q] = a.useState(null != (e = null == G ? void 0 : G.state) ? e : ''),
        [X, Q] = a.useState(null != (n = null == G ? void 0 : G.emoji) ? n : null),
        [$, J] = a.useState((0, v.Z)()),
        tt = a.useRef(null),
        te = a.useRef(null),
        tn = a.useRef(null),
        [tl, ta] = a.useState(null != G && W ? (0, T.Z)(G) : null),
        [tr, ti] = a.useState(F),
        [to, ts] = a.useState(() => (Y && null != U ? U.label() : A.intl.string(A.t['xod36+']))),
        [tu, tc] = a.useState(to),
        { ref: td, width: tm } = (0, c.ZP)(to);
    (a.useEffect(() => {
        let t = tn.current;
        if (null == tm || null == t) return;
        let e = tm - 78;
        t.textContent = to;
        let n = t.getBoundingClientRect().width;
        if (n <= e) tc(to);
        else {
            let t = n / to.length,
                l = Math.floor((e - 3 * t) / t);
            tc(''.concat(to.substring(0, l)).concat('...'));
        }
    }, [tm, to]),
        a.useEffect(() => {
            S.default.track(I.rMx.OPEN_MODAL, {
                type: m.Z.CUSTOM_STATUS_MODAL,
                location_stack: z
            });
        }, [z]),
        (0, d.ZP)(() => {
            var t, e;
            (null == (t = tt.current) || t.focus(), null == (e = tt.current) || e.setSelection(K.length, K.length));
        }));
    let tf = (t) => {
            null != t &&
                Q(
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
        th = () => {
            $ !== L &&
                ((0, x.Z)({
                    text: K,
                    emojiInfo: X,
                    clearAfter: $,
                    prompt: U,
                    customStatusLabel: tl,
                    analyticsLocations: z,
                    analyticsContext: B
                }),
                k());
        },
        tp = () =>
            null == X
                ? null
                : () =>
                      (0, l.jsx)(u.Z, {
                          className: R.emoji,
                          emojiId: X.id,
                          emojiName: X.name,
                          animated: !!X.animated
                      }),
        tb = Y ? A.intl.string(A.t.rp0aho) : A.intl.string(A.t.UcdRn5),
        tS = 'custom-status-placeholder-text';
    return (0, l.jsxs)(s.Y0X, {
        transitionState: r,
        parentComponent: 'CustomStatusModalWithPreview',
        children: [
            (0, l.jsxs)(s.xBx, {
                separator: !1,
                className: R.header,
                children: [
                    (0, l.jsx)('div', {
                        className: R.headerTitle,
                        children: (0, l.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            children: A.intl.string(A.t.Zx4jzM)
                        })
                    }),
                    (0, l.jsx)('div', {
                        className: R.headerCloseButton,
                        children: (0, l.jsx)(s.olH, { onClick: k })
                    })
                ]
            }),
            (0, l.jsxs)(s.hzk, {
                children: [
                    null != V &&
                        (0, l.jsx)('div', {
                            className: R.profilePreview,
                            children: (0, l.jsx)(E.Z, {
                                user: V,
                                previewText: K,
                                previewEmoji: X,
                                placeHolderText: to,
                                transitionState: r,
                                label: tl
                            })
                        }),
                    (0, l.jsxs)(s.hjN, {
                        className: R.formGroup,
                        titleClassName: R.customStatusInputTitle,
                        title: tb,
                        children: [
                            W &&
                                (0, l.jsx)('div', {
                                    className: R.labelSelectorContainer,
                                    children: (0, l.jsx)(s.DY3, {
                                        position: 'right',
                                        color: s.FGA.BRAND,
                                        'aria-label': A.intl.string(A.t.y2b7CA),
                                        shouldShow: tr,
                                        forceOpen: tr && r === s.Dvm.ENTERED,
                                        tooltipClassName: R.labelSelectorTooltip,
                                        text: A.intl.string(A.t.y2b7CA),
                                        children: (0, l.jsx)(N.Z, {
                                            currentValue: tl,
                                            onChange: (t) => {
                                                let e = t === tl ? null : t;
                                                (S.default.track(I.rMx.CUSTOM_STATUS_LABEL_CLICKED, {
                                                    previous_label: tl,
                                                    new_label: e,
                                                    location_stack: M
                                                }),
                                                    ta(e),
                                                    ti(!1),
                                                    null != e && ts((0, P.Z)(e)));
                                            }
                                        })
                                    })
                                }),
                            (0, l.jsxs)('div', {
                                className: R.inputContainer,
                                ref: td,
                                children: [
                                    (0, l.jsx)('span', {
                                        ref: tn,
                                        className: R.hiddenPlaceholder,
                                        'aria-hidden': 'true'
                                    }),
                                    (0, l.jsx)('div', {
                                        className: i()(R.emojiButtonContainer, null != tl && R.emojiButtonContainerWithLabel),
                                        children: (0, l.jsx)(s.yRy, {
                                            targetElementRef: te,
                                            renderPopout: (t) => {
                                                let { closePopout: e } = t;
                                                return (0, l.jsx)(p.Z, {
                                                    closePopout: e,
                                                    onSelectEmoji: (t) => {
                                                        let { emoji: n, willClose: l } = t;
                                                        (tf(n), l && e());
                                                    },
                                                    pickerIntention: Z.Hz.STATUS,
                                                    onNavigateAway: k
                                                });
                                            },
                                            position: 'left',
                                            animation: s.yRy.Animation.NONE,
                                            align: 'top',
                                            children: (t, e) => {
                                                var n, a;
                                                let { isShown: r } = e;
                                                return (0, l.jsx)(
                                                    h.Z,
                                                    ((n = (function (t) {
                                                        for (var e = 1; e < arguments.length; e++) {
                                                            var n = null != arguments[e] ? arguments[e] : {},
                                                                l = Object.keys(n);
                                                            ('function' == typeof Object.getOwnPropertySymbols &&
                                                                (l = l.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                                    })
                                                                )),
                                                                l.forEach(function (e) {
                                                                    var l;
                                                                    ((l = n[e]),
                                                                        e in t
                                                                            ? Object.defineProperty(t, e, {
                                                                                  value: l,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0
                                                                              })
                                                                            : (t[e] = l));
                                                                }));
                                                        }
                                                        return t;
                                                    })({}, t)),
                                                    (a = a =
                                                        {
                                                            ref: te,
                                                            active: r,
                                                            className: R.emojiButton,
                                                            tabIndex: 0,
                                                            renderButtonContents: tp()
                                                        }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                                                        : (function (t, e) {
                                                              var n = Object.keys(t);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var l = Object.getOwnPropertySymbols(t);
                                                                  n.push.apply(n, l);
                                                              }
                                                              return n;
                                                          })(Object(a)).forEach(function (t) {
                                                              Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(a, t));
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
                                            'aria-describedby': tS,
                                            value: K,
                                            maxLength: D.s0,
                                            rows: 1,
                                            showRemainingCharacterCount: !1,
                                            placeholder: tu,
                                            onChange: (t) => {
                                                q(t);
                                            },
                                            onKeyDown: (t) => {
                                                'Enter' === t.key && th();
                                            },
                                            className: i()(R.input, null != tl && R.inputWithLabel),
                                            inputRef: tt
                                        },
                                        null != tl ? 'with-label' : 'without-label'
                                    ),
                                    null != tl &&
                                        (0, l.jsx)('div', {
                                            className: R.inputCustomStatusLabelRow,
                                            children: (0, l.jsx)(w.Z, { label: tl })
                                        }),
                                    (0, l.jsx)(s.nn4, {
                                        id: tS,
                                        children: ''.concat(A.intl.string(A.t.EVV6ub), ': ').concat(to)
                                    }),
                                    (K.length > 0 || null != X) &&
                                        (0, l.jsx)('div', {
                                            className: i()(R.clearButtonWrapper, null != tl && R.buttonContainerWithLabel),
                                            children: (0, l.jsx)(s.P3F, {
                                                focusProps: {
                                                    offset: {
                                                        top: 8,
                                                        bottom: 8,
                                                        left: -2,
                                                        right: -2
                                                    }
                                                },
                                                'aria-label': A.intl.string(A.t.wfYTHR),
                                                className: R.clearButton,
                                                onClick: () => {
                                                    (q(''), Q(null));
                                                },
                                                children: (0, l.jsx)(s.k$p, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: R.clearIcon
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
                    className: R.footer,
                    children: [
                        (0, l.jsx)('div', {
                            className: R.clearAfterSelectContainer,
                            children: (0, l.jsx)(s.q4e, {
                                maxVisibleItems: D.wS.length + 1,
                                value: $,
                                options: H
                                    ? [
                                          {
                                              value: L,
                                              key: L,
                                              label: A.intl.string(A.t.E45wvL),
                                              disabled: !0
                                          },
                                          ...D.wS.map((t) => ({
                                              value: t,
                                              key: t,
                                              label: (0, C.Z)(t, !0)
                                          }))
                                      ]
                                    : D.wS.map((t) => ({
                                          value: t,
                                          key: t,
                                          label: (0, C.Z)(t)
                                      })),
                                onChange: (t) => J(t),
                                optionClassName: R.clearAfterSelectOption,
                                renderOptionLabel: (t) => {
                                    let { value: e, label: n, disabled: a } = t;
                                    return (0, l.jsx)('span', {
                                        className: i()(R.clearAfterSelectOptionLabel, a ? R.disabled : void 0),
                                        children: e === L ? n : (0, _.Z)(e, H)
                                    });
                                },
                                look: s.qQH.CUSTOM,
                                popoutWidth: 'auto',
                                popoutPosition: 'right'
                            })
                        }),
                        (0, l.jsx)(s.zxk, {
                            variant: 'primary',
                            text: A.intl.string(A.t.R3BPHx),
                            type: 'submit',
                            onClick: th
                        })
                    ]
                })
            })
        ]
    });
}
