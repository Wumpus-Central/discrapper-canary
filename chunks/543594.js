n.d(t, { A: () => m });
var i,
    l = n(627968);
n(64700);
var a = n(421380),
    r = n(397927),
    s = n(235986),
    o = n(460404),
    d = (((i = d || {}).SMALL = "SMALL"), (i.MEDIUM = "MEDIUM"), (i.LARGE = "LARGE"), i);
let c = { SMALL: o.rA, MEDIUM: o.Bx, LARGE: o.bU },
    u = (e) => {
        let { onDropdownClick: t, children: n, contentClassName: i, dropdownSize: d = "MEDIUM", ...u } = e;
        return (0, l.jsx)(a.$n, {
            ...u,
            children: (0, l.jsxs)(s.A, {
                align: s.A.Align.CENTER,
                children: [
                    (0, l.jsx)(s.A.Child, { className: i, children: n }),
                    null != t
                        ? (0, l.jsxs)(r.DUT, {
                              className: c[d],
                              onClick: (e) => {
                                  e.stopPropagation(), null != t && t(e);
                              },
                              children: [
                                  (0, l.jsx)("div", { className: o.ly }),
                                  (0, l.jsx)(r.abt, { size: "md", color: "currentColor", className: o.z3 }),
                              ],
                          })
                        : null,
                ],
            }),
        });
    };
(u.DropdownSizes = d), (u.Sizes = a.$n.Sizes), (u.Colors = a.$n.Colors), (u.Looks = a.$n.Looks);
let m = u;
