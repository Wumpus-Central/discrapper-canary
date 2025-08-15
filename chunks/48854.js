n.d(t, { r: () => o });
var r = n(709054);
let i = 0,
    a = new r.SnowflakeSequence();
function o() {
    let e = Date.now();
    return i !== e && (a.reset(), (i = e)), r.default.fromTimestampWithSequence(e, a);
}
