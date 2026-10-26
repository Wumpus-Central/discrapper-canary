n.d(t, { A: () => E });
var i = n(17928),
    r = n(73153),
    a = n(572009),
    s = n(280450),
    l = n(349871),
    o = n(202541);
let d = "OverridePremiumTypeStore",
    c = { premiumTypeOverride: o.$I, premiumTypeActual: o.$I, createdAtOverride: o.lk, perksActual: null };
function u(e) {
    let t = (function (e) {
            let { user: t, type: n } = e;
            if ("CURRENT_USER_UPDATE" === n && void 0 === t.premium_type) return !1;
            c.premiumTypeActual = (0, a.nq)(t.premium_type);
        })(e),
        n = (function (e) {
            var t;
            let { user: n, type: i } = e;
            if ("CURRENT_USER_UPDATE" === i && void 0 === n.perks) return !1;
            c.perksActual = null == (t = n.perks) ? null : "activePerksBitmask" in t ? t : (0, l.c$)(t);
        })(e);
    if (!1 === t && !1 === n) return !1;
}
class _ extends i.Ay.PersistedStore {
    static displayName = d;
    static persistKey = d;
    static migrations = [
        (e) => {
            if (e?.createdAtOverride == null) return { ...e, createdAtOverride: o.lk };
        },
    ];
    initialize(e) {
        if ((this.waitFor(s.default), null != e)) {
            ((c.premiumTypeActual = e?.premiumTypeActual),
                (c.premiumTypeOverride = e?.premiumTypeOverride),
                (c.perksActual = e?.perksActual ?? null),
                null != e.createdAtOverride
                    ? (c.createdAtOverride = new Date(e.createdAtOverride))
                    : (c.createdAtOverride = o.lk));
            return;
        }
        ((c.premiumTypeOverride = o.$I), (c.createdAtOverride = o.lk));
    }
    getPremiumTypeOverride() {
        return c.premiumTypeOverride;
    }
    hasPremiumTypeOverride(e) {
        return c.premiumTypeOverride !== o.$I && null != e && e.id === s.default.getId() && (0, a.I9)(e);
    }
    getPremiumTypeActual() {
        return c.premiumTypeActual;
    }
    getPerksActual() {
        return c.perksActual;
    }
    getCreatedAtOverride() {
        return c.createdAtOverride;
    }
    getState() {
        return c;
    }
    get premiumType() {
        return c.premiumTypeOverride;
    }
}
let E = new _(r.h, {
    SET_PREMIUM_TYPE_OVERRIDE: function (e) {
        let { premiumType: t } = e;
        c.premiumTypeOverride = t;
    },
    SET_CREATED_AT_OVERRIDE: function (e) {
        let { createdAt: t } = e;
        c.createdAtOverride = t;
    },
    CURRENT_USER_UPDATE: u,
    CONNECTION_OPEN: u,
});
