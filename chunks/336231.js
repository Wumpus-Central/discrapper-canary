r.r(t), r.d(t, { default: () => i }), r(47120);
var n = r(200651),
    o = r(192379),
    l = r(481060),
    c = r(388032);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function i(e) {
    let { defaultColor: t, colors: r, value: i, onChange: a, disabled: b = !1, customPickerPosition: p = 'bottom' } = e,
        [j, f] = o.useState(() => (0 === i || i === t || r.some((e) => e === i) ? null : i));
    o.useEffect(() => {
        f(0 === i || i === t || r.some((e) => e === i) ? null : i);
    }, [i, r, t]);
    let O = o.useCallback(
            (e) => {
                null == a || a(e), f(null);
            },
            [a, f]
        ),
        y = o.useCallback(
            (e) => {
                null == a || a(e), f(e);
            },
            [a, f]
        ),
        d = o.useCallback(
            () =>
                (0, n.jsx)(l.Z$W, {
                    onChange: y,
                    value: j
                }),
            [y, j]
        ),
        h = o.useCallback(
            (e) => {
                let t = (0, n.jsx)(l.jHW, s(u({}, e), { 'aria-label': c.NW.string(c.t['FHBa//']) }));
                return b
                    ? t
                    : (0, n.jsx)(l.yRy, {
                          renderPopout: d,
                          position: p,
                          children: (e) =>
                              (0, n.jsx)(l.ua7, {
                                  text: c.NW.string(c.t['FHBa//']),
                                  position: 'bottom',
                                  children: (r) => (0, n.jsx)('div', s(u({}, r, e), { children: t }))
                              })
                      });
            },
            [p, b, d]
        ),
        g = o.useCallback(
            (e) => {
                let t = (0, n.jsx)(l.AGO, u({}, e));
                return b
                    ? t
                    : (0, n.jsx)(l.ua7, {
                          text: c.NW.string(c.t.bBvAEB),
                          position: 'bottom',
                          children: (e) => (0, n.jsx)('div', s(u({}, e), { children: t }))
                      });
            },
            [b]
        );
    return (0, n.jsx)(
        l.zH8,
        s(u({}, e), {
            renderDefaultButton: g,
            renderCustomButton: h,
            customColor: j,
            onChange: O
        })
    );
}
