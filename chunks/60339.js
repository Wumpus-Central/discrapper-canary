"use strict";
r.d(t, { H: () => i });
var n = r(992533),
    o = r(582128);
function i(e = {}) {
    var t;
    let { isReadOnly: r } = e,
        [a, s] = (0, n.P)(e.isSelected, e.defaultSelected || !1, e.onChange),
        [l] = (0, o.useState)(a);
    return {
        isSelected: a,
        defaultSelected: null != (t = e.defaultSelected) ? t : l,
        setSelected: function (e) {
            r || s(e);
        },
        toggle: function () {
            r || s(!a);
        },
    };
}
