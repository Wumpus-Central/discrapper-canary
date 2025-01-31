n.d(t, { Z: () => l });
var i = n(55935),
    r = n(70956),
    a = n(34756),
    s = n(388032);
class o extends a.Z {
    _getMessageFromRateLimit(e) {
        let t = e.body.retry_after,
            n = (0, i.TD)(0, t * r.Z.Millis.SECOND);
        return (0, i.QX)(n, {
            days: s.t['iXc/IS'],
            hours: s.t['WW9P5+'],
            minutes: s.t.I7rYen
        });
    }
    constructor(e, t) {
        super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e));
    }
}
let l = o;
