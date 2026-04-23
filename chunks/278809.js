"use strict";
n.d(t, { A: () => l });
var r = n(405269),
    i = n(927813),
    s = n(178253),
    a = n(985018);
class o extends s.A {
    constructor(e, t) {
        super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e));
    }
    _getMessageFromRateLimit(e) {
        let t = e.body.retry_after,
            n = (0, r.Tf)(0, t * i.A.Millis.SECOND);
        return (0, r.uN)(n, { days: a.t["iXc/Ib"], hours: a.t.WW9P57, minutes: a.t.I7rYev });
    }
}
let l = o;
