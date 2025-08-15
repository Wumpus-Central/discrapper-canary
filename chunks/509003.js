n.d(t, {
    FT: () => S,
    I8: () => O,
    Jc: () => A,
    LK: () => I,
    ON: () => y,
    bP: () => C,
    le: () => N,
    oK: () => w,
    sD: () => v,
    x3: () => E,
    xr: () => R,
    yA: () => b,
    yb: () => P,
}),
    n(49124),
    n(415506);
var r = n(392711),
    i = n.n(r),
    o = n(782568),
    a = n(594190),
    s = n(104755),
    l = n(355281),
    c = n(210817),
    u = n(817788),
    d = n(543696),
    f = n(981631),
    _ = n(388032);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    if (e.distributor === f.GQo.ROBLOX && null != e.sku) {
        var t, n;
        return ""
            .concat(e.sku, ":")
            .concat(null != (n = null == (t = e.gameMetadata) ? void 0 : t[u.wF.PLACE_ID]) ? n : "");
    }
    return null;
}
function b(e, t) {
    return (null == e && null != t) || (null != e && null == t) || (null != e && null != t && !i().isEqual(e, t));
}
function y(e, t) {
    var n, r, i;
    let o = h({}, e),
        s = t.subgameInfo,
        l = t.application,
        c = Number(null == (n = e.gameMetadata) ? void 0 : n[u.wF.ROBLOX_TIME_STARTED]);
    if (((isNaN(c) || 0 === c) && (c = null != (r = e.start) ? r : Date.now()), null == s))
        N(e) && ((o.id = u.eB), (o.name = f.EOG[f.GQo.ROBLOX])),
            (o.gameMetadata = void 0),
            (o.sku = void 0),
            (o.start = c),
            (o.lastFocused = Math.floor(c / 1000));
    else {
        let t = {};
        null != l &&
        (0, a.ik)({
            exePath: e.exePath,
            name: l.name,
            id: l.id,
            distributor: f.GQo.ROBLOX,
        }) &&
        (0, a.ik)({
            exePath: e.exePath,
            name: f.EOG[f.GQo.ROBLOX],
            id: u.eB,
            distributor: f.GQo.ROBLOX,
        })
            ? ((o.id = l.id),
              (o.name = l.name),
              (o.gameName = l.name),
              (o.start = Date.now()),
              (o.lastFocused = Math.floor(Date.now() / 1000)))
            : ((o.id = u.eB), (o.name = f.EOG[f.GQo.ROBLOX]), (o.start = c)),
            (t[u.wF.ROBLOX_TIME_STARTED] = c.toString()),
            (o.sku = null != (i = s.universeId) ? i : void 0),
            null != s.placeId && (t[u.wF.PLACE_ID] = s.placeId),
            null != s.jobId && (t[u.wF.JOB_ID] = s.jobId),
            null != s.robloxUserId && (t[u.wF.ROBLOX_USER_ID] = s.robloxUserId),
            (o.gameMetadata = Object.keys(t).length > 0 ? t : void 0);
    }
    return o;
}
function O(e) {
    return null == e[u.SQ.UNIVERSE_ID] || null == e[u.SQ.PLACE_ID] || null == e[u.SQ.JOB_ID] || null == e[u.SQ.USER_ID]
        ? null
        : {
              universeId: e[u.SQ.UNIVERSE_ID],
              placeId: e[u.SQ.PLACE_ID],
              jobId: e[u.SQ.JOB_ID],
              robloxUserId: e[u.SQ.USER_ID],
          };
}
function v(e) {
    return e.distributor === f.GQo.ROBLOX && null != e.gameMetadata && null != e.gameMetadata[u.wF.PLACE_ID]
        ? JSON.stringify({ placeId: e.gameMetadata[u.wF.PLACE_ID] })
        : null;
}
function I(e) {
    return e.distributor !== f.GQo.ROBLOX ||
        null == e.gameMetadata ||
        null == e.gameMetadata[u.wF.ROBLOX_TIME_STARTED] ||
        e.id === u.eB ||
        null == e.gameName
        ? {}
        : {
              name: e.gameName,
              sync_id: e.gameMetadata[u.wF.ROBLOX_TIME_STARTED],
          };
}
function T(e) {
    var t;
    return (null == (t = e.metadata) ? void 0 : t.distributor) === f.GQo.ROBLOX && e.application_id !== u.eB;
}
function S(e) {
    if (!T(e)) return e;
    let t = l.m.getConfig({ location: "transformRobloxSubgameNames" }).alternativeTitle ? _.t.HjVwGx : _.t.G6BGd3;
    return g(h({}, e), { name: _.intl.formatToPlainString(t, { subgameName: e.name }) });
}
function A(e) {
    if (e.type !== f.IIU.PLAYING || !T(e)) return e;
    let t = Number(e.sync_id),
        n = h({}, e);
    return (n.application_id = u.eB), (n.name = f.EOG[f.GQo.ROBLOX]), isNaN(t) || (n.timestamps = { start: t }), n;
}
function N(e) {
    return e.distributor === f.GQo.ROBLOX && e.id !== u.eB;
}
function C(e) {
    return e.thirdPartySkus.some((e) => e.distributor === f.GQo.ROBLOX);
}
async function R(e) {
    var t;
    let n = null == (t = d.Z.getSupplementalData(e)) ? void 0 : t.rootPlaceId;
    if (null != n) return await P(n);
    try {
        let t = await (0, s.v)([e]);
        if (null != t[e] && null != t[e].rootPlaceId) return await P(t[e].rootPlaceId);
    } catch (e) {
        return Promise.reject(e);
    }
    return Promise.reject(Error("Failed to find root place id for activity"));
}
async function P(e) {
    let t = await c.Z.getRobloxSubgameURL(e);
    return await (0, o.Z)(t);
}
function w(e) {
    return e.distributor !== f.GQo.ROBLOX || e.id === u.eB
        ? e
        : g(h({}, e), {
              id: u.eB,
              name: f.EOG[f.GQo.ROBLOX],
          });
}
