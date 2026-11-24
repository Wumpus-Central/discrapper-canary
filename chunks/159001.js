var e = E(620632),
    i = E(73153),
    d = E(724165),
    n = E(61310),
    l = E(652215);
E.d(
    t,
    {},
    {
        GL: async function (_, t) {
            let {
                nick: E,
                avatar: o,
                avatarDescription: a,
                avatarId: s,
                avatarDecoration: S,
                nameplate: r,
                displayNameStyles: I,
                avatarOriginalMd5: u,
            } = t;
            if (null == _) throw Error("Need guildId");
            i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT", guildId: _ });
            let R = {
                nick: E,
                avatar: o,
                avatar_description: a,
                avatar_id: s,
                avatar_decoration_sku_id: void 0 !== S ? (S?.skuId ?? null) : void 0,
                collectibles: void 0 !== r ? { nameplate: null === r ? null : { sku_id: r.skuId } } : void 0,
                display_name_font_id: void 0 !== I ? (null !== I ? I.fontId : null) : void 0,
                display_name_effect_id: void 0 !== I ? (null !== I ? I.effectId : null) : void 0,
                display_name_colors: void 0 !== I ? (null !== I ? I.colors : null) : void 0,
            };
            try {
                let t = await e.Bo.patch({
                        url: l.Rsh.SET_GUILD_MEMBER(_),
                        body: R,
                        headers: d.A.buildHeadersForMd5({ [n.f.USER_GUILD_PROFILE_AVATAR]: u }),
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    }),
                    E = t.body;
                return (
                    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS", guildId: _ }),
                    i.h.dispatch({ type: "GUILD_MEMBER_PROFILE_UPDATE", guildMember: E, guildId: _ }),
                    (null != o || null != s) && i.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
                    t
                );
            } catch (E) {
                let t = E.body;
                return (
                    t?.username != null && ((t.nick = t.username), delete t.username),
                    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", guildId: _, errors: E.body }),
                    E
                );
            }
        },
        IM: function () {
            i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
        },
        JJ: function (_) {
            i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: _ });
        },
        RE: function () {
            i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
        },
        V2: function (_) {
            i.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT", guildId: _ });
        },
        go: function () {
            i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
        },
        x8: function () {
            i.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
        },
    },
);
