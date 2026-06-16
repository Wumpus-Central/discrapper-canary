"use strict";
n.d(t, { En: () => o, FZ: () => a, qf: () => s });
var i,
    r,
    s =
        (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
        (i[(i.ADMIN = 1)] = "ADMIN"),
        (i[(i.USER = 2)] = "USER"),
        (i[(i.FRACTIONAL_PREMIUM = 3)] = "FRACTIONAL_PREMIUM"),
        (i[(i.DEFERRED_START = 4)] = "DEFERRED_START"),
        (i[(i.USER_TEMPORARY_BAN = 5)] = "USER_TEMPORARY_BAN"),
        i);
let a = { CAN_MAKE_SUBSCRIPTION_UPDATES: new Set([3, 4]) };
var o =
    (((r = {})[(r.NONE = 0)] = "NONE"),
    (r[(r.ADD_PERKS_IF_DETECTED = 1)] = "ADD_PERKS_IF_DETECTED"),
    (r[(r.FULL_RESYNC = 2)] = "FULL_RESYNC"),
    r);
