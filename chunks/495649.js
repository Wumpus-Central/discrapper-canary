n.d(t, { Z: () => y }), n(47120), n(789020);
var i = n(147913),
    r = n(703656),
    a = n(271383),
    s = n(430824),
    o = n(914010),
    l = n(70956),
    u = n(630388),
    c = n(745752),
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
class v extends i.Z {
    constructor(...e) {
        super(...e),
            m(this, 'actions', {
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e)
            }),
            m(this, 'handleConnectionOpen', (e) => {
                var t;
                null != (g = null !== (t = null != g ? g : o.Z.getGuildId()) && void 0 !== t ? t : null) && this._openOnboardingIfIncomplete(g);
            }),
            m(this, 'handleChannelSelect', (e) => {
                let { guildId: t, channelId: n } = e;
                if ((g === t && E === n) || ((g = null != t ? t : null), (E = null != n ? n : null), null == g || null == E)) return;
                let i = s.Z.getGuild(t);
                null != i && i.hasFeature(_.oNc.COMMUNITY) && d.Z.shouldFetchPrompts(g, 8 * l.Z.Millis.HOUR) && (0, c.rj)(g), this._openOnboardingIfIncomplete(g, n);
            }),
            m(this, 'handleGuildDelete', (e) => {
                let { guild: t } = e;
                (0, f.EI)(t.id);
            }),
            m(this, '_openOnboardingIfIncomplete', async (e, t) => {
                var n, i;
                if ((0, f.hz)(e)) {
                    (0, r.uL)(_.Z5c.CHANNEL(e, p.oC.GUILD_ONBOARDING));
                    return;
                }
                let o = s.Z.getGuild(e);
                if (null == o || !o.hasFeature(_.oNc.GUILD_ONBOARDING)) return;
                let l = a.ZP.getSelfMember(e);
                !(null == l || (0, u.yE)(null !== (n = l.flags) && void 0 !== n ? n : 0, h.q.COMPLETED_ONBOARDING)) && (0, u.yE)(null !== (i = l.flags) && void 0 !== i ? i : 0, h.q.STARTED_ONBOARDING) && (await (0, f.default)({ guildId: e }), (0, r.uL)(_.Z5c.CHANNEL(e, t)));
            });
    }
}
let y = new v();
