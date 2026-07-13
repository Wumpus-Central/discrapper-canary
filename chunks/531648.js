"use strict";
n.d(t, { A: () => E, Q: () => _ });
var i = n(627968);
n(64700);
var r = n(3026),
    a = n(939249),
    s = n(534514),
    l = n(834730),
    o = n(939496),
    d = n(996988),
    c = n(514566);
function u(e) {
    let { text: t, onClick: n, component: s, ...l } = e,
        { themeType: u } = (0, o.E)(),
        _ = "string" == typeof t ? t.trim() : t;
    if (null == _ || "" === _) return null;
    let E = () =>
        u === d.d.MODAL || u === d.d.MODAL_V2
            ? (0, i.jsx)(s, { color: "text-default", ...l, children: _ })
            : (0, i.jsx)(s, { color: "text-default", ...l, children: (0, i.jsx)(r.A, { children: _ }) });
    return null != n
        ? (0, i.jsx)(a.D, {
              onClick: (e) => {
                  e.stopPropagation(), n(e);
              },
              className: c.sd,
              children: E(),
          })
        : E();
}
function _(e) {
    return (0, i.jsx)(u, { component: s.D, ...e });
}
function E(e) {
    return (0, i.jsx)(u, { component: l.E, ...e });
}
