r.d(t, { q: () => i });
var n = r(818083),
    l = r(987338);
let i = (0, n.B)({
    kind: 'user',
    id: '2025-06_android_shop_lazy_load_price',
    label: 'Android Shop Lazy Load Price',
    defaultConfig: { lazyLoadPrice: !1 },
    commonTriggerPoint: l.$P.COLLECTIBLES_SHOP_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Lazy load price',
            config: { lazyLoadPrice: !0 }
        }
    ]
});
