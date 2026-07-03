"use strict";
n.d(t, { A: () => C });
var i = n(607399),
    r = n(820739),
    s = n(439372),
    a = n(5180),
    o = n(71393),
    l = n(576705),
    u = n(967198),
    d = n(488803),
    c = n(764322),
    _ = n(868652),
    h = n(645619),
    f = n(832547),
    E = n(323472),
    p = n(103821),
    m = n(313205),
    g = n(772788),
    A = n(383272),
    I = n(414133),
    T = n(363487),
    S = n(342220);
class N extends s.A {
    handleSelectedGuildChange() {
        let e = u.A.getGuildId();
        if (null == e || (0, a.ai)(e)) return;
        let t = o.A.getGuild(e);
        if (null == t) return;
        d.x1.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            m.LH.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            A.g$.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            g.K.getConfig({ guildId: t.id, location: "GuildPowerupsManager" }),
            (0, d.TS)(t.id, "GuildPowerupsManager") &&
                c.r.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" });
        let n = f.A.getConfig({ location: "GuildPowerupsManager" }).enabled,
            r = p.A.getConfig({ location: "GuildPowerupsManager" }).enabled;
        if (!(0, T.G)(l.A, t)) {
            let t = (n || r) && (0, S.X)(),
                s = i.Fr && (0, A.Qs)(e, "GuildPowerupsManager") && (0, S.X)() && (0, I.ht)("GuildPowerupsManager");
            if (!(i.Fr ? s : t)) return;
        }
        h.A.shouldFetchCatalogForGuild(e) && (0, _.AK)(e), h.A.shouldFetchPowerupsForGuild(e) && (0, _.Xd)(e);
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
        if (!0 === (0, T.G)(l.A, o.A.getGuild(e))) {
            (0, _.Xd)(e);
            let t = E.A.getConfig({ location: "GuildPowerupsManager" }).enabled;
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
let C = new N();
