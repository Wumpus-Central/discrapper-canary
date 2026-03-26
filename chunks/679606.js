"use strict";
n.d(t, { jV: () => a, uN: () => o, ud: () => u });
var r = n(64700),
    i = n(735438),
    s = n(575593);
let a = (e) => {
        let t = e?.collectibles?.find((e) => {
            let { type: t } = e;
            return t === s.R.PROFILE_EFFECT;
        });
        if (null != t)
            return {
                skuId: t.sku_id,
                expiresAt: null != t.expires_at ? Math.floor(new Date(t.expires_at).getTime() / 1e3) : void 0,
            };
    },
    o = (e) => e.sort((e, t) => (e.zIndex ?? 0) - (t.zIndex ?? 0)),
    l = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
    u = (e) =>
        r.useMemo(() => {
            if (null == e) return e;
            let t = (0, i.cloneDeep)(e),
                n = l(
                    0,
                    t.effects.reduce((e, t) => {
                        let n = t.randomizedSources?.length ?? 0;
                        return n > 0 && (e = 0 === e ? n : Math.min(e, n)), e;
                    }, 0) - 1,
                );
            return (
                (t.effects = t.effects.map(
                    (e) => (
                        null != e.randomizedSources &&
                            e.randomizedSources.length > 0 &&
                            (e.src = e.randomizedSources[n].src),
                        e
                    ),
                )),
                t
            );
        }, [e]);
