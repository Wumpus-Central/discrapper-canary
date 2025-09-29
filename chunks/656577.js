n.d(t, {
    FE: () => _,
    MS: () => f,
    ec: () => p,
    l4: () => E,
    zj: () => b,
});
var r = n(524437),
    i = n(128064),
    a = n(695346),
    o = n(594174);
n(721360);
var s = n(973005);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = {
        [s.TI.DISABLED.valueOf()]: r.Q4.SHOW,
        [s.TI.NON_FRIENDS.valueOf()]: r.Q4.SHOW,
        [s.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.Q4.BLOCK,
    },
    d = {
        [s.TI.DISABLED.valueOf()]: r.Q4.SHOW,
        [s.TI.NON_FRIENDS.valueOf()]: r.Q4.BLOCK,
        [s.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.Q4.BLOCK,
    },
    f = {
        [s.TI.DISABLED.valueOf()]: r.Q4.BLUR,
        [s.TI.NON_FRIENDS.valueOf()]: r.Q4.BLUR,
        [s.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.Q4.BLOCK,
    },
    _ = {
        [s.TI.DISABLED.valueOf()]: r.Q4.BLUR,
        [s.TI.NON_FRIENDS.valueOf()]: r.Q4.BLOCK,
        [s.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.Q4.BLOCK,
    },
    p = (e) => {
        let { setting: t, isDm: n = !1, isFriend: a = !1 } = e;
        if (null != t && t !== r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let s = o.default.getCurrentUser();
        return (0, i.c_)("resolveSettingWithDefaults")
            ? g({
                  isDm: n,
                  isFriend: a,
              })
            : (null == s ? void 0 : s.nsfwAllowed) === !1
              ? m({
                    isDm: n,
                    isFriend: a,
                })
              : h({
                    isDm: n,
                    isFriend: a,
                });
    },
    h = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return r.Q4.SHOW;
        let i = a.UP.getSetting();
        return n ? u[i] : d[i];
    },
    m = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return r.Q4.BLUR;
        let i = a.UP.getSetting();
        return n ? f[i] : _[i];
    },
    g = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && !n ? r.Q4.BLOCK : r.Q4.BLUR;
    },
    E = (e) => {
        let t = null != e ? e : a.Sh.getSetting();
        return {
            explicitContentGuilds: p({ setting: null == t ? void 0 : t.explicitContentGuilds }),
            explicitContentNonFriendDm: p({
                setting: null == t ? void 0 : t.explicitContentNonFriendDm,
                isDm: !0,
            }),
            explicitContentFriendDm: p({
                setting: null == t ? void 0 : t.explicitContentFriendDm,
                isDm: !0,
                isFriend: !0,
            }),
        };
    },
    b = (e) => {
        let t = E();
        a.Sh.updateSetting(c({}, t, e));
    };
