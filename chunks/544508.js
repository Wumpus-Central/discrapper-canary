n(47120), n(757143);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(666912),
    o = n(399606),
    u = n(481060),
    c = n(607070),
    d = n(745510),
    m = n(899007),
    g = n(867176),
    E = n(51144),
    h = n(346585),
    f = n(81259),
    S = n(119848),
    N = n(801461),
    T = n(228168),
    x = n(388032),
    _ = n(579532),
    I = n(733469);
let C = s.forwardRef(function (e, t) {
    let { style: n, value: s, placeholder: r, maxLength: l, onFocus: o, onChange: c } = e;
    return (0, i.jsx)(u.TextArea, {
        className: a()(_.userCardInput, n),
        autosize: !0,
        error: null,
        showCharacterCount: !1,
        spellCheck: !1,
        showRemainingCharacterCount: !1,
        value: s,
        placeholder: r,
        rows: 1,
        maxLength: l,
        onChange: c,
        onFocus: o,
        onKeyDown: (e) => {
            'Enter' === e.key && e.preventDefault();
        },
        inputRef: t
    });
});
t.Z = s.forwardRef(function (e, t) {
    let { user: n, error: r, formValues: v, displayProfile: p, onChangeFormValue: A, onFocusDisplayName: y, onFocusUsername: O, editState: M, footerNotice: L, usernameSuggestionLoading: R, oneClickFlow: b } = e,
        { username: P, globalName: j } = v,
        U = s.useRef(null),
        k = s.useRef(null),
        Z = s.useMemo(() => n.merge({ discriminator: '0000' }), [n]),
        [G, W] = (0, u.useSpring)(() => ({
            opacity: 0,
            y: 5
        }));
    s.useEffect(() => {
        W({
            y: 0,
            opacity: 1,
            from: {
                y: 5,
                opacity: 0
            }
        });
    }, [W, M]),
        s.useImperativeHandle(
            t,
            () => ({
                focusDisplayName: () => {
                    var e, t, n;
                    null === (t = k.current) || void 0 === t || t.setSelection(0, null === (e = k.current) || void 0 === e ? void 0 : e.value.length), null === (n = k.current) || void 0 === n || n.focus();
                },
                focusUsername: () => {
                    var e, t, n;
                    null === (t = U.current) || void 0 === t || t.setSelection(0, null === (e = U.current) || void 0 === e ? void 0 : e.value.length), null === (n = U.current) || void 0 === n || n.focus();
                }
            }),
            []
        );
    let D = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        { createMultipleConfettiAt: w } = s.useContext(d.h),
        q = null == p ? void 0 : p.getLegacyUsername();
    return (
        s.useEffect(() => {
            if (!D && M === N.Wq.PREVIEW && !!n.username.includes(N.nA))
                w(
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
                    );
        }, [w, M, n, D]),
        (0, i.jsxs)('div', {
            className: a()(_.userCardContainer, { [_.shinyCard]: M === N.Wq.PREVIEW }),
            children: [
                (0, i.jsxs)('div', {
                    className: _.profileCard,
                    children: [
                        (0, i.jsx)(g.Z, {
                            user: Z,
                            displayProfile: p,
                            profileType: T.y0.PANEL
                        }),
                        (0, i.jsx)(m.Z, {
                            user: Z,
                            displayProfile: p,
                            profileType: T.y0.PANEL
                        }),
                        M === N.Wq.PREVIEW &&
                            null != q &&
                            (0, i.jsx)('div', {
                                className: _.legacyUsernameBadgeContainer,
                                children: (0, i.jsx)(u.Tooltip, {
                                    position: 'top',
                                    text: x.intl.formatToPlainString(x.t.bhrgkJ, { legacyUsername: q }),
                                    spacing: 12,
                                    children: (e) =>
                                        (0, i.jsx)(u.Anchor, {
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
                M !== N.Wq.PREVIEW &&
                    (0, i.jsxs)(l.animated.div, {
                        style: {
                            opacity: G.opacity,
                            y: G.y
                        },
                        className: _.inputContainer,
                        children: [
                            M === N.Wq.EDIT_DISPLAY_NAME &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            className: _.textPadding,
                                            color: 'text-muted',
                                            variant: 'text-sm/semibold',
                                            children: x.intl.string(x.t['9AjdkJ'])
                                        }),
                                        (0, i.jsx)(C, {
                                            style: a()(_.displayNameHeight, _['heading-xl/bold']),
                                            value: null != j ? j : '',
                                            placeholder: E.ZP.getName(n),
                                            maxLength: N.hy,
                                            onChange: (e) => A({ globalName: e }),
                                            onFocus: y,
                                            ref: k
                                        })
                                    ]
                                }),
                            (M === N.Wq.EDIT_USERNAME || M === N.Wq.SUGGESTION) &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            className: _.textPadding,
                                            color: 'text-muted',
                                            variant: 'text-sm/semibold',
                                            children: x.intl.string(x.t.IEpCBQ)
                                        }),
                                        (0, i.jsx)(C, {
                                            style: a()(_.userCardHeight, _.lowercaseUsername, _['heading-lg/medium']),
                                            value: null != P ? P : '',
                                            placeholder: n.username,
                                            maxLength: N.hy,
                                            onChange: (e) => A({ username: e.replace('@', '') }),
                                            onFocus: O,
                                            ref: U
                                        })
                                    ]
                                }),
                            (0, i.jsx)('div', {
                                className: _.messageContainer,
                                children: (() => {
                                    if (null != r)
                                        return (0, i.jsx)(f.Z, {
                                            type: 'error',
                                            children: r
                                        });
                                    if (null != L) {
                                        if (M !== N.Wq.SUGGESTION)
                                            return (0, i.jsx)(u.Text, {
                                                variant: 'text-sm/normal',
                                                children: L
                                            });
                                        if (!R)
                                            return (0, i.jsx)(f.Z, {
                                                type: 'success',
                                                children: L
                                            });
                                    }
                                    return null == L && null == r && (M === N.Wq.EDIT_USERNAME || M === N.Wq.SUGGESTION)
                                        ? (0, i.jsx)(S.Z, {
                                              username: P,
                                              oneClickFlow: b
                                          })
                                        : null;
                                })()
                            })
                        ]
                    }),
                M === N.Wq.PREVIEW &&
                    (0, i.jsxs)('div', {
                        className: _.userCard,
                        children: [
                            (0, i.jsx)(u.Heading, {
                                color: 'header-primary',
                                variant: 'heading-xl/bold',
                                children: E.ZP.getName(n)
                            }),
                            (0, i.jsx)(u.Heading, {
                                color: 'text-normal',
                                variant: 'heading-lg/medium',
                                children: n.username
                            }),
                            (0, i.jsx)(u.Text, {
                                className: _.memberText,
                                color: 'text-muted',
                                variant: 'text-sm/medium',
                                children: x.intl.format(x.t['9rfonp'], { date: (0, h.K9)(n.id) })
                            })
                        ]
                    })
            ]
        })
    );
});
