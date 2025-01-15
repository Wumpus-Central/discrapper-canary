function i(e) {
    return ''.concat('*'.repeat(e.length - 4)).concat(e.slice(-4));
}
function r(e) {
    let [t, n] = e.split('@');
    return ''.concat('*'.repeat(t.length), '@').concat(n);
}
n.d(t, {
    E: function () {
        return r;
    },
    n: function () {
        return i;
    }
}),
    n(47120);
