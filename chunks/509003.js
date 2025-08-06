n.d(t, {
    I8: () => p,
    Jc: () => g,
    LK: () => m,
    ON: () => _,
    le: () => E,
    sD: () => h,
    x3: () => d,
    yA: () => f,
}),
    n(49124);
var r = n(392711),
    i = n.n(r),
    o = n(594190),
    a = n(817788),
    s = n(981631),
    l = n(388032);
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
function d(e) {
    if (e.distributor === s.GQo.ROBLOX && null != e.sku) {
        var t, n;
        return ""
            .concat(e.sku, ":")
            .concat(null != (n = null == (t = e.gameMetadata) ? void 0 : t[a.wF.PLACE_ID]) ? n : "");
    }
    return null;
}
function f(e, t) {
    return (null == e && null != t) || (null != e && null == t) || (null != e && null != t && !i().isEqual(e, t));
}
function _(e, t) {
    var n, r, i;
    let l = u({}, e),
        c = t.subgameInfo,
        d = t.application,
        f = Number(null == (n = e.gameMetadata) ? void 0 : n[a.wF.ROBLOX_TIME_STARTED]);
    if (((isNaN(f) || 0 === f) && (f = null != (r = e.start) ? r : Date.now()), null == c))
        E(e) && ((l.id = a.eB), (l.name = s.EOG[s.GQo.ROBLOX])),
            (l.gameMetadata = void 0),
            (l.sku = void 0),
            (l.start = f),
            (l.lastFocused = Math.floor(f / 1000));
    else {
        let t = {};
        null != d &&
        (0, o.ik)({
            exePath: e.exePath,
            name: d.id,
        }) &&
        (0, o.ik)({
            exePath: e.exePath,
            name: s.EOG[s.GQo.ROBLOX],
        })
            ? ((l.id = d.id),
              (l.name = d.id),
              (l.gameName = d.name),
              (l.start = Date.now()),
              (l.lastFocused = Math.floor(Date.now() / 1000)))
            : ((l.id = a.eB), (l.name = s.EOG[s.GQo.ROBLOX]), (l.start = f)),
            (t[a.wF.ROBLOX_TIME_STARTED] = f.toString()),
            (l.sku = null != (i = c.universeId) ? i : void 0),
            null != c.placeId && (t[a.wF.PLACE_ID] = c.placeId),
            null != c.jobId && (t[a.wF.JOB_ID] = c.jobId),
            null != c.robloxUserId && (t[a.wF.ROBLOX_USER_ID] = c.robloxUserId),
            (l.gameMetadata = Object.keys(t).length > 0 ? t : void 0);
    }
    return l;
}
function p(e) {
    return null == e[a.SQ.UNIVERSE_ID] || null == e[a.SQ.PLACE_ID] || null == e[a.SQ.JOB_ID] || null == e[a.SQ.USER_ID]
        ? null
        : {
              universeId: e[a.SQ.UNIVERSE_ID],
              placeId: e[a.SQ.PLACE_ID],
              jobId: e[a.SQ.JOB_ID],
              robloxUserId: e[a.SQ.USER_ID],
          };
}
function h(e) {
    return e.distributor === s.GQo.ROBLOX && null != e.gameMetadata && null != e.gameMetadata[a.wF.PLACE_ID]
        ? JSON.stringify({ placeId: e.gameMetadata[a.wF.PLACE_ID] })
        : null;
}
function m(e) {
    return e.distributor !== s.GQo.ROBLOX ||
        null == e.gameMetadata ||
        null == e.gameMetadata[a.wF.ROBLOX_TIME_STARTED] ||
        e.id === a.eB ||
        null == e.gameName
        ? {}
        : {
              name: l.intl.formatToPlainString(l.t.G6BGd3, { subgameName: e.gameName }),
              sync_id: e.gameMetadata[a.wF.ROBLOX_TIME_STARTED],
          };
}
function g(e) {
    var t;
    if (
        e.type !== s.IIU.PLAYING ||
        (null == (t = e.metadata) ? void 0 : t.distributor) !== s.GQo.ROBLOX ||
        e.application_id === a.eB
    )
        return e;
    let n = Number(e.sync_id),
        r = u({}, e);
    return (r.application_id = a.eB), (r.name = s.EOG[s.GQo.ROBLOX]), isNaN(n) || (r.timestamps = { start: n }), r;
}
function E(e) {
    return e.distributor === s.GQo.ROBLOX && e.id !== a.eB;
}
