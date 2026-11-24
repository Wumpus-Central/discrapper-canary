var i = n(855986),
    r = n(945810),
    a = n(734057),
    s = n(71393),
    l = n(293651);
n(652215);
let o = (0, r.mj)({
        name: "2026-11-stream-drawing",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    d = (0, r.mj)({
        name: "2026-11-stream-drawing-guild",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
n.d(
    t,
    {},
    {
        Np: d,
        TC: function (e, t) {
            let { guildId: n, supported: r } = (0, i.cf)(
                    [a.A, s.A],
                    () => {
                        let t = a.A.getChannel(e);
                        return { guildId: t?.guild_id, supported: (0, l.HB)(t, s.A.getGuild(t?.guild_id)) };
                    },
                    [e],
                ),
                c = o.useConfig({ location: t }, { autoTrackExposure: r }),
                u = d.useConfig({ guildId: n ?? "", location: t }, { autoTrackExposure: r && null != n });
            return r && (c.enabled || (null != n && u.enabled));
        },
        a5: o,
        qQ: function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = a.A.getChannel(e),
                r = i?.guild_id;
            if (!(0, l.HB)(i, s.A.getGuild(r))) return !1;
            let c = o.getConfig({ location: t }, { autoTrackExposure: n }),
                u = null == r ? void 0 : d.getConfig({ guildId: r, location: t }, { autoTrackExposure: n });
            return c.enabled || u?.enabled === !0;
        },
    },
);
