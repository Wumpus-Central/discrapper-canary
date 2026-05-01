e.d(i, { K: () => n, _: () => o });
var l,
    r = e(176128),
    o =
        (((l = {})[(l.PARTNERED = 0)] = "PARTNERED"),
        (l[(l.VERIFIED = 1)] = "VERIFIED"),
        (l[(l.VERIFIED_AND_PARTNERED = 2)] = "VERIFIED_AND_PARTNERED"),
        (l[(l.COMMUNITY = 3)] = "COMMUNITY"),
        (l[(l.DISCOVERABLE = 4)] = "DISCOVERABLE"),
        (l[(l.STAFF = 5)] = "STAFF"),
        (l[(l.NONE = 6)] = "NONE"),
        l);
function n(t) {
    return t.staff
        ? 5
        : t.verified && t.partnered
          ? 2
          : t.verified
            ? 1
            : t.partnered
              ? 0
              : t.community && t.visibility === r.qo.PUBLIC
                ? 4
                : t.community
                  ? 3
                  : 6;
}
