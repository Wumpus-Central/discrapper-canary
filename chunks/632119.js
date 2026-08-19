"use strict";
n.d(t, { Bb: () => u, C$: () => A, Jz: () => h, Ys: () => E, fu: () => _ });
var i = n(923457),
    r = n(873298),
    a = n(207560),
    s = n(885386),
    l = n(287809);
n(975214);
var o = n(750714);
let d = {
        [o.Je.DISABLED.valueOf()]: r.TO.SHOW,
        [o.Je.NON_FRIENDS.valueOf()]: r.TO.SHOW,
        [o.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.TO.BLOCK,
    },
    c = {
        [o.Je.DISABLED.valueOf()]: r.TO.SHOW,
        [o.Je.NON_FRIENDS.valueOf()]: r.TO.BLOCK,
        [o.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.TO.BLOCK,
    },
    u = {
        [o.Je.DISABLED.valueOf()]: r.TO.BLUR,
        [o.Je.NON_FRIENDS.valueOf()]: r.TO.BLUR,
        [o.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.TO.BLOCK,
    },
    _ = {
        [o.Je.DISABLED.valueOf()]: r.TO.BLUR,
        [o.Je.NON_FRIENDS.valueOf()]: r.TO.BLOCK,
        [o.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.TO.BLOCK,
    };
function E(e) {
    let { setting: t, isDm: n = !1, isFriend: o = !1 } = e;
    if (null != t && t !== r.TO.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
    let E = l.default.getCurrentUser();
    return (0, a.To)(i.p.SENSITIVE_CONTENT)
        ? (function (e) {
              let { isDm: t = !1, isFriend: n = !1 } = e;
              return t && !n ? r.TO.BLOCK : r.TO.BLUR;
          })({ isDm: n, isFriend: o })
        : E?.nsfwAllowed === !1
          ? (function (e) {
                let { isDm: t = !1, isFriend: n = !1 } = e;
                if (!t) return r.TO.BLUR;
                let i = s.cj.getSetting();
                return n ? u[i] : _[i];
            })({ isDm: n, isFriend: o })
          : (function (e) {
                let { isDm: t = !1, isFriend: n = !1 } = e;
                if (!t) return r.TO.SHOW;
                let i = s.cj.getSetting();
                return n ? d[i] : c[i];
            })({ isDm: n, isFriend: o });
}
function A(e) {
    let t = e ?? s.Vd.getSetting();
    return {
        explicitContentGuilds: E({ setting: t?.explicitContentGuilds }),
        explicitContentNonFriendDm: E({ setting: t?.explicitContentNonFriendDm, isDm: !0 }),
        explicitContentFriendDm: E({ setting: t?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
    };
}
function h(e) {
    let t = A();
    s.Vd.updateSetting({ ...t, ...e });
}
