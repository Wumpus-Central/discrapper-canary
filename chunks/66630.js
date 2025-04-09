n.d(t, { Z: () => D }), n(388685);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(442837),
    s = n(481060),
    u = n(596454),
    c = n(393238),
    d = n(493773),
    m = n(100527),
    f = n(318766),
    p = n(907040),
    h = n(594174),
    b = n(626135),
    S = n(644540),
    j = n(368326),
    g = n(720449),
    x = n(684269),
    O = n(397416),
    v = n(745579),
    _ = n(429467),
    N = n(676035),
    y = n(926563),
    C = n(875425),
    T = n(981631),
    P = n(185923),
    w = n(388032),
    E = n(782628);
let I = [C.HO.ADD_STATUS, C.HO.WHATS_ON_YOUR_MIND];
function D(e) {
    var t, n;
    let { transitionState: i, onClose: D, sourceAnalyticsContext: k, sourceAnalyticsLocations: Z, prompt: B = null } = e,
        A = (0, j.p)({ location: 'CustomStatusModalWithPreview' }),
        R = (0, S.P)({ location: 'CustomStatusModalWithPreview' }),
        W = (0, l.e7)([h.default], () => {
            var e;
            return null != (e = h.default.getCurrentUser()) ? e : null;
        }),
        M = (0, N.a)(),
        [U, z] = a.useState(null != (t = null == M ? void 0 : M.state) ? t : ''),
        [L, F] = a.useState(null != (n = null == M ? void 0 : M.emoji) ? n : null),
        [H, Y] = a.useState((0, x.Z)()),
        K = a.useRef(null),
        q = a.useRef(null),
        G = a.useRef(null),
        [V, X] = a.useState(null != B ? B : null),
        $ = U.length > 0 || null != L,
        Q = A && null != V ? V.label() : w.NW.string(w.t['xod36+']),
        [J, ee] = a.useState(Q),
        { ref: et, width: en } = (0, c.Z)(Q);
    a.useEffect(() => {
        let e = G.current;
        if (null == en || null == e) return;
        let t = en - 78;
        e.textContent = Q;
        let n = e.getBoundingClientRect().width;
        if (n <= t) ee(Q);
        else {
            let e = n / Q.length,
                r = Math.floor((t - 3 * e) / e);
            ee(''.concat(Q.substring(0, r)).concat('...'));
        }
    }, [en, Q]),
        a.useEffect(() => {
            b.default.track(T.rMx.OPEN_MODAL, {
                type: m.Z.CUSTOM_STATUS_MODAL,
                location_stack: Z
            });
        }, [Z]),
        (0, d.ZP)(() => {
            var e, t;
            null == (e = K.current) || e.focus(), null == (t = K.current) || t.setSelection(U.length, U.length);
        });
    let er = (e) => {
            null != e &&
                F(
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
        ea = () => {
            (0, g.Z)({
                text: U,
                emojiInfo: L,
                clearAfter: H,
                analyticsContext: k,
                prompt: V
            }),
                D();
        },
        ei = () =>
            null == L
                ? null
                : () =>
                      (0, r.jsx)(u.Z, {
                          className: E.emoji,
                          emojiId: L.id,
                          emojiName: L.name,
                          animated: !!L.animated
                      }),
        eo = A ? w.NW.string(w.t.rp0aho) : w.NW.string(w.t.UcdRn5),
        el = 'custom-status-placeholder-text';
    return (0, r.jsxs)(s.Y0X, {
        transitionState: i,
        children: [
            (0, r.jsxs)(s.xBx, {
                separator: !1,
                className: E.header,
                children: [
                    (0, r.jsx)('div', {
                        className: E.headerTitle,
                        children: (0, r.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            children: w.NW.string(w.t.Zx4jzM)
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: E.headerCloseButton,
                        children: (0, r.jsx)(s.olH, { onClick: D })
                    })
                ]
            }),
            (0, r.jsxs)(s.hzk, {
                children: [
                    null != W &&
                        (0, r.jsx)('div', {
                            className: E.profilePreview,
                            children: (0, r.jsx)(y.Z, {
                                user: W,
                                previewText: U,
                                previewEmoji: L,
                                placeHolderText: Q,
                                transitionState: i
                            })
                        }),
                    (0, r.jsxs)(s.hjN, {
                        className: E.formGroup,
                        titleClassName: E.customStatusInputTitle,
                        title: eo,
                        children: [
                            (0, r.jsxs)('div', {
                                className: E.inputContainer,
                                ref: et,
                                children: [
                                    (0, r.jsx)('span', {
                                        ref: G,
                                        className: E.hiddenPlaceholder,
                                        'aria-hidden': 'true'
                                    }),
                                    (0, r.jsx)('div', {
                                        className: E.emojiButtonContainer,
                                        children: (0, r.jsx)(s.yRy, {
                                            targetElementRef: q,
                                            renderPopout: (e) => {
                                                let { closePopout: t } = e;
                                                return (0, r.jsx)(p.Z, {
                                                    closePopout: t,
                                                    onSelectEmoji: (e, n) => {
                                                        er(e), n && t();
                                                    },
                                                    pickerIntention: P.Hz.STATUS,
                                                    onNavigateAway: D
                                                });
                                            },
                                            position: 'left',
                                            animation: s.yRy.Animation.NONE,
                                            align: 'top',
                                            children: (e, t) => {
                                                var n, a;
                                                let { isShown: i } = t;
                                                return (0, r.jsx)(
                                                    f.Z,
                                                    ((n = (function (e) {
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
                                                    })({}, e)),
                                                    (a = a =
                                                        {
                                                            ref: q,
                                                            active: i,
                                                            className: E.emojiButton,
                                                            tabIndex: 0,
                                                            renderButtonContents: ei()
                                                        }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                                                        : (function (e, t) {
                                                              var n = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var r = Object.getOwnPropertySymbols(e);
                                                                  n.push.apply(n, r);
                                                              }
                                                              return n;
                                                          })(Object(a)).forEach(function (e) {
                                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                                                          }),
                                                    n)
                                                );
                                            }
                                        })
                                    }),
                                    (0, r.jsx)(s.Kx8, {
                                        autosize: !0,
                                        'aria-describedby': el,
                                        value: U,
                                        maxLength: C.s0,
                                        rows: 1,
                                        showRemainingCharacterCount: !1,
                                        placeholder: J,
                                        onChange: (e) => {
                                            z(e);
                                        },
                                        onKeyDown: (e) => {
                                            'Enter' === e.key && ea();
                                        },
                                        className: E.input,
                                        inputRef: K
                                    }),
                                    (0, r.jsx)(s.nn4, {
                                        id: el,
                                        children: ''.concat(w.NW.string(w.t.EVV6ub), ': ').concat(Q)
                                    }),
                                    (U.length > 0 || null != L) &&
                                        (0, r.jsx)('div', {
                                            className: E.clearButtonWrapper,
                                            children: (0, r.jsx)(s.zxk, {
                                                focusProps: {
                                                    offset: {
                                                        top: 8,
                                                        bottom: 8,
                                                        left: -2,
                                                        right: -2
                                                    }
                                                },
                                                className: E.clearButton,
                                                onClick: () => {
                                                    z(''), F(null);
                                                },
                                                look: s.zxk.Looks.BLANK,
                                                size: s.zxk.Sizes.NONE,
                                                children: (0, r.jsx)(s.k$p, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: E.clearIcon
                                                })
                                            })
                                        })
                                ]
                            }),
                            A &&
                                (0, r.jsxs)(s.P3F, {
                                    ignoreKeyPress: $,
                                    'aria-disabled': $,
                                    className: o()(E.needInspiration, $ && E.needInspirationDisabled),
                                    onClick: $
                                        ? void 0
                                        : () => {
                                              let e = (0, _.Z)((null == V ? void 0 : V.value) != null ? new Set([V.value, ...I]) : void 0);
                                              b.default.track(T.rMx.CUSTOM_STATUS_RANDOMIZER_CLICKED, {
                                                  previous_prompt_type: null == V ? void 0 : V.value,
                                                  new_prompt_type: null == e ? void 0 : e.value,
                                                  location_stack: Z
                                              }),
                                                  z(''),
                                                  X(e),
                                                  null != e && s.uvj.announce(e.label());
                                          },
                                    children: [
                                        (0, r.jsx)(s.$2U, { size: 'xs' }),
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-xs/medium',
                                            children: w.NW.string(w.t.UH6ieX)
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(s.mzw, {
                children: (0, r.jsxs)('div', {
                    className: E.footer,
                    children: [
                        (0, r.jsx)('div', {
                            className: E.clearAfterSelectContainer,
                            children: (0, r.jsx)(s.q4e, {
                                maxVisibleItems: C.wS.length,
                                value: H,
                                options: C.wS.map((e) => ({
                                    value: e,
                                    key: e,
                                    label: (0, O.Z)(e, R)
                                })),
                                onChange: (e) => Y(e),
                                renderOptionLabel: (e) => {
                                    let { value: t } = e;
                                    return (0, v.Z)(t, R);
                                },
                                look: s.qQH.CUSTOM,
                                popoutWidth: 200,
                                popoutPosition: 'right'
                            })
                        }),
                        (0, r.jsx)(s.zxk, {
                            type: 'submit',
                            size: s.zxk.Sizes.MEDIUM,
                            color: s.zxk.Colors.BRAND,
                            onClick: ea,
                            children: w.NW.string(w.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
