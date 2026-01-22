n.d(t, { h: () => s });
var r = n(339241),
    i = n(492313),
    a = n(64700);
function s(e = {}) {
    var t, n;
    let [o, l] = (0, i.P)(e.value, e.defaultValue || [], e.onChange),
        [c] = (0, a.useState)(o),
        u = !!e.isRequired && 0 === o.length,
        d = (0, a.useRef)(new Map()),
        f = (0, r.KZ)({
            ...e,
            value: o,
        }),
        p = f.displayValidation.isInvalid;
    return {
        ...f,
        value: o,
        defaultValue: null != (t = e.defaultValue) ? t : c,
        setValue(t) {
            e.isReadOnly || e.isDisabled || l(t);
        },
        isDisabled: e.isDisabled || !1,
        isReadOnly: e.isReadOnly || !1,
        isSelected: (e) => o.includes(e),
        addValue(t) {
            e.isReadOnly || e.isDisabled || o.includes(t) || l((o = o.concat(t)));
        },
        removeValue(t) {
            e.isReadOnly || e.isDisabled || (o.includes(t) && l(o.filter((e) => e !== t)));
        },
        toggleValue(t) {
            e.isReadOnly || e.isDisabled || (o.includes(t) ? l(o.filter((e) => e !== t)) : l(o.concat(t)));
        },
        setInvalid(e, t) {
            let n = new Map(d.current);
            t.isInvalid ? n.set(e, t) : n.delete(e), (d.current = n), f.updateValidation((0, r.cX)(...n.values()));
        },
        validationState: null != (n = e.validationState) ? n : p ? "invalid" : null,
        isInvalid: p,
        isRequired: u,
    };
}
