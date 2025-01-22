r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(512722),
    a = r.n(i),
    o = r(709054);
function s(e) {
    a()(e.length <= 2 || o.default.compare(e[0].id, e[e.length - 1].id) >= 0, 'messages must be sorted in descending order.');
}
