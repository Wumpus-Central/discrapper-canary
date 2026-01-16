n.d(t, { Z: () => p }), n(388685);
var r = n(224706),
    i = n(978085),
    a = n(147913),
    o = n(404577),
    s = n(283595),
    l = n(70956),
    c = n(358085),
    u = n(273273);
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
class f extends a.Z {
    handlePostConnectionOpen() {
        (0, c.isDesktop)() && !s.Z.fetched && (0, i.b8)(),
            r.Z.getDetectableGames(),
            r.Z.getDetectableBlocklist(),
            (this.intervalId = setInterval(
                () => {
                    r.Z.getDetectableGames(), r.Z.getDetectableBlocklist();
                },
                o.Z.detectableGamesTtl + Math.random() * l.Z.Millis.HOUR,
            )),
            r.Z.getDetectableNonGames(),
            (this.nonGameIntervalId = setInterval(
                r.Z.getDetectableNonGames,
                u.Z.ttl + Math.random() * l.Z.Millis.HOUR,
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
            d(this, "actions", { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() });
    }
}
let p = new f();
