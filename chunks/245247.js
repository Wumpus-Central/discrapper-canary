n.d(t, { Z: () => k }), n(47120);
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
    S = n(626135),
    b = n(720449),
    j = n(684269),
    g = n(678865),
    v = n(676035),
    x = n(926563),
    _ = n(875425),
    N = n(981631),
    O = n(185923),
    y = n(388032),
    C = n(111913);
function E(e) {
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
function I(e, t) {
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
function w(e) {
    let { value: t, label: n } = e;
    return (0, r.jsxs)(
        'div',
        {
            className: C.statusOptionItem,
            children: [
                (0, r.jsx)(i.qbd, {
                    status: t,
                    size: 10,
                    className: C.statusIcon
                }),
                n
            ]
        },
        t
    );
}
function T(e) {
    return e.map((e) =>
        (0, r.jsx)(
            w,
            {
                value: e.value,
                label: e.label
            },
            e.value
        )
    );
}
function k(e) {
    var t, n;
    let { transitionState: k, onClose: P, sourceAnalyticsContext: D, sourceAnalyticsLocations: B } = e,
        { enabledWithStatusSelection: A } = (0, f.hM)({ location: 'CustomStatusModalWithPreview' }),
        Z = (0, l.e7)([h.default], () => {
            var e;
            return null !== (e = h.default.getCurrentUser()) && void 0 !== e ? e : null;
        }),
        W = (0, v.a)(),
        [z, R] = a.useState(null !== (t = null == W ? void 0 : W.state) && void 0 !== t ? t : ''),
        [L, M] = a.useState(null !== (n = null == W ? void 0 : W.emoji) && void 0 !== n ? n : null),
        [U, Y] = a.useState((0, g.Z)()),
        [H, F] = a.useState((0, j.Z)()),
        q = a.useRef(null);
    a.useEffect(() => {
        S.default.track(N.rMx.OPEN_MODAL, {
            type: u.Z.CUSTOM_STATUS_MODAL,
            location_stack: B
        });
    }, [B]),
        (0, s.ZP)(() => {
            if (null != q.current) {
                let e = q.current;
                e.focus(), e.setSelection(z.length, z.length);
            }
        });
    let G = (e) => {
            null != e &&
                M(
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
        V = () => {
            let e = p.co.getSetting();
            e !== U && (0, m.Z)(U, e, D), (0, b.Z)(z, L, H, D), P();
        },
        K = () =>
            null == L
                ? null
                : () =>
                      (0, r.jsx)(o.Z, {
                          className: C.emoji,
                          emojiId: L.id,
                          emojiName: L.name,
                          animated: !!L.animated
                      });
    return (0, r.jsxs)(i.Y0X, {
        transitionState: k,
        children: [
            (0, r.jsxs)(i.xBx, {
                separator: !1,
                className: C.header,
                children: [
                    (0, r.jsx)('div', {
                        className: C.headerTitle,
                        children: (0, r.jsx)(i.X6q, {
                            variant: 'heading-xl/semibold',
                            children: y.NW.string(y.t.Zx4jzM)
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: C.headerCloseButton,
                        children: (0, r.jsx)(i.olH, { onClick: P })
                    })
                ]
            }),
            (0, r.jsxs)(i.hzk, {
                children: [
                    null != Z &&
                        (0, r.jsx)('div', {
                            className: C.profilePreview,
                            children: (0, r.jsx)(x.Z, {
                                user: Z,
                                previewText: z,
                                previewEmoji: L,
                                placeHolderText: y.NW.string(y.t['xod36+']),
                                previewStatus: U,
                                transitionState: k
                            })
                        }),
                    (0, r.jsx)(i.hjN, {
                        className: C.formGroup,
                        title: y.NW.string(y.t.UcdRn5),
                        children: (0, r.jsxs)('div', {
                            className: C.inputContainer,
                            children: [
                                (0, r.jsx)('div', {
                                    className: C.emojiButtonContainer,
                                    children: (0, r.jsx)(i.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(d.Z, {
                                                closePopout: t,
                                                onSelectEmoji: (e, n) => {
                                                    G(e), n && t();
                                                },
                                                pickerIntention: O.Hz.STATUS,
                                                onNavigateAway: P
                                            });
                                        },
                                        position: 'left',
                                        animation: i.yRy.Animation.NONE,
                                        align: 'top',
                                        children: (e, t) => {
                                            let { isShown: n } = t;
                                            return (0, r.jsx)(
                                                c.Z,
                                                I(E({}, e), {
                                                    active: n,
                                                    className: C.emojiButton,
                                                    tabIndex: 0,
                                                    renderButtonContents: K()
                                                })
                                            );
                                        }
                                    })
                                }),
                                (0, r.jsx)(i.Kx8, {
                                    autosize: !0,
                                    value: z,
                                    maxLength: _.s0,
                                    rows: 1,
                                    showRemainingCharacterCount: !1,
                                    placeholder: y.NW.string(y.t['xod36+']),
                                    onChange: (e) => {
                                        R(e);
                                    },
                                    onKeyDown: (e) => {
                                        'Enter' === e.key && V();
                                    },
                                    className: C.input,
                                    inputRef: q
                                }),
                                (z.length > 0 || null != L) &&
                                    (0, r.jsx)('div', {
                                        className: C.clearButtonWrapper,
                                        children: (0, r.jsx)(i.zxk, {
                                            focusProps: {
                                                offset: {
                                                    top: 8,
                                                    bottom: 8,
                                                    left: -2,
                                                    right: -2
                                                }
                                            },
                                            className: C.clearButton,
                                            onClick: () => {
                                                R(''), M(null);
                                            },
                                            look: i.zxk.Looks.BLANK,
                                            size: i.zxk.Sizes.NONE,
                                            children: (0, r.jsx)(i.k$p, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: C.clearIcon
                                            })
                                        })
                                    })
                            ]
                        })
                    }),
                    A &&
                        (0, r.jsxs)(i.hjN, {
                            className: C.formGroup,
                            title: y.NW.string(y.t.zOdg0N),
                            children: [
                                (0, r.jsx)(i.q4e, {
                                    maxVisibleItems: _.Df.length,
                                    value: U,
                                    options: _.Df.map((e) =>
                                        I(E({}, e), {
                                            key: e.value,
                                            value: e.value,
                                            label: e.label()
                                        })
                                    ),
                                    onChange: Y,
                                    renderOptionLabel: (e) => {
                                        let { value: t, label: n } = e;
                                        return (0, r.jsx)(w, {
                                            value: t,
                                            label: n
                                        });
                                    },
                                    renderOptionValue: T
                                }),
                                U === i.Skl.INVISIBLE &&
                                    (0, r.jsx)('div', {
                                        className: C.invisibleStatusNotice,
                                        children: (0, r.jsx)(i.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            children: y.NW.string(y.t.IUwOOD)
                                        })
                                    })
                            ]
                        })
                ]
            }),
            (0, r.jsx)(i.mzw, {
                children: (0, r.jsxs)('div', {
                    className: C.footer,
                    children: [
                        (0, r.jsx)('div', {
                            className: C.clearAfterSelectContainer,
                            children: (0, r.jsx)(i.q4e, {
                                maxVisibleItems: _.Q9.length,
                                value: H,
                                options: _.Q9.map((e) =>
                                    I(E({}, e), {
                                        key: e.value,
                                        value: e.value,
                                        label: e.label()
                                    })
                                ),
                                onChange: F,
                                look: i.qQH.CUSTOM,
                                popoutWidth: 200,
                                popoutPosition: 'right'
                            })
                        }),
                        (0, r.jsx)(i.zxk, {
                            type: 'submit',
                            size: i.zxk.Sizes.MEDIUM,
                            color: i.zxk.Colors.BRAND,
                            onClick: V,
                            children: y.NW.string(y.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
