"use strict";
n.d(t, { Bb: () => d, C$: () => E, Jz: () => g, Ys: () => f, fu: () => _ });
var r = n(923457),
    i = n(873298),
    s = n(207560),
    a = n(253932),
    o = n(287809);
n(975214);
var l = n(656402);
let u = {
        [l.Je.DISABLED.valueOf()]: i.TO.SHOW,
        [l.Je.NON_FRIENDS.valueOf()]: i.TO.SHOW,
        [l.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.TO.BLOCK,
    },
    c = {
        [l.Je.DISABLED.valueOf()]: i.TO.SHOW,
        [l.Je.NON_FRIENDS.valueOf()]: i.TO.BLOCK,
        [l.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.TO.BLOCK,
    },
    d = {
        [l.Je.DISABLED.valueOf()]: i.TO.BLUR,
        [l.Je.NON_FRIENDS.valueOf()]: i.TO.BLUR,
        [l.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.TO.BLOCK,
    },
    _ = {
        [l.Je.DISABLED.valueOf()]: i.TO.BLUR,
        [l.Je.NON_FRIENDS.valueOf()]: i.TO.BLOCK,
        [l.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.TO.BLOCK,
    },
    f = (e) => {
        let { setting: t, isDm: n = !1, isFriend: a = !1 } = e;
        if (null != t && t !== i.TO.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let l = o.default.getCurrentUser();
        return (0, s.To)(r.p.SENSITIVE_CONTENT)
            ? m({ isDm: n, isFriend: a })
            : l?.nsfwAllowed === !1
              ? h({ isDm: n, isFriend: a })
              : p({ isDm: n, isFriend: a });
    },
    p = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return i.TO.SHOW;
        let r = a.cj.getSetting();
        return n ? u[r] : c[r];
    },
    h = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return i.TO.BLUR;
        let r = a.cj.getSetting();
        return n ? d[r] : _[r];
    },
    m = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && !n ? i.TO.BLOCK : i.TO.BLUR;
    },
    E = (e) => {
        let t = e ?? a.Vd.getSetting();
        return {
            explicitContentGuilds: f({ setting: t?.explicitContentGuilds }),
            explicitContentNonFriendDm: f({ setting: t?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: f({ setting: t?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        };
    },
    g = (e) => {
        let t = E();
        a.Vd.updateSetting({ ...t, ...e });
    };
