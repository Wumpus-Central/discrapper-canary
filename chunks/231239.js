n.d(t, { Z: () => o }), n(301563);
var l = n(990547),
    r = n(283693),
    i = n(570140),
    s = n(573261),
    a = n(981631);
let o = {
    signup: (e, t) =>
        s.Z.post({
            url: a.ANM.HUB_WAITLIST_SIGNUP,
            body: {
                email: e,
                school: t
            },
            trackedActionData: {
                event: l.NetworkActionNames.HUB_WAITLIST_SIGNUP,
                properties: (e) => {
                    var t;
                    let n = !1,
                        l = null == e || null == (t = e.body) ? void 0 : t.email_domain;
                    return null != l && (n = -1 !== l.split('.').indexOf('edu')), (0, r.iG)({ is_edu_email: n });
                }
            },
            rejectWithError: !1
        }),
    sendVerificationEmail: async (e, t, n) =>
        (
            await s.Z.post({
                url: a.ANM.HUB_EMAIL_VERIFY_SEND,
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
                        let n = null == e || null == (t = e.body) ? void 0 : t.has_matching_guild;
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
                let n =
                    null ==
                    (t = (
                        await s.Z.post({
                            url: a.ANM.HUB_EMAIL_VERIFY,
                            body: { token: e },
                            trackedActionData: { event: l.NetworkActionNames.HUB_EMAIL_VERIFY },
                            rejectWithError: !1
                        })
                    ).body.guild)
                        ? void 0
                        : t.id;
                i.Z.dispatch({
                    type: 'HUB_VERIFY_EMAIL_SUCCESS',
                    guildId: n
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
                let o = await s.Z.post({
                        url: a.ANM.HUB_EMAIL_VERIFY_CODE,
                        body: {
                            code: e,
                            guild_id: t,
                            email: n
                        },
                        trackedActionData: { event: l.NetworkActionNames.HUB_EMAIL_VERIFY },
                        rejectWithError: !1
                    }),
                    c = null == (r = o.body.guild) ? void 0 : r.id;
                return (
                    i.Z.dispatch({
                        type: 'HUB_VERIFY_EMAIL_SUCCESS',
                        guildId: c
                    }),
                    o.body
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
