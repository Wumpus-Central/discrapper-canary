n.d(t, { V: () => p }), n(953529);
var r = n(951288);
n(647438);
var i = n(793030),
    a = n(496600),
    o = n(713072),
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
            required: _,
            description: p,
            helperText: h,
            errorMessage: m,
            successMessage: g,
            wrapTags: E,
            maxOptionsVisible: b = 5,
        } = e,
        y = f(e, [
            "label",
            "hideLabel",
            "hideTags",
            "placeholder",
            "required",
            "description",
            "helperText",
            "errorMessage",
            "successMessage",
            "wrapTags",
            "maxOptionsVisible",
        ]);
    let { disabled: O } = y,
        {
            isOpen: v,
            setIsOpen: I,
            refs: T,
            floatingStyles: S,
            getFloatingProps: A,
            getReferenceProps: C,
        } = (0, i.ON0)({
            placement: "bottom",
            matchReferenceWidth: !0,
        });
    return (0, r.jsxs)(
        a.uz,
        d(c({}, y), {
            isCollapsible: !0,
            isOpen: v,
            setIsOpen: I,
            children: [
                (0, r.jsx)(
                    a.Ct,
                    c(
                        {
                            label: t,
                            hideLabel: n,
                            hideTags: l,
                            placeholder: u,
                            required: _,
                            disabled: O,
                            description: p,
                            helperText: h,
                            errorMessage: m,
                            successMessage: g,
                            wrapTags: E,
                            showChevronButton: !0,
                            ref: T.setReference,
                        },
                        C(),
                    ),
                ),
                v &&
                    (0, r.jsx)(
                        "div",
                        d(
                            c(
                                {
                                    ref: T.setFloating,
                                    className: s.selectDropdown,
                                    style: S,
                                },
                                A(),
                            ),
                            {
                                children: (0, r.jsx)(a.px, {
                                    renderListItem: (e) => (0, r.jsx)(o.W, c({}, e)),
                                    maxVisibleItems: b,
                                }),
                            },
                        ),
                    ),
            ],
        }),
    );
}
