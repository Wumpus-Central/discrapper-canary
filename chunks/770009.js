l.d(n, { Z: () => h });
var t = l(200651);
l(192379);
var i = l(512722),
    r = l.n(i),
    a = l(442837),
    s = l(52396),
    o = l(592125),
    u = l(970184),
    c = l(151200),
    d = l(96513);
function m(e) {
    let { contentInventoryEntry: n, channel: l } = e,
        { parsedEntry: i } = (0, s.B)();
    return (0, t.jsx)(c.Z, {
        ...i,
        entry: n,
        channel: l
    });
}
function h(e) {
    let n = (0, u.CJ)();
    r()(null != n, 'Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?');
    let { channelId: l } = n,
        i = (0, a.e7)([o.Z], () => o.Z.getChannel(l));
    return (
        r()(null != i, 'channel must be defined'),
        (0, t.jsx)(s.r, {
            location: d._.EMBED,
            entry: e.contentInventoryEntry,
            channel: i,
            errorFallback: null,
            children: (0, t.jsx)(m, {
                ...e,
                channel: i
            })
        })
    );
}
