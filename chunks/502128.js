a.d(t, { A: () => C });
var n = a(627968),
    l = a(503698),
    i = a.n(l),
    s = a(417597),
    r = a(834730),
    o = a(573613),
    d = a(534514),
    c = a(243721),
    u = a(696986),
    m = a(73153),
    h = a(47167),
    p = a(303054),
    x = a(734057),
    g = a(994500),
    v = a(287809),
    b = a(320697),
    _ = a(394953),
    f = a(732421),
    j = a(505206);
let A = [
        {
            key: "channelName",
            cellClassName: i()(f.Hn, f.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, n.jsx)(r.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: i()(f.Hn, f.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, n.jsx)(r.E, { variant: "text-md/normal", children: t });
            },
        },
    ],
    y = [
        {
            key: "channelName",
            cellClassName: i()(f.Hn, f.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, n.jsx)(r.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: i()(f.Hn, f.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, n.jsx)(r.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: i()(f.Hn, f.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, n.jsx)(r.E, { variant: "text-md/normal", children: t });
            },
        },
    ];
function C() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, _.U4)(),
        {
            isLoading: a,
            hasLoadedEver: l,
            hasPreloaded: i,
            hasMoreToLoad: r,
            isLoadingComplete: C,
        } = (0, s.cf)([b.A], () => ({
            isLoading: b.A.isLoading,
            hasLoadedEver: b.A.hasLoadedEver,
            hasPreloaded: b.A.hasPreloaded,
            hasMoreToLoad: b.A.hasMoreToLoad,
            isLoadingComplete: b.A.isLoadingComplete,
        })),
        E = (0, s.bG)([b.A], () => b.A.currentRequestAnalyticsPayload),
        S = (0, s.cf)([b.A], () => b.A.getChannelInfoMap()),
        N = (0, s.cf)([x.A], () => {
            let e = {};
            return (
                Object.entries(S).forEach((t) => {
                    let [a] = t,
                        n = x.A.getChannel(a);
                    e[a] = n ?? null;
                }),
                e
            );
        }),
        k = (0, s.cf)([x.A], () =>
            t.reduce((e, t) => {
                let a = x.A.getChannel(t);
                return (e[t] = a ?? null), e;
            }, {}),
        ),
        I = (0, s.bG)([b.A], () => b.A.getInboxMessages()),
        D = (0, s.bG)([b.A], () => b.A.getDevOverrides().navOnClick);
    return (0, n.jsx)("div", {
        className: j.nd,
        children: (0, n.jsxs)(o.Ip, {
            className: f.Qs,
            children: [
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(d.D, { variant: "heading-lg/semibold", children: "Inbox" }),
                        (0, n.jsxs)("div", { children: ["Inbox Message Count: ", I.length] }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(d.D, { variant: "heading-lg/semibold", children: "Dev Overrides" }),
                        (0, n.jsx)("div", {
                            style: { display: "flex", alignItems: "center", marginTop: 8 },
                            children: (0, n.jsx)(c.d, {
                                label: "Nav On Click",
                                checked: !!D,
                                onChange: (e) => {
                                    m.h.dispatch({ type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES", navOnClick: e });
                                },
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(d.D, { variant: "heading-lg/semibold", children: "Unreads and Badging" }),
                        (0, n.jsx)(u.h, { size: 8 }),
                        (0, n.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, n.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, n.jsx)(p.A, {
                            columns: A,
                            data: Object.entries(k).map((e) => {
                                let [t, a] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != a ? (0, h.m1)(a, v.default, g.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(d.D, { variant: "heading-lg/semibold", children: "Store State" }),
                        (0, n.jsxs)("div", { children: ["Is Loading: ", a ? "✅" : "❌"] }),
                        (0, n.jsxs)("div", { children: ["Has Preloaded: ", i ? "✅" : "❌"] }),
                        (0, n.jsxs)("div", { children: ["Has Loaded Ever: ", l ? "✅" : "❌"] }),
                        (0, n.jsxs)("div", { children: ["Has More To Load: ", r ? "✅" : "❌"] }),
                        (0, n.jsxs)("div", { children: ["Is Loading Complete: ", C ? "✅" : "❌"] }),
                        (0, n.jsxs)("div", { children: ["Last Loading Trigger: ", E?.loadingTrigger] }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(d.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, n.jsxs)("div", { children: ["Total Channels: ", Object.keys(S).length] }),
                        (0, n.jsx)(p.A, {
                            columns: y,
                            data: Object.entries(S).map((e) => {
                                let t,
                                    [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = N[a]) ? (0, h.m1)(t, v.default, g.A) : "",
                                    loadState: n.loadState,
                                };
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
