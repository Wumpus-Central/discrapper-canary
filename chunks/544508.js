r.d(t, { Z: () => N }), r(388685), r(704826), r(35282);
var n = r(255367),
    i = r(73800),
    o = r(120356),
    s = r.n(o),
    l = r(695469),
    a = r(399606),
    c = r(481060),
    u = r(607070),
    d = r(745510),
    m = r(899007),
    g = r(867176),
    f = r(51144),
    E = r(346585),
    O = r(81259),
    h = r(119848),
    p = r(801461),
    y = r(228168),
    S = r(388032),
    b = r(927687),
    x = r(733469);
let j = i.forwardRef(function (e, t) {
        let { style: r, value: i, placeholder: o, maxLength: l, onFocus: a, onChange: u } = e;
        return (0, n.jsx)(c.Kx8, {
            className: s()(b.userCardInput, r),
            autosize: !0,
            error: null,
            showCharacterCount: !1,
            spellCheck: !1,
            showRemainingCharacterCount: !1,
            value: i,
            placeholder: o,
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
    N = i.forwardRef(function (e, t) {
        let { user: r, error: o, formValues: N, displayProfile: v, onChangeFormValue: T, onFocusDisplayName: P, onFocusUsername: I, editState: _, footerNotice: C, usernameSuggestionLoading: A, oneClickFlow: w } = e,
            { username: M, globalName: L } = N,
            k = i.useRef(null),
            R = i.useRef(null),
            D = i.useMemo(() => r.merge({ discriminator: '0000' }), [r]),
            [Z, U] = (0, c.q_F)(() => ({
                opacity: 0,
                y: 5
            }));
        i.useEffect(() => {
            U({
                y: 0,
                opacity: 1,
                from: {
                    y: 5,
                    opacity: 0
                }
            });
        }, [U, _]),
            i.useImperativeHandle(
                t,
                () => ({
                    focusDisplayName: () => {
                        var e, t, r;
                        null == (t = R.current) || t.setSelection(0, null == (e = R.current) ? void 0 : e.value.length), null == (r = R.current) || r.focus();
                    },
                    focusUsername: () => {
                        var e, t, r;
                        null == (t = k.current) || t.setSelection(0, null == (e = k.current) ? void 0 : e.value.length), null == (r = k.current) || r.focus();
                    }
                }),
                []
            );
        let G = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
            { createMultipleConfettiAt: W } = i.useContext(d.h),
            z = null == v ? void 0 : v.getLegacyUsername();
        return (
            i.useEffect(() => {
                !G &&
                    _ === p.Wq.PREVIEW &&
                    r.username.includes(p.nA) &&
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
            }, [W, _, r, G]),
            (0, n.jsxs)('div', {
                className: s()(b.userCardContainer, { [b.shinyCard]: _ === p.Wq.PREVIEW }),
                children: [
                    (0, n.jsxs)('div', {
                        className: b.profileCard,
                        children: [
                            (0, n.jsx)(g.Z, {
                                user: D,
                                displayProfile: v,
                                themeType: y.lY.SIDEBAR
                            }),
                            (0, n.jsx)(m.Z, {
                                user: D,
                                displayProfile: v,
                                themeType: y.lY.SIDEBAR
                            }),
                            _ === p.Wq.PREVIEW &&
                                null != z &&
                                (0, n.jsx)('div', {
                                    className: b.legacyUsernameBadgeContainer,
                                    children: (0, n.jsx)(c.ua7, {
                                        position: 'top',
                                        text: S.intl.formatToPlainString(S.t.bhrgkJ, { legacyUsername: z }),
                                        spacing: 12,
                                        children: (e) => {
                                            var t, r;
                                            return (0, n.jsx)(
                                                c.eee,
                                                ((t = (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var r = null != arguments[t] ? arguments[t] : {},
                                                            n = Object.keys(r);
                                                        'function' == typeof Object.getOwnPropertySymbols &&
                                                            (n = n.concat(
                                                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                                })
                                                            )),
                                                            n.forEach(function (t) {
                                                                var n;
                                                                (n = r[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: n,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[t] = n);
                                                            });
                                                    }
                                                    return e;
                                                })({}, e)),
                                                (r = r =
                                                    {
                                                        onClick: e.onClick,
                                                        children: (0, n.jsx)('img', {
                                                            className: b.legacyUsernameBadge,
                                                            alt: '',
                                                            src: x
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
                    _ !== p.Wq.PREVIEW &&
                        (0, n.jsxs)(l.animated.div, {
                            style: {
                                opacity: Z.opacity,
                                y: Z.y
                            },
                            className: b.inputContainer,
                            children: [
                                _ === p.Wq.EDIT_DISPLAY_NAME &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(c.Text, {
                                                className: b.textPadding,
                                                color: 'text-muted',
                                                variant: 'text-sm/semibold',
                                                children: S.intl.string(S.t['9AjdkJ'])
                                            }),
                                            (0, n.jsx)(j, {
                                                style: s()(b.displayNameHeight, b['heading-xl/bold']),
                                                value: null != L ? L : '',
                                                placeholder: f.ZP.getName(r),
                                                maxLength: p.hy,
                                                onChange: (e) => T({ globalName: e }),
                                                onFocus: P,
                                                ref: R
                                            })
                                        ]
                                    }),
                                (_ === p.Wq.EDIT_USERNAME || _ === p.Wq.SUGGESTION) &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(c.Text, {
                                                className: b.textPadding,
                                                color: 'text-muted',
                                                variant: 'text-sm/semibold',
                                                children: S.intl.string(S.t.IEpCBQ)
                                            }),
                                            (0, n.jsx)(j, {
                                                style: s()(b.userCardHeight, b.lowercaseUsername, b['heading-lg/medium']),
                                                value: null != M ? M : '',
                                                placeholder: r.username,
                                                maxLength: p.hy,
                                                onChange: (e) => T({ username: e.replace('@', '') }),
                                                onFocus: I,
                                                ref: k
                                            })
                                        ]
                                    }),
                                (0, n.jsx)('div', {
                                    className: b.messageContainer,
                                    children: (() => {
                                        if (null != o)
                                            return (0, n.jsx)(O.Z, {
                                                type: 'error',
                                                children: o
                                            });
                                        if (null != C) {
                                            if (_ !== p.Wq.SUGGESTION)
                                                return (0, n.jsx)(c.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: C
                                                });
                                            else if (!A)
                                                return (0, n.jsx)(O.Z, {
                                                    type: 'success',
                                                    children: C
                                                });
                                        }
                                        return null == C && null == o && (_ === p.Wq.EDIT_USERNAME || _ === p.Wq.SUGGESTION)
                                            ? (0, n.jsx)(h.Z, {
                                                  username: M,
                                                  oneClickFlow: w
                                              })
                                            : null;
                                    })()
                                })
                            ]
                        }),
                    _ === p.Wq.PREVIEW &&
                        (0, n.jsxs)('div', {
                            className: b.userCard,
                            children: [
                                (0, n.jsx)(c.X6q, {
                                    color: 'header-primary',
                                    variant: 'heading-xl/bold',
                                    children: f.ZP.getName(r)
                                }),
                                (0, n.jsx)(c.X6q, {
                                    color: 'text-normal',
                                    variant: 'heading-lg/medium',
                                    children: r.username
                                }),
                                (0, n.jsx)(c.Text, {
                                    className: b.memberText,
                                    color: 'text-muted',
                                    variant: 'text-sm/medium',
                                    children: S.intl.format(S.t['9rfonp'], { date: (0, E.K9)(r.id) })
                                })
                            ]
                        })
                ]
            })
        );
    });
