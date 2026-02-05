"use strict";
n.d(t, { NJ: () => _, of: () => c, pb: () => d });
var r,
    i = n(627968),
    a = n(64700),
    s = n(835245),
    o = n(688810),
    l = n(672385);
let u = a.createContext(null),
    c = (e) => {
        let { value: t, children: n, openedAt: r, fetchStartedAt: s, fetchEndedAt: c, isLoaded: d = !1 } = e,
            { analyticsLocations: _ } = (0, o.Ay)(),
            f = a.useRef(void 0),
            p = { analyticsLocations: _, value: t },
            h = a.useRef(p);
        return (
            a.useEffect(() => {
                h.current = p;
            }),
            a.useEffect(() => {
                let e = Date.now();
                if ((null == f.current && null != r && (f.current = e - r), !d)) return;
                let { analyticsLocations: t, value: n } = h.current;
                (0, l.Wn)({ action: "VIEW", analyticsLocations: t, ...n }),
                    (0, l.wd)({
                        profileUi: "USER_PROFILE",
                        timeToInteractiveMs: f.current,
                        timeToLoadMs: null != r ? e - r : void 0,
                        timeToFetchMs: null != s && null != c ? c - s : void 0,
                        viewStartedAt: r,
                        fetchStartedAt: s,
                        analyticsLocations: t,
                        ...n,
                    });
            }, [d]),
            (0, i.jsx)(u.Provider, { value: t, children: n })
        );
    },
    d = (e) => {
        let {
                layout: t,
                userId: i,
                guildId: o,
                channelId: l,
                messageId: c,
                roleId: d,
                sourceSessionId: _,
                showGuildProfile: f = !0,
            } = e,
            p = (r || (r = n.t(a, 2))).useContext(u)?.sessionId;
        return a.useMemo(
            () => ({
                sessionId: (0, s.A)(),
                sourceSessionId: _ ?? p,
                layout: t,
                userId: i,
                guildId: o,
                channelId: l,
                messageId: c,
                roleId: d,
                showGuildProfile: f,
            }),
            [p, t, i, o, l, c, d, _, f],
        );
    },
    _ = () => {
        let e = a.useContext(u),
            { analyticsLocations: t } = (0, o.Ay)();
        return {
            context: e,
            trackUserProfileAction: a.useCallback(
                (n) => {
                    null != e && (0, l.Wn)({ analyticsLocations: t, ...e, ...n });
                },
                [e, t],
            ),
            trackUserProfileEditAction: a.useCallback(
                (n) => {
                    null != e && (0, l.un)({ analyticsLocations: t, ...e, ...n });
                },
                [e, t],
            ),
            trackUserProfileEditSaved: a.useCallback(
                (n) => {
                    null != e && (0, l.pT)({ analyticsLocations: t, ...e, ...n });
                },
                [e, t],
            ),
            trackUserProfileWishlistAction: a.useCallback(
                (n) => {
                    null != e && (0, l.nR)({ analyticsLocations: t, ...e, ...n });
                },
                [e, t],
            ),
        };
    };
