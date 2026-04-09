e.d(i, { default: () => x });
var n = e(627968),
    l = e(64700),
    r = e(158954),
    a = e(311907),
    s = e(964486),
    c = e(67480),
    o = e(954571),
    u = e(733391),
    d = e(832163),
    _ = e(652215),
    p = e(985018),
    g = e(884743);
function x(t) {
    let { transitionState: i, onClose: e, onContinue: x, guildId: E, skuId: h, analyticsLocations: b } = t,
        f = (0, a.bG)([d.A], () => d.A.getSKUEligibilityEntry(h)),
        k = f?.state,
        j = (0, a.bG)([c.A], () => c.A.get(h)),
        A = l.useRef(0),
        I = l.useRef(!1);
    (0, s.Ay)(() => {
        (A.current = Date.now()),
            o.default.track(_.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_STARTED, {
                sku_id: h,
                guild_id: E,
                application_id: j?.applicationId ?? null,
                eligibility_state: f?.state ?? "none",
                location_stack: b,
            });
    });
    let R = l.useCallback(
        (t) => {
            if (I.current) return;
            I.current = !0;
            let i = f?.state === "error" ? f : void 0;
            o.default.track(_.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_COMPLETED, {
                sku_id: h,
                guild_id: E,
                application_id: j?.applicationId ?? null,
                result: t,
                duration_ms: Date.now() - A.current,
                error_reason: i?.reason ?? null,
                error_http_status: i?.httpStatus ?? null,
                location_stack: b,
            });
        },
        [h, E, j?.applicationId, f, b],
    );
    return (
        l.useEffect(() => {
            null == k && (0, u.iR)(E, h);
        }, [E, h, k]),
        l.useEffect(() => {
            if (null != k && "checking" !== k) {
                if ("ineligible" === k) return void R("ineligible");
                R(k), x();
            }
        }, [k, x, R]),
        (0, n.jsx)(r.dWK, {
            transitionState: i,
            onClose: e,
            size: "ineligible" === k ? "md" : "sm",
            children:
                "ineligible" === k
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(r.rQ0, { title: p.intl.string(p.t.cg0M2H) }),
                              (0, n.jsx)(r.cwr, {
                                  children: (0, n.jsx)(r.EYj, {
                                      variant: "text-md/normal",
                                      color: "text-subtle",
                                      children: p.intl.string(p.t.IqlPbQ),
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
                              className: g.Q,
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
