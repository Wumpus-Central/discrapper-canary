n.d(t, {
    O: () => o,
    o: () => c,
}),
    n(388685);
var i,
    r = n(473749),
    l = n(392711),
    a = n(195045),
    o =
        (((i = {}).IDLE = "idle"),
        (i.HEAD_TURN = "headTurn"),
        (i.HEAD_TURN_BACK = "headTurnBack"),
        (i.TALKING = "talking"),
        i);
let s = {
        idle: ["headTurnBack", "talking"],
        headTurn: ["idle", "talking"],
        headTurnBack: ["headTurn"],
        talking: ["idle", "headTurnBack"],
    },
    c = (e) => {
        let [t, n] = r.useState("idle"),
            [i, o] = r.useState(),
            c = (0, a.Z)(),
            u = r.useMemo(() => (null == c ? void 0 : c.characters[e]), [c, e]),
            d = r.useCallback(() => {
                if (null == u) return i;
                let e = u[t];
                return (0, l.sample)(e);
            }, [i, u, t]);
        return (
            r.useEffect(() => {
                o(d());
            }, [c, e, d]),
            r.useEffect(() => {
                o(() => d());
            }, [t]),
            {
                animationState: t,
                updateAnimationState: (e) => (e === t ? t : s[e].includes(t) ? (n(e), e) : t),
                asset: i,
                setAsset: o,
                sampleAsset: d,
                findAnimationTree: () => {
                    let e = 0,
                        n = new Set([t]);
                    for (; e < 10; ) e += 1;
                    return n;
                },
                characterAssets: u,
            }
        );
    };
