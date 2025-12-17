n.d(t, {
    IZ: () => b,
    KX: () => g,
    Lh: () => h,
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
    p = n(746367),
    _ = n(218769);
function m(e) {
    return e && e.__esModule ? e.default : e;
}
let h = new WeakMap(),
    g = "__role_" + Date.now(),
    E = "__focusManager_" + Date.now();
function b(e, t, n) {
    var b;
    let y,
        { isInvalid: O, validationErrors: v, validationDetails: S } = t.displayValidation,
        {
            labelProps: I,
            fieldProps: T,
            descriptionProps: C,
            errorMessageProps: A,
        } = (0, d.U)({
            ...e,
            labelElementType: "span",
            isInvalid: O,
            errorMessage: e.errorMessage || v,
        }),
        N = (0, u.useRef)(null),
        { focusWithinProps: P } = (0, f.L)({
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
        R = (0, _.q)(m(r.Z), "@react-aria/datepicker"),
        w = "hour" === t.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription",
        D = "hour" === t.maxGranularity ? "time" : "date",
        x = t.value ? R.format(w, { [D]: t.formatValue({ month: "long" }) }) : "",
        L = (0, o.P)(x),
        j =
            "presentation" === e[g]
                ? T["aria-describedby"]
                : [L["aria-describedby"], T["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        M = e[E],
        k = (0, u.useMemo)(() => M || (0, a.E7)(n), [M, n]),
        U = (0, i.H)(t, n, "presentation" === e[g]);
    h.set(t, {
        ariaLabel: e["aria-label"],
        ariaLabelledBy: [I.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
        ariaDescribedBy: j,
        focusManager: k,
    });
    let G = (0, u.useRef)(e.autoFocus);
    (y =
        "presentation" === e[g]
            ? { role: "presentation" }
            : (0, s.d)(T, {
                  role: "group",
                  "aria-disabled": e.isDisabled || void 0,
                  "aria-describedby": j,
              })),
        (0, u.useEffect)(() => {
            G.current && k.focusFirst(), (G.current = !1);
        }, [k]),
        (0, l.y)(e.inputRef, t.defaultValue, t.setValue),
        (0, p.Q)(
            {
                ...e,
                focus() {
                    k.focusFirst();
                },
            },
            t,
            e.inputRef,
        );
    let Z = {
        type: "hidden",
        name: e.name,
        form: e.form,
        value: (null == (b = t.value) ? void 0 : b.toString()) || "",
        disabled: e.isDisabled,
    };
    "native" === e.validationBehavior &&
        ((Z.type = "text"), (Z.hidden = !0), (Z.required = e.isRequired), (Z.onChange = () => {}));
    let F = (0, c.z)(e);
    return {
        labelProps: {
            ...I,
            onClick: () => {
                k.focusFirst();
            },
        },
        fieldProps: (0, s.d)(F, y, U, P, {
            onKeyDown(t) {
                e.onKeyDown && e.onKeyDown(t);
            },
            onKeyUp(t) {
                e.onKeyUp && e.onKeyUp(t);
            },
            style: { unicodeBidi: "isolate" },
        }),
        inputProps: Z,
        descriptionProps: C,
        errorMessageProps: A,
        isInvalid: O,
        validationErrors: v,
        validationDetails: S,
    };
}
