n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var i = n(192379),
    r = n(479531),
    l = n(53365),
    a = n(581050);
function s(e) {
    let [t, n] = i.useState(null != e),
        [s, o] = i.useState(),
        [c, d] = i.useState(),
        u = i.useCallback(async (e) => {
            n(!0), o(void 0);
            try {
                var t, i, s, c, u;
                let n = await l.yk(e);
                d({
                    isEligibleForMonetization: n.sufficient,
                    hasSufficientMembers: n.size,
                    hasEnabled2FA: n.mfa,
                    meetsServerAgeRequirement: n.age,
                    meetsOwnerAgeRequirement: n.owner_age,
                    noRecentViolations: n.safe_environment,
                    weeklyCommunicators: n.engagement_healthy,
                    hasMemberRetention: n.retention_healthy,
                    notNSFW: 0 === Object.keys(n.nsfw_properties).length,
                    canApply: n.can_apply,
                    isApplicationPending: (null === (t = n.latest_request) || void 0 === t ? void 0 : t.state) === a.X.OPEN,
                    actionRequired: (null === (i = n.latest_request) || void 0 === i ? void 0 : i.state) === a.X.ACTION_REQUIRED,
                    minimumAgeInDays: n.minimum_age_in_days,
                    minimumOwnerAgeInYears: n.minimum_owner_age_in_years,
                    minimumSize: n.minimum_size,
                    latestRequest: n.latest_request,
                    rejection: n.rejection,
                    guildMemberCount: null === (s = n.health_score) || void 0 === s ? void 0 : s.guild_size,
                    communicatorCount: null === (c = n.health_score) || void 0 === c ? void 0 : c.communicators,
                    retentionScore: null === (u = n.health_score) || void 0 === u ? void 0 : u.perc_ret_w1
                });
            } catch (e) {
                o(new r.Z(e));
            } finally {
                n(!1);
            }
        }, []);
    return {
        error: s,
        loading: t,
        eligibility: c,
        refresh: i.useCallback(() => {
            null != e && u(e);
        }, [e, u])
    };
}
