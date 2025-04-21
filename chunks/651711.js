n.d(t, { Z: () => u }), n(539854), n(642613);
var r = n(192379),
    i = n(782568),
    l = n(635142),
    s = n(63063),
    a = n(500047),
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
        h = (0, a.R)({ onEnableMFAClick: p });
    return r.useMemo(() => {
        if (null == e) return null;
        let { minimumOwnerAgeInYears: t, minimumSize: r } = e,
            a = !e.noRecentViolations,
            o = [
                {
                    key: 'no_violations_requirement',
                    checkedLabel: d.intl.string(d.t['1lGNPT']),
                    uncheckedLabel: d.intl.string(d.t['D+gTJi']),
                    description: d.intl.format(d.t.HFY0m5, { communityGuidelinesUrl: s.Z.getArticleURL(c.BhN.PUBLIC_GUILD_GUILDLINES) }),
                    checked: e.noRecentViolations,
                    actionLabel: a ? d.intl.string(d.t.xU2fl5) : void 0,
                    actionHandler: a ? () => (0, i.Z)(s.Z.getSubmitRequestURL()) : void 0
                }
            ];
        if (
            (null != t &&
                null != e.meetsOwnerAgeRequirement &&
                o.push({
                    key: 'owner_age_requirement',
                    checkedLabel: d.intl.string(d.t['+F8haG']),
                    uncheckedLabel: d.intl.string(d.t['5BwC/P']),
                    description: d.intl.formatToPlainString(d.t.DW1VaW, { minimumOwnerAgeInYears: t }),
                    checked: e.meetsOwnerAgeRequirement
                }),
            null != r &&
                null != e.hasSufficientMembers &&
                o.push({
                    key: 'member_count_requirement',
                    checkedLabel: d.intl.string(d.t.j7wXWl),
                    uncheckedLabel: d.intl.string(d.t.W0suNz),
                    description: d.intl.formatToPlainString(d.t.up53zc, { minimumSize: r }),
                    checked: e.hasSufficientMembers
                }),
            null != e.minimumAgeInDays &&
                null != e.meetsServerAgeRequirement &&
                o.push({
                    key: 'server_age_requirement',
                    checkedLabel: d.intl.string(d.t.mjbvW1),
                    uncheckedLabel: d.intl.string(d.t['9BV6Ly']),
                    description: d.intl.formatToPlainString(d.t.Zwv84O, { minimumAge: (0, l.Z)(e.minimumAgeInDays) }),
                    checked: e.meetsServerAgeRequirement
                }),
            null != e.weeklyCommunicators &&
                o.push({
                    key: 'weekly_communicator_count_requirement',
                    checkedLabel: d.intl.string(d.t.Qw7qv7),
                    uncheckedLabel: d.intl.string(d.t.b45kGB),
                    description: d.intl.string(d.t.NbtjEB),
                    checked: e.weeklyCommunicators
                }),
            null != e.hasMemberRetention &&
                o.push({
                    key: 'member_retention_requirement',
                    checkedLabel: d.intl.string(d.t.Qvq39P),
                    uncheckedLabel: d.intl.string(d.t.azHboK),
                    description: d.intl.string(d.t.u4rCYG),
                    checked: e.hasMemberRetention
                }),
            o.push({
                key: 'nsfw_requirement',
                checkedLabel: d.intl.string(d.t.bymfTU),
                uncheckedLabel: d.intl.string(d.t['718pRE']),
                description: d.intl.string(d.t['5ZqX+v']),
                checked: e.notNSFW
            }),
            null != e.hasEnabled2FA)
        ) {
            let t = !e.hasEnabled2FA && !m && (null == n ? void 0 : n.onEnableMFAClick) != null,
                r = !e.hasEnabled2FA && !g && (null == n ? void 0 : n.onRequireModeratorMFAClick) != null,
                i = t || r;
            o.push({
                key: '2fa_requirement',
                checkedLabel: d.intl.string(d.t.NqVyFh),
                uncheckedLabel: d.intl.string(d.t.VcDNIS),
                description: d.intl.format(d.t['7NzkfX'], { enableMFAHook: h }),
                checked: e.hasEnabled2FA,
                actionLabel: i ? d.intl.string(d.t.BU4Dio) : void 0,
                actionHandler: i ? p : void 0
            });
        }
        return !0 === u && o.sort((e) => (e.checked ? 0 : -1)), o;
    }, [e, u, m, n, g, h, p]);
}
