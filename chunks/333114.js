i.d(e, { default: () => f });
var l = i(627968),
    n = i(64700),
    s = i(189213),
    r = i(17928),
    a = i(834730),
    d = i(287809),
    o = i(725386),
    u = i(502944),
    c = i(985018),
    g = i(500681);
function f(t) {
    let { onClose: e, trackUserProfileEditAction: i, ...f } = t,
        h = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
        p = (function () {
            let t = (0, o.A)({ location: "UserProfileWidgetAddModal" }),
                [e, i] = n.useState(t);
            return (
                n.useEffect(() => {
                    t.length > e.length && i(t);
                }, [t, e]),
                e
            );
        })(),
        k = p.length > 0,
        [x, m] = n.useState(!1),
        C = { onClick: () => e(), text: c.intl.string(c.t.cpT0Cq) },
        b = n.useCallback(() => {
            m(!0), e();
        }, [e]);
    return null == h
        ? null
        : (0, l.jsx)(s.Modal, {
              title: c.intl.string(c.t["grUgR+"]),
              actions: k ? [] : [C],
              size: k ? "md" : "sm",
              onClose: e,
              ...f,
              children: k
                  ? (0, l.jsx)("ul", {
                        "aria-label": c.intl.string(c.t["+EIBSA"]),
                        className: g.f,
                        children: p.map((t) =>
                            (0, l.jsx)(
                                u.A,
                                { widget: t, onAddWidget: b, loading: x, trackUserProfileEditAction: i },
                                t.getUniqueKey(),
                            ),
                        ),
                    })
                  : (0, l.jsx)(a.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: c.intl.string(c.t["1nkDOs"]),
                    }),
          });
}
