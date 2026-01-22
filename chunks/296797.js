n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(544420),
    i = n(110782),
    a = n(439372),
    s = n(760751),
    o = n(189081),
    l = n(927813),
    c = n(723702),
    u = n(953384);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class f extends a.A {
    handlePostConnectionOpen() {
        (0, c.isDesktop)() && !o.A.fetched && (0, i.Yq)(),
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
                u.A.ttl + Math.random() * l.A.Millis.HOUR,
            ));
    }
    _terminate() {
        null != this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0)),
            null != this.nonGameIntervalId &&
                (clearInterval(this.nonGameIntervalId), (this.nonGameIntervalId = void 0));
    }
    constructor(...e) {
        super(...e),
            d(this, "intervalId", void 0),
            d(this, "nonGameIntervalId", void 0),
            d(this, "actions", {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
            });
    }
}
let p = new f();
