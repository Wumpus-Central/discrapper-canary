(n.d(e, { Z: () => B }), n(388685));
var l = n(255367),
    a = n(73800),
    r = n(120356),
    i = n.n(r),
    o = n(442837),
    s = n(755721),
    u = n(481060),
    c = n(596454),
    d = n(393238),
    m = n(493773),
    f = n(100527),
    h = n(906732),
    p = n(318766),
    b = n(907040),
    S = n(594174),
    j = n(626135),
    g = n(644540),
    O = n(359588),
    v = n(368326),
    x = n(720449),
    C = n(684269),
    _ = n(397416),
    T = n(745579),
    P = n(74340),
    y = n(166655),
    w = n(676035),
    N = n(346565),
    E = n(562577),
    D = n(926563),
    I = n(875425),
    Z = n(981631),
    A = n(185923),
    R = n(388032),
    L = n(782628);
let k = 'CLEAR_AFTER';
function B(t) {
    var e, n;
    let { transitionState: r, onClose: B, sourceAnalyticsContext: M, sourceAnalyticsLocations: U = [], prompt: F = null, showLabelSelectorNewTooltip: Y = !1 } = t,
        H = (0, v.p)({ location: 'CustomStatusModalWithPreview' }),
        W = (0, g.P)({ location: 'CustomStatusModalWithPreview' }),
        z = (0, O.Z)({ location: 'CustomStatusModalWithPreview' }),
        { analyticsLocations: V } = (0, h.ZP)(U, f.Z.CUSTOM_STATUS_MODAL),
        G = (0, o.e7)([S.default], () => {
            var t;
            return null != (t = S.default.getCurrentUser()) ? t : null;
        }),
        K = (0, w.a)(),
        [q, X] = a.useState(null != (e = null == K ? void 0 : K.state) ? e : ''),
        [Q, $] = a.useState(null != (n = null == K ? void 0 : K.emoji) ? n : null),
        [J, tt] = a.useState((0, C.Z)()),
        te = a.useRef(null),
        tn = a.useRef(null),
        tl = a.useRef(null),
        [ta, tr] = a.useState(null != K && z ? (0, P.Z)(K) : null),
        [ti, to] = a.useState(Y),
        [ts, tu] = a.useState(() => (H && null != F ? F.label() : R.intl.string(R.t['xod36+']))),
        [tc, td] = a.useState(ts),
        { ref: tm, width: tf } = (0, d.ZP)(ts);
    (a.useEffect(() => {
        let t = tl.current;
        if (null == tf || null == t) return;
        let e = tf - 78;
        t.textContent = ts;
        let n = t.getBoundingClientRect().width;
        if (n <= e) td(ts);
        else {
            let t = n / ts.length,
                l = Math.floor((e - 3 * t) / t);
            td(''.concat(ts.substring(0, l)).concat('...'));
        }
    }, [tf, ts]),
        a.useEffect(() => {
            j.default.track(Z.rMx.OPEN_MODAL, {
                type: f.Z.CUSTOM_STATUS_MODAL,
                location_stack: V
            });
        }, [V]),
        (0, m.ZP)(() => {
            var t, e;
            (null == (t = te.current) || t.focus(), null == (e = te.current) || e.setSelection(q.length, q.length));
        }));
    let th = (t) => {
            null != t &&
                $(
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
        tp = () => {
            J !== k &&
                ((0, x.Z)({
                    text: q,
                    emojiInfo: Q,
                    clearAfter: J,
                    prompt: F,
                    customStatusLabel: ta,
                    analyticsLocations: V,
                    analyticsContext: M
                }),
                B());
        },
        tb = () =>
            null == Q
                ? null
                : () =>
                      (0, l.jsx)(c.Z, {
                          className: L.emoji,
                          emojiId: Q.id,
                          emojiName: Q.name,
                          animated: !!Q.animated
                      }),
        tS = H ? R.intl.string(R.t.rp0aho) : R.intl.string(R.t.UcdRn5),
        tj = 'custom-status-placeholder-text';
    return (0, l.jsxs)(u.Y0X, {
        transitionState: r,
        parentComponent: 'CustomStatusModalWithPreview',
        children: [
            (0, l.jsxs)(u.xBx, {
                separator: !1,
                className: L.header,
                children: [
                    (0, l.jsx)('div', {
                        className: L.headerTitle,
                        children: (0, l.jsx)(u.X6q, {
                            variant: 'heading-xl/semibold',
                            children: R.intl.string(R.t.Zx4jzM)
                        })
                    }),
                    (0, l.jsx)('div', {
                        className: L.headerCloseButton,
                        children: (0, l.jsx)(u.olH, { onClick: B })
                    })
                ]
            }),
            (0, l.jsxs)(u.hzk, {
                children: [
                    null != G &&
                        (0, l.jsx)('div', {
                            className: L.profilePreview,
                            children: (0, l.jsx)(D.Z, {
                                user: G,
                                previewText: q,
                                previewEmoji: Q,
                                placeHolderText: ts,
                                transitionState: r,
                                label: ta
                            })
                        }),
                    (0, l.jsxs)(u.hjN, {
                        className: L.formGroup,
                        titleClassName: L.customStatusInputTitle,
                        title: tS,
                        children: [
                            z &&
                                (0, l.jsx)('div', {
                                    className: L.labelSelectorContainer,
                                    children: (0, l.jsx)(u.DY3, {
                                        position: 'right',
                                        color: u.FGA.BRAND,
                                        'aria-label': R.intl.string(R.t.y2b7CA),
                                        shouldShow: ti,
                                        forceOpen: ti && r === u.Dvm.ENTERED,
                                        tooltipClassName: L.labelSelectorTooltip,
                                        text: R.intl.string(R.t.y2b7CA),
                                        children: (0, l.jsx)(E.Z, {
                                            currentValue: ta,
                                            onChange: (t) => {
                                                let e = t === ta ? null : t;
                                                (j.default.track(Z.rMx.CUSTOM_STATUS_LABEL_CLICKED, {
                                                    previous_label: ta,
                                                    new_label: e,
                                                    location_stack: U
                                                }),
                                                    tr(e),
                                                    to(!1),
                                                    null != e && tu((0, y.Z)(e)));
                                            }
                                        })
                                    })
                                }),
                            (0, l.jsxs)('div', {
                                className: L.inputContainer,
                                ref: tm,
                                children: [
                                    (0, l.jsx)('span', {
                                        ref: tl,
                                        className: L.hiddenPlaceholder,
                                        'aria-hidden': 'true'
                                    }),
                                    (0, l.jsx)('div', {
                                        className: i()(L.emojiButtonContainer, null != ta && L.emojiButtonContainerWithLabel),
                                        children: (0, l.jsx)(u.yRy, {
                                            targetElementRef: tn,
                                            renderPopout: (t) => {
                                                let { closePopout: e } = t;
                                                return (0, l.jsx)(b.Z, {
                                                    closePopout: e,
                                                    onSelectEmoji: (t) => {
                                                        let { emoji: n, willClose: l } = t;
                                                        (th(n), l && e());
                                                    },
                                                    pickerIntention: A.Hz.STATUS,
                                                    onNavigateAway: B
                                                });
                                            },
                                            position: 'left',
                                            animation: u.yRy.Animation.NONE,
                                            align: 'top',
                                            children: (t, e) => {
                                                var n, a;
                                                let { isShown: r } = e;
                                                return (0, l.jsx)(
                                                    p.Z,
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
                                                            ref: tn,
                                                            active: r,
                                                            className: L.emojiButton,
                                                            tabIndex: 0,
                                                            renderButtonContents: tb()
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
                                        s.iS,
                                        {
                                            autosize: !0,
                                            'aria-describedby': tj,
                                            value: q,
                                            maxLength: I.s0,
                                            rows: 1,
                                            showRemainingCharacterCount: !1,
                                            placeholder: tc,
                                            onChange: (t) => {
                                                X(t);
                                            },
                                            onKeyDown: (t) => {
                                                'Enter' === t.key && tp();
                                            },
                                            className: i()(L.input, null != ta && L.inputWithLabel),
                                            inputRef: te
                                        },
                                        null != ta ? 'with-label' : 'without-label'
                                    ),
                                    null != ta &&
                                        (0, l.jsx)('div', {
                                            className: L.inputCustomStatusLabelRow,
                                            children: (0, l.jsx)(N.Z, { label: ta })
                                        }),
                                    (0, l.jsx)(u.nn4, {
                                        id: tj,
                                        children: ''.concat(R.intl.string(R.t.EVV6ub), ': ').concat(ts)
                                    }),
                                    (q.length > 0 || null != Q) &&
                                        (0, l.jsx)('div', {
                                            className: i()(L.clearButtonWrapper, null != ta && L.buttonContainerWithLabel),
                                            children: (0, l.jsx)(u.P3F, {
                                                focusProps: {
                                                    offset: {
                                                        top: 8,
                                                        bottom: 8,
                                                        left: -2,
                                                        right: -2
                                                    }
                                                },
                                                'aria-label': R.intl.string(R.t.wfYTHR),
                                                className: L.clearButton,
                                                onClick: () => {
                                                    (X(''), $(null));
                                                },
                                                children: (0, l.jsx)(u.k$p, {
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
            (0, l.jsx)(u.mzw, {
                children: (0, l.jsxs)('div', {
                    className: L.footer,
                    children: [
                        (0, l.jsx)('div', {
                            className: L.clearAfterSelectContainer,
                            children: (0, l.jsx)(u.q4e, {
                                maxVisibleItems: I.wS.length + 1,
                                value: J,
                                options: W
                                    ? [
                                          {
                                              value: k,
                                              key: k,
                                              label: R.intl.string(R.t.E45wvL),
                                              disabled: !0
                                          },
                                          ...I.wS.map((t) => ({
                                              value: t,
                                              key: t,
                                              label: (0, _.Z)(t, !0)
                                          }))
                                      ]
                                    : I.wS.map((t) => ({
                                          value: t,
                                          key: t,
                                          label: (0, _.Z)(t)
                                      })),
                                onChange: (t) => tt(t),
                                optionClassName: L.clearAfterSelectOption,
                                renderOptionLabel: (t) => {
                                    let { value: e, label: n, disabled: a } = t;
                                    return (0, l.jsx)('span', {
                                        className: i()(L.clearAfterSelectOptionLabel, a ? L.disabled : void 0),
                                        children: e === k ? n : (0, T.Z)(e, W)
                                    });
                                },
                                look: u.qQH.CUSTOM,
                                popoutWidth: 'auto',
                                popoutPosition: 'right'
                            })
                        }),
                        (0, l.jsx)(u.zxk, {
                            variant: 'primary',
                            text: R.intl.string(R.t.R3BPHx),
                            type: 'submit',
                            onClick: tp
                        })
                    ]
                })
            })
        ]
    });
}
