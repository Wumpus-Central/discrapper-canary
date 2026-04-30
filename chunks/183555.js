i.d(t, { NJ: () => d, of: () => u, pb: () => c });
var l,
    a = i(627968),
    r = i(64700),
    n = i(132500),
    o = i(688810),
    s = i(47675);
let _ = r.createContext(null),
    u = (e) => {
        let { value: t, children: i, openedAt: l, fetchStartedAt: n, fetchEndedAt: u, isLoaded: c = !1 } = e,
            { analyticsLocations: d } = (0, o.Ay)(),
            p = r.useRef(void 0),
            f = { analyticsLocations: d, value: t },
            m = r.useRef(f);
        return (
            r.useEffect(() => {
                m.current = f;
            }),
            r.useEffect(() => {
                let e = Date.now();
                if ((null == p.current && null != l && (p.current = e - l), !c)) return;
                let { analyticsLocations: t, value: i } = m.current;
                (0, s.Wn)({ action: "VIEW", analyticsLocations: t, ...i }),
                    (0, s.wd)({
                        profileUi: "USER_PROFILE",
                        timeToInteractiveMs: p.current,
                        timeToLoadMs: null != l ? e - l : void 0,
                        timeToFetchMs: null != n && null != u ? u - n : void 0,
                        viewStartedAt: l,
                        fetchStartedAt: n,
                        analyticsLocations: t,
                        ...i,
                    });
            }, [c]),
            (0, a.jsx)(_.Provider, { value: t, children: i })
        );
    },
    c = (e) => {
        let {
                layout: t,
                userId: a,
                guildId: o,
                channelId: s,
                messageId: u,
                roleId: c,
                sourceSessionId: d,
                showGuildProfile: p = !0,
            } = e,
            f = (l || (l = i.t(r, 2))).useContext(_)?.sessionId;
        return r.useMemo(
            () => ({
                sessionId: (0, n.A)(),
                sourceSessionId: d ?? f,
                layout: t,
                userId: a,
                guildId: o,
                channelId: s,
                messageId: u,
                roleId: c,
                showGuildProfile: p,
            }),
            [f, t, a, o, s, u, c, d, p],
        );
    },
    d = () => {
        let e = r.useContext(_),
            { analyticsLocations: t } = (0, o.Ay)();
        return {
            context: e,
            trackUserProfileAction: r.useCallback(
                (i) => {
                    null != e && (0, s.Wn)({ analyticsLocations: t, ...e, ...i });
                },
                [e, t],
            ),
            trackUserProfileEditAction: r.useCallback(
                (i) => {
                    null != e && (0, s.un)({ analyticsLocations: t, ...e, ...i });
                },
                [e, t],
            ),
            trackUserProfileEditSaved: r.useCallback(
                (i) => {
                    null != e && (0, s.pT)({ analyticsLocations: t, ...e, ...i });
                },
                [e, t],
            ),
            trackUserProfileWishlistAction: r.useCallback(
                (i) => {
                    null != e && (0, s.nR)({ analyticsLocations: t, ...e, ...i });
                },
                [e, t],
            ),
        };
    };
