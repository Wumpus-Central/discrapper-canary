n.d(t, { A: () => S });
var i = n(607399),
    r = n(820739),
    a = n(439372),
    s = n(5180),
    l = n(831617),
    o = n(43471);
let d = (0, n(240921).Ay)({
    name: "2026-03-boost-to-unlock-mobile-coachmark",
    kind: "user",
    defaultConfig: { showCoachmark: !1 },
    variations: { 0: { showCoachmark: !1 }, 1: { showCoachmark: !0 } },
});
var c = n(71393),
    u = n(576705),
    _ = n(967198),
    E = n(868652),
    A = n(645619),
    h = n(313205),
    I = n(772788),
    f = n(383272),
    p = n(414133),
    T = n(363487),
    m = n(342220);
class g extends a.A {
    handleSelectedGuildChange() {
        let e = _.A.getGuildId();
        if (null == e || (0, s.ai)(e)) return;
        let t = c.A.getGuild(e);
        if (null != t) {
            if (
                (l.x1.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
                h.LH.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
                f.g$.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
                I.K.getConfig({ guildId: t.id, location: "GuildPowerupsManager" }),
                (0, l.TS)(t.id, "GuildPowerupsManager") &&
                    o.r.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
                !(0, T.G)(u.A, t))
            ) {
                let t = (0, m.X)(),
                    n = i.Fr && (0, f.Qs)(e, "GuildPowerupsManager") && (0, m.X)() && (0, p.ht)("GuildPowerupsManager"),
                    r = i.Fr && (0, m.X)() && d.getConfig({ location: "GuildPowerupsManager" }).showCoachmark;
                if (!(i.Fr ? n || r : t)) return;
            }
            A.A.shouldFetchCatalogForGuild(e) && (0, E.AK)(e), A.A.shouldFetchPowerupsForGuild(e) && (0, E.Xd)(e);
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
        !0 === (0, T.G)(u.A, c.A.getGuild(e)) && ((0, E.Xd)(e), (0, r.VU)(e, { includeEnded: !0 }));
    }
    stores = new Map().set(_.A, this.handleSelectedGuildChange);
    actions = {
        GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
        GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
        GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this),
    };
}
let S = new g();
