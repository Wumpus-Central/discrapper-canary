n.d(t, { k: () => f }), n(704826), n(35282);
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(430824),
    s = n(914010),
    l = n(388032),
    c = n(502764);
let u = () =>
        (0, r.jsx)(r.Fragment, {
            children: l.intl.format(l.t.ymkBtr, {
                shareIcon: l.intl.string(l.t.VINpSE),
                shareIconHook: () => (0, r.jsx)(o.ejJ, { className: c.icon }, "icon"),
            }),
        }),
    d = () => {
        let e = (0, i.e7)([a.Z, s.Z], () => a.Z.getGuild(s.Z.getGuildId()), []),
            t = null == e ? void 0 : e.name;
        return (0, r.jsx)(r.Fragment, { children: l.intl.format(l.t.oQuG3N, { serverName: t }) });
    },
    f = (e) => {
        var t, n;
        let i =
            null !=
            (t = {
                VOICE_CONVERSATIONS: {
                    title: (0, r.jsx)("div", {
                        className: c.voiceChannelsTitle,
                        children: l.intl.string(l.t.w5HAlp),
                    }),
                    body: l.intl.string(l.t.Ww4hho),
                },
                WRITING_MESSAGES: {
                    title: (0, r.jsx)("div", {
                        className: c.writingMessagesTitle,
                        children: l.intl.string(l.t.nkP0l5),
                    }),
                    body: (0, r.jsx)(d, {}),
                },
                ORGANIZE_BY_TOPIC: {
                    title: (0, r.jsx)("div", {
                        className: c.channelsTitle,
                        children: l.intl.string(l.t["j/5+IS"]),
                    }),
                    body: l.intl.string(l.t.mufH2N),
                },
                WHOS_ONLINE: {
                    title: l.intl.string(l.t.l2nSoK),
                    body: l.intl.format(l.t.y6tbBA, {}),
                },
                INSTANT_INVITE: {
                    title: l.intl.string(l.t.XcehY2),
                    body: (0, r.jsx)(u, {}),
                },
                SERVER_SETTINGS: {
                    title: l.intl.string(l.t.wc8wi4),
                    body: l.intl.format(l.t.mIfDhY, {}),
                },
                DIRECT_MESSAGES: {
                    title: l.intl.string(l.t["V07x5+"]),
                    body: l.intl.format(l.t.GEBBe3, {}),
                },
                CREATE_MORE_SERVERS: {
                    title: l.intl.string(l.t["50FORk"]),
                    body: l.intl.format(l.t.zVL4qa, {}),
                },
                CREATE_FIRST_SERVER: {
                    title: l.intl.string(l.t.CtOX9f),
                    body: l.intl.format(l.t.TflqTU, {}),
                },
                FRIENDS_LIST: {
                    title: l.intl.string(l.t.Fnk9Ly),
                    body: l.intl.format(l.t.NTq0AQ, {}),
                },
            }[e.replace(/-/g, "_").toUpperCase()])
                ? t
                : {};
        return {
            title: i.title,
            body: i.body,
            isLongText: null != (n = i.isLongText) && n,
        };
    };
