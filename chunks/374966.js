n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var a = n(735438),
    i = n(534514),
    r = n(834730),
    s = n(985018),
    d = n(221314),
    o = n(660261);
let c = (e) => {
    let t = (0, a.flatMap)(e.history, (e) => {
        let {
                destination: [t],
                multiSelect: n,
            } = e,
            l = [null, null],
            a = Object.values(n?.state ?? {});
        return a.length > 0 && (l[0] = a.join(", ")), "" !== t && (l[1] = t), l;
    }).filter((e) => null != e);
    return 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: o.kL,
              children: [
                  (0, l.jsx)(i.D, {
                      className: o.MR,
                      color: "text-default",
                      variant: "heading-sm/semibold",
                      children: e.isModeratorReport ? s.intl.string(d.default["6mx/DP"]) : s.intl.string(s.t["+3V9Tp"]),
                  }),
                  t.map((e, t) =>
                      (0, l.jsxs)(
                          "div",
                          {
                              className: o.P,
                              children: [
                                  (0, l.jsx)("div", { className: o.RL }),
                                  (0, l.jsx)(r.E, { variant: "text-md/normal", className: o.b, children: e }),
                              ],
                          },
                          `${e}+${t}`,
                      ),
                  ),
              ],
          });
};
