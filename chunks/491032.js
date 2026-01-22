n.d(t, { A: () => f }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(878701),
    a = n(754513),
    c = n(985018),
    o = n(410478);
function d(e) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    var t;
    let { rule: n, onChangeRule: f, collapsed: g = !1 } = e,
        [b, m] = i.useState(!g),
        p = i.useCallback(() => {
            m(!b);
        }, [b, m]),
        x = i.useCallback(
            (e) => {
                f(u(d({}, n), { triggerMetadata: u(d({}, n.triggerMetadata), { regexPatterns: e }) }));
            },
            [f, n],
        );
    return (0, s.u)(n.triggerType)
        ? (0, r.jsx)(l.Nt8, {
              isExpanded: b,
              collapsibleContent: (0, r.jsx)(a.A, {
                  rule: n,
                  onChangeText: x,
                  className: o.kS,
                  initialValue: null == (t = n.triggerMetadata) ? void 0 : t.regexPatterns,
              }),
              className: o.uR,
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, r.jsx)(l.DUT, {
                      onClick: (e) => {
                          p(), t(e);
                      },
                      children: (0, r.jsxs)("div", {
                          className: o.wx,
                          children: [
                              (0, r.jsx)(l.Heading, {
                                  variant: "text-sm/medium",
                                  children: c.intl.string(c.t["dnunm+"]),
                              }),
                              b
                                  ? (0, r.jsx)(l.tN5, {
                                        size: "md",
                                        color: "currentColor",
                                        className: o.UE,
                                    })
                                  : (0, r.jsx)(l.abt, {
                                        size: "md",
                                        color: "currentColor",
                                        className: o.UE,
                                    }),
                          ],
                      }),
                  });
              },
          })
        : null;
}
