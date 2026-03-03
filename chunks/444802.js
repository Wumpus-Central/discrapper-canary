"use strict";
n.d(t, { T4: () => p, WX: () => m, gC: () => c, jj: () => f, qY: () => h });
var r = n(64700),
    i = n(923457),
    s = n(873298),
    a = n(207560),
    o = n(253932),
    l = n(287809),
    u = n(652215);
let c = (e) => {
        let { setting: t, isDm: n = !1, isFriend: r = !1 } = e;
        if (null != t && t !== s.TO.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let o = l.default.getCurrentUser();
        return (0, a.To)(i.p.SENSITIVE_CONTENT)
            ? d({ isDm: n, isFriend: r })
            : o?.nsfwAllowed === !1
              ? f({ isDm: n, isFriend: r })
              : _({ isDm: n, isFriend: r });
    },
    d = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && !n ? s.TO.BLOCK : s.TO.BLUR;
    },
    _ = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && n ? s.TO.SHOW : t ? s.TO.BLOCK : s.TO.SHOW;
    },
    f = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && n ? s.TO.BLUR : t ? s.TO.BLOCK : s.TO.BLUR;
    },
    p = (e) => {
        let t = e ?? o.qN.getSetting();
        return {
            goreContentGuilds: c({ setting: t?.goreContentGuilds }),
            goreContentNonFriendDm: c({ setting: t?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: c({ setting: t?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        };
    },
    h = (e) => {
        let t = p();
        o.qN.updateSetting({ ...t, ...e });
    },
    m = () => r.useMemo(() => u.MVz.EXPLICIT_MEDIA_REDACTION, []);
