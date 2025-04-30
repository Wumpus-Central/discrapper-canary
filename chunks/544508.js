n.d(t, { Z: () => v }), n(388685), n(704826), n(35282);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(272573),
    a = n(399606),
    c = n(481060),
    u = n(607070),
    d = n(745510),
    g = n(899007),
    m = n(867176),
    f = n(51144),
    E = n(346585),
    h = n(81259),
    O = n(119848),
    p = n(801461),
    y = n(228168),
    S = n(388032),
    b = n(927687),
    x = n(733469);
let j = i.forwardRef(function (e, t) {
        let { style: n, value: i, placeholder: s, maxLength: l, onFocus: a, onChange: u } = e;
        return (0, r.jsx)(c.Kx8, {
            className: o()(b.userCardInput, n),
            autosize: !0,
            error: null,
            showCharacterCount: !1,
            spellCheck: !1,
            showRemainingCharacterCount: !1,
            value: i,
            placeholder: s,
            rows: 1,
            maxLength: l,
            onChange: u,
            onFocus: a,
            onKeyDown: (e) => {
                'Enter' === e.key && e.preventDefault();
            },
            inputRef: t
        });
    }),
    v = i.forwardRef(function (e, t) {
        let { user: n, error: s, formValues: v, displayProfile: N, onChangeFormValue: T, onFocusDisplayName: P, onFocusUsername: _, editState: I, footerNotice: C, usernameSuggestionLoading: A, oneClickFlow: w } = e,
            { username: k, globalName: M } = v,
            L = i.useRef(null),
            R = i.useRef(null),
            D = i.useMemo(() => n.merge({ discriminator: '0000' }), [n]),
            [U, Z] = (0, c.q_F)(() => ({
                opacity: 0,
                y: 5
            }));
        i.useEffect(() => {
            Z({
                y: 0,
                opacity: 1,
                from: {
                    y: 5,
                    opacity: 0
                }
            });
        }, [Z, I]),
            i.useImperativeHandle(
                t,
                () => ({
                    focusDisplayName: () => {
                        var e, t, n;
                        null == (t = R.current) || t.setSelection(0, null == (e = R.current) ? void 0 : e.value.length), null == (n = R.current) || n.focus();
                    },
                    focusUsername: () => {
                        var e, t, n;
                        null == (t = L.current) || t.setSelection(0, null == (e = L.current) ? void 0 : e.value.length), null == (n = L.current) || n.focus();
                    }
                }),
                []
            );
        let G = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
            { createMultipleConfettiAt: W } = i.useContext(d.h),
            q = null == N ? void 0 : N.getLegacyUsername();
        return (
            i.useEffect(() => {
                !G &&
                    I === p.Wq.PREVIEW &&
                    n.username.includes(p.nA) &&
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
            }, [W, I, n, G]),
            (0, r.jsxs)('div', {
                className: o()(b.userCardContainer, { [b.shinyCard]: I === p.Wq.PREVIEW }),
                children: [
                    (0, r.jsxs)('div', {
                        className: b.profileCard,
                        children: [
                            (0, r.jsx)(m.Z, {
                                user: D,
                                displayProfile: N,
                                themeType: y.lY.SIDEBAR
                            }),
                            (0, r.jsx)(g.Z, {
                                user: D,
                                displayProfile: N,
                                themeType: y.lY.SIDEBAR
                            }),
                            I === p.Wq.PREVIEW &&
                                null != q &&
                                (0, r.jsx)('div', {
                                    className: b.legacyUsernameBadgeContainer,
                                    children: (0, r.jsx)(c.ua7, {
                                        position: 'top',
                                        text: S.intl.formatToPlainString(S.t.bhrgkJ, { legacyUsername: q }),
                                        spacing: 12,
                                        children: (e) => {
                                            var t, n;
                                            return (0, r.jsx)(
                                                c.eee,
                                                ((t = (function (e) {
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
                                                (n = n =
                                                    {
                                                        onClick: e.onClick,
                                                        children: (0, r.jsx)('img', {
                                                            className: b.legacyUsernameBadge,
                                                            alt: '',
                                                            src: x
                                                        })
                                                    }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var r = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, r);
                                                          }
                                                          return n;
                                                      })(Object(n)).forEach(function (e) {
                                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                      }),
                                                t)
                                            );
                                        }
                                    })
                                })
                        ]
                    }),
                    I !== p.Wq.PREVIEW &&
                        (0, r.jsxs)(l.animated.div, {
                            style: {
                                opacity: U.opacity,
                                y: U.y
                            },
                            className: b.inputContainer,
                            children: [
                                I === p.Wq.EDIT_DISPLAY_NAME &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(c.Text, {
                                                className: b.textPadding,
                                                color: 'text-muted',
                                                variant: 'text-sm/semibold',
                                                children: S.intl.string(S.t['9AjdkJ'])
                                            }),
                                            (0, r.jsx)(j, {
                                                style: o()(b.displayNameHeight, b['heading-xl/bold']),
                                                value: null != M ? M : '',
                                                placeholder: f.ZP.getName(n),
                                                maxLength: p.hy,
                                                onChange: (e) => T({ globalName: e }),
                                                onFocus: P,
                                                ref: R
                                            })
                                        ]
                                    }),
                                (I === p.Wq.EDIT_USERNAME || I === p.Wq.SUGGESTION) &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(c.Text, {
                                                className: b.textPadding,
                                                color: 'text-muted',
                                                variant: 'text-sm/semibold',
                                                children: S.intl.string(S.t.IEpCBQ)
                                            }),
                                            (0, r.jsx)(j, {
                                                style: o()(b.userCardHeight, b.lowercaseUsername, b['heading-lg/medium']),
                                                value: null != k ? k : '',
                                                placeholder: n.username,
                                                maxLength: p.hy,
                                                onChange: (e) => T({ username: e.replace('@', '') }),
                                                onFocus: _,
                                                ref: L
                                            })
                                        ]
                                    }),
                                (0, r.jsx)('div', {
                                    className: b.messageContainer,
                                    children: (() => {
                                        if (null != s)
                                            return (0, r.jsx)(h.Z, {
                                                type: 'error',
                                                children: s
                                            });
                                        if (null != C) {
                                            if (I !== p.Wq.SUGGESTION)
                                                return (0, r.jsx)(c.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: C
                                                });
                                            else if (!A)
                                                return (0, r.jsx)(h.Z, {
                                                    type: 'success',
                                                    children: C
                                                });
                                        }
                                        return null == C && null == s && (I === p.Wq.EDIT_USERNAME || I === p.Wq.SUGGESTION)
                                            ? (0, r.jsx)(O.Z, {
                                                  username: k,
                                                  oneClickFlow: w
                                              })
                                            : null;
                                    })()
                                })
                            ]
                        }),
                    I === p.Wq.PREVIEW &&
                        (0, r.jsxs)('div', {
                            className: b.userCard,
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    color: 'header-primary',
                                    variant: 'heading-xl/bold',
                                    children: f.ZP.getName(n)
                                }),
                                (0, r.jsx)(c.X6q, {
                                    color: 'text-normal',
                                    variant: 'heading-lg/medium',
                                    children: n.username
                                }),
                                (0, r.jsx)(c.Text, {
                                    className: b.memberText,
                                    color: 'text-muted',
                                    variant: 'text-sm/medium',
                                    children: S.intl.format(S.t['9rfonp'], { date: (0, E.K9)(n.id) })
                                })
                            ]
                        })
                ]
            })
        );
    });
