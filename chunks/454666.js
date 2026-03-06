"use strict";
n.d(t, { s: () => l });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(500380),
    a = n(518977),
    o = n(733266);
function l(e) {
    let { storeCountry: t, relocationCountry: n } = e;
    return (0, r.jsxs)("div", {
        className: o.n,
        children: [
            (0, r.jsx)("img", { alt: "", className: o.J, src: (0, s.t)(t) }),
            (0, r.jsx)(i.Text, { variant: "text-sm/medium", color: "text-muted", children: (0, a.j7)(t) }),
            null != n
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(i.Text, {
                              "aria-hidden": !0,
                              variant: "text-sm/medium",
                              color: "text-muted",
                              children: "→",
                          }),
                          (0, r.jsx)("img", { alt: "", className: o.J, src: (0, s.t)(n) }),
                          (0, r.jsx)(i.Text, {
                              variant: "text-sm/medium",
                              color: "text-muted",
                              children: (0, a.j7)(n),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
