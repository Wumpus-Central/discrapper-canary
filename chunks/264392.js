n.d(t, { i: () => a });
var i = n(824579);
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4e3;
    return new Promise((t) => {
        let n = setTimeout(() => {
            t();
        }, e);
        (0, i.t)(() => {
            clearTimeout(n), t();
        });
    });
}
