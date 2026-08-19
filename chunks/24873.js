"use strict";
n.d(t, { N9: () => o, jL: () => c, jU: () => d }), n(801541);
var i,
    r = n(889137),
    a = n(652215),
    s = n(790782),
    l = n(375708),
    o =
        (((i = {}).ALL_MESSAGES = "all_messages"),
        (i.MENTIONS = "mentions"),
        (i.NOTHING = "nothing"),
        (i.CUSTOM = "custom"),
        i);
function d(e, t) {
    return (0, r.YW)([t, e])
        .with([a.orn.ALL_MESSAGES, s.e.ALL_MESSAGES], () => "all_messages")
        .with([a.orn.ONLY_MENTIONS, s.e.UNSET], () => "mentions")
        .with([a.orn.ONLY_MENTIONS, s.e.ONLY_MENTIONS], () => "mentions")
        .with([a.orn.NO_MESSAGES, s.e.UNSET], () => "nothing")
        .with([a.orn.NO_MESSAGES, s.e.ONLY_MENTIONS], () => "nothing")
        .otherwise(() => "custom");
}
function c(e) {
    return (0, r.YW)(e)
        .with("all_messages", () => l.intl.string(l.t.hZrr6k))
        .with("mentions", () => l.intl.string(l.t.y59NJm))
        .with("nothing", () => l.intl.string(l.t["pGn/bJ"]))
        .with("custom", () => l.intl.string(l.t["32yow9"]))
        .exhaustive();
}
