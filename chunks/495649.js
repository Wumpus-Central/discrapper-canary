n.d(t, { Z: () => y }), n(388685), n(997841);
var r = n(95015),
    i = n(147913),
    a = n(703656),
    o = n(271383),
    s = n(430824),
    l = n(914010),
    c = n(70956),
    u = n(745752),
    d = n(45966),
    f = n(17181),
    _ = n(981631),
    p = n(176505),
    h = n(372897);
function m(e, t, n) {
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
let g = null,
    E = null;
class b extends i.Z {
    constructor(...e) {
        super(...e),
            m(this, "actions", {
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
            }),
            m(this, "handleConnectionOpen", (e) => {
                var t;
                null != (g = null != (t = null != g ? g : l.Z.getGuildId()) ? t : null) &&
                    this._openOnboardingIfIncomplete(g);
            }),
            m(this, "handleChannelSelect", (e) => {
                let { guildId: t, channelId: n } = e;
                if (
                    (g === t && E === n) ||
                    ((g = null != t ? t : null), (E = null != n ? n : null), null == g || null == E)
                )
                    return;
                let r = s.Z.getGuild(t);
                null != r &&
                    r.features.has(_.GuildFeatures.COMMUNITY) &&
                    d.Z.shouldFetchPrompts(g, 8 * c.Z.Millis.HOUR) &&
                    (0, u.rj)(g),
                    this._openOnboardingIfIncomplete(g, n);
            }),
            m(this, "handleGuildDelete", (e) => {
                let { guild: t } = e;
                (0, f.EI)(t.id);
            }),
            m(this, "_openOnboardingIfIncomplete", async (e, t) => {
                var n, i;
                if ((0, f.hz)(e)) return void (0, a.uL)(_.Z5c.CHANNEL(e, p.oC.GUILD_ONBOARDING));
                let l = s.Z.getGuild(e);
                if (null == l || !l.features.has(_.GuildFeatures.GUILD_ONBOARDING)) return;
                let c = o.ZP.getSelfMember(e);
                !(null == c || (0, r.yE)(null != (n = c.flags) ? n : 0, h.q.COMPLETED_ONBOARDING)) &&
                    (0, r.yE)(null != (i = c.flags) ? i : 0, h.q.STARTED_ONBOARDING) &&
                    (await (0, f.default)({ guildId: e }), (0, a.uL)(_.Z5c.CHANNEL(e, t)));
            });
    }
}
let y = new b();
