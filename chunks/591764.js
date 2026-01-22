n.d(t, {
    A: () => m,
});
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(839214),
    s = n(137365),
    o = n(287809),
    c = n(427262),
    d = n(520657);
let u = (0, r.D)(() => ({
    userIds: [],
    isLoading: !1,
    isSuccess: !1,
    errorMessage: null,
    lastRunAt: null,
}));

function m() {
    let e = u.useField("userIds"),
        t = u.useField("isLoading"),
        n = u.useField("isSuccess"),
        r = u.useField("errorMessage"),
        m = u.useField("lastRunAt"),
        p = l.useCallback(async () => {
            u.setState({
                isLoading: !0,
                errorMessage: null,
                isSuccess: !1,
            });
            try {
                let e = await (0, s.g_)();
                u.setState({
                    userIds: e,
                    errorMessage: null,
                    isSuccess: !0,
                    lastRunAt: new Date().toISOString(),
                });
            } catch (e) {
                u.setState({
                    errorMessage: e,
                    isSuccess: !1,
                });
            } finally {
                u.setState({
                    isLoading: !1,
                });
            }
        }, []),
        h = l.useMemo(
            () =>
                e.map((e) => {
                    let t = o.default.getUser(e),
                        n = null != t ? c.Ay.getName(t) : "Unknown";
                    return (0, a.jsx)(
                        "div",
                        {
                            className: d.J1,
                            children: (0, a.jsx)(i.Text, {
                                variant: "text-md/normal",
                                children: "".concat(n, " (").concat(e, ")"),
                            }),
                        },
                        e,
                    );
                }),
            [e],
        );
    return (0, a.jsx)(i.nVY, {
        label: "Diff User State",
        description: "Click to generate a diff between the client user state and the user worker state.",
        children: (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(i.Button, {
                    onClick: p,
                    text: "Diff User State",
                    loading: t,
                    disabled: t,
                }),
                (0, a.jsxs)("div", {
                    className: d.N6,
                    children: [
                        null != r &&
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: d.qS,
                                children: r,
                            }),
                        n &&
                            e.length > 0 &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(i.Text, {
                                        variant: "text-md/normal",
                                        children: "Last run at: ".concat(m),
                                    }),
                                    (0, a.jsx)(i.Text, {
                                        variant: "text-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, a.jsx)("div", {
                                        className: d.uk,
                                        children: h,
                                    }),
                                ],
                            }),
                        n &&
                            0 === e.length &&
                            (0, a.jsx)(i.Text, {
                                variant: "text-md/normal",
                                children: "No users missing from Worker",
                            }),
                    ],
                }),
            ],
        }),
    });
}
