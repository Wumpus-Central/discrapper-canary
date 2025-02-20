var r = n(605905),
    i = n(779882),
    o = n(580495),
    a = RegExp("['\u2019]", 'g');
function s(e) {
    return function (t) {
        return r(o(i(t).replace(a, '')), e, '');
    };
}
e.exports = s;
