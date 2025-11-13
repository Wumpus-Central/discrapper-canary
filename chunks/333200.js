n.d(t, { V: () => h });
var r = n(951288);
n(647438);
var i = n(793030),
    a = n(496600),
    o = n(713072),
    s = n(345729),
    l = n(680765);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e) {
    var { hideTags: t, wrapTags: n, maxOptionsVisible: c = 5 } = e,
        d = _(e, ["hideTags", "wrapTags", "maxOptionsVisible"]);
    let { fieldProps: p } = (0, i.XF_)(d),
        { disabled: h, required: m, onQueryChange: g, onKeyDown: E, onFocus: b, onBlur: y, placeholder: O } = d,
        {
            isOpen: v,
            setIsOpen: I,
            refs: T,
            floatingStyles: S,
            getFloatingProps: A,
            getReferenceProps: C,
            transitionStyles: N,
        } = (0, s.C)();
    return (0, r.jsxs)(
        a.uz,
        f(u({}, d), {
            isCollapsible: !0,
            isOpen: v,
            setIsOpen: I,
            children: [
                (0, r.jsx)(
                    a.Ct,
                    u(
                        {
                            hideTags: t,
                            required: m,
                            disabled: h,
                            wrapTags: n,
                            onBlur: y,
                            onQueryChange: g,
                            onFocus: b,
                            onKeyDown: E,
                            showChevronButton: !0,
                            ref: T.setReference,
                            placeholder: O,
                        },
                        p,
                        C(),
                    ),
                ),
                v &&
                    (0, r.jsx)(
                        "div",
                        f(
                            u(
                                {
                                    ref: T.setFloating,
                                    className: l.selectDropdown,
                                    style: u({}, S, N),
                                },
                                A(),
                            ),
                            {
                                children: (0, r.jsx)(a.px, {
                                    renderListItem: (e) => (0, r.jsx)(o.W, u({}, e)),
                                    maxVisibleItems: c,
                                }),
                            },
                        ),
                    ),
            ],
        }),
    );
}
