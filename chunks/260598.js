a.d(l, { f: () => g });
var t = a(627968),
    n = a(64700),
    o = a(503698),
    i = a.n(o),
    r = a(452027),
    s = a(862301),
    d = a(187322),
    u = a(15626),
    c = a(504345),
    b = a(823607),
    p = a(511274),
    m = a(189812),
    h = a(264451),
    x = a(429128);
function g(e) {
    let {
            value: l,
            placeholder: a = "",
            autoFocus: o = !1,
            autosize: u = !1,
            minLength: c,
            maxLength: m,
            error: g,
            defaultDirty: v,
            showCharacterCount: y,
            showRemainingCharacterCount: _ = !0,
            rows: C = 3,
            inputRef: j,
            ...V
        } = e,
        { fieldProps: k, props: S } = (0, r.n)(V),
        { disabled: w } = k,
        M = (0, p.Y)({ validateOn: "change", error: g, value: l, minLength: c, maxLength: m, defaultDirty: v }),
        T = n.useMemo(() => {
            if (null == m) return 10;
            let e = `${m}`.length;
            return 7.23 * (e += `${m} / `.length) + 10;
        }, [m]),
        A = y ? (0, t.jsx)(b.n, { value: l, maxLength: _ && null != m ? m : void 0 }) : null;
    return (0, t.jsx)(r.D, {
        ...k,
        trailingAuxiliaryContent: A,
        errorMessage: M.hasError ? (M.errorMessage ?? void 0) : void 0,
        children: (0, t.jsx)(s.F, {
            validation: M,
            disabled: w,
            children: (0, t.jsx)(d.vN, {
                children: (0, t.jsx)(f, {
                    autosize: u,
                    className: i()(h.Tg, x.qD),
                    style: { paddingRight: T },
                    placeholder: a,
                    value: l,
                    autoFocus: o,
                    minLength: c,
                    maxLength: m,
                    rows: C,
                    disabled: w,
                    "data-mana-component": "text-area",
                    ...S,
                    onChange: (e) => {
                        let { onChange: l } = S;
                        l?.(e.currentTarget.value), M.setShouldValidate(!0);
                    },
                    ref: j,
                }),
            }),
        }),
    });
}
function f(e) {
    let { "aria-labelledby": l, autosize: a, ...o } = e,
        i = (0, c.xW)(),
        r = n.useContext(u._),
        s = a ? m.d : "textarea";
    return (0, t.jsx)(s, {
        ...o,
        id: r?.controlId,
        "aria-labelledby": l ?? i.titleId,
        "aria-describedby": r?.describedById,
        "aria-errormessage": r?.errorMessageId,
        "aria-invalid": r?.errorMessageId != null,
    });
}
