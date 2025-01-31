n.d(t, { Z: () => h });
var i,
    r = n(442837),
    a = n(570140),
    s = n(168232),
    o = n(474936);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = 'OverridePremiumTypeStore',
    c = {
        premiumTypeOverride: o.F_,
        premiumTypeActual: o.F_,
        createdAtOverride: o.Zh
    };
function d(e) {
    let { premiumType: t } = e;
    c.premiumTypeOverride = t;
}
function f(e) {
    let { createdAt: t } = e;
    c.createdAtOverride = t;
}
function _(e) {
    let { user: t } = e;
    c.premiumTypeActual = (0, s.G)(t.premium_type);
}
class p extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            (c.premiumTypeActual = null == e ? void 0 : e.premiumTypeActual), (c.premiumTypeOverride = null == e ? void 0 : e.premiumTypeOverride), null != e.createdAtOverride ? (c.createdAtOverride = new Date(e.createdAtOverride)) : (c.createdAtOverride = o.Zh);
            return;
        }
        (c.premiumTypeOverride = o.F_), (c.createdAtOverride = o.Zh);
    }
    getPremiumTypeOverride() {
        return c.premiumTypeOverride;
    }
    getPremiumTypeActual() {
        return c.premiumTypeActual;
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
l(p, 'displayName', u),
    l(p, 'persistKey', u),
    l(p, 'migrations', [
        (e) => {
            if ((null == e ? void 0 : e.createdAtOverride) == null)
                return {
                    ...e,
                    createdAtOverride: o.Zh
                };
        }
    ]);
let h = new p(a.Z, {
    SET_PREMIUM_TYPE_OVERRIDE: d,
    SET_CREATED_AT_OVERRIDE: f,
    CURRENT_USER_UPDATE: _,
    CONNECTION_OPEN: _
});
