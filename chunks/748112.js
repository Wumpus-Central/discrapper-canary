n.d(t, { A: () => u }), n(321073);
var i = n(64700),
    l = n(975807),
    s = n(258328),
    r = n(975571),
    a = n(354390),
    o = n(192701),
    d = n(652215),
    c = n(985018);
function u(e) {
    let {
            onEligibilityBecameStale: t,
            actions: n,
            sortedByIneligible: u,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { isUserMFAEnabled: m, isModerationMFAEnabled: g } = (0, o.f)(),
        h = i.useCallback(async () => {
            m ? g || (await n?.onRequireModeratorMFAClick?.()) : await n?.onEnableMFAClick?.(), t?.();
        }, [m, g, t, n]),
        x = (0, a.S)({ onEnableMFAClick: h });
    return i.useMemo(() => {
        if (null == e) return null;
        let { minimumOwnerAgeInYears: t, minimumSize: i } = e,
            a = !e.noRecentViolations,
            o = [
                {
                    key: "no_violations_requirement",
                    checkedLabel: c.intl.string(c.t["1lGNPZ"]),
                    uncheckedLabel: c.intl.string(c.t["D+gTJt"]),
                    description: c.intl.format(c.t.HFY0m6, {
                        communityGuidelinesUrl: r.A.getArticleURL(d.MVz.PUBLIC_GUILD_GUILDLINES),
                    }),
                    checked: e.noRecentViolations,
                    actionLabel: a ? c.intl.string(c.t["xU2fl+"]) : void 0,
                    actionHandler: a ? () => (0, l.A)(r.A.getSubmitRequestURL()) : void 0,
                },
            ];
        if (
            (null != t &&
                null != e.meetsOwnerAgeRequirement &&
                o.push({
                    key: "owner_age_requirement",
                    checkedLabel: c.intl.string(c.t["+F8haD"]),
                    uncheckedLabel: c.intl.string(c.t["5BwC/O"]),
                    description: c.intl.formatToPlainString(c.t.DW1Vae, { minimumOwnerAgeInYears: t }),
                    checked: e.meetsOwnerAgeRequirement,
                }),
            null != i &&
                null != e.hasSufficientMembers &&
                o.push({
                    key: "member_count_requirement",
                    checkedLabel: c.intl.string(c.t.j7wXWo),
                    uncheckedLabel: c.intl.string(c.t.W0suNz),
                    description: c.intl.formatToPlainString(c.t.up53zR, { minimumSize: i }),
                    checked: e.hasSufficientMembers,
                }),
            null != e.minimumAgeInDays &&
                null != e.meetsServerAgeRequirement &&
                o.push({
                    key: "server_age_requirement",
                    checkedLabel: c.intl.string(c.t.mjbvWw),
                    uncheckedLabel: c.intl.string(c.t["9BV6L6"]),
                    description: c.intl.formatToPlainString(c.t.Zwv84O, { minimumAge: (0, s.A)(e.minimumAgeInDays) }),
                    checked: e.meetsServerAgeRequirement,
                }),
            null != e.weeklyCommunicators &&
                o.push({
                    key: "weekly_communicator_count_requirement",
                    checkedLabel: c.intl.string(c.t.Qw7qv4),
                    uncheckedLabel: c.intl.string(c.t.b45kGG),
                    description: c.intl.string(c.t.NbtjEC),
                    checked: e.weeklyCommunicators,
                }),
            null != e.hasMemberRetention &&
                o.push({
                    key: "member_retention_requirement",
                    checkedLabel: c.intl.string(c.t.Qvq39M),
                    uncheckedLabel: c.intl.string(c.t.azHboI),
                    description: c.intl.string(c.t.u4rCYO),
                    checked: e.hasMemberRetention,
                }),
            o.push({
                key: "nsfw_requirement",
                checkedLabel: c.intl.string(c.t.bymfTb),
                uncheckedLabel: c.intl.string(c.t["718pRA"]),
                description: c.intl.string(c.t["5ZqX+j"]),
                checked: e.notNSFW,
            }),
            null != e.hasEnabled2FA)
        ) {
            let t = !e.hasEnabled2FA && !m && n?.onEnableMFAClick != null,
                i = !e.hasEnabled2FA && !g && n?.onRequireModeratorMFAClick != null,
                l = t || i;
            o.push({
                key: "2fa_requirement",
                checkedLabel: c.intl.string(c.t.NqVyFk),
                uncheckedLabel: c.intl.string(c.t.VcDNIV),
                description: c.intl.format(c.t["7NzkfV"], { enableMFAHook: x }),
                checked: e.hasEnabled2FA,
                actionLabel: l ? c.intl.string(c.t.BU4Diu) : void 0,
                actionHandler: l ? h : void 0,
            });
        }
        return !0 === u && o.sort((e) => (e.checked ? 0 : -1)), o;
    }, [e, u, m, n, g, x, h]);
}
