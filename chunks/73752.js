n.d(t, { Z: () => i });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2021-04_longer_group_dm_invites',
    label: 'Longer Group DM Invites',
    defaultConfig: { inviteMaxAgeSeconds: 86400 },
    treatments: [
        {
            id: 1,
            label: 'Makes group DM invites expire after 1 week.',
            config: { inviteMaxAgeSeconds: 604800 }
        }
    ]
});
