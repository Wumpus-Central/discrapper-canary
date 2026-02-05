"use strict";
n.d(t, { A: () => f });
var r = n(311907),
    i = n(73153),
    a = n(572009),
    s = n(788868);
let o = "OverridePremiumTypeStore",
    l = { premiumTypeOverride: s.$I, premiumTypeActual: s.$I, createdAtOverride: s.lk };
function u(e) {
    let { premiumType: t } = e;
    l.premiumTypeOverride = t;
}
function c(e) {
    let { createdAt: t } = e;
    l.createdAtOverride = t;
}
function d(e) {
    let { user: t } = e;
    l.premiumTypeActual = (0, a.nq)(t.premium_type);
}
class _ extends r.Ay.PersistedStore {
    static displayName = o;
    static persistKey = o;
    static migrations = [
        (e) => {
            if (e?.createdAtOverride == null) return { ...e, createdAtOverride: s.lk };
        },
    ];
    initialize(e) {
        if (null != e) {
            (l.premiumTypeActual = e?.premiumTypeActual),
                (l.premiumTypeOverride = e?.premiumTypeOverride),
                null != e.createdAtOverride
                    ? (l.createdAtOverride = new Date(e.createdAtOverride))
                    : (l.createdAtOverride = s.lk);
            return;
        }
        (l.premiumTypeOverride = s.$I), (l.createdAtOverride = s.lk);
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
let f = new _(i.h, {
    SET_PREMIUM_TYPE_OVERRIDE: u,
    SET_CREATED_AT_OVERRIDE: c,
    CURRENT_USER_UPDATE: d,
    CONNECTION_OPEN: d,
});
