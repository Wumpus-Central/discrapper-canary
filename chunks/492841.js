n.d(t, { A: () => a });
var i = n(406704),
    l = n(576705),
    s = n(143413),
    r = n(652215);
function a(e, t) {
    let n = !t.isSystemDM() && !(0, s.A)(e),
        a = l.A.can(r.xBc.PIN_MESSAGES, t) && l.A.can(r.xBc.READ_MESSAGE_HISTORY, t);
    return (
        n && (a || t.isPrivate()) && (0, i.jr)(t) && t.type !== r.rbe.GUILD_VOICE && t.type !== r.rbe.GUILD_STAGE_VOICE
    );
}
