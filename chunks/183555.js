"use strict";
n.d(t, { NJ: () => _, of: () => c, pb: () => d });
var r,
    i = n(627968),
    s = n(64700),
    a = n(835245),
    o = n(688810),
    l = n(672385);
let u = s.createContext(null),
    c = (e) => {
        let { value: t, children: n, isLoaded: r = !1 } = e,
            { analyticsLocations: a } = (0, o.Ay)(),
            c = { analyticsLocations: a, value: t },
            d = s.useRef(c);
        return (
            s.useEffect(() => {
                d.current = c;
            }),
            s.useEffect(() => {
                if (!r) return;
                let { analyticsLocations: e, value: t } = d.current;
                (0, l.Wn)({ action: "VIEW", analyticsLocations: e, ...t });
            }, [r]),
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
            p = (r || (r = n.t(s, 2))).useContext(u)?.sessionId;
        return s.useMemo(
            () => ({
                sessionId: (0, a.A)(),
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
