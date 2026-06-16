e.d(l, { default: () => b });
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
    p = e(941314),
    m = e(858177),
    x = e(429913),
    h = e(672130),
    j = e(874490),
    f = e(534952),
    v = e(375708),
    N = e(977498);
function g(n) {
    let {
            onComplete: l,
            excludedPlatformTypes: e,
            includedPlatformTypes: i,
            includeApplicationConnections: s = !0,
        } = n,
        a = (0, p.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" }),
        c = (0, x.A)(s && a ? f.tX.filter((n) => !e?.has(n) && (null == i || i.has(n))) : []),
        r = (0, j.gn)();
    return (0, t.jsxs)("div", {
        className: N.lA,
        children: [
            c.map((n) => null != n && (0, t.jsx)(h.A, { application: n, className: N.W2, innerClassName: N.Uz }, n.id)),
            r
                .filter((n) => !e?.has(n.type) && (null == i || i.has(n.type)))
                .map((n) =>
                    (0, t.jsx)(
                        u.A,
                        { type: n.type, className: N.W2, innerClassName: N.Uz, onConnect: () => l(n.type) },
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
                      className: N.jS,
                      children: v.intl.string(v.t.PHjkRE),
                  }),
                  (0, t.jsx)("div", {
                      className: N.$v,
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
                                      className: N.pW,
                                      children: [
                                          (0, t.jsx)(d.A, { user: i, className: N.In }),
                                          (0, t.jsxs)("div", {
                                              className: N.RM,
                                              children: [
                                                  (0, t.jsx)(o.D, {
                                                      variant: "heading-sm/semibold",
                                                      className: N.p4,
                                                      children: l.name,
                                                  }),
                                                  null != l.description && l.description.length > 0
                                                      ? (0, t.jsx)(c.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            className: N.p4,
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
function y(n) {
    let { applicationId: l, onCompleteIdentityApplication: e } = n,
        i = (0, m.O)(l);
    if (null == i) return null;
    let s = i.bot;
    return (0, t.jsxs)(r.D, {
        onClick: () => e(i.id),
        className: N.pW,
        children: [
            null != s ? (0, t.jsx)(d.A, { user: s, className: N.In }) : null,
            (0, t.jsxs)("div", {
                className: N.RM,
                children: [
                    (0, t.jsx)(o.D, { variant: "heading-sm/semibold", className: N.p4, children: i.name }),
                    null != i.description && i.description.length > 0
                        ? (0, t.jsx)(c.E, {
                              variant: "text-xs/normal",
                              color: "text-default",
                              className: N.p4,
                              children: i.description,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function A(n) {
    let { gameApplicationIds: l, onCompleteIdentityApplication: e } = n;
    return null == l || 0 === l.length || null == e
        ? null
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(c.E, {
                      variant: "text-sm/medium",
                      color: "interactive-text-default",
                      className: N.jS,
                      children: v.intl.string(v.t.y3ZnnU),
                  }),
                  (0, t.jsx)("div", {
                      className: N.$v,
                      children: l.map((n) => (0, t.jsx)(y, { applicationId: n, onCompleteIdentityApplication: e }, n)),
                  }),
              ],
          });
}
function b(n) {
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
        title: v.intl.string(v.t.syl6HS),
        transitionState: l,
        onClose: i,
        actions: [],
        children: [
            (0, t.jsx)(g, {
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
            (0, t.jsx)(A, {
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
