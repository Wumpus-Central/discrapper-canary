a.d(t, { Z: () => u }), a(388685);
var n = a(951288),
    r = a(647438),
    l = a(481060),
    i = a(881052),
    s = a(729345),
    o = a(620481),
    c = a(981631),
    d = a(727081);
function u() {
    let [e, t] = r.useState(!0),
        [a, u] = r.useState(!0),
        [m, x] = r.useState(!0),
        [h, p] = r.useState(!0),
        [v, b] = r.useState(!1),
        [f, j] = r.useState(!1),
        [g, _] = r.useState(null),
        y = r.useCallback(async () => {
            try {
                _(null),
                    j(!1),
                    b(!0),
                    a && (0, o.lG)(),
                    m && (0, o.du)(),
                    e && (0, o.Sr)(),
                    h && (0, o.OC)(),
                    await (0, s.E)(c.GU0.WEB_APP),
                    j(!0),
                    _(null);
            } catch (e) {
                _(new i.Hx(e).getAnyErrorMessage());
            } finally {
                b(!1);
            }
        }, [a, m, e, h]);
    return (0, n.jsx)("div", {
        className: d.panel,
        children: (0, n.jsxs)(l.hjN, {
            title: "Create Debug Logs",
            tag: l.RB0.H3,
            className: d.panelGroup,
            children: [
                (0, n.jsx)(l.R94, {
                    type: l.geA.DESCRIPTION,
                    className: d.subtitle,
                    children:
                        "Uploading logs can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
                }),
                (0, n.jsx)(l.R94, {
                    type: l.geA.DESCRIPTION,
                    className: d.subtitle,
                    children: "Please click Upload Logs while the Quick Switcher is open.",
                }),
                (0, n.jsx)(l.j7V, {
                    value: e,
                    onChange: t,
                    note: "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
                    children: "Frecency",
                }),
                (0, n.jsx)(l.j7V, {
                    value: a,
                    onChange: u,
                    note: "Includes all Discord Friend usernames, global names, and nicknames.",
                    children: "Friends",
                }),
                (0, n.jsx)(l.j7V, {
                    value: m,
                    onChange: x,
                    note: "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all DMs and Group DMs. Does NOT include any message data.",
                    children: "Private Channels",
                }),
                (0, n.jsx)(l.j7V, {
                    value: h,
                    onChange: p,
                    note: "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Logs.",
                    hideBorder: !0,
                    children: "Quick Switcher State",
                }),
                (0, n.jsx)(l.zxk, {
                    variant: "primary",
                    onClick: y,
                    loading: v,
                    disabled: v,
                    text: v ? "Uploading\u2026" : "Upload Logs",
                }),
                null != g &&
                    (0, n.jsx)(l.R94, {
                        type: l.geA.ERROR,
                        className: d.statusText,
                        children: g,
                    }),
                f &&
                    (0, n.jsx)(l.R94, {
                        type: l.geA.SUCCESS,
                        className: d.statusText,
                        children: "Logs uploaded successfully",
                    }),
            ],
        }),
    });
}
