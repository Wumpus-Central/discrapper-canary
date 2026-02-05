"use strict";
n.d(t, { du: () => _, uR: () => d });
var r = n(492462),
    i = n(960488);
n(728458);
var a = n(192576),
    s = n(935434),
    o = n(652215);
n(788868);
let l = (e) => {
        let { location: t } = e,
            { enabled: n } = s.c.getCurrentConfig({ location: t });
        return n ? { enabled: !1, discountEnabled: !1 } : a.O.getConfig({ location: t });
    },
    u = (e) => {
        let { location: t } = e,
            { enabled: n } = s.c.useExperiment({ location: t }),
            r = a.O.useConfig({ location: t });
        return n ? { enabled: !1, discountEnabled: !1 } : r;
    },
    c = (e, t, n) => !t.startsWith(o.BVt.BILLING_MANAGE_SUBSCRIPTION) && n === o.W6J.APPLE_PAYMENT_LINK && e,
    d = (e) => {
        let { location: t } = e,
            { search: n, pathname: a } = (0, i.zy)(),
            { enabled: s } = u({ location: t }),
            { deep_link_type: o } = (0, r.parse)(n);
        return c(s, a, o);
    },
    _ = function (e) {
        let { location: t } = e,
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = window.location.pathname,
            { deep_link_type: a } = (0, r.parse)(window.location.search);
        if (i.startsWith(o.BVt.BILLING_MANAGE_SUBSCRIPTION)) return !1;
        let { enabled: s } = l({ location: t });
        return c(n || s, i, a);
    };
