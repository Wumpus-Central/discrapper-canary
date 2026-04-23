n.d(t, { Bb: () => d, C$: () => S, Jz: () => N, Ys: () => u, fu: () => c });
var i = n(923457),
    r = n(873298),
    a = n(207560),
    s = n(253932),
    _ = n(287809);
n(975214);
var l = n(656402);
let o = {
        [l.Je.DISABLED.valueOf()]: r.TO.SHOW,
        [l.Je.NON_FRIENDS.valueOf()]: r.TO.SHOW,
        [l.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.TO.BLOCK,
    },
    E = {
        [l.Je.DISABLED.valueOf()]: r.TO.SHOW,
        [l.Je.NON_FRIENDS.valueOf()]: r.TO.BLOCK,
        [l.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.TO.BLOCK,
    },
    d = {
        [l.Je.DISABLED.valueOf()]: r.TO.BLUR,
        [l.Je.NON_FRIENDS.valueOf()]: r.TO.BLUR,
        [l.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.TO.BLOCK,
    },
    c = {
        [l.Je.DISABLED.valueOf()]: r.TO.BLUR,
        [l.Je.NON_FRIENDS.valueOf()]: r.TO.BLOCK,
        [l.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.TO.BLOCK,
    },
    u = (e) => {
        let { setting: t, isDm: n = !1, isFriend: s = !1 } = e;
        if (null != t && t !== r.TO.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let l = _.default.getCurrentUser();
        return (0, a.To)(i.p.SENSITIVE_CONTENT)
            ? T({ isDm: n, isFriend: s })
            : l?.nsfwAllowed === !1
              ? A({ isDm: n, isFriend: s })
              : I({ isDm: n, isFriend: s });
    },
    I = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return r.TO.SHOW;
        let i = s.cj.getSetting();
        return n ? o[i] : E[i];
    },
    A = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return r.TO.BLUR;
        let i = s.cj.getSetting();
        return n ? d[i] : c[i];
    },
    T = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && !n ? r.TO.BLOCK : r.TO.BLUR;
    },
    S = (e) => {
        let t = e ?? s.Vd.getSetting();
        return {
            explicitContentGuilds: u({ setting: t?.explicitContentGuilds }),
            explicitContentNonFriendDm: u({ setting: t?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: u({ setting: t?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        };
    },
    N = (e) => {
        let t = S();
        s.Vd.updateSetting({ ...t, ...e });
    };
