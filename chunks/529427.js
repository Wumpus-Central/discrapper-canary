n.d(t, { vd: () => i.v, Mw: () => _, UnifiedCheckoutFlowManagerSingletons: () => A, XZ: () => l.X, CL: () => l.C });
var l = n(75304),
    r = n(673227),
    i = n(71804);
n(584160);
var a = n(627968),
    s = n(64700),
    o = n(166532),
    u = n(482132),
    c = n(981036),
    d = n(426398),
    C = n(375708),
    p = n(367644);
let _ = (e) => {
        let {
                paymentModalStepProps: { handleStepChange: t },
                layout: n,
                renderStepBody: r,
                renderLeftColumn: i,
                renderRightColumn: _,
                primaryCTAButtonProps: m,
                onBackClick: E,
            } = e,
            { hasPaymentSources: T } = (0, d.jm)(),
            I = T ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS,
            S = s.useCallback(() => t(I), [t, I]),
            O = s.useMemo(
                () => (n === l.X.CUSTOM_STEP_BODY ? r() : (0, a.jsxs)("div", { className: p.D, children: [i(), _()] })),
                [n, r, i, _],
            ),
            h = s.useMemo(() => ({ ...m, onClick: S, text: C.intl.string(C.t.XiOHRX) }), [m, S]);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(u.dZ, { children: O }),
                (0, a.jsx)(u.UX, { children: (0, a.jsx)(c.cy, { onBackClick: E, primaryCTAButtonProps: h }) }),
            ],
        });
    },
    m = null,
    E = null,
    T = null,
    I = null,
    S = null,
    O = null,
    h = null,
    A = {
        [l.C.ORB_CHECKOUT]: {
            get: function () {
                return null == m && (m = new r.o({ checkoutFlow: l.C.ORB_CHECKOUT })), m;
            },
        },
        [l.C.COLLECTIBLES_CHECKOUT]: {
            get: function () {
                return null == E && (E = new r.o({ checkoutFlow: l.C.COLLECTIBLES_CHECKOUT })), E;
            },
        },
        [l.C.SLAYER_STOREFRONT_CHECKOUT]: {
            get: function () {
                return null == T && (T = new r.o({ checkoutFlow: l.C.SLAYER_STOREFRONT_CHECKOUT })), T;
            },
        },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            get: function () {
                return null == I && (I = new r.o({ checkoutFlow: l.C.PREMIUM_APPS_OTP_CHECKOUT })), I;
            },
        },
        [l.C.GUILD_PRODUCT_CHECKOUT]: {
            get: function () {
                return null == S && (S = new r.o({ checkoutFlow: l.C.GUILD_PRODUCT_CHECKOUT })), S;
            },
        },
        [l.C.GUILD_ROLE_CHECKOUT]: {
            get: function () {
                return null == O && (O = new r.o({ checkoutFlow: l.C.GUILD_ROLE_CHECKOUT })), O;
            },
        },
        [l.C.PREMIUM_CHECKOUT]: {
            get: function () {
                return null == h && (h = new r.o({ checkoutFlow: l.C.PREMIUM_CHECKOUT })), h;
            },
        },
    };
