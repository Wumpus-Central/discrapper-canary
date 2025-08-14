n.d(t, {
    I8: () => y,
    Jc: () => I,
    LK: () => v,
    ON: () => b,
    bP: () => S,
    le: () => T,
    oK: () => C,
    sD: () => O,
    x3: () => g,
    xr: () => A,
    yA: () => E,
    yb: () => N,
}),
    n(49124),
    n(415506);
var r = n(392711),
    i = n.n(r),
    o = n(782568),
    a = n(594190),
    s = n(104755),
    l = n(210817),
    c = n(817788),
    u = n(543696),
    d = n(981631),
    f = n(388032);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    if (e.distributor === d.GQo.ROBLOX && null != e.sku) {
        var t, n;
        return ""
            .concat(e.sku, ":")
            .concat(null != (n = null == (t = e.gameMetadata) ? void 0 : t[c.wF.PLACE_ID]) ? n : "");
    }
    return null;
}
function E(e, t) {
    return (null == e && null != t) || (null != e && null == t) || (null != e && null != t && !i().isEqual(e, t));
}
function b(e, t) {
    var n, r, i;
    let o = p({}, e),
        s = t.subgameInfo,
        l = t.application,
        u = Number(null == (n = e.gameMetadata) ? void 0 : n[c.wF.ROBLOX_TIME_STARTED]);
    if (((isNaN(u) || 0 === u) && (u = null != (r = e.start) ? r : Date.now()), null == s))
        T(e) && ((o.id = c.eB), (o.name = d.EOG[d.GQo.ROBLOX])),
            (o.gameMetadata = void 0),
            (o.sku = void 0),
            (o.start = u),
            (o.lastFocused = Math.floor(u / 1000));
    else {
        let t = {};
        null != l &&
        (0, a.ik)({
            exePath: e.exePath,
            name: l.name,
            id: l.id,
            distributor: d.GQo.ROBLOX,
        }) &&
        (0, a.ik)({
            exePath: e.exePath,
            name: d.EOG[d.GQo.ROBLOX],
            id: c.eB,
            distributor: d.GQo.ROBLOX,
        })
            ? ((o.id = l.id),
              (o.name = l.name),
              (o.gameName = l.name),
              (o.start = Date.now()),
              (o.lastFocused = Math.floor(Date.now() / 1000)))
            : ((o.id = c.eB), (o.name = d.EOG[d.GQo.ROBLOX]), (o.start = u)),
            (t[c.wF.ROBLOX_TIME_STARTED] = u.toString()),
            (o.sku = null != (i = s.universeId) ? i : void 0),
            null != s.placeId && (t[c.wF.PLACE_ID] = s.placeId),
            null != s.jobId && (t[c.wF.JOB_ID] = s.jobId),
            null != s.robloxUserId && (t[c.wF.ROBLOX_USER_ID] = s.robloxUserId),
            (o.gameMetadata = Object.keys(t).length > 0 ? t : void 0);
    }
    return o;
}
function y(e) {
    return null == e[c.SQ.UNIVERSE_ID] || null == e[c.SQ.PLACE_ID] || null == e[c.SQ.JOB_ID] || null == e[c.SQ.USER_ID]
        ? null
        : {
              universeId: e[c.SQ.UNIVERSE_ID],
              placeId: e[c.SQ.PLACE_ID],
              jobId: e[c.SQ.JOB_ID],
              robloxUserId: e[c.SQ.USER_ID],
          };
}
function O(e) {
    return e.distributor === d.GQo.ROBLOX && null != e.gameMetadata && null != e.gameMetadata[c.wF.PLACE_ID]
        ? JSON.stringify({ placeId: e.gameMetadata[c.wF.PLACE_ID] })
        : null;
}
function v(e) {
    return e.distributor !== d.GQo.ROBLOX ||
        null == e.gameMetadata ||
        null == e.gameMetadata[c.wF.ROBLOX_TIME_STARTED] ||
        e.id === c.eB ||
        null == e.gameName
        ? {}
        : {
              name: f.intl.formatToPlainString(f.t.G6BGd3, { subgameName: e.gameName }),
              sync_id: e.gameMetadata[c.wF.ROBLOX_TIME_STARTED],
          };
}
function I(e) {
    var t;
    if (
        e.type !== d.IIU.PLAYING ||
        (null == (t = e.metadata) ? void 0 : t.distributor) !== d.GQo.ROBLOX ||
        e.application_id === c.eB
    )
        return e;
    let n = Number(e.sync_id),
        r = p({}, e);
    return (r.application_id = c.eB), (r.name = d.EOG[d.GQo.ROBLOX]), isNaN(n) || (r.timestamps = { start: n }), r;
}
function T(e) {
    return e.distributor === d.GQo.ROBLOX && e.id !== c.eB;
}
function S(e) {
    return e.thirdPartySkus.some((e) => e.distributor === d.GQo.ROBLOX);
}
async function A(e) {
    var t;
    let n = null == (t = u.Z.getSupplementalData(e)) ? void 0 : t.rootPlaceId;
    if (null != n) return await N(n);
    try {
        let t = await (0, s.v)([e]);
        if (null != t[e] && null != t[e].rootPlaceId) return await N(t[e].rootPlaceId);
    } catch (e) {
        return Promise.reject(e);
    }
    return Promise.reject(Error("Failed to find root place id for activity"));
}
async function N(e) {
    let t = await l.Z.getRobloxSubgameURL(e);
    return await (0, o.Z)(t);
}
function C(e) {
    return e.distributor !== d.GQo.ROBLOX || e.id === c.eB
        ? e
        : m(p({}, e), {
              id: c.eB,
              name: d.EOG[d.GQo.ROBLOX],
          });
}
