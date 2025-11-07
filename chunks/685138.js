n.d(t, { n: () => c }), n(388685);
var r = n(647438),
    l = n(427164);
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
function i(e, t) {
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
let a = new Date(Date.UTC(2025, 8, 6)),
    o = (0, l.le)({
        name: "2025-09-quest-brand-color-removal-phase-2",
        kind: "user",
        defaultConfig: {
            enabled: !1,
            status: void 0,
        },
        variations: {
            0: {
                enabled: !1,
                status: void 0,
            },
            1: {
                enabled: !0,
                status: {
                    progressBlur: !0,
                    label1: !1,
                    label2: !1,
                    shineWipe: !0,
                },
            },
            2: {
                enabled: !0,
                status: {
                    progressBlur: !1,
                    label1: !0,
                    label2: !1,
                    shineWipe: !1,
                },
            },
            3: {
                enabled: !0,
                status: {
                    progressBlur: !1,
                    label1: !1,
                    label2: !0,
                    shineWipe: !1,
                },
            },
            4: {
                enabled: !0,
                status: {
                    progressBlur: !1,
                    label1: !1,
                    label2: !1,
                    shineWipe: !0,
                },
            },
        },
    }),
    u = () => {
        let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
        return parseInt("" !== e ? e : "375");
    };
function c(e) {
    var t;
    let { questConfig: n, location: l } = e,
        c = r.useMemo(() => new Date(n.startsAt), [n.startsAt]) >= a,
        d = o.useConfig({ location: c ? l : "NONE" }),
        p = (null == (t = d.status) ? void 0 : t.label1) ? 300 : 270,
        [f, m] = r.useState(() => u() < p);
    return (
        r.useEffect(() => {
            let e = new MutationObserver(() => {
                m(u() < p);
            });
            return (
                e.observe(document.body, {
                    attributes: !0,
                    attributeFilter: ["style"],
                }),
                () => e.disconnect()
            );
        }, [p]),
        r.useMemo(() => {
            var e, t, n;
            return d.enabled && c
                ? i(s({}, d), {
                      status: i(s({}, d.status), {
                          label1: (null == (e = d.status) ? void 0 : e.label1) && !f,
                          label2: (null == (t = d.status) ? void 0 : t.label2) && !f,
                          shineWipe: null == (n = d.status) ? void 0 : n.shineWipe,
                      }),
                  })
                : {
                      enabled: !1,
                      status: void 0,
                  };
        }, [d, c, f])
    );
}
