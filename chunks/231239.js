var o = n(990547),
    r = n(283693),
    i = n(570140),
    a = n(573261),
    c = n(981631);
t.Z = {
    signup: (e, t) =>
        a.Z.post({
            url: c.ANM.HUB_WAITLIST_SIGNUP,
            body: {
                email: e,
                school: t
            },
            trackedActionData: {
                event: o.NetworkActionNames.HUB_WAITLIST_SIGNUP,
                properties: (e) => {
                    var t;
                    let n = !1,
                        o = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.email_domain;
                    return null != o && (n = -1 !== o.split('.').indexOf('edu')), (0, r.iG)({ is_edu_email: n });
                }
            },
            rejectWithError: !1
        }),
    sendVerificationEmail: async (e, t, n) =>
        (
            await a.Z.post({
                url: c.ANM.HUB_EMAIL_VERIFY_SEND,
                body: {
                    email: e,
                    guild_id: n,
                    allow_multiple_guilds: t,
                    use_verification_code: !0
                },
                trackedActionData: {
                    event: o.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
                    properties: (e) => {
                        var t;
                        let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.has_matching_guild;
                        return (0, r.iG)({ has_matching_guild: n });
                    }
                },
                rejectWithError: !1
            })
        ).body,
    async verify(e) {
        if (null != e)
            try {
                var t;
                let n = await a.Z.post({
                        url: c.ANM.HUB_EMAIL_VERIFY,
                        body: { token: e },
                        trackedActionData: { event: o.NetworkActionNames.HUB_EMAIL_VERIFY },
                        rejectWithError: !1
                    }),
                    r = null === (t = n.body.guild) || void 0 === t ? void 0 : t.id;
                i.Z.dispatch({
                    type: 'HUB_VERIFY_EMAIL_SUCCESS',
                    guildId: r
                });
            } catch (e) {
                i.Z.dispatch({
                    type: 'HUB_VERIFY_EMAIL_FAILURE',
                    errors: e.body
                });
            }
    },
    async verifyCode(e, t, n) {
        if (null != e)
            try {
                var r;
                let l = await a.Z.post({
                        url: c.ANM.HUB_EMAIL_VERIFY_CODE,
                        body: {
                            code: e,
                            guild_id: t,
                            email: n
                        },
                        trackedActionData: { event: o.NetworkActionNames.HUB_EMAIL_VERIFY },
                        rejectWithError: !1
                    }),
                    _ = null === (r = l.body.guild) || void 0 === r ? void 0 : r.id;
                return (
                    i.Z.dispatch({
                        type: 'HUB_VERIFY_EMAIL_SUCCESS',
                        guildId: _
                    }),
                    l.body
                );
            } catch (e) {
                throw (
                    (i.Z.dispatch({
                        type: 'HUB_VERIFY_EMAIL_FAILURE',
                        errors: e.body
                    }),
                    e)
                );
            }
    }
};
