r.d(n, {
    c: function () {
        return a;
    }
});
var i = r(239700);
function a(e) {
    let [n, r] = (0, i.zk)(o(e.value), o(e.defaultValue) || '', e.onChange);
    return {
        value: n,
        setValue: r
    };
}
function o(e) {
    if (null != e) return e.toString();
}
