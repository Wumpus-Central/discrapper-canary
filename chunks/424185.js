e.d(i, { default: () => k });
var n = e(627968),
    l = e(64700),
    r = e(224640),
    a = e(20742),
    s = e(430993),
    c = e(834730),
    o = e(696208),
    d = e(289873),
    u = e(17928),
    _ = e(964486),
    p = e(67480),
    g = e(954571),
    x = e(733391),
    E = e(832163),
    h = e(652215),
    b = e(985018),
    f = e(495630);
function k(t) {
    let { transitionState: i, onClose: e, onContinue: k, guildId: A, skuId: I, analyticsLocations: R } = t,
        j = (0, u.bG)([E.A], () => E.A.getSKUEligibilityEntry(I)),
        m = j?.state,
        S = (0, u.bG)([p.A], () => p.A.get(I)),
        T = l.useRef(0),
        C = l.useRef(!1);
    (0, _.Ay)(() => {
        (T.current = Date.now()),
            g.default.track(h.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_STARTED, {
                sku_id: I,
                guild_id: A,
                application_id: S?.applicationId ?? null,
                eligibility_state: j?.state ?? "none",
                location_stack: R,
            });
    });
    let L = l.useCallback(
        (t) => {
            if (C.current) return;
            C.current = !0;
            let i = j?.state === "error" ? j : void 0;
            g.default.track(h.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_COMPLETED, {
                sku_id: I,
                guild_id: A,
                application_id: S?.applicationId ?? null,
                result: t,
                duration_ms: Date.now() - T.current,
                error_reason: i?.reason ?? null,
                error_http_status: i?.httpStatus ?? null,
                location_stack: R,
            });
        },
        [I, A, S?.applicationId, j, R],
    );
    return (
        l.useEffect(() => {
            null == m && (0, x.iR)(A, I);
        }, [A, I, m]),
        l.useEffect(() => {
            if (null != m && "checking" !== m) {
                if ("ineligible" === m) return void L("ineligible");
                L(m), k();
            }
        }, [m, k, L]),
        (0, n.jsx)(r.d, {
            transitionState: i,
            onClose: e,
            size: "ineligible" === m ? "md" : "sm",
            children:
                "ineligible" === m
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(a.rQ, { title: b.intl.string(b.t.cg0M2H) }),
                              (0, n.jsx)(s.c, {
                                  children: (0, n.jsx)(c.E, {
                                      variant: "text-md/normal",
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
                    : (0, n.jsx)(s.c, {
                          children: (0, n.jsxs)("div", {
                              className: f.Q,
                              children: [
                                  (0, n.jsx)(d.y, {}),
                                  (0, n.jsx)(c.E, {
                                      variant: "text-md/normal",
                                      color: "text-subtle",
                                      children: b.intl.string(b.t.pWxiLd),
                                  }),
                              ],
                          }),
                      }),
        })
    );
}
