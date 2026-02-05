n.d(t, { A: () => p });
var l = n(627968);
n(64700);
var a = n(284009),
    r = n.n(a),
    s = n(311907),
    i = n(694705),
    o = n(734057),
    d = n(207963),
    c = n(681168),
    u = n(158611);
function m(e) {
    let { contentInventoryEntry: t, channel: n } = e,
        { parsedEntry: a } = (0, i.v)();
    return (0, l.jsx)(c.A, { ...a, entry: t, channel: n });
}
function p(e) {
    let t = (0, d.jc)();
    r()(
        null != t,
        "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
    );
    let { channelId: n } = t,
        a = (0, s.bG)([o.A], () => o.A.getChannel(n));
    return (
        r()(null != a, "channel must be defined"),
        (0, l.jsx)(i.f, {
            location: u.Z.EMBED,
            entry: e.contentInventoryEntry,
            channel: a,
            errorFallback: null,
            children: (0, l.jsx)(m, { ...e, channel: a }),
        })
    );
}
