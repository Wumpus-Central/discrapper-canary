e.d(i, { default: () => h });
var l = e(627968),
    n = e(64700),
    a = e(158954),
    r = e(311907),
    s = e(964486),
    c = e(587895),
    o = e(67480),
    d = e(954571),
    u = e(733391),
    p = e(832163),
    _ = e(652215),
    g = e(985018),
    E = e(647933);
function h(t) {
    let { transitionState: i, onClose: e, onContinue: h, guildId: x, skuId: f, analyticsLocations: b } = t,
        k = (0, r.bG)([p.A], () => p.A.getSKUEligibilityEntry(f)),
        A = k?.state,
        j = (0, r.bG)([o.A], () => o.A.get(f)),
        m = (0, r.bG)([c.A], () => c.A.getApplication(j?.applicationId)),
        R = n.useRef(0),
        I = n.useRef(!1);
    (0, s.Ay)(() => {
        (R.current = Date.now()),
            d.default.track(_.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_STARTED, {
                sku_id: f,
                guild_id: x,
                application_id: j?.applicationId ?? null,
                eligibility_state: k?.state ?? "none",
                location_stack: b,
            });
    });
    let S = n.useCallback(
        (t) => {
            if (I.current) return;
            I.current = !0;
            let i = k?.state === "error" ? k : void 0;
            d.default.track(_.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_COMPLETED, {
                sku_id: f,
                guild_id: x,
                application_id: j?.applicationId ?? null,
                result: t,
                duration_ms: Date.now() - R.current,
                error_reason: i?.reason ?? null,
                error_http_status: i?.httpStatus ?? null,
                location_stack: b,
            });
        },
        [f, x, j?.applicationId, k, b],
    );
    return (
        n.useEffect(() => {
            null == A && (0, u.iR)(x, f, "SocialLayerStorefrontEligibilityCheckModal");
        }, [x, f, A]),
        n.useEffect(() => {
            if (null != A && "checking" !== A) {
                if ("ineligible" === A) return void S("ineligible");
                S(A), h();
            }
        }, [A, h, S]),
        (0, l.jsx)(a.dWK, {
            transitionState: i,
            onClose: e,
            size: "ineligible" === A ? "md" : "sm",
            children:
                "ineligible" === A
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(a.rQ0, { title: g.intl.string(g.t.cg0M2H) }),
                              (0, l.jsx)(a.cwr, {
                                  children: (0, l.jsx)(a.EYj, {
                                      variant: "text-md/normal",
                                      color: "text-subtle",
                                      children: g.intl.format(g.t.uLjkVR, { applicationName: m?.name ?? "" }),
                                  }),
                              }),
                              (0, l.jsx)(a.H7u, {
                                  actionsFullWidth: !0,
                                  actions: [{ variant: "primary", text: g.intl.string(g.t.cpT0Cq), onClick: e }],
                              }),
                          ],
                      })
                    : (0, l.jsx)(a.cwr, {
                          children: (0, l.jsxs)("div", {
                              className: E.Q,
                              children: [
                                  (0, l.jsx)(a.y$y, {}),
                                  (0, l.jsx)(a.EYj, {
                                      variant: "text-md/normal",
                                      color: "text-subtle",
                                      children: g.intl.string(g.t.pWxiLd),
                                  }),
                              ],
                          }),
                      }),
        })
    );
}
