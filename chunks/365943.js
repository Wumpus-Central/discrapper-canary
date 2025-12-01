n.d(t, { t: () => m });
var a = n(544891),
    l = n(570140),
    i = n(479531),
    r = n(411700),
    s = n(706454),
    o = n(594174),
    c = n(25251),
    d = n(981631);
let u = (e) => {
        var { sku_id: t } = e;
        return (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (a = a.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    a.forEach(function (t) {
                        var a;
                        (a = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: a,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = a);
                    });
            }
            return e;
        })(
            { skuId: t },
            (function (e, t) {
                if (null == e) return {};
                var n,
                    a,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            a,
                            l = {},
                            i = Object.keys(e);
                        for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < i.length; a++)
                        (n = i[a]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                }
                return l;
            })(e, ["sku_id"]),
        );
    },
    m = async function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!c.Z.isFetchingAll && (e || c.Z.canFetchAll())) {
            l.Z.dispatch({ type: "PROFILE_EFFECTS_FETCH_ALL" });
            try {
                var t, n, m;
                let e = { locale: s.default.locale };
                (null == (t = o.default.getCurrentUser()) ? void 0 : t.isStaff()) && (e.with_unpublished = !0);
                let { body: i } = await a.tn.get({
                    url: d.ANM.USER_PROFILE_EFFECTS,
                    rejectWithError: !0,
                    query: e,
                });
                l.Z.dispatch({
                    type: "PROFILE_EFFECTS_FETCH_ALL_SUCCESS",
                    configs:
                        null != (m = null == i || null == (n = i.profile_effect_configs) ? void 0 : n.map(u)) ? m : [],
                });
            } catch (t) {
                let e = new i.Z(t);
                (0, r.G)(e),
                    l.Z.dispatch({
                        type: "PROFILE_EFFECTS_FETCH_ALL_FAILURE",
                        apiError: e,
                    });
            }
        }
    };
