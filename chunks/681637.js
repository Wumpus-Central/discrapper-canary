n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(923408),
    i = n(439372),
    a = n(71393),
    s = n(576705),
    o = n(967198),
    l = n(488803),
    c = n(942975),
    u = n(645619),
    d = n(840120),
    f = n(363487),
    p = n(652215),
    _ = n(349828);

function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class m extends i.A {
    handleSelectedGuildChange() {
        let e = o.A.getGuildId();
        if (null == e || e === _.V || e === p.YYv) return;
        let t = a.A.getGuild(e);
        null == t ||
            (d.Qb.trackExposure({
                guildId: t.id,
                location: "GuildPowerupsManager",
            }),
            l.x1.trackExposure({
                guildId: t.id,
                location: "GuildPowerupsManager",
            }),
            (0, f.G)(s.A, t) &&
                (u.A.shouldFetchCatalogForGuild(e) && (0, c.AK)(e),
                u.A.shouldFetchPowerupsForGuild(e) && (0, c.Xd)(e)));
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
        !0 === (0, f.G)(s.A, a.A.getGuild(e)) && ((0, c.Xd)(e), (0, r.VU)(e));
    }
    constructor(...e) {
        super(...e),
            h(this, "stores", new Map().set(o.A, this.handleSelectedGuildChange)),
            h(this, "actions", {
                GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
                GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
                GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this),
            });
    }
}
let g = new m();
