e.d(i, { default: () => x });
var n = e(477900),
    l = e(582128),
    r = e(17928),
    s = e(224640),
    a = e(20742),
    c = e(430993),
    d = e(834730),
    o = e(696208),
    u = e(289873),
    _ = e(964486),
    p = e(174459),
    E = e(733391),
    g = e(832163),
    h = e(652215),
    b = e(105292),
    k = e(391963);
function x(t) {
    let {
            transitionState: i,
            onClose: e,
            onContinue: x,
            applicationId: f,
            guildId: m,
            skuId: R,
            paymentKind: j,
            analyticsLocations: y,
        } = t,
        A = (0, r.bG)([g.A], () => g.A.getSKUEligibilityEntry(R)),
        S = A?.state,
        T = l.useRef(0),
        C = l.useRef(!1);
    (0, _.Ay)(() => {
        ((T.current = Date.now()),
            p.default.track(h.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_STARTED, {
                sku_id: R,
                guild_id: m,
                application_id: f,
                payment_kind: j,
                eligibility_state: A?.state ?? "none",
                location_stack: y,
            }));
    });
    let I = l.useCallback(
        (t) => {
            if (C.current) return;
            C.current = !0;
            let i = A?.state === "error" ? A : void 0;
            p.default.track(h.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_COMPLETED, {
                sku_id: R,
                guild_id: m,
                application_id: f,
                payment_kind: j,
                result: t,
                duration_ms: Date.now() - T.current,
                error_reason: i?.reason ?? null,
                error_http_status: i?.httpStatus ?? null,
                location_stack: y,
            });
        },
        [R, m, f, j, A, y],
    );
    return (
        l.useEffect(() => {
            null == S && (0, E.iR)(f, R);
        }, [f, R, S]),
        l.useEffect(() => {
            if (null != S && "checking" !== S) {
                if ("ineligible" === S) return void I("ineligible");
                (I(S), x());
            }
        }, [S, x, I]),
        (0, n.jsx)(s.d, {
            transitionState: i,
            onClose: e,
            size: "ineligible" === S ? "md" : "sm",
            children:
                "ineligible" === S
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(a.rQ, { title: b.intl.string(b.t.cg0M2H) }),
                              (0, n.jsx)(c.c, {
                                  children: (0, n.jsx)(d.E, {
                                      variant: "body-md/normal",
                                      color: "text-subtle",
                                      children: b.intl.string(b.t.IqlPbQ),
                                  }),
                              }),
                              (0, n.jsx)(o.H, {
                                  actionsFullWidth: !0,
                                  actions: [{ variant: "primary", text: b.intl.string(b.t.cpT0Cq), onClick: e }],
                              }),
                          ],
                      })
                    : (0, n.jsx)(c.c, {
                          children: (0, n.jsxs)("div", {
                              className: k.Q,
                              children: [
                                  (0, n.jsx)(u.y, {}),
                                  (0, n.jsx)(d.E, {
                                      variant: "body-md/normal",
                                      color: "text-subtle",
                                      children: b.intl.string(b.t.pWxiLd),
                                  }),
                              ],
                          }),
                      }),
        })
    );
}
