n.d(t, { A: () => c });
var i = n(439372),
    r = n(723702),
    a = n(536194),
    s = n(674966),
    l = n(765682),
    o = n(652215);
class d extends i.A {
    actions = this.isEnabled() ? { AUDIO_SET_MODE: this.handleAudioSetMode } : {};
    isEnabled() {
        return (0, r.isDesktop)() && (0, r.isMac)() && !a.P.isDiscordTestSet();
    }
    handleAudioSetMode(e) {
        let { mode: t } = e;
        t === o.TBI.PUSH_TO_TALK && s.A.requestPermission(l.iL.INPUT_MONITORING);
    }
}
let c = new d();
