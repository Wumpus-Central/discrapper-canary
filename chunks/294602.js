n.d(t, { B: () => s });
var i = n(399606),
    r = n(581883),
    a = n(247206);
let s = () => {
    let e = (0, i.cj)([r.Z], () => {
        var e, t;
        return null !== (t = null === (e = r.Z.settings.textAndImages) || void 0 === e ? void 0 : e.explicitContentSettings) && void 0 !== t ? t : (0, a.l4)();
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
