n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    l = n(572009),
    a = n(788868);
let s = "OverridePremiumTypeStore",
    o = { premiumTypeOverride: a.$I, premiumTypeActual: a.$I, createdAtOverride: a.lk };
function d(e) {
    let { user: t } = e;
    o.premiumTypeActual = (0, l.nq)(t.premium_type);
}
class u extends i.Ay.PersistedStore {
    static displayName = s;
    static persistKey = s;
    static migrations = [
        (e) => {
            if (e?.createdAtOverride == null) return { ...e, createdAtOverride: a.lk };
        },
    ];
    initialize(e) {
        if (null != e) {
            (o.premiumTypeActual = e?.premiumTypeActual),
                (o.premiumTypeOverride = e?.premiumTypeOverride),
                null != e.createdAtOverride
                    ? (o.createdAtOverride = new Date(e.createdAtOverride))
                    : (o.createdAtOverride = a.lk);
            return;
        }
        (o.premiumTypeOverride = a.$I), (o.createdAtOverride = a.lk);
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
let c = new u(r.h, {
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
