n.d(t, { Z: () => u }), n(539854), n(642613);
var r = n(473749),
    i = n(782568),
    l = n(635142),
    a = n(63063),
    s = n(500047),
    o = n(431516),
    c = n(981631),
    d = n(388032);
function u(e) {
    let {
            onEligibilityBecameStale: t,
            actions: n,
            sortedByIneligible: u,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { isUserMFAEnabled: g, isModerationMFAEnabled: m } = (0, o.N)(),
        p = r.useCallback(async () => {
            var e, r;
            g
                ? m || (await (null == n || null == (r = n.onRequireModeratorMFAClick) ? void 0 : r.call(n)))
                : await (null == n || null == (e = n.onEnableMFAClick) ? void 0 : e.call(n)),
                null == t || t();
        }, [g, m, t, n]),
        f = (0, s.R)({ onEnableMFAClick: p });
    return r.useMemo(() => {
        if (null == e) return null;
        let { minimumOwnerAgeInYears: t, minimumSize: r } = e,
            s = !e.noRecentViolations,
            o = [
                {
                    key: "no_violations_requirement",
                    checkedLabel: d.intl.string(d.t["1lGNPZ"]),
                    uncheckedLabel: d.intl.string(d.t["D+gTJt"]),
                    description: d.intl.format(d.t.HFY0m6, {
                        communityGuidelinesUrl: a.Z.getArticleURL(c.BhN.PUBLIC_GUILD_GUILDLINES),
                    }),
                    checked: e.noRecentViolations,
                    actionLabel: s ? d.intl.string(d.t["xU2fl+"]) : void 0,
                    actionHandler: s ? () => (0, i.Z)(a.Z.getSubmitRequestURL()) : void 0,
                },
            ];
        if (
            (null != t &&
                null != e.meetsOwnerAgeRequirement &&
                o.push({
                    key: "owner_age_requirement",
                    checkedLabel: d.intl.string(d.t["+F8haD"]),
                    uncheckedLabel: d.intl.string(d.t["5BwC/O"]),
                    description: d.intl.formatToPlainString(d.t.DW1Vae, { minimumOwnerAgeInYears: t }),
                    checked: e.meetsOwnerAgeRequirement,
                }),
            null != r &&
                null != e.hasSufficientMembers &&
                o.push({
                    key: "member_count_requirement",
                    checkedLabel: d.intl.string(d.t.j7wXWo),
                    uncheckedLabel: d.intl.string(d.t.W0suNz),
                    description: d.intl.formatToPlainString(d.t.up53zR, { minimumSize: r }),
                    checked: e.hasSufficientMembers,
                }),
            null != e.minimumAgeInDays &&
                null != e.meetsServerAgeRequirement &&
                o.push({
                    key: "server_age_requirement",
                    checkedLabel: d.intl.string(d.t.mjbvWw),
                    uncheckedLabel: d.intl.string(d.t["9BV6L6"]),
                    description: d.intl.formatToPlainString(d.t.Zwv84O, { minimumAge: (0, l.Z)(e.minimumAgeInDays) }),
                    checked: e.meetsServerAgeRequirement,
                }),
            null != e.weeklyCommunicators &&
                o.push({
                    key: "weekly_communicator_count_requirement",
                    checkedLabel: d.intl.string(d.t.Qw7qv4),
                    uncheckedLabel: d.intl.string(d.t.b45kGG),
                    description: d.intl.string(d.t.NbtjEC),
                    checked: e.weeklyCommunicators,
                }),
            null != e.hasMemberRetention &&
                o.push({
                    key: "member_retention_requirement",
                    checkedLabel: d.intl.string(d.t.Qvq39M),
                    uncheckedLabel: d.intl.string(d.t.azHboI),
                    description: d.intl.string(d.t.u4rCYO),
                    checked: e.hasMemberRetention,
                }),
            o.push({
                key: "nsfw_requirement",
                checkedLabel: d.intl.string(d.t.bymfTb),
                uncheckedLabel: d.intl.string(d.t["718pRA"]),
                description: d.intl.string(d.t["5ZqX+j"]),
                checked: e.notNSFW,
            }),
            null != e.hasEnabled2FA)
        ) {
            let t = !e.hasEnabled2FA && !g && (null == n ? void 0 : n.onEnableMFAClick) != null,
                r = !e.hasEnabled2FA && !m && (null == n ? void 0 : n.onRequireModeratorMFAClick) != null,
                i = t || r;
            o.push({
                key: "2fa_requirement",
                checkedLabel: d.intl.string(d.t.NqVyFk),
                uncheckedLabel: d.intl.string(d.t.VcDNIV),
                description: d.intl.format(d.t["7NzkfV"], { enableMFAHook: f }),
                checked: e.hasEnabled2FA,
                actionLabel: i ? d.intl.string(d.t.BU4Diu) : void 0,
                actionHandler: i ? p : void 0,
            });
        }
        return !0 === u && o.sort((e) => (e.checked ? 0 : -1)), o;
    }, [e, u, g, n, m, f, p]);
}
