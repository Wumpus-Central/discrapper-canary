n.d(t, {
    FE: () => p,
    MS: () => _,
    ec: () => h,
    l4: () => b,
    zj: () => y,
});
var r = n(524437),
    i = n(128064),
    a = n(312870),
    o = n(695346),
    s = n(594174);
n(721360);
var l = n(973005);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
let d = {
        [l.TI.DISABLED.valueOf()]: r.Q4.SHOW,
        [l.TI.NON_FRIENDS.valueOf()]: r.Q4.SHOW,
        [l.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.Q4.BLOCK,
    },
    f = {
        [l.TI.DISABLED.valueOf()]: r.Q4.SHOW,
        [l.TI.NON_FRIENDS.valueOf()]: r.Q4.BLOCK,
        [l.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.Q4.BLOCK,
    },
    _ = {
        [l.TI.DISABLED.valueOf()]: r.Q4.BLUR,
        [l.TI.NON_FRIENDS.valueOf()]: r.Q4.BLUR,
        [l.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.Q4.BLOCK,
    },
    p = {
        [l.TI.DISABLED.valueOf()]: r.Q4.BLUR,
        [l.TI.NON_FRIENDS.valueOf()]: r.Q4.BLOCK,
        [l.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.Q4.BLOCK,
    },
    h = (e) => {
        let { setting: t, isDm: n = !1, isFriend: o = !1 } = e;
        if (null != t && t !== r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let l = s.default.getCurrentUser(),
            c = (0, a.U)("resolveExplicitContentSettingWithDefaults");
        return (0, i.c_)("resolveExplicitContentSettingWithDefaults") || c
            ? E({
                  isDm: n,
                  isFriend: o,
              })
            : (null == l ? void 0 : l.nsfwAllowed) === !1
              ? g({
                    isDm: n,
                    isFriend: o,
                })
              : m({
                    isDm: n,
                    isFriend: o,
                });
    },
    m = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return r.Q4.SHOW;
        let i = o.UP.getSetting();
        return n ? d[i] : f[i];
    },
    g = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return r.Q4.BLUR;
        let i = o.UP.getSetting();
        return n ? _[i] : p[i];
    },
    E = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && !n ? r.Q4.BLOCK : r.Q4.BLUR;
    },
    b = (e) => {
        let t = null != e ? e : o.Sh.getSetting();
        return {
            explicitContentGuilds: h({ setting: null == t ? void 0 : t.explicitContentGuilds }),
            explicitContentNonFriendDm: h({
                setting: null == t ? void 0 : t.explicitContentNonFriendDm,
                isDm: !0,
            }),
            explicitContentFriendDm: h({
                setting: null == t ? void 0 : t.explicitContentFriendDm,
                isDm: !0,
                isFriend: !0,
            }),
        };
    },
    y = (e) => {
        let t = b();
        o.Sh.updateSetting(u({}, t, e));
    };
