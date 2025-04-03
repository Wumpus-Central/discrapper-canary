n.d(t, {
    S: () => a,
    V: () => l
});
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-02_optimized_rpc_authorize',
    label: 'Optimized RPC Authorization Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable optimized RPC authorization',
            config: { enabled: !0 }
        }
    ],
    commonTriggerPoint: i.$P.CONNECTION_OPEN
});
function a() {
    return l.getCurrentConfig({ location: 'isOptimizedRPCAuthorizeEnabled' }).enabled;
}
