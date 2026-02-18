"use strict";
n.d(t, { A: () => L });
var r = n(607399),
    i = n(923408),
    a = n(843472),
    s = n(155718),
    o = n(439372),
    l = n(95701),
    u = n(734057),
    c = n(696451),
    d = n(71393),
    _ = n(320501),
    f = n(576705),
    h = n(309010),
    p = n(967198),
    g = n(287809),
    E = n(488803),
    A = n(942975),
    I = n(645619),
    T = n(832547),
    y = n(103821),
    S = n(302909),
    v = n(128069),
    C = n(840120),
    b = n(363487),
    N = n(804756),
    R = n(652215),
    O = n(349828);
class D extends o.A {
    handleSelectedGuildChange() {
        let e = p.A.getGuildId();
        if (null == e || e === O.Vc || e === R.YYv) return;
        let t = d.A.getGuild(e);
        if (null == t) return;
        C.Qb.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            E.x1.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" }),
            v.vu.trackExposure({ guildId: t.id, location: "GuildPowerupsManager" });
        let n = T.A.getConfig({ location: "GuildPowerupsManager" }).enabled,
            i = y.A.getConfig({ location: "GuildPowerupsManager" }).enabled;
        if (!(0, b.G)(f.A, t)) {
            let t = g.default.getCurrentUser(),
                a = t?.id != null ? c.Ay.getMember(e, t.id) : void 0,
                s = (n || i) && (0, N.X)(t, a);
            if (r.Fr || !s) return;
        }
        I.A.shouldFetchCatalogForGuild(e) && (0, A.AK)(e), I.A.shouldFetchPowerupsForGuild(e) && (0, A.Xd)(e);
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
        !0 === (0, b.G)(f.A, d.A.getGuild(e)) && ((0, A.Xd)(e), (0, i.VU)(e));
    }
    isEligibleForFirstBoosterUpsell() {
        return S.A.getConfig({ location: "GuildPowerupsManager" }).enabled;
    }
    getBoostingPrompt() {
        return this.isEligibleForFirstBoosterUpsell() ? { guildBoostUpsellType: s.Mk.FIRST_BOOSTER } : null;
    }
    maybeSendGuildBoostUpsellSystemMessage(e, t) {
        if (!(0, l.pQ)(e.type) || t.id === O.Vc || t.id === R.YYv) return;
        let n = this.getBoostingPrompt();
        null != n &&
            (_.A.isReady(e.id)
                ? a.A.sendGuildBoostUpsellSystemMessage(e.id, n)
                : _.A.whenReady(e.id, () => {
                      h.A.getChannelId() === e.id && a.A.sendGuildBoostUpsellSystemMessage(e.id, n);
                  }));
    }
    handleChannelSelect(e) {
        let { channelId: t, guildId: n } = e,
            r = u.A.getChannel(t),
            i = d.A.getGuild(n);
        null != r && null != i && this.maybeSendGuildBoostUpsellSystemMessage(r, i);
    }
    onPostConnectionOpen() {
        let e = h.A.getChannelId(),
            t = u.A.getChannel(e),
            n = d.A.getGuild(t?.guild_id);
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
let L = new D();
