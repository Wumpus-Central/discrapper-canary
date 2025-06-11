n.d(t, { Z: () => b }), n(388685);
var r = n(544891),
    i = n(704215),
    a = n(147913),
    o = n(605236),
    s = n(581883),
    l = n(430824),
    c = n(496675),
    u = n(594174),
    d = n(960048),
    f = n(50101),
    _ = n(172299),
    p = n(639777),
    h = n(981631),
    m = n(526761);
function g(e, t, n) {
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
class E extends a.Z {
    findEligibleGuild() {
        let e = Object.values(l.Z.getGuilds()),
            t = u.default.getCurrentUser();
        return e.find((e) => {
            let n = (0, f.gV)(e.id, 'guild_powerups_system_message'),
                r = e.hasFeature(h.oNc.TIERLESS_BOOSTING_SYSTEM_MESSAGE),
                i = e.isOwner(t) || (0, p.D)(c.Z, e);
            return n && r && i;
        });
    }
    async maybeSendSystemMessage() {
        if (this.isRequestInProgress || !s.Z.hasLoaded(m.yP.PRELOADED_USER_SETTINGS)) return;
        let e = (0, o.un)(i.z.TIERLESS_BOOSTING_SYSTEM_MESSAGE),
            t = (0, _.V)('guild_powerups_system_message');
        if (e || !t) return;
        let n = this.findEligibleGuild();
        if (null != n) {
            this.isRequestInProgress = !0;
            try {
                await r.tn.post({
                    url: h.ANM.SEND_POWERUPS_SYSTEM_MESSAGE(n.id),
                    rejectWithError: !0
                }),
                    (0, o.EW)(i.z.TIERLESS_BOOSTING_SYSTEM_MESSAGE);
            } catch (e) {
                d.Z.captureException(e);
            } finally {
                this.isRequestInProgress = !1;
            }
        }
    }
    constructor(...e) {
        super(...e), g(this, 'actions', { POST_CONNECTION_OPEN: () => this.maybeSendSystemMessage() }), g(this, 'isRequestInProgress', !1);
    }
}
let b = new E();
