n.d(t, { k: () => p }), n(757143), n(301563);
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(430824),
    a = n(914010),
    s = n(388032),
    c = n(502764);
let u = () =>
        (0, r.jsx)(r.Fragment, {
            children: s.NW.format(s.t.ymkBtr, {
                shareIcon: s.NW.string(s.t.VINpSE),
                shareIconHook: () => (0, r.jsx)(l.ejJ, { className: c.icon }, 'icon')
            })
        }),
    d = () => {
        let e = (0, i.e7)([o.Z, a.Z], () => o.Z.getGuild(a.Z.getGuildId()), []),
            t = null == e ? void 0 : e.name;
        return (0, r.jsx)(r.Fragment, { children: s.NW.format(s.t.oQuG3N, { serverName: t }) });
    },
    p = (e) => {
        var t, n;
        let i =
            null !=
            (t = {
                VOICE_CONVERSATIONS: {
                    title: (0, r.jsx)('div', {
                        className: c.voiceChannelsTitle,
                        children: s.NW.string(s.t.w5HAlp)
                    }),
                    body: s.NW.string(s.t.Ww4hho)
                },
                WRITING_MESSAGES: {
                    title: (0, r.jsx)('div', {
                        className: c.writingMessagesTitle,
                        children: s.NW.string(s.t.nkP0l5)
                    }),
                    body: (0, r.jsx)(d, {})
                },
                ORGANIZE_BY_TOPIC: {
                    title: (0, r.jsx)('div', {
                        className: c.channelsTitle,
                        children: s.NW.string(s.t['j/5+IS'])
                    }),
                    body: s.NW.string(s.t.mufH2N)
                },
                WHOS_ONLINE: {
                    title: s.NW.string(s.t.l2nSoK),
                    body: s.NW.format(s.t.y6tbBA, {})
                },
                INSTANT_INVITE: {
                    title: s.NW.string(s.t.XcehY2),
                    body: (0, r.jsx)(u, {})
                },
                SERVER_SETTINGS: {
                    title: s.NW.string(s.t.wc8wi4),
                    body: s.NW.format(s.t.mIfDhY, {})
                },
                DIRECT_MESSAGES: {
                    title: s.NW.string(s.t['V07x5+']),
                    body: s.NW.format(s.t.GEBBe3, {})
                },
                CREATE_MORE_SERVERS: {
                    title: s.NW.string(s.t['50FORk']),
                    body: s.NW.format(s.t.zVL4qa, {})
                },
                CREATE_FIRST_SERVER: {
                    title: s.NW.string(s.t.CtOX9f),
                    body: s.NW.format(s.t.TflqTU, {})
                },
                FRIENDS_LIST: {
                    title: s.NW.string(s.t.Fnk9Ly),
                    body: s.NW.format(s.t.NTq0AQ, {})
                }
            }[e.replace(/-/g, '_').toUpperCase()])
                ? t
                : {};
        return {
            title: i.title,
            body: i.body,
            isLongText: null != (n = i.isLongText) && n
        };
    };
