"use strict";
n.d(t, { f: () => f });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(452027),
    o = n(281595),
    d = n(205086),
    c = n(862301),
    u = n(259678),
    _ = n(668639),
    E = n(15626),
    A = n(189812),
    h = n(14219),
    I = n(15328);
function f(e) {
    let {
            value: t,
            placeholder: n = "",
            autoFocus: a = !1,
            autosize: _ = !1,
            minLength: E,
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
        D = (0, o.Y)({ validateOn: "change", error: f, value: t, minLength: E, maxLength: A, defaultDirty: T }),
        y = r.useMemo(() => {
            if (!m || null == A) return 10;
            let e = `${A}`.length;
            return 7.23 * (e += `${A} / `.length) + 10;
        }, [A, m]),
        v = m ? (0, i.jsx)(d.n, { value: t, maxLength: g && null != A ? A : void 0 }) : null;
    return (0, i.jsx)(l.D, {
        ...R,
        trailingAuxiliaryContent: v,
        errorMessage: D.hasError ? (D.errorMessage ?? void 0) : void 0,
        children: (0, i.jsx)(c.F, {
            validation: D,
            disabled: L,
            children: (0, i.jsx)(u.vN, {
                children: (0, i.jsx)(p, {
                    autosize: _,
                    className: s()(h.Tg, I.qD),
                    style: { paddingRight: y },
                    placeholder: n,
                    value: t,
                    autoFocus: a,
                    minLength: E,
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
        s = (0, _.xW)(),
        l = r.useContext(E._),
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
