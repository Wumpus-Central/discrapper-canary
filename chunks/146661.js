(n.d(t, { Z: () => _ }), n(388685));
var r = n(147913),
    i = n(430824),
    a = n(70956),
    o = n(553385),
    s = n(556178),
    l = n(890477);
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
let u = 0;
class d extends r.Z {
    constructor(...e) {
        (super(...e),
            c(this, 'actions', {
                POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
                IDLE: () => this.handleIdleChange()
            }),
            c(this, 'handleConnectionOpen', (e) => {
                (this._attemptDeadchatPrompt(), this._triggerGamingStatsSetupExperiment());
            }),
            c(this, 'handleIdleChange', () => {
                Date.now() - u > a.Z.Millis.HOUR && this._attemptDeadchatPrompt();
            }),
            c(this, '_attemptDeadchatPrompt', () => {
                let e = i.Z.getGuildIds().filter(
                    (e) =>
                        l.Z.getCurrentConfig({
                            guildId: e,
                            location: 'manager'
                        }).triggerDeadchat
                );
                e.length > 0 && ((u = Date.now()), (0, o.N7)(e));
            }),
            c(this, '_triggerGamingStatsSetupExperiment', () => {
                for (let e of i.Z.getGuildIds())
                    s.g.trackExposure({
                        guildId: e,
                        location: 'manager'
                    });
            }));
    }
}
let _ = new d();
