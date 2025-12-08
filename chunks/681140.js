n.d(t, { Z: () => j }), n(388685);
var a = n(54381),
    l = n(473749),
    r = n(481060),
    i = n(881052),
    s = n(972959),
    o = n(933557),
    c = n(305347),
    d = n(620481),
    u = n(592125),
    m = n(430824),
    p = n(699516),
    h = n(594174),
    x = n(530146);
let f = (0, s.H)(() => ({
    userId: null,
    state: null,
    loading: !1,
    error: null,
}));
function g(e) {
    let { title: t, guildIds: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: x.detailsRow,
                children: (0, a.jsx)(r.Text, {
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
                            children: (0, a.jsx)(r.Text, {
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
                                          (0, a.jsx)(r.Text, {
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
        { user: i, searchWorkerUser: s, guildMembers: d, guildMemberRequests: f } = n,
        b = l.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, a.jsx)(r.owK, {
                      size: "sm",
                      color: r.TVs.colors.STATUS_POSITIVE,
                  })
                : (0, a.jsx)(r.Mgn, {
                      size: "sm",
                      color: r.TVs.colors.STATUS_DANGER,
                  });
        }, []);
    return (0, a.jsxs)("div", {
        className: x.detailsList,
        children: [
            (0, a.jsxs)("div", {
                className: x.detailsRow,
                children: [
                    b({ ok: null != i }),
                    (0, a.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        children: null != i ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != i &&
                (0, a.jsx)("div", {
                    className: x.nestedDetailsList,
                    children: (0, a.jsx)("div", {
                        className: x.detailsRow,
                        children: (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: "username: ".concat(i.username),
                        }),
                    }),
                }),
            (0, a.jsxs)("div", {
                className: x.detailsRow,
                children: [
                    b({ ok: null != s }),
                    (0, a.jsx)(r.Text, {
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
                            children: (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: "username: ".concat(s.username),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: x.detailsRow,
                            children: (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: "global name: ".concat(null != (t = s.globalName) ? t : "\u2014"),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: x.detailsRow,
                            children: (0, a.jsx)(r.Text, {
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
                                        children: (0, a.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            children: "None",
                                        }),
                                    }),
                                Object.entries(s.nicknames).map((e) => {
                                    let [t, n] = e,
                                        l = m.Z.getGuild(t),
                                        i = u.Z.getChannel(t);
                                    return (0, a.jsxs)(
                                        "div",
                                        {
                                            className: x.detailsRow,
                                            children: [
                                                null != l &&
                                                    (0, a.jsx)(c.ZP, {
                                                        guild: l,
                                                        iconSize: 16,
                                                    }),
                                                null != l &&
                                                    (0, a.jsx)(r.Text, {
                                                        variant: "text-sm/normal",
                                                        children: l.name,
                                                    }),
                                                null == l &&
                                                    null != i &&
                                                    (0, a.jsx)(r.Text, {
                                                        variant: "text-sm/normal",
                                                        children: (0, o.F6)(i, h.default, p.Z),
                                                    }),
                                                (0, a.jsx)(r.Text, {
                                                    variant: "text-sm/normal",
                                                    children: " (".concat(t, ")"),
                                                }),
                                                null != n &&
                                                    "" !== n &&
                                                    (0, a.jsx)(r.Text, {
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
                    (0, a.jsx)(r.Text, {
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
                        let l = null != (t = e.nick) ? t : "";
                        return (0, a.jsxs)(
                            "div",
                            {
                                className: x.detailsRow,
                                children: [
                                    (0, a.jsx)(c.ZP, {
                                        guild: n,
                                        iconSize: 16,
                                    }),
                                    (0, a.jsxs)(r.Text, {
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
                className: x.detailsRow,
                children: [
                    (0, a.jsx)(r.d3s, { size: "sm" }),
                    (0, a.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        children: "GuildMemberRequesterStore State",
                    }),
                ],
            }),
            null != f &&
                (0, a.jsxs)("div", {
                    className: x.nestedDetailsList,
                    children: [
                        (0, a.jsx)(g, {
                            title: "Pending Guild Member Requests:",
                            guildIds: f.pendingRequestGuildIds,
                        }),
                        (0, a.jsx)(g, {
                            title: "Sent Guild Member Requests:",
                            guildIds: f.sentRequestGuildIds,
                        }),
                        (0, a.jsx)(g, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: f.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function v() {
    let e = l.useCallback((e) => {
            f.setState({
                userId: e,
                state: null,
            });
        }, []),
        t = l.useCallback(async () => {
            let { userId: e, loading: t } = f.getState();
            if (!t && null != e) {
                f.setState({
                    loading: !0,
                    error: null,
                });
                try {
                    let t = await (0, d.V_)(e);
                    f.setState({
                        state: t,
                        loading: !1,
                    });
                } catch (t) {
                    let e = new i.Hx(t);
                    f.setState({
                        error: e.getAnyErrorMessage(),
                        loading: !1,
                    });
                } finally {
                    f.setState({ loading: !1 });
                }
            }
        }, []),
        n = f.useField("loading");
    return (0, a.jsxs)("div", {
        className: x.inputWithButtonRow,
        children: [
            (0, a.jsx)(r.oil, {
                placeholder: "User ID",
                onChange: e,
            }),
            (0, a.jsx)(r.Button, {
                onClick: t,
                text: "Get Snapshot",
                loading: n,
                disabled: n,
            }),
        ],
    });
}
function j() {
    let e = f.useField("state"),
        t = f.useField("error");
    return (0, a.jsxs)(r.C3N, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, a.jsx)(v, {}),
            null != t &&
                (0, a.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: x.statusText,
                    children: t,
                }),
            null != e && (0, a.jsx)(b, { userState: e }),
        ],
    });
}
