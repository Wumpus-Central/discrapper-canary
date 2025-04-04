n.d(t, { Z: () => O }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(709054),
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
let c = {},
    u = 0,
    d = new Set(),
    f = {};
function _() {
    u = 1;
}
function p(e) {
    let { wallpapers: t } = e;
    (u = 2),
        t.forEach((e) => {
            c[e.id] = e;
        });
}
function h() {
    u = 3;
}
function m() {
    (c = {}), (u = 0);
}
function g(e) {
    let { channelId: t } = e,
        n = new Set(d);
    n.add(t), (d = n);
}
function E(e) {
    let { channelId: t } = e,
        n = new Set(d);
    n.delete(t), (d = n);
}
function b(e) {
    let { channelId: t, message: n } = e;
    if (n.type !== s.uaV.CHAT_WALLPAPER_SET) return !1;
    a.default.compare(n.id, f[t]) > 0 && (f[t] = n.id);
}
function y(e) {
    let { channelId: t, messages: n } = e,
        r = n.find((e) => e.type === s.uaV.CHAT_WALLPAPER_SET);
    if (null == r) return !1;
    f[t] = r.id;
}
class v extends (r = i.ZP.Store) {
    get isFetchingWallpapers() {
        return 1 === u;
    }
    get shouldFetchWallpapers() {
        return 0 === u;
    }
    get hasFetchedWallpapers() {
        return 2 === u;
    }
    get wallpapers() {
        return Object.values(c);
    }
    getWallpaperById(e) {
        if (null != e) return c[e];
    }
    isUpdatingChatWallpaperFlagForChannel(e) {
        return d.has(e);
    }
    getLastSetWallpaperMessageIdForChannel(e) {
        return f[e];
    }
}
l(v, 'displayName', 'ChatWallpaperStore');
let O = new v(o.Z, {
    FETCH_CHAT_WALLPAPERS_START: _,
    FETCH_CHAT_WALLPAPERS_SUCCESS: p,
    FETCH_CHAT_WALLPAPERS_FAILURE: h,
    LOAD_MESSAGES_SUCCESS: y,
    MESSAGE_CREATE: b,
    UPDATE_CHAT_WALLPAPER_FLAG_START: g,
    UPDATE_CHAT_WALLPAPER_FLAG_COMPLETE: E,
    LOGOUT: m
});
