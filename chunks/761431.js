n.d(t, { T: () => o, y: () => d });
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
function d(e) {
    let {
            isEditing: t,
            committedValue: n,
            editedValue: l,
            setEditedValue: o,
            editButtonRef: d,
            handleStartEditing: u,
            wrapperRef: c,
            onBlur: g,
            onContainerKeyDown: m,
            inputRef: f,
            onInputKeyDown: x,
            preview: h,
            placeholder: I,
            editButtonAriaLabel: p,
            label: A,
            variant: j = "default",
            rows: E,
            maxRows: v,
            maxLength: S,
            error: C,
            warning: b,
            trailing: k,
            className: T,
            disabled: N = !1,
            growWidth: y,
            removeVerticalPadding: w,
            textVariant: R,
            textColor: _,
            spellCheck: L,
        } = e,
        O = (0, a.n4)(t ? l : n, S),
        P = t && l !== n,
        D = O ?? (P ? void 0 : C),
        M = "default" === j ? { variant: "default", trailing: k } : { variant: j },
        G = {
            label: A,
            hideLabel: !0,
            inputRef: f,
            value: l,
            onChange: o,
            onKeyDown: x,
            maxLength: S,
            placeholder: I,
            error: D,
            helperText: b,
            disabled: N,
            spellCheck: L,
        };
    return (0, i.jsx)(a.ZL, {
        ...M,
        isEditing: t,
        preview: h,
        placeholder: I,
        editButtonRef: d,
        editButtonAriaLabel: p,
        onStartEditing: u,
        className: T,
        growWidth: y,
        removeVerticalPadding: w,
        wrapperRef: c,
        onBlur: g,
        onKeyDown: m,
        disabled: N,
        textVariant: R,
        textColor: _,
        input:
            "multiline" === j
                ? (0, i.jsx)(s.f, { ...G, rows: E, maxRows: v, autosize: !0 })
                : (0, i.jsx)(r.k, { ...G, trailing: k }),
        previewErrorMessage: D,
        previewWarningMessage: b,
    });
}
