n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(153867),
    c = n(706454),
    u = n(388032),
    d = n(558731),
    f = n(444675);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g() {
    let e = (0, a.e7)([c.default], () => c.default.locale),
        [t, _] = i.useState(e),
        [h] = i.useState(() =>
            (0, u.getAvailableLocales)().map((e) => {
                let t;
                try {
                    t = n(621287)("./".concat(e.value, ".png"));
                } catch (e) {
                    t = n(1474);
                }
                return m(p({}, e), {
                    name: (0, r.jsxs)("div", {
                        className: d.option,
                        children: [
                            (0, r.jsx)("span", {
                                className: d.localeName,
                                children: e.name,
                            }),
                            (0, r.jsx)("span", {
                                className: d.localizedName,
                                children: u.intl.string(e.localizedName),
                            }),
                            (0, r.jsx)("div", {
                                className: d.flag,
                                "aria-hidden": !0,
                                children: (0, r.jsx)("img", {
                                    alt: "",
                                    src: t,
                                    className: d.flagImage,
                                }),
                            }),
                        ],
                    }),
                });
            }),
        ),
        g = i.useCallback((e) => {
            let { value: t } = e;
            _(t), f.nextTick(() => l.ZP.updateLocale(t));
        }, []);
    return (0, r.jsx)(s.hjN, {
        tag: s.RB0.H1,
        title: u.intl.string(u.t.IHMsPj),
        children: (0, r.jsx)(s.hjN, {
            children: (0, r.jsx)(o.Gu, {
                label: u.intl.string(u.t["mx+sp6"]),
                onChange: g,
                options: h,
                value: t,
            }),
        }),
    });
}
