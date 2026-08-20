i.d(t, { TX: () => o, yV: () => c });
var n = i(477900),
    l = i(582128),
    s = i(95477),
    r = i(231088),
    a = i(375708);
function o(e) {
    let { isEditing: t, inputRef: i, ...n } = (0, r.Ww)(e);
    return (
        l.useEffect(() => {
            t && null != i.current && i.current.setSelectionRange(i.current.value.length, i.current.value.length);
        }, [t, i]),
        { isEditing: t, inputRef: i, ...n }
    );
}
function d(e) {
    let {
        inputRef: t,
        label: i,
        value: l,
        onChange: r,
        onKeyDown: a,
        onBlur: o,
        maxLength: d,
        placeholder: c,
        trailing: u,
        error: g,
        helperText: m,
    } = e;
    return (0, n.jsx)(s.k, {
        label: i,
        hideLabel: !0,
        inputRef: t,
        value: l,
        onChange: r,
        onBlur: o,
        onKeyDown: a,
        maxLength: d,
        placeholder: c,
        trailing: u,
        error: g,
        helperText: m,
    });
}
function c(e) {
    let {
            isEditing: t,
            committedValue: i,
            editedValue: l,
            setEditedValue: s,
            editButtonRef: o,
            handleStartEditing: c,
            wrapperRef: u,
            onBlur: g,
            onContainerKeyDown: m,
            inputRef: x,
            onInputKeyDown: f,
            preview: h,
            placeholder: p,
            editButtonAriaLabel: I,
            label: j,
            size: v = "default",
            maxLength: A,
            error: E,
            warning: S,
            trailing: C,
            className: b,
            disabled: N = !1,
            growWidth: T,
            removeVerticalPadding: w,
        } = e,
        y =
            (null != A && (t ? l : i).length > A ? a.intl.formatToPlainString(a.t.ICT5S6, { maxLength: A }) : void 0) ??
            E,
        k = "compact" === v ? { variant: "compact" } : { variant: "default", trailing: C };
    return (0, n.jsx)(r.ZL, {
        ...k,
        isEditing: t,
        preview: h,
        placeholder: p,
        editButtonRef: o,
        editButtonAriaLabel: I,
        onStartEditing: c,
        className: b,
        growWidth: T,
        removeVerticalPadding: w,
        wrapperRef: u,
        onBlur: g,
        onKeyDown: m,
        disabled: N,
        input: (0, n.jsx)(d, {
            inputRef: x,
            label: j,
            value: l,
            onChange: s,
            onKeyDown: f,
            maxLength: A,
            placeholder: p,
            trailing: C,
            error: y,
            helperText: S,
        }),
        previewErrorMessage: y,
        previewWarningMessage: S,
    });
}
