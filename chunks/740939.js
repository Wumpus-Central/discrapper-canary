"use strict";
n.d(t, { A: () => a });
var i = n(64700),
    s = n(181658),
    l = n(493540),
    r = n(853922);
function a(e) {
    let [t, n] = i.useState(null != e),
        [a, o] = i.useState(),
        [d, c] = i.useState(),
        u = i.useCallback(async (e) => {
            n(!0), o(void 0);
            try {
                let t = await l.jh(e);
                c({
                    isEligibleForMonetization: t.sufficient,
                    hasSufficientMembers: t.size,
                    hasEnabled2FA: t.mfa,
                    meetsServerAgeRequirement: t.age,
                    meetsOwnerAgeRequirement: t.owner_age,
                    noRecentViolations: t.safe_environment,
                    weeklyCommunicators: t.engagement_healthy,
                    hasMemberRetention: t.retention_healthy,
                    notNSFW: 0 === Object.keys(t.nsfw_properties).length,
                    canApply: t.can_apply,
                    isApplicationPending: t.latest_request?.state === r.h.OPEN,
                    actionRequired: t.latest_request?.state === r.h.ACTION_REQUIRED,
                    minimumAgeInDays: t.minimum_age_in_days,
                    minimumOwnerAgeInYears: t.minimum_owner_age_in_years,
                    minimumSize: t.minimum_size,
                    latestRequest: t.latest_request,
                    rejection: t.rejection,
                    guildMemberCount: t.health_score?.guild_size,
                    communicatorCount: t.health_score?.communicators,
                    retentionScore: t.health_score?.perc_ret_w1,
                });
            } catch (e) {
                o(new s.A(e));
            } finally {
                n(!1);
            }
        }, []);
    return {
        error: a,
        loading: t,
        eligibility: d,
        refresh: i.useCallback(() => {
            null != e && u(e);
        }, [e, u]),
    };
}
