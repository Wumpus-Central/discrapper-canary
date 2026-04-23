"use strict";
n.d(t, { m: () => a });
var r = n(661191);
let i = 0,
    s = new r.SnowflakeSequence();
function a() {
    let e = Date.now();
    return i !== e && (s.reset(), (i = e)), r.default.fromTimestampWithSequence(e, s);
}
