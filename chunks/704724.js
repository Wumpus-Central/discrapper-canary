n.d(e, { J6: () => s, Jz: () => c, ky: () => u, qY: () => d });
var i = n(873298),
    r = n(632119),
    o = n(444802),
    l = n(389462);
function u(t) {
    return null != t && t !== i.TO.UNSET_EXPLICIT_CONTENT_REDACTION;
}
function d(t, e) {
    let n = (function (t) {
        let { goreContentNonFriendDm: e, goreContentFriendDm: n } = l.oQ.getControlledSetting(t) ?? {};
        return {
            goreContentNonFriendDm: u(e) ? e : (0, o.jj)({ isDm: !0 }),
            goreContentFriendDm: u(n) ? n : (0, o.jj)({ isDm: !0, isFriend: !0 }),
            goreContentGuilds: i.TO.BLUR,
        };
    })(t);
    l.oQ.updateControlledSetting(t, { ...n, ...e });
}
function s(t) {
    let { teenId: e, setting: n, isFriend: i = !1 } = t;
    if (u(n)) return n;
    let o = l.sM.getControlledSetting(e);
    return i ? r.Bb[o] : r.fu[o];
}
function c(t, e) {
    let n,
        r =
            ((n = l.p7.getControlledSetting(t)),
            {
                explicitContentNonFriendDm: s({ teenId: t, setting: n?.explicitContentNonFriendDm }),
                explicitContentFriendDm: s({ teenId: t, setting: n?.explicitContentFriendDm, isFriend: !0 }),
                explicitContentGuilds: i.TO.BLUR,
            });
    l.p7.updateControlledSetting(t, { ...r, ...e });
}
