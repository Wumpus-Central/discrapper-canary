"use strict";
n.d(t, { H: () => a });
var r = n(992533),
    i = n(582128);
function a(e = {}) {
    var t;
    let { isReadOnly: n } = e,
        [o, s] = (0, r.P)(e.isSelected, e.defaultSelected || !1, e.onChange),
        [l] = (0, i.useState)(o);
    return {
        isSelected: o,
        defaultSelected: null != (t = e.defaultSelected) ? t : l,
        setSelected: function (e) {
            n || s(e);
        },
        toggle: function () {
            n || s(!o);
        },
    };
}
