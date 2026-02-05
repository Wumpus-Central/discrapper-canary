"use strict";
n.d(t, { m: () => _ });
var r = n(146968),
    i = n(290424),
    a = n(297987),
    s = n(723906),
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
            orientation: m = "vertical",
            validationBehavior: g = "aria",
        } = e,
        { direction: E } = (0, d.Y)(),
        { isInvalid: A, validationErrors: I, validationDetails: T } = t.displayValidation,
        {
            labelProps: y,
            fieldProps: S,
            descriptionProps: v,
            errorMessageProps: C,
        } = (0, u.M)({ ...e, labelElementType: "span", isInvalid: t.isInvalid, errorMessage: e.errorMessage || I }),
        b = (0, i.$)(e, { labelable: !0 }),
        { focusWithinProps: N } = (0, c.R)({
            onBlurWithin(n) {
                var r;
                null == (r = e.onBlur) || r.call(e, n), t.selectedValue || t.setLastFocusedValue(null);
            },
            onFocusWithin: e.onFocus,
            onFocusWithinChange: e.onFocusChange,
        }),
        R = (e) => {
            let n, r;
            switch (e.key) {
                case "ArrowRight":
                    n = "rtl" === E && "vertical" !== m ? "prev" : "next";
                    break;
                case "ArrowLeft":
                    n = "rtl" === E && "vertical" !== m ? "next" : "prev";
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
                accept: (e) => e instanceof (0, a.mD)(e).HTMLInputElement && "radio" === e.type,
            });
            "next" === n
                ? (r = i.nextNode()) || ((i.currentNode = e.currentTarget), (r = i.firstChild()))
                : (r = i.previousNode()) || ((i.currentNode = e.currentTarget), (r = i.lastChild())),
                r && (r.focus(), t.setSelectedValue(r.value));
        },
        O = (0, s.Bi)(n);
    return (
        r.V.set(t, { name: O, form: _, descriptionId: v.id, errorMessageId: C.id, validationBehavior: g }),
        {
            radioGroupProps: (0, o.v)(b, {
                role: "radiogroup",
                onKeyDown: R,
                "aria-invalid": t.isInvalid || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-readonly": f || void 0,
                "aria-required": p || void 0,
                "aria-disabled": h || void 0,
                "aria-orientation": m,
                ...S,
                ...N,
            }),
            labelProps: y,
            descriptionProps: v,
            errorMessageProps: C,
            isInvalid: A,
            validationErrors: I,
            validationDetails: T,
        }
    );
}
