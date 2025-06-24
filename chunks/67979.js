n.d(t, { W: () => O });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(547800),
    l = n(1561),
    c = n(507274),
    u = n(235874),
    d = n(481060),
    f = n(989073),
    _ = n(953100);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
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
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
let y = 'MMM D, YYYY';
function O(e) {
    let { value: t, onSelect: n, dateFormat: a = y, minDate: p, maxDate: m, disabled: b = !1 } = e,
        O = i.useRef(null);
    function v(e) {
        let { closePopout: i } = e;
        return (0, r.jsx)(c.V, {
            children: (0, r.jsx)(s.CalendarPicker, {
                minDate: p,
                maxDate: m,
                value: t,
                onSelect: (e) => {
                    n(e), i();
                },
                calendarClassName: f.calendarContainer,
                onClickOutside: i,
                autoFocus: !0
            })
        });
    }
    return (0, r.jsx)(u.y, {
        targetElementRef: O,
        renderPopout: v,
        position: 'bottom',
        children: (e) => {
            var { onClick: n } = e,
                i = E(e, ['onClick']);
            return (0, r.jsx)(
                l.P,
                g(h({ innerRef: O }, i), {
                    className: o()(_.inputDefault, f.container, {
                        [_.disabled]: b,
                        [f.disabled]: b
                    }),
                    onClick: b ? void 0 : n,
                    'aria-disabled': b,
                    children: (0, r.jsxs)('div', {
                        className: f.content,
                        children: [
                            (0, r.jsx)('div', {
                                className: f.text,
                                children: null == t ? void 0 : t.format(a)
                            }),
                            (0, r.jsx)(d.Que, {
                                size: 'sm',
                                color: 'currentColor',
                                className: f.icon
                            })
                        ]
                    })
                })
            );
        }
    });
}
