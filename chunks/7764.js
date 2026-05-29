n.d(t, { zX: () => w, kJ: () => k, hh: () => b });
var l = n(627968),
    r = n(64700);
n(295405);
var i = n(166532);
n(735305);
var s = n(343834),
    a = n(926795),
    o = n(284009),
    u = n.n(o),
    c = n(821609),
    d = n(534514),
    C = n(834730),
    _ = n(31823),
    p = n(427675),
    m = n(722847),
    E = n(937008),
    T = n(921925),
    I = n(482132),
    O = n(375708),
    A = n(989553);
function S(e) {
    let { handleClose: t } = e,
        n = (0, m.t4)((e) => e.selectedSkuId),
        { application: r } = (0, _.V)(),
        i = (0, p.gU)(),
        { isGift: s, giftRecipient: a } = (0, E.Pv)();
    u()(null != n, "Expected selectedSkuId"), u()(null != r, "Expected application");
    let o = i[n];
    u()(null != o, "Expected sku");
    let S = s
        ? O.intl.formatToPlainString(O.t["2VjPTw"], {
              itemName: o.name,
              giftRecipient: a?.username ?? "your recipient",
          })
        : O.intl.formatToPlainString(O.t.wK0IbP, { applicationName: r.name, itemName: o.name });
    return (0, l.jsxs)(I.dZ, {
        children: [
            (0, l.jsx)(T.A, {}),
            (0, l.jsxs)("div", {
                className: A.EL,
                children: [
                    (0, l.jsx)(d.D, { variant: "heading-xxl/bold", className: A.RS, children: "Success!" }),
                    (0, l.jsx)(C.E, { variant: "text-md/normal", children: S }),
                    (0, l.jsx)("div", { className: A.yF }),
                    (0, l.jsx)(c.$, { onClick: t, text: O.intl.string(O.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
n(862241);
var h = n(702841),
    g = n(86379),
    P = n(545075),
    f = n(426398),
    x = n(590180),
    N = n(20742),
    R = n(430993),
    U = n(315949),
    v = n(599062);
function L() {
    let { refreshCategories: e } = (0, U.A)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(N.rQ, { title: O.intl.string(O.t["p8+qtU"]) }),
            (0, l.jsx)(R.c, { children: (0, l.jsx)(v.h, { onRetry: e, errorOrigin: v.A.GIFT_MODAL }) }),
        ],
    });
}
var y = n(534479),
    M = n(652215);
function j(e) {
    let { handleStepChange: t } = e,
        n = (0, m.t4)((e) => e.selectedSkuId),
        { paymentSources: s, hasFetchedPaymentSources: a } = (0, f.jm)(),
        { application: o } = (0, _.V)(),
        u = (0, g.Hp)(),
        c = (0, p.gU)(),
        d = (0, p.Hu)(),
        { isGift: C } = (0, E.Pv)(),
        [T, I] = r.useState(!0),
        [O, A] = (0, h.yK)([x.A], () => [x.A.isFetchingCategories, x.A.error]);
    return (r.useEffect(() => {
        let e = null != o;
        d && a && e && I(O);
    }, [d, a, o, O]),
    r.useEffect(() => {
        if (T || u || null == n) return;
        let e = c[n];
        C &&
        (e?.productLine === M.EZt.COLLECTIBLES ||
            e?.productLine === M.EZt.APPLICATION ||
            e?.productLine === M.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(i.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(s).length
              ? t(i.pn.ADD_PAYMENT_STEPS)
              : t(i.pn.REVIEW);
    }, [T, u, t, s, C, c, n]),
    T)
        ? (0, l.jsx)(y.A, {})
        : u
          ? (0, l.jsx)(P.oO, {})
          : null != A
            ? (0, l.jsx)(L, {})
            : null;
}
let k = { key: null, renderStep: (e) => (0, l.jsx)(j, { ...e }), options: { modalSizeGetter: () => "md" } };
i.pn.ADD_PAYMENT_STEPS;
let F = { key: i.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(a.A, {}) },
    D = { key: i.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(s.A, {}), options: { renderHeader: !0 } };
i.pn.REVIEW;
let w = { key: i.pn.CONFIRM, renderStep: (e) => (0, l.jsx)(S, { ...e }) },
    b = [F, D];
