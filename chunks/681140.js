n.d(t, { Z: () => j }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(481060),
    i = n(881052),
    s = n(972959),
    o = n(933557),
    c = n(305347),
    d = n(620481),
    u = n(592125),
    m = n(430824),
    h = n(699516),
    p = n(594174),
    x = n(530146);
let b = (0, s.H)(() => ({
    userId: null,
    state: null,
    loading: !1,
    error: null,
}));
function f(e) {
    let { title: t, guildIds: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: x.detailsRow,
                children: (0, a.jsx)(l.R94, { children: t }),
            }),
            (0, a.jsxs)("div", {
                className: x.nestedDetailsList,
                children: [
                    0 === n.length &&
                        (0, a.jsx)("div", {
                            className: x.detailsRow,
                            children: (0, a.jsx)(l.R94, { children: "None" }),
                        }),
                    n.map((e) => {
                        let t = m.Z.getGuild(e);
                        return null == t
                            ? null
                            : (0, a.jsxs)(
                                  "div",
                                  {
                                      className: x.detailsRow,
                                      children: [
                                          (0, a.jsx)(c.ZP, {
                                              guild: t,
                                              iconSize: 16,
                                          }),
                                          (0, a.jsx)(l.R94, { children: t.name }),
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
        { user: i, searchWorkerUser: s, guildMembers: d, guildMemberRequests: b } = n,
        g = r.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, a.jsx)(l.owK, {
                      size: "sm",
                      color: l.TVs.colors.STATUS_POSITIVE,
                  })
                : (0, a.jsx)(l.Mgn, {
                      size: "sm",
                      color: l.TVs.colors.STATUS_DANGER,
                  });
        }, []);
    return (0, a.jsxs)("div", {
        className: x.detailsList,
        children: [
            (0, a.jsxs)("div", {
                className: x.detailsRow,
                children: [
                    g({ ok: null != i }),
                    (0, a.jsx)(l.R94, {
                        children: null != i ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != i &&
                (0, a.jsx)("div", {
                    className: x.nestedDetailsList,
                    children: (0, a.jsx)("div", {
                        className: x.detailsRow,
                        children: (0, a.jsx)(l.R94, { children: "username: ".concat(i.username) }),
                    }),
                }),
            (0, a.jsxs)("div", {
                className: x.detailsRow,
                children: [
                    g({ ok: null != s }),
                    (0, a.jsx)(l.R94, {
                        children:
                            null != s
                                ? "User exists in User Search Worker"
                                : "User does not exist in User Search Worker",
                    }),
                ],
            }),
            null != s &&
                (0, a.jsxs)("div", {
                    className: x.nestedDetailsList,
                    children: [
                        (0, a.jsx)("div", {
                            className: x.detailsRow,
                            children: (0, a.jsx)(l.R94, { children: "username: ".concat(s.username) }),
                        }),
                        (0, a.jsx)("div", {
                            className: x.detailsRow,
                            children: (0, a.jsx)(l.R94, {
                                children: "global name: ".concat(null != (t = s.globalName) ? t : "\u2014"),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: x.detailsRow,
                            children: (0, a.jsx)(l.R94, { children: "nicknames:" }),
                        }),
                        (0, a.jsxs)("div", {
                            className: x.nestedDetailsList,
                            children: [
                                0 === Object.keys(s.nicknames).length &&
                                    (0, a.jsx)("div", {
                                        className: x.detailsRow,
                                        children: (0, a.jsx)(l.R94, { children: "None" }),
                                    }),
                                Object.entries(s.nicknames).map((e) => {
                                    let [t, n] = e,
                                        r = m.Z.getGuild(t),
                                        i = u.Z.getChannel(t);
                                    return (0, a.jsxs)(
                                        "div",
                                        {
                                            className: x.detailsRow,
                                            children: [
                                                null != r &&
                                                    (0, a.jsx)(c.ZP, {
                                                        guild: r,
                                                        iconSize: 16,
                                                    }),
                                                null != r && (0, a.jsx)(l.R94, { children: r.name }),
                                                null == r &&
                                                    null != i &&
                                                    (0, a.jsx)(l.R94, { children: (0, o.F6)(i, p.default, h.Z) }),
                                                (0, a.jsx)(l.R94, { children: " (".concat(t, ")") }),
                                                null != n &&
                                                    "" !== n &&
                                                    (0, a.jsx)(l.R94, { children: " - ".concat(n) }),
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
                className: x.detailsRow,
                children: [
                    g({ ok: d.length > 0 }),
                    (0, a.jsx)(l.R94, { children: d.length > 0 ? "Guild members exist:" : "No guild members exist" }),
                ],
            }),
            d.length > 0 &&
                (0, a.jsx)("div", {
                    className: x.nestedDetailsList,
                    children: d.map((e) => {
                        var t;
                        let n = m.Z.getGuild(e.guildId);
                        if (null == n) return null;
                        let r = null != (t = e.nick) ? t : "";
                        return (0, a.jsxs)(
                            "div",
                            {
                                className: x.detailsRow,
                                children: [
                                    (0, a.jsx)(c.ZP, {
                                        guild: n,
                                        iconSize: 16,
                                    }),
                                    (0, a.jsxs)(l.R94, {
                                        children: [n.name, "" !== r ? " - ".concat(r) : ""],
                                    }),
                                ],
                            },
                            "".concat(e.guildId),
                        );
                    }),
                }),
            (0, a.jsxs)("div", {
                className: x.detailsRow,
                children: [
                    (0, a.jsx)(l.d3s, { size: "sm" }),
                    (0, a.jsx)(l.R94, { children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != b &&
                (0, a.jsxs)("div", {
                    className: x.nestedDetailsList,
                    children: [
                        (0, a.jsx)(f, {
                            title: "Pending Guild Member Requests:",
                            guildIds: b.pendingRequestGuildIds,
                        }),
                        (0, a.jsx)(f, {
                            title: "Sent Guild Member Requests:",
                            guildIds: b.sentRequestGuildIds,
                        }),
                        (0, a.jsx)(f, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: b.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function v() {
    let e = r.useCallback((e) => {
            b.setState({
                userId: e,
                state: null,
            });
        }, []),
        t = r.useCallback(async () => {
            let { userId: e, loading: t } = b.getState();
            if (!t && null != e) {
                b.setState({
                    loading: !0,
                    error: null,
                });
                try {
                    let t = await (0, d.V_)(e);
                    b.setState({
                        state: t,
                        loading: !1,
                    });
                } catch (t) {
                    let e = new i.Hx(t);
                    b.setState({
                        error: e.getAnyErrorMessage(),
                        loading: !1,
                    });
                } finally {
                    b.setState({ loading: !1 });
                }
            }
        }, []),
        n = b.useField("loading");
    return (0, a.jsxs)("div", {
        className: x.inputWithButtonRow,
        children: [
            (0, a.jsx)(l.oil, {
                placeholder: "User ID",
                onChange: e,
            }),
            (0, a.jsx)(l.zxk, {
                onClick: t,
                text: "Get Snapshot",
                loading: n,
                disabled: n,
            }),
        ],
    });
}
function j() {
    let e = b.useField("state"),
        t = b.useField("error");
    return (0, a.jsxs)(l.hjN, {
        title: "Debug User State",
        tag: l.RB0.H3,
        className: x.panelGroup,
        children: [
            (0, a.jsx)(l.R94, {
                type: l.geA.DESCRIPTION,
                className: x.subtitle,
                children:
                    "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
            }),
            (0, a.jsx)(v, {}),
            null != t &&
                (0, a.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: x.statusText,
                    children: t,
                }),
            null != e && (0, a.jsx)(g, { userState: e }),
        ],
    });
}
