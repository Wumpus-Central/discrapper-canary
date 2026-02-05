n.d(t, { J6: () => c, Jz: () => d, ky: () => l, qY: () => o });
var i = n(873298),
    s = n(632119),
    r = n(444802),
    a = n(93857);
let l = (e) => null != e && e !== i.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    o = (e, t) => {
        let n = ((e) => {
            let { goreContentNonFriendDm: t, goreContentFriendDm: n } = a.oQ.getControlledSetting(e) ?? {};
            return {
                goreContentNonFriendDm: l(t) ? t : (0, r.jj)({ isDm: !0 }),
                goreContentFriendDm: l(n) ? n : (0, r.jj)({ isDm: !0, isFriend: !0 }),
                goreContentGuilds: i.TO.BLUR,
            };
        })(e);
        a.oQ.updateControlledSetting(e, { ...n, ...t });
    },
    c = (e) => {
        let { teenId: t, setting: n, isFriend: i = !1 } = e;
        if (l(n)) return n;
        let r = a.sM.getControlledSetting(t);
        return i ? s.Bb[r] : s.fu[r];
    },
    d = (e, t) => {
        let n,
            s =
                ((n = a.p7.getControlledSetting(e)),
                {
                    explicitContentNonFriendDm: c({ teenId: e, setting: n?.explicitContentNonFriendDm }),
                    explicitContentFriendDm: c({ teenId: e, setting: n?.explicitContentFriendDm, isFriend: !0 }),
                    explicitContentGuilds: i.TO.BLUR,
                });
        a.p7.updateControlledSetting(e, { ...s, ...t });
    };
