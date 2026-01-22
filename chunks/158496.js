n.d(t, { m: () => f });
var r = n(146968),
    i = n(290424),
    a = n(297987),
    s = n(723906),
    o = n(803082),
    l = n(13163),
    c = n(447432),
    u = n(744493),
    d = n(853590);
function f(e, t) {
    let {
            name: n,
            form: f,
            isReadOnly: p,
            isRequired: _,
            isDisabled: h,
            orientation: m = "vertical",
            validationBehavior: g = "aria",
        } = e,
        { direction: E } = (0, d.Y)(),
        { isInvalid: b, validationErrors: y, validationDetails: O } = t.displayValidation,
        {
            labelProps: A,
            fieldProps: v,
            descriptionProps: S,
            errorMessageProps: I,
        } = (0, c.M)({
            ...e,
            labelElementType: "span",
            isInvalid: t.isInvalid,
            errorMessage: e.errorMessage || y,
        }),
        T = (0, i.$)(e, { labelable: !0 }),
        { focusWithinProps: C } = (0, u.R)({
            onBlurWithin(n) {
                var r;
                null == (r = e.onBlur) || r.call(e, n), t.selectedValue || t.setLastFocusedValue(null);
            },
            onFocusWithin: e.onFocus,
            onFocusWithinChange: e.onFocusChange,
        }),
        N = (e) => {
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
        R = (0, s.Bi)(n);
    return (
        r.V.set(t, {
            name: R,
            form: f,
            descriptionId: S.id,
            errorMessageId: I.id,
            validationBehavior: g,
        }),
        {
            radioGroupProps: (0, o.v)(T, {
                role: "radiogroup",
                onKeyDown: N,
                "aria-invalid": t.isInvalid || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-readonly": p || void 0,
                "aria-required": _ || void 0,
                "aria-disabled": h || void 0,
                "aria-orientation": m,
                ...v,
                ...C,
            }),
            labelProps: A,
            descriptionProps: S,
            errorMessageProps: I,
            isInvalid: b,
            validationErrors: y,
            validationDetails: O,
        }
    );
}
