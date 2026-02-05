"use strict";
n.d(t, { Bb: () => _, C$: () => E, Jz: () => A, Ys: () => p, fu: () => f });
var r = n(923457),
    i = n(873298),
    a = n(207560),
    s = n(64313),
    o = n(253932),
    l = n(287809);
n(975214);
var u = n(656402);
let c = {
        [u.Je.DISABLED.valueOf()]: i.TO.SHOW,
        [u.Je.NON_FRIENDS.valueOf()]: i.TO.SHOW,
        [u.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.TO.BLOCK,
    },
    d = {
        [u.Je.DISABLED.valueOf()]: i.TO.SHOW,
        [u.Je.NON_FRIENDS.valueOf()]: i.TO.BLOCK,
        [u.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.TO.BLOCK,
    },
    _ = {
        [u.Je.DISABLED.valueOf()]: i.TO.BLUR,
        [u.Je.NON_FRIENDS.valueOf()]: i.TO.BLUR,
        [u.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.TO.BLOCK,
    },
    f = {
        [u.Je.DISABLED.valueOf()]: i.TO.BLUR,
        [u.Je.NON_FRIENDS.valueOf()]: i.TO.BLOCK,
        [u.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.TO.BLOCK,
    },
    p = (e) => {
        let { setting: t, isDm: n = !1, isFriend: o = !1 } = e;
        if (null != t && t !== i.TO.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let u = l.default.getCurrentUser(),
            c = (0, s.o)("resolveExplicitContentSettingWithDefaults");
        return (0, a.To)(r.p.SENSITIVE_CONTENT) || c
            ? g({ isDm: n, isFriend: o })
            : u?.nsfwAllowed === !1
              ? m({ isDm: n, isFriend: o })
              : h({ isDm: n, isFriend: o });
    },
    h = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return i.TO.SHOW;
        let r = o.cj.getSetting();
        return n ? c[r] : d[r];
    },
    m = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return i.TO.BLUR;
        let r = o.cj.getSetting();
        return n ? _[r] : f[r];
    },
    g = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && !n ? i.TO.BLOCK : i.TO.BLUR;
    },
    E = (e) => {
        let t = e ?? o.Vd.getSetting();
        return {
            explicitContentGuilds: p({ setting: t?.explicitContentGuilds }),
            explicitContentNonFriendDm: p({ setting: t?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: p({ setting: t?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        };
    },
    A = (e) => {
        let t = E();
        o.Vd.updateSetting({ ...t, ...e });
    };
