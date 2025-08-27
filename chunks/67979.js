n.d(t, { W: () => y });
var r = n(951288),
    i = n(647438),
    o = n(547800),
    a = n(1561),
    s = n(507274),
    l = n(235874),
    c = n(993365),
    u = n(74655),
    d = n(481060),
    f = n(495912);
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
function p(e) {
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
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let b = "ll";
function y(e) {
    let { value: t, onSelect: n, dateFormat: _ = b, minDate: h, maxDate: E, disabled: y = !1 } = e,
        O = i.useRef(null);
    function v(e) {
        let { closePopout: i } = e;
        return (0, r.jsx)(s.V, {
            children: (0, r.jsx)(o.CalendarPicker, {
                minDate: h,
                maxDate: E,
                value: t,
                onSelect: (e) => {
                    n(e), i();
                },
                calendarClassName: f.calendarContainer,
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
                i = g(e, ["onClick"]);
            return (0, r.jsxs)(
                u.U,
                m(
                    p(
                        {
                            as: a.P,
                            tag: "div",
                            innerRef: O,
                            disabled: y,
                            "aria-disabled": y,
                        },
                        i,
                    ),
                    {
                        className: f.container,
                        onClick: y ? void 0 : n,
                        children: [
                            (0, r.jsx)(c.x, {
                                variant: "text-md/normal",
                                children: null == t ? void 0 : t.format(_),
                            }),
                            (0, r.jsx)(d.Que, { size: "sm" }),
                        ],
                    },
                ),
            );
        },
    });
}
