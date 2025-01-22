r.d(n, {
    EM: function () {
        return m;
    },
    Tt: function () {
        return g;
    },
    cv: function () {
        return _;
    }
});
var i = r(192379),
    a = r(442837),
    o = r(581883),
    s = r(914010),
    l = r(915486),
    u = r(68985),
    c = r(211644),
    d = r(605236),
    f = r(57207),
    p = r(526761);
function h(e, n, r, o, s) {
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
                            version: s
                        },
                        o
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
        }, [e, r, n, f, o, s]),
        l && null != e ? e : null
    );
}
function _(e, n, r) {
    let u = (0, a.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents;
        }),
        c = (0, a.e7)([s.Z], () => s.Z.getGuildId()),
        _ = (0, f.i)(e),
        m = null;
    o.Z.hasLoaded(p.yP.PRELOADED_USER_SETTINGS) ? (m = _.find((e) => null == u || !(0, l.jl)(u, e))) : null != u && (m = _.find((e) => !(0, l.jl)(u, e)));
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
    let u = (0, a.e7)([o.Z], () => {
            var n, r, i;
            return null !== e ? (null === (i = o.Z.settings.userContent) || void 0 === i ? void 0 : null === (r = i.recurringDismissibleContentStates) || void 0 === r ? void 0 : null === (n = r[e]) || void 0 === n ? void 0 : n.lastDismissedVersion) : void 0;
        }),
        c = (0, a.e7)([s.Z], () => s.Z.getGuildId()),
        _ = null;
    if (null != e) {
        let r = !(0, f.B)(e);
        o.Z.hasLoaded(p.yP.PRELOADED_USER_SETTINGS) ? (_ = r && (null == u || u < n) ? e : null) : null != u && (_ = r && u < n ? e : null);
    }
    let m = h(_, c, r, l, n);
    return [
        m,
        i.useCallback(
            (e, i) => {
                null != _ &&
                    (0, d.wH)(_, n, {
                        dismissAction: e,
                        groupName: r,
                        guildId: c,
                        forceTrack: i,
                        version: n
                    });
            },
            [_, r, c, n]
        )
    ];
}
function g(e, n, r, l) {
    let u = (0, a.e7)([o.Z], () => {
            var n, r, i;
            return null !== e ? (null === (i = o.Z.settings.userContent) || void 0 === i ? void 0 : null === (r = i.recurringDismissibleContentStates) || void 0 === r ? void 0 : null === (n = r[e]) || void 0 === n ? void 0 : n.lastDismissedAtMs) : void 0;
        }),
        c = null != u ? (Number.isNaN(Number(u)) ? void 0 : Number(u)) : void 0,
        _ = (0, a.e7)([s.Z], () => s.Z.getGuildId()),
        m = null;
    if (null != e) {
        let r = !(0, f.B)(e),
            i = void 0 === c ? 0 : c + n.cooldownDurationMs,
            a = Date.now(),
            s = null == n.showAfterTimestamp || (a >= n.showAfterTimestamp && (null != c ? c : 0) <= n.showAfterTimestamp);
        o.Z.hasLoaded(p.yP.PRELOADED_USER_SETTINGS) ? (m = r && s && (null == c || a >= i) ? e : null) : null != c && (m = r && s && a >= i ? e : null);
    }
    let g = h(m, _, r, l);
    return [
        g,
        i.useCallback(
            (e, n) => {
                null != m &&
                    (0, d.Ow)(m, {
                        dismissAction: e,
                        groupName: r,
                        guildId: _,
                        forceTrack: n
                    });
            },
            [m, r, _]
        )
    ];
}
