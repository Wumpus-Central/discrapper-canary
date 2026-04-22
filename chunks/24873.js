"use strict";
n.d(t, { N9: () => l, jL: () => d, jU: () => u }), n(801541);
var r,
    i = n(889137),
    s = n(652215),
    a = n(790782),
    o = n(985018),
    l =
        (((r = {}).ALL_MESSAGES = "all_messages"),
        (r.MENTIONS = "mentions"),
        (r.NOTHING = "nothing"),
        (r.CUSTOM = "custom"),
        r);
function u(e, t) {
    return (0, i.YW)([t, e])
        .with([s.orn.ALL_MESSAGES, a.e.ALL_MESSAGES], () => "all_messages")
        .with([s.orn.ONLY_MENTIONS, a.e.UNSET], () => "mentions")
        .with([s.orn.ONLY_MENTIONS, a.e.ONLY_MENTIONS], () => "mentions")
        .with([s.orn.NO_MESSAGES, a.e.UNSET], () => "nothing")
        .with([s.orn.NO_MESSAGES, a.e.ONLY_MENTIONS], () => "nothing")
        .otherwise(() => "custom");
}
function d(e) {
    return (0, i.YW)(e)
        .with("all_messages", () => o.intl.string(o.t.hZrr6k))
        .with("mentions", () => o.intl.string(o.t.y59NJm))
        .with("nothing", () => o.intl.string(o.t["pGn/bJ"]))
        .with("custom", () => o.intl.string(o.t["32yow9"]))
        .exhaustive();
}
