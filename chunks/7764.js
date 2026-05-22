n.d(t, { zX: () => b, kJ: () => M, hh: () => w });
var l = n(627968),
    i = n(64700);
n(295405);
var r = n(166532);
n(735305);
var s = n(343834),
    a = n(926795),
    o = n(284009),
    u = n.n(o),
    c = n(821609),
    d = n(534514),
    C = n(834730),
    p = n(427675),
    m = n(671744),
    _ = n(937008),
    T = n(834252),
    E = n(921925),
    A = n(482132),
    O = n(375708),
    h = n(989553);
function I(e) {
    let { handleClose: t } = e,
        n = (0, m.t4)((e) => e.selectedSkuId),
        { application: i } = (0, T.P5)(),
        r = (0, p.gU)(),
        { isGift: s, giftRecipient: a } = (0, _.Pv)();
    u()(null != n, "Expected selectedSkuId"), u()(null != i, "Expected application");
    let o = r[n];
    u()(null != o, "Expected sku");
    let I = s
        ? O.intl.formatToPlainString(O.t["2VjPTw"], {
              itemName: o.name,
              giftRecipient: a?.username ?? "your recipient",
          })
        : O.intl.formatToPlainString(O.t.wK0IbP, { applicationName: i.name, itemName: o.name });
    return (0, l.jsxs)(A.dZ, {
        children: [
            (0, l.jsx)(E.A, {}),
            (0, l.jsxs)("div", {
                className: h.EL,
                children: [
                    (0, l.jsx)(d.D, { variant: "heading-xxl/bold", className: h.RS, children: "Success!" }),
                    (0, l.jsx)(C.E, { variant: "text-md/normal", children: I }),
                    (0, l.jsx)("div", { className: h.yF }),
                    (0, l.jsx)(c.$, { onClick: t, text: O.intl.string(O.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
n(862241);
var g = n(702841),
    S = n(545075),
    x = n(426398),
    f = n(590180),
    P = n(20742),
    N = n(430993),
    v = n(315949),
    y = n(599062);
function j() {
    let { refreshCategories: e } = (0, v.A)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(P.rQ, { title: O.intl.string(O.t["p8+qtU"]) }),
            (0, l.jsx)(N.c, { children: (0, l.jsx)(y.h, { onRetry: e, errorOrigin: y.A.GIFT_MODAL }) }),
        ],
    });
}
var R = n(534479),
    k = n(652215);
function L(e) {
    let { handleStepChange: t } = e,
        n = (0, m.t4)((e) => e.selectedSkuId),
        { paymentSources: s, hasFetchedPaymentSources: a } = (0, x.jm)(),
        { blockedPayments: o, application: u } = (0, T.P5)(),
        c = (0, p.gU)(),
        d = (0, p.Hu)(),
        { isGift: C } = (0, _.Pv)(),
        [E, A] = i.useState(!0),
        [O, h] = (0, g.yK)([f.A], () => [f.A.isFetchingCategories, f.A.error]);
    return (i.useEffect(() => {
        let e = null != u;
        d && a && e && A(O);
    }, [d, a, u, O]),
    i.useEffect(() => {
        if (E || o || null == n) return;
        let e = c[n];
        C &&
        (e?.productLine === k.EZt.COLLECTIBLES ||
            e?.productLine === k.EZt.APPLICATION ||
            e?.productLine === k.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(r.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(s).length
              ? t(r.pn.ADD_PAYMENT_STEPS)
              : t(r.pn.REVIEW);
    }, [E, o, t, s, C, c, n]),
    E)
        ? (0, l.jsx)(R.A, {})
        : o
          ? (0, l.jsx)(S.oO, {})
          : null != h
            ? (0, l.jsx)(j, {})
            : null;
}
let M = { key: null, renderStep: (e) => (0, l.jsx)(L, { ...e }), options: { modalSizeGetter: () => "md" } };
r.pn.ADD_PAYMENT_STEPS;
let U = { key: r.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(a.A, {}) },
    F = { key: r.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(s.A, {}), options: { renderHeader: !0 } };
r.pn.REVIEW;
let b = { key: r.pn.CONFIRM, renderStep: (e) => (0, l.jsx)(I, { ...e }) },
    w = [U, F];
