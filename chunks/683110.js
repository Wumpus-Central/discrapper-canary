n.d(t, {
    A: () => j,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(198982),
    s = n(839214),
    o = n(47167),
    c = n(145497),
    d = n(137365),
    u = n(734057),
    m = n(71393),
    p = n(994500),
    h = n(287809),
    f = n(520657);
let x = (0, s.D)(() => ({
    userId: null,
    state: null,
    loading: !1,
    error: null,
}));

function b(e) {
    let { title: t, guildIds: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: f.J1,
                children: (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    children: t,
                }),
            }),
            (0, a.jsxs)("div", {
                className: f.uk,
                children: [
                    0 === n.length &&
                        (0, a.jsx)("div", {
                            className: f.J1,
                            children: (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: "None",
                            }),
                        }),
                    n.map((e) => {
                        let t = m.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, a.jsxs)(
                                  "div",
                                  {
                                      className: f.J1,
                                      children: [
                                          (0, a.jsx)(c.Ay, {
                                              guild: t,
                                              iconSize: 16,
                                          }),
                                          (0, a.jsx)(i.Text, {
                                              variant: "text-sm/normal",
                                              children: t.name,
                                          }),
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

function g(e) {
    var t;
    let { userState: n } = e,
        { user: r, searchWorkerUser: s, guildMembers: d, guildMemberRequests: x } = n,
        g = l.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, a.jsx)(i.yr3, {
                      size: "sm",
                      color: i.LU0.colors.STATUS_POSITIVE,
                  })
                : (0, a.jsx)(i.EpV, {
                      size: "sm",
                      color: i.LU0.colors.ICON_FEEDBACK_CRITICAL,
                  });
        }, []);
    return (0, a.jsxs)("div", {
        className: f.N6,
        children: [
            (0, a.jsxs)("div", {
                className: f.J1,
                children: [
                    g({
                        ok: null != r,
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: null != r ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != r &&
                (0, a.jsx)("div", {
                    className: f.uk,
                    children: (0, a.jsx)("div", {
                        className: f.J1,
                        children: (0, a.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: "username: ".concat(r.username),
                        }),
                    }),
                }),
            (0, a.jsxs)("div", {
                className: f.J1,
                children: [
                    g({
                        ok: null != s,
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children:
                            null != s
                                ? "User exists in User Search Worker"
                                : "User does not exist in User Search Worker",
                    }),
                ],
            }),
            null != s &&
                (0, a.jsxs)("div", {
                    className: f.uk,
                    children: [
                        (0, a.jsx)("div", {
                            className: f.J1,
                            children: (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: "username: ".concat(s.username),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: f.J1,
                            children: (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: "global name: ".concat(null != (t = s.globalName) ? t : "—"),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: f.J1,
                            children: (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: "nicknames:",
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: f.uk,
                            children: [
                                0 === Object.keys(s.nicknames).length &&
                                    (0, a.jsx)("div", {
                                        className: f.J1,
                                        children: (0, a.jsx)(i.Text, {
                                            variant: "text-sm/normal",
                                            children: "None",
                                        }),
                                    }),
                                Object.entries(s.nicknames).map((e) => {
                                    let [t, n] = e,
                                        l = m.A.getGuild(t),
                                        r = u.A.getChannel(t);
                                    return (0, a.jsxs)(
                                        "div",
                                        {
                                            className: f.J1,
                                            children: [
                                                null != l &&
                                                    (0, a.jsx)(c.Ay, {
                                                        guild: l,
                                                        iconSize: 16,
                                                    }),
                                                null != l &&
                                                    (0, a.jsx)(i.Text, {
                                                        variant: "text-sm/normal",
                                                        children: l.name,
                                                    }),
                                                null == l &&
                                                    null != r &&
                                                    (0, a.jsx)(i.Text, {
                                                        variant: "text-sm/normal",
                                                        children: (0, o.m1)(r, h.default, p.A),
                                                    }),
                                                (0, a.jsx)(i.Text, {
                                                    variant: "text-sm/normal",
                                                    children: " (".concat(t, ")"),
                                                }),
                                                null != n &&
                                                    "" !== n &&
                                                    (0, a.jsx)(i.Text, {
                                                        variant: "text-sm/normal",
                                                        children: " - ".concat(n),
                                                    }),
                                            ],
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    ],
                }),
            (0, a.jsxs)("div", {
                className: f.J1,
                children: [
                    g({
                        ok: d.length > 0,
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: d.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            d.length > 0 &&
                (0, a.jsx)("div", {
                    className: f.uk,
                    children: d.map((e) => {
                        var t;
                        let n = m.A.getGuild(e.guildId);
                        if (null == n) return null;
                        let l = null != (t = e.nick) ? t : "";
                        return (0, a.jsxs)(
                            "div",
                            {
                                className: f.J1,
                                children: [
                                    (0, a.jsx)(c.Ay, {
                                        guild: n,
                                        iconSize: 16,
                                    }),
                                    (0, a.jsxs)(i.Text, {
                                        variant: "text-sm/normal",
                                        children: [n.name, "" !== l ? " - ".concat(l) : ""],
                                    }),
                                ],
                            },
                            "".concat(e.guildId),
                        );
                    }),
                }),
            (0, a.jsxs)("div", {
                className: f.J1,
                children: [
                    (0, a.jsx)(i.mir, {
                        size: "sm",
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: "GuildMemberRequesterStore State",
                    }),
                ],
            }),
            null != x &&
                (0, a.jsxs)("div", {
                    className: f.uk,
                    children: [
                        (0, a.jsx)(b, {
                            title: "Pending Guild Member Requests:",
                            guildIds: x.pendingRequestGuildIds,
                        }),
                        (0, a.jsx)(b, {
                            title: "Sent Guild Member Requests:",
                            guildIds: x.sentRequestGuildIds,
                        }),
                        (0, a.jsx)(b, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: x.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}

function v() {
    let e = l.useCallback((e) => {
            x.setState({
                userId: e,
                state: null,
            });
        }, []),
        t = l.useCallback(async () => {
            let { userId: e, loading: t } = x.getState();
            if (!t && null != e) {
                x.setState({
                    loading: !0,
                    error: null,
                });
                try {
                    let t = await (0, d.h2)(e);
                    x.setState({
                        state: t,
                        loading: !1,
                    });
                } catch (t) {
                    let e = new r.LG(t);
                    x.setState({
                        error: e.getAnyErrorMessage(),
                        loading: !1,
                    });
                } finally {
                    x.setState({
                        loading: !1,
                    });
                }
            }
        }, []),
        n = x.useField("loading");
    return (0, a.jsxs)("div", {
        className: f.$n,
        children: [
            (0, a.jsx)(i.ksK, {
                placeholder: "User ID",
                onChange: e,
            }),
            (0, a.jsx)(i.Button, {
                onClick: t,
                text: "Get Snapshot",
                loading: n,
                disabled: n,
            }),
        ],
    });
}

function j() {
    let e = x.useField("state"),
        t = x.useField("error");
    return (0, a.jsxs)(i.nVY, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, a.jsx)(v, {}),
            null != t &&
                (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: f.qS,
                    children: t,
                }),
            null != e &&
                (0, a.jsx)(g, {
                    userState: e,
                }),
        ],
    });
}
