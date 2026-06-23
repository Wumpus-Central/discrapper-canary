"use strict";
n.d(t, { Bb: () => d, C$: () => f, Jz: () => p, Ys: () => h, fu: () => _ });
var i = n(923457),
    r = n(873298),
    s = n(207560),
    a = n(885386),
    o = n(287809);
n(975214);
var l = n(750714);
let u = {
        [l.Je.DISABLED.valueOf()]: r.TO.SHOW,
        [l.Je.NON_FRIENDS.valueOf()]: r.TO.SHOW,
        [l.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.TO.BLOCK,
    },
    c = {
        [l.Je.DISABLED.valueOf()]: r.TO.SHOW,
        [l.Je.NON_FRIENDS.valueOf()]: r.TO.BLOCK,
        [l.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.TO.BLOCK,
    },
    d = {
        [l.Je.DISABLED.valueOf()]: r.TO.BLUR,
        [l.Je.NON_FRIENDS.valueOf()]: r.TO.BLUR,
        [l.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.TO.BLOCK,
    },
    _ = {
        [l.Je.DISABLED.valueOf()]: r.TO.BLUR,
        [l.Je.NON_FRIENDS.valueOf()]: r.TO.BLOCK,
        [l.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.TO.BLOCK,
    };
function h(e) {
    let { setting: t, isDm: n = !1, isFriend: l = !1 } = e;
    if (null != t && t !== r.TO.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
    let h = o.default.getCurrentUser();
    return (0, s.To)(i.p.SENSITIVE_CONTENT)
        ? (function (e) {
              let { isDm: t = !1, isFriend: n = !1 } = e;
              return t && !n ? r.TO.BLOCK : r.TO.BLUR;
          })({ isDm: n, isFriend: l })
        : h?.nsfwAllowed === !1
          ? (function (e) {
                let { isDm: t = !1, isFriend: n = !1 } = e;
                if (!t) return r.TO.BLUR;
                let i = a.cj.getSetting();
                return n ? d[i] : _[i];
            })({ isDm: n, isFriend: l })
          : (function (e) {
                let { isDm: t = !1, isFriend: n = !1 } = e;
                if (!t) return r.TO.SHOW;
                let i = a.cj.getSetting();
                return n ? u[i] : c[i];
            })({ isDm: n, isFriend: l });
}
function f(e) {
    let t = e ?? a.Vd.getSetting();
    return {
        explicitContentGuilds: h({ setting: t?.explicitContentGuilds }),
        explicitContentNonFriendDm: h({ setting: t?.explicitContentNonFriendDm, isDm: !0 }),
        explicitContentFriendDm: h({ setting: t?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
    };
}
function p(e) {
    let t = f();
    a.Vd.updateSetting({ ...t, ...e });
}
