n.d(t, { q: () => m });
var r = n(951288);
n(647438);
var i = n(952265),
    a = n(159691),
    o = n(481060),
    s = n(479661),
    l = n(135102),
    c = n(119475),
    u = n(388032);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = () => {
        (0, i.ZD)(
            async () => {
                let { CustomThemesShareModalWrapper: e } = await Promise.all([n.e("47051"), n.e("26196")]).then(
                    n.bind(n, 433359),
                );
                return (t) => (0, r.jsx)(e, f({}, t));
            },
            { modalKey: l.tj },
        );
    },
    m = () =>
        (0, s.e)("client_themes_editor")
            ? (0, r.jsx)(o.ua7, {
                  text: u.intl.string(u.t.RDE0SU),
                  children: (e) =>
                      (0, r.jsx)(
                          a.hU,
                          p(f({}, e), {
                              "aria-label": u.intl.string(c.default.zgFs8P),
                              icon: o.aAc,
                              variant: "icon-only",
                              onClick: () => {
                                  h();
                              },
                          }),
                      ),
              })
            : null;
