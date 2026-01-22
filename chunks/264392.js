n.d(t, {
    i: () => i,
});
var r = n(527815);

function i() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4e3;
    return new Promise((t) => {
        let n = setTimeout(() => {
            t();
        }, e);
        (0, r.t)(() => {
            clearTimeout(n), t();
        });
    });
}
