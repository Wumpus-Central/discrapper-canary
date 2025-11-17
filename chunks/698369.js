n.d(t, { l: () => a });
var r = n(386239),
    i = n(473749);
function a(e = {}) {
    var t;
    let { isReadOnly: n } = e,
        [o, s] = (0, r.z)(e.isSelected, e.defaultSelected || !1, e.onChange),
        [l] = (0, i.useState)(o);
    function c(e) {
        n || s(e);
    }
    function u() {
        n || s(!o);
    }
    return {
        isSelected: o,
        defaultSelected: null != (t = e.defaultSelected) ? t : l,
        setSelected: c,
        toggle: u,
    };
}
