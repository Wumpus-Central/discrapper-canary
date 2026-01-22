n.d(t, {
    Bb: () => _,
    C$: () => y,
    Jz: () => O,
    Ys: () => m,
    fu: () => h,
});
var r = n(923457),
    i = n(873298),
    a = n(207560),
    s = n(64313),
    o = n(253932),
    l = n(287809);
n(975214);
var c = n(656402);

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
        [c.Je.DISABLED.valueOf()]: i.TO.SHOW,
        [c.Je.NON_FRIENDS.valueOf()]: i.TO.SHOW,
        [c.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.TO.BLOCK,
    },
    p = {
        [c.Je.DISABLED.valueOf()]: i.TO.SHOW,
        [c.Je.NON_FRIENDS.valueOf()]: i.TO.BLOCK,
        [c.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.TO.BLOCK,
    },
    _ = {
        [c.Je.DISABLED.valueOf()]: i.TO.BLUR,
        [c.Je.NON_FRIENDS.valueOf()]: i.TO.BLUR,
        [c.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.TO.BLOCK,
    },
    h = {
        [c.Je.DISABLED.valueOf()]: i.TO.BLUR,
        [c.Je.NON_FRIENDS.valueOf()]: i.TO.BLOCK,
        [c.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.TO.BLOCK,
    },
    m = (e) => {
        let { setting: t, isDm: n = !1, isFriend: o = !1 } = e;
        if (null != t && t !== i.TO.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let c = l.default.getCurrentUser(),
            u = (0, s.o)("resolveExplicitContentSettingWithDefaults");
        return (0, a.To)(r.p.SENSITIVE_CONTENT) || u
            ? b({
                  isDm: n,
                  isFriend: o,
              })
            : (null == c ? void 0 : c.nsfwAllowed) === !1
              ? E({
                    isDm: n,
                    isFriend: o,
                })
              : g({
                    isDm: n,
                    isFriend: o,
                });
    },
    g = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return i.TO.SHOW;
        let r = o.cj.getSetting();
        return n ? f[r] : p[r];
    },
    E = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return i.TO.BLUR;
        let r = o.cj.getSetting();
        return n ? _[r] : h[r];
    },
    b = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && !n ? i.TO.BLOCK : i.TO.BLUR;
    },
    y = (e) => {
        let t = null != e ? e : o.Vd.getSetting();
        return {
            explicitContentGuilds: m({
                setting: null == t ? void 0 : t.explicitContentGuilds,
            }),
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
        o.Vd.updateSetting(d({}, t, e));
    };
