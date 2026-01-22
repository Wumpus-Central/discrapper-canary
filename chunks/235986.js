n.d(t, {
    A: () => y,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(538640),
    l = n(20976);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = _(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let h = {
        VERTICAL: l.Vd,
        HORIZONTAL: o.xM,
        HORIZONTAL_REVERSE: o.XB,
    },
    m = {
        START: l.LF,
        END: l.Ub,
        CENTER: l.wq,
        BETWEEN: l.LT,
        AROUND: l.aD,
    },
    g = {
        START: l.CT,
        END: l.ZT,
        CENTER: l.Hu,
        STRETCH: l.hx,
        BASELINE: l.Ju,
    },
    E = {
        NO_WRAP: l.oA,
        WRAP: l.LV,
        WRAP_REVERSE: l.Tt,
    },
    b = (e) => {
        let {
                children: t,
                className: n,
                direction: i = h.HORIZONTAL,
                justify: a = m.START,
                align: l = g.STRETCH,
                wrap: c = E.NO_WRAP,
                shrink: d = 1,
                grow: _ = 1,
                basis: b = "auto",
                style: y,
            } = e,
            O = p(e, [
                "children",
                "className",
                "direction",
                "justify",
                "align",
                "wrap",
                "shrink",
                "grow",
                "basis",
                "style",
            ]);
        return (0, r.jsx)(
            "div",
            f(
                u(
                    {
                        style: u(
                            {
                                flexShrink: d,
                                flexGrow: _,
                                flexBasis: b,
                            },
                            y,
                        ),
                        className: s()(o.Uu, i, a, l, c, n),
                    },
                    O,
                ),
                {
                    children: t,
                },
            ),
        );
    };
(b.Child = (e) => {
    let { children: t, className: n, shrink: a = 1, grow: l = 1, basis: c = "auto", style: d, wrap: _ = !1 } = e,
        h = p(e, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]),
        m = u(
            {
                className: (n = null != n ? n : o.Gu),
                style: u(
                    {
                        flexGrow: l,
                        flexShrink: a,
                        flexBasis: c,
                    },
                    d,
                ),
            },
            h,
        );
    if (!_ && "string" != typeof t && 1 === i.Children.count(t)) {
        let e = i.Children.only(t);
        return (
            (m.style = u({}, m.style, e.props.style)), (m.className = s()(e.props.className, n)), i.cloneElement(e, m)
        );
    }
    return (0, r.jsx)(
        "div",
        f(u({}, m), {
            children: t,
        }),
    );
}),
    (b.Direction = h),
    (b.Align = g),
    (b.Justify = m),
    (b.Wrap = E);
let y = b;
