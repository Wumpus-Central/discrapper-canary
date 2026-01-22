n.d(t, { f: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(504345),
    c = n(823607),
    u = n(511274),
    d = n(189812),
    f = n(688564),
    p = n(829681);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = b(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let y = 10,
    O = 7.23;
function A(e) {
    var t;
    let {
            value: n,
            placeholder: a = "",
            autoFocus: l = !1,
            autosize: d = !1,
            minLength: _,
            maxLength: m,
            error: b,
            defaultDirty: A,
            showCharacterCount: S,
            showRemainingCharacterCount: I = !0,
            rows: T = 3,
            inputRef: C,
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
        ]),
        { fieldProps: R, props: w } = (0, o.ndh)(N),
        { disabled: P } = R,
        D = (0, u.Y)({
            validateOn: "change",
            error: b,
            value: n,
            minLength: _,
            maxLength: m,
            defaultDirty: A,
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
        j = S
            ? (0, r.jsx)(c.n, {
                  value: n,
                  maxLength: I && null != m ? m : void 0,
              })
            : null;
    return (0, r.jsx)(
        o.D0$,
        g(h({}, R), {
            trailingAuxiliaryContent: j,
            errorMessage: D.hasError && null != (t = D.errorMessage) ? t : void 0,
            children: (0, r.jsx)(o.FON, {
                validation: D,
                disabled: P,
                children: (0, r.jsx)(o.vN3, {
                    children: (0, r.jsx)(
                        v,
                        g(
                            h(
                                {
                                    autosize: d,
                                    className: s()(f.Tg, p.qD),
                                    style: { paddingRight: x },
                                    placeholder: a,
                                    value: n,
                                    autoFocus: l,
                                    minLength: _,
                                    maxLength: m,
                                    rows: T,
                                    disabled: P,
                                    "data-mana-component": "text-area",
                                },
                                w,
                            ),
                            {
                                onChange: L,
                                ref: C,
                            },
                        ),
                    ),
                }),
            }),
        }),
    );
}
function v(e) {
    let { "aria-labelledby": t, autosize: n } = e,
        a = E(e, ["aria-labelledby", "autosize"]),
        s = (0, l.xW)(),
        c = i.useContext(o._zY),
        u = n ? d.d : "textarea";
    return (0, r.jsx)(
        u,
        g(h({}, a), {
            id: null == c ? void 0 : c.controlId,
            "aria-labelledby": null != t ? t : s.titleId,
            "aria-describedby": null == c ? void 0 : c.describedById,
            "aria-errormessage": null == c ? void 0 : c.errorMessageId,
            "aria-invalid": (null == c ? void 0 : c.errorMessageId) != null,
        }),
    );
}
