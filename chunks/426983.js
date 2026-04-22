i.d(t, { K: () => a, _: () => r });
var n,
    l = i(176128),
    r =
        (((n = {})[(n.PARTNERED = 0)] = "PARTNERED"),
        (n[(n.VERIFIED = 1)] = "VERIFIED"),
        (n[(n.VERIFIED_AND_PARTNERED = 2)] = "VERIFIED_AND_PARTNERED"),
        (n[(n.COMMUNITY = 3)] = "COMMUNITY"),
        (n[(n.DISCOVERABLE = 4)] = "DISCOVERABLE"),
        (n[(n.STAFF = 5)] = "STAFF"),
        (n[(n.NONE = 6)] = "NONE"),
        n);
function a(e) {
    return e.staff
        ? 5
        : e.verified && e.partnered
          ? 2
          : e.verified
            ? 1
            : e.partnered
              ? 0
              : e.community && e.visibility === l.qo.PUBLIC
                ? 4
                : e.community
                  ? 3
                  : 6;
}
