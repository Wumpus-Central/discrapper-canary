n.d(t, {
    FE: () => h,
    MS: () => _,
    ec: () => m,
    l4: () => y,
    zj: () => O,
});
var r = n(912423),
    i = n(524437),
    a = n(980945),
    o = n(312870),
    s = n(695346),
    l = n(594174);
n(721360);
var c = n(973005);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = {
        [c.TI.DISABLED.valueOf()]: i.Q4.SHOW,
        [c.TI.NON_FRIENDS.valueOf()]: i.Q4.SHOW,
        [c.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.Q4.BLOCK,
    },
    p = {
        [c.TI.DISABLED.valueOf()]: i.Q4.SHOW,
        [c.TI.NON_FRIENDS.valueOf()]: i.Q4.BLOCK,
        [c.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.Q4.BLOCK,
    },
    _ = {
        [c.TI.DISABLED.valueOf()]: i.Q4.BLUR,
        [c.TI.NON_FRIENDS.valueOf()]: i.Q4.BLUR,
        [c.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.Q4.BLOCK,
    },
    h = {
        [c.TI.DISABLED.valueOf()]: i.Q4.BLUR,
        [c.TI.NON_FRIENDS.valueOf()]: i.Q4.BLOCK,
        [c.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.Q4.BLOCK,
    },
    m = (e) => {
        let { setting: t, isDm: n = !1, isFriend: s = !1 } = e;
        if (null != t && t !== i.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let c = l.default.getCurrentUser(),
            u = (0, o.U)("resolveExplicitContentSettingWithDefaults");
        return (0, a.OE)(r.K.SENSITIVE_CONTENT) || u
            ? b({
                  isDm: n,
                  isFriend: s,
              })
            : (null == c ? void 0 : c.nsfwAllowed) === !1
              ? E({
                    isDm: n,
                    isFriend: s,
                })
              : g({
                    isDm: n,
                    isFriend: s,
                });
    },
    g = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return i.Q4.SHOW;
        let r = s.UP.getSetting();
        return n ? f[r] : p[r];
    },
    E = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return i.Q4.BLUR;
        let r = s.UP.getSetting();
        return n ? _[r] : h[r];
    },
    b = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && !n ? i.Q4.BLOCK : i.Q4.BLUR;
    },
    y = (e) => {
        let t = null != e ? e : s.Sh.getSetting();
        return {
            explicitContentGuilds: m({ setting: null == t ? void 0 : t.explicitContentGuilds }),
            explicitContentNonFriendDm: m({
                setting: null == t ? void 0 : t.explicitContentNonFriendDm,
                isDm: !0,
            }),
            explicitContentFriendDm: m({
                setting: null == t ? void 0 : t.explicitContentFriendDm,
                isDm: !0,
                isFriend: !0,
            }),
        };
    },
    O = (e) => {
        let t = y();
        s.Sh.updateSetting(d({}, t, e));
    };
