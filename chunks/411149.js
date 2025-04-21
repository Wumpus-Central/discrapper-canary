n.d(t, { Z: () => T }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(709054),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = {},
    d = 0,
    f = new Set(),
    _ = {},
    p = {};
function h() {
    d = 1;
}
function m(e) {
    let { wallpapers: t } = e;
    (d = 2),
        t.forEach((e) => {
            u[e.id] = e;
        });
}
function g() {
    d = 3;
}
function E() {
    (u = {}), (d = 0);
}
function b(e) {
    let { channelId: t } = e,
        n = new Set(f);
    n.add(t), (f = n);
}
function y(e) {
    let { channelId: t } = e,
        n = new Set(f);
    n.delete(t), (f = n);
}
function v(e) {
    let { wallpaperId: t, overrides: n } = e;
    if (null != u[t]) {
        if (null == n) return void delete p[t];
        p[t] = c({}, u[t], p[t], n);
    }
}
function O(e) {
    let { channelId: t, message: n } = e;
    if (n.type !== s.uaV.CHAT_WALLPAPER_SET) return !1;
    o.default.compare(n.id, _[t]) > 0 && (_[t] = n.id);
}
function I(e) {
    let { channelId: t, messages: n } = e,
        r = n.find((e) => e.type === s.uaV.CHAT_WALLPAPER_SET);
    if (null == r) return !1;
    _[t] = r.id;
}
class S extends (r = i.ZP.Store) {
    get isFetchingWallpapers() {
        return 1 === d;
    }
    get shouldFetchWallpapers() {
        return 0 === d;
    }
    get hasFetchedWallpapers() {
        return 2 === d;
    }
    get failedToFetchWallpapers() {
        return 3 === d;
    }
    get wallpapers() {
        return Object.values(u);
    }
    getWallpaperById(e) {
        var t;
        if (null != e && null != u[e]) return null != (t = p[e]) ? t : u[e];
    }
    isUpdatingChatWallpaperFlagForChannel(e) {
        return f.has(e);
    }
    getLastSetWallpaperMessageIdForChannel(e) {
        return _[e];
    }
}
l(S, 'displayName', 'ChatWallpaperStore');
let T = new S(a.Z, {
    FETCH_CHAT_WALLPAPERS_START: h,
    FETCH_CHAT_WALLPAPERS_SUCCESS: m,
    FETCH_CHAT_WALLPAPERS_FAILURE: g,
    LOAD_MESSAGES_SUCCESS: I,
    MESSAGE_CREATE: O,
    UPDATE_CHAT_WALLPAPER_FLAG_START: b,
    UPDATE_CHAT_WALLPAPER_FLAG_COMPLETE: y,
    UPDATE_CHAT_WALLPAPER_OVERRIDES: v,
    LOGOUT: E
});
