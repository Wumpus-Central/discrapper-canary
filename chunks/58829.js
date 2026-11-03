e.d(l, { default: () => A });
var i = e(477900);
e(582128);
var t = e(284009),
    s = e.n(t),
    a = e(189213),
    c = e(834730),
    r = e(939249),
    o = e(534514),
    d = e(730134),
    p = e(289498),
    u = e(80558),
    m = e(429913),
    x = e(672130),
    h = e(874490),
    j = e(534952),
    f = e(105292),
    v = e(556783);
function N(n) {
    let {
            onComplete: l,
            excludedPlatformTypes: e,
            includedPlatformTypes: t,
            includeApplicationConnections: s = !0,
        } = n,
        a = (0, m.A)(s ? (0, j.getMigratedApplicationIdentityConnectionsScreenApplications)() : []),
        c = (0, h.gn)();
    return (0, i.jsxs)("div", {
        className: v.lA,
        children: [
            a.map((n) => null != n && (0, i.jsx)(x.A, { application: n, className: v.W2, innerClassName: v.Uz }, n.id)),
            c
                .filter((n) => !e?.has(n.type) && (null == t || t.has(n.type)))
                .map((n) =>
                    (0, i.jsx)(
                        p.A,
                        { type: n.type, className: v.W2, innerClassName: v.Uz, onConnect: () => l(n.type) },
                        n.type,
                    ),
                ),
        ],
    });
}
function y(n) {
    let { integrations: l, onCompleteApplication: e } = n;
    if (null == l || null == e) return null;
    let t = l.filter((n) => n.application?.roleConnectionsVerificationUrl != null);
    return 0 === t.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.E, {
                      variant: "body-sm/medium",
                      color: "interactive-text-default",
                      className: v.jS,
                      children: f.intl.string(f.t.PHjkRE),
                  }),
                  (0, i.jsx)("div", {
                      className: v.$v,
                      children: t.map((n) => {
                          let l = n.application;
                          s()(null != l, "application is null");
                          let t = l?.bot;
                          return (
                              s()(null != t, "bot is null"),
                              (0, i.jsxs)(
                                  r.D,
                                  {
                                      onClick: () => e(l.id),
                                      className: v.pW,
                                      children: [
                                          (0, i.jsx)(d.A, { user: t, className: v.In }),
                                          (0, i.jsxs)("div", {
                                              className: v.RM,
                                              children: [
                                                  (0, i.jsx)(o.D, {
                                                      variant: "heading-xs/semibold",
                                                      className: v.p4,
                                                      children: l.name,
                                                  }),
                                                  null != l.description && l.description.length > 0
                                                      ? (0, i.jsx)(c.E, {
                                                            variant: "body-xs/normal",
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
        t = (0, u.O)(l);
    if (null == t) return null;
    let s = t.bot;
    return (0, i.jsxs)(r.D, {
        onClick: () => e(t.id),
        className: v.pW,
        children: [
            null != s ? (0, i.jsx)(d.A, { user: s, className: v.In }) : null,
            (0, i.jsxs)("div", {
                className: v.RM,
                children: [
                    (0, i.jsx)(o.D, { variant: "heading-xs/semibold", className: v.p4, children: t.name }),
                    null != t.description && t.description.length > 0
                        ? (0, i.jsx)(c.E, {
                              variant: "body-xs/normal",
                              color: "text-default",
                              className: v.p4,
                              children: t.description,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function C(n) {
    let { gameApplicationIds: l, onCompleteIdentityApplication: e } = n;
    return null == l || 0 === l.length || null == e
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.E, {
                      variant: "body-sm/medium",
                      color: "interactive-text-default",
                      className: v.jS,
                      children: f.intl.string(f.t.y3ZnnU),
                  }),
                  (0, i.jsx)("div", {
                      className: v.$v,
                      children: l.map((n) => (0, i.jsx)(g, { applicationId: n, onCompleteIdentityApplication: e }, n)),
                  }),
              ],
          });
}
function A(n) {
    let {
        transitionState: l,
        onComplete: e,
        onClose: t,
        excludedPlatformTypes: s,
        includedPlatformTypes: c,
        integrations: r,
        onCompleteApplication: o,
        includeApplicationConnections: d,
        gameApplicationIds: p,
        onCompleteIdentityApplication: u,
    } = n;
    return (0, i.jsxs)(a.a, {
        title: f.intl.string(f.t.syl6HS),
        transitionState: l,
        onClose: t,
        actions: [],
        children: [
            (0, i.jsx)(N, {
                onComplete: function (n) {
                    (e(n), t());
                },
                excludedPlatformTypes: s,
                includedPlatformTypes: c,
                includeApplicationConnections: d,
            }),
            (0, i.jsx)(y, {
                integrations: r,
                onCompleteApplication:
                    null != o
                        ? function (n) {
                              (o?.(n), t());
                          }
                        : void 0,
            }),
            (0, i.jsx)(C, {
                gameApplicationIds: p ?? null,
                onCompleteIdentityApplication:
                    null != u
                        ? function (n) {
                              (u?.(n), t());
                          }
                        : void 0,
            }),
        ],
    });
}
