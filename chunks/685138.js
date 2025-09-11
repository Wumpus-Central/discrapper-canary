n.d(t, { n: () => f }), n(388685);
var r = n(647438),
    i = n(427164);
function a(e, t, n) {
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
function o(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
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
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = new Date(Date.UTC(2025, 8, 6)),
    u = (0, i.le)({
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
    d = () => {
        let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
        return parseInt("" !== e ? e : "375");
    };
function f(e) {
    var t;
    let { questConfig: n, location: i } = e,
        a = r.useMemo(() => new Date(n.startsAt), [n.startsAt]) >= c,
        s = u.useConfig({ location: a ? i : "NONE" }),
        f = (null == (t = s.status) ? void 0 : t.label1) ? 350 : 305,
        [_, p] = r.useState(() => d() < f);
    return (
        r.useEffect(() => {
            let e = new MutationObserver(() => {
                p(d() < f);
            });
            return (
                e.observe(document.body, {
                    attributes: !0,
                    attributeFilter: ["style"],
                }),
                () => e.disconnect()
            );
        }, [f]),
        r.useMemo(() => {
            var e, t, n;
            return s.enabled && a
                ? l(o({}, s), {
                      status: l(o({}, s.status), {
                          label1: (null == (e = s.status) ? void 0 : e.label1) && !_,
                          label2: (null == (t = s.status) ? void 0 : t.label2) && !_,
                          shineWipe: (null == (n = s.status) ? void 0 : n.shineWipe) || _,
                      }),
                  })
                : {
                      enabled: !1,
                      status: void 0,
                  };
        }, [s, a, _])
    );
}
