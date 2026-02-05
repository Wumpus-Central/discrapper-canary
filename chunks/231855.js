n.d(t, { A: () => a });
var i = n(427262),
    s = n(622017),
    r = n(113090);
function a() {
    let { useCachedData: e = !0, fetch: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { premiumGroupMembership: n } = (0, r.A)({ useCachedData: e, fetch: t }),
        { premiumGroupMembers: a } = (0, s.A)(n?.subscriptionId ?? null, { useCachedData: e, fetch: t });
    return a?.primary != null ? (0, i.$3)(a?.primary) : null;
}
