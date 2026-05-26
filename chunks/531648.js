"use strict";
n.d(t, { A: () => f, Q: () => _ });
var i = n(627968);
n(64700);
var r = n(780645),
    s = n(939249),
    a = n(534514),
    o = n(834730),
    l = n(939496),
    u = n(996988),
    c = n(514566);
function d(e) {
    let { text: t, onClick: n, component: a, ...o } = e,
        { themeType: d } = (0, l.E)(),
        _ = "string" == typeof t ? t.trim() : t;
    if (null == _ || "" === _) return null;
    let f = () =>
        d === u.d.MODAL || d === u.d.MODAL_V2
            ? (0, i.jsx)(a, { color: "text-default", ...o, children: _ })
            : (0, i.jsx)(a, { color: "text-default", ...o, children: (0, i.jsx)(r.A, { children: _ }) });
    return null != n
        ? (0, i.jsx)(s.D, {
              onClick: (e) => {
                  e.stopPropagation(), n(e);
              },
              className: c.sd,
              children: f(),
          })
        : f();
}
function _(e) {
    return (0, i.jsx)(d, { component: a.D, ...e });
}
function f(e) {
    return (0, i.jsx)(d, { component: o.E, ...e });
}
