n.d(t, { l: () => o });
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-04_rich_presence_activity_invite_redesign',
    label: 'Rich Presence Activity Invite Redesign Experiment',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Rich Presence Activity Invite Redesign',
            config: { enabled: !0 }
        }
    ]
});
function o() {
    return a.getCurrentConfig({ location: 'getIsRichPresenceActivityInviteRedesignEnabled' }).enabled;
}
