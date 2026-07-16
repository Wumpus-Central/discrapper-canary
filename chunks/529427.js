n.d(t, { vd: () => r.v, Mw: () => C, UnifiedCheckoutFlowManagerSingletons: () => _, XZ: () => l.X, CL: () => l.C });
var l = n(75304),
    i = n(675219),
    r = n(71804),
    a = n(627968),
    s = n(64700),
    o = n(166532),
    u = n(482132),
    c = n(981036),
    d = n(426398),
    p = n(375708),
    m = n(367644);
function C(e) {
    let {
            paymentModalStepProps: { handleStepChange: t },
            layout: n,
            renderStepBody: i,
            renderLeftColumn: r,
            renderRightColumn: C,
            renderBottomContent: h,
            primaryCTAButtonProps: E,
            onBackClick: f,
        } = e,
        { hasPaymentSources: A } = (0, d.jm)(),
        y = A ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS,
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
        I = s.useMemo(() => ({ ...E, onClick: S, text: p.intl.string(p.t.XiOHRX) }), [E, S]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(u.dZ, { children: P }),
            (0, a.jsx)(u.UX, { children: (0, a.jsx)(c.cy, { onBackClick: f, primaryCTAButtonProps: I }) }),
        ],
    });
}
let h = null,
    E = null,
    f = null,
    A = null,
    y = null,
    S = null,
    P = null,
    I = null,
    _ = {
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
                return null == f && (f = new i.od({ checkoutFlow: l.C.SLAYER_STOREFRONT_CHECKOUT })), f;
            },
        },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            get: function () {
                return null == A && (A = new i.od({ checkoutFlow: l.C.PREMIUM_APPS_OTP_CHECKOUT })), A;
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
                return null == I && (I = new i.od({ checkoutFlow: l.C.PREMIUM_CHECKOUT })), I;
            },
        },
    };
