n.d(t, {
    j: () => E,
});
var r = n(64700),
    i = n(731738),
    l = n(417597),
    s = n(964486),
    a = n(612200),
    o = n(831062),
    c = n(210714),
    d = n(287809),
    u = n(954571),
    _ = n(695515),
    p = n(809697),
    m = n(500470),
    g = n(33666),
    A = n(834981),
    f = n(191627),
    h = n(652215),
    b = n(204925);

function E(e) {
    let { location: t, onMountEffect: n } = e,
        E = (0, g.A)(),
        x = (0, A.W1)(),
        { familyCenterInitialized: O, isLoading: C } = (0, l.cf)([_.A], () => ({
            familyCenterInitialized: _.A.getIsInitialized(),
            isLoading: _.A.isLoading(),
        })),
        I = (0, m.k)(),
        { selectedTab: T, handleTabChange: S } = (0, p.A)(),
        j = d.default.getCurrentUser(),
        v = null != E,
        N = O && null != j && !v;
    (0, s.Ay)(() => {
        (0, c.d)("family-center"), null != n && n();
    });
    let y = {
            isConsideredAdult: "adult" === E,
            numOfAcceptedRequests: x,
            selectedTab: T,
            selectedTeenId: I,
        },
        P = r.useRef(y);
    return (
        r.useEffect(() => {
            P.current = y;
        }),
        r.useEffect(() => {
            if (O && v) {
                let { isConsideredAdult: e, numOfAcceptedRequests: n, selectedTab: r, selectedTeenId: l } = P.current;
                u.default.track(h.HAw.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: n,
                    selected_teen_id: l,
                    initial_page: f.zu[r],
                    source: f.iN[t],
                }),
                    o.A.increment({
                        name: i.K.FAMILY_CENTER_VIEW,
                    });
            }
        }, [O, v, t]),
        r.useEffect(() => {
            N && (0, a.yO)(b.w_.FAMILY_CENTER);
        }, [N]),
        {
            isLoading: C,
            selectedTab: T,
            handleTabChange: S,
            showAgeGateModal: N,
        }
    );
}
