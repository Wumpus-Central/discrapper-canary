a.d(t, { Z: () => b }), a(388685);
var n = a(951288),
    r = a(120356),
    l = a.n(r),
    i = a(399606),
    s = a(481060),
    o = a(570140),
    c = a(681619),
    d = a(592125),
    u = a(787879),
    m = a(370774),
    x = a(326588),
    h = a(451429);
let p = [
        {
            key: "channelName",
            cellClassName: l()(x.cell, x.channelName),
            render(e) {
                let { channelName: t } = e;
                return (0, n.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: t,
                });
            },
        },
        {
            key: "channelId",
            cellClassName: l()(x.cell, x.channelId),
            render(e) {
                let { channelId: t } = e;
                return (0, n.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: t,
                });
            },
        },
    ],
    v = [
        {
            key: "channelName",
            cellClassName: l()(x.cell, x.channelName),
            render(e) {
                let { channelName: t } = e;
                return (0, n.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: t,
                });
            },
        },
        {
            key: "loadState",
            cellClassName: l()(x.cell, x.loadState),
            render(e) {
                let { loadState: t } = e;
                return (0, n.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: t,
                });
            },
        },
        {
            key: "channelId",
            cellClassName: l()(x.cell, x.channelId),
            render(e) {
                let { channelId: t } = e;
                return (0, n.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: t,
                });
            },
        },
    ];
function b() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, m.O4)(),
        {
            isLoading: a,
            hasLoadedEver: r,
            hasPreloaded: l,
            hasMoreToLoad: b,
            isLoadingComplete: f,
        } = (0, i.cj)([u.Z], () => ({
            isLoading: u.Z.isLoading,
            hasLoadedEver: u.Z.hasLoadedEver,
            hasPreloaded: u.Z.hasPreloaded,
            hasMoreToLoad: u.Z.hasMoreToLoad,
            isLoadingComplete: u.Z.isLoadingComplete,
        })),
        j = (0, i.e7)([u.Z], () => u.Z.currentRequestAnalyticsPayload),
        g = (0, i.cj)([u.Z], () => u.Z.getChannelInfoMap()),
        _ = (0, i.cj)([d.Z], () => {
            let e = {};
            return (
                Object.entries(g).forEach((t) => {
                    let [a] = t,
                        n = d.Z.getChannel(a);
                    e[a] = null != n ? n : null;
                }),
                e
            );
        }),
        y = (0, i.cj)([d.Z], () =>
            t.reduce((e, t) => {
                let a = d.Z.getChannel(t);
                return (e[t] = null != a ? a : null), e;
            }, {}),
        ),
        C = (0, i.e7)([u.Z], () => u.Z.getInboxMessages()),
        N = (0, i.e7)([u.Z], () => u.Z.getDevOverrides().navOnClick);
    return (0, n.jsx)("div", {
        className: h.panel,
        children: (0, n.jsxs)(s.zJl, {
            className: x.content,
            children: [
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(s.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Inbox",
                        }),
                        (0, n.jsxs)("div", {
                            children: ["Inbox Message Count: ", C.length],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(s.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Dev Overrides",
                        }),
                        (0, n.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginTop: 8,
                            },
                            children: [
                                (0, n.jsx)("div", { children: "Nav On Click" }),
                                (0, n.jsx)(s.XZJ, {
                                    value: N,
                                    onChange: (e) => {
                                        o.Z.dispatch({
                                            type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES",
                                            navOnClick: e.target.checked,
                                        });
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(s.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Unreads and Badging",
                        }),
                        (0, n.jsx)(s.LZC, { size: 8 }),
                        (0, n.jsxs)("div", {
                            children: ["Unread Recent Mentions Count: ", e],
                        }),
                        (0, n.jsxs)("div", {
                            children: ["Unread Channel Count: ", t.length],
                        }),
                        (0, n.jsx)(c.Z, {
                            columns: p,
                            data: Object.entries(y).map((e) => {
                                var t;
                                let [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = null == n ? void 0 : n.name) ? t : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(s.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Store State",
                        }),
                        (0, n.jsxs)("div", {
                            children: ["Is Loading: ", a ? "\u2705" : "\u274C"],
                        }),
                        (0, n.jsxs)("div", {
                            children: ["Has Preloaded: ", l ? "\u2705" : "\u274C"],
                        }),
                        (0, n.jsxs)("div", {
                            children: ["Has Loaded Ever: ", r ? "\u2705" : "\u274C"],
                        }),
                        (0, n.jsxs)("div", {
                            children: ["Has More To Load: ", b ? "\u2705" : "\u274C"],
                        }),
                        (0, n.jsxs)("div", {
                            children: ["Is Loading Complete: ", f ? "\u2705" : "\u274C"],
                        }),
                        (0, n.jsxs)("div", {
                            children: ["Last Loading Trigger: ", null == j ? void 0 : j.loadingTrigger],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(s.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Channel Info Map",
                        }),
                        (0, n.jsxs)("div", {
                            children: ["Total Channels: ", Object.keys(g).length],
                        }),
                        (0, n.jsx)(c.Z, {
                            columns: v,
                            data: Object.entries(g).map((e) => {
                                var t, a;
                                let [n, r] = e;
                                return {
                                    key: n,
                                    channelId: n,
                                    channelName: null != (a = null == (t = _[n]) ? void 0 : t.name) ? a : "",
                                    loadState: r.loadState,
                                };
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
