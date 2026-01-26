n.d(t, {
    A: () => l,
});
var r = n(627968);
n(64700);
var i = n(172218),
    a = n(397927),
    s = n(437290),
    o = n(892448);

function l(e) {
    let {
            users: t,
            isUserSelected: n,
            onSelectionChange: l,
            isFetching: c,
            onFetchMore: u,
            isUserDisabled: d,
            searchQuery: f = "",
            emptySearchContent: p,
            className: _,
            tooltipConfig: h,
        } = e,
        m = (0, i.K)((e) => {
            e && !c && (null == u || u());
        });
    return f.length > 0 && 0 === t.length && null != p
        ? (0, r.jsxs)("div", {
              className: o.t,
              children: [
                  (0, r.jsx)(a.Heading, {
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: p.header,
                  }),
                  (0, r.jsx)(a.Text, {
                      variant: "text-md/medium",
                      color: "text-subtle",
                      children: p.body,
                  }),
              ],
          })
        : (0, r.jsxs)(a.d_W, {
              className: _,
              children: [
                  t.map((e) =>
                      (0, r.jsx)(
                          s.A,
                          {
                              user: e,
                              checked: n(e),
                              disabled: !!(null == d ? void 0 : d(e)),
                              onChange: l,
                              tooltipConfig: h,
                          },
                          e.id,
                      ),
                  ),
                  c && (0, r.jsx)(a.y$y, {}),
                  (0, r.jsx)("div", {
                      ref: m,
                  }),
              ],
          });
}
