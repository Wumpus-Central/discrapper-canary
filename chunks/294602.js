n.d(t, {
    B: () => a,
    K: () => o
});
var i = n(399606),
    r = n(581883),
    s = n(656577),
    l = n(925513);
let a = () => {
        let e = (0, i.cj)([r.Z], () => {
            var e, t;
            return null != (t = null == (e = r.Z.settings.textAndImages) ? void 0 : e.explicitContentSettings) ? t : (0, s.l4)();
        });
        return {
            explicitContentGuilds: (0, s.ec)({ setting: null == e ? void 0 : e.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, s.ec)({
                setting: null == e ? void 0 : e.explicitContentNonFriendDm,
                isDm: !0
            }),
            explicitContentFriendDm: (0, s.ec)({
                setting: null == e ? void 0 : e.explicitContentFriendDm,
                isDm: !0,
                isFriend: !0
            })
        };
    },
    o = () => {
        let e = (0, i.cj)([r.Z], () => {
            var e, t;
            return null != (t = null == (e = r.Z.settings.textAndImages) ? void 0 : e.goreContentSettings) ? t : (0, l.O6)();
        });
        return {
            goreContentGuilds: (0, l._i)({ setting: null == e ? void 0 : e.goreContentGuilds }),
            goreContentNonFriendDm: (0, l._i)({
                setting: null == e ? void 0 : e.goreContentNonFriendDm,
                isDm: !0
            }),
            goreContentFriendDm: (0, l._i)({
                setting: null == e ? void 0 : e.goreContentFriendDm,
                isDm: !0,
                isFriend: !0
            })
        };
    };
