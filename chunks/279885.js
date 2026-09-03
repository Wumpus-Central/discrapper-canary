n.d(t, { UnifiedCheckoutFlowManagerSingletons: () => C });
var l = n(75304),
    i = n(675219);
let r = null,
    a = null,
    s = null,
    o = null,
    u = null,
    c = null,
    d = null,
    m = null,
    p = null,
    C = {
        [l.C.ORB_CHECKOUT]: {
            get: function () {
                return null == r && (r = new i.od({ checkoutFlow: l.C.ORB_CHECKOUT })), r;
            },
        },
        [l.C.COLLECTIBLES_CHECKOUT]: {
            get: function () {
                return null == a && (a = new i.od({ checkoutFlow: l.C.COLLECTIBLES_CHECKOUT })), a;
            },
        },
        [l.C.SLAYER_STOREFRONT_CHECKOUT]: {
            get: function () {
                return null == s && (s = new i.od({ checkoutFlow: l.C.SLAYER_STOREFRONT_CHECKOUT })), s;
            },
        },
        [l.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            get: function () {
                return null == o && (o = new i.od({ checkoutFlow: l.C.PREMIUM_APPS_OTP_CHECKOUT })), o;
            },
        },
        [l.C.GUILD_PRODUCT_CHECKOUT]: {
            get: function () {
                return null == u && (u = new i.od({ checkoutFlow: l.C.GUILD_PRODUCT_CHECKOUT })), u;
            },
        },
        [l.C.GUILD_ROLE_CHECKOUT]: {
            get: function () {
                return null == c && (c = new i.od({ checkoutFlow: l.C.GUILD_ROLE_CHECKOUT })), c;
            },
        },
        [l.C.GUILD_BOOST_CHECKOUT]: {
            get: function () {
                return null == d && (d = new i.od({ checkoutFlow: l.C.GUILD_BOOST_CHECKOUT })), d;
            },
        },
        [l.C.PREMIUM_CHECKOUT]: {
            get: function () {
                return null == m && (m = new i.od({ checkoutFlow: l.C.PREMIUM_CHECKOUT })), m;
            },
        },
        [l.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT]: {
            get: function () {
                return null == p && (p = new i.od({ checkoutFlow: l.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT })), p;
            },
        },
    };
