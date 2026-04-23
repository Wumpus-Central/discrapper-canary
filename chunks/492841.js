n.d(t, { A: () => a });
var i = n(406704),
    s = n(576705),
    l = n(143413),
    r = n(652215);
function a(e, t) {
    let n = !t.isSystemDM() && !(0, l.A)(e),
        a = s.A.can(r.xBc.PIN_MESSAGES, t) && s.A.can(r.xBc.READ_MESSAGE_HISTORY, t);
    return (
        n && (a || t.isPrivate()) && (0, i.jr)(t) && t.type !== r.rbe.GUILD_VOICE && t.type !== r.rbe.GUILD_STAGE_VOICE
    );
}
