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
            f = s.useRef(void 0),
            h = { analyticsLocations: _, value: t },
            p = s.useRef(h);
        return (
            s.useEffect(() => {
                p.current = h;
            }),
            s.useEffect(() => {
                let e = Date.now();
                if ((null == f.current && null != i && (f.current = e - i), !d)) return;
                let { analyticsLocations: t, value: n } = p.current;
                (0, l.Wn)({ action: "VIEW", analyticsLocations: t, ...n }),
                    (0, l.wd)({
                        profileUi: "USER_PROFILE",
                        timeToInteractiveMs: f.current,
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
                showGuildProfile: f = !0,
            } = e,
            h = (i || (i = n.t(s, 2))).useContext(u)?.sessionId;
        return s.useMemo(
            () => ({
                sessionId: (0, a.A)(),
                sourceSessionId: _ ?? h,
                layout: t,
                userId: r,
                guildId: o,
                channelId: l,
                messageId: c,
                roleId: d,
                showGuildProfile: f,
            }),
            [h, t, r, o, l, c, d, _, f],
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
