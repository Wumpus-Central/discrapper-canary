n.d(t, {
    B: () => s,
    K: () => l
});
var r = n(399606),
    i = n(581883),
    o = n(656577),
    a = n(925513);
let s = () => {
        let e = (0, r.cj)([i.Z], () => {
            var e, t;
            return null != (t = null == (e = i.Z.settings.textAndImages) ? void 0 : e.explicitContentSettings) ? t : (0, o.l4)();
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
    },
    l = () => {
        let e = (0, r.cj)([i.Z], () => {
            var e, t;
            return null != (t = null == (e = i.Z.settings.textAndImages) ? void 0 : e.goreContentSettings) ? t : (0, a.O6)();
        });
        return {
            goreContentGuilds: (0, a._i)({ setting: null == e ? void 0 : e.goreContentGuilds }),
            goreContentNonFriendDm: (0, a._i)({
                setting: null == e ? void 0 : e.goreContentNonFriendDm,
                isDm: !0
            }),
            goreContentFriendDm: (0, a._i)({
                setting: null == e ? void 0 : e.goreContentFriendDm,
                isDm: !0,
                isFriend: !0
            })
        };
    };
