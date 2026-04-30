"use strict";
n.d(t, { m: () => a });
var i = n(935208);
let r = 0,
    s = new i.SnowflakeSequence();
function a() {
    let e = Date.now();
    return r !== e && (s.reset(), (r = e)), i.default.fromTimestampWithSequence(e, s);
}
