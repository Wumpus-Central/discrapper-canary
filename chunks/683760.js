"use strict";
n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366),
    a = n(572009),
    s = n(202541);
let l = "OverridePremiumTypeStore",
    o = { premiumTypeOverride: s.$I, premiumTypeActual: s.$I, createdAtOverride: s.lk };
function d(e) {
    let { user: t, type: n } = e;
    if ("CURRENT_USER_UPDATE" === n && void 0 === t.premium_type) return !1;
    o.premiumTypeActual = (0, a.nq)(t.premium_type);
}
class c extends i.Ay.PersistedStore {
    static displayName = l;
    static persistKey = l;
    static migrations = [
        (e) => {
            if (e?.createdAtOverride == null) return { ...e, createdAtOverride: s.lk };
        },
    ];
    initialize(e) {
        if (null != e) {
            (o.premiumTypeActual = e?.premiumTypeActual),
                (o.premiumTypeOverride = e?.premiumTypeOverride),
                null != e.createdAtOverride
                    ? (o.createdAtOverride = new Date(e.createdAtOverride))
                    : (o.createdAtOverride = s.lk);
            return;
        }
        (o.premiumTypeOverride = s.$I), (o.createdAtOverride = s.lk);
    }
    getPremiumTypeOverride() {
        return o.premiumTypeOverride;
    }
    getPremiumTypeActual() {
        return o.premiumTypeActual;
    }
    getCreatedAtOverride() {
        return o.createdAtOverride;
    }
    getState() {
        return o;
    }
    get premiumType() {
        return o.premiumTypeOverride;
    }
}
let u = new c(r.h, {
    SET_PREMIUM_TYPE_OVERRIDE: function (e) {
        let { premiumType: t } = e;
        o.premiumTypeOverride = t;
    },
    SET_CREATED_AT_OVERRIDE: function (e) {
        let { createdAt: t } = e;
        o.createdAtOverride = t;
    },
    CURRENT_USER_UPDATE: d,
    CONNECTION_OPEN: d,
});
