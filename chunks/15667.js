n.d(t, { Z: () => c }), n(388685);
var r = n(54381);
n(473749);
var i = n(392711),
    l = n(481060),
    a = n(388032),
    s = n(826688),
    o = n(644778);
let c = (e) => {
    let t = (0, i.flatMap)(e.history, (e) => {
        var t;
        let {
                destination: [n],
                multiSelect: r,
            } = e,
            i = [null, null],
            l = Object.values(null != (t = null == r ? void 0 : r.state) ? t : {});
        return l.length > 0 && (i[0] = l.join(", ")), "" !== n && (i[1] = n), i;
    }).filter((e) => null != e);
    return 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: o.container,
              children: [
                  (0, r.jsx)(l.Heading, {
                      className: o.breadcrumbsHeader,
                      color: "header-secondary",
                      variant: "heading-sm/semibold",
                      children: e.isModeratorReport ? a.intl.string(s.default["6mx/DP"]) : a.intl.string(a.t["+3V9Tp"]),
                  }),
                  t.map((e, t) =>
                      (0, r.jsxs)(
                          "div",
                          {
                              className: o.breadcrumbContainer,
                              children: [
                                  (0, r.jsx)("div", { className: o.breadcrumbDot }),
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-md/normal",
                                      className: o.breadcrumbText,
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
