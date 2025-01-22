var i = r(158698),
    a = 1 / 0;
function o(e) {
    if ('string' == typeof e || i(e)) return e;
    var n = e + '';
    return '0' == n && 1 / e == -a ? '-0' : n;
}
e.exports = o;
