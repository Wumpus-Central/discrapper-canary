r.d(e, { A: () => s });
var i = r(110259),
    a = r(933681),
    o = r(228366),
    _ = r(499785),
    d = r(652215);
let s = {
    signup: (t, e) =>
        _.A.post({
            url: d.Rsh.HUB_WAITLIST_SIGNUP,
            body: { email: t, school: e },
            trackedActionData: {
                event: i.NetworkActionNames.HUB_WAITLIST_SIGNUP,
                properties: (t) => {
                    let e = !1,
                        r = t?.body?.email_domain;
                    return null != r && (e = -1 !== r.split(".").indexOf("edu")), (0, a.e0)({ is_edu_email: e });
                },
            },
            rejectWithError: !1,
        }),
    sendVerificationEmail: async (t, e, r) =>
        (
            await _.A.post({
                url: d.Rsh.HUB_EMAIL_VERIFY_SEND,
                body: { email: t, guild_id: r, allow_multiple_guilds: e, use_verification_code: !0 },
                trackedActionData: {
                    event: i.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
                    properties: (t) => {
                        let e = t?.body?.has_matching_guild;
                        return (0, a.e0)({ has_matching_guild: e });
                    },
                },
                rejectWithError: !1,
            })
        ).body,
    async verify(t) {
        if (null != t)
            try {
                let e = await _.A.post({
                        url: d.Rsh.HUB_EMAIL_VERIFY,
                        body: { token: t },
                        trackedActionData: { event: i.NetworkActionNames.HUB_EMAIL_VERIFY },
                        rejectWithError: !1,
                    }),
                    r = e.body.guild?.id;
                o.h.dispatch({ type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: r });
            } catch (t) {
                o.h.dispatch({ type: "HUB_VERIFY_EMAIL_FAILURE", errors: t.body });
            }
    },
    async verifyCode(t, e, r) {
        if (null != t)
            try {
                let a = await _.A.post({
                        url: d.Rsh.HUB_EMAIL_VERIFY_CODE,
                        body: { code: t, guild_id: e, email: r },
                        trackedActionData: { event: i.NetworkActionNames.HUB_EMAIL_VERIFY },
                        rejectWithError: !1,
                    }),
                    s = a.body.guild?.id;
                return o.h.dispatch({ type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: s }), a.body;
            } catch (t) {
                throw (o.h.dispatch({ type: "HUB_VERIFY_EMAIL_FAILURE", errors: t.body }), t);
            }
    },
};
