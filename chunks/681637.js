"use strict";
n.d(t, { A: () => S });
var i = n(607399),
    r = n(820739),
    s = n(439372),
    a = n(5180),
    o = n(71393),
    l = n(576705),
    u = n(967198),
    c = n(488803),
    d = n(764322),
    _ = n(868652),
    f = n(645619),
    h = n(832547),
    p = n(323472),
    E = n(103821),
    m = n(313205),
    g = n(383272),
    A = n(363487),
    I = n(342220);
class T extends s.A {
    handleSelectedGuildChange() {
        let e = u.A.getGuildId();
        if (null == e || (0, a.ai)(e)) return;
        let t = o.A.getGuild(e);
        if (null == t) return;
        c.x1.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            m.LH.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            g.g$.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            (0, c.TS)(t.id, "GuildPowerupsManager") &&
                d.r.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" });
        let n = h.A.getConfig({ location: "GuildPowerupsManager" }).enabled,
            r = E.A.getConfig({ location: "GuildPowerupsManager" }).enabled;
        if (!(0, A.G)(l.A, t)) {
            let e = (n || r) && (0, I.X)();
            if (i.Fr || !e) return;
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
        if (!0 === (0, A.G)(l.A, o.A.getGuild(e))) {
            (0, _.Xd)(e);
            let t = p.A.getConfig({ location: "GuildPowerupsManager" }).enabled;
            (0, r.VU)(e, { includeEnded: t });
        }
    }
    stores = new Map().set(u.A, this.handleSelectedGuildChange);
    actions = {
        GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
        GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
        GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this),
    };
}
let S = new T();
