n.d(t, { Z: () => _ }), n(388685);
var r = n(147913),
    i = n(430824),
    o = n(70956),
    a = n(709054),
    s = n(553385),
    l = n(556178),
    c = n(890477);
function u(e, t, n) {
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
class f extends r.Z {
    constructor(...e) {
        super(...e),
            u(this, 'actions', {
                POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
                IDLE: () => this.handleIdleChange()
            }),
            u(this, 'handleConnectionOpen', (e) => {
                this._attemptDeadchatPrompt(), this._triggerGamingStatsSetupExperiment();
            }),
            u(this, 'handleIdleChange', () => {
                Date.now() - d > o.Z.Millis.HOUR && this._attemptDeadchatPrompt();
            }),
            u(this, '_attemptDeadchatPrompt', () => {
                let e = i.Z.getGuilds(),
                    t = a.default.keys(e).filter(
                        (e) =>
                            c.Z.getCurrentConfig({
                                guildId: e,
                                location: 'manager'
                            }).triggerDeadchat
                    );
                t.length > 0 && ((d = Date.now()), (0, s.N7)(t));
            }),
            u(this, '_triggerGamingStatsSetupExperiment', () => {
                let e = i.Z.getGuilds();
                a.default.keys(e).forEach((e) => {
                    l.g.trackExposure({
                        guildId: e,
                        location: 'manager'
                    });
                });
            });
    }
}
let _ = new f();
