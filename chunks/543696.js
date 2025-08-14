n.d(t, { Z: () => d });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
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
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
let l = {};
function c(e) {
    let { data: t } = e;
    l = s({}, l, t);
}
class u extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t;
        (l = {}),
            Object.keys(null != (t = null == e ? void 0 : e.universeIdToSupplementalData) ? t : {}).forEach((t) => {
                let n = null == e ? void 0 : e.universeIdToSupplementalData[t];
                null != n && null != n.rootPlaceId && (l[t] = { rootPlaceId: n.rootPlaceId });
            });
    }
    getSupplementalData(e) {
        var t;
        return null != (t = l[e]) ? t : null;
    }
    getState() {
        return { universeIdToSupplementalData: l };
    }
}
a(u, "displayName", "RobloxSupplementalDataStore"), a(u, "persistKey", "robloxSupplementalData");
let d = new u(o.Z, { ROBLOX_SUBGAME_SUPPLEMENTAL_DATA_FETCH_SUCCESS: c });
