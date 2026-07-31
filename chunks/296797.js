"use strict";
n.d(t, { A: () => A });
var i = n(780907),
    r = n(110782),
    a = n(439372),
    s = n(569926),
    l = n(760751),
    o = n(189081),
    d = n(927813),
    c = n(403362),
    u = n(723702),
    _ = n(953384);
class E extends a.A {
    intervalId;
    nonGameIntervalId;
    actions = {
        POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
        RUNNING_GAMES_CHANGE: (e) => this.fetchRunningGameRecords(e),
    };
    fetchRunningGameRecords(e) {
        let t = e.games.map((e) => e.id ?? l.A.findGame(e)?.id).filter(c.Vq);
        0 !== t.length && s.I.fetchMany(...t.map((e) => [e]));
    }
    handlePostConnectionOpen() {
        (0, u.isDesktop)() && !o.A.fetched && (0, r.Yq)(),
            i.Ay.getDetectableGames(),
            i.Ay.getDetectableBlocklist(),
            (this.intervalId = setInterval(
                () => {
                    i.Ay.getDetectableGames(), i.Ay.getDetectableBlocklist();
                },
                l.A.detectableGamesTtl + Math.random() * d.A.Millis.HOUR,
            )),
            i.Ay.getDetectableNonGames(),
            (this.nonGameIntervalId = setInterval(
                i.Ay.getDetectableNonGames,
                _.A.ttl + Math.random() * d.A.Millis.HOUR,
            ));
    }
    _terminate() {
        null != this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0)),
            null != this.nonGameIntervalId &&
                (clearInterval(this.nonGameIntervalId), (this.nonGameIntervalId = void 0));
    }
}
let A = new E();
