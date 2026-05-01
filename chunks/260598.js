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
    f = n(511274),
    h = n(189812),
    p = n(264451),
    E = n(429128);
function m(e) {
    let {
            value: t,
            placeholder: n = "",
            autoFocus: s = !1,
            autosize: c = !1,
            minLength: d,
            maxLength: h,
            error: m,
            defaultDirty: A,
            showCharacterCount: I,
            showRemainingCharacterCount: T = !0,
            rows: S = 3,
            inputRef: N,
            ...y
        } = e,
        { fieldProps: C, props: v } = (0, o.n)(y),
        { disabled: O } = C,
        R = (0, f.Y)({ validateOn: "change", error: m, value: t, minLength: d, maxLength: h, defaultDirty: A }),
        b = r.useMemo(() => {
            if (null == h) return 10;
            let e = `${h}`.length;
            return 7.23 * (e += `${h} / `.length) + 10;
        }, [h]),
        D = I ? (0, i.jsx)(_.n, { value: t, maxLength: T && null != h ? h : void 0 }) : null;
    return (0, i.jsx)(o.D, {
        ...C,
        trailingAuxiliaryContent: D,
        errorMessage: R.hasError ? (R.errorMessage ?? void 0) : void 0,
        children: (0, i.jsx)(l.F, {
            validation: R,
            disabled: O,
            children: (0, i.jsx)(u.vN, {
                children: (0, i.jsx)(g, {
                    autosize: c,
                    className: a()(p.Tg, E.qD),
                    style: { paddingRight: b },
                    placeholder: n,
                    value: t,
                    autoFocus: s,
                    minLength: d,
                    maxLength: h,
                    rows: S,
                    disabled: O,
                    "data-mana-component": "text-area",
                    ...v,
                    onChange: (e) => {
                        let { onChange: t } = v;
                        t?.(e.currentTarget.value), R.setShouldValidate(!0);
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
        l = n ? h.d : "textarea";
    return (0, i.jsx)(l, {
        ...s,
        id: o?.controlId,
        "aria-labelledby": t ?? a.titleId,
        "aria-describedby": o?.describedById,
        "aria-errormessage": o?.errorMessageId,
        "aria-invalid": o?.errorMessageId != null,
    });
}
