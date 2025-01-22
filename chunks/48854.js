r.d(n, {
    r: function () {
        return s;
    }
});
var i = r(709054);
let a = 0,
    o = new i.SnowflakeSequence();
function s() {
    let e = Date.now();
    return a !== e && (o.reset(), (a = e)), i.default.fromTimestampWithSequence(e, o);
}
