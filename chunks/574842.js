"use strict";
n.d(t, { F: () => h });
var l = n(627968);
n(64700);
var i = n(17928),
    s = n(241541),
    a = n(71393),
    r = n(967198),
    o = n(985018),
    c = n(724509);
let u = () =>
        (0, l.jsx)(l.Fragment, {
            children: o.intl.format(o.t.ymkBti, {
                shareIcon: o.intl.string(o.t.VINpSK),
                shareIconHook: () => (0, l.jsx)(s.D, { className: c.Kk }, "icon"),
            }),
        }),
    d = () => {
        let e = (0, i.bG)([a.A, r.A], () => a.A.getGuild(r.A.getGuildId()), []),
            t = e?.name;
        return (0, l.jsx)(l.Fragment, { children: o.intl.format(o.t.oQuG3K, { serverName: t }) });
    },
    h = (e) => {
        let t =
            {
                VOICE_CONVERSATIONS: {
                    title: (0, l.jsx)("div", { className: c.lU, children: o.intl.string(o.t.w5HAll) }),
                    body: o.intl.string(o.t.Ww4hhq),
                },
                WRITING_MESSAGES: {
                    title: (0, l.jsx)("div", { className: c.nG, children: o.intl.string(o.t.nkP0ly) }),
                    body: (0, l.jsx)(d, {}),
                },
                ORGANIZE_BY_TOPIC: {
                    title: (0, l.jsx)("div", { className: c.vX, children: o.intl.string(o.t["j/5+IX"]) }),
                    body: o.intl.string(o.t.mufH2P),
                },
                WHOS_ONLINE: { title: o.intl.string(o.t.l2nSoI), body: o.intl.format(o.t.y6tbBB, {}) },
                INSTANT_INVITE: { title: o.intl.string(o.t.XcehY3), body: (0, l.jsx)(u, {}) },
                SERVER_SETTINGS: { title: o.intl.string(o.t.wc8wi5), body: o.intl.format(o.t.mIfDhc, {}) },
                DIRECT_MESSAGES: { title: o.intl.string(o.t.V07x5y), body: o.intl.format(o.t.GEBBey, {}) },
                CREATE_MORE_SERVERS: { title: o.intl.string(o.t["50FORo"]), body: o.intl.format(o.t.zVL4qa, {}) },
                CREATE_FIRST_SERVER: { title: o.intl.string(o.t.CtOX9T), body: o.intl.format(o.t.TflqTe, {}) },
                FRIENDS_LIST: { title: o.intl.string(o.t.Fnk9L4), body: o.intl.format(o.t.NTq0AZ, {}) },
            }[e.replace(/-/g, "_").toUpperCase()] ?? {};
        return { title: t.title, body: t.body, isLongText: t.isLongText ?? !1 };
    };
