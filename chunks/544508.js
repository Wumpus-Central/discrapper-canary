(r.d(t, { Z: () => v }), r(388685), r(704826), r(35282));
var n = r(255367),
    i = r(73800),
    a = r(120356),
    o = r.n(a),
    s = r(42133),
    l = r(399606),
    c = r(481060),
    u = r(607070),
    d = r(745510),
    m = r(899007),
    g = r(867176),
    f = r(51144),
    p = r(346585),
    E = r(81259),
    h = r(119848),
    y = r(801461),
    O = r(228168),
    b = r(388032),
    S = r(927687),
    _ = r(733469);
let x = i.forwardRef(function (e, t) {
        let { style: r, value: i, placeholder: a, maxLength: s, onFocus: l, onChange: u } = e;
        return (0, n.jsx)(c.Kx8, {
            className: o()(S.userCardInput, r),
            autosize: !0,
            error: null,
            showCharacterCount: !1,
            spellCheck: !1,
            showRemainingCharacterCount: !1,
            value: i,
            placeholder: a,
            rows: 1,
            maxLength: s,
            onChange: u,
            onFocus: l,
            onKeyDown: (e) => {
                'Enter' === e.key && e.preventDefault();
            },
            inputRef: t
        });
    }),
    v = i.forwardRef(function (e, t) {
        let { user: r, error: a, formValues: v, displayProfile: N, onChangeFormValue: j, onFocusDisplayName: T, onFocusUsername: I, editState: C, footerNotice: P, usernameSuggestionLoading: A, oneClickFlow: R } = e,
            { username: w, globalName: M } = v,
            L = i.useRef(null),
            k = i.useRef(null),
            D = i.useMemo(() => r.merge({ discriminator: '0000' }), [r]),
            [U, Z] = (0, c.q_F)(() => ({
                opacity: 0,
                y: 5
            }));
        (i.useEffect(() => {
            Z({
                y: 0,
                opacity: 1,
                from: {
                    y: 5,
                    opacity: 0
                }
            });
        }, [Z, C]),
            i.useImperativeHandle(
                t,
                () => ({
                    focusDisplayName: () => {
                        var e, t, r;
                        (null == (t = k.current) || t.setSelection(0, null == (e = k.current) ? void 0 : e.value.length), null == (r = k.current) || r.focus());
                    },
                    focusUsername: () => {
                        var e, t, r;
                        (null == (t = L.current) || t.setSelection(0, null == (e = L.current) ? void 0 : e.value.length), null == (r = L.current) || r.focus());
                    }
                }),
                []
            ));
        let G = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
            { createMultipleConfettiAt: W } = i.useContext(d.h),
            F = null == N ? void 0 : N.getLegacyUsername();
        return (
            i.useEffect(() => {
                !G &&
                    C === y.Wq.PREVIEW &&
                    r.username.includes(y.nA) &&
                    (W(
                        window.innerWidth / 2 + 150,
                        0,
                        {
                            velocity: {
                                type: 'static-random',
                                minValue: {
                                    x: 0,
                                    y: -180
                                },
                                maxValue: {
                                    x: 500,
                                    y: 180
                                }
                            }
                        },
                        15
                    ),
                    W(
                        window.innerWidth / 2 - 150,
                        0,
                        {
                            velocity: {
                                type: 'static-random',
                                minValue: {
                                    x: -500,
                                    y: -180
                                },
                                maxValue: {
                                    x: 0,
                                    y: 180
                                }
                            }
                        },
                        15
                    ));
            }, [W, C, r, G]),
            (0, n.jsxs)('div', {
                className: o()(S.userCardContainer, { [S.shinyCard]: C === y.Wq.PREVIEW }),
                children: [
                    (0, n.jsxs)('div', {
                        className: S.profileCard,
                        children: [
                            (0, n.jsx)(g.Z, {
                                user: D,
                                displayProfile: N,
                                themeType: O.lY.SIDEBAR
                            }),
                            (0, n.jsx)(m.Z, {
                                user: D,
                                displayProfile: N,
                                themeType: O.lY.SIDEBAR
                            }),
                            C === y.Wq.PREVIEW &&
                                null != F &&
                                (0, n.jsx)('div', {
                                    className: S.legacyUsernameBadgeContainer,
                                    children: (0, n.jsx)(c.ua7, {
                                        position: 'top',
                                        text: b.intl.formatToPlainString(b.t.bhrgkJ, { legacyUsername: F }),
                                        spacing: 12,
                                        children: (e) => {
                                            var t, r;
                                            return (0, n.jsx)(
                                                c.eee,
                                                ((t = (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var r = null != arguments[t] ? arguments[t] : {},
                                                            n = Object.keys(r);
                                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                                            (n = n.concat(
                                                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                                })
                                                            )),
                                                            n.forEach(function (t) {
                                                                var n;
                                                                ((n = r[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: n,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[t] = n));
                                                            }));
                                                    }
                                                    return e;
                                                })({}, e)),
                                                (r = r =
                                                    {
                                                        onClick: e.onClick,
                                                        children: (0, n.jsx)('img', {
                                                            className: S.legacyUsernameBadge,
                                                            alt: '',
                                                            src: _
                                                        })
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                                    : (function (e, t) {
                                                          var r = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var n = Object.getOwnPropertySymbols(e);
                                                              r.push.apply(r, n);
                                                          }
                                                          return r;
                                                      })(Object(r)).forEach(function (e) {
                                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                                      }),
                                                t)
                                            );
                                        }
                                    })
                                })
                        ]
                    }),
                    C !== y.Wq.PREVIEW &&
                        (0, n.jsxs)(s.animated.div, {
                            style: {
                                opacity: U.opacity,
                                y: U.y
                            },
                            className: S.inputContainer,
                            children: [
                                C === y.Wq.EDIT_DISPLAY_NAME &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(c.Text, {
                                                className: S.textPadding,
                                                color: 'text-muted',
                                                variant: 'text-sm/semibold',
                                                children: b.intl.string(b.t['9AjdkJ'])
                                            }),
                                            (0, n.jsx)(x, {
                                                style: o()(S.displayNameHeight, S['heading-xl/bold']),
                                                value: null != M ? M : '',
                                                placeholder: f.ZP.getName(r),
                                                maxLength: y.hy,
                                                onChange: (e) => j({ globalName: e }),
                                                onFocus: T,
                                                ref: k
                                            })
                                        ]
                                    }),
                                (C === y.Wq.EDIT_USERNAME || C === y.Wq.SUGGESTION) &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(c.Text, {
                                                className: S.textPadding,
                                                color: 'text-muted',
                                                variant: 'text-sm/semibold',
                                                children: b.intl.string(b.t.IEpCBQ)
                                            }),
                                            (0, n.jsx)(x, {
                                                style: o()(S.userCardHeight, S.lowercaseUsername, S['heading-lg/medium']),
                                                value: null != w ? w : '',
                                                placeholder: r.username,
                                                maxLength: y.hy,
                                                onChange: (e) => j({ username: e.replace('@', '') }),
                                                onFocus: I,
                                                ref: L
                                            })
                                        ]
                                    }),
                                (0, n.jsx)('div', {
                                    className: S.messageContainer,
                                    children: (() => {
                                        if (null != a)
                                            return (0, n.jsx)(E.Z, {
                                                type: 'error',
                                                children: a
                                            });
                                        if (null != P) {
                                            if (C !== y.Wq.SUGGESTION)
                                                return (0, n.jsx)(c.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: P
                                                });
                                            else if (!A)
                                                return (0, n.jsx)(E.Z, {
                                                    type: 'success',
                                                    children: P
                                                });
                                        }
                                        return null == P && null == a && (C === y.Wq.EDIT_USERNAME || C === y.Wq.SUGGESTION)
                                            ? (0, n.jsx)(h.Z, {
                                                  username: w,
                                                  oneClickFlow: R
                                              })
                                            : null;
                                    })()
                                })
                            ]
                        }),
                    C === y.Wq.PREVIEW &&
                        (0, n.jsxs)('div', {
                            className: S.userCard,
                            children: [
                                (0, n.jsx)(c.X6q, {
                                    color: 'header-primary',
                                    variant: 'heading-xl/bold',
                                    children: f.ZP.getName(r)
                                }),
                                (0, n.jsx)(c.X6q, {
                                    color: 'text-default',
                                    variant: 'heading-lg/medium',
                                    children: r.username
                                }),
                                (0, n.jsx)(c.Text, {
                                    className: S.memberText,
                                    color: 'text-muted',
                                    variant: 'text-sm/medium',
                                    children: b.intl.format(b.t['9rfonp'], { date: (0, p.K9)(r.id) })
                                })
                            ]
                        })
                ]
            })
        );
    });
