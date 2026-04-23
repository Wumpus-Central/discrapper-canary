s.d(t, { A: () => n });
var r = s(427262),
    a = s(622017),
    i = s(113090);
function n() {
    let { useCachedData: e = !0, fetch: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { premiumGroupMembership: s } = (0, i.A)({ useCachedData: e, fetch: t }),
        { premiumGroupMembers: n } = (0, a.A)(s?.subscriptionId ?? null, { useCachedData: e, fetch: t });
    return n?.primary != null ? (0, r.$3)(n?.primary) : null;
}
