"use strict";
n.d(t, { NJ: () => _, of: () => c, pb: () => u });
var i,
    r = n(477900),
    a = n(582128),
    s = n(132500),
    l = n(688810),
    o = n(47675);
let d = a.createContext(null),
    c = (e) => {
        let { value: t, children: n, openedAt: i, fetchStartedAt: s, fetchEndedAt: c, isLoaded: u = !1 } = e,
            { analyticsLocations: _ } = (0, l.Ay)(),
            E = a.useRef(void 0),
            A = a.useRef(i);
        A.current !== i && ((A.current = i), (E.current = void 0));
        let h = { analyticsLocations: _, value: t },
            I = a.useRef(h);
        return (
            a.useEffect(() => {
                I.current = h;
            }),
            a.useEffect(() => {
                let e = Date.now();
                if ((null == E.current && null != i && (E.current = e - i), !u)) return;
                let { analyticsLocations: t, value: n } = I.current;
                (0, o.Wn)({ action: "VIEW", analyticsLocations: t, ...n }),
                    (0, o.wd)({
                        profileUi: "USER_PROFILE",
                        timeToInteractiveMs: E.current,
                        timeToLoadMs: null != i ? e - i : void 0,
                        timeToFetchMs: null != s && null != c ? c - s : void 0,
                        viewStartedAt: i,
                        fetchStartedAt: s,
                        analyticsLocations: t,
                        ...n,
                    });
            }, [u]),
            (0, r.jsx)(d.Provider, { value: t, children: n })
        );
    };
function u(e) {
    let {
            layout: t,
            userId: r,
            guildId: l,
            channelId: o,
            messageId: c,
            roleId: u,
            sourceSessionId: _,
            showGuildProfile: E = !0,
        } = e,
        A = (i || (i = n.t(a, 2))).useContext(d)?.sessionId;
    return a.useMemo(
        () => ({
            sessionId: (0, s.A)(),
            sourceSessionId: _ ?? A,
            layout: t,
            userId: r,
            guildId: l,
            channelId: o,
            messageId: c,
            roleId: u,
            showGuildProfile: E,
        }),
        [A, t, r, l, o, c, u, _, E],
    );
}
function _() {
    let e = a.useContext(d),
        { analyticsLocations: t } = (0, l.Ay)();
    return {
        context: e,
        trackUserProfileAction: a.useCallback(
            (n) => {
                null != e && (0, o.Wn)({ analyticsLocations: t, ...e, ...n });
            },
            [e, t],
        ),
        trackUserProfileEditAction: a.useCallback(
            (n) => {
                null != e && (0, o.un)({ analyticsLocations: t, ...e, ...n });
            },
            [e, t],
        ),
        trackUserProfileEditSaved: a.useCallback(
            (n) => {
                null != e && (0, o.pT)({ analyticsLocations: t, ...e, ...n });
            },
            [e, t],
        ),
        trackUserProfileWishlistAction: a.useCallback(
            (n) => {
                null != e && (0, o.nR)({ analyticsLocations: t, ...e, ...n });
            },
            [e, t],
        ),
    };
}
