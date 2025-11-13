n.d(t, { V: () => p }), n(953529);
var r = n(951288);
n(647438);
var i = n(496600),
    a = n(713072),
    o = n(345729),
    s = n(680765);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
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
function p(e) {
    var {
            label: t,
            hideLabel: n,
            hideTags: l,
            placeholder: u,
            description: _,
            helperText: p,
            errorMessage: h,
            successMessage: m,
            wrapTags: g,
            maxOptionsVisible: E = 5,
        } = e,
        b = f(e, [
            "label",
            "hideLabel",
            "hideTags",
            "placeholder",
            "description",
            "helperText",
            "errorMessage",
            "successMessage",
            "wrapTags",
            "maxOptionsVisible",
        ]);
    let { disabled: y, required: O, onQueryChange: v, onKeyDown: I, onFocus: T, onBlur: S } = b,
        {
            isOpen: A,
            setIsOpen: C,
            refs: N,
            floatingStyles: R,
            getFloatingProps: P,
            getReferenceProps: D,
            transitionStyles: w,
        } = (0, o.C)();
    return (0, r.jsxs)(
        i.uz,
        d(c({}, b), {
            isCollapsible: !0,
            isOpen: A,
            setIsOpen: C,
            children: [
                (0, r.jsx)(
                    i.Ct,
                    c(
                        {
                            label: t,
                            hideLabel: n,
                            hideTags: l,
                            placeholder: u,
                            required: O,
                            disabled: y,
                            description: _,
                            helperText: p,
                            errorMessage: h,
                            successMessage: m,
                            wrapTags: g,
                            onBlur: S,
                            onQueryChange: v,
                            onFocus: T,
                            onKeyDown: I,
                            showChevronButton: !0,
                            ref: N.setReference,
                        },
                        D(),
                    ),
                ),
                A &&
                    (0, r.jsx)(
                        "div",
                        d(
                            c(
                                {
                                    ref: N.setFloating,
                                    className: s.selectDropdown,
                                    style: c({}, R, w),
                                },
                                P(),
                            ),
                            {
                                children: (0, r.jsx)(i.px, {
                                    renderListItem: (e) => (0, r.jsx)(a.W, c({}, e)),
                                    maxVisibleItems: E,
                                }),
                            },
                        ),
                    ),
            ],
        }),
    );
}
