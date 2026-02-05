"use strict";
n.d(t, { N9: () => o, jL: () => u, jU: () => l }), n(801541);
var r = n(889137),
    i = n(652215),
    a = n(790782),
    s = n(985018),
    o = (function (e) {
        return (
            (e.ALL_MESSAGES = "all_messages"),
            (e.MENTIONS = "mentions"),
            (e.NOTHING = "nothing"),
            (e.CUSTOM = "custom"),
            e
        );
    })({});
function l(e, t) {
    return (0, r.YW)([t, e])
        .with([i.orn.ALL_MESSAGES, a.e.ALL_MESSAGES], () => "all_messages")
        .with([i.orn.ONLY_MENTIONS, a.e.UNSET], () => "mentions")
        .with([i.orn.ONLY_MENTIONS, a.e.ONLY_MENTIONS], () => "mentions")
        .with([i.orn.NO_MESSAGES, a.e.UNSET], () => "nothing")
        .with([i.orn.NO_MESSAGES, a.e.ONLY_MENTIONS], () => "nothing")
        .otherwise(() => "custom");
}
function u(e) {
    return (0, r.YW)(e)
        .with("all_messages", () => s.intl.string(s.t.hZrr6k))
        .with("mentions", () => s.intl.string(s.t.y59NJm))
        .with("nothing", () => s.intl.string(s.t["pGn/bJ"]))
        .with("custom", () => s.intl.string(s.t["32yow9"]))
        .exhaustive();
}
