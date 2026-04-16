"use strict";
n.d(t, { A: () => c }), n(938796);
var i = n(627968);
n(64700);
var s = n(665260),
    l = n(397927),
    r = n(957545),
    a = n(652215),
    o = n(985018),
    d = n(369e3);
let c = (e) => {
    let { role: t } = e;
    return (0, s.Lt)(t.flags, a.gxX.IN_PROMPT)
        ? (0, r.J)(t)
            ? (0, i.jsxs)("div", {
                  className: d.lm,
                  children: [
                      (0, i.jsx)(l.EpV, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          className: d.Qf,
                      }),
                      (0, i.jsx)(l.Text, { variant: "text-sm/normal", children: o.intl.string(o.t.YRbgXz) }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  className: d.lm,
                  children: [
                      (0, i.jsx)(l.EpV, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          className: d.EP,
                      }),
                      (0, i.jsx)(l.Text, { variant: "text-sm/normal", children: o.intl.string(o.t.mqeO2v) }),
                  ],
              })
        : null;
};
