i.d(t, { A: () => I });
var n = i(627968),
    s = i(64700),
    a = i(503698),
    r = i.n(a),
    l = i(92674),
    o = i(417597),
    d = i(990078),
    u = i(397927),
    c = i(775602),
    m = i(21161),
    E = i(718019),
    g = i(915614),
    h = i(427262),
    S = i(871210),
    _ = i(885168),
    A = i(621866),
    f = i(789622),
    N = i(996988),
    T = i(985018),
    x = i(299043),
    v = i(166723);
let I = s.forwardRef(function (e, t) {
    let {
            user: i,
            error: a,
            formValues: I,
            displayProfile: p,
            onChangeFormValue: C,
            onFocusDisplayName: R,
            onFocusUsername: y,
            editState: L,
            footerNotice: O,
            usernameSuggestionLoading: M,
            oneClickFlow: j,
        } = e,
        { username: P, globalName: G } = I,
        U = s.useRef(null),
        b = s.useRef(null),
        D = s.useMemo(() => i.merge({ discriminator: "0000" }), [i]),
        [w, k] = (0, u.zhh)(() => ({ opacity: 0, y: 5 }));
    s.useEffect(() => {
        k({ y: 0, opacity: 1, from: { y: 5, opacity: 0 } });
    }, [k, L]),
        s.useImperativeHandle(
            t,
            () => ({
                focusDisplayName: () => {
                    b.current?.focus();
                },
                focusUsername: () => {
                    U.current?.focus();
                },
            }),
            [],
        );
    let B = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        { createMultipleConfettiAt: F } = s.useContext(m.x),
        H = p?.getLegacyUsername();
    return (
        s.useEffect(() => {
            B ||
                L !== f.iv.PREVIEW ||
                (i.username.includes("pomelo") &&
                    (F(
                        window.innerWidth / 2 + 150,
                        0,
                        {
                            velocity: {
                                type: "static-random",
                                minValue: { x: 0, y: -180 },
                                maxValue: { x: 500, y: 180 },
                            },
                        },
                        15,
                    ),
                    F(
                        window.innerWidth / 2 - 150,
                        0,
                        {
                            velocity: {
                                type: "static-random",
                                minValue: { x: -500, y: -180 },
                                maxValue: { x: 0, y: 180 },
                            },
                        },
                        15,
                    )));
        }, [F, L, i, B]),
        (0, n.jsxs)("div", {
            className: r()(x.d3, { [x.Sr]: L === f.iv.PREVIEW }),
            children: [
                (0, n.jsxs)("div", {
                    className: x.Kq,
                    children: [
                        (0, n.jsx)(g.A, { user: D, displayProfile: p, themeType: N.d.SIDEBAR }),
                        (0, n.jsx)(E.A, { user: D, displayProfile: p, themeType: N.d.SIDEBAR, className: x.my }),
                        L === f.iv.PREVIEW &&
                            null != H &&
                            (0, n.jsx)("div", {
                                className: x.kB,
                                children: (0, n.jsx)(d.m, {
                                    position: "top",
                                    text: T.intl.formatToPlainString(T.t.bhrgkA, { legacyUsername: H }),
                                    spacing: 12,
                                    children: (0, n.jsx)(u.MzZ, {
                                        children: (0, n.jsx)("img", { className: x.zF, alt: "", src: v }),
                                    }),
                                }),
                            }),
                    ],
                }),
                L !== f.iv.PREVIEW &&
                    (0, n.jsxs)(l.animated.div, {
                        style: { opacity: w.opacity, y: w.y },
                        className: x.Kf,
                        children: [
                            (0, n.jsxs)(u.BJc, {
                                gap: 16,
                                children: [
                                    L === f.iv.EDIT_DISPLAY_NAME &&
                                        (0, n.jsx)(u.ksK, {
                                            label: T.intl.string(T.t["9AjdkD"]),
                                            value: G ?? "",
                                            placeholder: h.Ay.getName(i),
                                            maxLength: 32,
                                            onChange: (e) => C({ globalName: e }),
                                            onFocus: R,
                                            inputRef: b,
                                        }),
                                    (L === f.iv.EDIT_USERNAME || L === f.iv.SUGGESTION) &&
                                        (0, n.jsx)(u.ksK, {
                                            label: T.intl.string(T.t.IEpCBQ),
                                            leading: "@",
                                            value: P ?? "",
                                            placeholder: i.username,
                                            maxLength: 32,
                                            onChange: (e) => C({ username: e.replace("@", "") }),
                                            onFocus: y,
                                            inputRef: U,
                                        }),
                                ],
                            }),
                            (0, n.jsx)("div", {
                                className: x.zC,
                                children: (() => {
                                    if (null != a) return (0, n.jsx)(_.A, { type: "error", children: a });
                                    if (null != O) {
                                        if (L !== f.iv.SUGGESTION)
                                            return (0, n.jsx)(u.Text, { variant: "text-sm/normal", children: O });
                                        else if (!M) return (0, n.jsx)(_.A, { type: "success", children: O });
                                    }
                                    return null == O && null == a && (L === f.iv.EDIT_USERNAME || L === f.iv.SUGGESTION)
                                        ? (0, n.jsx)(A.A, { username: P, oneClickFlow: j })
                                        : null;
                                })(),
                            }),
                        ],
                    }),
                L === f.iv.PREVIEW &&
                    (0, n.jsxs)("div", {
                        className: x.Kg,
                        children: [
                            (0, n.jsx)(u.Heading, {
                                color: "text-strong",
                                variant: "heading-xl/bold",
                                children: h.Ay.getName(i),
                            }),
                            (0, n.jsx)(u.Heading, {
                                color: "text-default",
                                variant: "heading-lg/medium",
                                children: i.username,
                            }),
                            (0, n.jsx)(u.Text, {
                                className: x.WI,
                                color: "text-muted",
                                variant: "text-sm/medium",
                                children: T.intl.format(T.t["9rfonh"], { date: (0, S.b5)(i.id) }),
                            }),
                        ],
                    }),
            ],
        })
    );
});
