n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(192308),
    s = n(821609),
    r = n(529200),
    o = n(635491),
    d = n(122906),
    c = n(401755),
    u = n(985018),
    m = n(195580),
    _ = n(344900);
function h(e) {
    let { code: t } = e,
        h = (0, l.bG)([d.A], () => d.A.getGuildTemplate(t));
    if (null == h || h.state === c.QB.RESOLVING)
        return (0, i.jsxs)(r.A, {
            children: [
                (0, i.jsx)(r.A.Header, { text: u.intl.string(u.t.Xj87Yf) }),
                (0, i.jsx)(r.A.Body, { resolving: !0 }),
            ],
        });
    if (h.state === c.QB.EXPIRED)
        return (0, i.jsxs)(r.A, {
            children: [
                (0, i.jsx)(r.A.Header, { text: u.intl.string(u.t.C7ZRNw) }),
                (0, i.jsxs)(r.A.Body, {
                    children: [
                        (0, i.jsx)(r.A.Icon, { expired: !0 }),
                        (0, i.jsx)(r.A.Info, { expired: !0, title: u.intl.string(u.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let p = __OVERLAY__
        ? (0, i.jsx)(s.$, { disabled: !0, variant: "secondary", text: u.intl.string(u.t.W7NTWm) })
        : (0, i.jsx)(s.$, {
              onClick: () => {
                  (0, a.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e("82486"), n.e("7726"), n.e("20883")]).then(
                          n.bind(n, 72715),
                      );
                      return (t) => (0, i.jsx)(e, { ...t, guildTemplate: h });
                  });
              },
              loading: h.state === c.QB.ACCEPTING,
              variant: "active",
              text: u.intl.string(u.t["a3Gl+e"]),
          });
    return (0, i.jsxs)(r.A, {
        children: [
            (0, i.jsx)(r.A.Header, { text: u.intl.string(u.t.kAvFkO) }),
            (0, i.jsxs)(r.A.Body, {
                children: [
                    (0, i.jsxs)("div", {
                        className: _.iH,
                        children: [
                            (0, i.jsx)(o.A, { className: m.K }),
                            (0, i.jsx)(r.A.Info, {
                                title: h.name,
                                children: u.intl.format(u.t.cGXXHL, { usageCount: String(h.usageCount ?? 0) }),
                            }),
                        ],
                    }),
                    p,
                ],
            }),
        ],
    });
}
