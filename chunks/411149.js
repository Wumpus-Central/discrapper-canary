n.d(t, { Z: () => p });
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
    l = 0;
function c() {
    l = 1;
}
function u(e) {
    let { wallpapers: t } = e;
    (l = 2),
        t.forEach((e) => {
            s[e.id] = e;
        });
}
function d() {
    l = 3;
}
function f() {
    (s = {}), (l = 0);
}
class _ extends (r = i.ZP.Store) {
    get isFetchingWallpapers() {
        return 1 === l;
    }
    get wallpapers() {
        return Object.values(s);
    }
    getWallpaperById(e) {
        return s[e];
    }
}
a(_, 'displayName', 'ChatWallpaperStore');
let p = new _(o.Z, {
    FETCH_CHAT_WALLPAPERS_START: c,
    FETCH_CHAT_WALLPAPERS_SUCCESS: u,
    FETCH_CHAT_WALLPAPERS_FAILURE: d,
    LOGOUT: f
});
