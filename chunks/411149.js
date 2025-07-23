(n.d(t, { Z: () => A }), n(388685));
var r,
    i = n(392711),
    a = n(442837),
    o = n(570140),
    s = n(709054),
    l = n(981631);
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
let d = {},
    _ = 0,
    f = new Set(),
    p = {},
    h = {};
function m() {
    _ = 1;
}
function g(e) {
    let { wallpapers: t } = e;
    ((_ = 2),
        t.forEach((e) => {
            d[e.id] = e;
        }));
}
function E() {
    _ = 3;
}
function b() {
    ((d = {}), (_ = 0));
}
function y(e) {
    let { channelId: t } = e,
        n = new Set(f);
    (n.add(t), (f = n));
}
function O(e) {
    let { channelId: t } = e,
        n = new Set(f);
    (n.delete(t), (f = n));
}
function v(e) {
    var t, n;
    let { wallpaperId: r, overrides: a } = e;
    if (null == d[r] || null == a) return void delete h[r];
    null == h[r] && (h[r] = (0, i.cloneDeep)(d[r]));
    let o = h[r];
    ((o.default = u({}, o.default, a)), (null == o || null == (t = o.variants) ? void 0 : t.dark) != null && (o.variants.dark = u({}, o.variants.dark, a)), (null == o || null == (n = o.variants) ? void 0 : n.light) != null && (o.variants.light = u({}, o.variants.light, a)));
}
function I(e) {
    let { channelId: t, message: n } = e;
    if (n.type !== l.uaV.CHAT_WALLPAPER_SET) return !1;
    s.default.compare(n.id, p[t]) > 0 && (p[t] = n.id);
}
function T(e) {
    let { channelId: t, messages: n } = e,
        r = n.find((e) => e.type === l.uaV.CHAT_WALLPAPER_SET);
    if (null == r) return !1;
    p[t] = r.id;
}
class S extends (r = a.ZP.Store) {
    get isFetchingWallpapers() {
        return 1 === _;
    }
    get shouldFetchWallpapers() {
        return 0 === _;
    }
    get hasFetchedWallpapers() {
        return 2 === _;
    }
    get failedToFetchWallpapers() {
        return 3 === _;
    }
    get wallpapers() {
        return Object.values(d);
    }
    getWallpaperById(e) {
        var t;
        if (null != e && null != d[e]) return null != (t = h[e]) ? t : d[e];
    }
    isUpdatingChatWallpaperFlagForChannel(e) {
        return f.has(e);
    }
    getLastSetWallpaperMessageIdForChannel(e) {
        return p[e];
    }
}
c(S, 'displayName', 'ChatWallpaperStore');
let A = new S(o.Z, {
    FETCH_CHAT_WALLPAPERS_START: m,
    FETCH_CHAT_WALLPAPERS_SUCCESS: g,
    FETCH_CHAT_WALLPAPERS_FAILURE: E,
    LOAD_MESSAGES_SUCCESS: T,
    MESSAGE_CREATE: I,
    UPDATE_CHAT_WALLPAPER_FLAG_START: y,
    UPDATE_CHAT_WALLPAPER_FLAG_COMPLETE: O,
    UPDATE_CHAT_WALLPAPER_OVERRIDES: v,
    LOGOUT: b
});
