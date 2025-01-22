var i = r(47120);
var a = r(789020);
var o = r(147913),
    s = r(703656),
    l = r(271383),
    u = r(430824),
    c = r(914010),
    d = r(70956),
    f = r(630388),
    p = r(745752),
    h = r(45966),
    _ = r(17181),
    m = r(981631),
    g = r(176505),
    E = r(372897);
function v(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let y = null,
    b = null;
class I extends o.Z {
    constructor(...e) {
        super(...e),
            v(this, 'actions', {
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e)
            }),
            v(this, 'handleConnectionOpen', (e) => {
                var n;
                null != (y = null !== (n = null != y ? y : c.Z.getGuildId()) && void 0 !== n ? n : null) && this._openOnboardingIfIncomplete(y);
            }),
            v(this, 'handleChannelSelect', (e) => {
                let { guildId: n, channelId: r } = e;
                if (y === n && b === r) return;
                if (((y = null != n ? n : null), (b = null != r ? r : null), null == y || null == b)) return;
                let i = u.Z.getGuild(n);
                null != i && i.hasFeature(m.oNc.COMMUNITY) && h.Z.shouldFetchPrompts(y, 8 * d.Z.Millis.HOUR) && (0, p.rj)(y), this._openOnboardingIfIncomplete(y, r);
            }),
            v(this, 'handleGuildDelete', (e) => {
                let { guild: n } = e;
                (0, _.discardOnboardingPromise)(n.id);
            }),
            v(this, '_openOnboardingIfIncomplete', async (e, n) => {
                var r, i;
                if ((0, _.isOnboardingActiveForGuild)(e)) {
                    (0, s.uL)(m.Z5c.CHANNEL(e, g.oC.GUILD_ONBOARDING));
                    return;
                }
                let a = u.Z.getGuild(e);
                if (null == a || !a.hasFeature(m.oNc.GUILD_ONBOARDING)) return;
                let o = l.ZP.getSelfMember(e);
                if (!(null == o || (0, f.yE)(null !== (r = o.flags) && void 0 !== r ? r : 0, E.q.COMPLETED_ONBOARDING)) && !!(0, f.yE)(null !== (i = o.flags) && void 0 !== i ? i : 0, E.q.STARTED_ONBOARDING)) await (0, _.default)({ guildId: e }), (0, s.uL)(m.Z5c.CHANNEL(e, n));
            });
    }
}
n.Z = new I();
