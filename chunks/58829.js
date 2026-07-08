e.d(l, { default: () => A });
var t = e(627968);
e(64700);
var i = e(284009),
    s = e.n(i),
    a = e(189213),
    c = e(834730),
    r = e(939249),
    o = e(534514),
    d = e(730134),
    u = e(289498),
    p = e(858177),
    m = e(429913),
    x = e(672130),
    h = e(874490),
    j = e(534952),
    f = e(375708),
    v = e(977498);
function N(n) {
    let {
            onComplete: l,
            excludedPlatformTypes: e,
            includedPlatformTypes: i,
            includeApplicationConnections: s = !0,
        } = n,
        a = (0, m.A)(s ? (0, j.Gl)("ConnectionsGridModal") : []),
        c = (0, h.gn)();
    return (0, t.jsxs)("div", {
        className: v.lA,
        children: [
            a.map((n) => null != n && (0, t.jsx)(x.A, { application: n, className: v.W2, innerClassName: v.Uz }, n.id)),
            c
                .filter((n) => !e?.has(n.type) && (null == i || i.has(n.type)))
                .map((n) =>
                    (0, t.jsx)(
                        u.A,
                        { type: n.type, className: v.W2, innerClassName: v.Uz, onConnect: () => l(n.type) },
                        n.type,
                    ),
                ),
        ],
    });
}
function C(n) {
    let { integrations: l, onCompleteApplication: e } = n;
    if (null == l || null == e) return null;
    let i = l.filter((n) => n.application?.roleConnectionsVerificationUrl != null);
    return 0 === i.length
        ? null
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(c.E, {
                      variant: "text-sm/medium",
                      color: "interactive-text-default",
                      className: v.jS,
                      children: f.intl.string(f.t.PHjkRE),
                  }),
                  (0, t.jsx)("div", {
                      className: v.$v,
                      children: i.map((n) => {
                          let l = n.application;
                          s()(null != l, "application is null");
                          let i = l?.bot;
                          return (
                              s()(null != i, "bot is null"),
                              (0, t.jsxs)(
                                  r.D,
                                  {
                                      onClick: () => e(l.id),
                                      className: v.pW,
                                      children: [
                                          (0, t.jsx)(d.A, { user: i, className: v.In }),
                                          (0, t.jsxs)("div", {
                                              className: v.RM,
                                              children: [
                                                  (0, t.jsx)(o.D, {
                                                      variant: "heading-sm/semibold",
                                                      className: v.p4,
                                                      children: l.name,
                                                  }),
                                                  null != l.description && l.description.length > 0
                                                      ? (0, t.jsx)(c.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            className: v.p4,
                                                            children: l.description,
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      ],
                                  },
                                  n.id,
                              )
                          );
                      }),
                  }),
              ],
          });
}
function g(n) {
    let { applicationId: l, onCompleteIdentityApplication: e } = n,
        i = (0, p.O)(l);
    if (null == i) return null;
    let s = i.bot;
    return (0, t.jsxs)(r.D, {
        onClick: () => e(i.id),
        className: v.pW,
        children: [
            null != s ? (0, t.jsx)(d.A, { user: s, className: v.In }) : null,
            (0, t.jsxs)("div", {
                className: v.RM,
                children: [
                    (0, t.jsx)(o.D, { variant: "heading-sm/semibold", className: v.p4, children: i.name }),
                    null != i.description && i.description.length > 0
                        ? (0, t.jsx)(c.E, {
                              variant: "text-xs/normal",
                              color: "text-default",
                              className: v.p4,
                              children: i.description,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function y(n) {
    let { gameApplicationIds: l, onCompleteIdentityApplication: e } = n;
    return null == l || 0 === l.length || null == e
        ? null
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(c.E, {
                      variant: "text-sm/medium",
                      color: "interactive-text-default",
                      className: v.jS,
                      children: f.intl.string(f.t.y3ZnnU),
                  }),
                  (0, t.jsx)("div", {
                      className: v.$v,
                      children: l.map((n) => (0, t.jsx)(g, { applicationId: n, onCompleteIdentityApplication: e }, n)),
                  }),
              ],
          });
}
function A(n) {
    let {
        transitionState: l,
        onComplete: e,
        onClose: i,
        excludedPlatformTypes: s,
        includedPlatformTypes: c,
        integrations: r,
        onCompleteApplication: o,
        includeApplicationConnections: d,
        gameApplicationIds: u,
        onCompleteIdentityApplication: p,
    } = n;
    return (0, t.jsxs)(a.Modal, {
        title: f.intl.string(f.t.syl6HS),
        transitionState: l,
        onClose: i,
        actions: [],
        children: [
            (0, t.jsx)(N, {
                onComplete: function (n) {
                    e(n), i();
                },
                excludedPlatformTypes: s,
                includedPlatformTypes: c,
                includeApplicationConnections: d,
            }),
            (0, t.jsx)(C, {
                integrations: r,
                onCompleteApplication:
                    null != o
                        ? function (n) {
                              o?.(n), i();
                          }
                        : void 0,
            }),
            (0, t.jsx)(y, {
                gameApplicationIds: u ?? null,
                onCompleteIdentityApplication:
                    null != p
                        ? function (n) {
                              p?.(n), i();
                          }
                        : void 0,
            }),
        ],
    });
}
