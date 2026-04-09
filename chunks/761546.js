s.d(t, { A: () => l });
var a = s(627968);
s(64700);
var r = s(172218),
    i = s(397927),
    n = s(437290),
    c = s(68341);
function l(e) {
    let {
            users: t,
            isUserSelected: s,
            onSelectionChange: l,
            isFetching: _,
            onFetchMore: d,
            isUserDisabled: u,
            searchQuery: E = "",
            emptySearchContent: m,
            className: o,
            tooltipConfig: h,
        } = e,
        R = (0, r.K)((e) => {
            e && !_ && d?.();
        });
    return E.length > 0 && 0 === t.length && null != m
        ? (0, a.jsxs)("div", {
              className: c.t,
              children: [
                  (0, a.jsx)(i.Heading, { variant: "heading-md/semibold", color: "text-strong", children: m.header }),
                  (0, a.jsx)(i.Text, { variant: "text-md/medium", color: "text-subtle", children: m.body }),
              ],
          })
        : (0, a.jsxs)(i.d_W, {
              className: o,
              children: [
                  t.map((e) =>
                      (0, a.jsx)(
                          n.A,
                          { user: e, checked: s(e), disabled: !!u?.(e), onChange: l, tooltipConfig: h },
                          e.id,
                      ),
                  ),
                  _ && (0, a.jsx)(i.y$y, {}),
                  (0, a.jsx)("div", { ref: R }),
              ],
          });
}
