"use strict";
n.d(t, { f: () => m });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(452027),
    l = n(862301),
    u = n(187322),
    c = n(15626),
    d = n(504345),
    _ = n(823607),
    h = n(511274),
    f = n(189812),
    E = n(264451),
    p = n(429128);
function m(e) {
    let {
            value: t,
            placeholder: n = "",
            autoFocus: s = !1,
            autosize: c = !1,
            minLength: d,
            maxLength: f,
            error: m,
            defaultDirty: A,
            showCharacterCount: I,
            showRemainingCharacterCount: T = !0,
            rows: S = 3,
            inputRef: N,
            ...C
        } = e,
        { fieldProps: y, props: O } = (0, o.n)(C),
        { disabled: R } = y,
        v = (0, h.Y)({ validateOn: "change", error: m, value: t, minLength: d, maxLength: f, defaultDirty: A }),
        b = r.useMemo(() => {
            if (null == f) return 10;
            let e = `${f}`.length;
            return 7.23 * (e += `${f} / `.length) + 10;
        }, [f]),
        L = I ? (0, i.jsx)(_.n, { value: t, maxLength: T && null != f ? f : void 0 }) : null;
    return (0, i.jsx)(o.D, {
        ...y,
        trailingAuxiliaryContent: L,
        errorMessage: v.hasError ? (v.errorMessage ?? void 0) : void 0,
        children: (0, i.jsx)(l.F, {
            validation: v,
            disabled: R,
            children: (0, i.jsx)(u.vN, {
                children: (0, i.jsx)(g, {
                    autosize: c,
                    className: a()(E.Tg, p.qD),
                    style: { paddingRight: b },
                    placeholder: n,
                    value: t,
                    autoFocus: s,
                    minLength: d,
                    maxLength: f,
                    rows: S,
                    disabled: R,
                    "data-mana-component": "text-area",
                    ...O,
                    onChange: (e) => {
                        let { onChange: t } = O;
                        t?.(e.currentTarget.value), v.setShouldValidate(!0);
                    },
                    ref: N,
                }),
            }),
        }),
    });
}
function g(e) {
    let { "aria-labelledby": t, autosize: n, ...s } = e,
        a = (0, d.xW)(),
        o = r.useContext(c._),
        l = n ? f.d : "textarea";
    return (0, i.jsx)(l, {
        ...s,
        id: o?.controlId,
        "aria-labelledby": t ?? a.titleId,
        "aria-describedby": o?.describedById,
        "aria-errormessage": o?.errorMessageId,
        "aria-invalid": o?.errorMessageId != null,
    });
}
