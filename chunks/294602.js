n.d(t, { B: () => o });
var r = n(399606),
    i = n(581883),
    a = n(247206);
let o = () => {
    let e = (0, r.cj)([i.Z], () => {
        var e, t;
        return null != (t = null == (e = i.Z.settings.textAndImages) ? void 0 : e.explicitContentSettings) ? t : (0, a.l4)();
    });
    return {
        explicitContentGuilds: (0, a.tG)({ setting: null == e ? void 0 : e.explicitContentGuilds }),
        explicitContentNonFriendDm: (0, a.tG)({
            setting: null == e ? void 0 : e.explicitContentNonFriendDm,
            isDm: !0
        }),
        explicitContentFriendDm: (0, a.tG)({
            setting: null == e ? void 0 : e.explicitContentFriendDm,
            isDm: !0,
            isFriend: !0
        })
    };
};
