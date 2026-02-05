e.d(t, { default: () => h });
var n = e(627968),
    l = e(64700),
    r = e(158954),
    s = e(311907),
    c = e(587895),
    a = e(67480),
    o = e(733391),
    d = e(832163),
    p = e(985018),
    x = e(647933);
function h(i) {
    let { transitionState: t, onClose: e, onContinue: h, guildId: u, skuId: g } = i,
        j = (0, s.bG)([d.A], () => d.A.getSKUEligibility(g)),
        b = (0, s.bG)([a.A], () => a.A.get(g)),
        m = (0, s.bG)([c.A], () => c.A.getApplication(b?.applicationId));
    return (
        l.useEffect(() => {
            (0, o.iR)(u, g, "SocialLayerStorefrontEligibilityCheckModal");
        }, [u, g]),
        l.useEffect(() => {
            null != j && "ineligible" !== j && "checking" !== j && h();
        }, [j, h]),
        (0, n.jsx)(r.dWK, {
            transitionState: t,
            onClose: e,
            size: "ineligible" === j ? "md" : "sm",
            children:
                "ineligible" === j
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(r.rQ0, { title: p.intl.string(p.t.cg0M2H) }),
                              (0, n.jsx)(r.cwr, {
                                  children: (0, n.jsx)(r.EYj, {
                                      variant: "text-md/normal",
                                      color: "text-subtle",
                                      children: p.intl.format(p.t.uLjkVR, { applicationName: m?.name ?? "" }),
                                  }),
                              }),
                              (0, n.jsx)(r.H7u, {
                                  actionsFullWidth: !0,
                                  actions: [{ variant: "primary", text: p.intl.string(p.t.cpT0Cq), onClick: e }],
                              }),
                          ],
                      })
                    : (0, n.jsx)(r.cwr, {
                          children: (0, n.jsxs)("div", {
                              className: x.Q,
                              children: [
                                  (0, n.jsx)(r.y$y, {}),
                                  (0, n.jsx)(r.EYj, {
                                      variant: "text-md/normal",
                                      color: "text-subtle",
                                      children: p.intl.string(p.t.pWxiLd),
                                  }),
                              ],
                          }),
                      }),
        })
    );
}
