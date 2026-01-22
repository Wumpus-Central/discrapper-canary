n.d(t, { A: () => c }), n(896048), n(733351);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(650583),
    a = n(985018);
let c = (e) => {
    var t, n;
    let {
            tags: c,
            tagsLabel: o,
            value: d,
            onRemoveTag: u,
            onAddTag: f,
            onAddTagError: g,
            maxTaxLength: b,
            maxTags: m,
            disabled: p,
            placeholder: x,
        } = e,
        h = (function (e, t) {
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
        })(e, [
            "tags",
            "tagsLabel",
            "value",
            "onRemoveTag",
            "onAddTag",
            "onAddTagError",
            "maxTaxLength",
            "maxTags",
            "disabled",
            "placeholder",
        ]),
        [j, O] = i.useState(null != d ? d : ""),
        y = i.useCallback(() => {
            let e = j.trim();
            if (0 !== e.length) {
                if (null != m && c.length >= m) {
                    null == g || g(a.intl.string(a.t.Xx7XeB));
                    return;
                }
                f(e), O("");
            }
        }, [j, m, f, g, c.length]),
        v = i.useCallback(
            (e) => {
                switch (e.key) {
                    case s.dh.BACKSPACE:
                        0 === j.length &&
                            c.length > 0 &&
                            (e.preventDefault(), e.stopPropagation(), null == u || u(new Set([c[c.length - 1].id])));
                        break;
                    case s.dh.ENTER:
                    case s.dh.TAB:
                    case s.dh.COMMA:
                        e.preventDefault(), e.stopPropagation(), y();
                }
            },
            [y, j.length, u, c],
        );
    return (0, r.jsx)(
        l.ksK,
        ((t = (function (e) {
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
        })(
            {
                leading: {
                    type: "tags",
                    label: o,
                    items: c,
                    onRemove: u,
                },
            },
            h,
        )),
        (n = n =
            {
                value: j,
                onKeyDown: v,
                onChange: O,
                maxLength: b,
                disabled: p,
                onBlur: y,
                placeholder: x,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
};
