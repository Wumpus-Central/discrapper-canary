n.d(t, { r: () => s });
var i = n(709054);
let r = 0,
    a = new i.SnowflakeSequence();
function s() {
    let e = Date.now();
    return r !== e && (a.reset(), (r = e)), i.default.fromTimestampWithSequence(e, a);
}
