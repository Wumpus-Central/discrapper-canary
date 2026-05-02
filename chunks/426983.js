t.d(o, { K: () => l, _: () => i });
var e,
    s = t(176128),
    i =
        (((e = {})[(e.PARTNERED = 0)] = "PARTNERED"),
        (e[(e.VERIFIED = 1)] = "VERIFIED"),
        (e[(e.VERIFIED_AND_PARTNERED = 2)] = "VERIFIED_AND_PARTNERED"),
        (e[(e.COMMUNITY = 3)] = "COMMUNITY"),
        (e[(e.DISCOVERABLE = 4)] = "DISCOVERABLE"),
        (e[(e.STAFF = 5)] = "STAFF"),
        (e[(e.NONE = 6)] = "NONE"),
        e);
function l(r) {
    return r.staff
        ? 5
        : r.verified && r.partnered
          ? 2
          : r.verified
            ? 1
            : r.partnered
              ? 0
              : r.community && r.visibility === s.qo.PUBLIC
                ? 4
                : r.community
                  ? 3
                  : 6;
}
