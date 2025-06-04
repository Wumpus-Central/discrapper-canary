n.d(t, {
    l4: () => E,
    tG: () => p,
    zj: () => b
});
var r = n(524437),
    i = n(695346),
    o = n(594174),
    a = n(704454);
n(721360);
var s = n(973005);
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
let u = {
        [s.TI.DISABLED.valueOf()]: r.Q4.SHOW,
        [s.TI.NON_FRIENDS.valueOf()]: r.Q4.SHOW,
        [s.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.Q4.BLOCK
    },
    d = {
        [s.TI.DISABLED.valueOf()]: r.Q4.SHOW,
        [s.TI.NON_FRIENDS.valueOf()]: r.Q4.BLOCK,
        [s.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.Q4.BLOCK
    },
    f = {
        [s.TI.DISABLED.valueOf()]: r.Q4.BLUR,
        [s.TI.NON_FRIENDS.valueOf()]: r.Q4.BLUR,
        [s.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.Q4.BLOCK
    },
    _ = {
        [s.TI.DISABLED.valueOf()]: r.Q4.BLUR,
        [s.TI.NON_FRIENDS.valueOf()]: r.Q4.BLOCK,
        [s.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.Q4.BLOCK
    },
    p = (e) => {
        let { setting: t, isDm: n = !1, isFriend: i = !1 } = e;
        if (null != t && t !== r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let s = o.default.getCurrentUser();
        return (0, a.bc)('resolveSettingWithDefaults')
            ? g({
                  isDm: n,
                  isFriend: i
              })
            : (0, a.g2)('resolveSettingWithDefaults')
              ? r.Q4.BLUR
              : (null == s ? void 0 : s.nsfwAllowed) === !1
                ? m({
                      isDm: n,
                      isFriend: i
                  })
                : h({
                      isDm: n,
                      isFriend: i
                  });
    },
    h = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return r.Q4.SHOW;
        let o = i.UP.getSetting();
        return n ? u[o] : d[o];
    },
    m = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return r.Q4.BLUR;
        let o = i.UP.getSetting();
        return n ? f[o] : _[o];
    },
    g = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && !n ? r.Q4.BLOCK : r.Q4.BLUR;
    },
    E = () => {
        let e = i.Sh.getSetting();
        return {
            explicitContentGuilds: p({ setting: null == e ? void 0 : e.explicitContentGuilds }),
            explicitContentNonFriendDm: p({
                setting: null == e ? void 0 : e.explicitContentNonFriendDm,
                isDm: !0
            }),
            explicitContentFriendDm: p({
                setting: null == e ? void 0 : e.explicitContentFriendDm,
                isDm: !0,
                isFriend: !0
            })
        };
    },
    b = (e) => {
        let t = E();
        i.Sh.updateSetting(c({}, t, e));
    };
