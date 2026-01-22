n.d(t, {
    A: () => o,
}),
    n(747238);
var r = n(110259),
    i = n(933681),
    s = n(73153),
    l = n(499785),
    a = n(652215);
let o = {
    signup: (e, t) =>
        l.A.post({
            url: a.Rsh.HUB_WAITLIST_SIGNUP,
            body: {
                email: e,
                school: t,
            },
            trackedActionData: {
                event: r.NetworkActionNames.HUB_WAITLIST_SIGNUP,
                properties: (e) => {
                    var t;
                    let n = !1,
                        r = null == e || null == (t = e.body) ? void 0 : t.email_domain;
                    return (
                        null != r && (n = -1 !== r.split(".").indexOf("edu")),
                        (0, i.e0)({
                            is_edu_email: n,
                        })
                    );
                },
            },
            rejectWithError: !1,
        }),
    sendVerificationEmail: async (e, t, n) =>
        (
            await l.A.post({
                url: a.Rsh.HUB_EMAIL_VERIFY_SEND,
                body: {
                    email: e,
                    guild_id: n,
                    allow_multiple_guilds: t,
                    use_verification_code: !0,
                },
                trackedActionData: {
                    event: r.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
                    properties: (e) => {
                        var t;
                        let n = null == e || null == (t = e.body) ? void 0 : t.has_matching_guild;
                        return (0, i.e0)({
                            has_matching_guild: n,
                        });
                    },
                },
                rejectWithError: !1,
            })
        ).body,
    async verify(e) {
        if (null != e)
            try {
                var t;
                let n =
                    null ==
                    (t = (
                        await l.A.post({
                            url: a.Rsh.HUB_EMAIL_VERIFY,
                            body: {
                                token: e,
                            },
                            trackedActionData: {
                                event: r.NetworkActionNames.HUB_EMAIL_VERIFY,
                            },
                            rejectWithError: !1,
                        })
                    ).body.guild)
                        ? void 0
                        : t.id;
                s.h.dispatch({
                    type: "HUB_VERIFY_EMAIL_SUCCESS",
                    guildId: n,
                });
            } catch (e) {
                s.h.dispatch({
                    type: "HUB_VERIFY_EMAIL_FAILURE",
                    errors: e.body,
                });
            }
    },
    async verifyCode(e, t, n) {
        if (null != e)
            try {
                var i;
                let o = await l.A.post({
                        url: a.Rsh.HUB_EMAIL_VERIFY_CODE,
                        body: {
                            code: e,
                            guild_id: t,
                            email: n,
                        },
                        trackedActionData: {
                            event: r.NetworkActionNames.HUB_EMAIL_VERIFY,
                        },
                        rejectWithError: !1,
                    }),
                    c = null == (i = o.body.guild) ? void 0 : i.id;
                return (
                    s.h.dispatch({
                        type: "HUB_VERIFY_EMAIL_SUCCESS",
                        guildId: c,
                    }),
                    o.body
                );
            } catch (e) {
                throw (
                    (s.h.dispatch({
                        type: "HUB_VERIFY_EMAIL_FAILURE",
                        errors: e.body,
                    }),
                    e)
                );
            }
    },
};
