n.d(t, {
    Rg: () => d,
    eK: () => u,
    fS: () => g,
    v: () => f,
});
var r = n(311907),
    i = n(734057),
    l = n(71393),
    s = n(488926),
    a = n(863694),
    c = n(652215),
    o = n(985018);

function d(e, t) {
    return (0, r.bG)(
        [a.A],
        () => a.A.editedDefaultChannelIds.has(e) || (null != t && a.A.editedDefaultChannelIds.has(t)),
    );
}

function u(e, t) {
    return (0, r.bG)([a.A], () => e === t || (null != t && a.A.editedDefaultChannelIds.has(t)));
}

function f(e, t) {
    return (0, r.bG)([a.A, i.A], () =>
        null != t && a.A.editedDefaultChannelIds.has(t)
            ? o.intl.string(o.t.Lz94y1)
            : s.MJ(c.xBc.VIEW_CHANNEL, i.A.getChannel(e))
              ? void 0
              : o.intl.string(o.t["031cXt"]),
    );
}

function g(e, t) {
    let n = (0, r.bG)([l.A], () => {
            var n;
            return (null == (n = l.A.getGuild(e)) ? void 0 : n.rulesChannelId) === t;
        }),
        s = (0, r.bG)([i.A], () => {
            var e;
            return null == (e = i.A.getChannel(t)) ? void 0 : e.isGuildVocal();
        });
    return n ? o.intl.string(o.t["2XWEK9"]) : s ? o.intl.string(o.t.t6iJLY) : void 0;
}
