n.d(t, { A: () => c }), n(896048);
var l = n(627968);
n(64700);
var r = n(735438),
    a = n(397927),
    i = n(985018),
    s = n(641131),
    o = n(821596);
let c = (e) => {
    let t = (0, r.flatMap)(e.history, (e) => {
        var t;
        let {
                destination: [n],
                multiSelect: l,
            } = e,
            r = [null, null],
            a = Object.values(null != (t = null == l ? void 0 : l.state) ? t : {});
        return a.length > 0 && (r[0] = a.join(", ")), "" !== n && (r[1] = n), r;
    }).filter((e) => null != e);
    return 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: o.kL,
              children: [
                  (0, l.jsx)(a.Heading, {
                      className: o.MR,
                      color: "text-default",
                      variant: "heading-sm/semibold",
                      children: e.isModeratorReport ? i.intl.string(s.default["6mx/DP"]) : i.intl.string(i.t["+3V9Tp"]),
                  }),
                  t.map((e, t) =>
                      (0, l.jsxs)(
                          "div",
                          {
                              className: o.P,
                              children: [
                                  (0, l.jsx)("div", { className: o.RL }),
                                  (0, l.jsx)(a.Text, {
                                      variant: "text-md/normal",
                                      className: o.b,
                                      children: e,
                                  }),
                              ],
                          },
                          "".concat(e, "+").concat(t),
                      ),
                  ),
              ],
          });
};
