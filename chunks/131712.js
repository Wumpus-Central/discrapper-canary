n.d(t, { Z: () => l });
var r = n(339241),
    i = n(492313),
    a = n(64700);
let s = Math.round(10000000000 * Math.random()),
    o = 0;
function l(e) {
    var t, n;
    let l = (0, a.useMemo)(() => e.name || `radio-group-${s}-${++o}`, [e.name]),
        [c, u] = (0, i.P)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
        [d] = (0, a.useState)(c),
        [f, p] = (0, a.useState)(null),
        _ = (0, r.KZ)({
            ...e,
            value: c,
        }),
        h = (t) => {
            e.isReadOnly || e.isDisabled || (u(t), _.commitValidation());
        },
        m = _.displayValidation.isInvalid;
    return {
        ..._,
        name: l,
        selectedValue: c,
        defaultSelectedValue: void 0 !== e.value ? d : null != (n = e.defaultValue) ? n : null,
        setSelectedValue: h,
        lastFocusedValue: f,
        setLastFocusedValue: p,
        isDisabled: e.isDisabled || !1,
        isReadOnly: e.isReadOnly || !1,
        isRequired: e.isRequired || !1,
        validationState: e.validationState || (m ? "invalid" : null),
        isInvalid: m,
    };
}
