r.d(n, {
    w: function () {
        return o;
    }
});
var i = r(818083),
    a = r(987338);
let o = (0, i.B)({
    kind: 'user',
    id: '2024-10_rapidash_request_to_join_dm',
    label: 'Rapidash Request To Join DM option in Guild Popout',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'enabled',
            config: { enabled: !0 }
        }
    ]
});
