n.d(t, {
    R: () => o,
    g: () => l,
});
var r = n(417597),
    i = n(617617),
    a = n(632119),
    s = n(444802);
let o = () => {
        let e = (0, r.cf)([i.A], () => {
            var e, t;
            return null != (e = null == (t = i.A.settings.textAndImages) ? void 0 : t.explicitContentSettings)
                ? e
                : (0, a.C$)();
        });
        return {
            explicitContentGuilds: (0, a.Ys)({
                setting: null == e ? void 0 : e.explicitContentGuilds,
            }),
            explicitContentNonFriendDm: (0, a.Ys)({
                setting: null == e ? void 0 : e.explicitContentNonFriendDm,
                isDm: !0,
            }),
            explicitContentFriendDm: (0, a.Ys)({
                setting: null == e ? void 0 : e.explicitContentFriendDm,
                isDm: !0,
                isFriend: !0,
            }),
        };
    },
    l = () => {
        let e = (0, r.cf)([i.A], () => {
            var e, t;
            return null != (e = null == (t = i.A.settings.textAndImages) ? void 0 : t.goreContentSettings)
                ? e
                : (0, s.T4)();
        });
        return {
            goreContentGuilds: (0, s.gC)({
                setting: null == e ? void 0 : e.goreContentGuilds,
            }),
            goreContentNonFriendDm: (0, s.gC)({
                setting: null == e ? void 0 : e.goreContentNonFriendDm,
                isDm: !0,
            }),
            goreContentFriendDm: (0, s.gC)({
                setting: null == e ? void 0 : e.goreContentFriendDm,
                isDm: !0,
                isFriend: !0,
            }),
        };
    };
