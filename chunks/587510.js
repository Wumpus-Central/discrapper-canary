r.d(t, {
    A: () => A,
}),
    r(896048),
    r(747238),
    r(812715);
var n = r(627968),
    i = r(64700),
    a = r(503698),
    s = r.n(a),
    o = r(92674),
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
    y = r(621866),
    O = r(789622),
    S = r(996988),
    b = r(985018),
    v = r(299043),
    _ = r(166723);
let A = i.forwardRef(function (e, t) {
    let {
            user: r,
            error: a,
            formValues: A,
            displayProfile: j,
            onChangeFormValue: N,
            onFocusDisplayName: x,
            onFocusUsername: I,
            editState: T,
            footerNotice: P,
            usernameSuggestionLoading: R,
            oneClickFlow: C,
        } = e,
        { username: w, globalName: L } = A,
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
        H = null == j ? void 0 : j.getLegacyUsername();
    return (
        i.useEffect(() => {
            F ||
                T !== O.iv.PREVIEW ||
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
            className: s()(v.d3, {
                [v.Sr]: T === O.iv.PREVIEW,
            }),
            children: [
                (0, n.jsxs)("div", {
                    className: v.Kq,
                    children: [
                        (0, n.jsx)(f.A, {
                            user: G,
                            displayProfile: j,
                            themeType: S.d.SIDEBAR,
                        }),
                        (0, n.jsx)(g.A, {
                            user: G,
                            displayProfile: j,
                            themeType: S.d.SIDEBAR,
                            className: v.my,
                        }),
                        T === O.iv.PREVIEW &&
                            null != H &&
                            (0, n.jsx)("div", {
                                className: v.kB,
                                children: (0, n.jsx)(c.m, {
                                    position: "top",
                                    text: b.intl.formatToPlainString(b.t.bhrgkA, {
                                        legacyUsername: H,
                                    }),
                                    spacing: 12,
                                    children: (0, n.jsx)(u.MzZ, {
                                        children: (0, n.jsx)("img", {
                                            className: v.zF,
                                            alt: "",
                                            src: _,
                                        }),
                                    }),
                                }),
                            }),
                    ],
                }),
                T !== O.iv.PREVIEW &&
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
                                    T === O.iv.EDIT_DISPLAY_NAME &&
                                        (0, n.jsx)(u.ksK, {
                                            label: b.intl.string(b.t["9AjdkD"]),
                                            value: null != L ? L : "",
                                            placeholder: E.Ay.getName(r),
                                            maxLength: 32,
                                            onChange: (e) =>
                                                N({
                                                    globalName: e,
                                                }),
                                            onFocus: x,
                                            inputRef: D,
                                        }),
                                    (T === O.iv.EDIT_USERNAME || T === O.iv.SUGGESTION) &&
                                        (0, n.jsx)(u.ksK, {
                                            label: b.intl.string(b.t.IEpCBQ),
                                            leading: "@",
                                            value: null != w ? w : "",
                                            placeholder: r.username,
                                            maxLength: 32,
                                            onChange: (e) =>
                                                N({
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
                                    if (null != a)
                                        return (0, n.jsx)(h.A, {
                                            type: "error",
                                            children: a,
                                        });
                                    if (null != P) {
                                        if (T !== O.iv.SUGGESTION)
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
                                    return null == P && null == a && (T === O.iv.EDIT_USERNAME || T === O.iv.SUGGESTION)
                                        ? (0, n.jsx)(y.A, {
                                              username: w,
                                              oneClickFlow: C,
                                          })
                                        : null;
                                })(),
                            }),
                        ],
                    }),
                T === O.iv.PREVIEW &&
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
                                children: b.intl.format(b.t["9rfonh"], {
                                    date: (0, p.b5)(r.id),
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
});
