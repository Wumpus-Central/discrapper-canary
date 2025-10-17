n.d(t, { Z: () => o }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(295907),
    s = n(388032);
let o = (e) => {
    var t,
        n,
        {
            tags: o,
            tagsLabel: c,
            value: d,
            onRemoveTag: u,
            onAddTag: g,
            onAddTagError: m,
            maxTaxLength: p,
            maxTags: f,
            disabled: h,
            placeholder: b,
        } = e,
        x = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
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
        ]);
    let [j, v] = i.useState(null != d ? d : ""),
        _ = i.useCallback(() => {
            let e = j.trim();
            if (0 !== e.length) {
                if (null != f && o.length >= f) {
                    null == m || m(s.intl.string(s.t.Xx7XeH));
                    return;
                }
                g(e), v("");
            }
        }, [j, f, g, m, o.length]),
        C = i.useCallback(
            (e) => {
                switch (e.key) {
                    case a.vn.BACKSPACE:
                        0 === j.length &&
                            o.length > 0 &&
                            (e.preventDefault(), e.stopPropagation(), null == u || u(new Set([o[o.length - 1].id])));
                        break;
                    case a.vn.ENTER:
                    case a.vn.TAB:
                    case a.vn.COMMA:
                        e.preventDefault(), e.stopPropagation(), _();
                }
            },
            [_, j.length, u, o],
        );
    return (0, r.jsx)(
        l.oil,
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
                    label: c,
                    items: o,
                    onRemove: u,
                },
            },
            x,
        )),
        (n = n =
            {
                value: j,
                onKeyDown: C,
                onChange: v,
                maxLength: p,
                disabled: h,
                onBlur: _,
                placeholder: b,
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
