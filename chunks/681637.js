"use strict";
n.d(t, { A: () => v });
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
    h = n(832547),
    p = n(103821),
    g = n(128069),
    E = n(840120),
    A = n(363487),
    I = n(804756),
    T = n(652215),
    y = n(349828);
class S extends a.A {
    handleSelectedGuildChange() {
        let e = u.A.getGuildId();
        if (null == e || e === y.Vc || e === T.YYv) return;
        let t = o.A.getGuild(e);
        if (null == t) return;
        E.Qb.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            d.x1.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            g.vu.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" });
        let n = h.A.getConfig({ location: "GuildPowerupsManager" }).enabled,
            i = p.A.getConfig({ location: "GuildPowerupsManager" }).enabled;
        if (!(0, A.G)(l.A, t)) {
            let t = c.default.getCurrentUser(),
                a = t?.id != null ? s.Ay.getMember(e, t.id) : void 0,
                o = (n || i) && (0, I.X)(t, a);
            if (r.Fr || !o) return;
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
        !0 === (0, A.G)(l.A, o.A.getGuild(e)) && ((0, _.Xd)(e), (0, i.VU)(e));
    }
    stores = new Map().set(u.A, this.handleSelectedGuildChange);
    actions = {
        GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
        GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
        GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this),
    };
}
let v = new S();
