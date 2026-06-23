n.d(e, { J6: () => s, Jz: () => c, ky: () => u, qY: () => d });
var r = n(873298),
    i = n(632119),
    l = n(444802),
    o = n(389462);
function u(t) {
    return null != t && t !== r.TO.UNSET_EXPLICIT_CONTENT_REDACTION;
}
function d(t, e) {
    let n = (function (t) {
        let { goreContentNonFriendDm: e, goreContentFriendDm: n } = o.oQ.getControlledSetting(t) ?? {};
        return {
            goreContentNonFriendDm: u(e) ? e : (0, l.jj)({ isDm: !0 }),
            goreContentFriendDm: u(n) ? n : (0, l.jj)({ isDm: !0, isFriend: !0 }),
            goreContentGuilds: r.TO.BLUR,
        };
    })(t);
    o.oQ.updateControlledSetting(t, { ...n, ...e });
}
function s(t) {
    let { teenId: e, setting: n, isFriend: r = !1 } = t;
    if (u(n)) return n;
    let l = o.sM.getControlledSetting(e);
    return r ? i.Bb[l] : i.fu[l];
}
function c(t, e) {
    let n,
        i =
            ((n = o.p7.getControlledSetting(t)),
            {
                explicitContentNonFriendDm: s({ teenId: t, setting: n?.explicitContentNonFriendDm }),
                explicitContentFriendDm: s({ teenId: t, setting: n?.explicitContentFriendDm, isFriend: !0 }),
                explicitContentGuilds: r.TO.BLUR,
            });
    o.p7.updateControlledSetting(t, { ...i, ...e });
}
