var E = i(620632),
    n = i(73153),
    _ = i(724165),
    d = i(61310),
    l = i(652215);
i.d(
    t,
    {},
    {
        GL: async function (e, t) {
            let {
                nick: i,
                avatar: a,
                avatarDescription: s,
                avatarId: o,
                avatarDecoration: r,
                nameplate: u,
                displayNameStyles: S,
                avatarOriginalMd5: I,
            } = t;
            if (null == e) throw Error("Need guildId");
            n.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT", guildId: e });
            let c = {
                nick: i,
                avatar: a,
                avatar_description: s,
                avatar_id: o,
                avatar_decoration_sku_id: void 0 !== r ? (r?.skuId ?? null) : void 0,
                collectibles: void 0 !== u ? { nameplate: null === u ? null : { sku_id: u.skuId } } : void 0,
                display_name_font_id: void 0 !== S ? (null !== S ? S.fontId : null) : void 0,
                display_name_effect_id: void 0 !== S ? (null !== S ? S.effectId : null) : void 0,
                display_name_colors: void 0 !== S ? (null !== S ? S.colors : null) : void 0,
            };
            try {
                let t = await E.Bo.patch({
                        url: l.Rsh.SET_GUILD_MEMBER(e),
                        body: c,
                        headers: _.A.buildHeadersForMd5({ [d.f.USER_GUILD_PROFILE_AVATAR]: I }),
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    }),
                    i = t.body;
                return (
                    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS", guildId: e }),
                    n.h.dispatch({ type: "GUILD_MEMBER_PROFILE_UPDATE", guildMember: i, guildId: e }),
                    (null != a || null != o) && n.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
                    t
                );
            } catch (i) {
                let t = i.body;
                return (
                    t?.username != null && ((t.nick = t.username), delete t.username),
                    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", guildId: e, errors: i.body }),
                    i
                );
            }
        },
        IM: function () {
            n.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
        },
        JJ: function (e) {
            n.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: e });
        },
        RE: function () {
            n.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
        },
        V2: function (e) {
            n.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT", guildId: e });
        },
        go: function () {
            n.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
        },
        x8: function () {
            n.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
        },
    },
);
