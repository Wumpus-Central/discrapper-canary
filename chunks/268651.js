"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(878701),
    a = n(754513),
    o = n(985018),
    d = n(576165);
function c(e) {
    let { rule: t, onChangeRule: n, collapsed: c = !1 } = e,
        [u, m] = s.useState(!c),
        g = s.useCallback(() => {
            m(!u);
        }, [u, m]),
        x = s.useCallback(
            (e) => {
                n({ ...t, triggerMetadata: { ...t.triggerMetadata, regexPatterns: e } });
            },
            [n, t],
        );
    return (0, r.u)(t.triggerType)
        ? (0, i.jsx)(l.Nt8, {
              isExpanded: u,
              collapsibleContent: (0, i.jsx)(a.A, {
                  rule: t,
                  onChangeText: x,
                  className: d.kS,
                  initialValue: t.triggerMetadata?.regexPatterns,
              }),
              className: d.uR,
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(l.DUT, {
                      onClick: (e) => {
                          g(), t(e);
                      },
                      children: (0, i.jsxs)("div", {
                          className: d.wx,
                          children: [
                              (0, i.jsx)(l.Heading, {
                                  variant: "text-sm/medium",
                                  children: o.intl.string(o.t["dnunm+"]),
                              }),
                              u
                                  ? (0, i.jsx)(l.tN5, { size: "md", color: "currentColor", className: d.UE })
                                  : (0, i.jsx)(l.abt, { size: "md", color: "currentColor", className: d.UE }),
                          ],
                      }),
                  });
              },
          })
        : null;
}
