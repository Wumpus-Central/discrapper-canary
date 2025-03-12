n.d(t, { Z: () => D }), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(442837),
    i = n(481060),
    o = n(596454),
    s = n(493773),
    u = n(100527),
    c = n(318766),
    d = n(907040),
    m = n(246133),
    f = n(503817),
    p = n(695346),
    h = n(594174),
    b = n(626135),
    S = n(368326),
    j = n(720449),
    g = n(684269),
    v = n(678865),
    x = n(429467),
    _ = n(676035),
    N = n(926563),
    O = n(875425),
    C = n(981631),
    y = n(185923),
    E = n(388032),
    I = n(95616);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e) {
    let { value: t, label: n } = e;
    return (0, r.jsxs)(
        'div',
        {
            className: I.statusOptionItem,
            children: [
                (0, r.jsx)(i.qbd, {
                    status: t,
                    size: 10,
                    className: I.statusIcon
                }),
                n
            ]
        },
        t
    );
}
function k(e) {
    return e.map((e) =>
        (0, r.jsx)(
            T,
            {
                value: e.value,
                label: e.label
            },
            e.value
        )
    );
}
function D(e) {
    var t, n;
    let { transitionState: D, onClose: B, sourceAnalyticsContext: Z, sourceAnalyticsLocations: W } = e,
        { enabledWithStatusSelection: A } = (0, f.hM)({ location: 'CustomStatusModalWithPreview' }),
        z = (0, S.p)({ location: 'CustomStatusModalWithPreview' }),
        M = (0, l.e7)([h.default], () => {
            var e;
            return null !== (e = h.default.getCurrentUser()) && void 0 !== e ? e : null;
        }),
        R = (0, _.a)(),
        [L, U] = a.useState(null !== (t = null == R ? void 0 : R.state) && void 0 !== t ? t : ''),
        [H, Y] = a.useState(null !== (n = null == R ? void 0 : R.emoji) && void 0 !== n ? n : null),
        [F, V] = a.useState((0, v.Z)()),
        [q, G] = a.useState((0, g.Z)()),
        X = a.useRef(null);
    a.useEffect(() => {
        b.default.track(C.rMx.OPEN_MODAL, {
            type: u.Z.CUSTOM_STATUS_MODAL,
            location_stack: W
        });
    }, [W]),
        (0, s.ZP)(() => {
            if (null != X.current) {
                let e = X.current;
                e.focus(), e.setSelection(L.length, L.length);
            }
        });
    let K = (e) => {
            null != e &&
                Y(
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
        Q = () => {
            let e = p.co.getSetting();
            e !== F && (0, m.Z)(F, e, Z), (0, j.Z)(L, H, q, Z), B();
        },
        $ = () =>
            null == H
                ? null
                : () =>
                      (0, r.jsx)(o.Z, {
                          className: I.emoji,
                          emojiId: H.id,
                          emojiName: H.name,
                          animated: !!H.animated
                      });
    return (0, r.jsxs)(i.Y0X, {
        transitionState: D,
        children: [
            (0, r.jsxs)(i.xBx, {
                separator: !1,
                className: I.header,
                children: [
                    (0, r.jsx)('div', {
                        className: I.headerTitle,
                        children: (0, r.jsx)(i.X6q, {
                            variant: 'heading-xl/semibold',
                            children: E.NW.string(E.t.Zx4jzM)
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: I.headerCloseButton,
                        children: (0, r.jsx)(i.olH, { onClick: B })
                    })
                ]
            }),
            (0, r.jsxs)(i.hzk, {
                children: [
                    null != M &&
                        (0, r.jsx)('div', {
                            className: I.profilePreview,
                            children: (0, r.jsx)(N.Z, {
                                user: M,
                                previewText: L,
                                previewEmoji: H,
                                placeHolderText: E.NW.string(E.t['xod36+']),
                                previewStatus: F,
                                transitionState: D
                            })
                        }),
                    (0, r.jsxs)(i.hjN, {
                        className: I.formGroup,
                        title: E.NW.string(E.t.UcdRn5),
                        children: [
                            (0, r.jsxs)('div', {
                                className: I.inputContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: I.emojiButtonContainer,
                                        children: (0, r.jsx)(i.yRy, {
                                            renderPopout: (e) => {
                                                let { closePopout: t } = e;
                                                return (0, r.jsx)(d.Z, {
                                                    closePopout: t,
                                                    onSelectEmoji: (e, n) => {
                                                        K(e), n && t();
                                                    },
                                                    pickerIntention: y.Hz.STATUS,
                                                    onNavigateAway: B
                                                });
                                            },
                                            position: 'left',
                                            animation: i.yRy.Animation.NONE,
                                            align: 'top',
                                            children: (e, t) => {
                                                let { isShown: n } = t;
                                                return (0, r.jsx)(
                                                    c.Z,
                                                    P(w({}, e), {
                                                        active: n,
                                                        className: I.emojiButton,
                                                        tabIndex: 0,
                                                        renderButtonContents: $()
                                                    })
                                                );
                                            }
                                        })
                                    }),
                                    (0, r.jsx)(i.Kx8, {
                                        autosize: !0,
                                        value: L,
                                        maxLength: O.s0,
                                        rows: 1,
                                        showRemainingCharacterCount: !1,
                                        placeholder: E.NW.string(E.t['xod36+']),
                                        onChange: (e) => {
                                            U(e);
                                        },
                                        onKeyDown: (e) => {
                                            'Enter' === e.key && Q();
                                        },
                                        className: I.input,
                                        inputRef: X
                                    }),
                                    (L.length > 0 || null != H) &&
                                        (0, r.jsx)('div', {
                                            className: I.clearButtonWrapper,
                                            children: (0, r.jsx)(i.zxk, {
                                                focusProps: {
                                                    offset: {
                                                        top: 8,
                                                        bottom: 8,
                                                        left: -2,
                                                        right: -2
                                                    }
                                                },
                                                className: I.clearButton,
                                                onClick: () => {
                                                    U(''), Y(null);
                                                },
                                                look: i.zxk.Looks.BLANK,
                                                size: i.zxk.Sizes.NONE,
                                                children: (0, r.jsx)(i.k$p, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: I.clearIcon
                                                })
                                            })
                                        })
                                ]
                            }),
                            z &&
                                (0, r.jsxs)(i.P3F, {
                                    className: I.needInspiration,
                                    onClick: () => {
                                        U((0, x.Z)());
                                    },
                                    children: [(0, r.jsx)(i.$2U, { size: 'sm' }), E.NW.string(E.t.UH6ieX)]
                                })
                        ]
                    }),
                    A &&
                        (0, r.jsxs)(i.hjN, {
                            className: I.formGroup,
                            title: E.NW.string(E.t.zOdg0N),
                            children: [
                                (0, r.jsx)(i.q4e, {
                                    maxVisibleItems: O.Df.length,
                                    value: F,
                                    options: O.Df.map((e) =>
                                        P(w({}, e), {
                                            key: e.value,
                                            value: e.value,
                                            label: e.label()
                                        })
                                    ),
                                    onChange: V,
                                    renderOptionLabel: (e) => {
                                        let { value: t, label: n } = e;
                                        return (0, r.jsx)(T, {
                                            value: t,
                                            label: n
                                        });
                                    },
                                    renderOptionValue: k
                                }),
                                F === i.Skl.INVISIBLE &&
                                    (0, r.jsx)('div', {
                                        className: I.invisibleStatusNotice,
                                        children: (0, r.jsx)(i.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            children: E.NW.string(E.t.IUwOOD)
                                        })
                                    })
                            ]
                        })
                ]
            }),
            (0, r.jsx)(i.mzw, {
                children: (0, r.jsxs)('div', {
                    className: I.footer,
                    children: [
                        (0, r.jsx)('div', {
                            className: I.clearAfterSelectContainer,
                            children: (0, r.jsx)(i.q4e, {
                                maxVisibleItems: O.Q9.length,
                                value: q,
                                options: O.Q9.map((e) =>
                                    P(w({}, e), {
                                        key: e.value,
                                        value: e.value,
                                        label: e.label()
                                    })
                                ),
                                onChange: G,
                                look: i.qQH.CUSTOM,
                                popoutWidth: 200,
                                popoutPosition: 'right'
                            })
                        }),
                        (0, r.jsx)(i.zxk, {
                            type: 'submit',
                            size: i.zxk.Sizes.MEDIUM,
                            color: i.zxk.Colors.BRAND,
                            onClick: Q,
                            children: E.NW.string(E.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
