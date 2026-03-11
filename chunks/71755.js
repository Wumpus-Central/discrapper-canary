n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(529200),
    s = n(635491),
    o = n(122906),
    d = n(401755),
    c = n(985018),
    u = n(131317),
    _ = n(42441);
function m(e) {
    let { code: t } = e,
        m = (0, r.bG)([o.A], () => o.A.getGuildTemplate(t));
    if (null == m || m.state === d.QB.RESOLVING)
        return (0, i.jsxs)(a.A, {
            children: [
                (0, i.jsx)(a.A.Header, { text: c.intl.string(c.t.Xj87Yf) }),
                (0, i.jsx)(a.A.Body, { resolving: !0 }),
            ],
        });
    if (m.state === d.QB.EXPIRED)
        return (0, i.jsxs)(a.A, {
            children: [
                (0, i.jsx)(a.A.Header, { text: c.intl.string(c.t.C7ZRNw) }),
                (0, i.jsxs)(a.A.Body, {
                    children: [
                        (0, i.jsx)(a.A.Icon, { expired: !0 }),
                        (0, i.jsx)(a.A.Info, { expired: !0, title: c.intl.string(c.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let h = __OVERLAY__
        ? (0, i.jsx)(l.Button, { disabled: !0, variant: "secondary", text: c.intl.string(c.t.W7NTWm) })
        : (0, i.jsx)(l.Button, {
              onClick: () => {
                  (0, l.mMO)(async () => {
                      let { default: e } = await Promise.all([n.e("7726"), n.e("58938")]).then(n.bind(n, 72715));
                      return (t) => (0, i.jsx)(e, { ...t, guildTemplate: m });
                  });
              },
              loading: m.state === d.QB.ACCEPTING,
              variant: "active",
              text: c.intl.string(c.t["a3Gl+e"]),
          });
    return (0, i.jsxs)(a.A, {
        children: [
            (0, i.jsx)(a.A.Header, { text: c.intl.string(c.t.kAvFkO) }),
            (0, i.jsxs)(a.A.Body, {
                children: [
                    (0, i.jsxs)("div", {
                        className: _.iH,
                        children: [
                            (0, i.jsx)(s.A, { className: u.K }),
                            (0, i.jsx)(a.A.Info, {
                                title: m.name,
                                children: c.intl.format(c.t.cGXXHL, { usageCount: String(m.usageCount ?? 0) }),
                            }),
                        ],
                    }),
                    h,
                ],
            }),
        ],
    });
}
