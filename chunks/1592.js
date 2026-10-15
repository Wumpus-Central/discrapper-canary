i.d(t, { Z: () => A });
var n = i(582128),
    r = i(435558),
    a = i.n(r),
    s = i(17928),
    l = i(277984),
    u = i(363487),
    o = i(71393),
    c = i(576705),
    d = i(287809),
    p = i(615405),
    f = i(166403),
    h = i(474090),
    b = i(685073);
let g = (0, i(945810).mj)({
    name: "2026-10-server-tag-upsell-on-profile",
    kind: "user",
    defaultConfig: { enabled: !1, ignoreSubscriptionPlatform: !1 },
    variations: {
        1: { enabled: !0, ignoreSubscriptionPlatform: !1 },
        2: { enabled: !0, ignoreSubscriptionPlatform: !0 },
    },
});
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g,
        i = (0, s.yK)([o.A, c.A], () =>
            a().sortBy(
                o.A.getGuildsArray().filter((e) => !(0, b.Rg)(e) && !0 === (0, u.G)(c.A, e)),
                (e) => e.name.toLowerCase(),
            ),
        ),
        r = (0, s.bG)([d.default, f.A], () => {
            var e;
            return (
                !(0, h.ki)(d.default.getCurrentUser()) ||
                (f.A.hasFetchedSubscriptions() &&
                    (null == (e = f.A.getPremiumTypeSubscription()) ||
                        !(e.isPurchasedExternally && null != e.paymentGateway)))
            );
        });
    n.useEffect(() => {
        !(0, h.ki)(d.default.getCurrentUser()) ||
            f.A.hasFetchedSubscriptions() ||
            p.A.isSubscriptionFetching ||
            (0, l.hP)().catch(() => {});
    }, []);
    let A = i.length > 0,
        { enabled: m, ignoreSubscriptionPlatform: y } = t.useConfig({ location: A && r ? e : `${e}-Disabled` });
    return { creatableGuilds: i, isUpsellVisible: m && A && (r || y) };
}
