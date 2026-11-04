var i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(620632),
    l = n(73153),
    o = n(627784),
    d = n(570221),
    c = n(879610),
    u = n(371794),
    _ = n(652215);
async function E(e) {
    let {
        subscriptionId: t,
        items: n,
        paymentSourceId: i,
        renewal: r,
        currency: a,
        applyEntitlements: u = !1,
        analyticsLocations: E,
        analyticsLocation: A,
        userDiscountOfferId: h,
        loadId: f,
    } = e;
    null != n && (n = (0, c.qn)(n));
    let I = {
        items: n?.map((e) => {
            let { planId: t, ...n } = e;
            return { ...n, plan_id: t };
        }),
        payment_source_id: i,
        renewal: r,
        apply_entitlements: u,
        currency: a,
        user_discount_offer_id: h,
        load_id: f,
    };
    try {
        let e = await s.Bo.patch({
                url: _.Rsh.BILLING_SUBSCRIPTION_PREVIEW(t),
                query: { location: A, location_stack: E },
                body: I,
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            n = d.A.createInvoiceFromServer(e.body);
        return (
            null != i &&
                n.checkoutContext?.payment_sources != null &&
                l.h.dispatch({
                    type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE",
                    checkoutContext: n.checkoutContext,
                    paymentSourceId: i,
                }),
            n
        );
    } catch (e) {
        throw new o.Ey(e);
    }
}
function A(e, t, n) {
    let { preventFetch: r = !1 } = e,
        [a, s] = (0, i.useState)(null),
        [l, o] = (0, i.useState)(null),
        d = (0, i.useRef)(null);
    return (
        (0, i.useEffect)(() => {
            let e = !1;
            return (
                r ||
                    (async function () {
                        try {
                            o(null);
                            let n = await t(d.current);
                            e || ((d.current = n), s(n));
                        } catch (t) {
                            e || ((d.current = null), o(t), s(null));
                        }
                    })(),
                () => {
                    e = !0;
                }
            );
        }, [r, t, n]),
        [a, l]
    );
}
n.d(
    t,
    {},
    {
        $n: A,
        C8: function (e, t) {
            let n = (0, i.useRef)(e);
            (0, i.useEffect)(() => {
                n.current = e;
            });
            let r = JSON.stringify(e);
            return A(
                e,
                (0, i.useCallback)(
                    () =>
                        (async function (e) {
                            let { subscriptionId: t, preventFetch: n } = e;
                            if (n) return null;
                            let i = await s.Bo.get({
                                url: _.Rsh.BILLING_SUBSCRIPTION_INVOICE(t),
                                oldFormErrors: !0,
                                rejectWithError: !1,
                            });
                            return d.A.createInvoiceFromServer(i.body);
                        })(n.current),
                    [r],
                ),
                t,
            );
        },
        OQ: E,
        QQ: function (e, t) {
            let n = (0, i.useRef)(e),
                r = (0, i.useRef)(!1);
            (0, i.useEffect)(() => {
                n.current = e;
            });
            let s = JSON.stringify(e);
            return A(
                e,
                (0, i.useCallback)(() => {
                    let e = n.current,
                        t = r.current ? e : { ...e, paymentSourceId: null };
                    return (
                        (r.current = !0),
                        (async function (e) {
                            let {
                                paymentSourceId: t,
                                skuId: n,
                                subscriptionPlanId: i,
                                currency: r,
                                loadId: s,
                                quantity: l,
                                applyWalletBalance: c,
                            } = e;
                            a()(null != n && "" !== n, "SKU ID is missing for one time purchase gift invoice preview");
                            let E = {
                                gift: !0,
                                payment_source_id: t,
                                sku_subscription_plan_id: i,
                                currency: r,
                                load_id: s,
                            };
                            (null != l && (E.quantity = l), null != c && (E.apply_wallet_balance = c));
                            try {
                                let e = await (0, u.aP)({
                                    url: _.Rsh.STORE_SKU_PURCHASE(n),
                                    query: E,
                                    oldFormErrors: !0,
                                    rejectWithError: !1,
                                });
                                return d.A.createFromOTPPreview(e.body);
                            } catch (e) {
                                throw new o.Ey(e);
                            }
                        })(t)
                    );
                }, [s]),
                t,
            );
        },
        YV: function (e, t) {
            let n, r, a;
            if ("subscriptionId" in e && null == e.subscriptionId) {
                let { subscriptionId: t, ...n } = e;
                e = n;
            }
            let u = (0, i.useRef)(e),
                h = (0, i.useRef)(!1),
                {
                    serverPricedPreviewRef: f,
                    shouldReturnInvoiceCache: I,
                    updateServerPricedPreviewRef: p,
                } = ((n = (0, i.useRef)(null)),
                (0, i.useEffect)(() => {
                    n.current = null;
                }, [t]),
                (r = (0, i.useCallback)((e, t) => {
                    let i = n.current;
                    return (
                        null != i &&
                        null != e.paymentSourceId &&
                        e.paymentSourceId === i.serverSelectedPaymentSourceId &&
                        t === i.dedupeKey
                    );
                }, [])),
                (a = (0, i.useCallback)((e, t, i) => {
                    let r;
                    if (null != i) {
                        n.current = null;
                        return;
                    }
                    n.current = {
                        record: e,
                        dedupeKey: t,
                        serverSelectedPaymentSourceId:
                            null == (r = e.checkoutContext?.payment_sources)
                                ? null
                                : (r.find((e) => e.enabled)?.id ?? null),
                    };
                }, [])),
                { serverPricedPreviewRef: n, shouldReturnInvoiceCache: r, updateServerPricedPreviewRef: a });
            (0, i.useEffect)(() => {
                u.current = e;
            });
            let m = JSON.stringify(e),
                T = (0, i.useCallback)(() => {
                    let e = u.current,
                        t = h.current ? e : { ...e, paymentSourceId: null };
                    if ("subscriptionId" in t) return ((h.current = !0), E(t));
                    if (!("items" in t)) return null;
                    {
                        h.current = !0;
                        let e = JSON.stringify({ ...t, paymentSourceId: "exclude_from_dedupe" }),
                            n = f.current;
                        return null != n && I(t, e)
                            ? Promise.resolve(n.record)
                            : (async function (e) {
                                  let {
                                          items: t,
                                          paymentSourceId: n,
                                          trialId: i,
                                          code: r,
                                          applyEntitlements: a = !1,
                                          currency: u,
                                          renewal: E,
                                          metadata: A,
                                          loadId: h,
                                      } = e,
                                      f = {
                                          items: (t = (0, c.qn)(t)).map((e) => {
                                              let { planId: t, ...n } = e;
                                              return { ...n, plan_id: t };
                                          }),
                                          payment_source_id: n,
                                          trial_id: i,
                                          code: r,
                                          apply_entitlements: a,
                                          currency: u,
                                          renewal: E,
                                          metadata: A,
                                          load_id: h,
                                      };
                                  try {
                                      let e = await s.Bo.post({
                                              url: _.Rsh.BILLING_SUBSCRIPTIONS_PREVIEW,
                                              body: f,
                                              oldFormErrors: !0,
                                              rejectWithError: !1,
                                          }),
                                          t = d.A.createInvoiceFromServer(e.body);
                                      return (
                                          t.checkoutContext?.payment_sources != null &&
                                              l.h.dispatch({
                                                  type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE",
                                                  checkoutContext: t.checkoutContext,
                                                  paymentSourceId: n,
                                              }),
                                          t
                                      );
                                  } catch (e) {
                                      throw new o.Ey(e);
                                  }
                              })(t).then((n) => (p(n, e, t.paymentSourceId), n));
                    }
                }, [m, f, I, p]);
            return A(e, T, t);
        },
        sL: function (e) {
            let t = e.subscriptionPlanPrice;
            return (
                e.discounts.forEach((n) => {
                    let i = n.amount / e.quantity;
                    t -= i;
                }),
                t
            );
        },
    },
);
