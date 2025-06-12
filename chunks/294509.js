n.d(t, {
    Fj: () => f,
    _: () => d,
    qn: () => _
});
var r = n(768494),
    i = n(695346),
    a = n(991621),
    o = n(936141),
    s = n(470734),
    l = n(656577),
    c = n(925513),
    u = n(981631),
    d = (function (e) {
        return (e.EXPLICIT = 'explicit'), (e.GORE = 'gore'), e;
    })({}),
    _ = (function (e) {
        return (e[(e.NONE = 0)] = 'NONE'), (e[(e.EXPLICIT = 1)] = 'EXPLICIT'), (e[(e.GORE = 2)] = 'GORE'), (e[(e.ALL = 3)] = 'ALL'), e;
    })({});
let f = {
    explicit: {
        harmType: 'explicit',
        obscureReason: o.wk.EXPLICIT_CONTENT,
        attachmentFlag: u.J0y.CONTAINS_EXPLICIT_MEDIA,
        embedFlag: u.xPJ.CONTAINS_EXPLICIT_MEDIA,
        genericMediaFlag: r.Cb.EXPLICIT,
        bitmask: 1,
        devSettingKey: 'obscure_blur_effect_explicit_content_enabled',
        getProtoUserSettings: (e) => {
            var t;
            let n = null == e || null == (t = e.textAndImages) ? void 0 : t.explicitContentSettings;
            return {
                [a.n.GUILD]: null == n ? void 0 : n.explicitContentGuilds,
                [a.n.FRIEND_DM]: null == n ? void 0 : n.explicitContentFriendDm,
                [a.n.NON_FRIEND_DM]: null == n ? void 0 : n.explicitContentNonFriendDm
            };
        },
        getUserSettingsWithDefaults: (e) => {
            var t, n, r;
            let o =
                null != e
                    ? e
                    : {
                          [a.n.GUILD]: null == (t = i.Sh.getSetting()) ? void 0 : t.explicitContentGuilds,
                          [a.n.FRIEND_DM]: null == (n = i.Sh.getSetting()) ? void 0 : n.explicitContentFriendDm,
                          [a.n.NON_FRIEND_DM]: null == (r = i.Sh.getSetting()) ? void 0 : r.explicitContentNonFriendDm
                      };
            return {
                [a.n.GUILD]: (0, l.ec)({ setting: null == o ? void 0 : o[a.n.GUILD] }),
                [a.n.FRIEND_DM]: (0, l.ec)({
                    setting: null == o ? void 0 : o[a.n.FRIEND_DM],
                    isDm: !0,
                    isFriend: !0
                }),
                [a.n.NON_FRIEND_DM]: (0, l.ec)({
                    setting: null == o ? void 0 : o[a.n.NON_FRIEND_DM],
                    isDm: !0
                })
            };
        }
    },
    gore: {
        harmType: 'gore',
        obscureReason: o.wk.GORE_CONTENT,
        attachmentFlag: u.J0y.CONTAINS_GORE_CONTENT,
        embedFlag: u.xPJ.CONTAINS_GORE_CONTENT,
        genericMediaFlag: r.Cb.GORE,
        bitmask: 2,
        devSettingKey: 'obscure_blur_effect_gore_content_enabled',
        getProtoUserSettings: (e) => {
            var t;
            let n = null == e || null == (t = e.textAndImages) ? void 0 : t.goreContentSettings;
            return {
                [a.n.GUILD]: null == n ? void 0 : n.goreContentGuilds,
                [a.n.FRIEND_DM]: null == n ? void 0 : n.goreContentFriendDm,
                [a.n.NON_FRIEND_DM]: null == n ? void 0 : n.goreContentNonFriendDm
            };
        },
        getUserSettingsWithDefaults: (e) => {
            var t, n, r;
            let o =
                null != e
                    ? e
                    : {
                          [a.n.GUILD]: null == (t = i.j7.getSetting()) ? void 0 : t.goreContentGuilds,
                          [a.n.FRIEND_DM]: null == (n = i.j7.getSetting()) ? void 0 : n.goreContentFriendDm,
                          [a.n.NON_FRIEND_DM]: null == (r = i.j7.getSetting()) ? void 0 : r.goreContentNonFriendDm
                      };
            return {
                [a.n.GUILD]: (0, c._i)({ setting: null == o ? void 0 : o[a.n.GUILD] }),
                [a.n.FRIEND_DM]: (0, c._i)({
                    setting: null == o ? void 0 : o[a.n.FRIEND_DM],
                    isDm: !0,
                    isFriend: !0
                }),
                [a.n.NON_FRIEND_DM]: (0, c._i)({
                    setting: null == o ? void 0 : o[a.n.NON_FRIEND_DM],
                    isDm: !0
                })
            };
        },
        isEligible: () => (0, s.U2)('ContentPolicyRegistry')
    }
};
