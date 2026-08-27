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
            maxLength: v,
            error: E,
            warning: C,
            trailing: S,
            className: b,
            disabled: y = !1,
            growWidth: T,
            removeVerticalPadding: N,
            textVariant: k,
            textColor: w,
        } = e,
        R =
            (null != v && (t ? l : n).length > v ? a.intl.formatToPlainString(a.t.ICT5S6, { maxLength: v }) : void 0) ??
            E,
        L = "compact" === A ? { variant: "compact" } : { variant: "default", trailing: S };
    return (0, i.jsx)(r.ZL, {
        ...L,
        isEditing: t,
        preview: h,
        placeholder: p,
        editButtonRef: o,
        editButtonAriaLabel: I,
        onStartEditing: d,
        className: b,
        growWidth: T,
        removeVerticalPadding: N,
        wrapperRef: u,
        onBlur: g,
        onKeyDown: m,
        disabled: y,
        textVariant: k,
        textColor: w,
        input: (0, i.jsx)(c, {
            inputRef: x,
            label: j,
            value: l,
            onChange: s,
            onKeyDown: f,
            maxLength: v,
            placeholder: p,
            trailing: S,
            error: R,
            helperText: C,
        }),
        previewErrorMessage: R,
        previewWarningMessage: C,
    });
}
