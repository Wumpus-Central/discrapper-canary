n.d(t, { l: () => i });
var r = n(118801);
function i(e = {}) {
    let { isReadOnly: t } = e,
        [n, a] = (0, r.z)(e.isSelected, e.defaultSelected || !1, e.onChange);
    function o() {
        t || a(!n);
    }
    return {
        isSelected: n,
        setSelected: function (e) {
            t || a(e);
        },
        toggle: o,
    };
}
