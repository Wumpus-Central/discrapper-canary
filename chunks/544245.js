n.d(t, { Z: () => p });
var a = n(951288),
    r = n(647438),
    l = n(481060),
    i = n(881052),
    s = n(972959),
    o = n(729345),
    c = n(620481),
    d = n(608934),
    u = n(981631),
    m = n(530146);
let h = (0, s.H)(() => ({
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
    let e = h.useField("includeFrecency"),
        t = h.useField("includeFriends"),
        n = h.useField("includeDMs"),
        s = h.useField("includeGDMs"),
        p = h.useField("includeQuickSwitcherState"),
        x = h.useField("includeUserSearchWorkerState"),
        b = h.useField("isUploading"),
        f = h.useField("isSuccess"),
        g = h.useField("errorMessage"),
        v = r.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: n,
                includeDMs: a,
                includeQuickSwitcherState: r,
                includeUserSearchWorkerState: l,
                isUploading: s,
            } = h.getState();
            if (!s)
                try {
                    h.setState({
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
                        h.setState({
                            isSuccess: !0,
                            errorMessage: null,
                        });
                } catch (t) {
                    let e = new i.Hx(t);
                    h.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    h.setState({ isUploading: !1 });
                }
        }, []);
    return (0, a.jsxs)(l.hjN, {
        title: "Debug Logs Snapshot",
        tag: l.RB0.H3,
        className: m.panelGroup,
        children: [
            (0, a.jsx)(l.R94, {
                type: l.geA.DESCRIPTION,
                className: m.subtitle,
                children:
                    "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
            }),
            (0, a.jsx)(l.j7V, {
                value: e,
                onChange: () => h.setState({ includeFrecency: !e }),
                note: "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
                children: "Frecency",
            }),
            (0, a.jsx)(l.j7V, {
                value: t,
                onChange: () => h.setState({ includeFriends: !t }),
                note: "Includes all Discord Friend usernames, global names, and nicknames.",
                children: "Friends",
            }),
            (0, a.jsx)(l.j7V, {
                value: n,
                onChange: () => h.setState({ includeDMs: !n }),
                note: "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                children: "DMs",
            }),
            (0, a.jsx)(l.j7V, {
                value: s,
                onChange: () => h.setState({ includeGDMs: !s }),
                note: "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                children: "Group DMs",
            }),
            (0, a.jsx)(l.j7V, {
                value: p,
                onChange: () => h.setState({ includeQuickSwitcherState: !p }),
                note: "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                children: "Quick Switcher Results",
            }),
            (0, a.jsx)(l.j7V, {
                value: x,
                onChange: () => h.setState({ includeUserSearchWorkerState: !x }),
                note: "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                hideBorder: !0,
                children: "User Search Worker",
            }),
            (0, a.jsx)(d.a, {
                isUploading: b,
                isSuccess: f,
                errorMessage: g,
                onClick: v,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
