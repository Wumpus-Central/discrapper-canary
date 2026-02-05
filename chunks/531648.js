"use strict";
n.d(t, { A: () => d, Q: () => c });
var r = n(627968);
n(64700);
var i = n(3026),
    a = n(397927),
    s = n(939496),
    o = n(996988),
    l = n(380297);
function u(e) {
    let { text: t, onClick: n, component: u, ...c } = e,
        { themeType: d } = (0, s.E)(),
        _ = "string" == typeof t ? t.trim() : t;
    if (null == _ || "" === _) return null;
    let f = () =>
        d === o.d.MODAL || d === o.d.MODAL_V2
            ? (0, r.jsx)(u, { color: "text-default", ...c, children: _ })
            : (0, r.jsx)(u, { color: "text-default", ...c, children: (0, r.jsx)(i.A, { children: _ }) });
    return null != n
        ? (0, r.jsx)(a.DUT, {
              onClick: (e) => {
                  e.stopPropagation(), n(e);
              },
              className: l.sd,
              children: f(),
          })
        : f();
}
function c(e) {
    return (0, r.jsx)(u, { component: a.Heading, ...e });
}
function d(e) {
    return (0, r.jsx)(u, { component: a.Text, ...e });
}
