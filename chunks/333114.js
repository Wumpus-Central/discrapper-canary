n.d(e, { default: () => h });
var i = n(477900),
    l = n(582128),
    s = n(189213),
    r = n(17928),
    u = n(834730),
    a = n(287809),
    c = n(633075),
    d = n(725386),
    o = n(657855),
    g = n(375708),
    f = n(550193);
function h(t) {
    let { onClose: e, trackUserProfileEditAction: n, highlightedApplicationIds: h, ...p } = t,
        k = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        m = (function (t) {
            let e = (0, d.A)(),
                [n, i] = l.useState(e);
            return (
                l.useEffect(() => {
                    e.length > n.length && i(e);
                }, [e, n]),
                l.useMemo(() => {
                    if (null == t || 0 === t.length) return n;
                    function e(e) {
                        return null != t && e instanceof c.R && t.includes(e.applicationId);
                    }
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
                                    isHighlighted: null != h && t instanceof c.R && h.includes(t.applicationId),
                                },
                                t.getUniqueKey(),
                            ),
                        ),
                    })
                  : (0, i.jsx)(u.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: g.intl.string(g.t["1nkDOs"]),
                    }),
          });
}
