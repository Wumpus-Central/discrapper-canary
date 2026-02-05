t.d(e, { default: () => _ });
var l = t(627968);
t(64700);
var i = t(284009),
    a = t.n(i),
    s = t(158954),
    c = t(397927),
    o = t(730134),
    r = t(289498),
    p = t(681819),
    d = t(985018),
    u = t(971705);
function m(n) {
    let { onComplete: e, excludedPlatformTypes: t, includedPlatformTypes: i } = n,
        a = (0, p.gn)();
    return (0, l.jsx)("div", {
        className: u.lA,
        children: a
            .filter((n) => !t?.has(n.type) && (null == i || i.has(n.type)))
            .map((n) =>
                (0, l.jsx)(
                    r.A,
                    { type: n.type, className: u.W2, innerClassName: u.Uz, onConnect: () => e(n.type) },
                    n.type,
                ),
            ),
    });
}
function x(n) {
    let { integrations: e, onCompleteApplication: t } = n;
    if (null == e || null == t) return null;
    let i = e.filter((n) => n.application?.roleConnectionsVerificationUrl != null);
    return 0 === i.length
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(c.Text, {
                      variant: "text-sm/medium",
                      color: "interactive-text-default",
                      className: u.jS,
                      children: d.intl.string(d.t.PHjkRE),
                  }),
                  (0, l.jsx)("div", {
                      className: u.$v,
                      children: i.map((n) => {
                          let e = n.application;
                          a()(null != e, "application is null");
                          let i = e?.bot;
                          return (
                              a()(null != i, "bot is null"),
                              (0, l.jsxs)(
                                  c.DUT,
                                  {
                                      onClick: () => t(e.id),
                                      className: u.pW,
                                      children: [
                                          (0, l.jsx)(o.A, { user: i, className: u.In }),
                                          (0, l.jsxs)("div", {
                                              className: u.RM,
                                              children: [
                                                  (0, l.jsx)(c.Heading, {
                                                      variant: "heading-sm/semibold",
                                                      className: u.p4,
                                                      children: e.name,
                                                  }),
                                                  null != e.description && e.description.length > 0
                                                      ? (0, l.jsx)(c.Text, {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            className: u.p4,
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
function _(n) {
    let {
        transitionState: e,
        onComplete: t,
        onClose: i,
        excludedPlatformTypes: a,
        includedPlatformTypes: c,
        integrations: o,
        onCompleteApplication: r,
    } = n;
    return (0, l.jsxs)(s.Modal, {
        title: d.intl.string(d.t.syl6HS),
        transitionState: e,
        onClose: i,
        actions: [],
        children: [
            (0, l.jsx)(m, {
                onComplete: function (n) {
                    t(n), i();
                },
                excludedPlatformTypes: a,
                includedPlatformTypes: c,
            }),
            (0, l.jsx)(x, {
                integrations: o,
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
