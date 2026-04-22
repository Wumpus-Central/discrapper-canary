"use strict";
n.d(t, { Gb: () => o, TF: () => l, W_: () => d, n7: () => c, no: () => u }), n(985018);
var r,
    i,
    s,
    a,
    o =
        (((r = {}).BUG = "BUG"),
        (r.ALLOWED = "ALLOWED"),
        (r.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION"),
        r),
    l = (((i = {}).JOIN_RAID = "JOIN_RAID"), (i.MENTION_RAID = "MENTION_RAID"), i),
    u =
        (((s = {}).LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY"),
        (s.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS"),
        (s.LEGITIMATE_DMS = "LEGITIMATE_DMS"),
        (s.DM_SPAM = "DM_SPAM"),
        (s.JOIN_RAID = "JOIN_RAID"),
        (s.OTHER = "OTHER"),
        s);
function d(e) {
    return e.includes("LEGITIMATE_ACTIVITY")
        ? "LEGITIMATE_ACTIVITY"
        : e.includes("DM_SPAM")
          ? "DM_SPAM"
          : e.includes("JOIN_RAID")
            ? "JOIN_RAID"
            : "OTHER";
}
var c =
    (((a = {}).DM_SPAM = "DM_SPAM"),
    (a.MENTION_SPAM = "MENTION_SPAM"),
    (a.CHANNEL_SPAM = "CHANNEL_SPAM"),
    (a.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS"),
    (a.CHANGING_SETTINGS = "CHANGING_SETTINGS"),
    (a.OTHER = "OTHER"),
    a);
