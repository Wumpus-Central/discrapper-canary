"use strict";
n.d(t, { En: () => o, FZ: () => a, qf: () => s });
var r,
    i,
    s =
        (((r = {})[(r.UNKNOWN = 0)] = "UNKNOWN"),
        (r[(r.ADMIN = 1)] = "ADMIN"),
        (r[(r.USER = 2)] = "USER"),
        (r[(r.FRACTIONAL_PREMIUM = 3)] = "FRACTIONAL_PREMIUM"),
        (r[(r.DEFERRED_START = 4)] = "DEFERRED_START"),
        (r[(r.USER_TEMPORARY_BAN = 5)] = "USER_TEMPORARY_BAN"),
        r);
let a = { CAN_MAKE_SUBSCRIPTION_UPDATES: new Set([3, 4]) };
var o =
    (((i = {})[(i.NONE = 0)] = "NONE"),
    (i[(i.ADD_PERKS_IF_DETECTED = 1)] = "ADD_PERKS_IF_DETECTED"),
    (i[(i.FULL_RESYNC = 2)] = "FULL_RESYNC"),
    i);
