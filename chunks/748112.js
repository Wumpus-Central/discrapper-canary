n.d(t, { A: () => u }), n(321073), n(638769);
var r = n(64700),
    i = n(975807),
    l = n(258328),
    s = n(975571),
    a = n(354390),
    c = n(192701),
    o = n(652215),
    d = n(985018);
function u(e) {
    let {
            onEligibilityBecameStale: t,
            actions: n,
            sortedByIneligible: u,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { isUserMFAEnabled: f, isModerationMFAEnabled: g } = (0, c.f)(),
        b = r.useCallback(async () => {
            var e, r;
            f
                ? g || (await (null == n || null == (r = n.onRequireModeratorMFAClick) ? void 0 : r.call(n)))
                : await (null == n || null == (e = n.onEnableMFAClick) ? void 0 : e.call(n)),
                null == t || t();
        }, [f, g, t, n]),
        m = (0, a.S)({ onEnableMFAClick: b });
    return r.useMemo(() => {
        if (null == e) return null;
        let { minimumOwnerAgeInYears: t, minimumSize: r } = e,
            a = !e.noRecentViolations,
            c = [
                {
                    key: "no_violations_requirement",
                    checkedLabel: d.intl.string(d.t["1lGNPZ"]),
                    uncheckedLabel: d.intl.string(d.t["D+gTJt"]),
                    description: d.intl.format(d.t.HFY0m6, {
                        communityGuidelinesUrl: s.A.getArticleURL(o.MVz.PUBLIC_GUILD_GUILDLINES),
                    }),
                    checked: e.noRecentViolations,
                    actionLabel: a ? d.intl.string(d.t["xU2fl+"]) : void 0,
                    actionHandler: a ? () => (0, i.A)(s.A.getSubmitRequestURL()) : void 0,
                },
            ];
        if (
            (null != t &&
                null != e.meetsOwnerAgeRequirement &&
                c.push({
                    key: "owner_age_requirement",
                    checkedLabel: d.intl.string(d.t["+F8haD"]),
                    uncheckedLabel: d.intl.string(d.t["5BwC/O"]),
                    description: d.intl.formatToPlainString(d.t.DW1Vae, { minimumOwnerAgeInYears: t }),
                    checked: e.meetsOwnerAgeRequirement,
                }),
            null != r &&
                null != e.hasSufficientMembers &&
                c.push({
                    key: "member_count_requirement",
                    checkedLabel: d.intl.string(d.t.j7wXWo),
                    uncheckedLabel: d.intl.string(d.t.W0suNz),
                    description: d.intl.formatToPlainString(d.t.up53zR, { minimumSize: r }),
                    checked: e.hasSufficientMembers,
                }),
            null != e.minimumAgeInDays &&
                null != e.meetsServerAgeRequirement &&
                c.push({
                    key: "server_age_requirement",
                    checkedLabel: d.intl.string(d.t.mjbvWw),
                    uncheckedLabel: d.intl.string(d.t["9BV6L6"]),
                    description: d.intl.formatToPlainString(d.t.Zwv84O, { minimumAge: (0, l.A)(e.minimumAgeInDays) }),
                    checked: e.meetsServerAgeRequirement,
                }),
            null != e.weeklyCommunicators &&
                c.push({
                    key: "weekly_communicator_count_requirement",
                    checkedLabel: d.intl.string(d.t.Qw7qv4),
                    uncheckedLabel: d.intl.string(d.t.b45kGG),
                    description: d.intl.string(d.t.NbtjEC),
                    checked: e.weeklyCommunicators,
                }),
            null != e.hasMemberRetention &&
                c.push({
                    key: "member_retention_requirement",
                    checkedLabel: d.intl.string(d.t.Qvq39M),
                    uncheckedLabel: d.intl.string(d.t.azHboI),
                    description: d.intl.string(d.t.u4rCYO),
                    checked: e.hasMemberRetention,
                }),
            c.push({
                key: "nsfw_requirement",
                checkedLabel: d.intl.string(d.t.bymfTb),
                uncheckedLabel: d.intl.string(d.t["718pRA"]),
                description: d.intl.string(d.t["5ZqX+j"]),
                checked: e.notNSFW,
            }),
            null != e.hasEnabled2FA)
        ) {
            let t = !e.hasEnabled2FA && !f && (null == n ? void 0 : n.onEnableMFAClick) != null,
                r = !e.hasEnabled2FA && !g && (null == n ? void 0 : n.onRequireModeratorMFAClick) != null,
                i = t || r;
            c.push({
                key: "2fa_requirement",
                checkedLabel: d.intl.string(d.t.NqVyFk),
                uncheckedLabel: d.intl.string(d.t.VcDNIV),
                description: d.intl.format(d.t["7NzkfV"], { enableMFAHook: m }),
                checked: e.hasEnabled2FA,
                actionLabel: i ? d.intl.string(d.t.BU4Diu) : void 0,
                actionHandler: i ? b : void 0,
            });
        }
        return !0 === u && c.sort((e) => (e.checked ? 0 : -1)), c;
    }, [e, u, f, n, g, m, b]);
}
