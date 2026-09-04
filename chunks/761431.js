n.d(t, { T: () => o, y: () => c });
var i = n(477900),
    l = n(582128),
    s = n(103557),
    r = n(95477),
    a = n(231088);
function o(e) {
    let { isEditing: t, inputRef: n, ...i } = (0, a.Ww)(e);
    return (
        l.useEffect(() => {
            t && null != n.current && n.current.setSelectionRange(n.current.value.length, n.current.value.length);
        }, [t, n]),
        { isEditing: t, inputRef: n, ...i }
    );
}
function c(e) {
    let {
            isEditing: t,
            committedValue: n,
            editedValue: l,
            setEditedValue: o,
            editButtonRef: c,
            handleStartEditing: d,
            wrapperRef: u,
            onBlur: g,
            onContainerKeyDown: m,
            inputRef: x,
            onInputKeyDown: f,
            preview: h,
            placeholder: I,
            editButtonAriaLabel: p,
            label: j,
            variant: A = "default",
            rows: E,
            maxRows: v,
            maxLength: S,
            error: C,
            warning: b,
            trailing: k,
            className: T,
            disabled: y = !1,
            growWidth: N,
            removeVerticalPadding: R,
            textVariant: w,
            textColor: _,
            spellCheck: L,
        } = e,
        O = (0, a.n4)(t ? l : n, S),
        P = t && l !== n,
        D = O ?? (P ? void 0 : C),
        M = "default" === A ? { variant: "default", trailing: k } : { variant: A },
        G = {
            label: j,
            hideLabel: !0,
            inputRef: x,
            value: l,
            onChange: o,
            onKeyDown: f,
            maxLength: S,
            placeholder: I,
            error: D,
            helperText: b,
            disabled: y,
            spellCheck: L,
        };
    return (0, i.jsx)(a.ZL, {
        ...M,
        isEditing: t,
        preview: h,
        placeholder: I,
        editButtonRef: c,
        editButtonAriaLabel: p,
        onStartEditing: d,
        className: T,
        growWidth: N,
        removeVerticalPadding: R,
        wrapperRef: u,
        onBlur: g,
        onKeyDown: m,
        disabled: y,
        textVariant: w,
        textColor: _,
        input:
            "multiline" === A
                ? (0, i.jsx)(s.f, { ...G, rows: E, maxRows: v, autosize: !0 })
                : (0, i.jsx)(r.k, { ...G, trailing: k }),
        previewErrorMessage: D,
        previewWarningMessage: b,
    });
}
