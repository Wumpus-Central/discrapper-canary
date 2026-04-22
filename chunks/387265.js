a.d(t, { A: () => x }), a(321073);
var n = a(627968),
    l = a(64700),
    i = a(554146),
    s = a(331322),
    r = a(408278),
    o = a(662546),
    d = a(420897),
    c = a(243721),
    u = a(404778),
    m = a(617617),
    h = a(256787),
    p = a(20439);
let x = l.memo(function (e) {
    let { className: t, content: a, onChange: x } = e,
        g = i.M[a],
        { isDismissed: v, handleToggleDismissState: b } = (0, p.A)(g),
        [_, f] = l.useState(!1),
        j = l.useCallback(() => {
            x?.(a), b();
        }, [x, b, a]),
        A = l.useCallback(
            (e) => {
                e.preventDefault(), f(!0), navigator.clipboard.writeText(a.toLowerCase());
            },
            [a],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(s.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, n.jsx)(r.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: _ ? o.O : d.s,
                        onClick: A,
                        "aria-label": _ ? "Copied" : "Copy",
                    }),
                    (0, n.jsx)(c.d, {
                        label: `${a.toLowerCase()} (${i.M[a]})`,
                        description: (0, h.Zm)(g)
                            ? (function (e) {
                                  let t = m.A.settings.userContent?.recurringDismissibleContentStates?.[e];
                                  if (null == t) return null;
                                  let a = [],
                                      { lastDismissedVersion: n, lastDismissedAtMs: l, lastDismissedObjectId: i } = t;
                                  if (
                                      (void 0 !== n && 0 !== n && a.push(`last_dismissed_version: ${n}`), void 0 !== l)
                                  ) {
                                      let e = Number(l),
                                          t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
                                      a.push(`last_dismissed_at: ${t}`);
                                  }
                                  return (void 0 !== i && "0" !== i && a.push(`last_dismissed_object_id: ${i}`),
                                  0 === a.length)
                                      ? null
                                      : a.join(", ");
                              })(g)
                            : null,
                        checked: v,
                        onChange: j,
                    }),
                ],
            }),
            (0, n.jsx)(u.c, {}),
        ],
    });
});
