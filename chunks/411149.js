n.d(t, { Z: () => N }), n(388685);
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
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = {},
    _ = 0,
    p = new Set(),
    h = {},
    m = {};
function g() {
    _ = 1;
}
function E(e) {
    let { wallpapers: t } = e;
    (_ = 2),
        t.forEach((e) => {
            f[e.id] = e;
        });
}
function b() {
    _ = 3;
}
function y() {
    (f = {}), (_ = 0);
}
function v(e) {
    let { channelId: t } = e,
        n = new Set(p);
    n.add(t), (p = n);
}
function O(e) {
    let { channelId: t } = e,
        n = new Set(p);
    n.delete(t), (p = n);
}
function I(e) {
    let { wallpaperId: t, overrides: n } = e;
    if (null == f[t]) return;
    if (null == n) return void delete m[t];
    let r = d(c({}, f[t]), { default: c({}, f[t].default, m[t], n) });
    f[t] = r;
}
function S(e) {
    let { channelId: t, message: n } = e;
    if (n.type !== s.uaV.CHAT_WALLPAPER_SET) return !1;
    o.default.compare(n.id, h[t]) > 0 && (h[t] = n.id);
}
function T(e) {
    let { channelId: t, messages: n } = e,
        r = n.find((e) => e.type === s.uaV.CHAT_WALLPAPER_SET);
    if (null == r) return !1;
    h[t] = r.id;
}
class A extends (r = i.ZP.Store) {
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
        return Object.values(f);
    }
    getWallpaperById(e) {
        var t;
        if (null != e && null != f[e]) return null != (t = m[e]) ? t : f[e];
    }
    isUpdatingChatWallpaperFlagForChannel(e) {
        return p.has(e);
    }
    getLastSetWallpaperMessageIdForChannel(e) {
        return h[e];
    }
}
l(A, 'displayName', 'ChatWallpaperStore');
let N = new A(a.Z, {
    FETCH_CHAT_WALLPAPERS_START: g,
    FETCH_CHAT_WALLPAPERS_SUCCESS: E,
    FETCH_CHAT_WALLPAPERS_FAILURE: b,
    LOAD_MESSAGES_SUCCESS: T,
    MESSAGE_CREATE: S,
    UPDATE_CHAT_WALLPAPER_FLAG_START: v,
    UPDATE_CHAT_WALLPAPER_FLAG_COMPLETE: O,
    UPDATE_CHAT_WALLPAPER_OVERRIDES: I,
    LOGOUT: y
});
