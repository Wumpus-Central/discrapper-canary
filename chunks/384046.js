"use strict";
n.d(t, { A: () => N });
var i = n(607399),
    r = n(820739),
    a = n(439372),
    s = n(5180),
    l = n(831617),
    o = n(43471);
let d = (0, n(240921).Ay)({
    name: "2026-03-boost-to-unlock-mobile-coachmark",
    kind: "user",
    defaultConfig: { showCoachmark: !1 },
    variations: { 0: { showCoachmark: !1 }, 1: { showCoachmark: !0 } },
});
var c = n(71393),
    u = n(576705),
    _ = n(967198),
    E = n(868652),
    A = n(645619),
    h = n(323472),
    I = n(313205),
    f = n(772788),
    p = n(383272),
    T = n(414133),
    m = n(363487),
    g = n(342220);
class S extends a.A {
    handleSelectedGuildChange() {
        let e = _.A.getGuildId();
        if (null == e || (0, s.ai)(e)) return;
        let t = c.A.getGuild(e);
        if (null != t) {
            if (
                (l.x1.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
                I.LH.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
                p.g$.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
                f.K.getConfig({ guildId: t.id, location: "GuildPowerupsManager" }),
                (0, l.TS)(t.id, "GuildPowerupsManager") &&
                    o.r.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
                !(0, m.G)(u.A, t))
            ) {
                let t = (0, g.X)(),
                    n = i.Fr && (0, p.Qs)(e, "GuildPowerupsManager") && (0, g.X)() && (0, T.ht)("GuildPowerupsManager"),
                    r = i.Fr && (0, g.X)() && d.getConfig({ location: "GuildPowerupsManager" }).showCoachmark;
                if (!(i.Fr ? n || r : t)) return;
            }
            A.A.shouldFetchCatalogForGuild(e) && (0, E.AK)(e), A.A.shouldFetchPowerupsForGuild(e) && (0, E.Xd)(e);
        }
    }
    handleEntitlementUpdate(e) {
        let { guildId: t } = e;
        this.refreshGuildPowerups(t);
    }
    handleAppliedBoostUpdate(e) {
        let { guildId: t } = e;
        this.refreshGuildPowerups(t);
    }
    refreshGuildPowerups(e) {
        if (!0 === (0, m.G)(u.A, c.A.getGuild(e))) {
            (0, E.Xd)(e);
            let t = h.A.getConfig({ location: "GuildPowerupsManager" }).enabled;
            (0, r.VU)(e, { includeEnded: t });
        }
    }
    stores = new Map().set(_.A, this.handleSelectedGuildChange);
    actions = {
        GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
        GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
        GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this),
    };
}
let N = new S();
