"use strict";
n.d(t, { h: () => a });
var r = n(339241),
    i = n(492313),
    s = n(64700);
function a(e = {}) {
    var t, n;
    let [o, l] = (0, i.P)(e.value, e.defaultValue || [], e.onChange),
        [u] = (0, s.useState)(o),
        c = !!e.isRequired && 0 === o.length,
        d = (0, s.useRef)(new Map()),
        _ = (0, r.KZ)({ ...e, value: o }),
        f = _.displayValidation.isInvalid;
    return {
        ..._,
        value: o,
        defaultValue: null != (t = e.defaultValue) ? t : u,
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
            t.isInvalid ? n.set(e, t) : n.delete(e), (d.current = n), _.updateValidation((0, r.cX)(...n.values()));
        },
        validationState: null != (n = e.validationState) ? n : f ? "invalid" : null,
        isInvalid: f,
        isRequired: c,
    };
}
