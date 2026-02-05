"use strict";
n.d(t, { A: () => _ });
var r = n(544420),
    i = n(110782),
    a = n(439372),
    s = n(760751),
    o = n(189081),
    l = n(927813),
    u = n(723702),
    c = n(953384);
class d extends a.A {
    intervalId;
    nonGameIntervalId;
    actions = { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() };
    handlePostConnectionOpen() {
        (0, u.isDesktop)() && !o.A.fetched && (0, i.Yq)(),
            r.A.getDetectableGames(),
            r.A.getDetectableBlocklist(),
            (this.intervalId = setInterval(
                () => {
                    r.A.getDetectableGames(), r.A.getDetectableBlocklist();
                },
                s.A.detectableGamesTtl + Math.random() * l.A.Millis.HOUR,
            )),
            r.A.getDetectableNonGames(),
            (this.nonGameIntervalId = setInterval(
                r.A.getDetectableNonGames,
                c.A.ttl + Math.random() * l.A.Millis.HOUR,
            ));
    }
    _terminate() {
        null != this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0)),
            null != this.nonGameIntervalId &&
                (clearInterval(this.nonGameIntervalId), (this.nonGameIntervalId = void 0));
    }
}
let _ = new d();
