n.d(t, {
    EM: () => h,
    Tt: () => m,
    cv: () => p
});
var i = n(192379),
    r = n(442837),
    a = n(581883),
    s = n(914010),
    o = n(915486),
    l = n(68985),
    u = n(211644),
    c = n(605236),
    d = n(57207),
    f = n(526761);
function _(e, t, n, a, s) {
    let o = (0, u.ZP)((t) => null != e && t.currentlyShown.has(e)),
        d = (0, r.e7)([l.Z], () => null != e && l.Z.hasUserHitDCCap(e));
    return (
        i.useEffect(() => {
            if (null != e)
                return (
                    (0, c.kk)(
                        e,
                        {
                            groupName: n,
                            guildId: t,
                            version: s
                        },
                        a
                    ),
                    () => {
                        if (null == e) return;
                        let t = !l.Z.hasUserHitDCCap();
                        (0, u.gE)(
                            {
                                content: e,
                                groupName: n
                            },
                            t
                        );
                    }
                );
        }, [e, n, t, d, a, s]),
        o && null != e ? e : null
    );
}
function p(e, t, n) {
    let l = (0, r.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents;
        }),
        u = (0, r.e7)([s.Z], () => s.Z.getGuildId()),
        p = (0, d.i)(e),
        h = null;
    return (
        a.Z.hasLoaded(f.yP.PRELOADED_USER_SETTINGS) ? (h = p.find((e) => null == l || !(0, o.jl)(l, e))) : null != l && (h = p.find((e) => !(0, o.jl)(l, e))),
        [
            _(h, u, t, n),
            i.useCallback(
                (e, n) => {
                    null != h &&
                        (0, c.EW)(h, {
                            dismissAction: e,
                            groupName: t,
                            guildId: u,
                            forceTrack: n
                        });
                },
                [h, t, u]
            )
        ]
    );
}
function h(e, t, n, o) {
    let l = (0, r.e7)([a.Z], () => {
            var t, n, i;
            return null !== e ? (null === (i = a.Z.settings.userContent) || void 0 === i ? void 0 : null === (n = i.recurringDismissibleContentStates) || void 0 === n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.lastDismissedVersion) : void 0;
        }),
        u = (0, r.e7)([s.Z], () => s.Z.getGuildId()),
        p = null;
    if (null != e) {
        let n = !(0, d.B)(e);
        a.Z.hasLoaded(f.yP.PRELOADED_USER_SETTINGS) ? (p = n && (null == l || l < t) ? e : null) : null != l && (p = n && l < t ? e : null);
    }
    return [
        _(p, u, n, o, t),
        i.useCallback(
            (e, i) => {
                null != p &&
                    (0, c.wH)(p, t, {
                        dismissAction: e,
                        groupName: n,
                        guildId: u,
                        forceTrack: i,
                        version: t
                    });
            },
            [p, n, u, t]
        )
    ];
}
function m(e, t, n, o) {
    let l = (0, r.e7)([a.Z], () => {
            var t, n, i;
            return null !== e ? (null === (i = a.Z.settings.userContent) || void 0 === i ? void 0 : null === (n = i.recurringDismissibleContentStates) || void 0 === n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.lastDismissedAtMs) : void 0;
        }),
        u = null != l ? (Number.isNaN(Number(l)) ? void 0 : Number(l)) : void 0,
        p = (0, r.e7)([s.Z], () => s.Z.getGuildId()),
        h = null;
    if (null != e) {
        let n = !(0, d.B)(e),
            i = void 0 === u ? 0 : u + t.cooldownDurationMs,
            r = Date.now(),
            s = null == t.showAfterTimestamp || (r >= t.showAfterTimestamp && (null != u ? u : 0) <= t.showAfterTimestamp);
        a.Z.hasLoaded(f.yP.PRELOADED_USER_SETTINGS) ? (h = n && s && (null == u || r >= i) ? e : null) : null != u && (h = n && s && r >= i ? e : null);
    }
    return [
        _(h, p, n, o),
        i.useCallback(
            (e, t) => {
                null != h &&
                    (0, c.Ow)(h, {
                        dismissAction: e,
                        groupName: n,
                        guildId: p,
                        forceTrack: t
                    });
            },
            [h, n, p]
        )
    ];
}
