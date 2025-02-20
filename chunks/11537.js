var r = n(685347),
    i = n(649786),
    o = Object.prototype.hasOwnProperty;
function a(e, t, n) {
    var a = e[t];
    (o.call(e, t) && i(a, n) && (void 0 !== n || t in e)) || r(e, t, n);
}
e.exports = a;
