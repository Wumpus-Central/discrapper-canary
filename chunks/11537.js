var i = r(685347),
    a = r(649786),
    o = Object.prototype.hasOwnProperty;
function s(e, n, r) {
    var s = e[n];
    (!(o.call(e, n) && a(s, r)) || (void 0 === r && !(n in e))) && i(e, n, r);
}
e.exports = s;
