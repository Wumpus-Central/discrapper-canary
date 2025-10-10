n.d(t, { Z: () => o }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    s = n(981631),
    a = n(388032);
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
            placeholder: x,
        } = e,
        b = (function (e, t) {
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
    let [j, _] = i.useState(null != d ? d : ""),
        v = i.useCallback(() => {
            let e = j.trim();
            if (0 !== e.length) {
                if (null != f && o.length >= f) {
                    null == m || m(a.intl.string(a.t.Xx7XeH));
                    return;
                }
                g(e), _("");
            }
        }, [j, f, g, m, o.length]),
        C = i.useCallback(
            (e) => {
                switch (e.keyCode) {
                    case s.yXg.BACKSPACE:
                        0 === j.length &&
                            o.length > 0 &&
                            (e.preventDefault(), e.stopPropagation(), null == u || u(new Set([o[o.length - 1].id])));
                        break;
                    case s.yXg.ENTER:
                    case s.yXg.TAB:
                    case s.yXg.COMMA:
                        e.preventDefault(), e.stopPropagation(), v();
                }
            },
            [v, j.length, u, o],
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
            b,
        )),
        (n = n =
            {
                value: j,
                onKeyDown: C,
                onChange: _,
                maxLength: p,
                disabled: h,
                onBlur: v,
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
