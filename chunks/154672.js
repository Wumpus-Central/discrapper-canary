r.d(e, { A: () => c });
var i = r(562708),
    a = r(636537),
    o = r(933681),
    _ = r(228366),
    d = r(499785),
    s = r(652215);
let c = {
    signup: (t, e) =>
        d.A.post({
            url: s.Rsh.HUB_WAITLIST_SIGNUP,
            body: { email: t, school: e },
            trackedActionData: {
                event: i.NetworkActionNames.HUB_WAITLIST_SIGNUP,
                properties: (t) => {
                    let e = !1,
                        r = t?.body?.email_domain;
                    return null != r && (e = -1 !== r.split(".").indexOf("edu")), (0, o.e0)({ is_edu_email: e });
                },
            },
            rejectWithError: (0, a.fT)(),
        }),
    sendVerificationEmail: async (t, e, r) =>
        (
            await d.A.post({
                url: s.Rsh.HUB_EMAIL_VERIFY_SEND,
                body: { email: t, guild_id: r, allow_multiple_guilds: e, use_verification_code: !0 },
                trackedActionData: {
                    event: i.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
                    properties: (t) => {
                        let e = t?.body?.has_matching_guild;
                        return (0, o.e0)({ has_matching_guild: e });
                    },
                },
                rejectWithError: (0, a.fT)(),
            })
        ).body,
    async verify(t) {
        if (null != t)
            try {
                let e = await d.A.post({
                        url: s.Rsh.HUB_EMAIL_VERIFY,
                        body: { token: t },
                        trackedActionData: { event: i.NetworkActionNames.HUB_EMAIL_VERIFY },
                        rejectWithError: (0, a.fT)(),
                    }),
                    r = e.body.guild?.id;
                _.h.dispatch({ type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: r });
            } catch (t) {
                _.h.dispatch({ type: "HUB_VERIFY_EMAIL_FAILURE", errors: t.body });
            }
    },
    async verifyCode(t, e, r) {
        if (null != t)
            try {
                let o = await d.A.post({
                        url: s.Rsh.HUB_EMAIL_VERIFY_CODE,
                        body: { code: t, guild_id: e, email: r },
                        trackedActionData: { event: i.NetworkActionNames.HUB_EMAIL_VERIFY },
                        rejectWithError: (0, a.fT)(),
                    }),
                    c = o.body.guild?.id;
                return _.h.dispatch({ type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: c }), o.body;
            } catch (t) {
                throw (_.h.dispatch({ type: "HUB_VERIFY_EMAIL_FAILURE", errors: t.body }), t);
            }
    },
};
