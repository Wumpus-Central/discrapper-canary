var l,
    i = n(582128),
    r = n(855986),
    a = n(451988),
    s = n(669815),
    o = n(225123),
    u = n(166532),
    c = n(566980),
    d = n(120700),
    m = n(682689),
    p = n(883645),
    h = n(558620),
    C =
        (((l = {})[(l.PENDING = 1)] = "PENDING"),
        (l[(l.ERROR = 2)] = "ERROR"),
        (l[(l.NONE = 3)] = "NONE"),
        (l[(l.CANCELLED = 4)] = "CANCELLED"),
        l);
n.d(
    t,
    {},
    {
        QR: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = (0, m.t4)((e) => e.awaitingPaymentId),
                l = (0, r.bG)([o.A], () => o.A.isConnected()),
                u = i.useRef(new a.IX());
            i.useEffect(() => {
                t || l || null == n || 1 !== e ? u.current.stop() : u.current.start(5e3, () => (0, s.TK)(n));
            }, [n, e, l, t]);
        },
        b: function (e) {
            let {
                    currentStep: t,
                    paymentAuthenticationState: n,
                    setStep: l,
                    setPurchaseState: r,
                    requiresSeparateAuthentication: a = !1,
                    handlePurchase: s,
                    disabled: o = !1,
                } = e,
                { unifiedCheckoutFlow: C } = (0, m.t4)((e) => ({ unifiedCheckoutFlow: e.unifiedCheckoutFlow })),
                f = (0, h.A)(),
                S = (0, p.S1)(),
                E = u.pn.REVIEW;
            (C === d.C.PREMIUM_CHECKOUT &&
                null == f &&
                (E = S.find((e) => e === u.pn.SKU_SELECT || e === u.pn.PLAN_SELECT)),
                i.useEffect(() => {
                    o ||
                        null == t ||
                        (1 === n && t !== u.pn.AWAITING_AUTHENTICATION
                            ? l(u.pn.AWAITING_AUTHENTICATION)
                            : t === u.pn.AWAITING_AUTHENTICATION &&
                              (2 === n || 4 === n
                                  ? null != E && l(E)
                                  : 3 === n &&
                                    (a ? (null != s ? s() : l(u.pn.REVIEW)) : (r(c.h.COMPLETED), l(u.pn.CONFIRM)))));
                }, [E, t, n, l, r, a, s, o]));
        },
        oc: C,
    },
);
