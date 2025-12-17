n.d(t, { Z: () => p });
var a = n(54381),
    r = n(473749),
    l = n(481060),
    i = n(881052),
    s = n(972959),
    o = n(729345),
    c = n(620481),
    d = n(608934),
    u = n(981631);
let m = (0, s.H)(() => ({
    includeFrecency: !0,
    includeFriends: !0,
    includeGDMs: !0,
    includeDMs: !0,
    includeQuickSwitcherState: !0,
    includeUserSearchWorkerState: !0,
    isUploading: !1,
    isSuccess: !1,
    errorMessage: null,
}));
function p() {
    let e = m.useField("includeFrecency"),
        t = m.useField("includeFriends"),
        n = m.useField("includeDMs"),
        s = m.useField("includeGDMs"),
        p = m.useField("includeQuickSwitcherState"),
        h = m.useField("includeUserSearchWorkerState"),
        f = m.useField("isUploading"),
        x = m.useField("isSuccess"),
        b = m.useField("errorMessage"),
        g = r.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: n,
                includeDMs: a,
                includeQuickSwitcherState: r,
                includeUserSearchWorkerState: l,
                isUploading: s,
            } = m.getState();
            if (!s)
                try {
                    m.setState({
                        isUploading: !0,
                        errorMessage: null,
                        isSuccess: !1,
                    }),
                        t && (0, c.lG)(),
                        n && (0, c.mo)(),
                        a && (0, c.FB)(),
                        e && (0, c.Sr)(),
                        r && (0, c.OC)(),
                        l && (0, c.Jt)(),
                        await (0, o.E)(u.GU0.WEB_APP),
                        m.setState({
                            isSuccess: !0,
                            errorMessage: null,
                        });
                } catch (t) {
                    let e = new i.Hx(t);
                    m.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    m.setState({ isUploading: !1 });
                }
        }, []);
    return (0, a.jsxs)(l.C3N, {
        label: "Debug Logs Snapshot",
        description:
            "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
        children: [
            (0, a.jsx)(l.rsf, {
                label: "Frecency",
                description:
                    "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
                checked: e,
                onChange: () => m.setState({ includeFrecency: !e }),
            }),
            (0, a.jsx)(l.rsf, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => m.setState({ includeFriends: !t }),
            }),
            (0, a.jsx)(l.rsf, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => m.setState({ includeDMs: !n }),
            }),
            (0, a.jsx)(l.rsf, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: s,
                onChange: () => m.setState({ includeGDMs: !s }),
            }),
            (0, a.jsx)(l.rsf, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: p,
                onChange: () => m.setState({ includeQuickSwitcherState: !p }),
            }),
            (0, a.jsx)(l.rsf, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: h,
                onChange: () => m.setState({ includeUserSearchWorkerState: !h }),
            }),
            (0, a.jsx)(d.a, {
                isUploading: f,
                isSuccess: x,
                errorMessage: b,
                onClick: g,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
