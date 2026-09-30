u.d(n, { UnifiedCheckoutFlowManagerSingletons: () => R });
var l = u(75304),
    e = u(675219);
let t = null,
    o = null,
    E = null,
    O = null,
    _ = null,
    c = null,
    U = null,
    T = null,
    r = null,
    R = {
        [l.C.ORB_CHECKOUT]: {
            get: function () {
                return (null == t && (t = new e.od({ checkoutFlow: l.C.ORB_CHECKOUT })), t);
            },
        },
        [l.C.COLLECTIBLES_CHECKOUT]: {
            get: function () {
                return (null == o && (o = new e.od({ checkoutFlow: l.C.COLLECTIBLES_CHECKOUT })), o);
            },
        },
        [l.C.SLAYER_STOREFRONT_CHECKOUT]: {
            get: function () {
                return (null == E && (E = new e.od({ checkoutFlow: l.C.SLAYER_STOREFRONT_CHECKOUT })), E);
            },
        },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            get: function () {
                return (null == O && (O = new e.od({ checkoutFlow: l.C.PREMIUM_APPS_OTP_CHECKOUT })), O);
            },
        },
        [l.C.GUILD_PRODUCT_CHECKOUT]: {
            get: function () {
                return (null == _ && (_ = new e.od({ checkoutFlow: l.C.GUILD_PRODUCT_CHECKOUT })), _);
            },
        },
        [l.C.GUILD_ROLE_CHECKOUT]: {
            get: function () {
                return (null == c && (c = new e.od({ checkoutFlow: l.C.GUILD_ROLE_CHECKOUT })), c);
            },
        },
        [l.C.GUILD_BOOST_CHECKOUT]: {
            get: function () {
                return (null == U && (U = new e.od({ checkoutFlow: l.C.GUILD_BOOST_CHECKOUT })), U);
            },
        },
        [l.C.PREMIUM_CHECKOUT]: {
            get: function () {
                return (null == T && (T = new e.od({ checkoutFlow: l.C.PREMIUM_CHECKOUT })), T);
            },
        },
        [l.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT]: {
            get: function () {
                return (null == r && (r = new e.od({ checkoutFlow: l.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT })), r);
            },
        },
    };
