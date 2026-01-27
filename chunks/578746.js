n.d(t, {
    Ay: () => c,
});
var r = n(627968);
n(64700);
var i = n(435371),
    l = n(397927);

function s(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function a(e) {
    let { value: t, onChange: n, note: i, title: s, disabled: a } = e;
    return (0, r.jsx)(l.dOG, {
        checked: t,
        onChange: n,
        disabled: a,
        label: s,
        description: i,
    });
}

function o(e) {
    let { tooltipText: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["tooltipText"]);
    return (0, r.jsx)(i.m_, {
        text: t,
        asContainer: !0,
        align: "right",
        caretConfig: {
            position: "bottom",
            align: "end",
        },
        children: (0, r.jsx)(a, s({}, n)),
    });
}

function c(e) {
    return "tooltipText" in e && null != e.tooltipText ? (0, r.jsx)(o, s({}, e)) : (0, r.jsx)(a, s({}, e));
}
