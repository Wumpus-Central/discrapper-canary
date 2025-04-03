r.d(t, { Z: () => j }), r(47120), r(757143), r(301563);
var n = r(200651),
    i = r(192379),
    s = r(120356),
    o = r.n(s),
    a = r(642128),
    l = r(399606),
    c = r(481060),
    u = r(607070),
    d = r(745510),
    g = r(899007),
    m = r(867176),
    f = r(51144),
    E = r(346585),
    h = r(81259),
    O = r(119848),
    p = r(801461),
    y = r(228168),
    b = r(388032),
    S = r(927687),
    N = r(733469);
let x = i.forwardRef(function (e, t) {
        let { style: r, value: i, placeholder: s, maxLength: a, onFocus: l, onChange: u } = e;
        return (0, n.jsx)(c.Kx8, {
            className: o()(S.userCardInput, r),
            autosize: !0,
            error: null,
            showCharacterCount: !1,
            spellCheck: !1,
            showRemainingCharacterCount: !1,
            value: i,
            placeholder: s,
            rows: 1,
            maxLength: a,
            onChange: u,
            onFocus: l,
            onKeyDown: (e) => {
                'Enter' === e.key && e.preventDefault();
            },
            inputRef: t
        });
    }),
    j = i.forwardRef(function (e, t) {
        let { user: r, error: s, formValues: j, displayProfile: v, onChangeFormValue: T, onFocusDisplayName: P, onFocusUsername: _, editState: I, footerNotice: C, usernameSuggestionLoading: A, oneClickFlow: w } = e,
            { username: k, globalName: M } = j,
            L = i.useRef(null),
            R = i.useRef(null),
            W = i.useMemo(() => r.merge({ discriminator: '0000' }), [r]),
            [D, U] = (0, c.q_F)(() => ({
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
        }, [U, I]),
            i.useImperativeHandle(
                t,
                () => ({
                    focusDisplayName: () => {
                        var e, t, r;
                        null == (t = R.current) || t.setSelection(0, null == (e = R.current) ? void 0 : e.value.length), null == (r = R.current) || r.focus();
                    },
                    focusUsername: () => {
                        var e, t, r;
                        null == (t = L.current) || t.setSelection(0, null == (e = L.current) ? void 0 : e.value.length), null == (r = L.current) || r.focus();
                    }
                }),
                []
            );
        let Z = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
            { createMultipleConfettiAt: G } = i.useContext(d.h),
            q = null == v ? void 0 : v.getLegacyUsername();
        return (
            i.useEffect(() => {
                !Z &&
                    I === p.Wq.PREVIEW &&
                    r.username.includes(p.nA) &&
                    (G(
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
                    G(
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
            }, [G, I, r, Z]),
            (0, n.jsxs)('div', {
                className: o()(S.userCardContainer, { [S.shinyCard]: I === p.Wq.PREVIEW }),
                children: [
                    (0, n.jsxs)('div', {
                        className: S.profileCard,
                        children: [
                            (0, n.jsx)(m.Z, {
                                user: W,
                                displayProfile: v,
                                profileType: y.y0.PANEL
                            }),
                            (0, n.jsx)(g.Z, {
                                user: W,
                                displayProfile: v,
                                profileType: y.y0.PANEL
                            }),
                            I === p.Wq.PREVIEW &&
                                null != q &&
                                (0, n.jsx)('div', {
                                    className: S.legacyUsernameBadgeContainer,
                                    children: (0, n.jsx)(c.ua7, {
                                        position: 'top',
                                        text: b.NW.formatToPlainString(b.t.bhrgkJ, { legacyUsername: q }),
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
                                                            className: S.legacyUsernameBadge,
                                                            alt: '',
                                                            src: N
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
                    I !== p.Wq.PREVIEW &&
                        (0, n.jsxs)(a.animated.div, {
                            style: {
                                opacity: D.opacity,
                                y: D.y
                            },
                            className: S.inputContainer,
                            children: [
                                I === p.Wq.EDIT_DISPLAY_NAME &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(c.Text, {
                                                className: S.textPadding,
                                                color: 'text-muted',
                                                variant: 'text-sm/semibold',
                                                children: b.NW.string(b.t['9AjdkJ'])
                                            }),
                                            (0, n.jsx)(x, {
                                                style: o()(S.displayNameHeight, S['heading-xl/bold']),
                                                value: null != M ? M : '',
                                                placeholder: f.ZP.getName(r),
                                                maxLength: p.hy,
                                                onChange: (e) => T({ globalName: e }),
                                                onFocus: P,
                                                ref: R
                                            })
                                        ]
                                    }),
                                (I === p.Wq.EDIT_USERNAME || I === p.Wq.SUGGESTION) &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(c.Text, {
                                                className: S.textPadding,
                                                color: 'text-muted',
                                                variant: 'text-sm/semibold',
                                                children: b.NW.string(b.t.IEpCBQ)
                                            }),
                                            (0, n.jsx)(x, {
                                                style: o()(S.userCardHeight, S.lowercaseUsername, S['heading-lg/medium']),
                                                value: null != k ? k : '',
                                                placeholder: r.username,
                                                maxLength: p.hy,
                                                onChange: (e) => T({ username: e.replace('@', '') }),
                                                onFocus: _,
                                                ref: L
                                            })
                                        ]
                                    }),
                                (0, n.jsx)('div', {
                                    className: S.messageContainer,
                                    children: (() => {
                                        if (null != s)
                                            return (0, n.jsx)(h.Z, {
                                                type: 'error',
                                                children: s
                                            });
                                        if (null != C) {
                                            if (I !== p.Wq.SUGGESTION)
                                                return (0, n.jsx)(c.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: C
                                                });
                                            else if (!A)
                                                return (0, n.jsx)(h.Z, {
                                                    type: 'success',
                                                    children: C
                                                });
                                        }
                                        return null == C && null == s && (I === p.Wq.EDIT_USERNAME || I === p.Wq.SUGGESTION)
                                            ? (0, n.jsx)(O.Z, {
                                                  username: k,
                                                  oneClickFlow: w
                                              })
                                            : null;
                                    })()
                                })
                            ]
                        }),
                    I === p.Wq.PREVIEW &&
                        (0, n.jsxs)('div', {
                            className: S.userCard,
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
                                    className: S.memberText,
                                    color: 'text-muted',
                                    variant: 'text-sm/medium',
                                    children: b.NW.format(b.t['9rfonp'], { date: (0, E.K9)(r.id) })
                                })
                            ]
                        })
                ]
            })
        );
    });
