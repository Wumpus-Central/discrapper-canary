n.d(t, { m: () => s });
var i = n(935208);
let a = 0,
    r = new i.SnowflakeSequence();
function s() {
    let e = Date.now();
    return a !== e && (r.reset(), (a = e)), i.default.fromTimestampWithSequence(e, r);
}
