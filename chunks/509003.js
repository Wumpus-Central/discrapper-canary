(n.d(t, {
    I8: () => p,
    Jc: () => g,
    LK: () => m,
    ON: () => _,
    sD: () => h,
    x3: () => d,
    yA: () => f
}),
    n(49124));
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e) {
    if (e.distributor === s.GQo.ROBLOX && null != e.sku) {
        var t, n;
        return ''.concat(e.sku, ':').concat(null != (n = null == (t = e.gameMetadata) ? void 0 : t[a.wF.PLACE_ID]) ? n : '');
    }
    return null;
}
function f(e, t) {
    return (null == e && null != t) || (null != e && null == t) || (null != e && null != t && !i().isEqual(e, t));
}
function _(e, t) {
    var n, r, i;
    let c = u({}, e),
        d = t.subgameInfo,
        f = t.application,
        _ = Number(null == (n = e.gameMetadata) ? void 0 : n[a.wF.ROBLOX_TIME_STARTED]);
    if (((isNaN(_) || 0 === _) && (_ = null != (r = e.start) ? r : Date.now()), null == d)) (c.id !== a.eB && ((c.id = a.eB), (c.name = s.EOG[s.GQo.ROBLOX])), (c.gameMetadata = void 0), (c.sku = void 0), (c.start = _));
    else {
        let t = {},
            n = null != f ? l.intl.formatToPlainString(l.t.G6BGd3, { subgameName: f.name }) : null;
        (null != f &&
        null != n &&
        (0, o.ik)({
            exePath: e.exePath,
            name: n
        }) &&
        (0, o.ik)({
            exePath: e.exePath,
            name: s.EOG[s.GQo.ROBLOX]
        })
            ? ((c.id = f.id), (c.name = n), (c.start = Date.now()))
            : ((c.id = a.eB), (c.name = s.EOG[s.GQo.ROBLOX]), (c.start = _)),
            (t[a.wF.ROBLOX_TIME_STARTED] = _.toString()),
            (c.sku = null != (i = d.universeId) ? i : void 0),
            null != d.placeId && (t[a.wF.PLACE_ID] = d.placeId),
            null != d.jobId && (t[a.wF.JOB_ID] = d.jobId),
            null != d.robloxUserId && (t[a.wF.ROBLOX_USER_ID] = d.robloxUserId),
            (c.gameMetadata = Object.keys(t).length > 0 ? t : void 0));
    }
    return c;
}
function p(e) {
    return null == e[a.SQ.UNIVERSE_ID] || null == e[a.SQ.PLACE_ID] || null == e[a.SQ.JOB_ID] || null == e[a.SQ.USER_ID]
        ? null
        : {
              universeId: e[a.SQ.UNIVERSE_ID],
              placeId: e[a.SQ.PLACE_ID],
              jobId: e[a.SQ.JOB_ID],
              robloxUserId: e[a.SQ.USER_ID]
          };
}
function h(e) {
    return e.distributor === s.GQo.ROBLOX && null != e.gameMetadata && null != e.gameMetadata[a.wF.PLACE_ID] ? JSON.stringify({ placeId: e.gameMetadata[a.wF.PLACE_ID] }) : null;
}
function m(e) {
    return e.distributor !== s.GQo.ROBLOX || null == e.gameMetadata || null == e.gameMetadata[a.wF.ROBLOX_TIME_STARTED] || e.id === a.eB ? {} : { sync_id: e.gameMetadata[a.wF.ROBLOX_TIME_STARTED] };
}
function g(e) {
    var t;
    if (e.type !== s.IIU.PLAYING || (null == (t = e.metadata) ? void 0 : t.distributor) !== s.GQo.ROBLOX || e.application_id === a.eB) return e;
    let n = Number(e.sync_id),
        r = u({}, e);
    return ((r.application_id = a.eB), (r.name = s.EOG[s.GQo.ROBLOX]), isNaN(n) || (r.timestamps = { start: n }), r);
}
