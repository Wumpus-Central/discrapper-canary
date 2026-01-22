n.d(t, { A: () => s });
var r = n(427262),
    i = n(622017),
    a = n(113090);
function s() {
    var e;
    let { useCachedData: t = !0, fetch: n = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { premiumGroupMembership: s } = (0, a.A)({
            useCachedData: t,
            fetch: n,
        }),
        { premiumGroupMembers: o } = (0, i.A)(null != (e = null == s ? void 0 : s.subscriptionId) ? e : null, {
            useCachedData: t,
            fetch: n,
        });
    return (null == o ? void 0 : o.primary) != null ? (0, r.$3)(null == o ? void 0 : o.primary) : null;
}
