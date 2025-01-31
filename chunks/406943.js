n.d(t, { D: () => r });
var i = n(674563);
function r(e) {
    let t;
    return e.isSystemUser() ? (t = i.Hb.SYSTEM_DM) : e.isClyde() ? (t = i.Hb.AI) : e.bot && (t = i.Hb.BOT), t;
}
