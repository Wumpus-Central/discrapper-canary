n.d(t, { t: () => h });
var r = n(544891),
    i = n(570140),
    a = n(479531),
    o = n(411700),
    s = n(706454),
    l = n(594174),
    c = n(25251),
    u = n(981631);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let m = (e) => {
        var { sku_id: t } = e;
        return f({ skuId: t }, p(e, ["sku_id"]));
    },
    h = async function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!c.Z.isFetchingAll && (e || c.Z.canFetchAll())) {
            i.Z.dispatch({ type: "PROFILE_EFFECTS_FETCH_ALL" });
            try {
                var t, n, d;
                let e = { locale: s.default.locale };
                (null == (t = l.default.getCurrentUser()) ? void 0 : t.isStaff()) && (e.with_unpublished = !0);
                let { body: a } = await r.tn.get({
                    url: u.ANM.USER_PROFILE_EFFECTS,
                    rejectWithError: !0,
                    query: e,
                });
                i.Z.dispatch({
                    type: "PROFILE_EFFECTS_FETCH_ALL_SUCCESS",
                    configs:
                        null != (d = null == a || null == (n = a.profile_effect_configs) ? void 0 : n.map(m)) ? d : [],
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
