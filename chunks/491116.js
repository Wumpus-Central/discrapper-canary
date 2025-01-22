r.d(n, {
    l: function () {
        return a;
    }
});
var i = r(239700);
function a(e = {}) {
    let { isReadOnly: n } = e,
        [r, a] = (0, i.zk)(e.isSelected, e.defaultSelected || !1, e.onChange);
    function o() {
        !n && a(!r);
    }
    return {
        isSelected: r,
        setSelected: function e(e) {
            !n && a(e);
        },
        toggle: o
    };
}
