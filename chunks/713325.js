n.d(t, { a: () => f });
var r = n(45821),
    i = n(436773),
    a = n(278769),
    o = n(39807),
    s = n(933492),
    l = n(306024),
    c = n(893600),
    u = n(71734),
    d = n(960095);
function f(e, t) {
    let {
            name: n,
            form: f,
            isReadOnly: _,
            isRequired: p,
            isDisabled: h,
            orientation: m = "vertical",
            validationBehavior: g = "aria",
        } = e,
        { direction: E } = (0, d.j)(),
        { isInvalid: b, validationErrors: y, validationDetails: O } = t.displayValidation,
        {
            labelProps: v,
            fieldProps: I,
            descriptionProps: T,
            errorMessageProps: S,
        } = (0, c.U)({
            ...e,
            labelElementType: "span",
            isInvalid: t.isInvalid,
            errorMessage: e.errorMessage || y,
        }),
        A = (0, i.z)(e, { labelable: !0 }),
        { focusWithinProps: C } = (0, u.L)({
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
            let i = (0, l.QL)(e.currentTarget, {
                from: e.target,
                accept: (e) => e instanceof (0, a.kR)(e).HTMLInputElement && "radio" === e.type,
            });
            "next" === n
                ? (r = i.nextNode()) || ((i.currentNode = e.currentTarget), (r = i.firstChild()))
                : (r = i.previousNode()) || ((i.currentNode = e.currentTarget), (r = i.lastChild())),
                r && (r.focus(), t.setSelectedValue(r.value));
        },
        R = (0, o.Me)(n);
    return (
        r.H.set(t, {
            name: R,
            form: f,
            descriptionId: T.id,
            errorMessageId: S.id,
            validationBehavior: g,
        }),
        {
            radioGroupProps: (0, s.d)(A, {
                role: "radiogroup",
                onKeyDown: N,
                "aria-invalid": t.isInvalid || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-readonly": _ || void 0,
                "aria-required": p || void 0,
                "aria-disabled": h || void 0,
                "aria-orientation": m,
                ...I,
                ...C,
            }),
            labelProps: v,
            descriptionProps: T,
            errorMessageProps: S,
            isInvalid: b,
            validationErrors: y,
            validationDetails: O,
        }
    );
}
