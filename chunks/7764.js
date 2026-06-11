n.d(t, { kO: () => F, zX: () => H, r3: () => b, hh: () => G });
var l = n(627968),
    r = n(64700);
n(295405);
var i = n(166532),
    a = n(314671);
n(735305);
var s = n(343834),
    o = n(926795),
    u = n(284009),
    c = n.n(u),
    d = n(821609),
    C = n(534514),
    p = n(834730),
    m = n(31823),
    _ = n(427675),
    E = n(211159),
    T = n(937008),
    I = n(921925),
    S = n(482132),
    h = n(375708),
    A = n(989553);
function O(e) {
    let { handleClose: t } = e,
        n = (0, E.t4)((e) => e.selectedSkuId),
        { application: r } = (0, m.V)(),
        i = (0, _.gU)(),
        { isGift: a, giftRecipient: s } = (0, T.Pv)();
    c()(null != n, "Expected selectedSkuId"), c()(null != r, "Expected application");
    let o = i[n];
    c()(null != o, "Expected sku");
    let u = a
        ? h.intl.formatToPlainString(h.t["2VjPTw"], {
              itemName: o.name,
              giftRecipient: s?.username ?? "your recipient",
          })
        : h.intl.formatToPlainString(h.t.wK0IbP, { applicationName: r.name, itemName: o.name });
    return (0, l.jsxs)(S.dZ, {
        children: [
            (0, l.jsx)(I.A, {}),
            (0, l.jsxs)("div", {
                className: A.EL,
                children: [
                    (0, l.jsx)(C.D, { variant: "heading-xxl/bold", className: A.RS, children: "Success!" }),
                    (0, l.jsx)(p.E, { variant: "text-md/normal", children: u }),
                    (0, l.jsx)("div", { className: A.yF }),
                    (0, l.jsx)(d.$, { onClick: t, text: h.intl.string(h.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var f = n(702841),
    x = n(86379),
    P = n(545075),
    g = n(426398),
    N = n(590180),
    R = n(20742),
    v = n(430993),
    y = n(579151),
    U = n(599062);
function j() {
    let { refreshCategories: e } = (0, y.A)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(R.rQ, { title: h.intl.string(h.t["p8+qtU"]) }),
            (0, l.jsx)(v.c, { children: (0, l.jsx)(U.h, { onRetry: e, errorOrigin: U.A.GIFT_MODAL }) }),
        ],
    });
}
var M = n(534479),
    L = n(652215);
function k(e) {
    let { handleStepChange: t } = e,
        n = (0, E.t4)((e) => e.selectedSkuId),
        { paymentSources: a, hasFetchedPaymentSources: s } = (0, g.jm)(),
        { application: o } = (0, m.V)(),
        u = (0, x.Hp)(),
        c = (0, _.gU)(),
        d = (0, _.Hu)(),
        { isGift: C } = (0, T.Pv)(),
        [p, I] = r.useState(!0),
        [S, h] = (0, f.yK)([N.A], () => [N.A.isFetchingCategories, N.A.error]);
    return (r.useEffect(() => {
        let e = null != o;
        d && s && e && I(S);
    }, [d, s, o, S]),
    r.useEffect(() => {
        if (p || u || null == n) return;
        let e = c[n];
        C &&
        (e?.productLine === L.EZt.COLLECTIBLES ||
            e?.productLine === L.EZt.APPLICATION ||
            e?.productLine === L.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(i.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(a).length
              ? t(i.pn.ADD_PAYMENT_STEPS)
              : t(i.pn.REVIEW);
    }, [p, u, t, a, C, c, n]),
    p)
        ? (0, l.jsx)(M.A, {})
        : u
          ? (0, l.jsx)(P.oO, {})
          : null != h
            ? (0, l.jsx)(j, {})
            : null;
}
let F = { key: null, renderStep: (e) => (0, l.jsx)(k, { ...e }), options: { modalSizeGetter: () => "md" } },
    b = { key: null, renderStep: (e) => (0, l.jsx)(a.I, { ...e }) };
i.pn.ADD_PAYMENT_STEPS;
let w = { key: i.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(o.A, {}) },
    D = { key: i.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(s.A, {}), options: { renderHeader: !0 } },
    H = { key: i.pn.CONFIRM, renderStep: (e) => (0, l.jsx)(O, { ...e }) },
    G = [w, D];
