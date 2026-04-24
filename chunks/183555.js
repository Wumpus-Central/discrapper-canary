i.d(t, { NJ: () => _, of: () => u, pb: () => c });
var r,
    l = i(627968),
    a = i(64700),
    n = i(132500),
    s = i(688810),
    o = i(47675);
let d = a.createContext(null),
    u = (e) => {
        let { value: t, children: i, openedAt: r, fetchStartedAt: n, fetchEndedAt: u, isLoaded: c = !1 } = e,
            { analyticsLocations: _ } = (0, s.Ay)(),
            m = a.useRef(void 0),
            f = { analyticsLocations: _, value: t },
            p = a.useRef(f);
        return (
            a.useEffect(() => {
                p.current = f;
            }),
            a.useEffect(() => {
                let e = Date.now();
                if ((null == m.current && null != r && (m.current = e - r), !c)) return;
                let { analyticsLocations: t, value: i } = p.current;
                (0, o.Wn)({ action: "VIEW", analyticsLocations: t, ...i }),
                    (0, o.wd)({
                        profileUi: "USER_PROFILE",
                        timeToInteractiveMs: m.current,
                        timeToLoadMs: null != r ? e - r : void 0,
                        timeToFetchMs: null != n && null != u ? u - n : void 0,
                        viewStartedAt: r,
                        fetchStartedAt: n,
                        analyticsLocations: t,
                        ...i,
                    });
            }, [c]),
            (0, l.jsx)(d.Provider, { value: t, children: i })
        );
    },
    c = (e) => {
        let {
                layout: t,
                userId: l,
                guildId: s,
                channelId: o,
                messageId: u,
                roleId: c,
                sourceSessionId: _,
                showGuildProfile: m = !0,
            } = e,
            f = (r || (r = i.t(a, 2))).useContext(d)?.sessionId;
        return a.useMemo(
            () => ({
                sessionId: (0, n.A)(),
                sourceSessionId: _ ?? f,
                layout: t,
                userId: l,
                guildId: s,
                channelId: o,
                messageId: u,
                roleId: c,
                showGuildProfile: m,
            }),
            [f, t, l, s, o, u, c, _, m],
        );
    },
    _ = () => {
        let e = a.useContext(d),
            { analyticsLocations: t } = (0, s.Ay)();
        return {
            context: e,
            trackUserProfileAction: a.useCallback(
                (i) => {
                    null != e && (0, o.Wn)({ analyticsLocations: t, ...e, ...i });
                },
                [e, t],
            ),
            trackUserProfileEditAction: a.useCallback(
                (i) => {
                    null != e && (0, o.un)({ analyticsLocations: t, ...e, ...i });
                },
                [e, t],
            ),
            trackUserProfileEditSaved: a.useCallback(
                (i) => {
                    null != e && (0, o.pT)({ analyticsLocations: t, ...e, ...i });
                },
                [e, t],
            ),
            trackUserProfileWishlistAction: a.useCallback(
                (i) => {
                    null != e && (0, o.nR)({ analyticsLocations: t, ...e, ...i });
                },
                [e, t],
            ),
        };
    };
