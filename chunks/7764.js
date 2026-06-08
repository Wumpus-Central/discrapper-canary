n.d(t, { kO: () => F, zX: () => H, r3: () => D, hh: () => G });
var l = n(627968),
    r = n(64700);
n(295405);
var i = n(166532),
    s = n(314671);
n(735305);
var a = n(343834),
    o = n(926795),
    u = n(284009),
    c = n.n(u),
    d = n(821609),
    C = n(534514),
    p = n(834730),
    _ = n(31823),
    m = n(427675),
    T = n(571878),
    E = n(937008),
    I = n(921925),
    A = n(482132),
    O = n(375708),
    S = n(989553);
function h(e) {
    let { handleClose: t } = e,
        n = (0, T.t4)((e) => e.selectedSkuId),
        { application: r } = (0, _.V)(),
        i = (0, m.gU)(),
        { isGift: s, giftRecipient: a } = (0, E.Pv)();
    c()(null != n, "Expected selectedSkuId"), c()(null != r, "Expected application");
    let o = i[n];
    c()(null != o, "Expected sku");
    let u = s
        ? O.intl.formatToPlainString(O.t["2VjPTw"], {
              itemName: o.name,
              giftRecipient: a?.username ?? "your recipient",
          })
        : O.intl.formatToPlainString(O.t.wK0IbP, { applicationName: r.name, itemName: o.name });
    return (0, l.jsxs)(A.dZ, {
        children: [
            (0, l.jsx)(I.A, {}),
            (0, l.jsxs)("div", {
                className: S.EL,
                children: [
                    (0, l.jsx)(C.D, { variant: "heading-xxl/bold", className: S.RS, children: "Success!" }),
                    (0, l.jsx)(p.E, { variant: "text-md/normal", children: u }),
                    (0, l.jsx)("div", { className: S.yF }),
                    (0, l.jsx)(d.$, { onClick: t, text: O.intl.string(O.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
n(862241);
var g = n(702841),
    N = n(86379),
    f = n(545075),
    x = n(426398),
    P = n(590180),
    R = n(20742),
    v = n(430993),
    L = n(579151),
    U = n(599062);
function j() {
    let { refreshCategories: e } = (0, L.A)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(R.rQ, { title: O.intl.string(O.t["p8+qtU"]) }),
            (0, l.jsx)(v.c, { children: (0, l.jsx)(U.h, { onRetry: e, errorOrigin: U.A.GIFT_MODAL }) }),
        ],
    });
}
var y = n(534479),
    M = n(652215);
function k(e) {
    let { handleStepChange: t } = e,
        n = (0, T.t4)((e) => e.selectedSkuId),
        { paymentSources: s, hasFetchedPaymentSources: a } = (0, x.jm)(),
        { application: o } = (0, _.V)(),
        u = (0, N.Hp)(),
        c = (0, m.gU)(),
        d = (0, m.Hu)(),
        { isGift: C } = (0, E.Pv)(),
        [p, I] = r.useState(!0),
        [A, O] = (0, g.yK)([P.A], () => [P.A.isFetchingCategories, P.A.error]);
    return (r.useEffect(() => {
        let e = null != o;
        d && a && e && I(A);
    }, [d, a, o, A]),
    r.useEffect(() => {
        if (p || u || null == n) return;
        let e = c[n];
        C &&
        (e?.productLine === M.EZt.COLLECTIBLES ||
            e?.productLine === M.EZt.APPLICATION ||
            e?.productLine === M.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(i.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(s).length
              ? t(i.pn.ADD_PAYMENT_STEPS)
              : t(i.pn.REVIEW);
    }, [p, u, t, s, C, c, n]),
    p)
        ? (0, l.jsx)(y.A, {})
        : u
          ? (0, l.jsx)(f.oO, {})
          : null != O
            ? (0, l.jsx)(j, {})
            : null;
}
let F = { key: null, renderStep: (e) => (0, l.jsx)(k, { ...e }), options: { modalSizeGetter: () => "md" } },
    D = { key: null, renderStep: (e) => (0, l.jsx)(s.I, { ...e }) };
i.pn.ADD_PAYMENT_STEPS;
let b = { key: i.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(o.A, {}) },
    w = { key: i.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(a.A, {}), options: { renderHeader: !0 } };
i.pn.REVIEW;
let H = { key: i.pn.CONFIRM, renderStep: (e) => (0, l.jsx)(h, { ...e }) },
    G = [b, w];
