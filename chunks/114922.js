"use strict";
var r, i;
function s(e) {
    return e < r.HOURLY;
}
n.d(t, { d: () => s, j: () => r }),
    ((i = r || (r = {}))[(i.YEARLY = 0)] = "YEARLY"),
    (i[(i.MONTHLY = 1)] = "MONTHLY"),
    (i[(i.WEEKLY = 2)] = "WEEKLY"),
    (i[(i.DAILY = 3)] = "DAILY"),
    (i[(i.HOURLY = 4)] = "HOURLY"),
    (i[(i.MINUTELY = 5)] = "MINUTELY"),
    (i[(i.SECONDLY = 6)] = "SECONDLY");
