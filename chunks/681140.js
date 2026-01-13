n.d(t, { Z: () => j }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(481060),
    l = n(881052),
    s = n(972959),
    o = n(933557),
    c = n(305347),
    d = n(620481),
    u = n(592125),
    m = n(430824),
    p = n(699516),
    h = n(594174),
    f = n(605716);
let x = (0, s.H)(() => ({
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
                className: f.detailsRow,
                children: (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    children: t,
                }),
            }),
            (0, a.jsxs)("div", {
                className: f.nestedDetailsList,
                children: [
                    0 === n.length &&
                        (0, a.jsx)("div", {
                            className: f.detailsRow,
                            children: (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: "None",
                            }),
                        }),
                    n.map((e) => {
                        let t = m.Z.getGuild(e);
                        return null == t
                            ? null
                            : (0, a.jsxs)(
                                  "div",
                                  {
                                      className: f.detailsRow,
                                      children: [
                                          (0, a.jsx)(c.ZP, {
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
        { user: l, searchWorkerUser: s, guildMembers: d, guildMemberRequests: x } = n,
        g = r.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, a.jsx)(i.owK, {
                      size: "sm",
                      color: i.TVs.colors.STATUS_POSITIVE,
                  })
                : (0, a.jsx)(i.Mgn, {
                      size: "sm",
                      color: i.TVs.colors.ICON_FEEDBACK_CRITICAL,
                  });
        }, []);
    return (0, a.jsxs)("div", {
        className: f.detailsList,
        children: [
            (0, a.jsxs)("div", {
                className: f.detailsRow,
                children: [
                    g({ ok: null != l }),
                    (0, a.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: null != l ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != l &&
                (0, a.jsx)("div", {
                    className: f.nestedDetailsList,
                    children: (0, a.jsx)("div", {
                        className: f.detailsRow,
                        children: (0, a.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: "username: ".concat(l.username),
                        }),
                    }),
                }),
            (0, a.jsxs)("div", {
                className: f.detailsRow,
                children: [
                    g({ ok: null != s }),
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
                    className: f.nestedDetailsList,
                    children: [
                        (0, a.jsx)("div", {
                            className: f.detailsRow,
                            children: (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: "username: ".concat(s.username),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: f.detailsRow,
                            children: (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: "global name: ".concat(null != (t = s.globalName) ? t : "\u2014"),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: f.detailsRow,
                            children: (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: "nicknames:",
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: f.nestedDetailsList,
                            children: [
                                0 === Object.keys(s.nicknames).length &&
                                    (0, a.jsx)("div", {
                                        className: f.detailsRow,
                                        children: (0, a.jsx)(i.Text, {
                                            variant: "text-sm/normal",
                                            children: "None",
                                        }),
                                    }),
                                Object.entries(s.nicknames).map((e) => {
                                    let [t, n] = e,
                                        r = m.Z.getGuild(t),
                                        l = u.Z.getChannel(t);
                                    return (0, a.jsxs)(
                                        "div",
                                        {
                                            className: f.detailsRow,
                                            children: [
                                                null != r &&
                                                    (0, a.jsx)(c.ZP, {
                                                        guild: r,
                                                        iconSize: 16,
                                                    }),
                                                null != r &&
                                                    (0, a.jsx)(i.Text, {
                                                        variant: "text-sm/normal",
                                                        children: r.name,
                                                    }),
                                                null == r &&
                                                    null != l &&
                                                    (0, a.jsx)(i.Text, {
                                                        variant: "text-sm/normal",
                                                        children: (0, o.F6)(l, h.default, p.Z),
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
                className: f.detailsRow,
                children: [
                    g({ ok: d.length > 0 }),
                    (0, a.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: d.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            d.length > 0 &&
                (0, a.jsx)("div", {
                    className: f.nestedDetailsList,
                    children: d.map((e) => {
                        var t;
                        let n = m.Z.getGuild(e.guildId);
                        if (null == n) return null;
                        let r = null != (t = e.nick) ? t : "";
                        return (0, a.jsxs)(
                            "div",
                            {
                                className: f.detailsRow,
                                children: [
                                    (0, a.jsx)(c.ZP, {
                                        guild: n,
                                        iconSize: 16,
                                    }),
                                    (0, a.jsxs)(i.Text, {
                                        variant: "text-sm/normal",
                                        children: [n.name, "" !== r ? " - ".concat(r) : ""],
                                    }),
                                ],
                            },
                            "".concat(e.guildId),
                        );
                    }),
                }),
            (0, a.jsxs)("div", {
                className: f.detailsRow,
                children: [
                    (0, a.jsx)(i.d3s, { size: "sm" }),
                    (0, a.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: "GuildMemberRequesterStore State",
                    }),
                ],
            }),
            null != x &&
                (0, a.jsxs)("div", {
                    className: f.nestedDetailsList,
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
    let e = r.useCallback((e) => {
            x.setState({
                userId: e,
                state: null,
            });
        }, []),
        t = r.useCallback(async () => {
            let { userId: e, loading: t } = x.getState();
            if (!t && null != e) {
                x.setState({
                    loading: !0,
                    error: null,
                });
                try {
                    let t = await (0, d.V_)(e);
                    x.setState({
                        state: t,
                        loading: !1,
                    });
                } catch (t) {
                    let e = new l.Hx(t);
                    x.setState({
                        error: e.getAnyErrorMessage(),
                        loading: !1,
                    });
                } finally {
                    x.setState({ loading: !1 });
                }
            }
        }, []),
        n = x.useField("loading");
    return (0, a.jsxs)("div", {
        className: f.inputWithButtonRow,
        children: [
            (0, a.jsx)(i.oil, {
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
    return (0, a.jsxs)(i.C3N, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, a.jsx)(v, {}),
            null != t &&
                (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: f.statusText,
                    children: t,
                }),
            null != e && (0, a.jsx)(g, { userState: e }),
        ],
    });
}
