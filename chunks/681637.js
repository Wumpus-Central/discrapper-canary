"use strict";
n.d(t, { A: () => T });
var r = n(607399),
    i = n(923408),
    s = n(439372),
    a = n(71393),
    o = n(576705),
    l = n(967198),
    u = n(488803),
    c = n(942975),
    d = n(645619),
    _ = n(832547),
    f = n(103821),
    p = n(128069),
    h = n(840120),
    m = n(363487),
    E = n(342220),
    g = n(652215),
    A = n(349828);
class I extends s.A {
    handleSelectedGuildChange() {
        let e = l.A.getGuildId();
        if (null == e || e === A.Vc || e === g.YYv) return;
        let t = a.A.getGuild(e);
        if (null == t) return;
        h.Qb.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            u.x1.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            p.vu.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" });
        let n = _.A.getConfig({ location: "GuildPowerupsManager" }).enabled,
            i = f.A.getConfig({ location: "GuildPowerupsManager" }).enabled;
        if (!(0, m.G)(o.A, t)) {
            let e = (n || i) && (0, E.X)();
            if (r.Fr || !e) return;
        }
        d.A.shouldFetchCatalogForGuild(e) && (0, c.AK)(e), d.A.shouldFetchPowerupsForGuild(e) && (0, c.Xd)(e);
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
        !0 === (0, m.G)(o.A, a.A.getGuild(e)) && ((0, c.Xd)(e), (0, i.VU)(e));
    }
    stores = new Map().set(l.A, this.handleSelectedGuildChange);
    actions = {
        GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
        GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
        GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this),
    };
}
let T = new I();
