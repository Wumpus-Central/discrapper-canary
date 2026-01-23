n.d(t, {
    j: () => b,
});
var r = n(64700),
    i = n(731738),
    a = n(417597),
    s = n(964486),
    o = n(612200),
    l = n(831062),
    c = n(210714),
    u = n(287809),
    d = n(954571),
    f = n(695515),
    p = n(809697),
    _ = n(500470),
    h = n(33666),
    m = n(834981),
    g = n(191627),
    E = n(652215),
    y = n(204925);

function b(e) {
    let { location: t, onMountEffect: n } = e,
        b = (0, h.A)(),
        O = (0, m.W1)(),
        { familyCenterInitialized: v, isLoading: A } = (0, a.cf)([f.A], () => ({
            familyCenterInitialized: f.A.getIsInitialized(),
            isLoading: f.A.isLoading(),
        })),
        I = (0, _.k)(),
        { selectedTab: S, handleTabChange: T } = (0, p.A)(),
        C = u.default.getCurrentUser(),
        N = null != b,
        w = "adult" === b,
        R = v && null != C && !N;
    (0, s.Ay)(() => {
        (0, c.d)("family-center"), null != n && n();
    });
    let P = {
            isConsideredAdult: w,
            numOfAcceptedRequests: O,
            selectedTab: S,
            selectedTeenId: I,
        },
        D = r.useRef(P);
    return (
        r.useEffect(() => {
            D.current = P;
        }),
        r.useEffect(() => {
            if (v && N) {
                let { isConsideredAdult: e, numOfAcceptedRequests: n, selectedTab: r, selectedTeenId: a } = D.current;
                d.default.track(E.HAw.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: n,
                    selected_teen_id: a,
                    initial_page: g.zu[r],
                    source: g.iN[t],
                }),
                    l.A.increment({
                        name: i.K.FAMILY_CENTER_VIEW,
                    });
            }
        }, [v, N, t]),
        r.useEffect(() => {
            R && (0, o.yO)(y.w_.FAMILY_CENTER);
        }, [R]),
        {
            isLoading: A,
            selectedTab: S,
            handleTabChange: T,
            showAgeGateModal: R,
        }
    );
}
