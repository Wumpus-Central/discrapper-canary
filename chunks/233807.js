n.d(t, { Z: () => T }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(481060),
    i = n(881052),
    s = n(972959),
    o = n(933557),
    c = n(729345),
    d = n(305347),
    u = n(823385),
    m = n(620481),
    x = n(592125),
    h = n(430824),
    p = n(699516),
    f = n(594174),
    v = n(981631),
    b = n(727081);
let g = (0, s.H)(() => ({
    includeFrecency: !0,
    includeFriends: !0,
    includeGDMs: !0,
    includeDMs: !0,
    includeQuickSwitcherState: !0,
    includeUserSearchWorkerState: !0,
    snapshotUploading: !1,
    snapshotSuccess: !1,
    snapshotError: null,
    sessionRecording: !1,
    sessionUploading: !1,
    sessionSuccess: !1,
    sessionError: null,
    targetUserId: null,
    targetUserState: null,
    targetUserStateLoading: !1,
    targetUserStateError: null,
}));
function j(e) {
    let { uploading: t, success: n, error: r, onClick: i, title: s } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(l.zxk, {
                variant: "primary",
                onClick: i,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : s,
            }),
            null != r &&
                (0, a.jsx)(l.R94, {
                    type: l.geA.ERROR,
                    className: b.statusText,
                    children: r,
                }),
            n &&
                (0, a.jsx)(l.R94, {
                    type: l.geA.SUCCESS,
                    className: b.statusText,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
function _() {
    let e = g.useField("snapshotUploading"),
        t = g.useField("snapshotSuccess"),
        n = g.useField("snapshotError"),
        l = r.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: n,
                includeDMs: a,
                includeQuickSwitcherState: r,
                includeUserSearchWorkerState: l,
                snapshotUploading: s,
            } = g.getState();
            if (!s)
                try {
                    g.setState({
                        snapshotUploading: !0,
                        snapshotError: null,
                        snapshotSuccess: !1,
                    }),
                        t && (0, m.lG)(),
                        n && (0, m.mo)(),
                        a && (0, m.FB)(),
                        e && (0, m.Sr)(),
                        r && (0, m.OC)(),
                        l && (0, m.Jt)(),
                        await (0, c.E)(v.GU0.WEB_APP),
                        g.setState({
                            snapshotSuccess: !0,
                            snapshotError: null,
                        });
                } catch (t) {
                    let e = new i.Hx(t);
                    g.setState({ snapshotError: e.getAnyErrorMessage() });
                } finally {
                    g.setState({ snapshotUploading: !1 });
                }
        }, []);
    return (0, a.jsx)(j, {
        uploading: e,
        success: t,
        error: n,
        onClick: l,
        title: "Upload Snapshot Logs",
    });
}
function y() {
    let e = g.useField("sessionUploading"),
        t = g.useField("sessionSuccess"),
        n = g.useField("sessionError"),
        l = r.useCallback(async () => {
            let { sessionUploading: e } = g.getState();
            if (!e)
                try {
                    g.setState({
                        sessionRecording: !1,
                        sessionUploading: !0,
                        sessionError: null,
                        sessionSuccess: !1,
                    }),
                        await (0, c.E)(v.GU0.WEB_APP),
                        g.setState({
                            sessionSuccess: !0,
                            sessionError: null,
                        });
                } catch (t) {
                    let e = new i.Hx(t);
                    g.setState({ sessionError: e.getAnyErrorMessage() });
                } finally {
                    g.setState({ sessionUploading: !1 });
                }
        }, []);
    return (0, a.jsx)(j, {
        uploading: e,
        success: t,
        error: n,
        onClick: l,
        title: "Upload Session Logs",
    });
}
function C(e) {
    let { title: t, guildIds: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: b.detailsRow,
                children: (0, a.jsx)(l.R94, { children: t }),
            }),
            (0, a.jsxs)("div", {
                className: b.detailsList,
                children: [
                    0 === n.length &&
                        (0, a.jsx)("div", {
                            className: b.detailsRow,
                            children: (0, a.jsx)(l.R94, { children: "None" }),
                        }),
                    n.map((e) => {
                        let t = h.Z.getGuild(e);
                        return null == t
                            ? null
                            : (0, a.jsxs)(
                                  "div",
                                  {
                                      className: b.detailsRow,
                                      children: [
                                          (0, a.jsx)(d.ZP, {
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
function N(e) {
    var t;
    let { userState: n } = e,
        { user: i, searchWorkerUser: s, guildMembers: c, guildMemberRequests: u } = n,
        m = r.useCallback((e) => {
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
        className: b.checklist,
        children: [
            (0, a.jsxs)("div", {
                className: b.checklistItem,
                children: [
                    m({ ok: null != i }),
                    (0, a.jsx)(l.R94, {
                        children: null != i ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != i &&
                (0, a.jsx)("div", {
                    className: b.detailsList,
                    children: (0, a.jsx)("div", {
                        className: b.detailsRow,
                        children: (0, a.jsx)(l.R94, { children: "username: ".concat(i.username) }),
                    }),
                }),
            (0, a.jsxs)("div", {
                className: b.checklistItem,
                children: [
                    m({ ok: null != s }),
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
                    className: b.detailsList,
                    children: [
                        (0, a.jsx)("div", {
                            className: b.detailsRow,
                            children: (0, a.jsx)(l.R94, { children: "username: ".concat(s.username) }),
                        }),
                        (0, a.jsx)("div", {
                            className: b.detailsRow,
                            children: (0, a.jsx)(l.R94, {
                                children: "global name: ".concat(null != (t = s.globalName) ? t : "\u2014"),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: b.detailsRow,
                            children: (0, a.jsx)(l.R94, { children: "nicknames:" }),
                        }),
                        (0, a.jsxs)("div", {
                            className: b.detailsList,
                            children: [
                                0 === Object.keys(s.nicknames).length &&
                                    (0, a.jsx)("div", {
                                        className: b.detailsRow,
                                        children: (0, a.jsx)(l.R94, { children: "None" }),
                                    }),
                                Object.entries(s.nicknames).map((e) => {
                                    let [t, n] = e,
                                        r = h.Z.getGuild(t),
                                        i = x.Z.getChannel(t);
                                    return (0, a.jsxs)(
                                        "div",
                                        {
                                            className: b.detailsRow,
                                            children: [
                                                null != r &&
                                                    (0, a.jsx)(d.ZP, {
                                                        guild: r,
                                                        iconSize: 16,
                                                    }),
                                                null != r && (0, a.jsx)(l.R94, { children: r.name }),
                                                null == r &&
                                                    null != i &&
                                                    (0, a.jsx)(l.R94, { children: (0, o.F6)(i, f.default, p.Z) }),
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
                className: b.checklistItem,
                children: [
                    m({ ok: c.length > 0 }),
                    (0, a.jsx)(l.R94, { children: c.length > 0 ? "Guild members exist:" : "No guild members exist" }),
                ],
            }),
            c.length > 0 &&
                (0, a.jsx)("div", {
                    className: b.detailsList,
                    children: c.map((e) => {
                        var t;
                        let n = h.Z.getGuild(e.guildId);
                        if (null == n) return null;
                        let r = null != (t = e.nick) ? t : "";
                        return (0, a.jsxs)(
                            "div",
                            {
                                className: b.detailsRow,
                                children: [
                                    (0, a.jsx)(d.ZP, {
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
                className: b.checklistItem,
                children: [
                    (0, a.jsx)(l.d3s, { size: "sm" }),
                    (0, a.jsx)(l.R94, { children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != u &&
                (0, a.jsxs)("div", {
                    className: b.detailsList,
                    children: [
                        (0, a.jsx)(C, {
                            title: "Pending Guild Member Requests:",
                            guildIds: u.pendingRequestGuildIds,
                        }),
                        (0, a.jsx)(C, {
                            title: "Sent Guild Member Requests:",
                            guildIds: u.sentRequestGuildIds,
                        }),
                        (0, a.jsx)(C, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: u.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function E() {
    let e = r.useCallback((e) => {
            g.setState({
                targetUserId: e,
                targetUserState: null,
            });
        }, []),
        t = r.useCallback(async () => {
            let { targetUserId: e, targetUserStateLoading: t } = g.getState();
            if (!t && null != e) {
                g.setState({
                    targetUserStateLoading: !0,
                    targetUserStateError: null,
                });
                try {
                    let t = await (0, m.V_)(e);
                    g.setState({
                        targetUserState: t,
                        targetUserStateLoading: !1,
                    });
                } catch (t) {
                    let e = new i.Hx(t);
                    g.setState({
                        targetUserStateError: e.getAnyErrorMessage(),
                        targetUserStateLoading: !1,
                    });
                } finally {
                    g.setState({ targetUserStateLoading: !1 });
                }
            }
        }, []),
        n = g.useField("targetUserStateLoading"),
        s = g.useField("targetUserState"),
        o = g.useField("targetUserStateError");
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: b.inputWithButtonRow,
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
            }),
            null != o &&
                (0, a.jsx)(l.R94, {
                    type: l.geA.ERROR,
                    className: b.statusText,
                    children: o,
                }),
            null != s && (0, a.jsx)(N, { userState: s }),
        ],
    });
}
function T() {
    let e = g.useField("sessionRecording"),
        t = g.useField("includeFrecency"),
        n = g.useField("includeFriends"),
        i = g.useField("includeGDMs"),
        s = g.useField("includeDMs"),
        o = g.useField("includeQuickSwitcherState"),
        c = g.useField("includeUserSearchWorkerState"),
        d = r.useRef([]),
        x = r.useRef(""),
        h = r.useCallback(() => {
            let { results: e, query: t } = u.Z.getProps();
            (d.current !== e || x.current !== t) && ((d.current = e), (x.current = t), (0, m.OC)());
        }, []);
    return (
        r.useEffect(() => {
            if (e) return u.Z.addChangeListener(h), () => u.Z.removeChangeListener(h);
        }, [h, e]),
        (0, a.jsxs)(l.zJl, {
            className: b.panel,
            children: [
                (0, a.jsxs)(l.hjN, {
                    title: "Debug Logs Session",
                    tag: l.RB0.H3,
                    className: b.panelGroup,
                    children: [
                        (0, a.jsx)(l.R94, {
                            type: l.geA.DESCRIPTION,
                            className: b.subtitle,
                            children:
                                "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
                        }),
                        (0, a.jsx)(l.R94, {
                            type: l.geA.DESCRIPTION,
                            className: b.subtitle,
                            children: "When you are done, please remember to upload the logs.",
                        }),
                        (0, a.jsxs)(l.hE2, {
                            children: [
                                (0, a.jsx)(l.zxk, {
                                    variant: e ? "critical-primary" : "primary",
                                    onClick: () => g.setState({ sessionRecording: !e }),
                                    text: e ? "Stop Recording" : "Start Recording",
                                }),
                                (0, a.jsx)(y, {}),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)(l.hjN, {
                    title: "Debug Logs Snapshot",
                    tag: l.RB0.H3,
                    className: b.panelGroup,
                    children: [
                        (0, a.jsx)(l.R94, {
                            type: l.geA.DESCRIPTION,
                            className: b.subtitle,
                            children:
                                "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
                        }),
                        (0, a.jsx)(l.j7V, {
                            value: t,
                            onChange: () => g.setState({ includeFrecency: !t }),
                            note: "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
                            children: "Frecency",
                        }),
                        (0, a.jsx)(l.j7V, {
                            value: n,
                            onChange: () => g.setState({ includeFriends: !n }),
                            note: "Includes all Discord Friend usernames, global names, and nicknames.",
                            children: "Friends",
                        }),
                        (0, a.jsx)(l.j7V, {
                            value: s,
                            onChange: () => g.setState({ includeDMs: !s }),
                            note: "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                            children: "DMs",
                        }),
                        (0, a.jsx)(l.j7V, {
                            value: i,
                            onChange: () => g.setState({ includeGDMs: !i }),
                            note: "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                            children: "Group DMs",
                        }),
                        (0, a.jsx)(l.j7V, {
                            value: o,
                            onChange: () => g.setState({ includeQuickSwitcherState: !o }),
                            note: "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                            children: "Quick Switcher Results",
                        }),
                        (0, a.jsx)(l.j7V, {
                            value: c,
                            onChange: () => g.setState({ includeUserSearchWorkerState: !c }),
                            note: "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                            hideBorder: !0,
                            children: "User Search Worker",
                        }),
                        (0, a.jsx)(_, {}),
                    ],
                }),
                (0, a.jsxs)(l.hjN, {
                    title: "Debug User State",
                    tag: l.RB0.H3,
                    className: b.panelGroup,
                    children: [
                        (0, a.jsx)(l.R94, {
                            type: l.geA.DESCRIPTION,
                            className: b.subtitle,
                            children:
                                "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
                        }),
                        (0, a.jsx)(E, {}),
                    ],
                }),
            ],
        })
    );
}
