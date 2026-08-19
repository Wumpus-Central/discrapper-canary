i.d(t, { NJ: () => c, of: () => d, pb: () => _ });
var r,
    l = i(477900),
    n = i(582128),
    u = i(132500),
    o = i(688810),
    s = i(47675);
let a = n.createContext(null),
    d = (e) => {
        let { value: t, children: i, openedAt: r, fetchStartedAt: u, fetchEndedAt: d, isLoaded: _ = !1 } = e,
            { analyticsLocations: c } = (0, o.Ay)(),
            f = n.useRef(void 0),
            m = n.useRef(r);
        m.current !== r && ((m.current = r), (f.current = void 0));
        let h = { analyticsLocations: c, value: t },
            p = n.useRef(h);
        return (
            n.useEffect(() => {
                p.current = h;
            }),
            n.useEffect(() => {
                let e = Date.now();
                if ((null == f.current && null != r && (f.current = e - r), !_)) return;
                let { analyticsLocations: t, value: i } = p.current;
                (0, s.Wn)({ action: "VIEW", analyticsLocations: t, ...i }),
                    (0, s.wd)({
                        profileUi: "USER_PROFILE",
                        timeToInteractiveMs: f.current,
                        timeToLoadMs: null != r ? e - r : void 0,
                        timeToFetchMs: null != u && null != d ? d - u : void 0,
                        viewStartedAt: r,
                        fetchStartedAt: u,
                        analyticsLocations: t,
                        ...i,
                    });
            }, [_]),
            (0, l.jsx)(a.Provider, { value: t, children: i })
        );
    };
function _(e) {
    let {
            layout: t,
            userId: l,
            guildId: o,
            channelId: s,
            messageId: d,
            roleId: _,
            sourceSessionId: c,
            showGuildProfile: f = !0,
        } = e,
        m = (r || (r = i.t(n, 2))).useContext(a)?.sessionId;
    return n.useMemo(
        () => ({
            sessionId: (0, u.A)(),
            sourceSessionId: c ?? m,
            layout: t,
            userId: l,
            guildId: o,
            channelId: s,
            messageId: d,
            roleId: _,
            showGuildProfile: f,
        }),
        [m, t, l, o, s, d, _, c, f],
    );
}
function c() {
    let e = n.useContext(a),
        { analyticsLocations: t } = (0, o.Ay)();
    return {
        context: e,
        trackUserProfileAction: n.useCallback(
            (i) => {
                null != e && (0, s.Wn)({ analyticsLocations: t, ...e, ...i });
            },
            [e, t],
        ),
        trackUserProfileEditAction: n.useCallback(
            (i) => {
                null != e && (0, s.un)({ analyticsLocations: t, ...e, ...i });
            },
            [e, t],
        ),
        trackUserProfileEditSaved: n.useCallback(
            (i) => {
                null != e && (0, s.pT)({ analyticsLocations: t, ...e, ...i });
            },
            [e, t],
        ),
        trackUserProfileWishlistAction: n.useCallback(
            (i) => {
                null != e && (0, s.nR)({ analyticsLocations: t, ...e, ...i });
            },
            [e, t],
        ),
    };
}
