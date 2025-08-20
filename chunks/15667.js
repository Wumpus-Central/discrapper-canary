n.d(t, { Z: () => c }), n(388685);
var r = n(951288);
n(647438);
var i = n(392711),
    l = n(481060),
    a = n(388032),
    o = n(764295),
    s = n(158168);
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
              className: s.container,
              children: [
                  (0, r.jsx)(l.X6q, {
                      className: s.breadcrumbsHeader,
                      color: "header-secondary",
                      variant: "heading-sm/semibold",
                      children: e.isModeratorReport ? a.intl.string(o.default["6mx/DA"]) : a.intl.string(a.t["+3V9Tk"]),
                  }),
                  t.map((e, t) =>
                      (0, r.jsxs)(
                          "div",
                          {
                              className: s.breadcrumbContainer,
                              children: [
                                  (0, r.jsx)("div", { className: s.breadcrumbDot }),
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-md/normal",
                                      className: s.breadcrumbText,
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
