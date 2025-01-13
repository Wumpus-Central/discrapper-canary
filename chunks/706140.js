r.d(n, {
    EM: function () {
        return m;
    },
    Tt: function () {
        return g;
    },
    cv: function () {
        return p;
    }
});
var i = r(192379),
    a = r(442837),
    s = r(581883),
    o = r(914010),
    l = r(915486),
    u = r(68985),
    c = r(211644),
    d = r(605236),
    f = r(57207),
    _ = r(526761);
function h(e, n, r, s, o) {
    let l = (0, c.ZP)((n) => null != e && n.currentlyShown.has(e)),
        f = (0, a.e7)([u.Z], () => null != e && u.Z.hasUserHitDCCap(e));
    return (
        i.useEffect(() => {
            if (null != e)
                return (
                    (0, d.kk)(
                        e,
                        {
                            groupName: r,
                            guildId: n,
                            version: o
                        },
                        s
                    ),
                    () => {
                        if (null == e) return;
                        let n = !u.Z.hasUserHitDCCap();
                        (0, c.gE)(
                            {
                                content: e,
                                groupName: r
                            },
                            n
                        );
                    }
                );
        }, [e, r, n, f, s, o]),
        l && null != e ? e : null
    );
}
function p(e, n, r) {
    let u = (0, a.e7)([s.Z], () => {
            var e;
            return null === (e = s.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents;
        }),
        c = (0, a.e7)([o.Z], () => o.Z.getGuildId()),
        p = (0, f.i)(e),
        m = null;
    s.Z.hasLoaded(_.yP.PRELOADED_USER_SETTINGS) ? (m = p.find((e) => null == u || !(0, l.jl)(u, e))) : null != u && (m = p.find((e) => !(0, l.jl)(u, e)));
    let g = h(m, c, n, r);
    return [
        g,
        i.useCallback(
            (e, r) => {
                null != m &&
                    (0, d.EW)(m, {
                        dismissAction: e,
                        groupName: n,
                        guildId: c,
                        forceTrack: r
                    });
            },
            [m, n, c]
        )
    ];
}
function m(e, n, r, l) {
    let u = (0, a.e7)([s.Z], () => {
            var n, r, i;
            return null !== e ? (null === (i = s.Z.settings.userContent) || void 0 === i ? void 0 : null === (r = i.recurringDismissibleContentStates) || void 0 === r ? void 0 : null === (n = r[e]) || void 0 === n ? void 0 : n.lastDismissedVersion) : void 0;
        }),
        c = (0, a.e7)([o.Z], () => o.Z.getGuildId()),
        p = null;
    if (null != e) {
        let r = !(0, f.B)(e);
        s.Z.hasLoaded(_.yP.PRELOADED_USER_SETTINGS) ? (p = r && (null == u || u < n) ? e : null) : null != u && (p = r && u < n ? e : null);
    }
    let m = h(p, c, r, l, n);
    return [
        m,
        i.useCallback(
            (e, i) => {
                null != p &&
                    (0, d.wH)(p, n, {
                        dismissAction: e,
                        groupName: r,
                        guildId: c,
                        forceTrack: i,
                        version: n
                    });
            },
            [p, r, c, n]
        )
    ];
}
function g(e, n, r, l) {
    let u = (0, a.e7)([s.Z], () => {
            var n, r, i;
            return null !== e ? (null === (i = s.Z.settings.userContent) || void 0 === i ? void 0 : null === (r = i.recurringDismissibleContentStates) || void 0 === r ? void 0 : null === (n = r[e]) || void 0 === n ? void 0 : n.lastDismissedAtMs) : void 0;
        }),
        c = null != u ? (Number.isNaN(Number(u)) ? void 0 : Number(u)) : void 0,
        p = (0, a.e7)([o.Z], () => o.Z.getGuildId()),
        m = null;
    if (null != e) {
        let r = !(0, f.B)(e),
            i = void 0 === c ? 0 : c + n.cooldownDurationMs,
            a = Date.now(),
            o = null == n.showAfterTimestamp || (a >= n.showAfterTimestamp && (null != c ? c : 0) <= n.showAfterTimestamp);
        s.Z.hasLoaded(_.yP.PRELOADED_USER_SETTINGS) ? (m = r && o && (null == c || a >= i) ? e : null) : null != c && (m = r && o && a >= i ? e : null);
    }
    let g = h(m, p, r, l);
    return [
        g,
        i.useCallback(
            (e, n) => {
                null != m &&
                    (0, d.Ow)(m, {
                        dismissAction: e,
                        groupName: r,
                        guildId: p,
                        forceTrack: n
                    });
            },
            [m, r, p]
        )
    ];
}
