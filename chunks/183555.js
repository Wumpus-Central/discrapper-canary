"use strict";
n.d(t, { NJ: () => _, of: () => c, pb: () => d });
var i,
    r = n(627968),
    s = n(64700),
    a = n(835245),
    o = n(688810),
    l = n(47675);
let u = s.createContext(null),
    c = (e) => {
        let { value: t, children: n, openedAt: i, fetchStartedAt: a, fetchEndedAt: c, isLoaded: d = !1 } = e,
            { analyticsLocations: _ } = (0, o.Ay)(),
            h = s.useRef(void 0),
            f = { analyticsLocations: _, value: t },
            p = s.useRef(f);
        return (
            s.useEffect(() => {
                p.current = f;
            }),
            s.useEffect(() => {
                let e = Date.now();
                if ((null == h.current && null != i && (h.current = e - i), !d)) return;
                let { analyticsLocations: t, value: n } = p.current;
                (0, l.Wn)({ action: "VIEW", analyticsLocations: t, ...n }),
                    (0, l.wd)({
                        profileUi: "USER_PROFILE",
                        timeToInteractiveMs: h.current,
                        timeToLoadMs: null != i ? e - i : void 0,
                        timeToFetchMs: null != a && null != c ? c - a : void 0,
                        viewStartedAt: i,
                        fetchStartedAt: a,
                        analyticsLocations: t,
                        ...n,
                    });
            }, [d]),
            (0, r.jsx)(u.Provider, { value: t, children: n })
        );
    },
    d = (e) => {
        let {
                layout: t,
                userId: r,
                guildId: o,
                channelId: l,
                messageId: c,
                roleId: d,
                sourceSessionId: _,
                showGuildProfile: h = !0,
            } = e,
            f = (i || (i = n.t(s, 2))).useContext(u)?.sessionId;
        return s.useMemo(
            () => ({
                sessionId: (0, a.A)(),
                sourceSessionId: _ ?? f,
                layout: t,
                userId: r,
                guildId: o,
                channelId: l,
                messageId: c,
                roleId: d,
                showGuildProfile: h,
            }),
            [f, t, r, o, l, c, d, _, h],
        );
    },
    _ = () => {
        let e = s.useContext(u),
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
