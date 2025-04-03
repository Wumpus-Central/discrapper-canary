n.d(t, { Z: () => u }), n(653041), n(230036);
var r = n(192379),
    i = n(782568),
    s = n(635142),
    a = n(63063),
    l = n(500047),
    o = n(431516),
    c = n(981631),
    d = n(388032);
function u(e) {
    let { onEligibilityBecameStale: t, actions: n, sortedByIneligible: u } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { isUserMFAEnabled: m, isModerationMFAEnabled: g } = (0, o.N)(),
        p = r.useCallback(async () => {
            var e, r;
            m ? g || (await (null == n || null == (r = n.onRequireModeratorMFAClick) ? void 0 : r.call(n))) : await (null == n || null == (e = n.onEnableMFAClick) ? void 0 : e.call(n)), null == t || t();
        }, [m, g, t, n]),
        h = (0, l.R)({ onEnableMFAClick: p });
    return r.useMemo(() => {
        if (null == e) return null;
        let { minimumOwnerAgeInYears: t, minimumSize: r } = e,
            l = !e.noRecentViolations,
            o = [
                {
                    key: 'no_violations_requirement',
                    checkedLabel: d.NW.string(d.t['1lGNPT']),
                    uncheckedLabel: d.NW.string(d.t['D+gTJi']),
                    description: d.NW.format(d.t.HFY0m5, { communityGuidelinesUrl: a.Z.getArticleURL(c.BhN.PUBLIC_GUILD_GUILDLINES) }),
                    checked: e.noRecentViolations,
                    actionLabel: l ? d.NW.string(d.t.xU2fl5) : void 0,
                    actionHandler: l ? () => (0, i.Z)(a.Z.getSubmitRequestURL()) : void 0
                }
            ];
        if (
            (null != t &&
                null != e.meetsOwnerAgeRequirement &&
                o.push({
                    key: 'owner_age_requirement',
                    checkedLabel: d.NW.string(d.t['+F8haG']),
                    uncheckedLabel: d.NW.string(d.t['5BwC/P']),
                    description: d.NW.formatToPlainString(d.t.DW1VaW, { minimumOwnerAgeInYears: t }),
                    checked: e.meetsOwnerAgeRequirement
                }),
            null != r &&
                null != e.hasSufficientMembers &&
                o.push({
                    key: 'member_count_requirement',
                    checkedLabel: d.NW.string(d.t.j7wXWl),
                    uncheckedLabel: d.NW.string(d.t.W0suNz),
                    description: d.NW.formatToPlainString(d.t.up53zc, { minimumSize: r }),
                    checked: e.hasSufficientMembers
                }),
            null != e.minimumAgeInDays &&
                null != e.meetsServerAgeRequirement &&
                o.push({
                    key: 'server_age_requirement',
                    checkedLabel: d.NW.string(d.t.mjbvW1),
                    uncheckedLabel: d.NW.string(d.t['9BV6Ly']),
                    description: d.NW.formatToPlainString(d.t.Zwv84O, { minimumAge: (0, s.Z)(e.minimumAgeInDays) }),
                    checked: e.meetsServerAgeRequirement
                }),
            null != e.weeklyCommunicators &&
                o.push({
                    key: 'weekly_communicator_count_requirement',
                    checkedLabel: d.NW.string(d.t.Qw7qv7),
                    uncheckedLabel: d.NW.string(d.t.b45kGB),
                    description: d.NW.string(d.t.NbtjEB),
                    checked: e.weeklyCommunicators
                }),
            null != e.hasMemberRetention &&
                o.push({
                    key: 'member_retention_requirement',
                    checkedLabel: d.NW.string(d.t.Qvq39P),
                    uncheckedLabel: d.NW.string(d.t.azHboK),
                    description: d.NW.string(d.t.u4rCYG),
                    checked: e.hasMemberRetention
                }),
            o.push({
                key: 'nsfw_requirement',
                checkedLabel: d.NW.string(d.t.bymfTU),
                uncheckedLabel: d.NW.string(d.t['718pRE']),
                description: d.NW.string(d.t['5ZqX+v']),
                checked: e.notNSFW
            }),
            null != e.hasEnabled2FA)
        ) {
            let t = !e.hasEnabled2FA && !m && (null == n ? void 0 : n.onEnableMFAClick) != null,
                r = !e.hasEnabled2FA && !g && (null == n ? void 0 : n.onRequireModeratorMFAClick) != null,
                i = t || r;
            o.push({
                key: '2fa_requirement',
                checkedLabel: d.NW.string(d.t.NqVyFh),
                uncheckedLabel: d.NW.string(d.t.VcDNIS),
                description: d.NW.format(d.t['7NzkfX'], { enableMFAHook: h }),
                checked: e.hasEnabled2FA,
                actionLabel: i ? d.NW.string(d.t.BU4Dio) : void 0,
                actionHandler: i ? p : void 0
            });
        }
        return !0 === u && o.sort((e) => (e.checked ? 0 : -1)), o;
    }, [e, u, m, n, g, h, p]);
}
