e.d(i, { A: () => a });
var t = e(406704),
    c = e(576705),
    r = e(143413),
    o = e(652215);
function a(n, i) {
    let e = !i.isSystemDM() && !(0, r.A)(n),
        a = c.A.can(o.xBc.PIN_MESSAGES, i) && c.A.can(o.xBc.READ_MESSAGE_HISTORY, i);
    return (
        e &&
        (a || i.isPrivate()) &&
        (0, t.jr)(i) &&
        i.type !== o.rbe.GUILD_VOICE &&
        i.type !== o.rbe.GUILD_STAGE_VOICE &&
        i.type !== o.rbe.MEDIA_THREAD
    );
}
