n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(153867),
    c = n(706454),
    u = n(313789),
    d = n(273313),
    f = n(518596),
    p = n(981631),
    _ = n(388032),
    m = n(558731),
    h = n(444675);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O() {
    let e = (0, a.e7)([c.default], () => c.default.locale),
        [t, g] = i.useState(e),
        [b] = i.useState(() =>
            (0, _.getAvailableLocales)().map((e) => {
                let t;
                try {
                    t = n(621287)("./".concat(e.value, ".png"));
                } catch (e) {
                    t = n(1474);
                }
                return y(E({}, e), {
                    name: (0, r.jsxs)("div", {
                        className: m.option,
                        children: [
                            (0, r.jsx)("span", {
                                className: m.localeName,
                                children: e.name,
                            }),
                            (0, r.jsx)("span", {
                                className: m.localizedName,
                                children: _.intl.string(e.localizedName),
                            }),
                            (0, r.jsx)("div", {
                                className: m.flag,
                                "aria-hidden": !0,
                                children: (0, r.jsx)("img", {
                                    alt: "",
                                    src: t,
                                    className: m.flagImage,
                                }),
                            }),
                        ],
                    }),
                });
            }),
        ),
        O = i.useCallback((e) => {
            let { value: t } = e;
            g(t),
                h.nextTick(() => {
                    l.ZP.updateLocale(t),
                        (0, s.Mr3)(f.USER_SETTINGS_MODAL_KEY) &&
                            (0, f.openUserSettings)(u.n.LOCALE_PANEL, { section: p.oAB.LOCALE });
                });
        }, []);
    return (0, r.jsx)(d.Z, {
        title: _.intl.string(_.t.IHMsPn),
        children: (0, r.jsx)(o.Gu, {
            label: _.intl.string(_.t["mx+sp7"]),
            onChange: O,
            options: b,
            value: t,
        }),
    });
}
