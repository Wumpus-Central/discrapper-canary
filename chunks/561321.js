n.d(t, { Rg: () => c, eK: () => u, fS: () => g, v: () => m });
var i = n(311907),
    l = n(734057),
    s = n(71393),
    r = n(488926),
    a = n(863694),
    o = n(652215),
    d = n(985018);
function c(e, t) {
    return (0, i.bG)(
        [a.A],
        () => a.A.editedDefaultChannelIds.has(e) || (null != t && a.A.editedDefaultChannelIds.has(t)),
    );
}
function u(e, t) {
    return (0, i.bG)([a.A], () => e === t || (null != t && a.A.editedDefaultChannelIds.has(t)));
}
function m(e, t) {
    return (0, i.bG)([a.A, l.A], () =>
        null != t && a.A.editedDefaultChannelIds.has(t)
            ? d.intl.string(d.t.Lz94y1)
            : r.MJ(o.xBc.VIEW_CHANNEL, l.A.getChannel(e))
              ? void 0
              : d.intl.string(d.t["031cXt"]),
    );
}
function g(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.getGuild(e)?.rulesChannelId === t),
        r = (0, i.bG)([l.A], () => l.A.getChannel(t)?.isGuildVocal());
    return n ? d.intl.string(d.t["2XWEK9"]) : r ? d.intl.string(d.t.t6iJLY) : void 0;
}
