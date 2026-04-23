"use strict";
n.d(t, { NJ: () => c, of: () => _, pb: () => u });
var i,
    r = n(627968),
    s = n(64700),
    a = n(132500),
    o = n(688810),
    l = n(47675);
let d = s.createContext(null),
    _ = (e) => {
        let { value: t, children: n, openedAt: i, fetchStartedAt: a, fetchEndedAt: _, isLoaded: u = !1 } = e,
            { analyticsLocations: c } = (0, o.Ay)(),
            E = s.useRef(void 0),
            h = { analyticsLocations: c, value: t },
            m = s.useRef(h);
        return (
            s.useEffect(() => {
                m.current = h;
            }),
            s.useEffect(() => {
                let e = Date.now();
                if ((null == E.current && null != i && (E.current = e - i), !u)) return;
                let { analyticsLocations: t, value: n } = m.current;
                (0, l.Wn)({ action: "VIEW", analyticsLocations: t, ...n }),
                    (0, l.wd)({
                        profileUi: "USER_PROFILE",
                        timeToInteractiveMs: E.current,
                        timeToLoadMs: null != i ? e - i : void 0,
                        timeToFetchMs: null != a && null != _ ? _ - a : void 0,
                        viewStartedAt: i,
                        fetchStartedAt: a,
                        analyticsLocations: t,
                        ...n,
                    });
            }, [u]),
            (0, r.jsx)(d.Provider, { value: t, children: n })
        );
    },
    u = (e) => {
        let {
                layout: t,
                userId: r,
                guildId: o,
                channelId: l,
                messageId: _,
                roleId: u,
                sourceSessionId: c,
                showGuildProfile: E = !0,
            } = e,
            h = (i || (i = n.t(s, 2))).useContext(d)?.sessionId;
        return s.useMemo(
            () => ({
                sessionId: (0, a.A)(),
                sourceSessionId: c ?? h,
                layout: t,
                userId: r,
                guildId: o,
                channelId: l,
                messageId: _,
                roleId: u,
                showGuildProfile: E,
            }),
            [h, t, r, o, l, _, u, c, E],
        );
    },
    c = () => {
        let e = s.useContext(d),
            { analyticsLocations: t } = (0, o.Ay)();
        return {
            context: e,
            trackUserProfileAction: s.useCallback(
                (n) => {
                    null != e && (0, l.Wn)({ analyticsLocations: t, ...e, ...n });
                },
                [e, t],
            ),
            trackUserProfileEditAction: s.useCallback(
                (n) => {
                    null != e && (0, l.un)({ analyticsLocations: t, ...e, ...n });
                },
                [e, t],
            ),
            trackUserProfileEditSaved: s.useCallback(
                (n) => {
                    null != e && (0, l.pT)({ analyticsLocations: t, ...e, ...n });
                },
                [e, t],
            ),
            trackUserProfileWishlistAction: s.useCallback(
                (n) => {
                    null != e && (0, l.nR)({ analyticsLocations: t, ...e, ...n });
                },
                [e, t],
            ),
        };
    };
