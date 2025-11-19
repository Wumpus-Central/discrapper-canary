n.d(t, { M: () => I });
var r = n(473749),
    i = n(286379),
    a = n(399606),
    o = n(704215),
    s = n(493773),
    l = n(758119),
    c = n(266454),
    u = n(797614),
    d = n(108427),
    f = n(594174),
    _ = n(626135),
    p = n(914788),
    h = n(841409),
    m = n(652262),
    g = n(880257),
    E = n(631885),
    b = n(292352),
    y = n(981631),
    O = n(723359),
    v = n(921944);
function I(e) {
    let { location: t, onMountEffect: n } = e,
        I = (0, g.Z)(),
        T = (0, E.M8)(),
        S = (0, c.Nj)(o.z.FAMILY_CENTER_NEW_BADGE),
        { familyCenterInitialized: A, isLoading: C } = (0, a.cj)([p.Z], () => ({
            familyCenterInitialized: p.Z.getIsInitialized(),
            isLoading: p.Z.isLoading(),
        })),
        N = (0, m.M)(),
        { selectedTab: R, handleTabChange: P } = (0, h.Z)(),
        D = f.default.getCurrentUser(),
        w = null != I,
        L = A && null != D && !w;
    (0, s.ZP)(() => {
        (0, d.e)("family-center"),
            null != n && n(),
            S ||
                (0, c.Q3)(o.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: v.L.AUTO,
                    forceTrack: !0,
                });
    });
    let x = {
            isConsideredAdult: I,
            numOfAcceptedRequests: T,
            selectedTab: R,
            selectedTeenId: N,
        },
        M = r.useRef(x);
    return (
        r.useEffect(() => {
            M.current = x;
        }),
        r.useEffect(() => {
            if (A && w) {
                let { isConsideredAdult: e, numOfAcceptedRequests: n, selectedTab: r, selectedTeenId: a } = M.current;
                _.default.track(y.rMx.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: n,
                    selected_teen_id: a,
                    initial_page: b.QH[r],
                    source: b._6[t],
                }),
                    u.Z.increment({ name: i.V.FAMILY_CENTER_VIEW });
            }
        }, [A, w, t]),
        r.useEffect(() => {
            L && (0, l.mN)(O.L0.FAMILY_CENTER);
        }, [L]),
        {
            isLoading: C,
            selectedTab: R,
            handleTabChange: P,
            showAgeGateModal: L,
        }
    );
}
