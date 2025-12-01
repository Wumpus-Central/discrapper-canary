n.d(t, { w: () => l });
var r = n(134915),
    i = n(386239),
    a = n(473749);
let o = Math.round(10000000000 * Math.random()),
    s = 0;
function l(e) {
    var t, n;
    let l = (0, a.useMemo)(() => e.name || `radio-group-${o}-${++s}`, [e.name]),
        [c, u] = (0, i.z)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
        [d] = (0, a.useState)(c),
        [f, p] = (0, a.useState)(null),
        _ = (0, r.Q3)({
            ...e,
            value: c,
        }),
        m = (t) => {
            e.isReadOnly || e.isDisabled || (u(t), _.commitValidation());
        },
        h = _.displayValidation.isInvalid;
    return {
        ..._,
        name: l,
        selectedValue: c,
        defaultSelectedValue: void 0 !== e.value ? d : null != (n = e.defaultValue) ? n : null,
        setSelectedValue: m,
        lastFocusedValue: f,
        setLastFocusedValue: p,
        isDisabled: e.isDisabled || !1,
        isReadOnly: e.isReadOnly || !1,
        isRequired: e.isRequired || !1,
        validationState: e.validationState || (h ? "invalid" : null),
        isInvalid: h,
    };
}
