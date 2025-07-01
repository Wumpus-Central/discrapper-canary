(n.d(e, { Z: () => R }), n(388685));
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
    b = n(907040),
    p = n(594174),
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
    D = n(875425),
    k = n(981631),
    I = n(185923),
    A = n(388032),
    Z = n(782628);
let L = 'CLEAR_AFTER';
function R(t) {
    var e, n;
    let { transitionState: a, onClose: R, sourceAnalyticsContext: B, sourceAnalyticsLocations: M = [], prompt: U = null, showLabelSelectorNewTooltip: z = !1 } = t,
        Y = (0, O.p)({ location: 'CustomStatusModalWithPreview' }),
        F = (0, j.P)({ location: 'CustomStatusModalWithPreview' }),
        H = (0, g.Z)({ location: 'CustomStatusModalWithPreview' }),
        { analyticsLocations: W } = (0, f.ZP)(M, m.Z.CUSTOM_STATUS_MODAL),
        K = (0, o.e7)([p.default], () => {
            var t;
            return null != (t = p.default.getCurrentUser()) ? t : null;
        }),
        V = (0, N.a)(),
        [G, q] = r.useState(null != (e = null == V ? void 0 : V.state) ? e : ''),
        [X, Q] = r.useState(null != (n = null == V ? void 0 : V.emoji) ? n : null),
        [$, J] = r.useState((0, v.Z)()),
        tt = r.useRef(null),
        te = r.useRef(null),
        tn = r.useRef(null),
        [tl, tr] = r.useState(null != V && H ? (0, T.Z)(V) : null),
        [ta, ti] = r.useState(z),
        [to, ts] = r.useState(() => (Y && null != U ? U.label() : A.intl.string(A.t['xod36+']))),
        [tu, tc] = r.useState(to),
        { ref: td, width: tm } = (0, c.ZP)(to);
    (r.useEffect(() => {
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
        r.useEffect(() => {
            S.default.track(k.rMx.OPEN_MODAL, {
                type: m.Z.CUSTOM_STATUS_MODAL,
                location_stack: W
            });
        }, [W]),
        (0, d.ZP)(() => {
            var t, e;
            (null == (t = tt.current) || t.focus(), null == (e = tt.current) || e.setSelection(G.length, G.length));
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
                    text: G,
                    emojiInfo: X,
                    clearAfter: $,
                    prompt: U,
                    customStatusLabel: tl,
                    analyticsLocations: W,
                    analyticsContext: B
                }),
                R());
        },
        tb = () =>
            null == X
                ? null
                : () =>
                      (0, l.jsx)(u.Z, {
                          className: Z.emoji,
                          emojiId: X.id,
                          emojiName: X.name,
                          animated: !!X.animated
                      }),
        tp = Y ? A.intl.string(A.t.rp0aho) : A.intl.string(A.t.UcdRn5),
        tS = 'custom-status-placeholder-text';
    return (0, l.jsxs)(s.Y0X, {
        transitionState: a,
        parentComponent: 'CustomStatusModalWithPreview',
        children: [
            (0, l.jsxs)(s.xBx, {
                separator: !1,
                className: Z.header,
                children: [
                    (0, l.jsx)('div', {
                        className: Z.headerTitle,
                        children: (0, l.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            children: A.intl.string(A.t.Zx4jzM)
                        })
                    }),
                    (0, l.jsx)('div', {
                        className: Z.headerCloseButton,
                        children: (0, l.jsx)(s.olH, { onClick: R })
                    })
                ]
            }),
            (0, l.jsxs)(s.hzk, {
                children: [
                    null != K &&
                        (0, l.jsx)('div', {
                            className: Z.profilePreview,
                            children: (0, l.jsx)(E.Z, {
                                user: K,
                                previewText: G,
                                previewEmoji: X,
                                placeHolderText: to,
                                transitionState: a,
                                label: tl
                            })
                        }),
                    (0, l.jsxs)(s.hjN, {
                        className: Z.formGroup,
                        titleClassName: Z.customStatusInputTitle,
                        title: tp,
                        children: [
                            H &&
                                (0, l.jsx)('div', {
                                    className: Z.labelSelectorContainer,
                                    children: (0, l.jsx)(s.DY3, {
                                        position: 'right',
                                        color: s.FGA.BRAND,
                                        'aria-label': A.intl.string(A.t.y2b7CA),
                                        shouldShow: ta,
                                        forceOpen: ta && a === s.Dvm.ENTERED,
                                        tooltipClassName: Z.labelSelectorTooltip,
                                        text: A.intl.string(A.t.y2b7CA),
                                        children: (0, l.jsx)(w.Z, {
                                            currentValue: tl,
                                            onChange: (t) => {
                                                let e = t === tl ? null : t;
                                                (S.default.track(k.rMx.CUSTOM_STATUS_LABEL_CLICKED, {
                                                    previous_label: tl,
                                                    new_label: e,
                                                    location_stack: M
                                                }),
                                                    tr(e),
                                                    ti(!1),
                                                    null != e && ts((0, P.Z)(e)));
                                            }
                                        })
                                    })
                                }),
                            (0, l.jsxs)('div', {
                                className: Z.inputContainer,
                                ref: td,
                                children: [
                                    (0, l.jsx)('span', {
                                        ref: tn,
                                        className: Z.hiddenPlaceholder,
                                        'aria-hidden': 'true'
                                    }),
                                    (0, l.jsx)('div', {
                                        className: i()(Z.emojiButtonContainer, null != tl && Z.emojiButtonContainerWithLabel),
                                        children: (0, l.jsx)(s.yRy, {
                                            targetElementRef: te,
                                            renderPopout: (t) => {
                                                let { closePopout: e } = t;
                                                return (0, l.jsx)(b.Z, {
                                                    closePopout: e,
                                                    onSelectEmoji: (t) => {
                                                        let { emoji: n, willClose: l } = t;
                                                        (tf(n), l && e());
                                                    },
                                                    pickerIntention: I.Hz.STATUS,
                                                    onNavigateAway: R
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
                                                    (r = r =
                                                        {
                                                            ref: te,
                                                            active: a,
                                                            className: Z.emojiButton,
                                                            tabIndex: 0,
                                                            renderButtonContents: tb()
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
                                            'aria-describedby': tS,
                                            value: G,
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
                                            className: i()(Z.input, null != tl && Z.inputWithLabel),
                                            inputRef: tt
                                        },
                                        null != tl ? 'with-label' : 'without-label'
                                    ),
                                    null != tl &&
                                        (0, l.jsx)('div', {
                                            className: Z.inputCustomStatusLabelRow,
                                            children: (0, l.jsx)(y.Z, { label: tl })
                                        }),
                                    (0, l.jsx)(s.nn4, {
                                        id: tS,
                                        children: ''.concat(A.intl.string(A.t.EVV6ub), ': ').concat(to)
                                    }),
                                    (G.length > 0 || null != X) &&
                                        (0, l.jsx)('div', {
                                            className: i()(Z.clearButtonWrapper, null != tl && Z.buttonContainerWithLabel),
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
                                                className: Z.clearButton,
                                                onClick: () => {
                                                    (q(''), Q(null));
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
                                maxVisibleItems: D.wS.length + 1,
                                value: $,
                                options: F
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
                                optionClassName: Z.clearAfterSelectOption,
                                renderOptionLabel: (t) => {
                                    let { value: e, label: n, disabled: r } = t;
                                    return (0, l.jsx)('span', {
                                        className: i()(Z.clearAfterSelectOptionLabel, r ? Z.disabled : void 0),
                                        children: e === L ? n : (0, _.Z)(e, F)
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
                            onClick: th,
                            children: A.intl.string(A.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
