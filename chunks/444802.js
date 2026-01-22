n.d(t, {
    T4: () => g,
    WX: () => b,
    gC: () => p,
    jj: () => m,
    qY: () => E,
});
var r = n(64700),
    i = n(923457),
    a = n(873298),
    s = n(207560),
    o = n(64313),
    l = n(253932),
    c = n(287809),
    u = n(652215);

function d(e, t, n) {
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

function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
let p = (e) => {
        let { setting: t, isDm: n = !1, isFriend: r = !1 } = e;
        if (null != t && t !== a.TO.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let l = c.default.getCurrentUser(),
            u = (0, o.o)("resolveExplicitContentSettingWithDefaults");
        return (0, s.To)(i.p.SENSITIVE_CONTENT) || u
            ? _({
                  isDm: n,
                  isFriend: r,
              })
            : (null == l ? void 0 : l.nsfwAllowed) === !1
              ? m({
                    isDm: n,
                    isFriend: r,
                })
              : h({
                    isDm: n,
                    isFriend: r,
                });
    },
    _ = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && !n ? a.TO.BLOCK : a.TO.BLUR;
    },
    h = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && n ? a.TO.SHOW : t ? a.TO.BLOCK : a.TO.SHOW;
    },
    m = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && n ? a.TO.BLUR : t ? a.TO.BLOCK : a.TO.BLUR;
    },
    g = (e) => {
        let t = null != e ? e : l.qN.getSetting();
        return {
            goreContentGuilds: p({
                setting: null == t ? void 0 : t.goreContentGuilds,
            }),
            goreContentNonFriendDm: p({
                setting: null == t ? void 0 : t.goreContentNonFriendDm,
                isDm: !0,
            }),
            goreContentFriendDm: p({
                setting: null == t ? void 0 : t.goreContentFriendDm,
                isDm: !0,
                isFriend: !0,
            }),
        };
    },
    E = (e) => {
        let t = g();
        l.qN.updateSetting(f({}, t, e));
    },
    b = () => r.useMemo(() => u.MVz.EXPLICIT_MEDIA_REDACTION, []);
