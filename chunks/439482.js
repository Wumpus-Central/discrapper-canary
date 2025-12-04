n.d(t, { f: () => i });
var r = n(304910);
function i() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4000;
    return new Promise((t) => {
        let n = setTimeout(() => {
            t();
        }, e);
        (0, r.f)(() => {
            clearTimeout(n), t();
        });
    });
}
