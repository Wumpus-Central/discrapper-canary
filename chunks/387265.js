n.d(t, { A: () => d }), n(896048), n(321073);
var a = n(627968),
    l = n(64700),
    i = n(554146),
    r = n(397927),
    s = n(617617),
    o = n(256787),
    c = n(20439);
let d = l.memo(function (e) {
    let { className: t, content: n, onChange: d } = e,
        u = i.M[n],
        { isDismissed: m, handleToggleDismissState: p } = (0, c.A)(u),
        [h, f] = l.useState(!1),
        x = l.useCallback(() => {
            null == d || d(n), p();
        }, [d, p, n]),
        b = l.useCallback(
            (e) => {
                e.preventDefault(), f(!0), navigator.clipboard.writeText(n.toLowerCase());
            },
            [n],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(r.BJc, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, a.jsx)(r.K0, {
                        size: "sm",
                        variant: "icon-only",
                        icon: h ? r.ODX : r.sjE,
                        onClick: b,
                        "aria-label": h ? "Copied" : "Copy",
                    }),
                    (0, a.jsx)(r.dOG, {
                        label: "".concat(n.toLowerCase(), " (").concat(i.M[n], ")"),
                        description: (0, o.Zm)(u)
                            ? (function (e) {
                                  var t, n;
                                  let a =
                                      null == (n = s.A.settings.userContent) ||
                                      null == (t = n.recurringDismissibleContentStates)
                                          ? void 0
                                          : t[e];
                                  if (null == a) return null;
                                  let l = [],
                                      { lastDismissedVersion: i, lastDismissedAtMs: r, lastDismissedObjectId: o } = a;
                                  if (
                                      (void 0 !== i && 0 !== i && l.push("last_dismissed_version: ".concat(i)),
                                      void 0 !== r)
                                  ) {
                                      let e = Number(r),
                                          t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
                                      l.push("last_dismissed_at: ".concat(t));
                                  }
                                  return (void 0 !== o && "0" !== o && l.push("last_dismissed_object_id: ".concat(o)),
                                  0 === l.length)
                                      ? null
                                      : l.join(", ");
                              })(u)
                            : null,
                        checked: m,
                        onChange: x,
                    }),
                ],
            }),
            (0, a.jsx)(r.cGx, {}),
        ],
    });
});
