n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var a = n(172218),
    l = n(397927),
    r = n(437290),
    s = n(255730);
function o(e) {
    let {
            users: t,
            isUserSelected: n,
            onSelectionChange: o,
            isFetching: c,
            onFetchMore: d,
            isUserDisabled: u,
            searchQuery: _ = "",
            emptySearchContent: m,
            className: A,
            tooltipConfig: E,
        } = e,
        I = (0, a.K)((e) => {
            e && !c && d?.();
        });
    return _.length > 0 && 0 === t.length && null != m
        ? (0, i.jsxs)("div", {
              className: s.t,
              children: [
                  (0, i.jsx)(l.Heading, { variant: "heading-md/semibold", color: "text-strong", children: m.header }),
                  (0, i.jsx)(l.Text, { variant: "text-md/medium", color: "text-subtle", children: m.body }),
              ],
          })
        : (0, i.jsxs)(l.d_W, {
              className: A,
              children: [
                  t.map((e) =>
                      (0, i.jsx)(
                          r.A,
                          { user: e, checked: n(e), disabled: !!u?.(e), onChange: o, tooltipConfig: E },
                          e.id,
                      ),
                  ),
                  c && (0, i.jsx)(l.y$y, {}),
                  (0, i.jsx)("div", { ref: I }),
              ],
          });
}
