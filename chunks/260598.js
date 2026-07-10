"use strict";
n.d(t, { f: () => f });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(452027),
    o = n(862301),
    d = n(187322),
    c = n(15626),
    u = n(504345),
    _ = n(823607),
    E = n(511274),
    A = n(189812),
    h = n(153795),
    I = n(134536);
function f(e) {
    let {
            value: t,
            placeholder: n = "",
            autoFocus: a = !1,
            autosize: c = !1,
            minLength: u,
            maxLength: A,
            error: f,
            defaultDirty: T,
            showCharacterCount: m,
            showRemainingCharacterCount: g = !0,
            rows: S = 3,
            inputRef: N,
            ...C
        } = e,
        { fieldProps: R, props: O } = (0, l.n)(C),
        { disabled: L } = R,
        D = (0, E.Y)({ validateOn: "change", error: f, value: t, minLength: u, maxLength: A, defaultDirty: T }),
        y = r.useMemo(() => {
            if (null == A) return 10;
            let e = `${A}`.length;
            return 7.23 * (e += `${A} / `.length) + 10;
        }, [A]),
        v = m ? (0, i.jsx)(_.n, { value: t, maxLength: g && null != A ? A : void 0 }) : null;
    return (0, i.jsx)(l.D, {
        ...R,
        trailingAuxiliaryContent: v,
        errorMessage: D.hasError ? (D.errorMessage ?? void 0) : void 0,
        children: (0, i.jsx)(o.F, {
            validation: D,
            disabled: L,
            children: (0, i.jsx)(d.vN, {
                children: (0, i.jsx)(p, {
                    autosize: c,
                    className: s()(h.Tg, I.qD),
                    style: { paddingRight: y },
                    placeholder: n,
                    value: t,
                    autoFocus: a,
                    minLength: u,
                    maxLength: A,
                    rows: S,
                    disabled: L,
                    "data-mana-component": "text-area",
                    ...O,
                    onChange: (e) => {
                        let { onChange: t } = O;
                        t?.(e.currentTarget.value), D.setShouldValidate(!0);
                    },
                    ref: N,
                }),
            }),
        }),
    });
}
function p(e) {
    let { "aria-labelledby": t, autosize: n, ...a } = e,
        s = (0, u.xW)(),
        l = r.useContext(c._),
        o = n ? A.d : "textarea";
    return (0, i.jsx)(o, {
        ...a,
        id: l?.controlId,
        "aria-labelledby": t ?? s.titleId,
        "aria-describedby": l?.describedById,
        "aria-errormessage": l?.errorMessageId,
        "aria-invalid": l?.errorMessageId != null,
    });
}
