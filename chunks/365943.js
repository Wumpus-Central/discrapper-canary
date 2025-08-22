n.d(t, { t: () => p });
var r = n(544891),
    i = n(570140),
    a = n(479531),
    o = n(411700),
    s = n(25251),
    l = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let _ = (e) => {
        var { sku_id: t } = e;
        return u({ skuId: t }, d(e, ["sku_id"]));
    },
    p = async function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!s.Z.isFetchingAll && (e || s.Z.canFetchAll())) {
            i.Z.dispatch({ type: "PROFILE_EFFECTS_FETCH_ALL" });
            try {
                var t, n;
                let { body: e } = await r.tn.get({
                    url: l.ANM.USER_PROFILE_EFFECTS,
                    rejectWithError: !0,
                });
                i.Z.dispatch({
                    type: "PROFILE_EFFECTS_FETCH_ALL_SUCCESS",
                    configs:
                        null != (n = null == e || null == (t = e.profile_effect_configs) ? void 0 : t.map(_)) ? n : [],
                });
            } catch (t) {
                let e = new a.Z(t);
                (0, o.G)(e),
                    i.Z.dispatch({
                        type: "PROFILE_EFFECTS_FETCH_ALL_FAILURE",
                        apiError: e,
                    });
            }
        }
    };
