i.d(t, { NJ: () => c, of: () => s, pb: () => d });
var r,
    l = i(477900),
    n = i(582128),
    a = i(132500),
    u = i(688810),
    o = i(47675);
let _ = n.createContext(null),
    s = (e) => {
        let { value: t, children: i, openedAt: r, fetchStartedAt: a, fetchEndedAt: s, isLoaded: d = !1 } = e,
            { analyticsLocations: c } = (0, u.Ay)(),
            f = n.useRef(void 0),
            p = n.useRef(r);
        p.current !== r && ((p.current = r), (f.current = void 0));
        let m = { analyticsLocations: c, value: t },
            g = n.useRef(m);
        return (
            n.useEffect(() => {
                g.current = m;
            }),
            n.useEffect(() => {
                let e = Date.now();
                if ((null == f.current && null != r && (f.current = e - r), !d)) return;
                let { analyticsLocations: t, value: i } = g.current;
                (0, o.Wn)({ action: "VIEW", analyticsLocations: t, ...i }),
                    (0, o.wd)({
                        profileUi: "USER_PROFILE",
                        timeToInteractiveMs: f.current,
                        timeToLoadMs: null != r ? e - r : void 0,
                        timeToFetchMs: null != a && null != s ? s - a : void 0,
                        viewStartedAt: r,
                        fetchStartedAt: a,
                        analyticsLocations: t,
                        ...i,
                    });
            }, [d]),
            (0, l.jsx)(_.Provider, { value: t, children: i })
        );
    };
function d(e) {
    let {
            layout: t,
            userId: l,
            guildId: u,
            channelId: o,
            messageId: s,
            roleId: d,
            sourceSessionId: c,
            showGuildProfile: f = !0,
        } = e,
        p = (r || (r = i.t(n, 2))).useContext(_)?.sessionId;
    return n.useMemo(
        () => ({
            sessionId: (0, a.A)(),
            sourceSessionId: c ?? p,
            layout: t,
            userId: l,
            guildId: u,
            channelId: o,
            messageId: s,
            roleId: d,
            showGuildProfile: f,
        }),
        [p, t, l, u, o, s, d, c, f],
    );
}
function c() {
    let e = n.useContext(_),
        { analyticsLocations: t } = (0, u.Ay)();
    return {
        context: e,
        trackUserProfileAction: n.useCallback(
            (i) => {
                null != e && (0, o.Wn)({ analyticsLocations: t, ...e, ...i });
            },
            [e, t],
        ),
        trackUserProfileEditAction: n.useCallback(
            (i) => {
                null != e && (0, o.un)({ analyticsLocations: t, ...e, ...i });
            },
            [e, t],
        ),
        trackUserProfileEditSaved: n.useCallback(
            (i) => {
                null != e && (0, o.pT)({ analyticsLocations: t, ...e, ...i });
            },
            [e, t],
        ),
        trackUserProfileWishlistAction: n.useCallback(
            (i) => {
                null != e && (0, o.nR)({ analyticsLocations: t, ...e, ...i });
            },
            [e, t],
        ),
    };
}
