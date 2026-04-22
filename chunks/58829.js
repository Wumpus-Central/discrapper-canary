t.d(n, { default: () => C });
var i = t(627968);
t(64700);
var l = t(284009),
    a = t.n(l),
    s = t(189213),
    c = t(834730),
    r = t(939249),
    o = t(534514),
    p = t(730134),
    d = t(289498),
    u = t(941314),
    m = t(429913),
    _ = t(672130),
    x = t(681819),
    h = t(534952),
    N = t(985018),
    j = t(977498);
function v(e) {
    let {
            onComplete: n,
            excludedPlatformTypes: t,
            includedPlatformTypes: l,
            includeApplicationConnections: a = !0,
        } = e,
        s = u.A.useConfig({ location: "User Settings Connections" }),
        c = (0, m.A)(a && s.enabled ? h.tX.filter((e) => !t?.has(e) && (null == l || l.has(e))) : []),
        r = (0, x.gn)();
    return (0, i.jsxs)("div", {
        className: j.lA,
        children: [
            c.map((e) => null != e && (0, i.jsx)(_.A, { application: e, className: j.W2, innerClassName: j.Uz }, e.id)),
            r
                .filter((e) => !t?.has(e.type) && (null == l || l.has(e.type)))
                .map((e) =>
                    (0, i.jsx)(
                        d.A,
                        { type: e.type, className: j.W2, innerClassName: j.Uz, onConnect: () => n(e.type) },
                        e.type,
                    ),
                ),
        ],
    });
}
function f(e) {
    let { integrations: n, onCompleteApplication: t } = e;
    if (null == n || null == t) return null;
    let l = n.filter((e) => e.application?.roleConnectionsVerificationUrl != null);
    return 0 === l.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.E, {
                      variant: "text-sm/medium",
                      color: "interactive-text-default",
                      className: j.jS,
                      children: N.intl.string(N.t.PHjkRE),
                  }),
                  (0, i.jsx)("div", {
                      className: j.$v,
                      children: l.map((e) => {
                          let n = e.application;
                          a()(null != n, "application is null");
                          let l = n?.bot;
                          return (
                              a()(null != l, "bot is null"),
                              (0, i.jsxs)(
                                  r.D,
                                  {
                                      onClick: () => t(n.id),
                                      className: j.pW,
                                      children: [
                                          (0, i.jsx)(p.A, { user: l, className: j.In }),
                                          (0, i.jsxs)("div", {
                                              className: j.RM,
                                              children: [
                                                  (0, i.jsx)(o.D, {
                                                      variant: "heading-sm/semibold",
                                                      className: j.p4,
                                                      children: n.name,
                                                  }),
                                                  null != n.description && n.description.length > 0
                                                      ? (0, i.jsx)(c.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            className: j.p4,
                                                            children: n.description,
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      ],
                                  },
                                  e.id,
                              )
                          );
                      }),
                  }),
              ],
          });
}
function C(e) {
    let {
        transitionState: n,
        onComplete: t,
        onClose: l,
        excludedPlatformTypes: a,
        includedPlatformTypes: c,
        integrations: r,
        onCompleteApplication: o,
        includeApplicationConnections: p,
    } = e;
    return (0, i.jsxs)(s.Modal, {
        title: N.intl.string(N.t.syl6HS),
        transitionState: n,
        onClose: l,
        actions: [],
        children: [
            (0, i.jsx)(v, {
                onComplete: function (e) {
                    t(e), l();
                },
                excludedPlatformTypes: a,
                includedPlatformTypes: c,
                includeApplicationConnections: p,
            }),
            (0, i.jsx)(f, {
                integrations: r,
                onCompleteApplication:
                    null != o
                        ? function (e) {
                              o?.(e), l();
                          }
                        : void 0,
            }),
        ],
    });
}
