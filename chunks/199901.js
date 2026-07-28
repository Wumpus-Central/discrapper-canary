"use strict";
n.d(t, { X: () => s });
var r = n(766382),
    i = n(582128),
    a = n(576024),
    o = n(654978);
function s(e, t, n) {
    let { validationBehavior: s, focus: l } = e;
    (0, a.N)(() => {
        if ("native" === s && (null == n ? void 0 : n.current) && !n.current.disabled) {
            var e;
            let r,
                i = t.realtimeValidation.isInvalid
                    ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value."
                    : "";
            n.current.setCustomValidity(i),
                n.current.hasAttribute("title") || (n.current.title = ""),
                t.realtimeValidation.isInvalid ||
                    t.updateValidation({
                        isInvalid: !(e = n.current).validity.valid,
                        validationDetails: {
                            badInput: (r = e.validity).badInput,
                            customError: r.customError,
                            patternMismatch: r.patternMismatch,
                            rangeOverflow: r.rangeOverflow,
                            rangeUnderflow: r.rangeUnderflow,
                            stepMismatch: r.stepMismatch,
                            tooLong: r.tooLong,
                            tooShort: r.tooShort,
                            typeMismatch: r.typeMismatch,
                            valueMissing: r.valueMissing,
                            valid: r.valid,
                        },
                        validationErrors: e.validationMessage ? [e.validationMessage] : [],
                    });
        }
    });
    let u = (0, i.useRef)(!1),
        c = (0, o.J)(() => {
            u.current || t.resetValidation();
        }),
        d = (0, o.J)((e) => {
            var i, a;
            t.displayValidation.isInvalid || t.commitValidation();
            let o = null == n || null == (i = n.current) ? void 0 : i.form;
            !e.defaultPrevented &&
                n &&
                o &&
                (function (e) {
                    for (let t = 0; t < e.elements.length; t++) {
                        let n = e.elements[t];
                        if (!n.validity.valid) return n;
                    }
                    return null;
                })(o) === n.current &&
                (l ? l() : null == (a = n.current) || a.focus(), (0, r.Cl)("keyboard")),
                e.preventDefault();
        }),
        f = (0, o.J)(() => {
            t.commitValidation();
        });
    (0, i.useEffect)(() => {
        let e = null == n ? void 0 : n.current;
        if (!e) return;
        let t = e.form,
            r = null == t ? void 0 : t.reset;
        return (
            t &&
                (t.reset = () => {
                    (u.current =
                        !window.event ||
                        ("message" === window.event.type && window.event.target instanceof MessagePort)),
                        null == r || r.call(t),
                        (u.current = !1);
                }),
            e.addEventListener("invalid", d),
            e.addEventListener("change", f),
            null == t || t.addEventListener("reset", c),
            () => {
                e.removeEventListener("invalid", d),
                    e.removeEventListener("change", f),
                    null == t || t.removeEventListener("reset", c),
                    t && (t.reset = r);
            }
        );
    }, [n, d, f, c, s]);
}
