r.d(t, { NJ: () => f, of: () => a, pb: () => d });
var n,
    l = r(477900),
    u = r(582128),
    s = r(132500),
    i = r(688810),
    c = r(47675);
let o = u.createContext(null),
    a = (e) => {
        let { value: t, children: r, openedAt: n, fetchStartedAt: s, fetchEndedAt: a, isLoaded: d = !1 } = e,
            { analyticsLocations: f } = (0, i.Ay)(),
            k = u.useRef(void 0),
            p = u.useRef(n);
        p.current !== n && ((p.current = n), (k.current = void 0));
        let v = { analyticsLocations: f, value: t },
            C = u.useRef(v);
        return (
            u.useEffect(() => {
                C.current = v;
            }),
            u.useEffect(() => {
                let e = Date.now();
                if ((null == k.current && null != n && (k.current = e - n), !d)) return;
                let { analyticsLocations: t, value: r } = C.current;
                (0, c.Wn)({ action: "VIEW", analyticsLocations: t, ...r }),
                    (0, c.wd)({
                        profileUi: "USER_PROFILE",
                        timeToInteractiveMs: k.current,
                        timeToLoadMs: null != n ? e - n : void 0,
                        timeToFetchMs: null != s && null != a ? a - s : void 0,
                        viewStartedAt: n,
                        fetchStartedAt: s,
                        analyticsLocations: t,
                        ...r,
                    });
            }, [d]),
            (0, l.jsx)(o.Provider, { value: t, children: r })
        );
    };
function d(e) {
    let {
            layout: t,
            userId: l,
            guildId: i,
            channelId: c,
            messageId: a,
            roleId: d,
            sourceSessionId: f,
            showGuildProfile: k = !0,
        } = e,
        p = (n || (n = r.t(u, 2))).useContext(o)?.sessionId;
    return u.useMemo(
        () => ({
            sessionId: (0, s.A)(),
            sourceSessionId: f ?? p,
            layout: t,
            userId: l,
            guildId: i,
            channelId: c,
            messageId: a,
            roleId: d,
            showGuildProfile: k,
        }),
        [p, t, l, i, c, a, d, f, k],
    );
}
function f() {
    let e = u.useContext(o),
        { analyticsLocations: t } = (0, i.Ay)();
    return {
        context: e,
        trackUserProfileAction: u.useCallback(
            (r) => {
                null != e && (0, c.Wn)({ analyticsLocations: t, ...e, ...r });
            },
            [e, t],
        ),
        trackUserProfileEditAction: u.useCallback(
            (r) => {
                null != e && (0, c.un)({ analyticsLocations: t, ...e, ...r });
            },
            [e, t],
        ),
        trackUserProfileEditSaved: u.useCallback(
            (r) => {
                null != e && (0, c.pT)({ analyticsLocations: t, ...e, ...r });
            },
            [e, t],
        ),
        trackUserProfileWishlistAction: u.useCallback(
            (r) => {
                null != e && (0, c.nR)({ analyticsLocations: t, ...e, ...r });
            },
            [e, t],
        ),
    };
}
