n.d(t, {
    Fj: () => f,
    _: () => u,
    qn: () => d
});
var r = n(768494),
    i = n(695346),
    o = n(991621),
    a = n(936141),
    s = n(656577),
    l = n(925513),
    c = n(981631),
    u = (function (e) {
        return ((e.EXPLICIT = 'explicit'), (e.GORE = 'gore'), e);
    })({}),
    d = (function (e) {
        return ((e[(e.NONE = 0)] = 'NONE'), (e[(e.EXPLICIT = 1)] = 'EXPLICIT'), (e[(e.GORE = 2)] = 'GORE'), (e[(e.ALL = 3)] = 'ALL'), e);
    })({});
let f = {
    explicit: {
        harmType: 'explicit',
        obscureReason: a.wk.EXPLICIT_CONTENT,
        attachmentFlag: c.J0y.CONTAINS_EXPLICIT_MEDIA,
        embedFlag: c.xPJ.CONTAINS_EXPLICIT_MEDIA,
        genericMediaFlag: r.Cb.EXPLICIT,
        bitmask: 1,
        devSettingKey: 'obscure_blur_effect_explicit_content_enabled',
        getProtoUserSettings: (e) => {
            var t;
            let n = null == e || null == (t = e.textAndImages) ? void 0 : t.explicitContentSettings;
            return {
                [o.n.GUILD]: null == n ? void 0 : n.explicitContentGuilds,
                [o.n.FRIEND_DM]: null == n ? void 0 : n.explicitContentFriendDm,
                [o.n.NON_FRIEND_DM]: null == n ? void 0 : n.explicitContentNonFriendDm
            };
        },
        getUserSettingsWithDefaults: (e) => {
            var t, n, r;
            let a =
                null != e
                    ? e
                    : {
                          [o.n.GUILD]: null == (t = i.Sh.getSetting()) ? void 0 : t.explicitContentGuilds,
                          [o.n.FRIEND_DM]: null == (n = i.Sh.getSetting()) ? void 0 : n.explicitContentFriendDm,
                          [o.n.NON_FRIEND_DM]: null == (r = i.Sh.getSetting()) ? void 0 : r.explicitContentNonFriendDm
                      };
            return {
                [o.n.GUILD]: (0, s.ec)({ setting: null == a ? void 0 : a[o.n.GUILD] }),
                [o.n.FRIEND_DM]: (0, s.ec)({
                    setting: null == a ? void 0 : a[o.n.FRIEND_DM],
                    isDm: !0,
                    isFriend: !0
                }),
                [o.n.NON_FRIEND_DM]: (0, s.ec)({
                    setting: null == a ? void 0 : a[o.n.NON_FRIEND_DM],
                    isDm: !0
                })
            };
        }
    },
    gore: {
        harmType: 'gore',
        obscureReason: a.wk.GORE_CONTENT,
        attachmentFlag: c.J0y.CONTAINS_GORE_CONTENT,
        embedFlag: c.xPJ.CONTAINS_GORE_CONTENT,
        genericMediaFlag: r.Cb.GORE,
        bitmask: 2,
        devSettingKey: 'obscure_blur_effect_gore_content_enabled',
        getProtoUserSettings: (e) => {
            var t;
            let n = null == e || null == (t = e.textAndImages) ? void 0 : t.goreContentSettings;
            return {
                [o.n.GUILD]: null == n ? void 0 : n.goreContentGuilds,
                [o.n.FRIEND_DM]: null == n ? void 0 : n.goreContentFriendDm,
                [o.n.NON_FRIEND_DM]: null == n ? void 0 : n.goreContentNonFriendDm
            };
        },
        getUserSettingsWithDefaults: (e) => {
            var t, n, r;
            let a =
                null != e
                    ? e
                    : {
                          [o.n.GUILD]: null == (t = i.j7.getSetting()) ? void 0 : t.goreContentGuilds,
                          [o.n.FRIEND_DM]: null == (n = i.j7.getSetting()) ? void 0 : n.goreContentFriendDm,
                          [o.n.NON_FRIEND_DM]: null == (r = i.j7.getSetting()) ? void 0 : r.goreContentNonFriendDm
                      };
            return {
                [o.n.GUILD]: (0, l._i)({ setting: null == a ? void 0 : a[o.n.GUILD] }),
                [o.n.FRIEND_DM]: (0, l._i)({
                    setting: null == a ? void 0 : a[o.n.FRIEND_DM],
                    isDm: !0,
                    isFriend: !0
                }),
                [o.n.NON_FRIEND_DM]: (0, l._i)({
                    setting: null == a ? void 0 : a[o.n.NON_FRIEND_DM],
                    isDm: !0
                })
            };
        }
    }
};
