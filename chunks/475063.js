n.d(t, { K: () => v });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(15127),
    c = n(841878),
    u = n(897037),
    d = n(680874),
    f = n(55042),
    p = n(164701);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let y = 10,
    O = 7.23;
function v(e) {
    var t,
        {
            value: n,
            placeholder: a = "",
            autoFocus: l = !1,
            autosize: d = !1,
            minLength: _,
            maxLength: m,
            error: b,
            defaultDirty: v,
            showCharacterCount: I,
            showRemainingCharacterCount: T = !0,
            rows: C = 3,
            inputRef: A,
        } = e,
        N = E(e, [
            "value",
            "placeholder",
            "autoFocus",
            "autosize",
            "minLength",
            "maxLength",
            "error",
            "defaultDirty",
            "showCharacterCount",
            "showRemainingCharacterCount",
            "rows",
            "inputRef",
        ]);
    let { fieldProps: P, props: w } = (0, s.XF_)(N),
        { disabled: R } = P,
        D = (0, u.m)({
            validateOn: "change",
            error: b,
            value: n,
            minLength: _,
            maxLength: m,
            defaultDirty: v,
        }),
        x = i.useMemo(() => {
            if (null == m) return y;
            let e = "".concat(m).length;
            return O * (e += "".concat(m, " / ").length) + y;
        }, [m]),
        L = (e) => {
            let { onChange: t } = w;
            null == t || t(e.currentTarget.value), D.setShouldValidate(!0);
        },
        j = I
            ? (0, r.jsx)(c.H, {
                  value: n,
                  maxLength: T && null != m ? m : void 0,
              })
            : null;
    return (0, r.jsx)(
        s.gNt,
        g(h({}, P), {
            trailingAuxiliaryContent: j,
            errorMessage: D.hasError && null != (t = D.errorMessage) ? t : void 0,
            children: (0, r.jsx)(s.UPk, {
                validation: D,
                disabled: R,
                children: (0, r.jsx)(s.tEY, {
                    children: (0, r.jsx)(
                        S,
                        g(
                            h(
                                {
                                    autosize: d,
                                    className: o()(f.textArea, p.scrollbarDefault),
                                    style: { paddingRight: x },
                                    placeholder: a,
                                    value: n,
                                    autoFocus: l,
                                    minLength: _,
                                    maxLength: m,
                                    rows: C,
                                    disabled: R,
                                    "data-mana-component": "text-area",
                                },
                                w,
                            ),
                            {
                                onChange: L,
                                ref: A,
                            },
                        ),
                    ),
                }),
            }),
        }),
    );
}
function S(e) {
    var { "aria-labelledby": t, autosize: n } = e,
        a = E(e, ["aria-labelledby", "autosize"]);
    let o = (0, l.Gc)(),
        c = i.useContext(s.zbb),
        u = n ? d.l : "textarea";
    return (0, r.jsx)(
        u,
        g(h({}, a), {
            id: null == c ? void 0 : c.controlId,
            "aria-labelledby": null != t ? t : o.titleId,
            "aria-describedby": null == c ? void 0 : c.describedById,
            "aria-errormessage": null == c ? void 0 : c.errorMessageId,
            "aria-invalid": (null == c ? void 0 : c.errorMessageId) != null,
        }),
    );
}
