n.d(t, { k: () => p }), n(704826), n(35282);
var i = n(951288);
n(647438);
var r = n(442837),
    l = n(481060),
    a = n(430824),
    o = n(914010),
    s = n(388032),
    c = n(186903);
let u = () =>
        (0, i.jsx)(i.Fragment, {
            children: s.intl.format(s.t.ymkBti, {
                shareIcon: s.intl.string(s.t.VINpSK),
                shareIconHook: () => (0, i.jsx)(l.ejJ, { className: c.icon }, "icon"),
            }),
        }),
    d = () => {
        let e = (0, r.e7)([a.Z, o.Z], () => a.Z.getGuild(o.Z.getGuildId()), []),
            t = null == e ? void 0 : e.name;
        return (0, i.jsx)(i.Fragment, { children: s.intl.format(s.t.oQuG3K, { serverName: t }) });
    },
    p = (e) => {
        var t, n;
        let r =
            null !=
            (t = {
                VOICE_CONVERSATIONS: {
                    title: (0, i.jsx)("div", {
                        className: c.voiceChannelsTitle,
                        children: s.intl.string(s.t.w5HAll),
                    }),
                    body: s.intl.string(s.t.Ww4hhq),
                },
                WRITING_MESSAGES: {
                    title: (0, i.jsx)("div", {
                        className: c.writingMessagesTitle,
                        children: s.intl.string(s.t.nkP0ly),
                    }),
                    body: (0, i.jsx)(d, {}),
                },
                ORGANIZE_BY_TOPIC: {
                    title: (0, i.jsx)("div", {
                        className: c.channelsTitle,
                        children: s.intl.string(s.t["j/5+IX"]),
                    }),
                    body: s.intl.string(s.t.mufH2P),
                },
                WHOS_ONLINE: {
                    title: s.intl.string(s.t.l2nSoI),
                    body: s.intl.format(s.t.y6tbBB, {}),
                },
                INSTANT_INVITE: {
                    title: s.intl.string(s.t.XcehY3),
                    body: (0, i.jsx)(u, {}),
                },
                SERVER_SETTINGS: {
                    title: s.intl.string(s.t.wc8wi5),
                    body: s.intl.format(s.t.mIfDhc, {}),
                },
                DIRECT_MESSAGES: {
                    title: s.intl.string(s.t.V07x5y),
                    body: s.intl.format(s.t.GEBBey, {}),
                },
                CREATE_MORE_SERVERS: {
                    title: s.intl.string(s.t["50FORo"]),
                    body: s.intl.format(s.t.zVL4qa, {}),
                },
                CREATE_FIRST_SERVER: {
                    title: s.intl.string(s.t.CtOX9T),
                    body: s.intl.format(s.t.TflqTe, {}),
                },
                FRIENDS_LIST: {
                    title: s.intl.string(s.t.Fnk9L4),
                    body: s.intl.format(s.t.NTq0AZ, {}),
                },
            }[e.replace(/-/g, "_").toUpperCase()])
                ? t
                : {};
        return {
            title: r.title,
            body: r.body,
            isLongText: null != (n = r.isLongText) && n,
        };
    };
