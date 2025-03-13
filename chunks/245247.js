n.d(t, { Z: () => E }), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(442837),
    i = n(481060),
    o = n(596454),
    s = n(493773),
    u = n(100527),
    c = n(318766),
    d = n(907040),
    f = n(594174),
    m = n(626135),
    p = n(368326),
    h = n(720449),
    S = n(684269),
    b = n(429467),
    j = n(676035),
    g = n(926563),
    v = n(875425),
    _ = n(981631),
    x = n(185923),
    N = n(388032),
    O = n(95616);
function y(e) {
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
function C(e, t) {
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
function E(e) {
    var t, n;
    let { transitionState: E, onClose: P, sourceAnalyticsContext: T, sourceAnalyticsLocations: w } = e,
        k = (0, p.p)({ location: 'CustomStatusModalWithPreview' }),
        I = (0, l.e7)([f.default], () => {
            var e;
            return null !== (e = f.default.getCurrentUser()) && void 0 !== e ? e : null;
        }),
        D = (0, j.a)(),
        [B, Z] = a.useState(null !== (t = null == D ? void 0 : D.state) && void 0 !== t ? t : ''),
        [A, W] = a.useState(null !== (n = null == D ? void 0 : D.emoji) && void 0 !== n ? n : null),
        [z, R] = a.useState((0, S.Z)()),
        L = a.useRef(null);
    a.useEffect(() => {
        m.default.track(_.rMx.OPEN_MODAL, {
            type: u.Z.CUSTOM_STATUS_MODAL,
            location_stack: w
        });
    }, [w]),
        (0, s.ZP)(() => {
            if (null != L.current) {
                let e = L.current;
                e.focus(), e.setSelection(B.length, B.length);
            }
        });
    let M = (e) => {
            null != e &&
                W(
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
        U = () => {
            (0, h.Z)(B, A, z, T), P();
        },
        H = () =>
            null == A
                ? null
                : () =>
                      (0, r.jsx)(o.Z, {
                          className: O.emoji,
                          emojiId: A.id,
                          emojiName: A.name,
                          animated: !!A.animated
                      });
    return (0, r.jsxs)(i.Y0X, {
        transitionState: E,
        children: [
            (0, r.jsxs)(i.xBx, {
                separator: !1,
                className: O.header,
                children: [
                    (0, r.jsx)('div', {
                        className: O.headerTitle,
                        children: (0, r.jsx)(i.X6q, {
                            variant: 'heading-xl/semibold',
                            children: N.NW.string(N.t.Zx4jzM)
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: O.headerCloseButton,
                        children: (0, r.jsx)(i.olH, { onClick: P })
                    })
                ]
            }),
            (0, r.jsxs)(i.hzk, {
                children: [
                    null != I &&
                        (0, r.jsx)('div', {
                            className: O.profilePreview,
                            children: (0, r.jsx)(g.Z, {
                                user: I,
                                previewText: B,
                                previewEmoji: A,
                                placeHolderText: N.NW.string(N.t['xod36+']),
                                transitionState: E
                            })
                        }),
                    (0, r.jsxs)(i.hjN, {
                        className: O.formGroup,
                        title: N.NW.string(N.t.UcdRn5),
                        children: [
                            (0, r.jsxs)('div', {
                                className: O.inputContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: O.emojiButtonContainer,
                                        children: (0, r.jsx)(i.yRy, {
                                            renderPopout: (e) => {
                                                let { closePopout: t } = e;
                                                return (0, r.jsx)(d.Z, {
                                                    closePopout: t,
                                                    onSelectEmoji: (e, n) => {
                                                        M(e), n && t();
                                                    },
                                                    pickerIntention: x.Hz.STATUS,
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
                                                    C(y({}, e), {
                                                        active: n,
                                                        className: O.emojiButton,
                                                        tabIndex: 0,
                                                        renderButtonContents: H()
                                                    })
                                                );
                                            }
                                        })
                                    }),
                                    (0, r.jsx)(i.Kx8, {
                                        autosize: !0,
                                        value: B,
                                        maxLength: v.s0,
                                        rows: 1,
                                        showRemainingCharacterCount: !1,
                                        placeholder: N.NW.string(N.t['xod36+']),
                                        onChange: (e) => {
                                            Z(e);
                                        },
                                        onKeyDown: (e) => {
                                            'Enter' === e.key && U();
                                        },
                                        className: O.input,
                                        inputRef: L
                                    }),
                                    (B.length > 0 || null != A) &&
                                        (0, r.jsx)('div', {
                                            className: O.clearButtonWrapper,
                                            children: (0, r.jsx)(i.zxk, {
                                                focusProps: {
                                                    offset: {
                                                        top: 8,
                                                        bottom: 8,
                                                        left: -2,
                                                        right: -2
                                                    }
                                                },
                                                className: O.clearButton,
                                                onClick: () => {
                                                    Z(''), W(null);
                                                },
                                                look: i.zxk.Looks.BLANK,
                                                size: i.zxk.Sizes.NONE,
                                                children: (0, r.jsx)(i.k$p, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: O.clearIcon
                                                })
                                            })
                                        })
                                ]
                            }),
                            k &&
                                (0, r.jsxs)(i.P3F, {
                                    className: O.needInspiration,
                                    onClick: () => {
                                        Z((0, b.Z)());
                                    },
                                    children: [(0, r.jsx)(i.$2U, { size: 'sm' }), N.NW.string(N.t.UH6ieX)]
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(i.mzw, {
                children: (0, r.jsxs)('div', {
                    className: O.footer,
                    children: [
                        (0, r.jsx)('div', {
                            className: O.clearAfterSelectContainer,
                            children: (0, r.jsx)(i.q4e, {
                                maxVisibleItems: v.Q9.length,
                                value: z,
                                options: v.Q9.map((e) =>
                                    C(y({}, e), {
                                        key: e.value,
                                        value: e.value,
                                        label: e.label()
                                    })
                                ),
                                onChange: R,
                                look: i.qQH.CUSTOM,
                                popoutWidth: 200,
                                popoutPosition: 'right'
                            })
                        }),
                        (0, r.jsx)(i.zxk, {
                            type: 'submit',
                            size: i.zxk.Sizes.MEDIUM,
                            color: i.zxk.Colors.BRAND,
                            onClick: U,
                            children: N.NW.string(N.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
