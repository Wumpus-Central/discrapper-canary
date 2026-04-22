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
        [u, d] = (0, i.P)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
        [c] = (0, s.useState)(u),
        [_, f] = (0, s.useState)(null),
        E = (0, r.KZ)({ ...e, value: u }),
        h = E.displayValidation.isInvalid;
    return {
        ...E,
        name: l,
        selectedValue: u,
        defaultSelectedValue: void 0 !== e.value ? c : null != (n = e.defaultValue) ? n : null,
        setSelectedValue: (t) => {
            e.isReadOnly || e.isDisabled || (d(t), E.commitValidation());
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
