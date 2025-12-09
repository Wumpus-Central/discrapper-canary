n.d(t, { M: () => S });
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
    p = n(626135),
    _ = n(914788),
    m = n(841409),
    h = n(652262),
    g = n(880257),
    E = n(631885),
    b = n(292352),
    y = n(981631),
    O = n(723359),
    v = n(921944);
function S(e) {
    let { location: t, onMountEffect: n } = e,
        S = (0, g.Z)(),
        I = (0, E.M8)(),
        T = (0, c.Nj)(o.z.FAMILY_CENTER_NEW_BADGE),
        { familyCenterInitialized: A, isLoading: C } = (0, a.cj)([_.Z], () => ({
            familyCenterInitialized: _.Z.getIsInitialized(),
            isLoading: _.Z.isLoading(),
        })),
        N = (0, h.M)(),
        { selectedTab: P, handleTabChange: R } = (0, m.Z)(),
        D = f.default.getCurrentUser(),
        w = null != S,
        x = A && null != D && !w;
    (0, s.ZP)(() => {
        (0, d.e)("family-center"),
            null != n && n(),
            T ||
                (0, c.Q3)(o.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: v.L.AUTO,
                    forceTrack: !0,
                });
    });
    let L = {
            isConsideredAdult: S,
            numOfAcceptedRequests: I,
            selectedTab: P,
            selectedTeenId: N,
        },
        j = r.useRef(L);
    return (
        r.useEffect(() => {
            j.current = L;
        }),
        r.useEffect(() => {
            if (A && w) {
                let { isConsideredAdult: e, numOfAcceptedRequests: n, selectedTab: r, selectedTeenId: a } = j.current;
                p.default.track(y.rMx.FAMILY_CENTER_VIEWED, {
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
            x && (0, l.mN)(O.L0.FAMILY_CENTER);
        }, [x]),
        {
            isLoading: C,
            selectedTab: P,
            handleTabChange: R,
            showAgeGateModal: x,
        }
    );
}
