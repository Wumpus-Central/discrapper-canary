n.d(t, { W: () => O });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(547800),
    l = n(1561),
    c = n(507274),
    u = n(235874),
    d = n(481060),
    f = n(540059),
    _ = n(989073),
    p = n(953100);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let v = 'MMM D, YYYY';
function O(e) {
    let { value: t, onSelect: n, dateFormat: o = v, minDate: h, maxDate: g, disabled: y = !1 } = e,
        O = (0, f.Q3)('DateInput'),
        I = i.useRef(null);
    function S(e) {
        let { closePopout: i } = e;
        return (0, r.jsx)(c.V, {
            children: (0, r.jsx)(s.CalendarPicker, {
                minDate: h,
                maxDate: g,
                value: t,
                onSelect: (e) => {
                    n(e), i();
                },
                calendarClassName: _.calendarContainer,
                onClickOutside: i,
                autoFocus: !0
            })
        });
    }
    return (0, r.jsx)(u.y, {
        targetElementRef: I,
        renderPopout: S,
        position: 'bottom',
        children: (e) => {
            var { onClick: n } = e,
                i = b(e, ['onClick']);
            return (0, r.jsx)(
                l.P,
                E(m({ innerRef: I }, i), {
                    className: a()(p.inputDefault, _.container, {
                        [p.disabled]: y,
                        [_.disabled]: y
                    }),
                    onClick: y ? void 0 : n,
                    'aria-disabled': y,
                    children: (0, r.jsxs)('div', {
                        className: _.content,
                        children: [
                            (0, r.jsx)('div', {
                                className: _.text,
                                children: null == t ? void 0 : t.format(o)
                            }),
                            (0, r.jsx)(d.Que, {
                                size: O ? 'sm' : 'md',
                                color: 'currentColor',
                                className: _.icon
                            })
                        ]
                    })
                })
            );
        }
    });
}
