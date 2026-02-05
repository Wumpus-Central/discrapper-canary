"use strict";
n.d(t, { A: () => m });
var r = n(923408),
    i = n(439372),
    a = n(71393),
    s = n(576705),
    o = n(967198),
    l = n(488803),
    u = n(942975),
    c = n(645619),
    d = n(840120),
    _ = n(363487),
    f = n(652215),
    p = n(349828);
class h extends i.A {
    handleSelectedGuildChange() {
        let e = o.A.getGuildId();
        if (null == e || e === p.V || e === f.YYv) return;
        let t = a.A.getGuild(e);
        null == t ||
            (d.Qb.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            l.x1.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            (0, _.G)(s.A, t) &&
                (c.A.shouldFetchCatalogForGuild(e) && (0, u.AK)(e),
                c.A.shouldFetchPowerupsForGuild(e) && (0, u.Xd)(e)));
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
        !0 === (0, _.G)(s.A, a.A.getGuild(e)) && ((0, u.Xd)(e), (0, r.VU)(e));
    }
    stores = new Map().set(o.A, this.handleSelectedGuildChange);
    actions = {
        GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
        GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
        GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this),
    };
}
let m = new h();
