n.d(t, { Z: () => a }), n(388685);
var i = n(192379),
    r = n(597688),
    s = n(884697),
    l = n(223143);
let a = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, a] = i.useState(),
        { categories: o, purchases: c } = (0, l.ZP)({ location: 'useTryItOutAvatarDecoration' });
    return (
        i.useEffect(() => {
            (null == n || 0 === n.size) && a(o);
        }, [o, n]),
        i.useMemo(() => {
            if (null != e) return e;
            if (null == n || !t) return;
            let i = (0, s.iC)(c, n).filter((e) => {
                let { skuId: t } = e,
                    n = r.Z.getProduct(t);
                return (0, s.G1)(n);
            });
            return i[Math.floor(Math.random() * i.length)];
        }, [n, e, c, t])
    );
};
