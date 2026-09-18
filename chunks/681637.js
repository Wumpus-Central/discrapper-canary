n.d(t, { A: () => m });
var i = n(607399),
    r = n(820739),
    a = n(439372),
    s = n(5180),
    l = n(831617),
    o = n(43471),
    d = n(71393),
    c = n(576705),
    u = n(967198),
    _ = n(868652),
    E = n(645619),
    A = n(313205),
    h = n(772788),
    I = n(383272),
    f = n(414133),
    p = n(363487),
    T = n(342220);
class g extends a.A {
    handleSelectedGuildChange() {
        let e = u.A.getGuildId();
        if (null == e || (0, s.ai)(e)) return;
        let t = d.A.getGuild(e);
        if (null != t) {
            if (
                (l.x1.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
                A.LH.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
                I.g$.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
                h.K.getConfig({ guildId: t.id, location: "GuildPowerupsManager" }),
                (0, l.TS)(t.id, "GuildPowerupsManager") &&
                    o.r.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
                !(0, p.G)(c.A, t))
            ) {
                let t = (0, T.X)(),
                    n =
                        i.Fr &&
                        (0, I.Qs)(e, "GuildPowerupsManager") &&
                        !(0, I.Ov)(e, "GuildPowerupsManager") &&
                        (0, T.X)() &&
                        (0, f.ht)("GuildPowerupsManager"),
                    r = i.Fr && (0, T.X)();
                if (!(i.Fr ? n || r : t)) return;
            }
            (E.A.shouldFetchCatalogForGuild(e) && (0, _.AK)(e), E.A.shouldFetchPowerupsForGuild(e) && (0, _.Xd)(e));
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
        !0 === (0, p.G)(c.A, d.A.getGuild(e)) && ((0, _.Xd)(e), (0, r.VU)(e, { includeEnded: !0 }));
    }
    stores = new Map().set(u.A, this.handleSelectedGuildChange);
    actions = {
        GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
        GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
        GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this),
    };
}
let m = new g();
