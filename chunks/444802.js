"use strict";
n.d(t, { T4: () => _, WX: () => f, gC: () => c, jj: () => d, qY: () => h });
var i = n(64700),
    r = n(923457),
    s = n(873298),
    a = n(207560),
    o = n(885386),
    l = n(287809),
    u = n(652215);
function c(e) {
    let { setting: t, isDm: n = !1, isFriend: i = !1 } = e;
    if (null != t && t !== s.TO.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
    let o = l.default.getCurrentUser();
    return (0, a.To)(r.p.SENSITIVE_CONTENT)
        ? (function (e) {
              let { isDm: t = !1, isFriend: n = !1 } = e;
              return t && !n ? s.TO.BLOCK : s.TO.BLUR;
          })({ isDm: n, isFriend: i })
        : o?.nsfwAllowed === !1
          ? d({ isDm: n, isFriend: i })
          : (function (e) {
                let { isDm: t = !1, isFriend: n = !1 } = e;
                return t && n ? s.TO.SHOW : t ? s.TO.BLOCK : s.TO.SHOW;
            })({ isDm: n, isFriend: i });
}
function d(e) {
    let { isDm: t = !1, isFriend: n = !1 } = e;
    return t && n ? s.TO.BLUR : t ? s.TO.BLOCK : s.TO.BLUR;
}
function _(e) {
    let t = e ?? o.qN.getSetting();
    return {
        goreContentGuilds: c({ setting: t?.goreContentGuilds }),
        goreContentNonFriendDm: c({ setting: t?.goreContentNonFriendDm, isDm: !0 }),
        goreContentFriendDm: c({ setting: t?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
    };
}
function h(e) {
    let t = _();
    o.qN.updateSetting({ ...t, ...e });
}
function f() {
    return i.useMemo(() => u.MVz.EXPLICIT_MEDIA_REDACTION, []);
}
