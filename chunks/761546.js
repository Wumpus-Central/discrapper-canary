n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var a = n(172218),
    i = n(534514),
    s = n(834730),
    l = n(573613),
    c = n(289873),
    o = n(437290),
    d = n(661829);
function u(e) {
    let {
            users: t,
            isUserSelected: n,
            onSelectionChange: u,
            isFetching: _,
            onFetchMore: m,
            isUserDisabled: p,
            searchQuery: f = "",
            emptySearchContent: A,
            className: g,
            tooltipConfig: h,
        } = e,
        b = (0, a.K)((e) => {
            e && !_ && m?.();
        });
    return f.length > 0 && 0 === t.length && null != A
        ? (0, r.jsxs)("div", {
              className: d.t,
              children: [
                  (0, r.jsx)(i.D, { variant: "heading-md/semibold", color: "text-strong", children: A.header }),
                  (0, r.jsx)(s.E, { variant: "text-md/medium", color: "text-subtle", children: A.body }),
              ],
          })
        : (0, r.jsxs)(l.d_, {
              className: g,
              children: [
                  t.map((e) =>
                      (0, r.jsx)(
                          o.A,
                          { user: e, checked: n(e), disabled: !!p?.(e), onChange: u, tooltipConfig: h },
                          e.id,
                      ),
                  ),
                  _ && (0, r.jsx)(c.y, {}),
                  (0, r.jsx)("div", { ref: b }),
              ],
          });
}
