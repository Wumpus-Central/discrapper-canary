n.d(t, { A: () => _ });
var a = n(627968),
    s = n(503698),
    i = n.n(s),
    l = n(417597),
    r = n(397927),
    o = n(73153),
    d = n(303054),
    c = n(734057),
    u = n(320697),
    m = n(394953),
    h = n(187698),
    x = n(661251);
let p = [
        {
            key: "channelName",
            cellClassName: i()(h.Hn, h.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, a.jsx)(r.Text, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: i()(h.Hn, h.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, a.jsx)(r.Text, { variant: "text-md/normal", children: t });
            },
        },
    ],
    g = [
        {
            key: "channelName",
            cellClassName: i()(h.Hn, h.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, a.jsx)(r.Text, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: i()(h.Hn, h.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, a.jsx)(r.Text, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: i()(h.Hn, h.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, a.jsx)(r.Text, { variant: "text-md/normal", children: t });
            },
        },
    ];
function _() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, m.U4)(),
        {
            isLoading: n,
            hasLoadedEver: s,
            hasPreloaded: i,
            hasMoreToLoad: _,
            isLoadingComplete: f,
        } = (0, l.cf)([u.A], () => ({
            isLoading: u.A.isLoading,
            hasLoadedEver: u.A.hasLoadedEver,
            hasPreloaded: u.A.hasPreloaded,
            hasMoreToLoad: u.A.hasMoreToLoad,
            isLoadingComplete: u.A.isLoadingComplete,
        })),
        v = (0, l.bG)([u.A], () => u.A.currentRequestAnalyticsPayload),
        b = (0, l.cf)([u.A], () => u.A.getChannelInfoMap()),
        j = (0, l.cf)([c.A], () => {
            let e = {};
            return (
                Object.entries(b).forEach((t) => {
                    let [n] = t,
                        a = c.A.getChannel(n);
                    e[n] = a ?? null;
                }),
                e
            );
        }),
        A = (0, l.cf)([c.A], () =>
            t.reduce((e, t) => {
                let n = c.A.getChannel(t);
                return (e[t] = n ?? null), e;
            }, {}),
        ),
        C = (0, l.bG)([u.A], () => u.A.getInboxMessages()),
        S = (0, l.bG)([u.A], () => u.A.getDevOverrides().navOnClick);
    return (0, a.jsx)("div", {
        className: x.nd,
        children: (0, a.jsxs)(r.IpV, {
            className: h.Qs,
            children: [
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(r.Heading, { variant: "heading-lg/semibold", children: "Inbox" }),
                        (0, a.jsxs)("div", { children: ["Inbox Message Count: ", C.length] }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(r.Heading, { variant: "heading-lg/semibold", children: "Dev Overrides" }),
                        (0, a.jsx)("div", {
                            style: { display: "flex", alignItems: "center", marginTop: 8 },
                            children: (0, a.jsx)(r.dOG, {
                                label: "Nav On Click",
                                checked: !!S,
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
                        (0, a.jsx)(d.A, {
                            columns: p,
                            data: Object.entries(A).map((e) => {
                                let [t, n] = e;
                                return { key: t, channelId: t, channelName: n?.name ?? "" };
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(r.Heading, { variant: "heading-lg/semibold", children: "Store State" }),
                        (0, a.jsxs)("div", { children: ["Is Loading: ", n ? "✅" : "❌"] }),
                        (0, a.jsxs)("div", { children: ["Has Preloaded: ", i ? "✅" : "❌"] }),
                        (0, a.jsxs)("div", { children: ["Has Loaded Ever: ", s ? "✅" : "❌"] }),
                        (0, a.jsxs)("div", { children: ["Has More To Load: ", _ ? "✅" : "❌"] }),
                        (0, a.jsxs)("div", { children: ["Is Loading Complete: ", f ? "✅" : "❌"] }),
                        (0, a.jsxs)("div", { children: ["Last Loading Trigger: ", v?.loadingTrigger] }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(r.Heading, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, a.jsxs)("div", { children: ["Total Channels: ", Object.keys(b).length] }),
                        (0, a.jsx)(d.A, {
                            columns: g,
                            data: Object.entries(b).map((e) => {
                                let [t, n] = e;
                                return { key: t, channelId: t, channelName: j[t]?.name ?? "", loadState: n.loadState };
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
