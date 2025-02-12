n.d(t, { Z: () => v }), n(47120), n(757143);
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(642128),
    o = n(399606),
    u = n(481060),
    d = n(607070),
    c = n(745510),
    m = n(899007),
    g = n(867176),
    E = n(51144),
    h = n(346585),
    S = n(81259),
    f = n(119848),
    x = n(801461),
    N = n(228168),
    T = n(388032),
    _ = n(983928),
    I = n(733469);
let C = s.forwardRef(function (e, t) {
        let { style: n, value: s, placeholder: a, maxLength: r, onFocus: o, onChange: d } = e;
        return (0, i.jsx)(u.Kx8, {
            className: l()(_.userCardInput, n),
            autosize: !0,
            error: null,
            showCharacterCount: !1,
            spellCheck: !1,
            showRemainingCharacterCount: !1,
            value: s,
            placeholder: a,
            rows: 1,
            maxLength: r,
            onChange: d,
            onFocus: o,
            onKeyDown: (e) => {
                'Enter' === e.key && e.preventDefault();
            },
            inputRef: t
        });
    }),
    v = s.forwardRef(function (e, t) {
        let { user: n, error: a, formValues: v, displayProfile: p, onChangeFormValue: A, onFocusDisplayName: y, onFocusUsername: M, editState: O, footerNotice: L, usernameSuggestionLoading: R, oneClickFlow: k } = e,
            { username: P, globalName: b } = v,
            j = s.useRef(null),
            U = s.useRef(null),
            Z = s.useMemo(() => n.merge({ discriminator: '0000' }), [n]),
            [G, D] = (0, u.q_F)(() => ({
                opacity: 0,
                y: 5
            }));
        s.useEffect(() => {
            D({
                y: 0,
                opacity: 1,
                from: {
                    y: 5,
                    opacity: 0
                }
            });
        }, [D, O]),
            s.useImperativeHandle(
                t,
                () => ({
                    focusDisplayName: () => {
                        var e, t, n;
                        null === (t = U.current) || void 0 === t || t.setSelection(0, null === (e = U.current) || void 0 === e ? void 0 : e.value.length), null === (n = U.current) || void 0 === n || n.focus();
                    },
                    focusUsername: () => {
                        var e, t, n;
                        null === (t = j.current) || void 0 === t || t.setSelection(0, null === (e = j.current) || void 0 === e ? void 0 : e.value.length), null === (n = j.current) || void 0 === n || n.focus();
                    }
                }),
                []
            );
        let W = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
            { createMultipleConfettiAt: w } = s.useContext(c.h),
            q = null == p ? void 0 : p.getLegacyUsername();
        return (
            s.useEffect(() => {
                !W &&
                    O === x.Wq.PREVIEW &&
                    n.username.includes(x.nA) &&
                    (w(
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
                    w(
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
            }, [w, O, n, W]),
            (0, i.jsxs)('div', {
                className: l()(_.userCardContainer, { [_.shinyCard]: O === x.Wq.PREVIEW }),
                children: [
                    (0, i.jsxs)('div', {
                        className: _.profileCard,
                        children: [
                            (0, i.jsx)(g.Z, {
                                user: Z,
                                displayProfile: p,
                                profileType: N.y0.PANEL
                            }),
                            (0, i.jsx)(m.Z, {
                                user: Z,
                                displayProfile: p,
                                profileType: N.y0.PANEL
                            }),
                            O === x.Wq.PREVIEW &&
                                null != q &&
                                (0, i.jsx)('div', {
                                    className: _.legacyUsernameBadgeContainer,
                                    children: (0, i.jsx)(u.ua7, {
                                        position: 'top',
                                        text: T.intl.formatToPlainString(T.t.bhrgkJ, { legacyUsername: q }),
                                        spacing: 12,
                                        children: (e) =>
                                            (0, i.jsx)(u.eee, {
                                                ...e,
                                                onClick: e.onClick,
                                                children: (0, i.jsx)('img', {
                                                    className: _.legacyUsernameBadge,
                                                    alt: '',
                                                    src: I
                                                })
                                            })
                                    })
                                })
                        ]
                    }),
                    O !== x.Wq.PREVIEW &&
                        (0, i.jsxs)(r.animated.div, {
                            style: {
                                opacity: G.opacity,
                                y: G.y
                            },
                            className: _.inputContainer,
                            children: [
                                O === x.Wq.EDIT_DISPLAY_NAME &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(u.Text, {
                                                className: _.textPadding,
                                                color: 'text-muted',
                                                variant: 'text-sm/semibold',
                                                children: T.intl.string(T.t['9AjdkJ'])
                                            }),
                                            (0, i.jsx)(C, {
                                                style: l()(_.displayNameHeight, _['heading-xl/bold']),
                                                value: null != b ? b : '',
                                                placeholder: E.ZP.getName(n),
                                                maxLength: x.hy,
                                                onChange: (e) => A({ globalName: e }),
                                                onFocus: y,
                                                ref: U
                                            })
                                        ]
                                    }),
                                (O === x.Wq.EDIT_USERNAME || O === x.Wq.SUGGESTION) &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(u.Text, {
                                                className: _.textPadding,
                                                color: 'text-muted',
                                                variant: 'text-sm/semibold',
                                                children: T.intl.string(T.t.IEpCBQ)
                                            }),
                                            (0, i.jsx)(C, {
                                                style: l()(_.userCardHeight, _.lowercaseUsername, _['heading-lg/medium']),
                                                value: null != P ? P : '',
                                                placeholder: n.username,
                                                maxLength: x.hy,
                                                onChange: (e) => A({ username: e.replace('@', '') }),
                                                onFocus: M,
                                                ref: j
                                            })
                                        ]
                                    }),
                                (0, i.jsx)('div', {
                                    className: _.messageContainer,
                                    children: (() => {
                                        if (null != a)
                                            return (0, i.jsx)(S.Z, {
                                                type: 'error',
                                                children: a
                                            });
                                        if (null != L) {
                                            if (O !== x.Wq.SUGGESTION)
                                                return (0, i.jsx)(u.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: L
                                                });
                                            if (!R)
                                                return (0, i.jsx)(S.Z, {
                                                    type: 'success',
                                                    children: L
                                                });
                                        }
                                        return null == L && null == a && (O === x.Wq.EDIT_USERNAME || O === x.Wq.SUGGESTION)
                                            ? (0, i.jsx)(f.Z, {
                                                  username: P,
                                                  oneClickFlow: k
                                              })
                                            : null;
                                    })()
                                })
                            ]
                        }),
                    O === x.Wq.PREVIEW &&
                        (0, i.jsxs)('div', {
                            className: _.userCard,
                            children: [
                                (0, i.jsx)(u.X6q, {
                                    color: 'header-primary',
                                    variant: 'heading-xl/bold',
                                    children: E.ZP.getName(n)
                                }),
                                (0, i.jsx)(u.X6q, {
                                    color: 'text-normal',
                                    variant: 'heading-lg/medium',
                                    children: n.username
                                }),
                                (0, i.jsx)(u.Text, {
                                    className: _.memberText,
                                    color: 'text-muted',
                                    variant: 'text-sm/medium',
                                    children: T.intl.format(T.t['9rfonp'], { date: (0, h.K9)(n.id) })
                                })
                            ]
                        })
                ]
            })
        );
    });
