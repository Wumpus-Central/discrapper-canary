n.d(t, { Z: () => y }), n(47120), n(789020);
var r = n(147913),
    i = n(703656),
    o = n(271383),
    a = n(430824),
    s = n(914010),
    l = n(70956),
    c = n(630388),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = null,
    E = null;
class b extends r.Z {
    constructor(...e) {
        super(...e),
            m(this, 'actions', {
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e)
            }),
            m(this, 'handleConnectionOpen', (e) => {
                var t;
                null != (g = null != (t = null != g ? g : s.Z.getGuildId()) ? t : null) && this._openOnboardingIfIncomplete(g);
            }),
            m(this, 'handleChannelSelect', (e) => {
                let { guildId: t, channelId: n } = e;
                if ((g === t && E === n) || ((g = null != t ? t : null), (E = null != n ? n : null), null == g || null == E)) return;
                let r = a.Z.getGuild(t);
                null != r && r.hasFeature(_.oNc.COMMUNITY) && d.Z.shouldFetchPrompts(g, 8 * l.Z.Millis.HOUR) && (0, u.rj)(g), this._openOnboardingIfIncomplete(g, n);
            }),
            m(this, 'handleGuildDelete', (e) => {
                let { guild: t } = e;
                (0, f.EI)(t.id);
            }),
            m(this, '_openOnboardingIfIncomplete', async (e, t) => {
                var n, r;
                if ((0, f.hz)(e)) return void (0, i.uL)(_.Z5c.CHANNEL(e, p.oC.GUILD_ONBOARDING));
                let s = a.Z.getGuild(e);
                if (null == s || !s.hasFeature(_.oNc.GUILD_ONBOARDING)) return;
                let l = o.ZP.getSelfMember(e);
                !(null == l || (0, c.yE)(null != (n = l.flags) ? n : 0, h.q.COMPLETED_ONBOARDING)) && (0, c.yE)(null != (r = l.flags) ? r : 0, h.q.STARTED_ONBOARDING) && (await (0, f.default)({ guildId: e }), (0, i.uL)(_.Z5c.CHANNEL(e, t)));
            });
    }
}
let y = new b();
