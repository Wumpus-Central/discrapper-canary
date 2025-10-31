n.d(t, { Z: () => f }), n(388685);
var a = n(951288),
    i = n(120356),
    l = n.n(i),
    r = n(399606),
    s = n(481060),
    o = n(570140),
    c = n(681619),
    d = n(592125),
    u = n(787879),
    m = n(370774),
    p = n(326588),
    h = n(451429);
let x = [
        {
            key: "channelName",
            cellClassName: l()(p.cell, p.channelName),
            render(e) {
                let { channelName: t } = e;
                return (0, a.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: t,
                });
            },
        },
        {
            key: "channelId",
            cellClassName: l()(p.cell, p.channelId),
            render(e) {
                let { channelId: t } = e;
                return (0, a.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: t,
                });
            },
        },
    ],
    g = [
        {
            key: "channelName",
            cellClassName: l()(p.cell, p.channelName),
            render(e) {
                let { channelName: t } = e;
                return (0, a.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: t,
                });
            },
        },
        {
            key: "loadState",
            cellClassName: l()(p.cell, p.loadState),
            render(e) {
                let { loadState: t } = e;
                return (0, a.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: t,
                });
            },
        },
        {
            key: "channelId",
            cellClassName: l()(p.cell, p.channelId),
            render(e) {
                let { channelId: t } = e;
                return (0, a.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: t,
                });
            },
        },
    ];
function f() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, m.O4)(),
        {
            isLoading: n,
            hasLoadedEver: i,
            hasPreloaded: l,
            hasMoreToLoad: f,
            isLoadingComplete: b,
        } = (0, r.cj)([u.Z], () => ({
            isLoading: u.Z.isLoading,
            hasLoadedEver: u.Z.hasLoadedEver,
            hasPreloaded: u.Z.hasPreloaded,
            hasMoreToLoad: u.Z.hasMoreToLoad,
            isLoadingComplete: u.Z.isLoadingComplete,
        })),
        v = (0, r.e7)([u.Z], () => u.Z.currentRequestAnalyticsPayload),
        j = (0, r.cj)([u.Z], () => u.Z.getChannelInfoMap()),
        _ = (0, r.cj)([d.Z], () => {
            let e = {};
            return (
                Object.entries(j).forEach((t) => {
                    let [n] = t,
                        a = d.Z.getChannel(n);
                    e[n] = null != a ? a : null;
                }),
                e
            );
        }),
        y = (0, r.cj)([d.Z], () =>
            t.reduce((e, t) => {
                let n = d.Z.getChannel(t);
                return (e[t] = null != n ? n : null), e;
            }, {}),
        ),
        C = (0, r.e7)([u.Z], () => u.Z.getInboxMessages()),
        S = (0, r.e7)([u.Z], () => u.Z.getDevOverrides().navOnClick);
    return (0, a.jsx)("div", {
        className: h.panel,
        children: (0, a.jsxs)(s.zJl, {
            className: p.content,
            children: [
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(s.Heading, {
                            variant: "heading-lg/semibold",
                            children: "Inbox",
                        }),
                        (0, a.jsxs)("div", {
                            children: ["Inbox Message Count: ", C.length],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(s.Heading, {
                            variant: "heading-lg/semibold",
                            children: "Dev Overrides",
                        }),
                        (0, a.jsx)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                marginTop: 8,
                            },
                            children: (0, a.jsx)(s.rsf, {
                                label: "Nav On Click",
                                checked: !!S,
                                onChange: (e) => {
                                    o.Z.dispatch({
                                        type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES",
                                        navOnClick: e,
                                    });
                                },
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(s.Heading, {
                            variant: "heading-lg/semibold",
                            children: "Unreads and Badging",
                        }),
                        (0, a.jsx)(s.LZC, { size: 8 }),
                        (0, a.jsxs)("div", {
                            children: ["Unread Recent Mentions Count: ", e],
                        }),
                        (0, a.jsxs)("div", {
                            children: ["Unread Channel Count: ", t.length],
                        }),
                        (0, a.jsx)(c.Z, {
                            columns: x,
                            data: Object.entries(y).map((e) => {
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
                        (0, a.jsx)(s.Heading, {
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
                            children: ["Has Loaded Ever: ", i ? "\u2705" : "\u274C"],
                        }),
                        (0, a.jsxs)("div", {
                            children: ["Has More To Load: ", f ? "\u2705" : "\u274C"],
                        }),
                        (0, a.jsxs)("div", {
                            children: ["Is Loading Complete: ", b ? "\u2705" : "\u274C"],
                        }),
                        (0, a.jsxs)("div", {
                            children: ["Last Loading Trigger: ", null == v ? void 0 : v.loadingTrigger],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(s.Heading, {
                            variant: "heading-lg/semibold",
                            children: "Channel Info Map",
                        }),
                        (0, a.jsxs)("div", {
                            children: ["Total Channels: ", Object.keys(j).length],
                        }),
                        (0, a.jsx)(c.Z, {
                            columns: g,
                            data: Object.entries(j).map((e) => {
                                var t, n;
                                let [a, i] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (n = null == (t = _[a]) ? void 0 : t.name) ? n : "",
                                    loadState: i.loadState,
                                };
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
