"use strict";
s.d(t, { A: () => x });
var n = s(627968),
    l = s(64700),
    r = s(989349),
    a = s.n(r),
    i = s(158954),
    o = s(311907),
    c = s(733391),
    d = s(44724),
    u = s(317560),
    g = s(204890),
    _ = s(183802),
    m = s(67480),
    h = s(188275),
    p = s(985018),
    f = s(27112);
let x = (e) => {
    let { onDismiss: t, skuIds: s, endTime: r } = e,
        x = (0, o.bG)([m.A], () => s.every((e) => null != m.A.get(e)), [s]);
    l.useEffect(() => {
        for (let e of s) (0, c.qf)(h.Kf, e);
    }, [s]);
    let E = l.useMemo(() => {
            let e = a()(),
                t = Math.max(a()(r).diff(e, "days"), 1);
            return p.intl.formatToPlainString(p.t.PWw4Vp, { days: t });
        }, [r]),
        C = l.useCallback(() => {
            (0, d.X)({ guildId: h.Kf });
        }, []),
        A = l.useCallback(() => {
            (0, d.default)({ guildId: h.Kf });
        }, []),
        b = l.useCallback((e) => {
            (0, u.R)({ skuId: e, applicationId: h.XR, guildId: h.Kf, isStorefront: !1 });
        }, []);
    return x
        ? (0, n.jsx)("div", {
              className: f.YB,
              children: (0, n.jsxs)("div", {
                  className: f.kL,
                  children: [
                      (0, n.jsx)("div", { className: f.b, children: (0, n.jsx)(i.JnF, { size: "sm", onClick: t }) }),
                      (0, n.jsxs)("div", {
                          className: f.xf,
                          children: [
                              null != E &&
                                  (0, n.jsx)("div", {
                                      className: f.qw,
                                      children: (0, n.jsx)(g.J8, { text: `${p.intl.string(p.t.yYEZGi)} (${E})` }),
                                  }),
                              (0, n.jsxs)("div", {
                                  className: f.B5,
                                  children: [
                                      (0, n.jsx)(i.DZT, {
                                          variant: "heading-xl/extrabold",
                                          color: "always-white",
                                          children: p.intl.string(p.t["b3+OH1"]),
                                      }),
                                      (0, n.jsx)(i.$nd, {
                                          variant: "secondary",
                                          icon: i.I9m,
                                          iconPosition: "end",
                                          text: p.intl.string(p.t["kq/75v"]),
                                          onMouseDown: C,
                                          onClick: A,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, n.jsx)("div", {
                          className: f.$2,
                          children: s.map((e, t) =>
                              (0, n.jsx)(
                                  _.A,
                                  {
                                      skuId: e,
                                      applicationId: h.XR,
                                      guildId: h.Kf,
                                      positionInSection: t,
                                      onClick: () => b(e),
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
