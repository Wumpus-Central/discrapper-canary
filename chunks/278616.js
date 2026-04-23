n.d(t, { R: () => r, g: () => o });
var i = n(417597),
    s = n(617617),
    l = n(632119),
    a = n(444802);
let r = () => {
        let e = (0, i.cf)([s.A], () => s.A.settings.textAndImages?.explicitContentSettings ?? (0, l.C$)());
        return {
            explicitContentGuilds: (0, l.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, l.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, l.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        };
    },
    o = () => {
        let e = (0, i.cf)([s.A], () => s.A.settings.textAndImages?.goreContentSettings ?? (0, a.T4)());
        return {
            goreContentGuilds: (0, a.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, a.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, a.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        };
    };
