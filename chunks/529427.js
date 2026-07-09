n.d(t, { vd: () => r.v, Mw: () => C, UnifiedCheckoutFlowManagerSingletons: () => I, XZ: () => l.X, CL: () => l.C });
var l = n(75304),
    i = n(675219),
    r = n(71804);
n(584160);
var a = n(627968),
    s = n(64700),
    o = n(166532),
    u = n(482132),
    c = n(981036),
    d = n(426398),
    p = n(375708),
    m = n(661724);
function C(e) {
    let {
            paymentModalStepProps: { handleStepChange: t },
            layout: n,
            renderStepBody: i,
            renderLeftColumn: r,
            renderRightColumn: C,
            renderBottomContent: h,
            primaryCTAButtonProps: E,
            onBackClick: A,
        } = e,
        { hasPaymentSources: f } = (0, d.jm)(),
        y = f ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS,
        S = s.useCallback(() => t(y), [t, y]),
        P = s.useMemo(
            () =>
                n === l.X.CUSTOM_STEP_BODY
                    ? i()
                    : (0, a.jsxs)(a.Fragment, {
                          children: [(0, a.jsxs)("div", { className: m.D, children: [r(), C()] }), null != h && h()],
                      }),
            [n, i, r, C, h],
        ),
        T = s.useMemo(() => ({ ...E, onClick: S, text: p.intl.string(p.t.XiOHRX) }), [E, S]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(u.dZ, { children: P }),
            (0, a.jsx)(u.UX, { children: (0, a.jsx)(c.cy, { onBackClick: A, primaryCTAButtonProps: T }) }),
        ],
    });
}
let h = null,
    E = null,
    A = null,
    f = null,
    y = null,
    S = null,
    P = null,
    T = null,
    I = {
        [l.C.ORB_CHECKOUT]: {
            get: function () {
                return null == h && (h = new i.od({ checkoutFlow: l.C.ORB_CHECKOUT })), h;
            },
        },
        [l.C.COLLECTIBLES_CHECKOUT]: {
            get: function () {
                return null == E && (E = new i.od({ checkoutFlow: l.C.COLLECTIBLES_CHECKOUT })), E;
            },
        },
        [l.C.SLAYER_STOREFRONT_CHECKOUT]: {
            get: function () {
                return null == A && (A = new i.od({ checkoutFlow: l.C.SLAYER_STOREFRONT_CHECKOUT })), A;
            },
        },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            get: function () {
                return null == f && (f = new i.od({ checkoutFlow: l.C.PREMIUM_APPS_OTP_CHECKOUT })), f;
            },
        },
        [l.C.GUILD_PRODUCT_CHECKOUT]: {
            get: function () {
                return null == y && (y = new i.od({ checkoutFlow: l.C.GUILD_PRODUCT_CHECKOUT })), y;
            },
        },
        [l.C.GUILD_ROLE_CHECKOUT]: {
            get: function () {
                return null == S && (S = new i.od({ checkoutFlow: l.C.GUILD_ROLE_CHECKOUT })), S;
            },
        },
        [l.C.GUILD_BOOST_CHECKOUT]: {
            get: function () {
                return null == P && (P = new i.od({ checkoutFlow: l.C.GUILD_BOOST_CHECKOUT })), P;
            },
        },
        [l.C.PREMIUM_CHECKOUT]: {
            get: function () {
                return null == T && (T = new i.od({ checkoutFlow: l.C.PREMIUM_CHECKOUT })), T;
            },
        },
    };
