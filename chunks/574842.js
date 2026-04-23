"use strict";
n.d(t, { F: () => c });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(241541),
    a = n(71393),
    o = n(967198),
    l = n(985018),
    d = n(724509);
let _ = () =>
        (0, i.jsx)(i.Fragment, {
            children: l.intl.format(l.t.ymkBti, {
                shareIcon: l.intl.string(l.t.VINpSK),
                shareIconHook: () => (0, i.jsx)(s.D, { className: d.Kk }, "icon"),
            }),
        }),
    u = () => {
        let e = (0, r.bG)([a.A, o.A], () => a.A.getGuild(o.A.getGuildId()), []),
            t = e?.name;
        return (0, i.jsx)(i.Fragment, { children: l.intl.format(l.t.oQuG3K, { serverName: t }) });
    },
    c = (e) => {
        let t =
            {
                VOICE_CONVERSATIONS: {
                    title: (0, i.jsx)("div", { className: d.lU, children: l.intl.string(l.t.w5HAll) }),
                    body: l.intl.string(l.t.Ww4hhq),
                },
                WRITING_MESSAGES: {
                    title: (0, i.jsx)("div", { className: d.nG, children: l.intl.string(l.t.nkP0ly) }),
                    body: (0, i.jsx)(u, {}),
                },
                ORGANIZE_BY_TOPIC: {
                    title: (0, i.jsx)("div", { className: d.vX, children: l.intl.string(l.t["j/5+IX"]) }),
                    body: l.intl.string(l.t.mufH2P),
                },
                WHOS_ONLINE: { title: l.intl.string(l.t.l2nSoI), body: l.intl.format(l.t.y6tbBB, {}) },
                INSTANT_INVITE: { title: l.intl.string(l.t.XcehY3), body: (0, i.jsx)(_, {}) },
                SERVER_SETTINGS: { title: l.intl.string(l.t.wc8wi5), body: l.intl.format(l.t.mIfDhc, {}) },
                DIRECT_MESSAGES: { title: l.intl.string(l.t.V07x5y), body: l.intl.format(l.t.GEBBey, {}) },
                CREATE_MORE_SERVERS: { title: l.intl.string(l.t["50FORo"]), body: l.intl.format(l.t.zVL4qa, {}) },
                CREATE_FIRST_SERVER: { title: l.intl.string(l.t.CtOX9T), body: l.intl.format(l.t.TflqTe, {}) },
                FRIENDS_LIST: { title: l.intl.string(l.t.Fnk9L4), body: l.intl.format(l.t.NTq0AZ, {}) },
            }[e.replace(/-/g, "_").toUpperCase()] ?? {};
        return { title: t.title, body: t.body, isLongText: t.isLongText ?? !1 };
    };
