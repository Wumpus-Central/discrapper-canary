r.d(t, { f: () => m });
var a = r(627968),
    o = r(64700),
    l = r(503698),
    n = r.n(l),
    i = r(452027),
    d = r(862301),
    u = r(187322),
    s = r(15626),
    c = r(504345),
    g = r(823607),
    b = r(511274),
    p = r(189812),
    h = r(153795),
    x = r(134536);
function m(e) {
    let {
            value: t,
            placeholder: r = "",
            autoFocus: l = !1,
            autosize: s = !1,
            minLength: c,
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
        A = (0, b.Y)({ validateOn: "change", error: m, value: t, minLength: c, maxLength: p, defaultDirty: f }),
        F = o.useMemo(() => {
            if (null == p) return 10;
            let e = `${p}`.length;
            return 7.23 * (e += `${p} / `.length) + 10;
        }, [p]),
        k = v ? (0, a.jsx)(g.n, { value: t, maxLength: w && null != p ? p : void 0 }) : null;
    return (0, a.jsx)(i.D, {
        ...V,
        trailingAuxiliaryContent: k,
        errorMessage: A.hasError ? (A.errorMessage ?? void 0) : void 0,
        children: (0, a.jsx)(d.F, {
            validation: A,
            disabled: P,
            children: (0, a.jsx)(u.vN, {
                children: (0, a.jsx)(y, {
                    autosize: s,
                    className: n()(h.Tg, x.qD),
                    style: { paddingRight: F },
                    placeholder: r,
                    value: t,
                    autoFocus: l,
                    minLength: c,
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
        n = (0, c.xW)(),
        i = o.useContext(s._),
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
