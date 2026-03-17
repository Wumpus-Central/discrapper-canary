"use strict";
n.d(t, { A: () => I });
var r = n(607399),
    i = n(923408),
    s = n(439372),
    a = n(5180),
    o = n(71393),
    l = n(576705),
    u = n(967198),
    c = n(488803),
    d = n(942975),
    _ = n(645619),
    f = n(832547),
    p = n(103821),
    h = n(128069),
    m = n(840120),
    E = n(363487),
    g = n(342220);
class A extends s.A {
    handleSelectedGuildChange() {
        let e = u.A.getGuildId();
        if (null == e || (0, a.ai)(e)) return;
        let t = o.A.getGuild(e);
        if (null == t) return;
        m.Qb.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            c.x1.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            h.vu.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" });
        let n = f.A.getConfig({ location: "GuildPowerupsManager" }).enabled,
            i = p.A.getConfig({ location: "GuildPowerupsManager" }).enabled;
        if (!(0, E.G)(l.A, t)) {
            let e = (n || i) && (0, g.X)();
            if (r.Fr || !e) return;
        }
        _.A.shouldFetchCatalogForGuild(e) && (0, d.AK)(e), _.A.shouldFetchPowerupsForGuild(e) && (0, d.Xd)(e);
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
        !0 === (0, E.G)(l.A, o.A.getGuild(e)) && ((0, d.Xd)(e), (0, i.VU)(e));
    }
    stores = new Map().set(u.A, this.handleSelectedGuildChange);
    actions = {
        GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
        GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
        GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this),
    };
}
let I = new A();
