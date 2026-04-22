n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(311678),
    r = n(939249),
    a = n(534514),
    o = n(900797),
    d = n(847374),
    c = n(878701),
    u = n(754513),
    m = n(985018),
    g = n(120085);
function h(e) {
    let { rule: t, onChangeRule: n, collapsed: h = !1 } = e,
        [x, _] = l.useState(!h),
        p = l.useCallback(() => {
            _(!x);
        }, [x, _]),
        A = l.useCallback(
            (e) => {
                n({ ...t, triggerMetadata: { ...t.triggerMetadata, regexPatterns: e } });
            },
            [n, t],
        );
    return (0, c.u)(t.triggerType)
        ? (0, i.jsx)(s.N, {
              isExpanded: x,
              collapsibleContent: (0, i.jsx)(u.A, {
                  rule: t,
                  onChangeText: A,
                  className: g.kS,
                  initialValue: t.triggerMetadata?.regexPatterns,
              }),
              className: g.uR,
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(r.D, {
                      onClick: (e) => {
                          p(), t(e);
                      },
                      children: (0, i.jsxs)("div", {
                          className: g.wx,
                          children: [
                              (0, i.jsx)(a.D, { variant: "text-sm/medium", children: m.intl.string(m.t["dnunm+"]) }),
                              x
                                  ? (0, i.jsx)(o.t, { size: "md", color: "currentColor", className: g.UE })
                                  : (0, i.jsx)(d.a, { size: "md", color: "currentColor", className: g.UE }),
                          ],
                      }),
                  });
              },
          })
        : null;
}
