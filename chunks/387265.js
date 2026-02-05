n.d(t, { A: () => c }), n(321073);
var a = n(627968),
    s = n(64700),
    i = n(554146),
    l = n(397927),
    r = n(617617),
    o = n(256787),
    d = n(20439);
let c = s.memo(function (e) {
    let { className: t, content: n, onChange: c } = e,
        u = i.M[n],
        { isDismissed: m, handleToggleDismissState: h } = (0, d.A)(u),
        [x, p] = s.useState(!1),
        g = s.useCallback(() => {
            c?.(n), h();
        }, [c, h, n]),
        _ = s.useCallback(
            (e) => {
                e.preventDefault(), p(!0), navigator.clipboard.writeText(n.toLowerCase());
            },
            [n],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(l.BJc, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, a.jsx)(l.K0, {
                        size: "sm",
                        variant: "icon-only",
                        icon: x ? l.ODX : l.sjE,
                        onClick: _,
                        "aria-label": x ? "Copied" : "Copy",
                    }),
                    (0, a.jsx)(l.dOG, {
                        label: `${n.toLowerCase()} (${i.M[n]})`,
                        description: (0, o.Zm)(u)
                            ? (function (e) {
                                  let t = r.A.settings.userContent?.recurringDismissibleContentStates?.[e];
                                  if (null == t) return null;
                                  let n = [],
                                      { lastDismissedVersion: a, lastDismissedAtMs: s, lastDismissedObjectId: i } = t;
                                  if (
                                      (void 0 !== a && 0 !== a && n.push(`last_dismissed_version: ${a}`), void 0 !== s)
                                  ) {
                                      let e = Number(s),
                                          t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
                                      n.push(`last_dismissed_at: ${t}`);
                                  }
                                  return (void 0 !== i && "0" !== i && n.push(`last_dismissed_object_id: ${i}`),
                                  0 === n.length)
                                      ? null
                                      : n.join(", ");
                              })(u)
                            : null,
                        checked: m,
                        onChange: g,
                    }),
                ],
            }),
            (0, a.jsx)(l.cGx, {}),
        ],
    });
});
