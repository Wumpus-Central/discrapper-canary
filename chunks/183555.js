i.d(t, { NJ: () => c, of: () => _, pb: () => d });
var l,
    a = i(627968),
    r = i(64700),
    n = i(835245),
    o = i(688810),
    s = i(47675);
let u = r.createContext(null),
    _ = (e) => {
        let { value: t, children: i, openedAt: l, fetchStartedAt: n, fetchEndedAt: _, isLoaded: d = !1 } = e,
            { analyticsLocations: c } = (0, o.Ay)(),
            p = r.useRef(void 0),
            f = { analyticsLocations: c, value: t },
            m = r.useRef(f);
        return (
            r.useEffect(() => {
                m.current = f;
            }),
            r.useEffect(() => {
                let e = Date.now();
                if ((null == p.current && null != l && (p.current = e - l), !d)) return;
                let { analyticsLocations: t, value: i } = m.current;
                (0, s.Wn)({ action: "VIEW", analyticsLocations: t, ...i }),
                    (0, s.wd)({
                        profileUi: "USER_PROFILE",
                        timeToInteractiveMs: p.current,
                        timeToLoadMs: null != l ? e - l : void 0,
                        timeToFetchMs: null != n && null != _ ? _ - n : void 0,
                        viewStartedAt: l,
                        fetchStartedAt: n,
                        analyticsLocations: t,
                        ...i,
                    });
            }, [d]),
            (0, a.jsx)(u.Provider, { value: t, children: i })
        );
    },
    d = (e) => {
        let {
                layout: t,
                userId: a,
                guildId: o,
                channelId: s,
                messageId: _,
                roleId: d,
                sourceSessionId: c,
                showGuildProfile: p = !0,
            } = e,
            f = (l || (l = i.t(r, 2))).useContext(u)?.sessionId;
        return r.useMemo(
            () => ({
                sessionId: (0, n.A)(),
                sourceSessionId: c ?? f,
                layout: t,
                userId: a,
                guildId: o,
                channelId: s,
                messageId: _,
                roleId: d,
                showGuildProfile: p,
            }),
            [f, t, a, o, s, _, d, c, p],
        );
    },
    c = () => {
        let e = r.useContext(u),
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
