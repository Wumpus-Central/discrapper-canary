e.d(i, { default: () => E });
var l = e(627968),
    n = e(64700),
    r = e(158954),
    a = e(311907),
    s = e(964486),
    c = e(67480),
    o = e(954571),
    d = e(733391),
    u = e(832163),
    _ = e(652215),
    p = e(985018),
    g = e(647933);
function E(t) {
    let { transitionState: i, onClose: e, onContinue: E, guildId: h, skuId: x, analyticsLocations: b } = t,
        f = (0, a.bG)([u.A], () => u.A.getSKUEligibilityEntry(x)),
        k = f?.state,
        j = (0, a.bG)([c.A], () => c.A.get(x)),
        A = n.useRef(0),
        I = n.useRef(!1);
    (0, s.Ay)(() => {
        (A.current = Date.now()),
            o.default.track(_.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_STARTED, {
                sku_id: x,
                guild_id: h,
                application_id: j?.applicationId ?? null,
                eligibility_state: f?.state ?? "none",
                location_stack: b,
            });
    });
    let R = n.useCallback(
        (t) => {
            if (I.current) return;
            I.current = !0;
            let i = f?.state === "error" ? f : void 0;
            o.default.track(_.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_COMPLETED, {
                sku_id: x,
                guild_id: h,
                application_id: j?.applicationId ?? null,
                result: t,
                duration_ms: Date.now() - A.current,
                error_reason: i?.reason ?? null,
                error_http_status: i?.httpStatus ?? null,
                location_stack: b,
            });
        },
        [x, h, j?.applicationId, f, b],
    );
    return (
        n.useEffect(() => {
            null == k && (0, d.iR)(h, x, "SocialLayerStorefrontEligibilityCheckModal");
        }, [h, x, k]),
        n.useEffect(() => {
            if (null != k && "checking" !== k) {
                if ("ineligible" === k) return void R("ineligible");
                R(k), E();
            }
        }, [k, E, R]),
        (0, l.jsx)(r.dWK, {
            transitionState: i,
            onClose: e,
            size: "ineligible" === k ? "md" : "sm",
            children:
                "ineligible" === k
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(r.rQ0, { title: p.intl.string(p.t.cg0M2H) }),
                              (0, l.jsx)(r.cwr, {
                                  children: (0, l.jsx)(r.EYj, {
                                      variant: "text-md/normal",
                                      color: "text-subtle",
                                      children: p.intl.string(p.t.IqlPbQ),
                                  }),
                              }),
                              (0, l.jsx)(r.H7u, {
                                  actionsFullWidth: !0,
                                  actions: [{ variant: "primary", text: p.intl.string(p.t.cpT0Cq), onClick: e }],
                              }),
                          ],
                      })
                    : (0, l.jsx)(r.cwr, {
                          children: (0, l.jsxs)("div", {
                              className: g.Q,
                              children: [
                                  (0, l.jsx)(r.y$y, {}),
                                  (0, l.jsx)(r.EYj, {
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
