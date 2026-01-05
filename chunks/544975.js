n.d(t, {
    O: () => o,
    o: () => l,
}),
    n(388685);
var r = n(473749),
    i = n(392711),
    a = n(195045),
    o = (function (e) {
        return (
            (e.IDLE = "idle"),
            (e.HEAD_TURN = "headTurn"),
            (e.HEAD_TURN_BACK = "headTurnBack"),
            (e.TALKING = "talking"),
            e
        );
    })({});
let s = {
        idle: ["headTurnBack", "talking"],
        headTurn: ["idle", "talking"],
        headTurnBack: ["headTurn"],
        talking: ["idle", "headTurnBack"],
    },
    l = (e) => {
        let [t, n] = r.useState("idle"),
            [o, l] = r.useState(),
            c = (0, a.Z)(),
            u = r.useMemo(() => (null == c ? void 0 : c.characters[e]), [c, e]),
            d = r.useCallback(() => {
                if (null == u) return o;
                let e = u[t];
                return (0, i.sample)(e);
            }, [o, u, t]);
        r.useEffect(() => {
            l(d());
        }, [c, e, d]),
            r.useEffect(() => {
                l(() => d());
            }, [t]);
        let f = () => {
                let e = 10,
                    n = !1,
                    r = 0,
                    i = new Set([t]);
                for (; !n && r < e; ) r += 1;
                return i;
            },
            p = (e) => (e === t ? t : s[e].includes(t) ? (n(e), e) : t);
        return {
            animationState: t,
            updateAnimationState: p,
            asset: o,
            setAsset: l,
            sampleAsset: d,
            findAnimationTree: f,
            characterAssets: u,
        };
    };
