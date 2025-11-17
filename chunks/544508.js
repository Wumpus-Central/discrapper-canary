n.d(t, { Z: () => v }), n(388685), n(704826), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(636606),
    l = n(399606),
    c = n(28664),
    u = n(481060),
    d = n(607070),
    m = n(745510),
    g = n(899007),
    f = n(867176),
    E = n(51144),
    p = n(346585),
    h = n(81259),
    y = n(119848),
    O = n(801461),
    S = n(671955),
    b = n(388032),
    _ = n(631936),
    N = n(733469);
let v = i.forwardRef(function (e, t) {
    let {
            user: n,
            error: a,
            formValues: v,
            displayProfile: x,
            onChangeFormValue: T,
            onFocusDisplayName: j,
            onFocusUsername: I,
            editState: P,
            footerNotice: C,
            usernameSuggestionLoading: A,
            oneClickFlow: R,
        } = e,
        { username: M, globalName: w } = v,
        L = i.useRef(null),
        D = i.useRef(null),
        k = i.useMemo(() => n.merge({ discriminator: "0000" }), [n]),
        [Z, U] = (0, u.q_F)(() => ({
            opacity: 0,
            y: 5,
        }));
    i.useEffect(() => {
        U({
            y: 0,
            opacity: 1,
            from: {
                y: 5,
                opacity: 0,
            },
        });
    }, [U, P]),
        i.useImperativeHandle(
            t,
            () => ({
                focusDisplayName: () => {
                    var e;
                    null == (e = D.current) || e.focus();
                },
                focusUsername: () => {
                    var e;
                    null == (e = L.current) || e.focus();
                },
            }),
            [],
        );
    let G = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        { createMultipleConfettiAt: W } = i.useContext(m.h),
        q = null == x ? void 0 : x.getLegacyUsername();
    return (
        i.useEffect(() => {
            !G &&
                P === O.Wq.PREVIEW &&
                n.username.includes(O.nA) &&
                (W(
                    window.innerWidth / 2 + 150,
                    0,
                    {
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: 0,
                                y: -180,
                            },
                            maxValue: {
                                x: 500,
                                y: 180,
                            },
                        },
                    },
                    15,
                ),
                W(
                    window.innerWidth / 2 - 150,
                    0,
                    {
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: -500,
                                y: -180,
                            },
                            maxValue: {
                                x: 0,
                                y: 180,
                            },
                        },
                    },
                    15,
                ));
        }, [W, P, n, G]),
        (0, r.jsxs)("div", {
            className: o()(_.userCardContainer, { [_.shinyCard]: P === O.Wq.PREVIEW }),
            children: [
                (0, r.jsxs)("div", {
                    className: _.profileCard,
                    children: [
                        (0, r.jsx)(f.Z, {
                            user: k,
                            displayProfile: x,
                            themeType: S.l.SIDEBAR,
                        }),
                        (0, r.jsx)(g.Z, {
                            user: k,
                            displayProfile: x,
                            themeType: S.l.SIDEBAR,
                            className: _.avatar,
                        }),
                        P === O.Wq.PREVIEW &&
                            null != q &&
                            (0, r.jsx)("div", {
                                className: _.legacyUsernameBadgeContainer,
                                children: (0, r.jsx)(c.u, {
                                    position: "top",
                                    text: b.intl.formatToPlainString(b.t.bhrgkA, { legacyUsername: q }),
                                    spacing: 12,
                                    children: (0, r.jsx)(u.Anchor, {
                                        children: (0, r.jsx)("img", {
                                            className: _.legacyUsernameBadge,
                                            alt: "",
                                            src: N,
                                        }),
                                    }),
                                }),
                            }),
                    ],
                }),
                P !== O.Wq.PREVIEW &&
                    (0, r.jsxs)(s.animated.div, {
                        style: {
                            opacity: Z.opacity,
                            y: Z.y,
                        },
                        className: _.inputContainer,
                        children: [
                            (0, r.jsxs)(u.Kqy, {
                                gap: 16,
                                children: [
                                    P === O.Wq.EDIT_DISPLAY_NAME &&
                                        (0, r.jsx)(u.oil, {
                                            label: b.intl.string(b.t["9AjdkD"]),
                                            value: null != w ? w : "",
                                            placeholder: E.ZP.getName(n),
                                            maxLength: O.hy,
                                            onChange: (e) => T({ globalName: e }),
                                            onFocus: j,
                                            inputRef: D,
                                        }),
                                    (P === O.Wq.EDIT_USERNAME || P === O.Wq.SUGGESTION) &&
                                        (0, r.jsx)(u.oil, {
                                            label: b.intl.string(b.t.IEpCBQ),
                                            leading: "@",
                                            value: null != M ? M : "",
                                            placeholder: n.username,
                                            maxLength: O.hy,
                                            onChange: (e) => T({ username: e.replace("@", "") }),
                                            onFocus: I,
                                            inputRef: L,
                                        }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: _.messageContainer,
                                children: (() => {
                                    if (null != a)
                                        return (0, r.jsx)(h.Z, {
                                            type: "error",
                                            children: a,
                                        });
                                    if (null != C) {
                                        if (P !== O.Wq.SUGGESTION)
                                            return (0, r.jsx)(u.Text, {
                                                variant: "text-sm/normal",
                                                children: C,
                                            });
                                        else if (!A)
                                            return (0, r.jsx)(h.Z, {
                                                type: "success",
                                                children: C,
                                            });
                                    }
                                    return null == C && null == a && (P === O.Wq.EDIT_USERNAME || P === O.Wq.SUGGESTION)
                                        ? (0, r.jsx)(y.Z, {
                                              username: M,
                                              oneClickFlow: R,
                                          })
                                        : null;
                                })(),
                            }),
                        ],
                    }),
                P === O.Wq.PREVIEW &&
                    (0, r.jsxs)("div", {
                        className: _.userCard,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                color: "header-primary",
                                variant: "heading-xl/bold",
                                children: E.ZP.getName(n),
                            }),
                            (0, r.jsx)(u.Heading, {
                                color: "text-default",
                                variant: "heading-lg/medium",
                                children: n.username,
                            }),
                            (0, r.jsx)(u.Text, {
                                className: _.memberText,
                                color: "text-muted",
                                variant: "text-sm/medium",
                                children: b.intl.format(b.t["9rfonh"], { date: (0, p.K9)(n.id) }),
                            }),
                        ],
                    }),
            ],
        })
    );
});
