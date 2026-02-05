n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(172218),
    a = n(397927),
    r = n(437290),
    s = n(892448);
function o(e) {
    let {
            users: t,
            isUserSelected: n,
            onSelectionChange: o,
            isFetching: d,
            onFetchMore: c,
            isUserDisabled: u,
            searchQuery: m = "",
            emptySearchContent: _,
            className: h,
            tooltipConfig: p,
        } = e,
        g = (0, l.K)((e) => {
            e && !d && c?.();
        });
    return m.length > 0 && 0 === t.length && null != _
        ? (0, i.jsxs)("div", {
              className: s.t,
              children: [
                  (0, i.jsx)(a.Heading, { variant: "heading-md/semibold", color: "text-strong", children: _.header }),
                  (0, i.jsx)(a.Text, { variant: "text-md/medium", color: "text-subtle", children: _.body }),
              ],
          })
        : (0, i.jsxs)(a.d_W, {
              className: h,
              children: [
                  t.map((e) =>
                      (0, i.jsx)(
                          r.A,
                          { user: e, checked: n(e), disabled: !!u?.(e), onChange: o, tooltipConfig: p },
                          e.id,
                      ),
                  ),
                  d && (0, i.jsx)(a.y$y, {}),
                  (0, i.jsx)("div", { ref: g }),
              ],
          });
}
