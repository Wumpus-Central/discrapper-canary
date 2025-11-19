n.d(t, { Z: () => l });
var r = n(473749),
    i = n(913527),
    a = n.n(i),
    o = n(55935);
let s = a().duration(30, "days");
function l(e, t) {
    return r.useMemo(
        () =>
            (0, o.vc)(
                t
                    ? null != e.outboundRedemptionEndDate
                        ? a()(e.outboundRedemptionEndDate)
                        : a()(e.endDate).add(s)
                    : a()(e.endDate),
                "LL",
            ),
        [e, t],
    );
}
