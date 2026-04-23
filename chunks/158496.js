"use strict";
n.d(t, { m: () => _ });
var r = n(146968),
    i = n(290424),
    s = n(297987),
    a = n(723906),
    o = n(803082),
    l = n(13163),
    u = n(447432),
    c = n(744493),
    d = n(853590);
function _(e, t) {
    let {
            name: n,
            form: _,
            isReadOnly: f,
            isRequired: p,
            isDisabled: h,
            orientation: E = "vertical",
            validationBehavior: m = "aria",
        } = e,
        { direction: g } = (0, d.Y)(),
        { isInvalid: A, validationErrors: I, validationDetails: T } = t.displayValidation,
        {
            labelProps: S,
            fieldProps: y,
            descriptionProps: N,
            errorMessageProps: v,
        } = (0, u.M)({ ...e, labelElementType: "span", isInvalid: t.isInvalid, errorMessage: e.errorMessage || I }),
        C = (0, i.$)(e, { labelable: !0 }),
        { focusWithinProps: O } = (0, c.R)({
            onBlurWithin(n) {
                var r;
                null == (r = e.onBlur) || r.call(e, n), t.selectedValue || t.setLastFocusedValue(null);
            },
            onFocusWithin: e.onFocus,
            onFocusWithinChange: e.onFocusChange,
        }),
        R = (0, a.Bi)(n);
    return (
        r.V.set(t, { name: R, form: _, descriptionId: N.id, errorMessageId: v.id, validationBehavior: m }),
        {
            radioGroupProps: (0, o.v)(C, {
                role: "radiogroup",
                onKeyDown: (e) => {
                    let n, r;
                    switch (e.key) {
                        case "ArrowRight":
                            n = "rtl" === g && "vertical" !== E ? "prev" : "next";
                            break;
                        case "ArrowLeft":
                            n = "rtl" === g && "vertical" !== E ? "next" : "prev";
                            break;
                        case "ArrowDown":
                            n = "next";
                            break;
                        case "ArrowUp":
                            n = "prev";
                            break;
                        default:
                            return;
                    }
                    e.preventDefault();
                    let i = (0, l.N$)(e.currentTarget, {
                        from: e.target,
                        accept: (e) => e instanceof (0, s.mD)(e).HTMLInputElement && "radio" === e.type,
                    });
                    "next" === n
                        ? (r = i.nextNode()) || ((i.currentNode = e.currentTarget), (r = i.firstChild()))
                        : (r = i.previousNode()) || ((i.currentNode = e.currentTarget), (r = i.lastChild())),
                        r && (r.focus(), t.setSelectedValue(r.value));
                },
                "aria-invalid": t.isInvalid || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-readonly": f || void 0,
                "aria-required": p || void 0,
                "aria-disabled": h || void 0,
                "aria-orientation": E,
                ...y,
                ...O,
            }),
            labelProps: S,
            descriptionProps: N,
            errorMessageProps: v,
            isInvalid: A,
            validationErrors: I,
            validationDetails: T,
        }
    );
}
