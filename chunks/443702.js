n.d(t, {
    B7: () => N,
    ZP: () => w,
    v0: () => P,
    wu: () => A,
});
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(355467),
    l = n(497321),
    c = n(231428),
    u = n(390954),
    d = n(89057),
    f = n(921801),
    p = n(246946),
    _ = n(594174),
    m = n(351402),
    h = n(853872),
    g = n(78839),
    E = n(706454),
    b = n(313789),
    y = n(518596),
    O = n(726985),
    v = n(981631),
    S = n(388032),
    I = n(330374);
function T() {
    return (0, r.jsx)("div", {
        className: I.syncing,
        children: (0, r.jsx)(o.$jN, {}),
    });
}
function C() {
    (0, y.openUserSettings)(b.n.GIFT_PANEL, { section: v.oAB.INVENTORY });
}
function A(e) {
    let { showHeader: t = !1 } = e,
        n = (0, a.e7)([m.Z], () => m.Z.isSyncing),
        o = (0, a.e7)([h.Z], () => h.Z.paymentSources),
        l = (0, a.e7)([h.Z], () => h.Z.defaultPaymentSourceId),
        c = (0, a.e7)([E.default], () => E.default.locale),
        d = (0, a.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
        f = (0, a.e7)([m.Z], () => m.Z.isRemovingPaymentSource),
        p = (0, a.e7)([m.Z], () => m.Z.isUpdatingPaymentSource);
    return (i.useEffect(() => {
        s.tZ(), s.jg();
    }, []),
    n && 0 === Object.keys(o).length)
        ? (0, r.jsx)(T, {})
        : (0, r.jsx)(u.Z, {
              showHeader: t,
              paymentSources: o,
              defaultPaymentSourceId: l,
              premiumSubscriptionPaymentSourceId: null != d && d.status !== v.O0b.CANCELED ? d.paymentSourceId : null,
              locale: c,
              removing: f,
              submitting: p,
          });
}
function N(e) {
    let { className: t } = e;
    return (0, r.jsx)(o.Wn, {
        messageType: o.QYI.INFO,
        className: t,
        children: S.intl.format(S.t["8b+FXG"], { onClick: C }),
    });
}
function P() {
    let e = (0, a.e7)([E.default], () => E.default.locale);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.oQ, {}), (0, r.jsx)(c.Z, { locale: e })],
    });
}
function R() {
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(f.F, {
                setting: O.s6.BILLING_PAYMENT_METHODS,
                children: (0, r.jsx)(A, { showHeader: !0 }),
            }),
            (0, r.jsx)(f.F, {
                setting: O.s6.BILLING_TRANSACTION_HISTORY,
                children: (0, r.jsx)("div", {
                    className: I.paymentHistory,
                    children: (0, r.jsxs)(o.Kqy, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(o.Heading, {
                                variant: "heading-lg/semibold",
                                children: S.intl.string(S.t.obLrcK),
                            }),
                            (0, r.jsx)(P, {}),
                        ],
                    }),
                }),
            }),
            (0, r.jsx)(N, { className: I.codeRedemptionRedirect }),
        ],
    });
}
function w() {
    let e = (0, a.e7)([_.default], () => null != _.default.getCurrentUser()),
        t = (0, a.e7)([p.Z], () => p.Z.enabled);
    return e ? (t ? (0, r.jsx)(l.Z, {}) : (0, r.jsx)(R, {})) : (0, r.jsx)(T, {});
}
