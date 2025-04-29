n.d(t, { z: () => m });
var r = n(544891),
    i = n(570140),
    o = n(479531),
    a = n(439170),
    s = n(25251),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let h = (e) => {
        var { sku_id: t } = e,
            n = _(e, ['sku_id']);
        return {
            id: n.id,
            skuId: t,
            config: f(u({}, n), { skuId: t })
        };
    },
    m = async function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!(!e && s.Z.hasFetched()) && !s.Z.isFetching && s.Z.canFetch()) {
            i.Z.dispatch({ type: 'USER_PROFILE_EFFECTS_FETCH' });
            try {
                let { body: e } = await r.tn.get({
                        url: l.ANM.USER_PROFILE_EFFECTS,
                        rejectWithError: !1
                    }),
                    t = (null == e ? void 0 : e.profile_effect_configs).map(h);
                i.Z.dispatch({
                    type: 'USER_PROFILE_EFFECTS_FETCH_SUCCESS',
                    profileEffects: t
                });
            } catch (t) {
                let e = new o.Z(t);
                (0, a.G)(e),
                    i.Z.dispatch({
                        type: 'USER_PROFILE_EFFECTS_FETCH_FAILURE',
                        error: e
                    });
            }
        }
    };
