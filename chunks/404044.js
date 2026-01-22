n.d(t, {
    A: () => u,
});
var r = n(73153),
    i = n(272355),
    a = n(723702),
    s = n(536194),
    o = n(765682),
    l = n(652215);
class c extends i.A {
    isEnabled() {
        return (0, a.isDesktop)() && (0, a.isMac)() && !s.P.isDiscordTestSet();
    }
    _initialize() {
        this.isEnabled() && r.h.subscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
    }
    _terminate() {
        this.isEnabled() && r.h.unsubscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
    }
    handleAudioSetMode(e) {
        let { mode: t } = e;
        t === l.TBI.PUSH_TO_TALK && n(674966).A.requestPermission(o.iL.INPUT_MONITORING);
    }
}
let u = new c();
