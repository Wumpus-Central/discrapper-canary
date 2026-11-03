e.d(i, { default: () => b });
var n = e(477900),
    l = e(582128),
    r = e(17928),
    s = e(224640),
    a = e(20742),
    c = e(430993),
    d = e(834730),
    u = e(696208),
    o = e(289873),
    _ = e(964486),
    p = e(174459),
    E = e(733391),
    g = e(832163),
    h = e(652215),
    x = e(105292),
    k = e(391963);
function b(t) {
    let {
            transitionState: i,
            onClose: e,
            onContinue: b,
            applicationId: f,
            guildId: m,
            skuId: R,
            paymentKind: j,
            analyticsLocations: A,
        } = t,
        S = (0, r.bG)([g.A], () => g.A.getSKUEligibilityEntry(R)),
        T = S?.state,
        C = l.useRef(0),
        I = l.useRef(!1);
    (0, _.Ay)(() => {
        ((C.current = Date.now()),
            p.default.track(h.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_STARTED, {
                sku_id: R,
                guild_id: m,
                application_id: f,
                payment_kind: j,
                eligibility_state: S?.state ?? "none",
                location_stack: A,
            }));
    });
    let y = l.useCallback(
        (t) => {
            if (I.current) return;
            I.current = !0;
            let i = S?.state === "error" ? S : void 0;
            p.default.track(h.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_COMPLETED, {
                sku_id: R,
                guild_id: m,
                application_id: f,
                payment_kind: j,
                result: t,
                duration_ms: Date.now() - C.current,
                error_reason: i?.reason ?? null,
                error_http_status: i?.httpStatus ?? null,
                location_stack: A,
            });
        },
        [R, m, f, j, S, A],
    );
    return (
        l.useEffect(() => {
            null == T && (0, E.iR)(f, R);
        }, [f, R, T]),
        l.useEffect(() => {
            if (null != T && "checking" !== T) {
                if ("ineligible" === T) return void y("ineligible");
                (y(T), b());
            }
        }, [T, b, y]),
        (0, n.jsx)(s.d, {
            transitionState: i,
            onClose: e,
            size: "ineligible" === T ? "md" : "sm",
            children:
                "ineligible" === T
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(a.rQ, { title: x.intl.string(x.t.cg0M2H) }),
                              (0, n.jsx)(c.c, {
                                  children: (0, n.jsx)(d.E, {
                                      variant: "text-md/normal",
                                      color: "text-subtle",
                                      children: x.intl.string(x.t.IqlPbQ),
                                  }),
                              }),
                              (0, n.jsx)(u.H, {
                                  actionsFullWidth: !0,
                                  actions: [{ variant: "primary", text: x.intl.string(x.t.cpT0Cq), onClick: e }],
                              }),
                          ],
                      })
                    : (0, n.jsx)(c.c, {
                          children: (0, n.jsxs)("div", {
                              className: k.Q,
                              children: [
                                  (0, n.jsx)(o.y, {}),
                                  (0, n.jsx)(d.E, {
                                      variant: "text-md/normal",
                                      color: "text-subtle",
                                      children: x.intl.string(x.t.pWxiLd),
                                  }),
                              ],
                          }),
                      }),
        })
    );
}
