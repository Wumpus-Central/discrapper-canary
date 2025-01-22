var i = r(67948),
    a = 1 / 0,
    o = 1.7976931348623157e308;
function s(e) {
    return e ? ((e = i(e)) === a || e === -a ? (e < 0 ? -1 : 1) * o : e == e ? e : 0) : 0 === e ? e : 0;
}
e.exports = s;
