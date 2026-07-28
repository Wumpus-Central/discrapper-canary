"use strict";
n.d(t, { T4: () => _, WX: () => A, gC: () => c, jj: () => u, qY: () => E });
var i = n(582128),
    r = n(923457),
    a = n(873298),
    s = n(207560),
    l = n(885386),
    o = n(287809),
    d = n(652215);
function c(e) {
    let { setting: t, isDm: n = !1, isFriend: i = !1 } = e;
    if (null != t && t !== a.TO.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
    let l = o.default.getCurrentUser();
    return (0, s.To)(r.p.SENSITIVE_CONTENT)
        ? (function (e) {
              let { isDm: t = !1, isFriend: n = !1 } = e;
              return t && !n ? a.TO.BLOCK : a.TO.BLUR;
          })({ isDm: n, isFriend: i })
        : l?.nsfwAllowed === !1
          ? u({ isDm: n, isFriend: i })
          : (function (e) {
                let { isDm: t = !1, isFriend: n = !1 } = e;
                return t && n ? a.TO.SHOW : t ? a.TO.BLOCK : a.TO.SHOW;
            })({ isDm: n, isFriend: i });
}
function u(e) {
    let { isDm: t = !1, isFriend: n = !1 } = e;
    return t && n ? a.TO.BLUR : t ? a.TO.BLOCK : a.TO.BLUR;
}
function _(e) {
    let t = e ?? l.qN.getSetting();
    return {
        goreContentGuilds: c({ setting: t?.goreContentGuilds }),
        goreContentNonFriendDm: c({ setting: t?.goreContentNonFriendDm, isDm: !0 }),
        goreContentFriendDm: c({ setting: t?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
    };
}
function E(e) {
    let t = _();
    l.qN.updateSetting({ ...t, ...e });
}
function A() {
    return i.useMemo(() => d.MVz.EXPLICIT_MEDIA_REDACTION, []);
}
