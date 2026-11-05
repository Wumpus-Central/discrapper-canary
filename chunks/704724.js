var i = n(873298),
    r = n(632119),
    o = n(444802),
    l = n(389462),
    u = n(620432);
function d(t) {
    return null != t && t !== i.TO.UNSET_EXPLICIT_CONTENT_REDACTION;
}
function s(t) {
    let { teenId: e, setting: n, isFriend: i = !1 } = t;
    if (d(n)) return n;
    let o = l.sM.getControlledSetting(e);
    return i ? r.Bb[o] : r.fu[o];
}
n.d(
    e,
    {},
    {
        J6: s,
        Jz: function (t, e) {
            let n,
                r =
                    ((n = l.p7.getControlledSetting(t)),
                    {
                        explicitContentNonFriendDm: s({ teenId: t, setting: n?.explicitContentNonFriendDm }),
                        explicitContentFriendDm: s({ teenId: t, setting: n?.explicitContentFriendDm, isFriend: !0 }),
                        explicitContentGuilds: i.TO.BLUR,
                    });
            (0, u._)(l.p7.updateControlledSetting(t, { ...r, ...e }));
        },
        ky: d,
        qY: function (t, e) {
            let n = (function (t) {
                let { goreContentNonFriendDm: e, goreContentFriendDm: n } = l.oQ.getControlledSetting(t) ?? {};
                return {
                    goreContentNonFriendDm: d(e) ? e : (0, o.jj)({ isDm: !0 }),
                    goreContentFriendDm: d(n) ? n : (0, o.jj)({ isDm: !0, isFriend: !0 }),
                    goreContentGuilds: i.TO.BLUR,
                };
            })(t);
            (0, u._)(l.oQ.updateControlledSetting(t, { ...n, ...e }));
        },
    },
);
