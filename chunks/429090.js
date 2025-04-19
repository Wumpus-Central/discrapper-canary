n.d(t, { a: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-04_gdm_born_this_named',
    label: 'GDM Born This Named',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function i(e, t) {
    let { enabled: n } = r.useExperiment({ location: e }, t);
    return n;
}
