n.d(t, { Z: () => T }), n(47120);
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
    N = n(185923),
    O = n(388032),
    _ = n(32533);
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
function y(e, t) {
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
    var t, n;
    let { transitionState: T, onClose: E, sourceAnalyticsContext: I, sourceAnalyticsLocations: w, prompt: P = null } = e,
        k = (0, h.p)({ location: 'CustomStatusModalWithPreview' }),
        D = (0, l.e7)([m.default], () => {
            var e;
            return null !== (e = m.default.getCurrentUser()) && void 0 !== e ? e : null;
        }),
        B = (0, j.a)(),
        [A, Z] = a.useState(null !== (t = null == B ? void 0 : B.state) && void 0 !== t ? t : ''),
        [W, R] = a.useState(null !== (n = null == B ? void 0 : B.emoji) && void 0 !== n ? n : null),
        [z, L] = a.useState((0, b.Z)()),
        [U, M] = a.useState(null),
        H = a.useRef(null),
        Y = k && (null != U || null != P) ? (null != U ? U : P) : O.NW.string(O.t['xod36+']);
    a.useEffect(() => {
        p.default.track(x.rMx.OPEN_MODAL, {
            type: u.Z.CUSTOM_STATUS_MODAL,
            location_stack: w
        });
    }, [w]),
        (0, s.ZP)(() => {
            var e, t;
            null === (e = H.current) || void 0 === e || e.focus(), null === (t = H.current) || void 0 === t || t.setSelection(A.length, A.length);
        });
    let F = (e) => {
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
        q = () => {
            (0, f.Z)(A, W, z, I), E();
        },
        G = () =>
            null == W
                ? null
                : () =>
                      (0, r.jsx)(o.Z, {
                          className: _.emoji,
                          emojiId: W.id,
                          emojiName: W.name,
                          animated: !!W.animated
                      }),
        K = k ? O.NW.string(O.t.rp0aho) : O.NW.string(O.t.UcdRn5);
    return (0, r.jsxs)(i.Y0X, {
        transitionState: T,
        children: [
            (0, r.jsxs)(i.xBx, {
                separator: !1,
                className: _.header,
                children: [
                    (0, r.jsx)('div', {
                        className: _.headerTitle,
                        children: (0, r.jsx)(i.X6q, {
                            variant: 'heading-xl/semibold',
                            children: O.NW.string(O.t.Zx4jzM)
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: _.headerCloseButton,
                        children: (0, r.jsx)(i.olH, { onClick: E })
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
                                placeHolderText: Y,
                                transitionState: T
                            })
                        }),
                    (0, r.jsx)(i.hjN, {
                        className: _.formGroup,
                        titleClassName: _.customStatusInputTitle,
                        title: (0, r.jsxs)('div', {
                            className: _.customStatusInputTitleContainer,
                            children: [
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-xs/medium',
                                    children: K
                                }),
                                k &&
                                    (0, r.jsxs)(i.P3F, {
                                        className: _.needInspiration,
                                        onClick: () => {
                                            var e;
                                            Z(''), M((0, S.Z)()), null === (e = H.current) || void 0 === e || e.focus();
                                        },
                                        children: [
                                            (0, r.jsx)(i.$2U, { size: 'xs' }),
                                            (0, r.jsx)(i.Text, {
                                                variant: 'text-xs/medium',
                                                children: O.NW.string(O.t.UH6ieX)
                                            })
                                        ]
                                    })
                            ]
                        }),
                        children: (0, r.jsxs)('div', {
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
                                                    F(e), n && t();
                                                },
                                                pickerIntention: N.Hz.STATUS,
                                                onNavigateAway: E
                                            });
                                        },
                                        position: 'left',
                                        animation: i.yRy.Animation.NONE,
                                        align: 'top',
                                        children: (e, t) => {
                                            let { isShown: n } = t;
                                            return (0, r.jsx)(
                                                c.Z,
                                                y(C({}, e), {
                                                    active: n,
                                                    className: _.emojiButton,
                                                    tabIndex: 0,
                                                    renderButtonContents: G()
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
                                    placeholder: null != Y ? Y : void 0,
                                    onChange: (e) => {
                                        Z(e);
                                    },
                                    onKeyDown: (e) => {
                                        'Enter' === e.key && q();
                                    },
                                    className: _.input,
                                    inputRef: H
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
                        })
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
                                    y(C({}, e), {
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
                            onClick: q,
                            children: O.NW.string(O.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
