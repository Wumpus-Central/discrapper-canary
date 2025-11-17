n.d(t, {
    IZ: () => b,
    KX: () => g,
    Lh: () => m,
});
var r = n(925521),
    i = n(380869),
    a = n(605294),
    o = n(645537),
    s = n(158821),
    l = n(179549),
    c = n(880016),
    u = n(473749),
    d = n(426902),
    f = n(921448),
    _ = n(746367),
    p = n(218769);
function h(e) {
    return e && e.__esModule ? e.default : e;
}
let m = new WeakMap(),
    g = "__role_" + Date.now(),
    E = "__focusManager_" + Date.now();
function b(e, t, n) {
    var b;
    let y,
        { isInvalid: O, validationErrors: v, validationDetails: I } = t.displayValidation,
        {
            labelProps: T,
            fieldProps: S,
            descriptionProps: A,
            errorMessageProps: C,
        } = (0, d.U)({
            ...e,
            labelElementType: "span",
            isInvalid: O,
            errorMessage: e.errorMessage || v,
        }),
        N = (0, u.useRef)(null),
        { focusWithinProps: R } = (0, f.L)({
            ...e,
            onFocusWithin(n) {
                var r;
                (N.current = t.value), null == (r = e.onFocus) || r.call(e, n);
            },
            onBlurWithin: (n) => {
                var r;
                t.confirmPlaceholder(),
                    t.value !== N.current && t.commitValidation(),
                    null == (r = e.onBlur) || r.call(e, n);
            },
            onFocusWithinChange: e.onFocusChange,
        }),
        P = (0, p.q)(h(r.Z), "@react-aria/datepicker"),
        D = "hour" === t.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription",
        w = "hour" === t.maxGranularity ? "time" : "date",
        x = t.value ? P.format(D, { [w]: t.formatValue({ month: "long" }) }) : "",
        L = (0, o.P)(x),
        M =
            "presentation" === e[g]
                ? S["aria-describedby"]
                : [L["aria-describedby"], S["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        k = e[E],
        j = (0, u.useMemo)(() => k || (0, a.E7)(n), [k, n]),
        U = (0, i.H)(t, n, "presentation" === e[g]);
    m.set(t, {
        ariaLabel: e["aria-label"],
        ariaLabelledBy: [T.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
        ariaDescribedBy: M,
        focusManager: j,
    });
    let G = (0, u.useRef)(e.autoFocus);
    (y =
        "presentation" === e[g]
            ? { role: "presentation" }
            : (0, s.d)(S, {
                  role: "group",
                  "aria-disabled": e.isDisabled || void 0,
                  "aria-describedby": M,
              })),
        (0, u.useEffect)(() => {
            G.current && j.focusFirst(), (G.current = !1);
        }, [j]),
        (0, l.y)(e.inputRef, t.defaultValue, t.setValue),
        (0, _.Q)(
            {
                ...e,
                focus() {
                    j.focusFirst();
                },
            },
            t,
            e.inputRef,
        );
    let B = {
        type: "hidden",
        name: e.name,
        form: e.form,
        value: (null == (b = t.value) ? void 0 : b.toString()) || "",
        disabled: e.isDisabled,
    };
    "native" === e.validationBehavior &&
        ((B.type = "text"), (B.hidden = !0), (B.required = e.isRequired), (B.onChange = () => {}));
    let Z = (0, c.z)(e);
    return {
        labelProps: {
            ...T,
            onClick: () => {
                j.focusFirst();
            },
        },
        fieldProps: (0, s.d)(Z, y, U, R, {
            onKeyDown(t) {
                e.onKeyDown && e.onKeyDown(t);
            },
            onKeyUp(t) {
                e.onKeyUp && e.onKeyUp(t);
            },
            style: { unicodeBidi: "isolate" },
        }),
        inputProps: B,
        descriptionProps: A,
        errorMessageProps: C,
        isInvalid: O,
        validationErrors: v,
        validationDetails: I,
    };
}
