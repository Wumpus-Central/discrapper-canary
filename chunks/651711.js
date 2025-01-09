n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(653041);
var i = n(192379),
    r = n(782568),
    l = n(635142),
    s = n(63063),
    a = n(500047),
    o = n(431516),
    c = n(981631),
    d = n(388032);
function u(e) {
    let { onEligibilityBecameStale: t, actions: n, sortedByIneligible: u } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { isUserMFAEnabled: m, isModerationMFAEnabled: h } = (0, o.N)(),
        g = i.useCallback(async () => {
            var e, i;
            m ? !h && (await (null == n ? void 0 : null === (i = n.onRequireModeratorMFAClick) || void 0 === i ? void 0 : i.call(n))) : await (null == n ? void 0 : null === (e = n.onEnableMFAClick) || void 0 === e ? void 0 : e.call(n)), null == t || t();
        }, [m, h, t, n]),
        x = (0, a.R)({ onEnableMFAClick: g });
    return i.useMemo(() => {
        if (null == e) return null;
        let { minimumOwnerAgeInYears: t, minimumSize: i } = e,
            a = !e.noRecentViolations,
            o = [
                {
                    key: 'no_violations_requirement',
                    checkedLabel: d.intl.string(d.t['1lGNPT']),
                    uncheckedLabel: d.intl.string(d.t['D+gTJi']),
                    description: d.intl.format(d.t.HFY0m5, { communityGuidelinesUrl: s.Z.getArticleURL(c.BhN.PUBLIC_GUILD_GUILDLINES) }),
                    checked: e.noRecentViolations,
                    actionLabel: a ? d.intl.string(d.t.xU2fl5) : void 0,
                    actionHandler: a ? () => (0, r.Z)(s.Z.getSubmitRequestURL()) : void 0
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
            null != i &&
                null != e.hasSufficientMembers &&
                o.push({
                    key: 'member_count_requirement',
                    checkedLabel: d.intl.string(d.t.j7wXWl),
                    uncheckedLabel: d.intl.string(d.t.W0suNz),
                    description: d.intl.formatToPlainString(d.t.up53zc, { minimumSize: i }),
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
                i = !e.hasEnabled2FA && !h && (null == n ? void 0 : n.onRequireModeratorMFAClick) != null,
                r = t || i;
            o.push({
                key: '2fa_requirement',
                checkedLabel: d.intl.string(d.t.NqVyFh),
                uncheckedLabel: d.intl.string(d.t.VcDNIS),
                description: d.intl.format(d.t['7NzkfX'], { enableMFAHook: x }),
                checked: e.hasEnabled2FA,
                actionLabel: r ? d.intl.string(d.t.BU4Dio) : void 0,
                actionHandler: r ? g : void 0
            });
        }
        return !0 === u && o.sort((e) => (e.checked ? 0 : -1)), o;
    }, [e, u, m, n, h, x, g]);
}
