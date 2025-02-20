n.d(t, { Z: () => l });
var r = n(55935),
    i = n(70956),
    o = n(34756),
    a = n(388032);
class s extends o.Z {
    _getMessageFromRateLimit(e) {
        let t = e.body.retry_after,
            n = (0, r.TD)(0, t * i.Z.Millis.SECOND);
        return (0, r.QX)(n, {
            days: a.t['iXc/IS'],
            hours: a.t['WW9P5+'],
            minutes: a.t.I7rYen
        });
    }
    constructor(e, t) {
        super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e));
    }
}
let l = s;
