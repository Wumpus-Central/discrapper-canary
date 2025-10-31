n.d(t, { Z: () => j }), n(388685);
var a = n(951288),
    i = n(647438),
    l = n(481060),
    r = n(881052),
    s = n(972959),
    o = n(933557),
    c = n(305347),
    d = n(620481),
    u = n(592125),
    m = n(430824),
    p = n(699516),
    h = n(594174),
    x = n(530146);
let g = (0, s.H)(() => ({
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
                children: (0, a.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: t,
                }),
            }),
            (0, a.jsxs)("div", {
                className: x.nestedDetailsList,
                children: [
                    0 === n.length &&
                        (0, a.jsx)("div", {
                            className: x.detailsRow,
                            children: (0, a.jsx)(l.Text, {
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
                                      className: x.detailsRow,
                                      children: [
                                          (0, a.jsx)(c.ZP, {
                                              guild: t,
                                              iconSize: 16,
                                          }),
                                          (0, a.jsx)(l.Text, {
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
function b(e) {
    var t;
    let { userState: n } = e,
        { user: r, searchWorkerUser: s, guildMembers: d, guildMemberRequests: g } = n,
        b = i.useCallback((e) => {
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
                    b({ ok: null != r }),
                    (0, a.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: null != r ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != r &&
                (0, a.jsx)("div", {
                    className: x.nestedDetailsList,
                    children: (0, a.jsx)("div", {
                        className: x.detailsRow,
                        children: (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: "username: ".concat(r.username),
                        }),
                    }),
                }),
            (0, a.jsxs)("div", {
                className: x.detailsRow,
                children: [
                    b({ ok: null != s }),
                    (0, a.jsx)(l.Text, {
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
                    className: x.nestedDetailsList,
                    children: [
                        (0, a.jsx)("div", {
                            className: x.detailsRow,
                            children: (0, a.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: "username: ".concat(s.username),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: x.detailsRow,
                            children: (0, a.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: "global name: ".concat(null != (t = s.globalName) ? t : "\u2014"),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: x.detailsRow,
                            children: (0, a.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: "nicknames:",
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: x.nestedDetailsList,
                            children: [
                                0 === Object.keys(s.nicknames).length &&
                                    (0, a.jsx)("div", {
                                        className: x.detailsRow,
                                        children: (0, a.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            children: "None",
                                        }),
                                    }),
                                Object.entries(s.nicknames).map((e) => {
                                    let [t, n] = e,
                                        i = m.Z.getGuild(t),
                                        r = u.Z.getChannel(t);
                                    return (0, a.jsxs)(
                                        "div",
                                        {
                                            className: x.detailsRow,
                                            children: [
                                                null != i &&
                                                    (0, a.jsx)(c.ZP, {
                                                        guild: i,
                                                        iconSize: 16,
                                                    }),
                                                null != i &&
                                                    (0, a.jsx)(l.Text, {
                                                        variant: "text-sm/normal",
                                                        children: i.name,
                                                    }),
                                                null == i &&
                                                    null != r &&
                                                    (0, a.jsx)(l.Text, {
                                                        variant: "text-sm/normal",
                                                        children: (0, o.F6)(r, h.default, p.Z),
                                                    }),
                                                (0, a.jsx)(l.Text, {
                                                    variant: "text-sm/normal",
                                                    children: " (".concat(t, ")"),
                                                }),
                                                null != n &&
                                                    "" !== n &&
                                                    (0, a.jsx)(l.Text, {
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
                className: x.detailsRow,
                children: [
                    b({ ok: d.length > 0 }),
                    (0, a.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: d.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            d.length > 0 &&
                (0, a.jsx)("div", {
                    className: x.nestedDetailsList,
                    children: d.map((e) => {
                        var t;
                        let n = m.Z.getGuild(e.guildId);
                        if (null == n) return null;
                        let i = null != (t = e.nick) ? t : "";
                        return (0, a.jsxs)(
                            "div",
                            {
                                className: x.detailsRow,
                                children: [
                                    (0, a.jsx)(c.ZP, {
                                        guild: n,
                                        iconSize: 16,
                                    }),
                                    (0, a.jsxs)(l.Text, {
                                        variant: "text-sm/normal",
                                        children: [n.name, "" !== i ? " - ".concat(i) : ""],
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
                    (0, a.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: "GuildMemberRequesterStore State",
                    }),
                ],
            }),
            null != g &&
                (0, a.jsxs)("div", {
                    className: x.nestedDetailsList,
                    children: [
                        (0, a.jsx)(f, {
                            title: "Pending Guild Member Requests:",
                            guildIds: g.pendingRequestGuildIds,
                        }),
                        (0, a.jsx)(f, {
                            title: "Sent Guild Member Requests:",
                            guildIds: g.sentRequestGuildIds,
                        }),
                        (0, a.jsx)(f, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: g.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function v() {
    let e = i.useCallback((e) => {
            g.setState({
                userId: e,
                state: null,
            });
        }, []),
        t = i.useCallback(async () => {
            let { userId: e, loading: t } = g.getState();
            if (!t && null != e) {
                g.setState({
                    loading: !0,
                    error: null,
                });
                try {
                    let t = await (0, d.V_)(e);
                    g.setState({
                        state: t,
                        loading: !1,
                    });
                } catch (t) {
                    let e = new r.Hx(t);
                    g.setState({
                        error: e.getAnyErrorMessage(),
                        loading: !1,
                    });
                } finally {
                    g.setState({ loading: !1 });
                }
            }
        }, []),
        n = g.useField("loading");
    return (0, a.jsxs)("div", {
        className: x.inputWithButtonRow,
        children: [
            (0, a.jsx)(l.oil, {
                placeholder: "User ID",
                onChange: e,
            }),
            (0, a.jsx)(l.Button, {
                onClick: t,
                text: "Get Snapshot",
                loading: n,
                disabled: n,
            }),
        ],
    });
}
function j() {
    let e = g.useField("state"),
        t = g.useField("error");
    return (0, a.jsxs)(l.C3N, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, a.jsx)(v, {}),
            null != t &&
                (0, a.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: x.statusText,
                    children: t,
                }),
            null != e && (0, a.jsx)(b, { userState: e }),
        ],
    });
}
