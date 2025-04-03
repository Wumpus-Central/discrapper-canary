n.d(t, { Z: () => l }), n(47120);
var r = n(192379),
    i = n(479531),
    s = n(53365),
    a = n(581050);
function l(e) {
    let [t, n] = r.useState(null != e),
        [l, o] = r.useState(),
        [c, d] = r.useState(),
        u = r.useCallback(async (e) => {
            n(!0), o(void 0);
            try {
                var t, r, l, c, u;
                let n = await s.yk(e);
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
                    isApplicationPending: (null == (t = n.latest_request) ? void 0 : t.state) === a.X.OPEN,
                    actionRequired: (null == (r = n.latest_request) ? void 0 : r.state) === a.X.ACTION_REQUIRED,
                    minimumAgeInDays: n.minimum_age_in_days,
                    minimumOwnerAgeInYears: n.minimum_owner_age_in_years,
                    minimumSize: n.minimum_size,
                    latestRequest: n.latest_request,
                    rejection: n.rejection,
                    guildMemberCount: null == (l = n.health_score) ? void 0 : l.guild_size,
                    communicatorCount: null == (c = n.health_score) ? void 0 : c.communicators,
                    retentionScore: null == (u = n.health_score) ? void 0 : u.perc_ret_w1
                });
            } catch (e) {
                o(new i.Z(e));
            } finally {
                n(!1);
            }
        }, []);
    return {
        error: l,
        loading: t,
        eligibility: c,
        refresh: r.useCallback(() => {
            null != e && u(e);
        }, [e, u])
    };
}
