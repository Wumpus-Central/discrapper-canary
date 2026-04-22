"use strict";
n.d(t, { A: () => c });
var a = n(627968);
n(64700);
var i = n(735438),
    r = n(534514),
    l = n(834730),
    s = n(985018),
    d = n(297897),
    o = n(60197);
let c = (e) => {
    let t = (0, i.flatMap)(e.history, (e) => {
        let {
                destination: [t],
                multiSelect: n,
            } = e,
            a = [null, null],
            i = Object.values(n?.state ?? {});
        return i.length > 0 && (a[0] = i.join(", ")), "" !== t && (a[1] = t), a;
    }).filter((e) => null != e);
    return 0 === t.length
        ? null
        : (0, a.jsxs)("div", {
              className: o.kL,
              children: [
                  (0, a.jsx)(r.D, {
                      className: o.MR,
                      color: "text-default",
                      variant: "heading-sm/semibold",
                      children: e.isModeratorReport ? s.intl.string(d.default["6mx/DP"]) : s.intl.string(s.t["+3V9Tp"]),
                  }),
                  t.map((e, t) =>
                      (0, a.jsxs)(
                          "div",
                          {
                              className: o.P,
                              children: [
                                  (0, a.jsx)("div", { className: o.RL }),
                                  (0, a.jsx)(l.E, { variant: "text-md/normal", className: o.b, children: e }),
                              ],
                          },
                          `${e}+${t}`,
                      ),
                  ),
              ],
          });
};
