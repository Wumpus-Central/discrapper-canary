var i = a(855986),
    l = a(945810),
    d = a(50258);
let t = (0, l.mj)({
        name: "2026-10-pinot-admin",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    u = (0, l.mj)({
        name: "2026-10-pinot-member",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    o = (0, l.mj)({
        name: "2026-10-pinot-member-notice",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    r = (0, l.mj)({
        name: "2026-10-pinot-channel-discoverable",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
a.d(
    n,
    {},
    {
        C: function (e, n) {
            let { enabled: a } = t.useConfig({ guildId: e ?? "", location: n });
            return null != e && a;
        },
        Hg: function (e, n) {
            let { enabled: a } = o.useConfig({ guildId: e ?? "", location: n });
            return null != e && a;
        },
        Zd: function (e) {
            let { enabled: n } = u.useConfig({ location: e });
            return n;
        },
        Zu: function (e, n) {
            let { enabled: a } = r.useConfig({ guildId: e ?? "", location: n });
            return null != e && a;
        },
        ao: function (e) {
            return (0, i.bG)([d.A], () => u.getConfig({ location: e }, { autoTrackExposure: !1 }).enabled, [e]);
        },
        fk: function (e, n) {
            return null != e && t.getConfig({ guildId: e, location: n }).enabled;
        },
        ws: function (e, n) {
            return u.getConfig({ location: e }, n).enabled;
        },
    },
);
