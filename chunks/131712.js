"use strict";
n.d(t, { Z: () => l });
var r = n(339241),
    i = n(492313),
    a = n(64700);
let s = Math.round(1e10 * Math.random()),
    o = 0;
function l(e) {
    var t, n;
    let l = (0, a.useMemo)(() => e.name || `radio-group-${s}-${++o}`, [e.name]),
        [u, c] = (0, i.P)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
        [d] = (0, a.useState)(u),
        [_, f] = (0, a.useState)(null),
        p = (0, r.KZ)({ ...e, value: u }),
        h = (t) => {
            e.isReadOnly || e.isDisabled || (c(t), p.commitValidation());
        },
        m = p.displayValidation.isInvalid;
    return {
        ...p,
        name: l,
        selectedValue: u,
        defaultSelectedValue: void 0 !== e.value ? d : null != (n = e.defaultValue) ? n : null,
        setSelectedValue: h,
        lastFocusedValue: _,
        setLastFocusedValue: f,
        isDisabled: e.isDisabled || !1,
        isReadOnly: e.isReadOnly || !1,
        isRequired: e.isRequired || !1,
        validationState: e.validationState || (m ? "invalid" : null),
        isInvalid: m,
    };
}
