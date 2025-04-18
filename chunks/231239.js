n.d(t, { Z: () => a }), n(35282);
var r = n(990547),
    i = n(283693),
    s = n(570140),
    o = n(573261),
    l = n(981631);
let a = {
    signup: (e, t) =>
        o.Z.post({
            url: l.ANM.HUB_WAITLIST_SIGNUP,
            body: {
                email: e,
                school: t
            },
            trackedActionData: {
                event: r.NetworkActionNames.HUB_WAITLIST_SIGNUP,
                properties: (e) => {
                    var t;
                    let n = !1,
                        r = null == e || null == (t = e.body) ? void 0 : t.email_domain;
                    return null != r && (n = -1 !== r.split('.').indexOf('edu')), (0, i.iG)({ is_edu_email: n });
                }
            },
            rejectWithError: !1
        }),
    sendVerificationEmail: async (e, t, n) =>
        (
            await o.Z.post({
                url: l.ANM.HUB_EMAIL_VERIFY_SEND,
                body: {
                    email: e,
                    guild_id: n,
                    allow_multiple_guilds: t,
                    use_verification_code: !0
                },
                trackedActionData: {
                    event: r.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
                    properties: (e) => {
                        var t;
                        let n = null == e || null == (t = e.body) ? void 0 : t.has_matching_guild;
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
                let n =
                    null ==
                    (t = (
                        await o.Z.post({
                            url: l.ANM.HUB_EMAIL_VERIFY,
                            body: { token: e },
                            trackedActionData: { event: r.NetworkActionNames.HUB_EMAIL_VERIFY },
                            rejectWithError: !1
                        })
                    ).body.guild)
                        ? void 0
                        : t.id;
                s.Z.dispatch({
                    type: 'HUB_VERIFY_EMAIL_SUCCESS',
                    guildId: n
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
                let a = await o.Z.post({
                        url: l.ANM.HUB_EMAIL_VERIFY_CODE,
                        body: {
                            code: e,
                            guild_id: t,
                            email: n
                        },
                        trackedActionData: { event: r.NetworkActionNames.HUB_EMAIL_VERIFY },
                        rejectWithError: !1
                    }),
                    c = null == (i = a.body.guild) ? void 0 : i.id;
                return (
                    s.Z.dispatch({
                        type: 'HUB_VERIFY_EMAIL_SUCCESS',
                        guildId: c
                    }),
                    a.body
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
