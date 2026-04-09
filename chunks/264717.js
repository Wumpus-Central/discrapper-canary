n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(442433),
    o = n(754333),
    d = n(917136),
    c = n(976910),
    u = n(985018),
    m = n(302915);
function g() {
    let { credentials: e, hasFetchedCredentials: t } = (0, a.cf)([c.A], () => ({
        hasFetchedCredentials: c.A.hasFetchedCredentials(),
        credentials: c.A.getCredentials(),
    }));
    return (s.useEffect(() => {
        t || d.JQ();
    }, [t]),
    t)
        ? (0, i.jsx)(l.BJc, {
              direction: "vertical",
              gap: "sm",
              as: "ul",
              children: e.map((e) => (0, i.jsx)(_, { credential: e }, e.id)),
          })
        : (0, i.jsx)(l.y$y, {});
}
function _(e) {
    let { credential: t } = e;
    return (0, i.jsxs)("li", {
        className: m.e,
        children: [
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(l.EYj, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, i.jsx)(l.EYj, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: u.intl.format(u.t["7JgxF5"], { lastUsed: (0, o.Y)(t.last_used) }),
                        }),
                ],
            }),
            (0, i.jsx)(l.K0, {
                icon: l.jNK,
                variant: "icon-only",
                size: "sm",
                "aria-label": u.intl.string(u.t["+nrTbK"]),
                onClick: (e) => {
                    (0, r.L3)(e, async () => {
                        let { default: e } = await n.e("32529").then(n.bind(n, 41e3));
                        return (n) => (0, i.jsx)(e, { credential: t, ...n });
                    });
                },
            }),
        ],
    });
}
