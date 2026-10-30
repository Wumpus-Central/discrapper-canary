e.d(t, { K: () => l, _: () => s });
var o,
    i = e(176128),
    s =
        (((o = {})[(o.PARTNERED = 0)] = "PARTNERED"),
        (o[(o.VERIFIED = 1)] = "VERIFIED"),
        (o[(o.VERIFIED_AND_PARTNERED = 2)] = "VERIFIED_AND_PARTNERED"),
        (o[(o.COMMUNITY = 3)] = "COMMUNITY"),
        (o[(o.DISCOVERABLE = 4)] = "DISCOVERABLE"),
        (o[(o.STAFF = 5)] = "STAFF"),
        (o[(o.NONE = 6)] = "NONE"),
        o);
function l(r) {
    return r.staff
        ? 5
        : r.verified && r.partnered
          ? 2
          : r.verified
            ? 1
            : r.partnered
              ? 0
              : r.community && r.visibility === i.qo.PUBLIC
                ? 4
                : r.community
                  ? 3
                  : 6;
}
