n.d(t, { X: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-12_save_voice_message_menu_item',
    label: 'Save voice message menu item on web',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Save voice message menu item active',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return r.useExperiment({ location: e }, { autoTrackExposure: t }).enabled;
}
