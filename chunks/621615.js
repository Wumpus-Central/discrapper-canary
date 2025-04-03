n.d(t, { Z: () => r });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2023-09_proxy_block_notice',
    label: 'Proxy Block Experiment',
    defaultConfig: { eligibleForNotice: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show nag bar when proxy blocks an API request',
            config: { eligibleForNotice: !0 }
        }
    ]
});
