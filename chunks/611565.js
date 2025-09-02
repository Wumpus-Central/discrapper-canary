n.d(t, { Z: () => b }), n(388685);
var a = n(951288),
    r = n(120356),
    l = n.n(r),
    i = n(399606),
    s = n(755721),
    o = n(481060),
    c = n(570140),
    d = n(681619),
    u = n(592125),
    m = n(787879),
    x = n(370774),
    h = n(326588),
    p = n(451429);
let f = [
        {
            key: "channelName",
            cellClassName: l()(h.cell, h.channelName),
            render(e) {
                let { channelName: t } = e;
                return (0, a.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: t,
                });
            },
        },
        {
            key: "channelId",
            cellClassName: l()(h.cell, h.channelId),
            render(e) {
                let { channelId: t } = e;
                return (0, a.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: t,
                });
            },
        },
    ],
    v = [
        {
            key: "channelName",
            cellClassName: l()(h.cell, h.channelName),
            render(e) {
                let { channelName: t } = e;
                return (0, a.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: t,
                });
            },
        },
        {
            key: "loadState",
            cellClassName: l()(h.cell, h.loadState),
            render(e) {
                let { loadState: t } = e;
                return (0, a.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: t,
                });
            },
        },
        {
            key: "channelId",
            cellClassName: l()(h.cell, h.channelId),
            render(e) {
                let { channelId: t } = e;
                return (0, a.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: t,
                });
            },
        },
    ];
function b() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, x.O4)(),
        {
            isLoading: n,
            hasLoadedEver: r,
            hasPreloaded: l,
            hasMoreToLoad: b,
            isLoadingComplete: j,
        } = (0, i.cj)([m.Z], () => ({
            isLoading: m.Z.isLoading,
            hasLoadedEver: m.Z.hasLoadedEver,
            hasPreloaded: m.Z.hasPreloaded,
            hasMoreToLoad: m.Z.hasMoreToLoad,
            isLoadingComplete: m.Z.isLoadingComplete,
        })),
        g = (0, i.e7)([m.Z], () => m.Z.currentRequestAnalyticsPayload),
        _ = (0, i.cj)([m.Z], () => m.Z.getChannelInfoMap()),
        y = (0, i.cj)([u.Z], () => {
            let e = {};
            return (
                Object.entries(_).forEach((t) => {
                    let [n] = t,
                        a = u.Z.getChannel(n);
                    e[n] = null != a ? a : null;
                }),
                e
            );
        }),
        C = (0, i.cj)([u.Z], () =>
            t.reduce((e, t) => {
                let n = u.Z.getChannel(t);
                return (e[t] = null != n ? n : null), e;
            }, {}),
        ),
        N = (0, i.e7)([m.Z], () => m.Z.getInboxMessages()),
        E = (0, i.e7)([m.Z], () => m.Z.getDevOverrides().navOnClick);
    return (0, a.jsx)("div", {
        className: p.panel,
        children: (0, a.jsxs)(o.zJl, {
            className: h.content,
            children: [
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(o.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Inbox",
                        }),
                        (0, a.jsxs)("div", {
                            children: ["Inbox Message Count: ", N.length],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(o.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Dev Overrides",
                        }),
                        (0, a.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginTop: 8,
                            },
                            children: [
                                (0, a.jsx)("div", { children: "Nav On Click" }),
                                (0, a.jsx)(s.$q, {
                                    value: E,
                                    onChange: (e) => {
                                        c.Z.dispatch({
                                            type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES",
                                            navOnClick: e.target.checked,
                                        });
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(o.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Unreads and Badging",
                        }),
                        (0, a.jsx)(o.LZC, { size: 8 }),
                        (0, a.jsxs)("div", {
                            children: ["Unread Recent Mentions Count: ", e],
                        }),
                        (0, a.jsxs)("div", {
                            children: ["Unread Channel Count: ", t.length],
                        }),
                        (0, a.jsx)(d.Z, {
                            columns: f,
                            data: Object.entries(C).map((e) => {
                                var t;
                                let [n, a] = e;
                                return {
                                    key: n,
                                    channelId: n,
                                    channelName: null != (t = null == a ? void 0 : a.name) ? t : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(o.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Store State",
                        }),
                        (0, a.jsxs)("div", {
                            children: ["Is Loading: ", n ? "\u2705" : "\u274C"],
                        }),
                        (0, a.jsxs)("div", {
                            children: ["Has Preloaded: ", l ? "\u2705" : "\u274C"],
                        }),
                        (0, a.jsxs)("div", {
                            children: ["Has Loaded Ever: ", r ? "\u2705" : "\u274C"],
                        }),
                        (0, a.jsxs)("div", {
                            children: ["Has More To Load: ", b ? "\u2705" : "\u274C"],
                        }),
                        (0, a.jsxs)("div", {
                            children: ["Is Loading Complete: ", j ? "\u2705" : "\u274C"],
                        }),
                        (0, a.jsxs)("div", {
                            children: ["Last Loading Trigger: ", null == g ? void 0 : g.loadingTrigger],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(o.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Channel Info Map",
                        }),
                        (0, a.jsxs)("div", {
                            children: ["Total Channels: ", Object.keys(_).length],
                        }),
                        (0, a.jsx)(d.Z, {
                            columns: v,
                            data: Object.entries(_).map((e) => {
                                var t, n;
                                let [a, r] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (n = null == (t = y[a]) ? void 0 : t.name) ? n : "",
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
