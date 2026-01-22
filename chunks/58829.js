n.d(e, { default: () => x }), n(228524);
var t = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(158954),
    c = n(397927),
    r = n(730134),
    d = n(289498),
    o = n(681819),
    u = n(985018),
    p = n(971705);
function f(l) {
    let { onComplete: e, excludedPlatformTypes: n, includedPlatformTypes: i } = l,
        a = (0, o.gn)();
    return (0, t.jsx)("div", {
        className: p.lA,
        children: a
            .filter((l) => !(null == n ? void 0 : n.has(l.type)) && (null == i || i.has(l.type)))
            .map((l) =>
                (0, t.jsx)(
                    d.A,
                    {
                        type: l.type,
                        className: p.W2,
                        innerClassName: p.Uz,
                        onConnect: () => e(l.type),
                    },
                    l.type,
                ),
            ),
    });
}
function m(l) {
    let { integrations: e, onCompleteApplication: n } = l;
    if (null == e || null == n) return null;
    let i = e.filter((l) => {
        var e;
        return (null == (e = l.application) ? void 0 : e.roleConnectionsVerificationUrl) != null;
    });
    return 0 === i.length
        ? null
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(c.Text, {
                      variant: "text-sm/medium",
                      color: "interactive-text-default",
                      className: p.jS,
                      children: u.intl.string(u.t.PHjkRE),
                  }),
                  (0, t.jsx)("div", {
                      className: p.$v,
                      children: i.map((l) => {
                          let e = l.application;
                          a()(null != e, "application is null");
                          let i = null == e ? void 0 : e.bot;
                          return (
                              a()(null != i, "bot is null"),
                              (0, t.jsxs)(
                                  c.DUT,
                                  {
                                      onClick: () => n(e.id),
                                      className: p.pW,
                                      children: [
                                          (0, t.jsx)(r.A, {
                                              user: i,
                                              className: p.In,
                                          }),
                                          (0, t.jsxs)("div", {
                                              className: p.RM,
                                              children: [
                                                  (0, t.jsx)(c.Heading, {
                                                      variant: "heading-sm/semibold",
                                                      className: p.p4,
                                                      children: e.name,
                                                  }),
                                                  null != e.description && e.description.length > 0
                                                      ? (0, t.jsx)(c.Text, {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            className: p.p4,
                                                            children: e.description,
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      ],
                                  },
                                  l.id,
                              )
                          );
                      }),
                  }),
              ],
          });
}
function x(l) {
    let {
        transitionState: e,
        onComplete: n,
        onClose: i,
        excludedPlatformTypes: a,
        includedPlatformTypes: c,
        integrations: r,
        onCompleteApplication: d,
    } = l;
    return (0, t.jsxs)(s.Modal, {
        title: u.intl.string(u.t.syl6HS),
        transitionState: e,
        onClose: i,
        actions: [],
        children: [
            (0, t.jsx)(f, {
                onComplete: function (l) {
                    n(l), i();
                },
                excludedPlatformTypes: a,
                includedPlatformTypes: c,
            }),
            (0, t.jsx)(m, {
                integrations: r,
                onCompleteApplication:
                    null != d
                        ? function (l) {
                              null == d || d(l), i();
                          }
                        : void 0,
            }),
        ],
    });
}
