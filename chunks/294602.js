r.d(n, {
    B: function () {
        return s;
    }
});
var i = r(399606),
    a = r(581883),
    o = r(247206);
let s = () => {
    let e = (0, i.cj)([a.Z], () => {
        var e, n;
        return null !== (n = null === (e = a.Z.settings.textAndImages) || void 0 === e ? void 0 : e.explicitContentSettings) && void 0 !== n ? n : (0, o.l4)();
    });
    return {
        explicitContentGuilds: (0, o.tG)({ setting: null == e ? void 0 : e.explicitContentGuilds }),
        explicitContentNonFriendDm: (0, o.tG)({
            setting: null == e ? void 0 : e.explicitContentNonFriendDm,
            isDm: !0
        }),
        explicitContentFriendDm: (0, o.tG)({
            setting: null == e ? void 0 : e.explicitContentFriendDm,
            isDm: !0,
            isFriend: !0
        })
    };
};
