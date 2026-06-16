n.d(t, { J6: () => s, Jz: () => a, ky: () => u, qY: () => d });
var r = n(873298),
    l = n(632119),
    i = n(444802),
    o = n(389462);
let u = (e) => null != e && e !== r.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    d = (e, t) => {
        let n = ((e) => {
            let { goreContentNonFriendDm: t, goreContentFriendDm: n } = o.oQ.getControlledSetting(e) ?? {};
            return {
                goreContentNonFriendDm: u(t) ? t : (0, i.jj)({ isDm: !0 }),
                goreContentFriendDm: u(n) ? n : (0, i.jj)({ isDm: !0, isFriend: !0 }),
                goreContentGuilds: r.TO.BLUR,
            };
        })(e);
        o.oQ.updateControlledSetting(e, { ...n, ...t });
    },
    s = (e) => {
        let { teenId: t, setting: n, isFriend: r = !1 } = e;
        if (u(n)) return n;
        let i = o.sM.getControlledSetting(t);
        return r ? l.Bb[i] : l.fu[i];
    },
    a = (e, t) => {
        let n,
            l =
                ((n = o.p7.getControlledSetting(e)),
                {
                    explicitContentNonFriendDm: s({ teenId: e, setting: n?.explicitContentNonFriendDm }),
                    explicitContentFriendDm: s({ teenId: e, setting: n?.explicitContentFriendDm, isFriend: !0 }),
                    explicitContentGuilds: r.TO.BLUR,
                });
        o.p7.updateControlledSetting(e, { ...l, ...t });
    };
