"use strict";
n.d(t, { A: () => R });
var r = n(607399),
    i = n(923408),
    s = n(843472),
    a = n(155718),
    o = n(439372),
    l = n(95701),
    u = n(734057),
    c = n(71393),
    d = n(320501),
    _ = n(576705),
    f = n(309010),
    p = n(967198),
    h = n(488803),
    m = n(942975),
    E = n(645619),
    g = n(832547),
    A = n(103821),
    I = n(302909),
    T = n(128069),
    S = n(840120),
    y = n(363487),
    v = n(342220),
    N = n(652215),
    C = n(349828);
class b extends o.A {
    handleSelectedGuildChange() {
        let e = p.A.getGuildId();
        if (null == e || e === C.Vc || e === N.YYv) return;
        let t = c.A.getGuild(e);
        if (null == t) return;
        S.Qb.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            h.x1.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            T.vu.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" });
        let n = g.A.getConfig({ location: "GuildPowerupsManager" }).enabled,
            i = A.A.getConfig({ location: "GuildPowerupsManager" }).enabled;
        if (!(0, y.G)(_.A, t)) {
            let e = (n || i) && (0, v.X)();
            if (r.Fr || !e) return;
        }
        E.A.shouldFetchCatalogForGuild(e) && (0, m.AK)(e), E.A.shouldFetchPowerupsForGuild(e) && (0, m.Xd)(e);
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
        !0 === (0, y.G)(_.A, c.A.getGuild(e)) && ((0, m.Xd)(e), (0, i.VU)(e));
    }
    isEligibleForFirstBoosterUpsell() {
        return I.A.getConfig({ location: "GuildPowerupsManager" }).enabled;
    }
    getBoostingPrompt() {
        return this.isEligibleForFirstBoosterUpsell() ? { guildBoostUpsellType: a.Mk.FIRST_BOOSTER } : null;
    }
    maybeSendGuildBoostUpsellSystemMessage(e, t) {
        if (!(0, l.pQ)(e.type) || t.id === C.Vc || t.id === N.YYv) return;
        let n = this.getBoostingPrompt();
        null != n &&
            (d.A.isReady(e.id)
                ? s.A.sendGuildBoostUpsellSystemMessage(e.id, n)
                : d.A.whenReady(e.id, () => {
                      f.A.getChannelId() === e.id && s.A.sendGuildBoostUpsellSystemMessage(e.id, n);
                  }));
    }
    handleChannelSelect(e) {
        let { channelId: t, guildId: n } = e,
            r = u.A.getChannel(t),
            i = c.A.getGuild(n);
        null != r && null != i && this.maybeSendGuildBoostUpsellSystemMessage(r, i);
    }
    onPostConnectionOpen() {
        let e = f.A.getChannelId(),
            t = u.A.getChannel(e),
            n = c.A.getGuild(t?.guild_id);
        null != t && null != n && this.maybeSendGuildBoostUpsellSystemMessage(t, n);
    }
    stores = new Map().set(p.A, this.handleSelectedGuildChange);
    actions = {
        POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
        CHANNEL_SELECT: this.handleChannelSelect.bind(this),
        GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
        GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
        GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this),
    };
}
let R = new b();
