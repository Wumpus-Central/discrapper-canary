var r = n(582128),
    l = n(288106),
    i = n(871123);
n.d(
    t,
    {},
    {
        h: function (e) {
            let t = e?.rewardRequirements,
                n = e?.rewardStatus;
            return r.useMemo(() => {
                if (n === l.GM.EARNED || n === l.GM.CONSUMED) return null;
                let e = (t ?? []).filter(i.Ww);
                return 1 !== e.length || 1 !== e[0].skuIds.length
                    ? null
                    : { applicationId: e[0].applicationId, skuId: e[0].skuIds[0] };
            }, [t, n]);
        },
    },
);
