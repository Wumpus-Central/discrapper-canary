r.d(t, { X: () => l });
var n = r(256062),
    i = r(225801),
    o = r(241872),
    a = r(361854),
    s = r(582128);
function l(e, t, r) {
    let { validationBehavior: l, focus: u } = e;
    (0, a.N)(() => {
        if ("native" === l && r?.current && "setCustomValidity" in r.current && !r.current.disabled) {
            var e;
            let n,
                i = t.realtimeValidation.isInvalid
                    ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value."
                    : "";
            r.current.setCustomValidity(i),
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
    let c = (0, s.useRef)(!1),
        f = (0, o.J)(() => {
            c.current || t.resetValidation();
        }),
        d = (0, o.J)((e) => {
            t.displayValidation.isInvalid || t.commitValidation();
            let n = r?.current?.form;
            !e.defaultPrevented &&
                r &&
                n &&
                (function (e) {
                    for (let t = 0; t < e.elements.length; t++) {
                        let r = e.elements[t];
                        if (r.validity?.valid === !1) return r;
                    }
                    return null;
                })(n) === r.current &&
                (u ? u() : r.current?.focus(), (0, i.Cl)("keyboard")),
                e.preventDefault();
        }),
        p = (0, o.J)(() => {
            t.commitValidation();
        });
    (0, s.useEffect)(() => {
        let e = r?.current;
        if (!e) return;
        let t = e.form,
            i = t?.reset;
        return (
            t &&
                (t.reset = () => {
                    (c.current =
                        !window.event ||
                        ("message" === window.event.type && (0, n.wt)(window.event) instanceof MessagePort)),
                        i?.call(t),
                        (c.current = !1);
                }),
            e.addEventListener("invalid", d),
            e.addEventListener("change", p),
            t?.addEventListener("reset", f),
            () => {
                e.removeEventListener("invalid", d),
                    e.removeEventListener("change", p),
                    t?.removeEventListener("reset", f),
                    t && (t.reset = i);
            }
        );
    }, [r, l]);
}
