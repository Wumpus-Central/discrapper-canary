"use strict";
n.d(t, { A: () => A });
var r = n(607399),
    i = n(923408),
    s = n(439372),
    a = n(5180),
    o = n(71393),
    l = n(576705),
    u = n(967198),
    c = n(488803),
    d = n(764322),
    _ = n(942975),
    f = n(645619),
    p = n(832547),
    h = n(103821),
    m = n(363487),
    E = n(342220);
class g extends s.A {
    handleSelectedGuildChange() {
        let e = u.A.getGuildId();
        if (null == e || (0, a.ai)(e)) return;
        let t = o.A.getGuild(e);
        if (null == t) return;
        c.x1.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            (0, c.TS)(t.id, "GuildPowerupsManager") &&
                d.r.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" });
        let n = p.A.getConfig({ location: "GuildPowerupsManager" }).enabled,
            i = h.A.getConfig({ location: "GuildPowerupsManager" }).enabled;
        if (!(0, m.G)(l.A, t)) {
            let e = (n || i) && (0, E.X)();
            if (r.Fr || !e) return;
        }
        f.A.shouldFetchCatalogForGuild(e) && (0, _.AK)(e), f.A.shouldFetchPowerupsForGuild(e) && (0, _.Xd)(e);
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
        !0 === (0, m.G)(l.A, o.A.getGuild(e)) && ((0, _.Xd)(e), (0, i.VU)(e));
    }
    stores = new Map().set(u.A, this.handleSelectedGuildChange);
    actions = {
        GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
        GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
        GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this),
    };
}
let A = new g();
