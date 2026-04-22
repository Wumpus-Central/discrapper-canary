"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153),
    s = n(572009),
    a = n(788868);
let o = "OverridePremiumTypeStore",
    l = { premiumTypeOverride: a.$I, premiumTypeActual: a.$I, createdAtOverride: a.lk };
function u(e) {
    let { user: t } = e;
    l.premiumTypeActual = (0, s.nq)(t.premium_type);
}
class d extends r.Ay.PersistedStore {
    static displayName = o;
    static persistKey = o;
    static migrations = [
        (e) => {
            if (e?.createdAtOverride == null) return { ...e, createdAtOverride: a.lk };
        },
    ];
    initialize(e) {
        if (null != e) {
            (l.premiumTypeActual = e?.premiumTypeActual),
                (l.premiumTypeOverride = e?.premiumTypeOverride),
                null != e.createdAtOverride
                    ? (l.createdAtOverride = new Date(e.createdAtOverride))
                    : (l.createdAtOverride = a.lk);
            return;
        }
        (l.premiumTypeOverride = a.$I), (l.createdAtOverride = a.lk);
    }
    getPremiumTypeOverride() {
        return l.premiumTypeOverride;
    }
    getPremiumTypeActual() {
        return l.premiumTypeActual;
    }
    getCreatedAtOverride() {
        return l.createdAtOverride;
    }
    getState() {
        return l;
    }
    get premiumType() {
        return l.premiumTypeOverride;
    }
}
let c = new d(i.h, {
    SET_PREMIUM_TYPE_OVERRIDE: function (e) {
        let { premiumType: t } = e;
        l.premiumTypeOverride = t;
    },
    SET_CREATED_AT_OVERRIDE: function (e) {
        let { createdAt: t } = e;
        l.createdAtOverride = t;
    },
    CURRENT_USER_UPDATE: u,
    CONNECTION_OPEN: u,
});
