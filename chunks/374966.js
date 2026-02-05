n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var a = n(735438),
    i = n(397927),
    r = n(985018),
    s = n(641131),
    d = n(821596);
let o = (e) => {
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
              className: d.kL,
              children: [
                  (0, l.jsx)(i.Heading, {
                      className: d.MR,
                      color: "text-default",
                      variant: "heading-sm/semibold",
                      children: e.isModeratorReport ? r.intl.string(s.default["6mx/DP"]) : r.intl.string(r.t["+3V9Tp"]),
                  }),
                  t.map((e, t) =>
                      (0, l.jsxs)(
                          "div",
                          {
                              className: d.P,
                              children: [
                                  (0, l.jsx)("div", { className: d.RL }),
                                  (0, l.jsx)(i.Text, { variant: "text-md/normal", className: d.b, children: e }),
                              ],
                          },
                          `${e}+${t}`,
                      ),
                  ),
              ],
          });
};
