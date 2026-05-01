n.d(t, { Bb: () => _, C$: () => h, Jz: () => S, Ys: () => u, fu: () => E });
var i = n(923457),
    a = n(873298),
    r = n(207560),
    s = n(253932),
    l = n(287809);
n(975214);
var o = n(656402);
let d = {
        [o.Je.DISABLED.valueOf()]: a.TO.SHOW,
        [o.Je.NON_FRIENDS.valueOf()]: a.TO.SHOW,
        [o.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: a.TO.BLOCK,
    },
    c = {
        [o.Je.DISABLED.valueOf()]: a.TO.SHOW,
        [o.Je.NON_FRIENDS.valueOf()]: a.TO.BLOCK,
        [o.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: a.TO.BLOCK,
    },
    _ = {
        [o.Je.DISABLED.valueOf()]: a.TO.BLUR,
        [o.Je.NON_FRIENDS.valueOf()]: a.TO.BLUR,
        [o.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: a.TO.BLOCK,
    },
    E = {
        [o.Je.DISABLED.valueOf()]: a.TO.BLUR,
        [o.Je.NON_FRIENDS.valueOf()]: a.TO.BLOCK,
        [o.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: a.TO.BLOCK,
    },
    u = (e) => {
        let { setting: t, isDm: n = !1, isFriend: s = !1 } = e;
        if (null != t && t !== a.TO.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let o = l.default.getCurrentUser();
        return (0, r.To)(i.p.SENSITIVE_CONTENT)
            ? T({ isDm: n, isFriend: s })
            : o?.nsfwAllowed === !1
              ? I({ isDm: n, isFriend: s })
              : A({ isDm: n, isFriend: s });
    },
    A = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return a.TO.SHOW;
        let i = s.cj.getSetting();
        return n ? d[i] : c[i];
    },
    I = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return a.TO.BLUR;
        let i = s.cj.getSetting();
        return n ? _[i] : E[i];
    },
    T = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && !n ? a.TO.BLOCK : a.TO.BLUR;
    },
    h = (e) => {
        let t = e ?? s.Vd.getSetting();
        return {
            explicitContentGuilds: u({ setting: t?.explicitContentGuilds }),
            explicitContentNonFriendDm: u({ setting: t?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: u({ setting: t?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        };
    },
    S = (e) => {
        let t = h();
        s.Vd.updateSetting({ ...t, ...e });
    };
