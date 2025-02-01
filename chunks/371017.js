var i = n(605905),
    r = n(779882),
    a = n(580495),
    s = RegExp("['\u2019]", 'g');
function o(e) {
    return function (t) {
        return i(a(r(t).replace(s, '')), e, '');
    };
}
e.exports = o;
