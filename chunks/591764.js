a.d(t, { A: () => p });
var n = a(627968),
    l = a(64700),
    i = a(834730),
    s = a(270003),
    r = a(821609),
    o = a(839214),
    d = a(137365),
    c = a(287809),
    u = a(427262),
    m = a(929948);
let h = (0, o.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function p() {
    let e = h.useField("userIds"),
        t = h.useField("isLoading"),
        a = h.useField("isSuccess"),
        o = h.useField("errorMessage"),
        p = h.useField("lastRunAt"),
        x = l.useCallback(async () => {
            h.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await (0, d.g_)();
                h.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                h.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                h.setState({ isLoading: !1 });
            }
        }, []),
        g = l.useMemo(
            () =>
                e.map((e) => {
                    let t = c.default.getUser(e),
                        a = null != t ? u.Ay.getName(t) : "Unknown";
                    return (0, n.jsx)(
                        "div",
                        {
                            className: m.J1,
                            children: (0, n.jsx)(i.E, { variant: "text-md/normal", children: `${a} (${e})` }),
                        },
                        e,
                    );
                }),
            [e],
        );
    return (0, n.jsx)(s.n, {
        label: "Diff User State",
        description: "Click to generate a diff between the client user state and the user worker state.",
        children: (0, n.jsxs)("div", {
            children: [
                (0, n.jsx)(r.$, { onClick: x, text: "Diff User State", loading: t, disabled: t }),
                (0, n.jsxs)("div", {
                    className: m.N6,
                    children: [
                        null != o &&
                            (0, n.jsx)(i.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: m.qS,
                                children: o,
                            }),
                        a &&
                            e.length > 0 &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(i.E, { variant: "text-md/normal", children: `Last run at: ${p}` }),
                                    (0, n.jsx)(i.E, {
                                        variant: "text-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, n.jsx)("div", { className: m.uk, children: g }),
                                ],
                            }),
                        a &&
                            0 === e.length &&
                            (0, n.jsx)(i.E, { variant: "text-md/normal", children: "No users missing from Worker" }),
                    ],
                }),
            ],
        }),
    });
}
