"use strict";
s.d(t, { A: () => c });
var r = s(627968);
s(64700);
var i = s(172218),
    n = s(397927),
    a = s(437290),
    l = s(68341);
function c(e) {
    let {
            users: t,
            isUserSelected: s,
            onSelectionChange: c,
            isFetching: u,
            onFetchMore: o,
            isUserDisabled: E,
            searchQuery: d = "",
            emptySearchContent: _,
            className: R,
            tooltipConfig: p,
        } = e,
        I = (0, i.K)((e) => {
            e && !u && o?.();
        });
    return d.length > 0 && 0 === t.length && null != _
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
                          { user: e, checked: s(e), disabled: !!E?.(e), onChange: c, tooltipConfig: p },
                          e.id,
                      ),
                  ),
                  u && (0, r.jsx)(n.y$y, {}),
                  (0, r.jsx)("div", { ref: I }),
              ],
          });
}
