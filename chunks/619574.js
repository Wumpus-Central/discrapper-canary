n.d(t, { e: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-04_genshin_admin_signup',
    label: 'Genshin Admin Signup',
    defaultConfig: { showAdminSignup: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show admin signup',
            config: { showAdminSignup: !0 }
        }
    ]
});
function i(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { showAdminSignup: n } = r.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return n;
}
