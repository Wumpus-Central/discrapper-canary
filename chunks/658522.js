i.d(t, { J: () => _ });
var n = i(311907),
    l = i(817281),
    s = i(801644),
    r = i(419954),
    a = i(964404),
    u = i(780964),
    o = i(698723),
    d = i(985018);
let _ = (0, r.zD)(u.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
    useTitle: () => d.intl.string(d.t.pZ0vr4),
    useSubtitle: () => d.intl.string(d.t.tVbzoZ),
    useValue: function () {
        return (0, n.bG)([a.Ay], () => !a.Ay.disableHardwareMuteSilenceAlert);
    },
    setValue: function (e) {
        (0, o.A)("hardware_mute_silence_alert_enabled", e, !a.Ay.disableHardwareMuteSilenceAlert),
            l.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
    },
    usePredicate: function () {
        let { enableHardwareSilenceWarning: e } = s.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
        return e;
    },
});
