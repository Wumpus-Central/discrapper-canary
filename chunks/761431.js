n.d(t, { TX: () => o, yV: () => d });
var i = n(477900),
    l = n(582128),
    s = n(95477),
    r = n(231088),
    a = n(375708);
function o(e) {
    let { isEditing: t, inputRef: n, ...i } = (0, r.Ww)(e);
    return (
        l.useEffect(() => {
            t && null != n.current && n.current.setSelectionRange(n.current.value.length, n.current.value.length);
        }, [t, n]),
        { isEditing: t, inputRef: n, ...i }
    );
}
function c(e) {
    let {
        inputRef: t,
        label: n,
        value: l,
        onChange: r,
        onKeyDown: a,
        maxLength: o,
        placeholder: c,
        trailing: d,
        error: u,
        helperText: g,
        spellCheck: m,
    } = e;
    return (0, i.jsx)(s.k, {
        label: n,
        hideLabel: !0,
        inputRef: t,
        value: l,
        onChange: r,
        onKeyDown: a,
        maxLength: o,
        placeholder: c,
        trailing: d,
        error: u,
        helperText: g,
        spellCheck: m,
    });
}
function d(e) {
    let {
            isEditing: t,
            committedValue: n,
            editedValue: l,
            setEditedValue: s,
            editButtonRef: o,
            handleStartEditing: d,
            wrapperRef: u,
            onBlur: g,
            onContainerKeyDown: m,
            inputRef: x,
            onInputKeyDown: f,
            preview: h,
            placeholder: p,
            editButtonAriaLabel: I,
            label: j,
            size: A = "default",
            maxLength: E,
            error: v,
            warning: C,
            trailing: S,
            className: b,
            disabled: k = !1,
            growWidth: T,
            removeVerticalPadding: y,
            textVariant: N,
            textColor: R,
            spellCheck: w,
        } = e,
        L =
            (null != E && (t ? l : n).length > E ? a.intl.formatToPlainString(a.t.ICT5S6, { maxLength: E }) : void 0) ??
            v,
        _ = "compact" === A ? { variant: "compact" } : { variant: "default", trailing: S };
    return (0, i.jsx)(r.ZL, {
        ..._,
        isEditing: t,
        preview: h,
        placeholder: p,
        editButtonRef: o,
        editButtonAriaLabel: I,
        onStartEditing: d,
        className: b,
        growWidth: T,
        removeVerticalPadding: y,
        wrapperRef: u,
        onBlur: g,
        onKeyDown: m,
        disabled: k,
        textVariant: N,
        textColor: R,
        input: (0, i.jsx)(c, {
            inputRef: x,
            label: j,
            value: l,
            onChange: s,
            onKeyDown: f,
            maxLength: E,
            placeholder: p,
            trailing: S,
            error: L,
            helperText: C,
            spellCheck: w,
        }),
        previewErrorMessage: L,
        previewWarningMessage: C,
    });
}
