r.d(a, { d: () => d });
var t = r(477900),
    s = r(582128),
    o = r(844222),
    l = r(452027),
    n = r(489718);
function i(e) {
    let { checked: a, disabled: r, displayOnly: s, id: o, onChange: i, focusProps: d, hasIcon: c = !1, ...p } = e;
    return s
        ? (0, t.jsx)(n.I, { checked: a, disabled: r, displayOnly: !0, hasIcon: c })
        : (0, t.jsx)(l.D, {
              ...p,
              id: o,
              disabled: r,
              layout: "horizontal",
              interactiveLabel: !0,
              auxiliaryContentPosition: "under-label",
              children: (e) =>
                  (0, t.jsx)(n.I, {
                      focusProps: d,
                      id: e.controlId,
                      checked: a,
                      disabled: r,
                      onChange: i,
                      hasIcon: c,
                      describedBy: e.describedById,
                      labelledBy: e.labelId,
                  }),
          });
}
function d(e) {
    let { switchIconsEnabled: a } = s.useContext(o.C),
        r = void 0 !== e.hasIcon ? e.hasIcon : a;
    return (0, t.jsx)(i, { ...e, hasIcon: r });
}
