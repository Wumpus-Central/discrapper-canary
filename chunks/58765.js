n.d(t, { Z: () => r });
var i = n(111672),
    s = n(358085);
function r() {
    let { sidechainAvailable: e } = i.Z.useExperiment({ location: 'UserSettingsVoiceProcessing' });
    return e && !(0, s.isWeb)();
}
