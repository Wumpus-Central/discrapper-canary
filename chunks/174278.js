n.d(t, { q: () => m });
var r = n(54381);
n(473749);
var i = n(952265),
    a = n(28664),
    o = n(159691),
    s = n(481060),
    l = n(479661),
    c = n(135102),
    u = n(896591),
    d = n(388032);
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
                f(e, t, n[t]);
            });
    }
    return e;
}
let _ = () => {
        (0, i.ZD)(
            async () => {
                let { CustomThemesShareModalWrapper: e } = await Promise.all([n.e("36653"), n.e("26196")]).then(
                    n.bind(n, 433359),
                );
                return (t) => (0, r.jsx)(e, p({}, t));
            },
            { modalKey: c.tj },
        );
    },
    m = () =>
        (0, l.e)("client_themes_editor")
            ? (0, r.jsx)(a.u, {
                  text: d.intl.string(d.t.RDE0Sc),
                  children: (0, r.jsx)(o.hU, {
                      "aria-label": d.intl.string(u.default.zgFs8C),
                      icon: s.aAc,
                      variant: "icon-only",
                      onClick: () => {
                          _();
                      },
                  }),
              })
            : null;
