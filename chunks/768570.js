"use strict";
n.d(t, { $H: () => c, B7: () => d, Q_: () => _, nC: () => a, oi: () => s, su: () => u, us: () => l, yQ: () => o });
var r = n(461012),
    i = n(652215),
    s = (function (e) {
        return (e.KEY_PRESS = "key_press"), (e.CLICK = "click"), e;
    })({});
let a = "SearchStore",
    o = "SearchHistoryStore_Web",
    l = { sort_by: "timestamp", sort_order: "desc" },
    u = { 1: { has: ["image", "video"] }, 3: { has: ["file"] }, 0: {}, 2: { has: ["link"] }, 4: { pinned: !0 } };
var c = (function (e) {
    return (
        (e.RECENT = "recent"),
        (e.MEMBERS = "members"),
        (e.PEOPLE = "people"),
        (e.MEDIA = "media"),
        (e.PINS = "pins"),
        (e.MESSAGES = "messages"),
        (e.LINKS = "links"),
        (e.FILES = "files"),
        (e.GUILD_CHANNELS = "guild_channels"),
        (e.THREADS = "threads"),
        e
    );
})({});
let d = { recent: 1, media: 1, pins: 4, messages: 0, links: 2, files: 3 };
i.I4_.THREAD,
    i.I4_.CHANNEL,
    i.I4_.GUILD_CHANNEL,
    i.I4_.GUILD,
    i.I4_.DMS,
    i.I4_.THREAD,
    i.I4_.CHANNEL,
    i.I4_.GUILD_CHANNEL,
    i.I4_.GUILD,
    i.I4_.DMS,
    r.b.COZY;
var _ = (function (e) {
    return (
        (e.SEARCH_TEXT_INPUT = "search_text_input"),
        (e.SEARCH_POPOUT = "search_popout"),
        (e.SEARCH_FILTERS_MODAL = "search_filters_modal"),
        (e.SEARCH_XDM_SETTINGS = "search_xdm_settings"),
        e
    );
})({});
