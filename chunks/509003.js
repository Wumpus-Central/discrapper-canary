n.d(t, {
    FT: () => m,
    Jc: () => h,
    LK: () => p,
    bP: () => E,
    le: () => g,
    sD: () => f,
    x3: () => d,
}),
    n(49124),
    n(392711),
    n(782568),
    n(594190);
var r = n(355281);
n(210817);
var i = n(817788),
    a = n(981631),
    o = n(388032);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e) {
    if (e.distributor === a.GQo.ROBLOX && null != e.sku) {
        var t, n;
        return ""
            .concat(e.sku, ":")
            .concat(null != (n = null == (t = e.gameMetadata) ? void 0 : t[i.wF.PLACE_ID]) ? n : "");
    }
    return null;
}
function f(e) {
    return e.distributor === a.GQo.ROBLOX && null != e.gameMetadata && null != e.gameMetadata[i.wF.PLACE_ID]
        ? JSON.stringify({ placeId: e.gameMetadata[i.wF.PLACE_ID] })
        : null;
}
function p(e) {
    return e.distributor !== a.GQo.ROBLOX ||
        null == e.gameMetadata ||
        null == e.gameMetadata[i.wF.ROBLOX_TIME_STARTED] ||
        e.id === i.eB ||
        null == e.gameName
        ? {}
        : {
              name: e.gameName,
              sync_id: e.gameMetadata[i.wF.ROBLOX_TIME_STARTED],
          };
}
function _(e) {
    var t;
    return (null == (t = e.metadata) ? void 0 : t.distributor) === a.GQo.ROBLOX && e.application_id !== i.eB;
}
function m(e) {
    if (!_(e)) return e;
    let t = r.m.getConfig({ location: "transformRobloxSubgameNames" }).alternativeTitle ? o.t.HjVwG3 : o.t.G6BGdx;
    return u(l({}, e), { name: o.intl.formatToPlainString(t, { subgameName: e.name }) });
}
function h(e) {
    if (e.type !== a.IIU.PLAYING || !_(e)) return e;
    let t = Number(e.sync_id),
        n = l({}, e);
    return (n.application_id = i.eB), (n.name = a.EOG[a.GQo.ROBLOX]), isNaN(t) || (n.timestamps = { start: t }), n;
}
function g(e) {
    return e.distributor === a.GQo.ROBLOX && e.id !== i.eB;
}
function E(e) {
    return e.thirdPartySkus.some((e) => e.distributor === a.GQo.ROBLOX);
}
