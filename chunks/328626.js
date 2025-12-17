n.d(t, {
    g: () => a,
    y: () => s,
}),
    n(388685);
var r,
    l = n(473749),
    a =
        (((r = {}).MOUNTED = "mounted"),
        (r.SORT_OUT = "sort-out"),
        (r.SORT_IN = "sort-in"),
        (r.SHUFFLE_OUT = "shuffle-out"),
        (r.SHUFFLE_IN = "shuffle-in"),
        (r.FINISHED = "finished"),
        r);
let s = () => {
    let [e, t] = l.useState("mounted"),
        [n, r] = l.useState(!1),
        a = l.useRef(null);
    return (
        l.useEffect(() => {
            n && "finished" === e && (null !== a.current && a.current.focus(), r(!1));
        }, [e, n]),
        {
            animationPhase: e,
            startAnimation: l.useCallback((e) => {
                let { isShuffling: n, onOutroComplete: l, returnRef: s } = e;
                (null == s ? void 0 : s.current) != null && ((a.current = s.current), r(!0)),
                    t(n ? "shuffle-out" : "sort-out"),
                    setTimeout(
                        () => {
                            l(),
                                t(n ? "shuffle-in" : "sort-in"),
                                setTimeout(
                                    () => {
                                        t("finished");
                                    },
                                    n ? 200 : 300,
                                );
                        },
                        n ? 250 : 300,
                    );
            }, []),
        }
    );
};
