"use strict";
s.d(t, { A: () => u });
var r = s(627968);
s(64700);
var i = s(172218),
    n = s(397927),
    a = s(437290),
    l = s(255730);
function u(e) {
    let {
            users: t,
            isUserSelected: s,
            onSelectionChange: u,
            isFetching: c,
            onFetchMore: o,
            isUserDisabled: d,
            searchQuery: E = "",
            emptySearchContent: _,
            className: R,
            tooltipConfig: p,
        } = e,
        I = (0, i.K)((e) => {
            e && !c && o?.();
        });
    return E.length > 0 && 0 === t.length && null != _
        ? (0, r.jsxs)("div", {
              className: l.t,
              children: [
                  (0, r.jsx)(n.Heading, { variant: "heading-md/semibold", color: "text-strong", children: _.header }),
                  (0, r.jsx)(n.Text, { variant: "text-md/medium", color: "text-subtle", children: _.body }),
              ],
          })
        : (0, r.jsxs)(n.d_W, {
              className: R,
              children: [
                  t.map((e) =>
                      (0, r.jsx)(
                          a.A,
                          { user: e, checked: s(e), disabled: !!d?.(e), onChange: u, tooltipConfig: p },
                          e.id,
                      ),
                  ),
                  c && (0, r.jsx)(n.y$y, {}),
                  (0, r.jsx)("div", { ref: I }),
              ],
          });
}
