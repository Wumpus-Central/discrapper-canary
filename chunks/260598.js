"use strict";
n.d(t, { f: () => g });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(452027),
    o = n(862301),
    c = n(187322),
    u = n(15626),
    d = n(504345),
    _ = n(823607),
    p = n(511274),
    f = n(189812),
    h = n(264451),
    m = n(429128);
function g(e) {
    let {
            value: t,
            placeholder: n = "",
            autoFocus: a = !1,
            autosize: u = !1,
            minLength: d,
            maxLength: f,
            error: g,
            defaultDirty: A,
            showCharacterCount: E,
            showRemainingCharacterCount: v = !0,
            rows: y = 3,
            inputRef: I,
            ...S
        } = e,
        { fieldProps: T, props: C } = (0, s.n)(S),
        { disabled: x } = T,
        R = (0, p.Y)({ validateOn: "change", error: g, value: t, minLength: d, maxLength: f, defaultDirty: A }),
        N = i.useMemo(() => {
            if (null == f) return 10;
            let e = `${f}`.length;
            return 7.23 * (e += `${f} / `.length) + 10;
        }, [f]),
        L = E ? (0, r.jsx)(_.n, { value: t, maxLength: v && null != f ? f : void 0 }) : null;
    return (0, r.jsx)(s.D, {
        ...T,
        trailingAuxiliaryContent: L,
        errorMessage: R.hasError ? (R.errorMessage ?? void 0) : void 0,
        children: (0, r.jsx)(o.F, {
            validation: R,
            disabled: x,
            children: (0, r.jsx)(c.vN, {
                children: (0, r.jsx)(b, {
                    autosize: u,
                    className: l()(h.Tg, m.qD),
                    style: { paddingRight: N },
                    placeholder: n,
                    value: t,
                    autoFocus: a,
                    minLength: d,
                    maxLength: f,
                    rows: y,
                    disabled: x,
                    "data-mana-component": "text-area",
                    ...C,
                    onChange: (e) => {
                        let { onChange: t } = C;
                        t?.(e.currentTarget.value), R.setShouldValidate(!0);
                    },
                    ref: I,
                }),
            }),
        }),
    });
}
function b(e) {
    let { "aria-labelledby": t, autosize: n, ...a } = e,
        l = (0, d.xW)(),
        s = i.useContext(u._),
        o = n ? f.d : "textarea";
    return (0, r.jsx)(o, {
        ...a,
        id: s?.controlId,
        "aria-labelledby": t ?? l.titleId,
        "aria-describedby": s?.describedById,
        "aria-errormessage": s?.errorMessageId,
        "aria-invalid": s?.errorMessageId != null,
    });
}
