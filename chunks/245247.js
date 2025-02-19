n.d(t, { Z: () => T }), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(442837),
    i = n(481060),
    o = n(596454),
    s = n(100527),
    u = n(318766),
    c = n(907040),
    d = n(246133),
    m = n(503817),
    f = n(695346),
    p = n(594174),
    h = n(626135),
    S = n(720449),
    b = n(684269),
    j = n(678865),
    g = n(676035),
    v = n(926563),
    x = n(875425),
    _ = n(981631),
    N = n(185923),
    O = n(388032),
    y = n(111913);
function C(e) {
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
function E(e, t) {
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
function I(e) {
    let { value: t, label: n } = e;
    return (0, r.jsxs)(
        'div',
        {
            className: y.statusOptionItem,
            children: [
                (0, r.jsx)(i.qbd, {
                    status: t,
                    size: 10,
                    className: y.statusIcon
                }),
                n
            ]
        },
        t
    );
}
function w(e) {
    return e.map((e) =>
        (0, r.jsx)(
            I,
            {
                value: e.value,
                label: e.label
            },
            e.value
        )
    );
}
function T(e) {
    var t, n;
    let { transitionState: T, onClose: k, sourceAnalyticsContext: P, sourceAnalyticsLocations: D } = e,
        { enabledWithStatusSelection: B } = (0, m.hM)({ location: 'CustomStatusModalWithPreview' }),
        A = (0, l.e7)([p.default], () => {
            var e;
            return null !== (e = p.default.getCurrentUser()) && void 0 !== e ? e : null;
        }),
        W = (0, g.a)(),
        [Z, z] = a.useState(null !== (t = null == W ? void 0 : W.state) && void 0 !== t ? t : ''),
        [R, L] = a.useState(null !== (n = null == W ? void 0 : W.emoji) && void 0 !== n ? n : null),
        [M, U] = a.useState((0, j.Z)()),
        [Y, H] = a.useState((0, b.Z)()),
        F = a.useRef(null);
    a.useEffect(() => {
        h.default.track(_.rMx.OPEN_MODAL, {
            type: s.Z.CUSTOM_STATUS_MODAL,
            location_stack: D
        });
    }, [D]),
        a.useEffect(() => {
            if (null != F.current) {
                let e = F.current;
                e.focus(), e.setSelection(Z.length, Z.length);
            }
        });
    let q = (e) => {
            null != e &&
                L(
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
        G = () => {
            let e = f.co.getSetting();
            e !== M && (0, d.Z)(M, e, P), (0, S.Z)(Z, R, Y, P), k();
        },
        V = () =>
            null == R
                ? null
                : () =>
                      (0, r.jsx)(o.Z, {
                          className: y.emoji,
                          emojiId: R.id,
                          emojiName: R.name,
                          animated: !!R.animated
                      });
    return (0, r.jsxs)(i.Y0X, {
        transitionState: T,
        children: [
            (0, r.jsxs)(i.xBx, {
                separator: !1,
                className: y.header,
                children: [
                    (0, r.jsx)('div', {
                        className: y.headerTitle,
                        children: (0, r.jsx)(i.X6q, {
                            variant: 'heading-xl/semibold',
                            children: O.NW.string(O.t.Zx4jzM)
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: y.headerCloseButton,
                        children: (0, r.jsx)(i.olH, { onClick: k })
                    })
                ]
            }),
            (0, r.jsxs)(i.hzk, {
                children: [
                    null != A &&
                        (0, r.jsx)('div', {
                            className: y.profilePreview,
                            children: (0, r.jsx)(v.Z, {
                                user: A,
                                previewText: Z,
                                previewEmoji: R,
                                placeHolderText: O.NW.string(O.t['xod36+']),
                                previewStatus: M,
                                transitionState: T
                            })
                        }),
                    (0, r.jsx)(i.hjN, {
                        className: y.formGroup,
                        title: O.NW.string(O.t.UcdRn5),
                        children: (0, r.jsxs)('div', {
                            className: y.inputContainer,
                            children: [
                                (0, r.jsx)('div', {
                                    className: y.emojiButtonContainer,
                                    children: (0, r.jsx)(i.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(c.Z, {
                                                closePopout: t,
                                                onSelectEmoji: (e, n) => {
                                                    q(e), n && t();
                                                },
                                                pickerIntention: N.Hz.STATUS,
                                                onNavigateAway: k
                                            });
                                        },
                                        position: 'left',
                                        animation: i.yRy.Animation.NONE,
                                        align: 'top',
                                        children: (e, t) => {
                                            let { isShown: n } = t;
                                            return (0, r.jsx)(
                                                u.Z,
                                                E(C({}, e), {
                                                    active: n,
                                                    className: y.emojiButton,
                                                    tabIndex: 0,
                                                    renderButtonContents: V()
                                                })
                                            );
                                        }
                                    })
                                }),
                                (0, r.jsx)(i.Kx8, {
                                    autosize: !0,
                                    value: Z,
                                    maxLength: x.s0,
                                    rows: 1,
                                    showRemainingCharacterCount: !1,
                                    placeholder: O.NW.string(O.t['xod36+']),
                                    onChange: (e) => {
                                        z(e);
                                    },
                                    onKeyDown: (e) => {
                                        'Enter' === e.key && G();
                                    },
                                    className: y.input,
                                    inputRef: F
                                }),
                                (Z.length > 0 || null != R) &&
                                    (0, r.jsx)('div', {
                                        className: y.clearButtonWrapper,
                                        children: (0, r.jsx)(i.zxk, {
                                            focusProps: {
                                                offset: {
                                                    top: 8,
                                                    bottom: 8,
                                                    left: -2,
                                                    right: -2
                                                }
                                            },
                                            className: y.clearButton,
                                            onClick: () => {
                                                z(''), L(null);
                                            },
                                            look: i.zxk.Looks.BLANK,
                                            size: i.zxk.Sizes.NONE,
                                            children: (0, r.jsx)(i.k$p, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: y.clearIcon
                                            })
                                        })
                                    })
                            ]
                        })
                    }),
                    B &&
                        (0, r.jsxs)(i.hjN, {
                            className: y.formGroup,
                            title: O.NW.string(O.t.zOdg0N),
                            children: [
                                (0, r.jsx)(i.q4e, {
                                    maxVisibleItems: x.Df.length,
                                    value: M,
                                    options: x.Df.map((e) =>
                                        E(C({}, e), {
                                            key: e.value,
                                            value: e.value,
                                            label: e.label()
                                        })
                                    ),
                                    onChange: U,
                                    renderOptionLabel: (e) => {
                                        let { value: t, label: n } = e;
                                        return (0, r.jsx)(I, {
                                            value: t,
                                            label: n
                                        });
                                    },
                                    renderOptionValue: w
                                }),
                                M === i.Skl.INVISIBLE &&
                                    (0, r.jsx)('div', {
                                        className: y.invisibleStatusNotice,
                                        children: (0, r.jsx)(i.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            children: O.NW.string(O.t.IUwOOD)
                                        })
                                    })
                            ]
                        })
                ]
            }),
            (0, r.jsx)(i.mzw, {
                children: (0, r.jsxs)('div', {
                    className: y.footer,
                    children: [
                        (0, r.jsx)('div', {
                            className: y.clearAfterSelectContainer,
                            children: (0, r.jsx)(i.q4e, {
                                maxVisibleItems: x.Q9.length,
                                value: Y,
                                options: x.Q9.map((e) =>
                                    E(C({}, e), {
                                        key: e.value,
                                        value: e.value,
                                        label: e.label()
                                    })
                                ),
                                onChange: H,
                                look: i.qQH.CUSTOM,
                                popoutWidth: 200,
                                popoutPosition: 'right'
                            })
                        }),
                        (0, r.jsx)(i.zxk, {
                            type: 'submit',
                            size: i.zxk.Sizes.MEDIUM,
                            color: i.zxk.Colors.BRAND,
                            onClick: G,
                            children: O.NW.string(O.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
