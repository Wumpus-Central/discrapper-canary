n.d(t, {
    s: () => u,
    v: () => d,
});
var r = n(544891),
    i = n(570140),
    o = n(973616),
    a = n(543696),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
async function u(e) {
    try {
        let t = await r.tn.post({
                url: s.ANM.PLATFORM_APPLICATION,
                body: { sku: e },
                rejectWithError: !1,
            }),
            n = 200 === t.status ? t.body.application : null;
        i.Z.dispatch({
            type: "ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS",
            universeId: e,
            application: null != n ? o.ZP.createFromServer(n) : null,
        });
    } catch (t) {
        i.Z.dispatch({
            type: "ROBLOX_SUBGAME_APPLICATION_FETCH_FAILURE",
            universeId: e,
            error: t,
        });
    }
}
async function d(e) {
    let t = e,
        n = (e) => {
            let t = a.Z.getSupplementalData(e);
            return null == t || null == t.rootPlaceId;
        };
    t = e.filter(n);
    let o = e.filter((e) => !n(e)),
        l = {};
    return (o.forEach((e) => {
        let t = a.Z.getSupplementalData(e);
        null != t && (l[e] = t);
    }),
    0 === t.length)
        ? l
        : await r.tn
              .get({
                  url: s.ANM.ROBLOX_APPLICATIONS_SUPPLEMENTAL_DATA,
                  query: { skus: t },
                  rejectWithError: !1,
              })
              .then((e) => {
                  if (200 !== e.status) return {};
                  let t = e.body,
                      n = c({}, l);
                  return (
                      Object.keys(t).forEach((e) => {
                          n[e] = { rootPlaceId: t[e].root_place_id };
                      }),
                      Object.keys(n).length > 0 &&
                          i.Z.dispatch({
                              type: "ROBLOX_SUBGAME_SUPPLEMENTAL_DATA_FETCH_SUCCESS",
                              data: n,
                          }),
                      n
                  );
              });
}
