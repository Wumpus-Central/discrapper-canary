n.d(t, {
    Fj: () => p,
    _: () => d,
    qn: () => f,
});
var r = n(524437),
    i = n(768494),
    a = n(695346),
    o = n(991621),
    s = n(936141),
    l = n(656577),
    c = n(925513),
    u = n(981631),
    d = (function (e) {
        return (e.EXPLICIT = "explicit"), (e.GORE = "gore"), (e.SELF_HARM = "self_harm"), e;
    })({}),
    f = (function (e) {
        return (
            (e[(e.NONE = 0)] = "NONE"),
            (e[(e.EXPLICIT = 1)] = "EXPLICIT"),
            (e[(e.GORE = 2)] = "GORE"),
            (e[(e.SELF_HARM = 4)] = "SELF_HARM"),
            (e[(e.ALL = 7)] = "ALL"),
            e
        );
    })({});
let p = {
    explicit: {
        harmType: "explicit",
        obscureReason: s.wk.EXPLICIT_CONTENT,
        attachmentFlag: u.J0y.CONTAINS_EXPLICIT_MEDIA,
        embedFlag: u.xPJ.CONTAINS_EXPLICIT_MEDIA,
        genericMediaFlag: i.Cb.EXPLICIT,
        bitmask: 1,
        devSettingKey: "obscure_blur_effect_explicit_content_enabled",
        getProtoUserSettings: (e) => {
            var t;
            let n = null == e || null == (t = e.textAndImages) ? void 0 : t.explicitContentSettings;
            return {
                [o.n.GUILD]: null == n ? void 0 : n.explicitContentGuilds,
                [o.n.FRIEND_DM]: null == n ? void 0 : n.explicitContentFriendDm,
                [o.n.NON_FRIEND_DM]: null == n ? void 0 : n.explicitContentNonFriendDm,
            };
        },
        getUserSettingsWithDefaults: (e) => {
            var t, n, r;
            let i =
                null != e
                    ? e
                    : {
                          [o.n.GUILD]: null == (t = a.Sh.getSetting()) ? void 0 : t.explicitContentGuilds,
                          [o.n.FRIEND_DM]: null == (n = a.Sh.getSetting()) ? void 0 : n.explicitContentFriendDm,
                          [o.n.NON_FRIEND_DM]: null == (r = a.Sh.getSetting()) ? void 0 : r.explicitContentNonFriendDm,
                      };
            return {
                [o.n.GUILD]: (0, l.ec)({ setting: null == i ? void 0 : i[o.n.GUILD] }),
                [o.n.FRIEND_DM]: (0, l.ec)({
                    setting: null == i ? void 0 : i[o.n.FRIEND_DM],
                    isDm: !0,
                    isFriend: !0,
                }),
                [o.n.NON_FRIEND_DM]: (0, l.ec)({
                    setting: null == i ? void 0 : i[o.n.NON_FRIEND_DM],
                    isDm: !0,
                }),
            };
        },
    },
    gore: {
        harmType: "gore",
        obscureReason: s.wk.GORE_CONTENT,
        attachmentFlag: u.J0y.CONTAINS_GORE_CONTENT,
        embedFlag: u.xPJ.CONTAINS_GORE_CONTENT,
        genericMediaFlag: i.Cb.GORE,
        bitmask: 2,
        devSettingKey: "obscure_blur_effect_gore_content_enabled",
        getProtoUserSettings: (e) => {
            var t;
            let n = null == e || null == (t = e.textAndImages) ? void 0 : t.goreContentSettings;
            return {
                [o.n.GUILD]: null == n ? void 0 : n.goreContentGuilds,
                [o.n.FRIEND_DM]: null == n ? void 0 : n.goreContentFriendDm,
                [o.n.NON_FRIEND_DM]: null == n ? void 0 : n.goreContentNonFriendDm,
            };
        },
        getUserSettingsWithDefaults: (e) => {
            var t, n, r;
            let i =
                null != e
                    ? e
                    : {
                          [o.n.GUILD]: null == (t = a.j7.getSetting()) ? void 0 : t.goreContentGuilds,
                          [o.n.FRIEND_DM]: null == (n = a.j7.getSetting()) ? void 0 : n.goreContentFriendDm,
                          [o.n.NON_FRIEND_DM]: null == (r = a.j7.getSetting()) ? void 0 : r.goreContentNonFriendDm,
                      };
            return {
                [o.n.GUILD]: (0, c._i)({ setting: null == i ? void 0 : i[o.n.GUILD] }),
                [o.n.FRIEND_DM]: (0, c._i)({
                    setting: null == i ? void 0 : i[o.n.FRIEND_DM],
                    isDm: !0,
                    isFriend: !0,
                }),
                [o.n.NON_FRIEND_DM]: (0, c._i)({
                    setting: null == i ? void 0 : i[o.n.NON_FRIEND_DM],
                    isDm: !0,
                }),
            };
        },
    },
    self_harm: {
        harmType: "self_harm",
        obscureReason: s.wk.SELF_HARM_CONTENT,
        attachmentFlag: u.J0y.CONTAINS_SELF_HARM_CONTENT,
        embedFlag: u.xPJ.CONTAINS_SELF_HARM_CONTENT,
        genericMediaFlag: i.Cb.SELF_HARM,
        bitmask: 4,
        devSettingKey: "obscure_blur_effect_self_harm_content_enabled",
        getProtoUserSettings: (e) => {
            var t;
            let n = null == e || null == (t = e.textAndImages) ? void 0 : t.selfHarmContentSettings;
            return {
                [o.n.GUILD]: null == n ? void 0 : n.selfHarmContentGuilds,
                [o.n.FRIEND_DM]: null == n ? void 0 : n.selfHarmContentFriendDm,
                [o.n.NON_FRIEND_DM]: null == n ? void 0 : n.selfHarmContentNonFriendDm,
            };
        },
        getUserSettingsWithDefaults: () => ({
            [o.n.GUILD]: r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
            [o.n.FRIEND_DM]: r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
            [o.n.NON_FRIEND_DM]: r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
        }),
    },
};
