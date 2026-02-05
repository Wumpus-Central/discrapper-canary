n.d(t, { j: () => x });
var i = n(64700),
    s = n(731738),
    r = n(417597),
    a = n(964486),
    l = n(612200),
    o = n(831062),
    c = n(210714),
    d = n(287809),
    u = n(954571),
    _ = n(695515),
    m = n(809697),
    A = n(500470),
    g = n(33666),
    E = n(834981),
    h = n(191627),
    p = n(652215),
    C = n(204925);
function x(e) {
    let { location: t, onMountEffect: n } = e,
        x = (0, g.A)(),
        T = (0, E.W1)(),
        { familyCenterInitialized: I, isLoading: S } = (0, r.cf)([_.A], () => ({
            familyCenterInitialized: _.A.getIsInitialized(),
            isLoading: _.A.isLoading(),
        })),
        f = (0, A.k)(),
        { selectedTab: N, handleTabChange: b } = (0, m.A)(),
        R = d.default.getCurrentUser(),
        v = null != x,
        O = I && null != R && !v;
    (0, a.Ay)(() => {
        (0, c.d)("family-center"), null != n && n();
    });
    let j = { isConsideredAdult: "adult" === x, numOfAcceptedRequests: T, selectedTab: N, selectedTeenId: f },
        P = i.useRef(j);
    return (
        i.useEffect(() => {
            P.current = j;
        }),
        i.useEffect(() => {
            if (I && v) {
                let { isConsideredAdult: e, numOfAcceptedRequests: n, selectedTab: i, selectedTeenId: r } = P.current;
                u.default.track(p.HAw.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: n,
                    selected_teen_id: r,
                    initial_page: h.zu[i],
                    source: h.iN[t],
                }),
                    o.A.increment({ name: s.K.FAMILY_CENTER_VIEW });
            }
        }, [I, v, t]),
        i.useEffect(() => {
            O && (0, l.yO)(C.w_.FAMILY_CENTER);
        }, [O]),
        { isLoading: S, selectedTab: N, handleTabChange: b, showAgeGateModal: O }
    );
}
