n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(289873),
    a = n(331322),
    r = n(834730),
    o = n(408278),
    d = n(365199),
    u = n(311907),
    c = n(442433),
    g = n(754333),
    m = n(917136),
    _ = n(976910),
    A = n(985018),
    h = n(551386);
function p() {
    let { credentials: e, hasFetchedCredentials: t } = (0, u.cf)([_.A], () => ({
        hasFetchedCredentials: _.A.hasFetchedCredentials(),
        credentials: _.A.getCredentials(),
    }));
    return (s.useEffect(() => {
        t || m.JQ();
    }, [t]),
    t)
        ? (0, i.jsx)(a.B, {
              direction: "vertical",
              gap: "sm",
              as: "ul",
              children: e.map((e) => (0, i.jsx)(x, { credential: e }, e.id)),
          })
        : (0, i.jsx)(l.y, {});
}
function x(e) {
    let { credential: t } = e;
    return (0, i.jsxs)("li", {
        className: h.e,
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(r.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, i.jsx)(r.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: A.intl.format(A.t["7JgxF5"], { lastUsed: (0, g.Y)(t.last_used) }),
                        }),
                ],
            }),
            (0, i.jsx)(o.K, {
                icon: d.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": A.intl.string(A.t["+nrTbK"]),
                onClick: (e) => {
                    (0, c.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, i.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
