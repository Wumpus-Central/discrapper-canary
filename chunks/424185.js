e.d(t, {
    default: () => x,
});
var l = e(627968),
    n = e(64700),
    r = e(158954),
    s = e(311907),
    a = e(587895),
    c = e(67480),
    o = e(733391),
    d = e(832163),
    u = e(985018),
    p = e(647933);

function x(i) {
    var t;
    let { transitionState: e, onClose: x, onContinue: h, guildId: g, skuId: j } = i,
        b = (0, s.bG)([d.A], () => d.A.getSKUEligibility(j)),
        m = (0, s.bG)([c.A], () => c.A.get(j)),
        f = (0, s.bG)([a.A], () => a.A.getApplication(null == m ? void 0 : m.applicationId));
    return (
        n.useEffect(() => {
            (0, o.iR)(g, j, "SocialLayerStorefrontEligibilityCheckModal");
        }, [g, j]),
        n.useEffect(() => {
            null != b && "ineligible" !== b && "checking" !== b && h();
        }, [b, h]),
        (0, l.jsx)(r.dWK, {
            transitionState: e,
            onClose: x,
            size: "ineligible" === b ? "md" : "sm",
            children:
                "ineligible" === b
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(r.rQ0, {
                                  title: u.intl.string(u.t.cg0M2H),
                              }),
                              (0, l.jsx)(r.cwr, {
                                  children: (0, l.jsx)(r.EYj, {
                                      variant: "text-md/normal",
                                      color: "text-subtle",
                                      children: u.intl.format(u.t.uLjkVR, {
                                          applicationName: null != (t = null == f ? void 0 : f.name) ? t : "",
                                      }),
                                  }),
                              }),
                              (0, l.jsx)(r.H7u, {
                                  actionsFullWidth: !0,
                                  actions: [
                                      {
                                          variant: "primary",
                                          text: u.intl.string(u.t.cpT0Cq),
                                          onClick: x,
                                      },
                                  ],
                              }),
                          ],
                      })
                    : (0, l.jsx)(r.cwr, {
                          children: (0, l.jsxs)("div", {
                              className: p.Q,
                              children: [
                                  (0, l.jsx)(r.y$y, {}),
                                  (0, l.jsx)(r.EYj, {
                                      variant: "text-md/normal",
                                      color: "text-subtle",
                                      children: u.intl.string(u.t.pWxiLd),
                                  }),
                              ],
                          }),
                      }),
        })
    );
}
