r.d(t, { f: () => m });
var a = r(477900),
    o = r(582128),
    l = r(503698),
    n = r.n(l),
    i = r(452027),
    d = r(281595),
    u = r(205086),
    s = r(862301),
    c = r(259678),
    g = r(668639),
    b = r(15626),
    p = r(189812),
    h = r(411934),
    x = r(521931);
function m(e) {
    let {
            value: t,
            placeholder: r = "",
            autoFocus: l = !1,
            autosize: g = !1,
            minLength: b,
            maxLength: p,
            error: m,
            defaultDirty: f,
            showCharacterCount: v,
            showRemainingCharacterCount: w = !0,
            rows: j = 3,
            inputRef: z,
            ...C
        } = e,
        { fieldProps: V, props: M } = (0, i.n)(C),
        { disabled: P } = V,
        A = (0, d.Y)({ validateOn: "change", error: m, value: t, minLength: b, maxLength: p, defaultDirty: f }),
        F = o.useMemo(() => {
            if (!v || null == p) return 10;
            let e = `${p}`.length;
            return 7.23 * (e += `${p} / `.length) + 10;
        }, [p, v]),
        k = v ? (0, a.jsx)(u.n, { value: t, maxLength: w && null != p ? p : void 0 }) : null;
    return (0, a.jsx)(i.D, {
        ...V,
        trailingAuxiliaryContent: k,
        errorMessage: A.hasError ? (A.errorMessage ?? void 0) : void 0,
        children: (0, a.jsx)(s.F, {
            validation: A,
            disabled: P,
            children: (0, a.jsx)(c.vN, {
                children: (0, a.jsx)(y, {
                    autosize: g,
                    className: n()(h.Tg, x.qD),
                    style: { paddingRight: F },
                    placeholder: r,
                    value: t,
                    autoFocus: l,
                    minLength: b,
                    maxLength: p,
                    rows: j,
                    disabled: P,
                    "data-mana-component": "text-area",
                    ...M,
                    onChange: (e) => {
                        let { onChange: t } = M;
                        t?.(e.currentTarget.value), A.setShouldValidate(!0);
                    },
                    ref: z,
                }),
            }),
        }),
    });
}
function y(e) {
    let { "aria-labelledby": t, autosize: r, ...l } = e,
        n = (0, g.xW)(),
        i = o.useContext(b._),
        d = r ? p.d : "textarea";
    return (0, a.jsx)(d, {
        ...l,
        id: i?.controlId,
        "aria-labelledby": t ?? n.titleId,
        "aria-describedby": i?.describedById,
        "aria-errormessage": i?.errorMessageId,
        "aria-invalid": i?.errorMessageId != null,
    });
}
