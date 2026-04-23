"use strict";
n.d(t, { A: () => o });
var i = n(110259),
    s = n(933681),
    l = n(228366),
    r = n(499785),
    a = n(652215);
let o = {
    signup: (e, t) =>
        r.A.post({
            url: a.Rsh.HUB_WAITLIST_SIGNUP,
            body: { email: e, school: t },
            trackedActionData: {
                event: i.NetworkActionNames.HUB_WAITLIST_SIGNUP,
                properties: (e) => {
                    let t = !1,
                        n = e?.body?.email_domain;
                    return null != n && (t = -1 !== n.split(".").indexOf("edu")), (0, s.e0)({ is_edu_email: t });
                },
            },
            rejectWithError: !1,
        }),
    sendVerificationEmail: async (e, t, n) =>
        (
            await r.A.post({
                url: a.Rsh.HUB_EMAIL_VERIFY_SEND,
                body: { email: e, guild_id: n, allow_multiple_guilds: t, use_verification_code: !0 },
                trackedActionData: {
                    event: i.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
                    properties: (e) => {
                        let t = e?.body?.has_matching_guild;
                        return (0, s.e0)({ has_matching_guild: t });
                    },
                },
                rejectWithError: !1,
            })
        ).body,
    async verify(e) {
        if (null != e)
            try {
                let t = await r.A.post({
                        url: a.Rsh.HUB_EMAIL_VERIFY,
                        body: { token: e },
                        trackedActionData: { event: i.NetworkActionNames.HUB_EMAIL_VERIFY },
                        rejectWithError: !1,
                    }),
                    n = t.body.guild?.id;
                l.h.dispatch({ type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: n });
            } catch (e) {
                l.h.dispatch({ type: "HUB_VERIFY_EMAIL_FAILURE", errors: e.body });
            }
    },
    async verifyCode(e, t, n) {
        if (null != e)
            try {
                let s = await r.A.post({
                        url: a.Rsh.HUB_EMAIL_VERIFY_CODE,
                        body: { code: e, guild_id: t, email: n },
                        trackedActionData: { event: i.NetworkActionNames.HUB_EMAIL_VERIFY },
                        rejectWithError: !1,
                    }),
                    o = s.body.guild?.id;
                return l.h.dispatch({ type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: o }), s.body;
            } catch (e) {
                throw (l.h.dispatch({ type: "HUB_VERIFY_EMAIL_FAILURE", errors: e.body }), e);
            }
    },
};
