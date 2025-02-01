n.d(t, { Z: () => _ }), n(47120);
var i = n(147913),
    r = n(430824),
    a = n(70956),
    s = n(709054),
    o = n(553385),
    l = n(556178),
    u = n(890477);
function c(e, t, n) {
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
let d = 0;
class f extends i.Z {
    constructor(...e) {
        super(...e),
            c(this, 'actions', {
                POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
                IDLE: () => this.handleIdleChange()
            }),
            c(this, 'handleConnectionOpen', (e) => {
                this._attemptDeadchatPrompt(), this._triggerGamingStatsSetupExperiment();
            }),
            c(this, 'handleIdleChange', () => {
                Date.now() - d > a.Z.Millis.HOUR && this._attemptDeadchatPrompt();
            }),
            c(this, '_attemptDeadchatPrompt', () => {
                let e = r.Z.getGuilds(),
                    t = s.default.keys(e).filter(
                        (e) =>
                            u.Z.getCurrentConfig({
                                guildId: e,
                                location: 'manager'
                            }).triggerDeadchat
                    );
                t.length > 0 && ((d = Date.now()), (0, o.N7)(t));
            }),
            c(this, '_triggerGamingStatsSetupExperiment', () => {
                let e = r.Z.getGuilds();
                s.default.keys(e).forEach((e) => {
                    l.g.trackExposure({
                        guildId: e,
                        location: 'manager'
                    });
                });
            });
    }
}
let _ = new f();
