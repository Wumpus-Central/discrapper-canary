n.d(t, { Z: () => h });
var a = n(951288),
    r = n(647438),
    i = n(481060),
    l = n(881052),
    s = n(972959),
    o = n(729345),
    c = n(620481),
    d = n(608934),
    u = n(981631),
    m = n(575043);
let p = (0, s.H)(() => ({
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
function h() {
    let e = p.useField("includeFrecency"),
        t = p.useField("includeFriends"),
        n = p.useField("includeDMs"),
        s = p.useField("includeGDMs"),
        h = p.useField("includeQuickSwitcherState"),
        x = p.useField("includeUserSearchWorkerState"),
        f = p.useField("isUploading"),
        b = p.useField("isSuccess"),
        g = p.useField("errorMessage"),
        v = r.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: n,
                includeDMs: a,
                includeQuickSwitcherState: r,
                includeUserSearchWorkerState: i,
                isUploading: s,
            } = p.getState();
            if (!s)
                try {
                    p.setState({
                        isUploading: !0,
                        errorMessage: null,
                        isSuccess: !1,
                    }),
                        t && (0, c.lG)(),
                        n && (0, c.mo)(),
                        a && (0, c.FB)(),
                        e && (0, c.Sr)(),
                        r && (0, c.OC)(),
                        i && (0, c.Jt)(),
                        await (0, o.E)(u.GU0.WEB_APP),
                        p.setState({
                            isSuccess: !0,
                            errorMessage: null,
                        });
                } catch (t) {
                    let e = new l.Hx(t);
                    p.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    p.setState({ isUploading: !1 });
                }
        }, []);
    return (0, a.jsxs)(i.hjN, {
        title: "Debug Logs Snapshot",
        tag: i.RB0.H3,
        className: m.panelGroup,
        children: [
            (0, a.jsx)(i.R94, {
                type: i.geA.DESCRIPTION,
                className: m.subtitle,
                children:
                    "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
            }),
            (0, a.jsx)(i.rsf, {
                label: "Frecency",
                description:
                    "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
                checked: e,
                onChange: () => p.setState({ includeFrecency: !e }),
            }),
            (0, a.jsx)(i.rsf, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => p.setState({ includeFriends: !t }),
            }),
            (0, a.jsx)(i.rsf, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => p.setState({ includeDMs: !n }),
            }),
            (0, a.jsx)(i.rsf, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: s,
                onChange: () => p.setState({ includeGDMs: !s }),
            }),
            (0, a.jsx)(i.rsf, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: h,
                onChange: () => p.setState({ includeQuickSwitcherState: !h }),
            }),
            (0, a.jsx)(i.rsf, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: x,
                onChange: () => p.setState({ includeUserSearchWorkerState: !x }),
            }),
            (0, a.jsx)(d.a, {
                isUploading: f,
                isSuccess: b,
                errorMessage: g,
                onClick: v,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
