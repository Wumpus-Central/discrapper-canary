n.d(t, { A: () => m });
var a = n(627968),
    s = n(64700),
    i = n(397927),
    l = n(839214),
    r = n(137365),
    o = n(287809),
    d = n(427262),
    c = n(520657);
let u = (0, l.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function m() {
    let e = u.useField("userIds"),
        t = u.useField("isLoading"),
        n = u.useField("isSuccess"),
        l = u.useField("errorMessage"),
        m = u.useField("lastRunAt"),
        h = s.useCallback(async () => {
            u.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await (0, r.g_)();
                u.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                u.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                u.setState({ isLoading: !1 });
            }
        }, []),
        x = s.useMemo(
            () =>
                e.map((e) => {
                    let t = o.default.getUser(e),
                        n = null != t ? d.Ay.getName(t) : "Unknown";
                    return (0, a.jsx)(
                        "div",
                        {
                            className: c.J1,
                            children: (0, a.jsx)(i.Text, { variant: "text-md/normal", children: `${n} (${e})` }),
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
                (0, a.jsx)(i.Button, { onClick: h, text: "Diff User State", loading: t, disabled: t }),
                (0, a.jsxs)("div", {
                    className: c.N6,
                    children: [
                        null != l &&
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: c.qS,
                                children: l,
                            }),
                        n &&
                            e.length > 0 &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(i.Text, { variant: "text-md/normal", children: `Last run at: ${m}` }),
                                    (0, a.jsx)(i.Text, {
                                        variant: "text-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, a.jsx)("div", { className: c.uk, children: x }),
                                ],
                            }),
                        n &&
                            0 === e.length &&
                            (0, a.jsx)(i.Text, { variant: "text-md/normal", children: "No users missing from Worker" }),
                    ],
                }),
            ],
        }),
    });
}
