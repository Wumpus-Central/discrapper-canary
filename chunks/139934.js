n.d(t, { Z: () => o });
function o(e) {
    var t = Object.create(null);
    return function (n) {
        return void 0 === t[n] && (t[n] = e(n)), t[n];
    };
}
