var i = n(923457),
    r = n(873298),
    a = n(36149),
    s = n(207560),
    l = n(253932),
    o = n(287809);
n(975214);
var d = n(750714);
let c = {
        [d.Je.DISABLED.valueOf()]: r.TO.SHOW,
        [d.Je.NON_FRIENDS.valueOf()]: r.TO.SHOW,
        [d.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.TO.BLOCK,
    },
    u = {
        [d.Je.DISABLED.valueOf()]: r.TO.SHOW,
        [d.Je.NON_FRIENDS.valueOf()]: r.TO.BLOCK,
        [d.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.TO.BLOCK,
    },
    _ = {
        [d.Je.DISABLED.valueOf()]: r.TO.BLUR,
        [d.Je.NON_FRIENDS.valueOf()]: r.TO.BLUR,
        [d.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.TO.BLOCK,
    },
    E = {
        [d.Je.DISABLED.valueOf()]: r.TO.BLUR,
        [d.Je.NON_FRIENDS.valueOf()]: r.TO.BLOCK,
        [d.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.TO.BLOCK,
    };
function A(e) {
    let { setting: t, isDm: n = !1, isFriend: d = !1 } = e;
    if (null != t && t !== r.TO.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
    let A = o.default.getCurrentUser();
    return (0, s.To)(i.p.SENSITIVE_CONTENT) && !(0, a.$8)()
        ? (function (e) {
              let { isDm: t = !1, isFriend: n = !1 } = e;
              return t && !n ? r.TO.BLOCK : r.TO.BLUR;
          })({ isDm: n, isFriend: d })
        : A?.nsfwAllowed === !1
          ? (function (e) {
                let { isDm: t = !1, isFriend: n = !1 } = e;
                if (!t) return r.TO.BLUR;
                let i = l.cj.getSetting();
                return n ? _[i] : E[i];
            })({ isDm: n, isFriend: d })
          : (function (e) {
                let { isDm: t = !1, isFriend: n = !1 } = e;
                if (!t) return r.TO.SHOW;
                let i = l.cj.getSetting();
                return n ? c[i] : u[i];
            })({ isDm: n, isFriend: d });
}
function f(e) {
    let t = e ?? l.Vd.getSetting();
    return {
        explicitContentGuilds: A({ setting: t?.explicitContentGuilds }),
        explicitContentNonFriendDm: A({ setting: t?.explicitContentNonFriendDm, isDm: !0 }),
        explicitContentFriendDm: A({ setting: t?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
    };
}
n.d(
    t,
    {},
    {
        Bb: _,
        C$: f,
        Jz: function (e) {
            let t = f();
            l.Vd.updateSetting({ ...t, ...e });
        },
        Ys: A,
        fu: E,
    },
);
