n.d(t, {
    L: () => o,
});
var r = n(311907),
    i = n(287809),
    a = n(474090),
    s = n(788868);

function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.PremiumTypes.TIER_2;
    return (0, r.bG)([i.default], () => {
        let t = i.default.getCurrentUser();
        return (0, a.YE)(t, e);
    });
}
