l.d(e, { default: () => h });
var n = l(627968),
    i = l(64700),
    r = l(189213),
    s = l(17928),
    a = l(834730),
    d = l(287809),
    u = l(633075),
    c = l(725386),
    o = l(502944),
    g = l(375708),
    f = l(500681);
function h(t) {
    let { onClose: e, trackUserProfileEditAction: l, highlightedApplicationIds: h, ...p } = t,
        k = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        m = (function (t) {
            let e = (0, c.A)({ location: "UserProfileWidgetAddModal" }),
                [l, n] = i.useState(e);
            return (
                i.useEffect(() => {
                    e.length > l.length && n(e);
                }, [e, l]),
                i.useMemo(() => {
                    if (null == t || 0 === t.length) return l;
                    let e = (e) => e instanceof u.R && t.includes(e.applicationId);
                    return [...l.filter(e), ...l.filter((t) => !e(t))];
                }, [l, t])
            );
        })(h),
        x = m.length > 0,
        [C, b] = i.useState(!1),
        A = { onClick: () => e(), text: g.intl.string(g.t.cpT0Cq) },
        U = i.useCallback(() => {
            b(!0), e();
        }, [e]);
    return null == k
        ? null
        : (0, n.jsx)(r.Modal, {
              title: g.intl.string(g.t["grUgR+"]),
              actions: x ? [] : [A],
              size: x ? "md" : "sm",
              onClose: e,
              ...p,
              children: x
                  ? (0, n.jsx)("ul", {
                        "aria-label": g.intl.string(g.t["+EIBSA"]),
                        className: f.f,
                        children: m.map((t) =>
                            (0, n.jsx)(
                                o.A,
                                { widget: t, onAddWidget: U, loading: C, trackUserProfileEditAction: l },
                                t.getUniqueKey(),
                            ),
                        ),
                    })
                  : (0, n.jsx)(a.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: g.intl.string(g.t["1nkDOs"]),
                    }),
          });
}
