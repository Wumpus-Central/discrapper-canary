l.d(t, { j: () => E });
var n = l(64700),
    i = l(731738),
    s = l(417597),
    a = l(964486),
    r = l(612200),
    d = l(831062),
    c = l(210714),
    u = l(287809),
    o = l(954571),
    x = l(695515),
    h = l(809697),
    m = l(500470),
    g = l(33666),
    j = l(834981),
    A = l(191627),
    v = l(652215),
    f = l(204925);
function E(e) {
    let { location: t, onMountEffect: l } = e,
        E = (0, g.A)(),
        N = (0, j.W1)(),
        { familyCenterInitialized: p, isLoading: T } = (0, s.cf)([x.A], () => ({
            familyCenterInitialized: x.A.getIsInitialized(),
            isLoading: x.A.isLoading(),
        })),
        S = (0, m.k)(),
        { selectedTab: y, handleTabChange: C } = (0, h.A)(),
        _ = u.default.getCurrentUser(),
        I = null != E,
        b = p && null != _ && !I;
    (0, a.Ay)(() => {
        (0, c.d)("family-center"), null != l && l();
    });
    let R = { isConsideredAdult: "adult" === E, numOfAcceptedRequests: N, selectedTab: y, selectedTeenId: S },
        L = n.useRef(R);
    return (
        n.useEffect(() => {
            L.current = R;
        }),
        n.useEffect(() => {
            if (p && I) {
                let { isConsideredAdult: e, numOfAcceptedRequests: l, selectedTab: n, selectedTeenId: s } = L.current;
                o.default.track(v.HAw.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: l,
                    selected_teen_id: s,
                    initial_page: A.zu[n],
                    source: A.iN[t],
                }),
                    d.A.increment({ name: i.K.FAMILY_CENTER_VIEW });
            }
        }, [p, I, t]),
        n.useEffect(() => {
            b && (0, r.yO)(f.w_.FAMILY_CENTER);
        }, [b]),
        { isLoading: T, selectedTab: y, handleTabChange: C, showAgeGateModal: b }
    );
}
