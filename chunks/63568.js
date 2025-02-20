n.d(t, {
    K2: () => u,
    jS: () => c,
    tW: () => l
});
var r = n(442837),
    i = n(818083),
    o = n(701190),
    a = n(937111),
    s = n(981631);
let l = (0, i.B)({
    kind: 'guild',
    id: '2024-11_member_verification_rollout',
    label: 'Member verification rollout',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'enabled',
            config: { enabled: !0 }
        }
    ]
});
function c(e, t) {
    let n = (0, r.e7)([a.Z, o.Z], () => {
        var t, n;
        let r = null != e ? a.Z.getJoinRequestGuild(e) : null,
            i = null != e ? o.Z.getInviteKeyForGuildId(e) : null,
            l = null != i ? (null === (t = o.Z.getInvite(i)) || void 0 === t ? void 0 : t.guild) : null;
        return (null == r ? void 0 : r.hasFeature(s.oNc.MEMBER_VERIFICATION_ROLLOUT_TEST)) || (null == l ? void 0 : null === (n = l.features) || void 0 === n ? void 0 : n.includes(s.oNc.MEMBER_VERIFICATION_ROLLOUT_TEST));
    });
    return !!(
        l.useExperiment(
            {
                guildId: e,
                location: t
            },
            { autoTrackExposure: !0 }
        ).enabled || n
    );
}
function u(e, t) {
    var n, r;
    let i = null != e ? a.Z.getJoinRequestGuild(e) : null,
        c = null != e ? o.Z.getInviteKeyForGuildId(e) : null,
        u = null != c ? (null === (n = o.Z.getInvite(c)) || void 0 === n ? void 0 : n.guild) : null;
    return !!(
        (null == i ? void 0 : i.hasFeature(s.oNc.MEMBER_VERIFICATION_ROLLOUT_TEST)) ||
        (null == u ? void 0 : null === (r = u.features) || void 0 === r ? void 0 : r.includes(s.oNc.MEMBER_VERIFICATION_ROLLOUT_TEST)) ||
        l.getCurrentConfig(
            {
                guildId: e,
                location: t
            },
            { autoTrackExposure: !0 }
        ).enabled
    );
}
