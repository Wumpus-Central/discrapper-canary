n.d(t, { M: () => y });
var r = n(473749),
    i = n(286379),
    a = n(399606),
    o = n(493773),
    s = n(758119),
    l = n(797614),
    c = n(108427),
    u = n(594174),
    d = n(626135),
    f = n(914788),
    p = n(841409),
    _ = n(652262),
    m = n(880257),
    h = n(631885),
    g = n(292352),
    E = n(981631),
    b = n(723359);
function y(e) {
    let { location: t, onMountEffect: n } = e,
        y = (0, m.Z)(),
        O = (0, h.M8)(),
        { familyCenterInitialized: v, isLoading: S } = (0, a.cj)([f.Z], () => ({
            familyCenterInitialized: f.Z.getIsInitialized(),
            isLoading: f.Z.isLoading(),
        })),
        I = (0, _.M)(),
        { selectedTab: T, handleTabChange: C } = (0, p.Z)(),
        A = u.default.getCurrentUser(),
        N = null != y,
        P = v && null != A && !N;
    (0, o.ZP)(() => {
        (0, c.e)("family-center"), null != n && n();
    });
    let R = {
            isConsideredAdult: y,
            numOfAcceptedRequests: O,
            selectedTab: T,
            selectedTeenId: I,
        },
        w = r.useRef(R);
    return (
        r.useEffect(() => {
            w.current = R;
        }),
        r.useEffect(() => {
            if (v && N) {
                let { isConsideredAdult: e, numOfAcceptedRequests: n, selectedTab: r, selectedTeenId: a } = w.current;
                d.default.track(E.rMx.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: n,
                    selected_teen_id: a,
                    initial_page: g.QH[r],
                    source: g._6[t],
                }),
                    l.Z.increment({ name: i.V.FAMILY_CENTER_VIEW });
            }
        }, [v, N, t]),
        r.useEffect(() => {
            P && (0, s.mN)(b.L0.FAMILY_CENTER);
        }, [P]),
        {
            isLoading: S,
            selectedTab: T,
            handleTabChange: C,
            showAgeGateModal: P,
        }
    );
}
