"use strict";
r.d(t, { X: () => s });
var n = r(766382),
    o = r(582128),
    i = r(576024),
    a = r(654978);
function s(e, t, r) {
    let { validationBehavior: s, focus: l } = e;
    (0, i.N)(() => {
        if ("native" === s && (null == r ? void 0 : r.current) && !r.current.disabled) {
            var e;
            let n,
                o = t.realtimeValidation.isInvalid
                    ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value."
                    : "";
            r.current.setCustomValidity(o),
                r.current.hasAttribute("title") || (r.current.title = ""),
                t.realtimeValidation.isInvalid ||
                    t.updateValidation({
                        isInvalid: !(e = r.current).validity.valid,
                        validationDetails: {
                            badInput: (n = e.validity).badInput,
                            customError: n.customError,
                            patternMismatch: n.patternMismatch,
                            rangeOverflow: n.rangeOverflow,
                            rangeUnderflow: n.rangeUnderflow,
                            stepMismatch: n.stepMismatch,
                            tooLong: n.tooLong,
                            tooShort: n.tooShort,
                            typeMismatch: n.typeMismatch,
                            valueMissing: n.valueMissing,
                            valid: n.valid,
                        },
                        validationErrors: e.validationMessage ? [e.validationMessage] : [],
                    });
        }
    });
    let u = (0, o.useRef)(!1),
        c = (0, a.J)(() => {
            u.current || t.resetValidation();
        }),
        f = (0, a.J)((e) => {
            var o, i;
            t.displayValidation.isInvalid || t.commitValidation();
            let a = null == r || null == (o = r.current) ? void 0 : o.form;
            !e.defaultPrevented &&
                r &&
                a &&
                (function (e) {
                    for (let t = 0; t < e.elements.length; t++) {
                        let r = e.elements[t];
                        if (!r.validity.valid) return r;
                    }
                    return null;
                })(a) === r.current &&
                (l ? l() : null == (i = r.current) || i.focus(), (0, n.Cl)("keyboard")),
                e.preventDefault();
        }),
        p = (0, a.J)(() => {
            t.commitValidation();
        });
    (0, o.useEffect)(() => {
        let e = null == r ? void 0 : r.current;
        if (!e) return;
        let t = e.form,
            n = null == t ? void 0 : t.reset;
        return (
            t &&
                (t.reset = () => {
                    (u.current =
                        !window.event ||
                        ("message" === window.event.type && window.event.target instanceof MessagePort)),
                        null == n || n.call(t),
                        (u.current = !1);
                }),
            e.addEventListener("invalid", f),
            e.addEventListener("change", p),
            null == t || t.addEventListener("reset", c),
            () => {
                e.removeEventListener("invalid", f),
                    e.removeEventListener("change", p),
                    null == t || t.removeEventListener("reset", c),
                    t && (t.reset = n);
            }
        );
    }, [r, f, p, c, s]);
}
