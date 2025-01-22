r.d(n, {
    w: function () {
        return l;
    }
});
var i = r(239700),
    a = r(192379);
let o = Math.round(10000000000 * Math.random()),
    s = 0;
function l(e) {
    let n = (0, a.useMemo)(() => e.name || `radio-group-${o}-${++s}`, [e.name]),
        [r, l] = (0, i.zk)(e.value, e.defaultValue, e.onChange),
        [u, c] = (0, a.useState)(null);
    return {
        name: n,
        selectedValue: r,
        setSelectedValue: (n) => {
            !e.isReadOnly && !e.isDisabled && l(n);
        },
        lastFocusedValue: u,
        setLastFocusedValue: c,
        isDisabled: e.isDisabled || !1,
        isReadOnly: e.isReadOnly || !1,
        isRequired: e.isRequired || !1,
        validationState: e.validationState || null,
        isInvalid: e.isInvalid || 'invalid' === e.validationState
    };
}
