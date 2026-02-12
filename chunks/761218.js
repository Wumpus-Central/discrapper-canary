"use strict";
s.d(t, { A: () => f });
var n = s(627968),
    l = s(64700),
    r = s(989349),
    a = s.n(r),
    i = s(158954),
    o = s(311907),
    c = s(733391),
    d = s(44724),
    u = s(317560),
    g = s(183802),
    _ = s(67480),
    m = s(188275),
    h = s(985018),
    p = s(27112);
let f = (e) => {
    let { onDismiss: t, skuIds: s, endTime: r } = e,
        f = (0, o.bG)([_.A], () => s.every((e) => null != _.A.get(e)), [s]);
    l.useEffect(() => {
        for (let e of s) (0, c.qf)(m.Kf, e);
    }, [s]);
    let x = l.useMemo(() => {
            let e = a()(),
                t = Math.max(a()(r).diff(e, "days"), 1);
            return h.intl.formatToPlainString(h.t.PWw4Vp, { days: t });
        }, [r]),
        E = l.useCallback(() => {
            (0, d.X)({ guildId: m.Kf });
        }, []),
        C = l.useCallback(() => {
            (0, d.default)({ guildId: m.Kf });
        }, []),
        A = l.useCallback((e) => {
            (0, u.R)({ skuId: e, applicationId: m.XR, guildId: m.Kf, isStorefront: !1 });
        }, []);
    return f
        ? (0, n.jsx)("div", {
              className: p.YB,
              children: (0, n.jsxs)("div", {
                  className: p.kL,
                  children: [
                      (0, n.jsx)("div", {
                          className: p.b,
                          children: (0, n.jsx)(i.JnF, { size: "sm", variant: "icon-only", onClick: t }),
                      }),
                      (0, n.jsxs)("div", {
                          className: p.xf,
                          children: [
                              null != x &&
                                  (0, n.jsx)("div", {
                                      className: p.qw,
                                      children: (0, n.jsx)(i.Exy, {
                                          type: { text: `${h.intl.string(h.t.yYEZGi)} (${x})` },
                                          variant: "brand",
                                      }),
                                  }),
                              (0, n.jsxs)("div", {
                                  className: p.B5,
                                  children: [
                                      (0, n.jsx)(i.DZT, {
                                          variant: "heading-xl/semibold",
                                          color: "always-white",
                                          children: h.intl.string(h.t["b3+OH1"]),
                                      }),
                                      (0, n.jsx)(i.$nd, {
                                          variant: "overlay-primary",
                                          icon: i.I9m,
                                          iconPosition: "end",
                                          text: h.intl.string(h.t["kq/75v"]),
                                          onMouseDown: E,
                                          onClick: C,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, n.jsx)("div", {
                          className: p.$2,
                          children: s.map((e, t) =>
                              (0, n.jsx)(
                                  g.A,
                                  {
                                      skuId: e,
                                      applicationId: m.XR,
                                      guildId: m.Kf,
                                      positionInSection: t,
                                      onClick: () => A(e),
                                  },
                                  e,
                              ),
                          ),
                      }),
                  ],
              }),
          })
        : null;
};
