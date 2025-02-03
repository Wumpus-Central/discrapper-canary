n.d(t, {
    K2: () => c,
    jS: () => u,
    tW: () => l
});
var i = n(442837),
    r = n(818083),
    a = n(944163),
    s = n(937111),
    o = n(981631);
let l = (0, r.B)({
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
function u(e, t) {
    let n = (0, i.e7)([s.Z, a.Z], () => {
        var t, n;
        let i = null != e ? s.Z.getJoinRequestGuild(e) : null,
            r = null === (t = a.Z.get(e)) || void 0 === t ? void 0 : t.guild;
        return (null == i ? void 0 : i.hasFeature(o.oNc.MEMBER_VERIFICATION_ROLLOUT_TEST)) || (null == r ? void 0 : null === (n = r.features) || void 0 === n ? void 0 : n.includes(o.oNc.MEMBER_VERIFICATION_ROLLOUT_TEST));
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
function c(e, t) {
    var n, i;
    let r = null != e ? s.Z.getJoinRequestGuild(e) : null,
        u = null === (n = a.Z.get(e)) || void 0 === n ? void 0 : n.guild;
    return !!(
        (null == r ? void 0 : r.hasFeature(o.oNc.MEMBER_VERIFICATION_ROLLOUT_TEST)) ||
        (null == u ? void 0 : null === (i = u.features) || void 0 === i ? void 0 : i.includes(o.oNc.MEMBER_VERIFICATION_ROLLOUT_TEST)) ||
        l.getCurrentConfig(
            {
                guildId: e,
                location: t
            },
            { autoTrackExposure: !0 }
        ).enabled
    );
}
