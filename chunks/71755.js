n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var a = n(311907),
    r = n(397927),
    l = n(529200),
    s = n(635491),
    o = n(122906),
    d = n(401755),
    c = n(985018),
    u = n(37925),
    _ = n(147673);
function m(e) {
    let { code: t } = e,
        m = (0, a.bG)([o.A], () => o.A.getGuildTemplate(t));
    if (null == m || m.state === d.QB.RESOLVING)
        return (0, i.jsxs)(l.A, {
            children: [
                (0, i.jsx)(l.A.Header, { text: c.intl.string(c.t.Xj87Yf) }),
                (0, i.jsx)(l.A.Body, { resolving: !0 }),
            ],
        });
    if (m.state === d.QB.EXPIRED)
        return (0, i.jsxs)(l.A, {
            children: [
                (0, i.jsx)(l.A.Header, { text: c.intl.string(c.t.C7ZRNw) }),
                (0, i.jsxs)(l.A.Body, {
                    children: [
                        (0, i.jsx)(l.A.Icon, { expired: !0 }),
                        (0, i.jsx)(l.A.Info, { expired: !0, title: c.intl.string(c.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let h = __OVERLAY__
        ? (0, i.jsx)(r.Button, { disabled: !0, variant: "secondary", text: c.intl.string(c.t.W7NTWm) })
        : (0, i.jsx)(r.Button, {
              onClick: () => {
                  (0, r.mMO)(async () => {
                      let { default: e } = await Promise.all([n.e("7726"), n.e("30106")]).then(n.bind(n, 72715));
                      return (t) => (0, i.jsx)(e, { ...t, guildTemplate: m });
                  });
              },
              loading: m.state === d.QB.ACCEPTING,
              variant: "active",
              text: c.intl.string(c.t["a3Gl+e"]),
          });
    return (0, i.jsxs)(l.A, {
        children: [
            (0, i.jsx)(l.A.Header, { text: c.intl.string(c.t.kAvFkO) }),
            (0, i.jsxs)(l.A.Body, {
                children: [
                    (0, i.jsxs)("div", {
                        className: _.iH,
                        children: [
                            (0, i.jsx)(s.A, { className: u.K }),
                            (0, i.jsx)(l.A.Info, {
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
