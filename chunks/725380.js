r.d(n, {
    $E: function () {
        return c;
    },
    Ky: function () {
        return l;
    },
    RF: function () {
        return u;
    }
});
var i = r(47120);
let a = {};
function o(e, n) {
    return ''.concat(e, ':').concat(n);
}
function s(e) {
    let [n, r] = e.split(':');
    return [n, r];
}
function l(e, n) {
    return a[o(e, n)];
}
function u(e, n, r) {
    let i = o(e, n);
    a[i] = {
        ...a[i],
        ...r
    };
}
function c(e) {
    for (let n in a) {
        let [r, i] = s(n);
        e(r, i, a[n]);
    }
    a = {};
}
