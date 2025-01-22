r.d(n, {
    d: function () {
        return l;
    },
    m: function () {
        return s;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(503461);
function s(e, n) {
    let r = Array.isArray(n) ? [...e, ...n] : [...e, n];
    if (r.length >= 1 && r.length <= o.G2) return r;
    throw Error('combination results in an invalid key that has '.concat(r.length, ' elements: ').concat(JSON.stringify(r)));
}
function l(e, n) {
    let r = Array.isArray(n) ? [...e, ...n] : [...e, n];
    if (r.length <= o.G2) return r;
    throw Error('combination results in an invalid prefix key that has '.concat(r.length, ' elements: ').concat(JSON.stringify(r)));
}
