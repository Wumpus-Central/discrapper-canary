n.d(t, { TX: () => o, yV: () => c });
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
function d(e) {
    let {
        inputRef: t,
        label: n,
        value: l,
        onChange: r,
        onKeyDown: a,
        maxLength: o,
        placeholder: d,
        trailing: c,
        error: u,
        helperText: g,
    } = e;
    return (0, i.jsx)(s.k, {
        label: n,
        hideLabel: !0,
        inputRef: t,
        value: l,
        onChange: r,
        onKeyDown: a,
        maxLength: o,
        placeholder: d,
        trailing: c,
        error: u,
        helperText: g,
    });
}
function c(e) {
    let {
            isEditing: t,
            committedValue: n,
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
            size: A = "default",
            maxLength: v,
            error: E,
            warning: S,
            trailing: C,
            className: b,
            disabled: T = !1,
            growWidth: N,
            removeVerticalPadding: y,
        } = e,
        k =
            (null != v && (t ? l : n).length > v ? a.intl.formatToPlainString(a.t.ICT5S6, { maxLength: v }) : void 0) ??
            E,
        w = "compact" === A ? { variant: "compact" } : { variant: "default", trailing: C };
    return (0, i.jsx)(r.ZL, {
        ...w,
        isEditing: t,
        preview: h,
        placeholder: p,
        editButtonRef: o,
        editButtonAriaLabel: I,
        onStartEditing: c,
        className: b,
        growWidth: N,
        removeVerticalPadding: y,
        wrapperRef: u,
        onBlur: g,
        onKeyDown: m,
        disabled: T,
        input: (0, i.jsx)(d, {
            inputRef: x,
            label: j,
            value: l,
            onChange: s,
            onKeyDown: f,
            maxLength: v,
            placeholder: p,
            trailing: C,
            error: k,
            helperText: S,
        }),
        previewErrorMessage: k,
        previewWarningMessage: S,
    });
}
