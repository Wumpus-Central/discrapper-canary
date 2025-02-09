n.d(t, { Z: () => l });
var i = n(111672),
    s = n(358085);
function l() {
    let { sidechainAvailable: e } = i.Z.useExperiment({ location: 'UserSettingsVoiceProcessing' });
    return e && !(0, s.isWeb)();
}
