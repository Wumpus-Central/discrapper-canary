"use strict";
n.d(t, { N9: () => l, jL: () => c, jU: () => u }), n(801541);
var i,
    r = n(889137),
    s = n(652215),
    a = n(790782),
    o = n(375708),
    l =
        (((i = {}).ALL_MESSAGES = "all_messages"),
        (i.MENTIONS = "mentions"),
        (i.NOTHING = "nothing"),
        (i.CUSTOM = "custom"),
        i);
function u(e, t) {
    return (0, r.YW)([t, e])
        .with([s.orn.ALL_MESSAGES, a.e.ALL_MESSAGES], () => "all_messages")
        .with([s.orn.ONLY_MENTIONS, a.e.UNSET], () => "mentions")
        .with([s.orn.ONLY_MENTIONS, a.e.ONLY_MENTIONS], () => "mentions")
        .with([s.orn.NO_MESSAGES, a.e.UNSET], () => "nothing")
        .with([s.orn.NO_MESSAGES, a.e.ONLY_MENTIONS], () => "nothing")
        .otherwise(() => "custom");
}
function c(e) {
    return (0, r.YW)(e)
        .with("all_messages", () => o.intl.string(o.t.hZrr6k))
        .with("mentions", () => o.intl.string(o.t.y59NJm))
        .with("nothing", () => o.intl.string(o.t["pGn/bJ"]))
        .with("custom", () => o.intl.string(o.t["32yow9"]))
        .exhaustive();
}
