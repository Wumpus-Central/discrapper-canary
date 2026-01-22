n.d(t, { J: () => E });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(939538),
    o = n(305866),
    l = n(265872),
    c = n(397927),
    u = n(821584);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
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
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let g = "ll";
function E(e) {
    let { value: t, onSelect: n, dateFormat: d = g, minDate: p, maxDate: m, disabled: E = !1 } = e,
        b = h(e, ["value", "onSelect", "dateFormat", "minDate", "maxDate", "disabled"]),
        y = i.useRef(null);
    function O(e) {
        let { closePopout: i } = e;
        return (0, r.jsx)(o.l, {
            children: (0, r.jsx)(s.CalendarPicker, {
                minDate: p,
                maxDate: m,
                value: t,
                onSelect: (e) => {
                    n(e), i();
                },
                calendarClassName: u.a,
                onClickOutside: i,
                autoFocus: !0,
            }),
        });
    }
    return (0, r.jsx)(l.Y, {
        targetElementRef: y,
        renderPopout: O,
        position: "bottom",
        children: (e) => {
            let { onClick: n } = e,
                i = h(e, ["onClick"]);
            return (0, r.jsx)(
                a.D0$,
                _(f({}, b), {
                    children: (e) =>
                        (0, r.jsxs)(
                            a.FON,
                            _(
                                f(
                                    {
                                        as: c.DUT,
                                        tag: "div",
                                        innerRef: y,
                                        disabled: E,
                                        "aria-disabled": E,
                                    },
                                    i,
                                ),
                                {
                                    id: null == e ? void 0 : e.controlId,
                                    "aria-describedby": null == e ? void 0 : e.describedById,
                                    "aria-errormessage": null == e ? void 0 : e.errorMessageId,
                                    "aria-invalid": (null == e ? void 0 : e.errorMessageId) != null,
                                    className: u.k,
                                    onClick: E ? void 0 : n,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            children: null == t ? void 0 : t.format(d),
                                        }),
                                        (0, r.jsx)(c.CTc, { size: "sm" }),
                                    ],
                                },
                            ),
                        ),
                }),
            );
        },
    });
}
