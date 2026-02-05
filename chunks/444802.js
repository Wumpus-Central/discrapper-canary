"use strict";
n.d(t, { T4: () => h, WX: () => g, gC: () => d, jj: () => p, qY: () => m });
var r = n(64700),
    i = n(923457),
    a = n(873298),
    s = n(207560),
    o = n(64313),
    l = n(253932),
    u = n(287809),
    c = n(652215);
let d = (e) => {
        let { setting: t, isDm: n = !1, isFriend: r = !1 } = e;
        if (null != t && t !== a.TO.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let l = u.default.getCurrentUser(),
            c = (0, o.o)("resolveExplicitContentSettingWithDefaults");
        return (0, s.To)(i.p.SENSITIVE_CONTENT) || c
            ? _({ isDm: n, isFriend: r })
            : l?.nsfwAllowed === !1
              ? p({ isDm: n, isFriend: r })
              : f({ isDm: n, isFriend: r });
    },
    _ = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && !n ? a.TO.BLOCK : a.TO.BLUR;
    },
    f = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && n ? a.TO.SHOW : t ? a.TO.BLOCK : a.TO.SHOW;
    },
    p = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && n ? a.TO.BLUR : t ? a.TO.BLOCK : a.TO.BLUR;
    },
    h = (e) => {
        let t = e ?? l.qN.getSetting();
        return {
            goreContentGuilds: d({ setting: t?.goreContentGuilds }),
            goreContentNonFriendDm: d({ setting: t?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: d({ setting: t?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        };
    },
    m = (e) => {
        let t = h();
        l.qN.updateSetting({ ...t, ...e });
    },
    g = () => r.useMemo(() => c.MVz.EXPLICIT_MEDIA_REDACTION, []);
