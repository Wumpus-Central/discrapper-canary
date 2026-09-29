n.d(t, { A: () => T });
var i = n(607399),
    r = n(820739),
    a = n(439372),
    s = n(5180),
    l = n(831617),
    o = n(71393),
    d = n(576705),
    c = n(967198),
    u = n(868652),
    _ = n(645619),
    E = n(772788),
    A = n(383272),
    h = n(414133),
    I = n(363487),
    f = n(342220);
class p extends a.A {
    handleSelectedGuildChange() {
        let e = c.A.getGuildId();
        if (null == e || (0, s.ai)(e)) return;
        let t = o.A.getGuild(e);
        if (null != t) {
            if (
                (l.x1.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
                A.g$.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
                E.K.getConfig({ guildId: t.id, location: "GuildPowerupsManager" }),
                !(0, I.G)(d.A, t))
            ) {
                let t = (0, f.X)(),
                    n =
                        i.Fr &&
                        (0, A.Qs)(e, "GuildPowerupsManager") &&
                        !(0, A.Ov)(e, "GuildPowerupsManager") &&
                        (0, f.X)() &&
                        (0, h.ht)("GuildPowerupsManager"),
                    r = i.Fr && (0, f.X)();
                if (!(i.Fr ? n || r : t)) return;
            }
            (_.A.shouldFetchCatalogForGuild(e) && (0, u.AK)(e), _.A.shouldFetchPowerupsForGuild(e) && (0, u.Xd)(e));
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
        !0 === (0, I.G)(d.A, o.A.getGuild(e)) && ((0, u.Xd)(e), (0, r.VU)(e, { includeEnded: !0 }));
    }
    stores = new Map().set(c.A, this.handleSelectedGuildChange);
    actions = {
        GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
        GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
        GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this),
    };
}
let T = new p();
