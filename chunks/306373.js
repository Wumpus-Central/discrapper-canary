n.d(t, { a: () => f });
var r = n(195620),
    i = n(880016),
    a = n(477232),
    o = n(752689),
    s = n(158821),
    l = n(605294),
    c = n(426902),
    u = n(921448),
    d = n(227399);
function f(e, t) {
    let {
            name: n,
            form: f,
            isReadOnly: p,
            isRequired: _,
            isDisabled: m,
            orientation: h = "vertical",
            validationBehavior: g = "aria",
        } = e,
        { direction: E } = (0, d.j)(),
        { isInvalid: b, validationErrors: y, validationDetails: O } = t.displayValidation,
        {
            labelProps: v,
            fieldProps: S,
            descriptionProps: I,
            errorMessageProps: T,
        } = (0, c.U)({
            ...e,
            labelElementType: "span",
            isInvalid: t.isInvalid,
            errorMessage: e.errorMessage || y,
        }),
        C = (0, i.z)(e, { labelable: !0 }),
        { focusWithinProps: A } = (0, u.L)({
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
                    n = "rtl" === E && "vertical" !== h ? "prev" : "next";
                    break;
                case "ArrowLeft":
                    n = "rtl" === E && "vertical" !== h ? "next" : "prev";
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
            let i = (0, l.QL)(e.currentTarget, {
                from: e.target,
                accept: (e) => e instanceof (0, a.kR)(e).HTMLInputElement && "radio" === e.type,
            });
            "next" === n
                ? (r = i.nextNode()) || ((i.currentNode = e.currentTarget), (r = i.firstChild()))
                : (r = i.previousNode()) || ((i.currentNode = e.currentTarget), (r = i.lastChild())),
                r && (r.focus(), t.setSelectedValue(r.value));
        },
        P = (0, o.Me)(n);
    return (
        r.H.set(t, {
            name: P,
            form: f,
            descriptionId: I.id,
            errorMessageId: T.id,
            validationBehavior: g,
        }),
        {
            radioGroupProps: (0, s.d)(C, {
                role: "radiogroup",
                onKeyDown: N,
                "aria-invalid": t.isInvalid || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-readonly": p || void 0,
                "aria-required": _ || void 0,
                "aria-disabled": m || void 0,
                "aria-orientation": h,
                ...S,
                ...A,
            }),
            labelProps: v,
            descriptionProps: I,
            errorMessageProps: T,
            isInvalid: b,
            validationErrors: y,
            validationDetails: O,
        }
    );
}
