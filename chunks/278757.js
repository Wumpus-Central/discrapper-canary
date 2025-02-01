var i = n(158698),
    r = 1 / 0;
function a(e) {
    if ('string' == typeof e || i(e)) return e;
    var t = e + '';
    return '0' == t && 1 / e == -r ? '-0' : t;
}
e.exports = a;
