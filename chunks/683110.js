a.d(t, { A: () => N });
var n = a(627968),
    l = a(64700),
    i = a(834730),
    s = a(628284),
    r = a(827734),
    o = a(695366),
    d = a(885574),
    c = a(292666),
    u = a(821609),
    m = a(270003),
    h = a(198982),
    p = a(839214),
    x = a(47167),
    g = a(145497),
    v = a(137365),
    b = a(734057),
    _ = a(71393),
    f = a(994500),
    j = a(287809),
    A = a(929948);
let y = (0, p.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function C(e) {
    let { title: t, guildIds: a } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: A.J1,
                children: (0, n.jsx)(i.E, { variant: "text-sm/normal", children: t }),
            }),
            (0, n.jsxs)("div", {
                className: A.uk,
                children: [
                    0 === a.length &&
                        (0, n.jsx)("div", {
                            className: A.J1,
                            children: (0, n.jsx)(i.E, { variant: "text-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = _.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, n.jsxs)(
                                  "div",
                                  {
                                      className: A.J1,
                                      children: [
                                          (0, n.jsx)(g.Ay, { guild: t, iconSize: 16 }),
                                          (0, n.jsx)(i.E, { variant: "text-sm/normal", children: t.name }),
                                      ],
                                  },
                                  e,
                              );
                    }),
                ],
            }),
        ],
    });
}
function E(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: c, guildMembers: u, guildMemberRequests: m } = t,
        h = l.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, n.jsx)(s.y, { size: "sm", color: r.A.colors.STATUS_POSITIVE })
                : (0, n.jsx)(o.E, { size: "sm", color: r.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, n.jsxs)("div", {
        className: A.N6,
        children: [
            (0, n.jsxs)("div", {
                className: A.J1,
                children: [
                    h({ ok: null != a }),
                    (0, n.jsx)(i.E, {
                        variant: "text-sm/normal",
                        children: null != a ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != a &&
                (0, n.jsx)("div", {
                    className: A.uk,
                    children: (0, n.jsx)("div", {
                        className: A.J1,
                        children: (0, n.jsx)(i.E, { variant: "text-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, n.jsxs)("div", {
                className: A.J1,
                children: [
                    h({ ok: null != c }),
                    (0, n.jsx)(i.E, {
                        variant: "text-sm/normal",
                        children:
                            null != c
                                ? "User exists in User Search Worker"
                                : "User does not exist in User Search Worker",
                    }),
                ],
            }),
            null != c &&
                (0, n.jsxs)("div", {
                    className: A.uk,
                    children: [
                        (0, n.jsx)("div", {
                            className: A.J1,
                            children: (0, n.jsx)(i.E, {
                                variant: "text-sm/normal",
                                children: `username: ${c.username}`,
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: A.J1,
                            children: (0, n.jsx)(i.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${c.globalName ?? "—"}`,
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: A.J1,
                            children: (0, n.jsx)(i.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: A.uk,
                            children: [
                                0 === Object.keys(c.nicknames).length &&
                                    (0, n.jsx)("div", {
                                        className: A.J1,
                                        children: (0, n.jsx)(i.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(c.nicknames).map((e) => {
                                    let [t, a] = e,
                                        l = _.A.getGuild(t),
                                        s = b.A.getChannel(t);
                                    return (0, n.jsxs)(
                                        "div",
                                        {
                                            className: A.J1,
                                            children: [
                                                null != l && (0, n.jsx)(g.Ay, { guild: l, iconSize: 16 }),
                                                null != l &&
                                                    (0, n.jsx)(i.E, { variant: "text-sm/normal", children: l.name }),
                                                null == l &&
                                                    null != s &&
                                                    (0, n.jsx)(i.E, {
                                                        variant: "text-sm/normal",
                                                        children: (0, x.m1)(s, j.default, f.A),
                                                    }),
                                                (0, n.jsx)(i.E, { variant: "text-sm/normal", children: ` (${t})` }),
                                                null != a &&
                                                    "" !== a &&
                                                    (0, n.jsx)(i.E, { variant: "text-sm/normal", children: ` - ${a}` }),
                                            ],
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    ],
                }),
            (0, n.jsxs)("div", {
                className: A.J1,
                children: [
                    h({ ok: u.length > 0 }),
                    (0, n.jsx)(i.E, {
                        variant: "text-sm/normal",
                        children: u.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            u.length > 0 &&
                (0, n.jsx)("div", {
                    className: A.uk,
                    children: u.map((e) => {
                        let t = _.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, n.jsxs)(
                            "div",
                            {
                                className: A.J1,
                                children: [
                                    (0, n.jsx)(g.Ay, { guild: t, iconSize: 16 }),
                                    (0, n.jsxs)(i.E, {
                                        variant: "text-sm/normal",
                                        children: [t.name, "" !== a ? ` - ${a}` : ""],
                                    }),
                                ],
                            },
                            `${e.guildId}`,
                        );
                    }),
                }),
            (0, n.jsxs)("div", {
                className: A.J1,
                children: [
                    (0, n.jsx)(d.m, { size: "sm" }),
                    (0, n.jsx)(i.E, { variant: "text-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != m &&
                (0, n.jsxs)("div", {
                    className: A.uk,
                    children: [
                        (0, n.jsx)(C, { title: "Pending Guild Member Requests:", guildIds: m.pendingRequestGuildIds }),
                        (0, n.jsx)(C, { title: "Sent Guild Member Requests:", guildIds: m.sentRequestGuildIds }),
                        (0, n.jsx)(C, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: m.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function S() {
    let e = l.useCallback((e) => {
            y.setState({ userId: e, state: null });
        }, []),
        t = l.useCallback(async () => {
            let { userId: e, loading: t } = y.getState();
            if (!t && null != e) {
                y.setState({ loading: !0, error: null });
                try {
                    let t = await (0, v.h2)(e);
                    y.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new h.LG(t);
                    y.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    y.setState({ loading: !1 });
                }
            }
        }, []),
        a = y.useField("loading");
    return (0, n.jsxs)("div", {
        className: A.$n,
        children: [
            (0, n.jsx)(c.k, { placeholder: "User ID", onChange: e }),
            (0, n.jsx)(u.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function N() {
    let e = y.useField("state"),
        t = y.useField("error");
    return (0, n.jsxs)(m.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, n.jsx)(S, {}),
            null != t &&
                (0, n.jsx)(i.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: A.qS,
                    children: t,
                }),
            null != e && (0, n.jsx)(E, { userState: e }),
        ],
    });
}
