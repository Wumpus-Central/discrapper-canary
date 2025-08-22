n.d(t, { Z: () => v });
var a = n(951288),
    r = n(647438),
    l = n(481060),
    i = n(881052),
    s = n(972959),
    o = n(729345),
    c = n(823385),
    d = n(620481),
    u = n(981631),
    m = n(727081);
let x = (0, s.H)(() => ({
    includeFrecency: !0,
    includeFriends: !0,
    includeGDMs: !0,
    includeDMs: !0,
    includeQuickSwitcherState: !0,
    snapshotUploading: !1,
    snapshotSuccess: !1,
    snapshotError: null,
    sessionRecording: !1,
    sessionUploading: !1,
    sessionSuccess: !1,
    sessionError: null,
}));
function h(e) {
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
                    className: m.statusText,
                    children: r,
                }),
            n &&
                (0, a.jsx)(l.R94, {
                    type: l.geA.SUCCESS,
                    className: m.statusText,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
function p() {
    let e = x.useField("snapshotUploading"),
        t = x.useField("snapshotSuccess"),
        n = x.useField("snapshotError"),
        l = r.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: n,
                includeDMs: a,
                includeQuickSwitcherState: r,
                snapshotUploading: l,
            } = x.getState();
            if (!l)
                try {
                    x.setState({
                        snapshotUploading: !0,
                        snapshotError: null,
                        snapshotSuccess: !1,
                    }),
                        t && (0, d.lG)(),
                        n && (0, d.mo)(),
                        a && (0, d.FB)(),
                        e && (0, d.Sr)(),
                        r && (0, d.OC)(),
                        await (0, o.E)(u.GU0.WEB_APP),
                        x.setState({
                            snapshotSuccess: !0,
                            snapshotError: null,
                        });
                } catch (t) {
                    let e = new i.Hx(t);
                    x.setState({ snapshotError: e.getAnyErrorMessage() });
                } finally {
                    x.setState({ snapshotUploading: !1 });
                }
        }, []);
    return (0, a.jsx)(h, {
        uploading: e,
        success: t,
        error: n,
        onClick: l,
        title: "Upload Snapshot Logs",
    });
}
function f() {
    let e = x.useField("sessionUploading"),
        t = x.useField("sessionSuccess"),
        n = x.useField("sessionError"),
        l = r.useCallback(async () => {
            let { sessionUploading: e } = x.getState();
            if (!e)
                try {
                    x.setState({
                        sessionRecording: !1,
                        sessionUploading: !0,
                        sessionError: null,
                        sessionSuccess: !1,
                    }),
                        await (0, o.E)(u.GU0.WEB_APP),
                        x.setState({
                            sessionSuccess: !0,
                            sessionError: null,
                        });
                } catch (t) {
                    let e = new i.Hx(t);
                    x.setState({ sessionError: e.getAnyErrorMessage() });
                } finally {
                    x.setState({ sessionUploading: !1 });
                }
        }, []);
    return (0, a.jsx)(h, {
        uploading: e,
        success: t,
        error: n,
        onClick: l,
        title: "Upload Session Logs",
    });
}
function v() {
    let e = x.useField("sessionRecording"),
        t = x.useField("includeFrecency"),
        n = x.useField("includeFriends"),
        i = x.useField("includeGDMs"),
        s = x.useField("includeDMs"),
        o = x.useField("includeQuickSwitcherState"),
        u = r.useRef([]),
        h = r.useRef(""),
        v = r.useCallback(() => {
            let { results: e, query: t } = c.Z.getProps();
            (u.current !== e || h.current !== t) && ((u.current = e), (h.current = t), (0, d.OC)());
        }, []);
    return (
        r.useEffect(() => {
            if (e) return c.Z.addChangeListener(v), () => c.Z.removeChangeListener(v);
        }, [v, e]),
        (0, a.jsxs)(l.zJl, {
            className: m.panel,
            children: [
                (0, a.jsxs)(l.hjN, {
                    title: "Debug Logs Session",
                    tag: l.RB0.H3,
                    className: m.panelGroup,
                    children: [
                        (0, a.jsx)(l.R94, {
                            type: l.geA.DESCRIPTION,
                            className: m.subtitle,
                            children:
                                "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
                        }),
                        (0, a.jsx)(l.R94, {
                            type: l.geA.DESCRIPTION,
                            className: m.subtitle,
                            children: "When you are done, please remember to upload the logs.",
                        }),
                        (0, a.jsxs)(l.hE2, {
                            children: [
                                (0, a.jsx)(l.zxk, {
                                    variant: e ? "critical-primary" : "primary",
                                    onClick: () => x.setState({ sessionRecording: !e }),
                                    text: e ? "Stop Recording" : "Start Recording",
                                }),
                                (0, a.jsx)(f, {}),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)(l.hjN, {
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
                            value: t,
                            onChange: () => x.setState({ includeFrecency: !t }),
                            note: "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
                            children: "Frecency",
                        }),
                        (0, a.jsx)(l.j7V, {
                            value: n,
                            onChange: () => x.setState({ includeFriends: !n }),
                            note: "Includes all Discord Friend usernames, global names, and nicknames.",
                            children: "Friends",
                        }),
                        (0, a.jsx)(l.j7V, {
                            value: s,
                            onChange: () => x.setState({ includeDMs: !s }),
                            note: "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                            children: "DMs",
                        }),
                        (0, a.jsx)(l.j7V, {
                            value: i,
                            onChange: () => x.setState({ includeGDMs: !i }),
                            note: "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                            children: "Group DMs",
                        }),
                        (0, a.jsx)(l.j7V, {
                            value: o,
                            onChange: () => x.setState({ includeQuickSwitcherState: !o }),
                            note: "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                            hideBorder: !0,
                            children: "Quick Switcher State",
                        }),
                        (0, a.jsx)(p, {}),
                    ],
                }),
            ],
        })
    );
}
