n.d(t, { A: () => c });
var i = n(17928),
    l = n(228366),
    a = n(572009),
    r = n(788868);
let s = "OverridePremiumTypeStore",
    o = { premiumTypeOverride: r.$I, premiumTypeActual: r.$I, createdAtOverride: r.lk };
function d(e) {
    let { user: t } = e;
    o.premiumTypeActual = (0, a.nq)(t.premium_type);
}
class u extends i.Ay.PersistedStore {
    static displayName = s;
    static persistKey = s;
    static migrations = [
        (e) => {
            if (e?.createdAtOverride == null) return { ...e, createdAtOverride: r.lk };
        },
    ];
    initialize(e) {
        if (null != e) {
            (o.premiumTypeActual = e?.premiumTypeActual),
                (o.premiumTypeOverride = e?.premiumTypeOverride),
                null != e.createdAtOverride
                    ? (o.createdAtOverride = new Date(e.createdAtOverride))
                    : (o.createdAtOverride = r.lk);
            return;
        }
        (o.premiumTypeOverride = r.$I), (o.createdAtOverride = r.lk);
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
let c = new u(l.h, {
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
