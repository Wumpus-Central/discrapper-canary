n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(153867),
    l = n(706454),
    c = n(388032),
    u = n(558731),
    d = n(444675);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m() {
    let e = (0, a.e7)([l.default], () => l.default.locale),
        [t, f] = i.useState(e),
        [p] = i.useState(() =>
            (0, c.getAvailableLocales)().map((e) => {
                let t;
                try {
                    t = n(621287)("./".concat(e.value, ".png"));
                } catch (e) {
                    t = n(1474);
                }
                return h(_({}, e), {
                    name: (0, r.jsxs)("div", {
                        className: u.option,
                        children: [
                            (0, r.jsx)("span", {
                                className: u.localeName,
                                children: e.name,
                            }),
                            (0, r.jsx)("span", {
                                className: u.localizedName,
                                children: c.intl.string(e.localizedName),
                            }),
                            (0, r.jsx)("div", {
                                className: u.flag,
                                "aria-hidden": !0,
                                children: (0, r.jsx)("img", {
                                    alt: "",
                                    src: t,
                                    className: u.flagImage,
                                }),
                            }),
                        ],
                    }),
                });
            }),
        ),
        m = i.useCallback((e) => {
            let { value: t } = e;
            f(t), d.nextTick(() => s.ZP.updateLocale(t));
        }, []);
    return (0, r.jsx)(o.hjN, {
        tag: o.RB0.H1,
        title: c.intl.string(c.t.IHMsPj),
        children: (0, r.jsx)(o.hjN, {
            children: (0, r.jsx)(o.xJW, {
                title: c.intl.string(c.t["mx+sp6"]),
                children: (0, r.jsx)(o.FXm, {
                    onChange: m,
                    options: p,
                    value: t,
                }),
            }),
        }),
    });
}
