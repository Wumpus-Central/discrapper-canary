n.d(t, { T: () => u });
var r = n(591472),
    i = n(159300),
    l = n(430824),
    a = n(496675),
    o = n(996106),
    s = n(561205),
    c = n(981631);
function u() {
    let e = r.Z.getConnectedFrame();
    if (null != e)
        return {
            frame: e,
            channel: void 0,
            guild: void 0,
        };
    let t = (0, s.Z)();
    if (null == t) throw new o.Z({ errorCode: c.lTL.INVALID_CHANNEL }, "Invalid channel");
    let n = l.Z.getGuild(t.getGuildId());
    if (null == n) throw new o.Z({ errorCode: c.lTL.INVALID_CHANNEL }, "Invalid guild ".concat(t.getGuildId()));
    if (!(0, i.b)(a.Z, n, t))
        throw new o.Z({ errorCode: c.lTL.INVALID_PERMISSIONS }, "No invite permissions for ".concat(t.id));
    return {
        frame: void 0,
        channel: t,
        guild: n,
    };
}
