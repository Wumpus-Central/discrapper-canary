n.d(t, { W: () => E });
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(547800),
    s = n(507274),
    l = n(235874),
    c = n(481060),
    u = n(495912);
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
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let g = "ll";
function E(e) {
    var { value: t, onSelect: n, dateFormat: d = g, minDate: _, maxDate: m, disabled: E = !1 } = e,
        b = h(e, ["value", "onSelect", "dateFormat", "minDate", "maxDate", "disabled"]);
    let y = i.useRef(null);
    function O(e) {
        let { closePopout: i } = e;
        return (0, r.jsx)(s.V, {
            children: (0, r.jsx)(o.CalendarPicker, {
                minDate: _,
                maxDate: m,
                value: t,
                onSelect: (e) => {
                    n(e), i();
                },
                calendarClassName: u.calendarContainer,
                onClickOutside: i,
                autoFocus: !0,
            }),
        });
    }
    return (0, r.jsx)(l.y, {
        targetElementRef: y,
        renderPopout: O,
        position: "bottom",
        children: (e) => {
            var { onClick: n } = e,
                i = h(e, ["onClick"]);
            return (0, r.jsx)(
                a.gNt,
                p(f({}, b), {
                    children: (e) =>
                        (0, r.jsxs)(
                            a.UPk,
                            p(
                                f(
                                    {
                                        as: c.P3F,
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
                                    className: u.container,
                                    onClick: E ? void 0 : n,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            children: null == t ? void 0 : t.format(d),
                                        }),
                                        (0, r.jsx)(c.Que, { size: "sm" }),
                                    ],
                                },
                            ),
                        ),
                }),
            );
        },
    });
}
