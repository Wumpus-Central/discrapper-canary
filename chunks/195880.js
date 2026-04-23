n.d(t, { m: () => s });
var i = n(935208);
let r = 0,
    a = new i.SnowflakeSequence();
function s() {
    let e = Date.now();
    return r !== e && (a.reset(), (r = e)), i.default.fromTimestampWithSequence(e, a);
}
