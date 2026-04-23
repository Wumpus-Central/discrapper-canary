n.d(t, { A: () => _ });
var a = n(627968);
n(64700);
var l = n(284009),
    r = n.n(l),
    i = n(311907),
    s = n(694705),
    o = n(734057),
    d = n(207963),
    c = n(681168),
    u = n(158611);
function m(e) {
    let { contentInventoryEntry: t, channel: n } = e,
        { parsedEntry: l } = (0, s.v)();
    return (0, a.jsx)(c.A, { ...l, entry: t, channel: n });
}
function _(e) {
    let t = (0, d.jc)();
    r()(
        null != t,
        "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
    );
    let { channelId: n } = t,
        l = (0, i.bG)([o.A], () => o.A.getChannel(n));
    return (
        r()(null != l, "channel must be defined"),
        (0, a.jsx)(s.f, {
            location: u.Z.EMBED,
            entry: e.contentInventoryEntry,
            channel: l,
            errorFallback: null,
            children: (0, a.jsx)(m, { ...e, channel: l }),
        })
    );
}
