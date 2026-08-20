r.d(t, { f: () => m });
var a = r(477900),
    o = r(582128),
    l = r(503698),
    n = r.n(l),
    i = r(259678),
    d = r(452027),
    u = r(15626),
    s = r(668639),
    c = r(862301),
    g = r(205086),
    b = r(281595),
    p = r(643135),
    h = r(648239),
    x = r(969490);
function m(e) {
    let {
            value: t,
            placeholder: r = "",
            autoFocus: l = !1,
            autosize: u = !1,
            minLength: s,
            maxLength: p,
            error: m,
            defaultDirty: f,
            showCharacterCount: v,
            showRemainingCharacterCount: w = !0,
            rows: j = 3,
            maxRows: z,
            inputRef: C,
            ...V
        } = e,
        { fieldProps: M, props: P } = (0, d.n)(V),
        { disabled: A } = M,
        F = (0, b.Y)({ validateOn: "change", error: m, value: t, minLength: s, maxLength: p, defaultDirty: f }),
        $ = o.useMemo(() => {
            if (!v || null == p) return 10;
            let e = `${p}`.length;
            return 7.23 * (e += `${p} / `.length) + 10;
        }, [p, v]),
        k = v ? (0, a.jsx)(g.n, { value: t, maxLength: w && null != p ? p : void 0 }) : null;
    return (0, a.jsx)(d.D, {
        ...M,
        trailingAuxiliaryContent: k,
        errorMessage: F.hasError ? (F.errorMessage ?? void 0) : void 0,
        children: (0, a.jsx)(c.F, {
            validation: F,
            disabled: A,
            children: (0, a.jsx)(i.vN, {
                children: (0, a.jsx)(y, {
                    autosize: u,
                    maxRows: z,
                    className: n()(h.Tg, x.qD),
                    style: { paddingRight: $ },
                    placeholder: r,
                    value: t,
                    autoFocus: l,
                    minLength: s,
                    maxLength: p,
                    rows: j,
                    disabled: A,
                    "data-mana-component": "text-area",
                    ...P,
                    onChange: (e) => {
                        let { onChange: t } = P;
                        t?.(e.currentTarget.value), F.setShouldValidate(!0);
                    },
                    ref: C,
                }),
            }),
        }),
    });
}
function y(e) {
    let { "aria-labelledby": t, autosize: r, maxRows: l, ...n } = e,
        i = (0, s.xW)(),
        d = o.useContext(u._),
        c = r ? p.d : "textarea";
    return (0, a.jsx)(c, {
        ...n,
        ...(r ? { maxRows: l } : null),
        id: d?.controlId,
        "aria-labelledby": t ?? i.titleId,
        "aria-describedby": d?.describedById,
        "aria-errormessage": d?.errorMessageId,
        "aria-invalid": d?.errorMessageId != null,
    });
}
