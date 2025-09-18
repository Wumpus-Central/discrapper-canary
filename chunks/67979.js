n.d(t, { W: () => E });
var r = n(951288),
    i = n(647438),
    a = n(547800),
    o = n(507274),
    s = n(235874),
    l = n(74655),
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
    let { value: t, onSelect: n, dateFormat: d = g, minDate: _, maxDate: m, disabled: E = !1 } = e,
        b = i.useRef(null);
    function y(e) {
        let { closePopout: i } = e;
        return (0, r.jsx)(o.V, {
            children: (0, r.jsx)(a.CalendarPicker, {
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
    return (0, r.jsx)(s.y, {
        targetElementRef: b,
        renderPopout: y,
        position: "bottom",
        children: (e) => {
            var { onClick: n } = e,
                i = h(e, ["onClick"]);
            return (0, r.jsxs)(
                l.U,
                p(
                    f(
                        {
                            as: c.P3F,
                            tag: "div",
                            innerRef: b,
                            disabled: E,
                            "aria-disabled": E,
                        },
                        i,
                    ),
                    {
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
            );
        },
    });
}
