"use strict";
n.d(t, { A: () => s });
var i = n(477900),
    r = n(452027),
    a = n(489718);
function s(e) {
    let { checked: t, disabled: n, displayOnly: s, id: l, onChange: o, focusProps: d, hasIcon: c = !1, ...u } = e;
    return s
        ? (0, i.jsx)(a.I, { checked: t, disabled: n, displayOnly: !0, hasIcon: c })
        : (0, i.jsx)(r.D, {
              ...u,
              id: l,
              disabled: n,
              layout: "horizontal",
              interactiveLabel: !0,
              auxiliaryContentPosition: "under-label",
              children: (e) =>
                  (0, i.jsx)(a.I, {
                      focusProps: d,
                      id: e.controlId,
                      checked: t,
                      disabled: n,
                      onChange: o,
                      hasIcon: c,
                      describedBy: e.describedById,
                      labelledBy: e.labelId,
                  }),
          });
}
