n.d(t, {
    O: () => c,
    Q: () => d
});
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(948865);
function c(e) {
    let { title: t, note: n, children: i, className: s, id: c } = e;
    return (0, r.jsxs)('div', {
        className: a()(o.inputItem, s),
        children: [
            (0, r.jsxs)('div', {
                className: o.inputItemText,
                children: [
                    (0, r.jsx)(l.Text, {
                        tag: 'label',
                        variant: 'text-md/medium',
                        className: o.inputItemTitle,
                        id: c,
                        children: t
                    }),
                    null != n &&
                        (0, r.jsx)(l.R94, {
                            className: o.__invalid_note,
                            type: l.R94.Types.DESCRIPTION,
                            children: n
                        })
                ]
            }),
            i
        ]
    });
}
function d(e) {
    var t,
        n,
        { options: s, value: d, select: u, selectClassName: m } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['options', 'value', 'select', 'selectClassName']);
    let p = i.useId();
    return (0, r.jsx)(
        c,
        ((t = (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, g)),
        (n = n =
            {
                id: p,
                children: (0, r.jsx)(l.PhF, {
                    'aria-labelledby': p,
                    className: a()(o.selectControl, m),
                    options: s,
                    isSelected: (e) => e === d,
                    select: u,
                    serialize: (e) => String(e)
                })
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
        t)
    );
}
