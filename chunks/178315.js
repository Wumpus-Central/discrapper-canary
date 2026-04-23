n.d(t, { A: () => x }), n(321073);
var i = n(64700),
    l = n(975807),
    s = n(985018),
    a = n(975571),
    r = n(627968),
    o = n(95035),
    d = n(702841),
    c = n(555337),
    u = n(287809),
    m = n(652215);
function g() {
    let e = (0, d.bG)([u.default], () => u.default.getCurrentUser()),
        t = (0, d.bG)([c.A], () => c.A.getProps().mfaLevel);
    return { isUserMFAEnabled: e?.mfaEnabled === !0, isModerationMFAEnabled: t === m.EkJ.ELEVATED };
}
function h(e) {
    return e;
}
function x(e) {
    let {
            onEligibilityBecameStale: t,
            actions: n,
            sortedByIneligible: d,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { isUserMFAEnabled: c, isModerationMFAEnabled: u } = g(),
        x = i.useCallback(async () => {
            c ? u || (await n?.onRequireModeratorMFAClick?.()) : await n?.onEnableMFAClick?.(), t?.();
        }, [c, u, t, n]),
        _ = (function (e) {
            let { onEnableMFAClick: t, onMFAEnabled: n } = e,
                { isUserMFAEnabled: l, isModerationMFAEnabled: s } = g(),
                a = i.useCallback(async () => {
                    await t(), n?.();
                }, [t, n]),
                d = i.useCallback((e) => (0, r.jsx)(o.A, { onClick: a, children: e }), [a]);
            return l && s ? h : d;
        })({ onEnableMFAClick: x });
    return i.useMemo(() => {
        var t;
        if (null == e) return null;
        let { minimumOwnerAgeInYears: i, minimumSize: r } = e,
            o = !e.noRecentViolations,
            g = [
                {
                    key: "no_violations_requirement",
                    checkedLabel: s.intl.string(s.t["1lGNPZ"]),
                    uncheckedLabel: s.intl.string(s.t["D+gTJt"]),
                    description: s.intl.format(s.t.HFY0m6, {
                        communityGuidelinesUrl: a.A.getArticleURL(m.MVz.PUBLIC_GUILD_GUILDLINES),
                    }),
                    checked: e.noRecentViolations,
                    actionLabel: o ? s.intl.string(s.t["xU2fl+"]) : void 0,
                    actionHandler: o ? () => (0, l.A)(a.A.getSubmitRequestURL()) : void 0,
                },
            ];
        if (
            (null != i &&
                null != e.meetsOwnerAgeRequirement &&
                g.push({
                    key: "owner_age_requirement",
                    checkedLabel: s.intl.string(s.t["+F8haD"]),
                    uncheckedLabel: s.intl.string(s.t["5BwC/O"]),
                    description: s.intl.formatToPlainString(s.t.DW1Vae, { minimumOwnerAgeInYears: i }),
                    checked: e.meetsOwnerAgeRequirement,
                }),
            null != r &&
                null != e.hasSufficientMembers &&
                g.push({
                    key: "member_count_requirement",
                    checkedLabel: s.intl.string(s.t.j7wXWo),
                    uncheckedLabel: s.intl.string(s.t.W0suNz),
                    description: s.intl.formatToPlainString(s.t.up53zR, { minimumSize: r }),
                    checked: e.hasSufficientMembers,
                }),
            null != e.minimumAgeInDays &&
                null != e.meetsServerAgeRequirement &&
                g.push({
                    key: "server_age_requirement",
                    checkedLabel: s.intl.string(s.t.mjbvWw),
                    uncheckedLabel: s.intl.string(s.t["9BV6L6"]),
                    description: s.intl.formatToPlainString(s.t.Zwv84O, {
                        minimumAge:
                            (t = e.minimumAgeInDays) > 0 && t % 7 == 0
                                ? s.intl.formatToPlainString(s.t.EmoBD2, { weeks: t / 7 })
                                : s.intl.formatToPlainString(s.t["k2UNz+"], { days: t }),
                    }),
                    checked: e.meetsServerAgeRequirement,
                }),
            null != e.weeklyCommunicators &&
                g.push({
                    key: "weekly_communicator_count_requirement",
                    checkedLabel: s.intl.string(s.t.Qw7qv4),
                    uncheckedLabel: s.intl.string(s.t.b45kGG),
                    description: s.intl.string(s.t.NbtjEC),
                    checked: e.weeklyCommunicators,
                }),
            null != e.hasMemberRetention &&
                g.push({
                    key: "member_retention_requirement",
                    checkedLabel: s.intl.string(s.t.Qvq39M),
                    uncheckedLabel: s.intl.string(s.t.azHboI),
                    description: s.intl.string(s.t.u4rCYO),
                    checked: e.hasMemberRetention,
                }),
            g.push({
                key: "nsfw_requirement",
                checkedLabel: s.intl.string(s.t.bymfTb),
                uncheckedLabel: s.intl.string(s.t["718pRA"]),
                description: s.intl.string(s.t["5ZqX+j"]),
                checked: e.notNSFW,
            }),
            null != e.hasEnabled2FA)
        ) {
            let t = !e.hasEnabled2FA && !c && n?.onEnableMFAClick != null,
                i = !e.hasEnabled2FA && !u && n?.onRequireModeratorMFAClick != null,
                l = t || i;
            g.push({
                key: "2fa_requirement",
                checkedLabel: s.intl.string(s.t.NqVyFk),
                uncheckedLabel: s.intl.string(s.t.VcDNIV),
                description: s.intl.format(s.t["7NzkfV"], { enableMFAHook: _ }),
                checked: e.hasEnabled2FA,
                actionLabel: l ? s.intl.string(s.t.BU4Diu) : void 0,
                actionHandler: l ? x : void 0,
            });
        }
        return !0 === d && g.sort((e) => (e.checked ? 0 : -1)), g;
    }, [e, d, c, n, u, _, x]);
}
