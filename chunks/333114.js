n.d(e, { default: () => h });
var i = n(627968),
    l = n(64700),
    s = n(189213),
    r = n(17928),
    a = n(834730),
    u = n(287809),
    d = n(633075),
    c = n(725386),
    o = n(527139),
    g = n(375708),
    f = n(500681);
function h(t) {
    let { onClose: e, trackUserProfileEditAction: n, highlightedApplicationIds: h, ...p } = t,
        k = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        m = (function (t) {
            let e = (0, c.A)(),
                [n, i] = l.useState(e);
            return (
                l.useEffect(() => {
                    e.length > n.length && i(e);
                }, [e, n]),
                l.useMemo(() => {
                    if (null == t || 0 === t.length) return n;
                    let e = (e) => e instanceof d.R && t.includes(e.applicationId);
                    return [...n.filter(e), ...n.filter((t) => !e(t))];
                }, [n, t])
            );
        })(h),
        x = m.length > 0,
        [C, b] = l.useState(!1),
        A = { onClick: () => e(), text: g.intl.string(g.t.cpT0Cq) },
        j = l.useCallback(() => {
            b(!0), e();
        }, [e]);
    return null == k
        ? null
        : (0, i.jsx)(s.Modal, {
              title: g.intl.string(g.t["grUgR+"]),
              actions: x ? [] : [A],
              size: x ? "md" : "sm",
              onClose: e,
              ...p,
              children: x
                  ? (0, i.jsx)("ul", {
                        "aria-label": g.intl.string(g.t["+EIBSA"]),
                        className: f.f,
                        children: m.map((t) =>
                            (0, i.jsx)(
                                o.A,
                                {
                                    widget: t,
                                    onAddWidget: j,
                                    loading: C,
                                    trackUserProfileEditAction: n,
                                    isHighlighted: null != h && t instanceof d.R && h.includes(t.applicationId),
                                },
                                t.getUniqueKey(),
                            ),
                        ),
                    })
                  : (0, i.jsx)(a.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: g.intl.string(g.t["1nkDOs"]),
                    }),
          });
}
