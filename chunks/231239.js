n.d(t, { Z: () => o });
var l = n(990547),
    i = n(283693),
    s = n(570140),
    a = n(573261),
    r = n(981631);
let o = {
    signup: (e, t) =>
        a.Z.post({
            url: r.ANM.HUB_WAITLIST_SIGNUP,
            body: {
                email: e,
                school: t
            },
            trackedActionData: {
                event: l.NetworkActionNames.HUB_WAITLIST_SIGNUP,
                properties: (e) => {
                    var t;
                    let n = !1,
                        l = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.email_domain;
                    return null != l && (n = -1 !== l.split('.').indexOf('edu')), (0, i.iG)({ is_edu_email: n });
                }
            },
            rejectWithError: !1
        }),
    sendVerificationEmail: async (e, t, n) =>
        (
            await a.Z.post({
                url: r.ANM.HUB_EMAIL_VERIFY_SEND,
                body: {
                    email: e,
                    guild_id: n,
                    allow_multiple_guilds: t,
                    use_verification_code: !0
                },
                trackedActionData: {
                    event: l.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
                    properties: (e) => {
                        var t;
                        let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.has_matching_guild;
                        return (0, i.iG)({ has_matching_guild: n });
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
                        url: r.ANM.HUB_EMAIL_VERIFY,
                        body: { token: e },
                        trackedActionData: { event: l.NetworkActionNames.HUB_EMAIL_VERIFY },
                        rejectWithError: !1
                    }),
                    i = null === (t = n.body.guild) || void 0 === t ? void 0 : t.id;
                s.Z.dispatch({
                    type: 'HUB_VERIFY_EMAIL_SUCCESS',
                    guildId: i
                });
            } catch (e) {
                s.Z.dispatch({
                    type: 'HUB_VERIFY_EMAIL_FAILURE',
                    errors: e.body
                });
            }
    },
    async verifyCode(e, t, n) {
        if (null != e)
            try {
                var i;
                let o = await a.Z.post({
                        url: r.ANM.HUB_EMAIL_VERIFY_CODE,
                        body: {
                            code: e,
                            guild_id: t,
                            email: n
                        },
                        trackedActionData: { event: l.NetworkActionNames.HUB_EMAIL_VERIFY },
                        rejectWithError: !1
                    }),
                    c = null === (i = o.body.guild) || void 0 === i ? void 0 : i.id;
                return (
                    s.Z.dispatch({
                        type: 'HUB_VERIFY_EMAIL_SUCCESS',
                        guildId: c
                    }),
                    o.body
                );
            } catch (e) {
                throw (
                    (s.Z.dispatch({
                        type: 'HUB_VERIFY_EMAIL_FAILURE',
                        errors: e.body
                    }),
                    e)
                );
            }
    }
};
