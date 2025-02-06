n.d(t, {
    S: () => a,
    V: () => r
});
var i = n(818083),
    l = n(987338);
let r = (0, i.B)({
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
    commonTriggerPoint: l.$P.CONNECTION_OPEN
});
function a() {
    return r.getCurrentConfig({ location: 'isOptimizedRPCAuthorizeEnabled' }).enabled;
}
