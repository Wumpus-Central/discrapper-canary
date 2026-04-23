"use strict";
n.d(t, { Z: () => l });
var r = n(339241),
    i = n(492313),
    s = n(64700);
let a = Math.round(1e10 * Math.random()),
    o = 0;
function l(e) {
    var t, n;
    let l = (0, s.useMemo)(() => e.name || `radio-group-${a}-${++o}`, [e.name]),
        [u, c] = (0, i.P)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
        [d] = (0, s.useState)(u),
        [_, f] = (0, s.useState)(null),
        p = (0, r.KZ)({ ...e, value: u }),
        h = p.displayValidation.isInvalid;
    return {
        ...p,
        name: l,
        selectedValue: u,
        defaultSelectedValue: void 0 !== e.value ? d : null != (n = e.defaultValue) ? n : null,
        setSelectedValue: (t) => {
            e.isReadOnly || e.isDisabled || (c(t), p.commitValidation());
        },
        lastFocusedValue: _,
        setLastFocusedValue: f,
        isDisabled: e.isDisabled || !1,
        isReadOnly: e.isReadOnly || !1,
        isRequired: e.isRequired || !1,
        validationState: e.validationState || (h ? "invalid" : null),
        isInvalid: h,
    };
}
