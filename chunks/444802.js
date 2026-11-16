var i = n(582128),
    r = n(923457),
    a = n(873298),
    s = n(36149),
    l = n(207560),
    o = n(253932),
    d = n(287809),
    c = n(652215);
function u(e) {
    let { setting: t, isDm: n = !1, isFriend: i = !1 } = e;
    if (null != t && t !== a.TO.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
    let o = d.default.getCurrentUser();
    return (0, l.To)(r.p.SENSITIVE_CONTENT) && !(0, s.$8)()
        ? (function (e) {
              let { isDm: t = !1, isFriend: n = !1 } = e;
              return t && !n ? a.TO.BLOCK : a.TO.BLUR;
          })({ isDm: n, isFriend: i })
        : o?.nsfwAllowed === !1
          ? _({ isDm: n, isFriend: i })
          : (function (e) {
                let { isDm: t = !1, isFriend: n = !1 } = e;
                return t && n ? a.TO.SHOW : t ? a.TO.BLOCK : a.TO.SHOW;
            })({ isDm: n, isFriend: i });
}
function _(e) {
    let { isDm: t = !1, isFriend: n = !1 } = e;
    return t && n ? a.TO.BLUR : t ? a.TO.BLOCK : a.TO.BLUR;
}
function E(e) {
    let t = e ?? o.qN.getSetting();
    return {
        goreContentGuilds: u({ setting: t?.goreContentGuilds }),
        goreContentNonFriendDm: u({ setting: t?.goreContentNonFriendDm, isDm: !0 }),
        goreContentFriendDm: u({ setting: t?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
    };
}
n.d(
    t,
    {},
    {
        T4: E,
        WX: function () {
            return i.useMemo(() => c.MVz.EXPLICIT_MEDIA_REDACTION, []);
        },
        gC: u,
        jj: _,
        qY: function (e) {
            let t = E();
            o.qN.updateSetting({ ...t, ...e });
        },
    },
);
