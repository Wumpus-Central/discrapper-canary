n.d(t, {
    k: function () {
        return h;
    }
}),
    n(757143);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(430824),
    s = n(914010),
    o = n(388032),
    c = n(954396);
let d = () =>
        (0, i.jsx)(i.Fragment, {
            children: o.intl.format(o.t.ymkBtr, {
                shareIcon: o.intl.string(o.t.VINpSE),
                shareIconHook: () => (0, i.jsx)(r.GroupPlusIcon, { className: c.icon }, 'icon')
            })
        }),
    u = () => {
        let e = (0, l.e7)([a.Z, s.Z], () => a.Z.getGuild(s.Z.getGuildId()), []),
            t = null == e ? void 0 : e.name;
        return (0, i.jsx)(i.Fragment, { children: o.intl.format(o.t.oQuG3N, { serverName: t }) });
    },
    h = (e) => {
        var t, n;
        let l = {
                VOICE_CONVERSATIONS: {
                    title: (0, i.jsx)('div', {
                        className: c.voiceChannelsTitle,
                        children: o.intl.string(o.t.w5HAlp)
                    }),
                    body: o.intl.string(o.t.Ww4hho)
                },
                WRITING_MESSAGES: {
                    title: (0, i.jsx)('div', {
                        className: c.writingMessagesTitle,
                        children: o.intl.string(o.t.nkP0l5)
                    }),
                    body: (0, i.jsx)(u, {})
                },
                ORGANIZE_BY_TOPIC: {
                    title: (0, i.jsx)('div', {
                        className: c.channelsTitle,
                        children: o.intl.string(o.t['j/5+IS'])
                    }),
                    body: o.intl.string(o.t.mufH2N)
                },
                WHOS_ONLINE: {
                    title: o.intl.string(o.t.l2nSoK),
                    body: o.intl.format(o.t.y6tbBA, {})
                },
                INSTANT_INVITE: {
                    title: o.intl.string(o.t.XcehY2),
                    body: (0, i.jsx)(d, {})
                },
                SERVER_SETTINGS: {
                    title: o.intl.string(o.t.wc8wi4),
                    body: o.intl.format(o.t.mIfDhY, {})
                },
                DIRECT_MESSAGES: {
                    title: o.intl.string(o.t['V07x5+']),
                    body: o.intl.format(o.t.GEBBe3, {})
                },
                CREATE_MORE_SERVERS: {
                    title: o.intl.string(o.t['50FORk']),
                    body: o.intl.format(o.t.zVL4qa, {})
                },
                CREATE_FIRST_SERVER: {
                    title: o.intl.string(o.t.CtOX9f),
                    body: o.intl.format(o.t.TflqTU, {})
                },
                FRIENDS_LIST: {
                    title: o.intl.string(o.t.Fnk9Ly),
                    body: o.intl.format(o.t.NTq0AQ, {})
                }
            },
            r = null !== (t = l[e.replace(/-/g, '_').toUpperCase()]) && void 0 !== t ? t : {};
        return {
            title: r.title,
            body: r.body,
            isLongText: null !== (n = r.isLongText) && void 0 !== n && n
        };
    };
