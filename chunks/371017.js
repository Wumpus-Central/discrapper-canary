var i = r(605905),
    a = r(779882),
    o = r(580495),
    s = RegExp("['\u2019]", 'g');
function l(e) {
    return function (n) {
        return i(o(a(n).replace(s, '')), e, '');
    };
}
e.exports = l;
