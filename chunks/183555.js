n.d(t, {
    NJ: () => p,
    of: () => d,
    pb: () => f,
});
var r = n(627968),
    i = n(64700),
    a = n(835245),
    s = n(688810),
    o = n(672385);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = i.createContext(null),
    d = (e) => {
        let { value: t, children: n, openedAt: a, fetchStartedAt: l, fetchEndedAt: d, isLoaded: f = !1 } = e,
            { analyticsLocations: p } = (0, s.Ay)(),
            _ = i.useRef(void 0),
            h = {
                analyticsLocations: p,
                value: t,
            },
            m = i.useRef(h);
        return (
            i.useEffect(() => {
                m.current = h;
            }),
            i.useEffect(() => {
                let e = Date.now();
                if ((null == _.current && null != a && (_.current = e - a), !f)) return;
                let { analyticsLocations: t, value: n } = m.current;
                (0, o.Wn)(
                    c(
                        {
                            action: "VIEW",
                            analyticsLocations: t,
                        },
                        n,
                    ),
                ),
                    (0, o.wd)(
                        c(
                            {
                                profileUi: "USER_PROFILE",
                                timeToInteractiveMs: _.current,
                                timeToLoadMs: null != a ? e - a : void 0,
                                timeToFetchMs: null != l && null != d ? d - l : void 0,
                                viewStartedAt: a,
                                fetchStartedAt: l,
                                analyticsLocations: t,
                            },
                            n,
                        ),
                    );
            }, [f]),
            (0, r.jsx)(u.Provider, {
                value: t,
                children: n,
            })
        );
    },
    f = (e) => {
        var t;
        let {
                layout: n,
                userId: r,
                guildId: s,
                channelId: o,
                messageId: l,
                roleId: c,
                sourceSessionId: d,
                showGuildProfile: f = !0,
            } = e,
            p = null == (t = i.useContext(u)) ? void 0 : t.sessionId;
        return i.useMemo(
            () => ({
                sessionId: (0, a.A)(),
                sourceSessionId: null != d ? d : p,
                layout: n,
                userId: r,
                guildId: s,
                channelId: o,
                messageId: l,
                roleId: c,
                showGuildProfile: f,
            }),
            [p, n, r, s, o, l, c, d, f],
        );
    },
    p = () => {
        let e = i.useContext(u),
            { analyticsLocations: t } = (0, s.Ay)();
        return {
            context: e,
            trackUserProfileAction: i.useCallback(
                (n) => {
                    null != e && (0, o.Wn)(c({ analyticsLocations: t }, e, n));
                },
                [e, t],
            ),
            trackUserProfileEditAction: i.useCallback(
                (n) => {
                    null != e && (0, o.un)(c({ analyticsLocations: t }, e, n));
                },
                [e, t],
            ),
            trackUserProfileEditSaved: i.useCallback(
                (n) => {
                    null != e && (0, o.pT)(c({ analyticsLocations: t }, e, n));
                },
                [e, t],
            ),
            trackUserProfileWishlistAction: i.useCallback(
                (n) => {
                    null != e && (0, o.nR)(c({ analyticsLocations: t }, e, n));
                },
                [e, t],
            ),
        };
    };
