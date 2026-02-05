"use strict";
n.d(t, { f: () => m });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(504345),
    u = n(823607),
    c = n(511274),
    d = n(189812),
    _ = n(688564),
    f = n(829681);
let p = 10,
    h = 7.23;
function m(e) {
    let {
            value: t,
            placeholder: n = "",
            autoFocus: a = !1,
            autosize: l = !1,
            minLength: d,
            maxLength: m,
            error: E,
            defaultDirty: A,
            showCharacterCount: I,
            showRemainingCharacterCount: T = !0,
            rows: y = 3,
            inputRef: S,
            ...v
        } = e,
        { fieldProps: C, props: b } = (0, o.ndh)(v),
        { disabled: N } = C,
        R = (0, c.Y)({ validateOn: "change", error: E, value: t, minLength: d, maxLength: m, defaultDirty: A }),
        O = i.useMemo(() => {
            if (null == m) return p;
            let e = `${m}`.length;
            return h * (e += `${m} / `.length) + p;
        }, [m]),
        D = (e) => {
            let { onChange: t } = b;
            t?.(e.currentTarget.value), R.setShouldValidate(!0);
        },
        L = I ? (0, r.jsx)(u.n, { value: t, maxLength: T && null != m ? m : void 0 }) : null;
    return (0, r.jsx)(o.D0$, {
        ...C,
        trailingAuxiliaryContent: L,
        errorMessage: R.hasError ? (R.errorMessage ?? void 0) : void 0,
        children: (0, r.jsx)(o.FON, {
            validation: R,
            disabled: N,
            children: (0, r.jsx)(o.vN3, {
                children: (0, r.jsx)(g, {
                    autosize: l,
                    className: s()(_.Tg, f.qD),
                    style: { paddingRight: O },
                    placeholder: n,
                    value: t,
                    autoFocus: a,
                    minLength: d,
                    maxLength: m,
                    rows: y,
                    disabled: N,
                    "data-mana-component": "text-area",
                    ...b,
                    onChange: D,
                    ref: S,
                }),
            }),
        }),
    });
}
function g(e) {
    let { "aria-labelledby": t, autosize: n, ...a } = e,
        s = (0, l.xW)(),
        u = i.useContext(o._zY),
        c = n ? d.d : "textarea";
    return (0, r.jsx)(c, {
        ...a,
        id: u?.controlId,
        "aria-labelledby": t ?? s.titleId,
        "aria-describedby": u?.describedById,
        "aria-errormessage": u?.errorMessageId,
        "aria-invalid": u?.errorMessageId != null,
    });
}
