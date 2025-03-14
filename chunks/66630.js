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
    m = n(594174),
    p = n(626135),
    h = n(368326),
    f = n(720449),
    b = n(684269),
    S = n(429467),
    j = n(676035),
    g = n(926563),
    v = n(875425),
    x = n(981631),
    O = n(185923),
    N = n(388032),
    _ = n(32533);
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
    let { transitionState: E, onClose: T, sourceAnalyticsContext: w, sourceAnalyticsLocations: P, prompt: k = null } = e,
        I = (0, h.p)({ location: 'CustomStatusModalWithPreview' }),
        D = (0, l.e7)([m.default], () => {
            var e;
            return null !== (e = m.default.getCurrentUser()) && void 0 !== e ? e : null;
        }),
        B = (0, j.a)(),
        [A, Z] = a.useState(null !== (t = null == B ? void 0 : B.state) && void 0 !== t ? t : ''),
        [W, R] = a.useState(null !== (n = null == B ? void 0 : B.emoji) && void 0 !== n ? n : null),
        [z, L] = a.useState((0, b.Z)()),
        U = a.useRef(null),
        M = I && null !== k ? k : N.NW.string(N.t['xod36+']);
    a.useEffect(() => {
        p.default.track(x.rMx.OPEN_MODAL, {
            type: u.Z.CUSTOM_STATUS_MODAL,
            location_stack: P
        });
    }, [P]),
        (0, s.ZP)(() => {
            if (null != U.current) {
                let e = U.current;
                e.focus(), e.setSelection(A.length, A.length);
            }
        });
    let H = (e) => {
            null != e &&
                R(
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
        Y = () => {
            (0, f.Z)(A, W, z, w), T();
        },
        F = () =>
            null == W
                ? null
                : () =>
                      (0, r.jsx)(o.Z, {
                          className: _.emoji,
                          emojiId: W.id,
                          emojiName: W.name,
                          animated: !!W.animated
                      });
    return (0, r.jsxs)(i.Y0X, {
        transitionState: E,
        children: [
            (0, r.jsxs)(i.xBx, {
                separator: !1,
                className: _.header,
                children: [
                    (0, r.jsx)('div', {
                        className: _.headerTitle,
                        children: (0, r.jsx)(i.X6q, {
                            variant: 'heading-xl/semibold',
                            children: N.NW.string(N.t.Zx4jzM)
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: _.headerCloseButton,
                        children: (0, r.jsx)(i.olH, { onClick: T })
                    })
                ]
            }),
            (0, r.jsxs)(i.hzk, {
                children: [
                    null != D &&
                        (0, r.jsx)('div', {
                            className: _.profilePreview,
                            children: (0, r.jsx)(g.Z, {
                                user: D,
                                previewText: A,
                                previewEmoji: W,
                                placeHolderText: M,
                                transitionState: E
                            })
                        }),
                    (0, r.jsxs)(i.hjN, {
                        className: _.formGroup,
                        title: I ? N.NW.string(N.t.rp0aho) : N.NW.string(N.t.UcdRn5),
                        children: [
                            (0, r.jsxs)('div', {
                                className: _.inputContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: _.emojiButtonContainer,
                                        children: (0, r.jsx)(i.yRy, {
                                            renderPopout: (e) => {
                                                let { closePopout: t } = e;
                                                return (0, r.jsx)(d.Z, {
                                                    closePopout: t,
                                                    onSelectEmoji: (e, n) => {
                                                        H(e), n && t();
                                                    },
                                                    pickerIntention: O.Hz.STATUS,
                                                    onNavigateAway: T
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
                                                        className: _.emojiButton,
                                                        tabIndex: 0,
                                                        renderButtonContents: F()
                                                    })
                                                );
                                            }
                                        })
                                    }),
                                    (0, r.jsx)(i.Kx8, {
                                        autosize: !0,
                                        value: A,
                                        maxLength: v.s0,
                                        rows: 1,
                                        showRemainingCharacterCount: !1,
                                        placeholder: M,
                                        onChange: (e) => {
                                            Z(e);
                                        },
                                        onKeyDown: (e) => {
                                            'Enter' === e.key && Y();
                                        },
                                        className: _.input,
                                        inputRef: U
                                    }),
                                    (A.length > 0 || null != W) &&
                                        (0, r.jsx)('div', {
                                            className: _.clearButtonWrapper,
                                            children: (0, r.jsx)(i.zxk, {
                                                focusProps: {
                                                    offset: {
                                                        top: 8,
                                                        bottom: 8,
                                                        left: -2,
                                                        right: -2
                                                    }
                                                },
                                                className: _.clearButton,
                                                onClick: () => {
                                                    Z(''), R(null);
                                                },
                                                look: i.zxk.Looks.BLANK,
                                                size: i.zxk.Sizes.NONE,
                                                children: (0, r.jsx)(i.k$p, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: _.clearIcon
                                                })
                                            })
                                        })
                                ]
                            }),
                            I &&
                                (0, r.jsxs)(i.P3F, {
                                    className: _.needInspiration,
                                    onClick: () => {
                                        Z((0, S.Z)());
                                    },
                                    children: [(0, r.jsx)(i.$2U, { size: 'sm' }), N.NW.string(N.t.UH6ieX)]
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(i.mzw, {
                children: (0, r.jsxs)('div', {
                    className: _.footer,
                    children: [
                        (0, r.jsx)('div', {
                            className: _.clearAfterSelectContainer,
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
                                onChange: L,
                                look: i.qQH.CUSTOM,
                                popoutWidth: 200,
                                popoutPosition: 'right'
                            })
                        }),
                        (0, r.jsx)(i.zxk, {
                            type: 'submit',
                            size: i.zxk.Sizes.MEDIUM,
                            color: i.zxk.Colors.BRAND,
                            onClick: Y,
                            children: N.NW.string(N.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
