n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(17928),
    s = n(192308),
    a = n(821609),
    r = n(529200),
    o = n(953727);
function d(e) {
    let { width: t = 40, height: n = 40, color: l = "currentColor", ...s } = e;
    return (0, i.jsxs)("svg", {
        ...(0, o.A)(s),
        width: t,
        height: n,
        style: { minWidth: t, minHeight: n },
        viewBox: "0 0 40 40",
        children: [
            (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20 4C15.5817 4 12 7.58172 12 12V20C12 24.4183 15.5817 28 20 28H28C32.4183 28 36 24.4183 36 20V12C36 7.58172 32.4183 4 28 4H20ZM19.5962 21.6084C19.5599 21.8126 19.717 22 19.9244 22H20.5806C20.7422 22 20.8806 21.8841 20.9088 21.7249L21.3333 19.3333H25.3333L24.9295 21.6084C24.8932 21.8126 25.0503 22 25.2577 22H25.9139C26.0756 22 26.2139 21.8841 26.2421 21.7249L26.6667 19.3333H29.0533C29.2152 19.3333 29.3537 19.217 29.3816 19.0575L29.4983 18.3908C29.534 18.1868 29.377 18 29.1699 18H26.9L27.6067 14H29.9933C30.1552 14 30.2937 13.8836 30.3216 13.7241L30.4383 13.0575C30.474 12.8535 30.317 12.6667 30.1099 12.6667H27.84L28.2438 10.3916C28.2801 10.1874 28.123 10 27.9156 10H27.2594C27.0977 10 26.9594 10.1159 26.9312 10.2751L26.5067 12.6667H22.5067L22.9105 10.3916C22.9467 10.1874 22.7897 10 22.5823 10H21.926C21.7644 10 21.6261 10.1159 21.5978 10.2751L21.1733 12.6667H18.7867C18.6248 12.6667 18.4863 12.783 18.4584 12.9425L18.3417 13.6092C18.306 13.8132 18.463 14 18.6701 14H20.94L20.2333 18H17.8467C17.6848 18 17.5463 18.1164 17.5184 18.2759L17.4017 18.9425C17.366 19.1465 17.523 19.3333 17.7301 19.3333H20L19.5962 21.6084ZM21.5669 18L22.2736 14H26.2736L25.5669 18H21.5669Z",
                fill: l,
            }),
            (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.33335 14.0208C6.11738 16.1734 4 19.8395 4 24C4 30.6274 9.37258 36 16 36C20.1604 36 23.8262 33.8829 25.979 30.6672H24.3268C22.372 33.1055 19.3683 34.6667 16 34.6667C10.109 34.6667 5.33333 29.8911 5.33333 24C5.33333 20.6315 6.89477 17.6277 9.33335 15.6729V14.0208Z",
                fill: l,
            }),
        ],
    });
}
var c = n(122906),
    u = n(401755),
    m = n(985018),
    h = n(195580),
    g = n(344900);
function A(e) {
    let { code: t } = e,
        o = (0, l.bG)([c.A], () => c.A.getGuildTemplate(t));
    if (null == o || o.state === u.QB.RESOLVING)
        return (0, i.jsxs)(r.A, {
            children: [
                (0, i.jsx)(r.A.Header, { text: m.intl.string(m.t.Xj87Yf) }),
                (0, i.jsx)(r.A.Body, { resolving: !0 }),
            ],
        });
    if (o.state === u.QB.EXPIRED)
        return (0, i.jsxs)(r.A, {
            children: [
                (0, i.jsx)(r.A.Header, { text: m.intl.string(m.t.C7ZRNw) }),
                (0, i.jsxs)(r.A.Body, {
                    children: [
                        (0, i.jsx)(r.A.Icon, { expired: !0 }),
                        (0, i.jsx)(r.A.Info, { expired: !0, title: m.intl.string(m.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let A = __OVERLAY__
        ? (0, i.jsx)(a.$, { disabled: !0, variant: "secondary", text: m.intl.string(m.t.W7NTWm) })
        : (0, i.jsx)(a.$, {
              onClick: () => {
                  (0, s.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("73432"),
                          n.e("80813"),
                          n.e("47042"),
                          n.e("99430"),
                          n.e("72465"),
                          n.e("83952"),
                          n.e("82486"),
                          n.e("19580"),
                          n.e("26185"),
                          n.e("35383"),
                          n.e("92152"),
                      ]).then(n.bind(n, 72715));
                      return (t) => (0, i.jsx)(e, { ...t, guildTemplate: o });
                  });
              },
              loading: o.state === u.QB.ACCEPTING,
              variant: "active",
              text: m.intl.string(m.t["a3Gl+e"]),
          });
    return (0, i.jsxs)(r.A, {
        children: [
            (0, i.jsx)(r.A.Header, { text: m.intl.string(m.t.kAvFkO) }),
            (0, i.jsxs)(r.A.Body, {
                children: [
                    (0, i.jsxs)("div", {
                        className: g.iH,
                        children: [
                            (0, i.jsx)(d, { className: h.K }),
                            (0, i.jsx)(r.A.Info, {
                                title: o.name,
                                children: m.intl.format(m.t.cGXXHL, { usageCount: String(o.usageCount ?? 0) }),
                            }),
                        ],
                    }),
                    A,
                ],
            }),
        ],
    });
}
