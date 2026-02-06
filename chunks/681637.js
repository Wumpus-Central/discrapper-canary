"use strict";
n.d(t, { A: () => y });
var r = n(607399),
    i = n(923408),
    a = n(439372),
    s = n(696451),
    o = n(71393),
    l = n(576705),
    u = n(967198),
    c = n(287809),
    d = n(488803),
    _ = n(942975),
    f = n(645619),
    p = n(832547),
    h = n(128069),
    m = n(840120),
    g = n(363487),
    E = n(804756),
    A = n(652215),
    I = n(349828);
class T extends a.A {
    handleSelectedGuildChange() {
        let e = u.A.getGuildId();
        if (null == e || e === I.V || e === A.YYv) return;
        let t = o.A.getGuild(e);
        if (null == t) return;
        m.Qb.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            d.x1.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            h.vu.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" });
        let n = p.A.getConfig({ location: "GuildPowerupsManager" }).enabled;
        if (!(0, g.G)(l.A, t)) {
            let t = c.default.getCurrentUser(),
                i = t?.id != null ? s.Ay.getMember(e, t.id) : void 0,
                a = n && (0, E.X)(t, i);
            if (r.Fr || !a) return;
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
        !0 === (0, g.G)(l.A, o.A.getGuild(e)) && ((0, _.Xd)(e), (0, i.VU)(e));
    }
    stores = new Map().set(u.A, this.handleSelectedGuildChange);
    actions = {
        GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
        GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
        GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this),
    };
}
let y = new T();
