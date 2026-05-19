n.d(t, { J6: () => u, Jz: () => a, ky: () => d, qY: () => s });
var i = n(873298),
    l = n(632119),
    r = n(444802),
    o = n(389462);
let d = (e) => null != e && e !== i.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    s = (e, t) => {
        let n = ((e) => {
            let { goreContentNonFriendDm: t, goreContentFriendDm: n } = o.oQ.getControlledSetting(e) ?? {};
            return {
                goreContentNonFriendDm: d(t) ? t : (0, r.jj)({ isDm: !0 }),
                goreContentFriendDm: d(n) ? n : (0, r.jj)({ isDm: !0, isFriend: !0 }),
                goreContentGuilds: i.TO.BLUR,
            };
        })(e);
        o.oQ.updateControlledSetting(e, { ...n, ...t });
    },
    u = (e) => {
        let { teenId: t, setting: n, isFriend: i = !1 } = e;
        if (d(n)) return n;
        let r = o.sM.getControlledSetting(t);
        return i ? l.Bb[r] : l.fu[r];
    },
    a = (e, t) => {
        let n,
            l =
                ((n = o.p7.getControlledSetting(e)),
                {
                    explicitContentNonFriendDm: u({ teenId: e, setting: n?.explicitContentNonFriendDm }),
                    explicitContentFriendDm: u({ teenId: e, setting: n?.explicitContentFriendDm, isFriend: !0 }),
                    explicitContentGuilds: i.TO.BLUR,
                });
        o.p7.updateControlledSetting(e, { ...l, ...t });
    };
