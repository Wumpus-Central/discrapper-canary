n.d(t, { V: () => h });
var r = n(54381),
    i = n(793030),
    a = n(496600),
    o = n(713072),
    s = n(345729),
    l = n(685424);
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
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
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
        d = p(e, ["hideTags", "wrapTags", "maxOptionsVisible"]);
    let { fieldProps: _ } = (0, i.XF_)(d),
        {
            disabled: h,
            required: m,
            onQueryChange: g,
            onKeyDown: E,
            onFocus: b,
            onBlur: y,
            placeholder: O,
            closeOnSelect: v,
            selectionMode: S,
        } = d,
        {
            isOpen: I,
            setIsOpen: T,
            refs: C,
            floatingStyles: A,
            getFloatingProps: N,
            getReferenceProps: P,
            transitionStyles: w,
        } = (0, s.C)();
    return (0, r.jsxs)(
        a.uz,
        f(u({}, d), {
            isCollapsible: !0,
            isOpen: I,
            setIsOpen: T,
            closeOnSelect: null != v ? v : "single" === S,
            children: [
                (0, r.jsx)(
                    a.Ct,
                    f(
                        u(
                            {
                                hideTags: t,
                                required: m,
                                disabled: h,
                                wrapTags: n,
                                showChevronButton: !0,
                                ref: C.setReference,
                                placeholder: O,
                            },
                            _,
                            P(),
                        ),
                        {
                            onKeyDown: E,
                            onBlur: y,
                            onQueryChange: g,
                            onFocus: b,
                        },
                    ),
                ),
                I &&
                    (0, r.jsx)(
                        "div",
                        f(
                            u(
                                {
                                    ref: C.setFloating,
                                    className: l.selectDropdown,
                                    style: u({}, A, w),
                                },
                                N(),
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
