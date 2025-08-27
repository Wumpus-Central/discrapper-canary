n.d(t, { q: () => p });
var r = n(951288);
n(647438);
var i = n(952265),
    o = n(159691),
    a = n(481060),
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
let _ = () => {
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
    p = () =>
        (0, s.e)("client_themes_editor")
            ? (0, r.jsx)(o.hU, {
                  "aria-label": u.intl.string(c.default.zgFs8P),
                  icon: a.aAc,
                  variant: "icon-only",
                  onClick: () => {
                      _();
                  },
              })
            : null;
