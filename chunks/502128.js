n.d(t, { A: () => b });
var a = n(627968),
    i = n(503698),
    s = n.n(i),
    l = n(417597),
    r = n(397927),
    o = n(73153),
    d = n(47167),
    c = n(303054),
    u = n(734057),
    m = n(994500),
    h = n(287809),
    x = n(320697),
    p = n(394953),
    g = n(891860),
    f = n(793877);
let v = [
        {
            key: "channelName",
            cellClassName: s()(g.Hn, g.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, a.jsx)(r.Text, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: s()(g.Hn, g.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, a.jsx)(r.Text, { variant: "text-md/normal", children: t });
            },
        },
    ],
    _ = [
        {
            key: "channelName",
            cellClassName: s()(g.Hn, g.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, a.jsx)(r.Text, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: s()(g.Hn, g.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, a.jsx)(r.Text, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: s()(g.Hn, g.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, a.jsx)(r.Text, { variant: "text-md/normal", children: t });
            },
        },
    ];
function b() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, p.U4)(),
        {
            isLoading: n,
            hasLoadedEver: i,
            hasPreloaded: s,
            hasMoreToLoad: b,
            isLoadingComplete: j,
        } = (0, l.cf)([x.A], () => ({
            isLoading: x.A.isLoading,
            hasLoadedEver: x.A.hasLoadedEver,
            hasPreloaded: x.A.hasPreloaded,
            hasMoreToLoad: x.A.hasMoreToLoad,
            isLoadingComplete: x.A.isLoadingComplete,
        })),
        A = (0, l.bG)([x.A], () => x.A.currentRequestAnalyticsPayload),
        C = (0, l.cf)([x.A], () => x.A.getChannelInfoMap()),
        y = (0, l.cf)([u.A], () => {
            let e = {};
            return (
                Object.entries(C).forEach((t) => {
                    let [n] = t,
                        a = u.A.getChannel(n);
                    e[n] = a ?? null;
                }),
                e
            );
        }),
        S = (0, l.cf)([u.A], () =>
            t.reduce((e, t) => {
                let n = u.A.getChannel(t);
                return (e[t] = n ?? null), e;
            }, {}),
        ),
        E = (0, l.bG)([x.A], () => x.A.getInboxMessages()),
        T = (0, l.bG)([x.A], () => x.A.getDevOverrides().navOnClick);
    return (0, a.jsx)("div", {
        className: f.nd,
        children: (0, a.jsxs)(r.IpV, {
            className: g.Qs,
            children: [
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(r.Heading, { variant: "heading-lg/semibold", children: "Inbox" }),
                        (0, a.jsxs)("div", { children: ["Inbox Message Count: ", E.length] }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(r.Heading, { variant: "heading-lg/semibold", children: "Dev Overrides" }),
                        (0, a.jsx)("div", {
                            style: { display: "flex", alignItems: "center", marginTop: 8 },
                            children: (0, a.jsx)(r.dOG, {
                                label: "Nav On Click",
                                checked: !!T,
                                onChange: (e) => {
                                    o.h.dispatch({ type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES", navOnClick: e });
                                },
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(r.Heading, { variant: "heading-lg/semibold", children: "Unreads and Badging" }),
                        (0, a.jsx)(r.hKd, { size: 8 }),
                        (0, a.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, a.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, a.jsx)(c.A, {
                            columns: v,
                            data: Object.entries(S).map((e) => {
                                let [t, n] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != n ? (0, d.m1)(n, h.default, m.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(r.Heading, { variant: "heading-lg/semibold", children: "Store State" }),
                        (0, a.jsxs)("div", { children: ["Is Loading: ", n ? "✅" : "❌"] }),
                        (0, a.jsxs)("div", { children: ["Has Preloaded: ", s ? "✅" : "❌"] }),
                        (0, a.jsxs)("div", { children: ["Has Loaded Ever: ", i ? "✅" : "❌"] }),
                        (0, a.jsxs)("div", { children: ["Has More To Load: ", b ? "✅" : "❌"] }),
                        (0, a.jsxs)("div", { children: ["Is Loading Complete: ", j ? "✅" : "❌"] }),
                        (0, a.jsxs)("div", { children: ["Last Loading Trigger: ", A?.loadingTrigger] }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(r.Heading, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, a.jsxs)("div", { children: ["Total Channels: ", Object.keys(C).length] }),
                        (0, a.jsx)(c.A, {
                            columns: _,
                            data: Object.entries(C).map((e) => {
                                let t,
                                    [n, a] = e;
                                return {
                                    key: n,
                                    channelId: n,
                                    channelName: null != (t = y[n]) ? (0, d.m1)(t, h.default, m.A) : "",
                                    loadState: a.loadState,
                                };
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
