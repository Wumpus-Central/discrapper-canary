n.d(t, { W: () => b });
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(547800),
    s = n(507274),
    l = n(235874),
    c = n(74655),
    u = n(481060),
    d = n(495912);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
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
function h(e, t) {
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
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let E = "ll";
function b(e) {
    var { value: t, onSelect: n, dateFormat: f = E, minDate: p, maxDate: g, disabled: b = !1 } = e,
        y = m(e, ["value", "onSelect", "dateFormat", "minDate", "maxDate", "disabled"]);
    let O = i.useRef(null);
    function v(e) {
        let { closePopout: i } = e;
        return (0, r.jsx)(s.V, {
            children: (0, r.jsx)(o.CalendarPicker, {
                minDate: p,
                maxDate: g,
                value: t,
                onSelect: (e) => {
                    n(e), i();
                },
                calendarClassName: d.calendarContainer,
                onClickOutside: i,
                autoFocus: !0,
            }),
        });
    }
    return (0, r.jsx)(l.y, {
        targetElementRef: O,
        renderPopout: v,
        position: "bottom",
        children: (e) => {
            var { onClick: n } = e,
                i = m(e, ["onClick"]);
            return (0, r.jsx)(
                a.gNt,
                h(_({}, y), {
                    children: (e) =>
                        (0, r.jsxs)(
                            c.U,
                            h(
                                _(
                                    {
                                        as: u.P3F,
                                        tag: "div",
                                        innerRef: O,
                                        disabled: b,
                                        "aria-disabled": b,
                                    },
                                    i,
                                ),
                                {
                                    id: null == e ? void 0 : e.controlId,
                                    "aria-describedby": null == e ? void 0 : e.describedById,
                                    "aria-errormessage": null == e ? void 0 : e.errorMessageId,
                                    "aria-invalid": (null == e ? void 0 : e.errorMessageId) != null,
                                    className: d.container,
                                    onClick: b ? void 0 : n,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-md/normal",
                                            children: null == t ? void 0 : t.format(f),
                                        }),
                                        (0, r.jsx)(u.Que, { size: "sm" }),
                                    ],
                                },
                            ),
                        ),
                }),
            );
        },
    });
}
