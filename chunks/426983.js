"use strict";
n.d(t, { K: () => a, _: () => s });
var i,
    r = n(176128),
    s =
        (((i = {})[(i.PARTNERED = 0)] = "PARTNERED"),
        (i[(i.VERIFIED = 1)] = "VERIFIED"),
        (i[(i.VERIFIED_AND_PARTNERED = 2)] = "VERIFIED_AND_PARTNERED"),
        (i[(i.COMMUNITY = 3)] = "COMMUNITY"),
        (i[(i.DISCOVERABLE = 4)] = "DISCOVERABLE"),
        (i[(i.STAFF = 5)] = "STAFF"),
        (i[(i.NONE = 6)] = "NONE"),
        i);
function a(e) {
    return e.staff
        ? 5
        : e.verified && e.partnered
          ? 2
          : e.verified
            ? 1
            : e.partnered
              ? 0
              : e.community && e.visibility === r.qo.PUBLIC
                ? 4
                : e.community
                  ? 3
                  : 6;
}
