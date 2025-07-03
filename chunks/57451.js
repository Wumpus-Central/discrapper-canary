(n.d(t, { Z: () => y }), n(388685));
var r = n(544891),
    i = n(704215),
    a = n(147913),
    o = n(266454),
    s = n(581883),
    l = n(601964),
    c = n(430824),
    u = n(496675),
    d = n(594174),
    f = n(960048),
    _ = n(50101),
    p = n(172299),
    h = n(639777),
    m = n(981631),
    g = n(526761);
function E(e, t, n) {
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
class b extends a.Z {
    findEligibleGuild() {
        let e = c.Z.getGuildsArray(),
            t = d.default.getCurrentUser();
        return e.find((e) => {
            let n = (0, _.gV)(e.id, 'guild_powerups_system_message'),
                r = e.premiumSubscriberCount > 0,
                i = e.features.has(m.oNc.TIERLESS_BOOSTING_SYSTEM_MESSAGE),
                a = (0, l.eM)(e, t) || (0, h.D)(u.Z, e);
            return n && (r || i) && a;
        });
    }
    async maybeSendSystemMessage() {
        if (this.isRequestInProgress || !s.Z.hasLoaded(g.yP.PRELOADED_USER_SETTINGS)) return;
        let e = (0, o.zu)(i.z.TIERLESS_BOOSTING_SYSTEM_MESSAGE),
            t = (0, p.V)('guild_powerups_system_message');
        if (e || !t) return;
        let n = this.findEligibleGuild();
        if (null != n) {
            this.isRequestInProgress = !0;
            try {
                (await r.tn.post({
                    url: m.ANM.SEND_POWERUPS_SYSTEM_MESSAGE(n.id),
                    rejectWithError: !0
                }),
                    (0, o.Q3)(i.z.TIERLESS_BOOSTING_SYSTEM_MESSAGE));
            } catch (e) {
                f.Z.captureException(e);
            } finally {
                this.isRequestInProgress = !1;
            }
        }
    }
    constructor(...e) {
        (super(...e), E(this, 'actions', { POST_CONNECTION_OPEN: () => this.maybeSendSystemMessage() }), E(this, 'isRequestInProgress', !1));
    }
}
let y = new b();
