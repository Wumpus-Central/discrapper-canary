r.d(t, {
    A: () => j,
}),
    r(896048),
    r(747238),
    r(812715);
var n = r(627968),
    i = r(64700),
    s = r(503698),
    a = r.n(s),
    o = r(108531),
    l = r(417597),
    c = r(990078),
    u = r(397927),
    d = r(775602),
    m = r(21161),
    g = r(718019),
    f = r(915614),
    E = r(427262),
    p = r(871210),
    h = r(885168),
    O = r(621866),
    y = r(789622),
    b = r(996988),
    S = r(985018),
    v = r(299043),
    A = r(166723);
let j = i.forwardRef(function (e, t) {
    let {
            user: r,
            error: s,
            formValues: j,
            displayProfile: _,
            onChangeFormValue: x,
            onFocusDisplayName: N,
            onFocusUsername: I,
            editState: T,
            footerNotice: P,
            usernameSuggestionLoading: R,
            oneClickFlow: w,
        } = e,
        { username: C, globalName: L } = j,
        M = i.useRef(null),
        D = i.useRef(null),
        G = i.useMemo(
            () =>
                r.merge({
                    discriminator: "0000",
                }),
            [r],
        ),
        [k, U] = (0, u.zhh)(() => ({
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
    }, [U, T]),
        i.useImperativeHandle(
            t,
            () => ({
                focusDisplayName: () => {
                    var e;
                    null == (e = D.current) || e.focus();
                },
                focusUsername: () => {
                    var e;
                    null == (e = M.current) || e.focus();
                },
            }),
            [],
        );
    let F = (0, l.bG)([d.A], () => d.A.useReducedMotion),
        { createMultipleConfettiAt: B } = i.useContext(m.x),
        H = null == _ ? void 0 : _.getLegacyUsername();
    return (
        i.useEffect(() => {
            F ||
                T !== y.iv.PREVIEW ||
                (r.username.includes("pomelo") &&
                    (B(
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
                    B(
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
                    )));
        }, [B, T, r, F]),
        (0, n.jsxs)("div", {
            className: a()(v.d3, {
                [v.Sr]: T === y.iv.PREVIEW,
            }),
            children: [
                (0, n.jsxs)("div", {
                    className: v.Kq,
                    children: [
                        (0, n.jsx)(f.A, {
                            user: G,
                            displayProfile: _,
                            themeType: b.d.SIDEBAR,
                        }),
                        (0, n.jsx)(g.A, {
                            user: G,
                            displayProfile: _,
                            themeType: b.d.SIDEBAR,
                            className: v.my,
                        }),
                        T === y.iv.PREVIEW &&
                            null != H &&
                            (0, n.jsx)("div", {
                                className: v.kB,
                                children: (0, n.jsx)(c.m, {
                                    position: "top",
                                    text: S.intl.formatToPlainString(S.t.bhrgkA, {
                                        legacyUsername: H,
                                    }),
                                    spacing: 12,
                                    children: (0, n.jsx)(u.MzZ, {
                                        children: (0, n.jsx)("img", {
                                            className: v.zF,
                                            alt: "",
                                            src: A,
                                        }),
                                    }),
                                }),
                            }),
                    ],
                }),
                T !== y.iv.PREVIEW &&
                    (0, n.jsxs)(o.animated.div, {
                        style: {
                            opacity: k.opacity,
                            y: k.y,
                        },
                        className: v.Kf,
                        children: [
                            (0, n.jsxs)(u.BJc, {
                                gap: 16,
                                children: [
                                    T === y.iv.EDIT_DISPLAY_NAME &&
                                        (0, n.jsx)(u.ksK, {
                                            label: S.intl.string(S.t["9AjdkD"]),
                                            value: null != L ? L : "",
                                            placeholder: E.Ay.getName(r),
                                            maxLength: 32,
                                            onChange: (e) =>
                                                x({
                                                    globalName: e,
                                                }),
                                            onFocus: N,
                                            inputRef: D,
                                        }),
                                    (T === y.iv.EDIT_USERNAME || T === y.iv.SUGGESTION) &&
                                        (0, n.jsx)(u.ksK, {
                                            label: S.intl.string(S.t.IEpCBQ),
                                            leading: "@",
                                            value: null != C ? C : "",
                                            placeholder: r.username,
                                            maxLength: 32,
                                            onChange: (e) =>
                                                x({
                                                    username: e.replace("@", ""),
                                                }),
                                            onFocus: I,
                                            inputRef: M,
                                        }),
                                ],
                            }),
                            (0, n.jsx)("div", {
                                className: v.zC,
                                children: (() => {
                                    if (null != s)
                                        return (0, n.jsx)(h.A, {
                                            type: "error",
                                            children: s,
                                        });
                                    if (null != P) {
                                        if (T !== y.iv.SUGGESTION)
                                            return (0, n.jsx)(u.Text, {
                                                variant: "text-sm/normal",
                                                children: P,
                                            });
                                        else if (!R)
                                            return (0, n.jsx)(h.A, {
                                                type: "success",
                                                children: P,
                                            });
                                    }
                                    return null == P && null == s && (T === y.iv.EDIT_USERNAME || T === y.iv.SUGGESTION)
                                        ? (0, n.jsx)(O.A, {
                                              username: C,
                                              oneClickFlow: w,
                                          })
                                        : null;
                                })(),
                            }),
                        ],
                    }),
                T === y.iv.PREVIEW &&
                    (0, n.jsxs)("div", {
                        className: v.Kg,
                        children: [
                            (0, n.jsx)(u.Heading, {
                                color: "text-strong",
                                variant: "heading-xl/bold",
                                children: E.Ay.getName(r),
                            }),
                            (0, n.jsx)(u.Heading, {
                                color: "text-default",
                                variant: "heading-lg/medium",
                                children: r.username,
                            }),
                            (0, n.jsx)(u.Text, {
                                className: v.WI,
                                color: "text-muted",
                                variant: "text-sm/medium",
                                children: S.intl.format(S.t["9rfonh"], {
                                    date: (0, p.b5)(r.id),
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
});
