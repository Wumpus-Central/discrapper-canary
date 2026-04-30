e.d(i, { A: () => o });
var t = e(406704),
    c = e(576705),
    r = e(143413),
    a = e(652215);
function o(n, i) {
    let e = !i.isSystemDM() && !(0, r.A)(n),
        o = c.A.can(a.xBc.PIN_MESSAGES, i) && c.A.can(a.xBc.READ_MESSAGE_HISTORY, i);
    return (
        e && (o || i.isPrivate()) && (0, t.jr)(i) && i.type !== a.rbe.GUILD_VOICE && i.type !== a.rbe.GUILD_STAGE_VOICE
    );
}
