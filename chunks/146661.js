var i = r(47120);
var a = r(147913),
    o = r(430824),
    s = r(70956),
    l = r(709054),
    u = r(553385),
    c = r(556178),
    d = r(890477);
function f(e, n, r) {
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
let p = 0;
class h extends a.Z {
    constructor(...e) {
        super(...e),
            f(this, 'actions', {
                POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
                IDLE: () => this.handleIdleChange()
            }),
            f(this, 'handleConnectionOpen', (e) => {
                this._attemptDeadchatPrompt(), this._triggerGamingStatsSetupExperiment();
            }),
            f(this, 'handleIdleChange', () => {
                Date.now() - p > s.Z.Millis.HOUR && this._attemptDeadchatPrompt();
            }),
            f(this, '_attemptDeadchatPrompt', () => {
                let e = o.Z.getGuilds(),
                    n = l.default.keys(e).filter(
                        (e) =>
                            d.Z.getCurrentConfig({
                                guildId: e,
                                location: 'manager'
                            }).triggerDeadchat
                    );
                n.length > 0 && ((p = Date.now()), (0, u.N7)(n));
            }),
            f(this, '_triggerGamingStatsSetupExperiment', () => {
                let e = o.Z.getGuilds();
                l.default.keys(e).forEach((e) => {
                    c.g.trackExposure({
                        guildId: e,
                        location: 'manager'
                    });
                });
            });
    }
}
n.Z = new h();
