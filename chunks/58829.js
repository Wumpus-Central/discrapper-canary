t.d(e, { default: () => C });
var l = t(627968);
t(64700);
var i = t(284009),
    a = t.n(i),
    s = t(158954),
    o = t(397927),
    c = t(730134),
    r = t(289498),
    p = t(342169),
    d = t(429913),
    u = t(672130),
    m = t(681819),
    x = t(534952),
    h = t(985018),
    _ = t(269482);
function j(n) {
    let {
            onComplete: e,
            excludedPlatformTypes: t,
            includedPlatformTypes: i,
            includeApplicationConnections: a = !0,
        } = n,
        s = p.A.useConfig({ location: "User Settings Connections" }),
        o = (0, d.A)(a && s.enabled ? x.tX.filter((n) => !t?.has(n) && (null == i || i.has(n))) : []),
        c = (0, m.gn)();
    return (0, l.jsxs)("div", {
        className: _.lA,
        children: [
            o.map((n) => null != n && (0, l.jsx)(u.A, { application: n, className: _.W2, innerClassName: _.Uz }, n.id)),
            c
                .filter((n) => !t?.has(n.type) && (null == i || i.has(n.type)))
                .map((n) =>
                    (0, l.jsx)(
                        r.A,
                        { type: n.type, className: _.W2, innerClassName: _.Uz, onConnect: () => e(n.type) },
                        n.type,
                    ),
                ),
        ],
    });
}
function f(n) {
    let { integrations: e, onCompleteApplication: t } = n;
    if (null == e || null == t) return null;
    let i = e.filter((n) => n.application?.roleConnectionsVerificationUrl != null);
    return 0 === i.length
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(o.Text, {
                      variant: "text-sm/medium",
                      color: "interactive-text-default",
                      className: _.jS,
                      children: h.intl.string(h.t.PHjkRE),
                  }),
                  (0, l.jsx)("div", {
                      className: _.$v,
                      children: i.map((n) => {
                          let e = n.application;
                          a()(null != e, "application is null");
                          let i = e?.bot;
                          return (
                              a()(null != i, "bot is null"),
                              (0, l.jsxs)(
                                  o.DUT,
                                  {
                                      onClick: () => t(e.id),
                                      className: _.pW,
                                      children: [
                                          (0, l.jsx)(c.A, { user: i, className: _.In }),
                                          (0, l.jsxs)("div", {
                                              className: _.RM,
                                              children: [
                                                  (0, l.jsx)(o.Heading, {
                                                      variant: "heading-sm/semibold",
                                                      className: _.p4,
                                                      children: e.name,
                                                  }),
                                                  null != e.description && e.description.length > 0
                                                      ? (0, l.jsx)(o.Text, {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            className: _.p4,
                                                            children: e.description,
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
function C(n) {
    let {
        transitionState: e,
        onComplete: t,
        onClose: i,
        excludedPlatformTypes: a,
        includedPlatformTypes: o,
        integrations: c,
        onCompleteApplication: r,
        includeApplicationConnections: p,
    } = n;
    return (0, l.jsxs)(s.Modal, {
        title: h.intl.string(h.t.syl6HS),
        transitionState: e,
        onClose: i,
        actions: [],
        children: [
            (0, l.jsx)(j, {
                onComplete: function (n) {
                    t(n), i();
                },
                excludedPlatformTypes: a,
                includedPlatformTypes: o,
                includeApplicationConnections: p,
            }),
            (0, l.jsx)(f, {
                integrations: c,
                onCompleteApplication:
                    null != r
                        ? function (n) {
                              r?.(n), i();
                          }
                        : void 0,
            }),
        ],
    });
}
