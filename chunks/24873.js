(n.d(t, { N9: () => l, hJ: () => d, jU: () => o }), n(801541));
var i,
    r = n(889137),
    a = n(652215),
    s = n(790782);
n(375708);
var l =
    (((i = {}).ALL_MESSAGES = "all_messages"),
    (i.HYBRID = "hybrid"),
    (i.MENTIONS = "mentions"),
    (i.NOTHING = "nothing"),
    (i.CUSTOM = "custom"),
    i);
function o(e, t) {
    return (0, r.YW)([t, e])
        .with([a.orn.ALL_MESSAGES, s.e.ALL_MESSAGES], () => "all_messages")
        .with([a.orn.ONLY_MENTIONS, s.e.UNSET], () => "mentions")
        .with([a.orn.ONLY_MENTIONS, s.e.ONLY_MENTIONS], () => "mentions")
        .with([a.orn.NO_MESSAGES, s.e.UNSET], () => "nothing")
        .with([a.orn.NO_MESSAGES, s.e.ONLY_MENTIONS], () => "nothing")
        .otherwise(() => "custom");
}
function d(e, t) {
    return e === s.e.ALL_MESSAGES && t === a.orn.ONLY_MENTIONS ? "hybrid" : o(e, t);
}
