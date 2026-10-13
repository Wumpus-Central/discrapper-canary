n.d(t, { A: () => c });
var i = n(439372),
    r = n(723702),
    a = n(536194),
    s = n(674966),
    l = n(765682),
    o = n(652215);
class d extends i.A {
    actions = { AUDIO_SET_MODE: (e) => this.handleAudioSetMode(e) };
    isEnabled() {
        return (0, r.isDesktop)() && (0, r.isMac)() && !a.P.isDiscordTestSet();
    }
    handleAudioSetMode(e) {
        let { mode: t } = e;
        this.isEnabled() && t === o.TBI.PUSH_TO_TALK && s.A.requestPermission(l.iL.INPUT_MONITORING);
    }
}
let c = new d();
