n.d(t, { D: () => i });
var r = n(674563);
function i(e) {
    let t;
    return e.isSystemUser() ? (t = r.Hb.SYSTEM_DM) : e.isClyde() ? (t = r.Hb.AI) : e.bot && (t = r.Hb.BOT), t;
}
