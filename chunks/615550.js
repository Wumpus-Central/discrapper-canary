"use strict";
n.d(t, { Gb: () => l, TF: () => o, W_: () => c, n7: () => u, no: () => d }), n(375708);
var i,
    r,
    a,
    s,
    l =
        (((i = {}).BUG = "BUG"),
        (i.ALLOWED = "ALLOWED"),
        (i.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION"),
        i),
    o = (((r = {}).JOIN_RAID = "JOIN_RAID"), (r.MENTION_RAID = "MENTION_RAID"), r),
    d =
        (((a = {}).LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY"),
        (a.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS"),
        (a.LEGITIMATE_DMS = "LEGITIMATE_DMS"),
        (a.DM_SPAM = "DM_SPAM"),
        (a.JOIN_RAID = "JOIN_RAID"),
        (a.OTHER = "OTHER"),
        a);
function c(e) {
    return e.includes("LEGITIMATE_ACTIVITY")
        ? "LEGITIMATE_ACTIVITY"
        : e.includes("DM_SPAM")
          ? "DM_SPAM"
          : e.includes("JOIN_RAID")
            ? "JOIN_RAID"
            : "OTHER";
}
var u =
    (((s = {}).DM_SPAM = "DM_SPAM"),
    (s.MENTION_SPAM = "MENTION_SPAM"),
    (s.CHANNEL_SPAM = "CHANNEL_SPAM"),
    (s.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS"),
    (s.CHANGING_SETTINGS = "CHANGING_SETTINGS"),
    (s.OTHER = "OTHER"),
    s);
