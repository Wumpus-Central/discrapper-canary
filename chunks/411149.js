n.d(t, { Z: () => g }), n(47120);
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
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
let s = {},
    l = 0,
    c = new Set();
function u() {
    l = 1;
}
function d(e) {
    let { wallpapers: t } = e;
    (l = 2),
        t.forEach((e) => {
            s[e.id] = e;
        });
}
function f() {
    l = 3;
}
function _() {
    (s = {}), (l = 0);
}
function p(e) {
    let { channelId: t } = e,
        n = new Set(c);
    n.add(t), (c = n);
}
function h(e) {
    let { channelId: t } = e,
        n = new Set(c);
    n.delete(t), (c = n);
}
class m extends (r = i.ZP.Store) {
    get isFetchingWallpapers() {
        return 1 === l;
    }
    get shouldFetchWallpapers() {
        return 0 === l;
    }
    get hasFetchedWallpapers() {
        return 2 === l;
    }
    get wallpapers() {
        return Object.values(s);
    }
    getWallpaperById(e) {
        if (null != e) return s[e];
    }
    isUpdatingChatWallpaperFlagForChannel(e) {
        return c.has(e);
    }
}
a(m, 'displayName', 'ChatWallpaperStore');
let g = new m(o.Z, {
    FETCH_CHAT_WALLPAPERS_START: u,
    FETCH_CHAT_WALLPAPERS_SUCCESS: d,
    FETCH_CHAT_WALLPAPERS_FAILURE: f,
    UPDATE_CHAT_WALLPAPER_FLAG_START: p,
    UPDATE_CHAT_WALLPAPER_FLAG_COMPLETE: h,
    LOGOUT: _
});
