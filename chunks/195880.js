"use strict";
n.d(t, { m: () => s });
var r = n(661191);
let i = 0,
    a = new r.SnowflakeSequence();
function s() {
    let e = Date.now();
    return i !== e && (a.reset(), (i = e)), r.default.fromTimestampWithSequence(e, a);
}
