(n.d(t, {
    I8: () => p,
    ON: () => f,
    sD: () => h,
    x3: () => c,
    yA: () => _
}),
    n(49124));
var r = n(392711),
    i = n.n(r),
    a = n(817788),
    o = n(981631);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            }));
    }
    return e;
}
function c(e) {
    if (e.distributor === o.GQo.ROBLOX && null != e.sku) {
        var t, n;
        return ''.concat(e.sku, ':').concat(null != (n = null == (t = e.gameMetadata) ? void 0 : t[a.wF.PLACE_ID]) ? n : '');
    }
    return null;
}
function u(e) {
    var t, n, r;
    return e.distributor !== o.GQo.ROBLOX || null == e.gameMetadata || null == e.sku
        ? null
        : {
              placeId: null != (t = e.gameMetadata.placeId) ? t : null,
              universeId: e.sku,
              jobId: null != (n = e.gameMetadata.jobId) ? n : null,
              robloxUserId: null != (r = e.gameMetadata.robloxUserId) ? r : null
          };
}
function d(e, t) {
    return e.distributor === o.GQo.ROBLOX && _(u(e), t);
}
function _(e, t) {
    return (null == e && null != t) || (null != e && null == t) || (null != e && null != t && !i().isEqual(e, t));
}
function f(e, t) {
    let n = l({}, e);
    if (d(e, t)) {
        if (null == t) ((n.gameMetadata = void 0), (n.sku = void 0));
        else {
            var r;
            n.sku = null != (r = t.universeId) ? r : void 0;
            let e = {};
            (null != t.placeId && (e.placeId = t.placeId), null != t.jobId && (e.jobId = t.jobId), null != t.robloxUserId && (e.robloxUserId = t.robloxUserId), (n.gameMetadata = Object.keys(e).length > 0 ? e : void 0));
        }
        return n;
    }
    return e;
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
    return e.distributor === o.GQo.ROBLOX && null != e.gameMetadata && null != e.gameMetadata[a.wF.PLACE_ID] ? JSON.stringify({ placeId: e.gameMetadata[a.wF.PLACE_ID] }) : null;
}
