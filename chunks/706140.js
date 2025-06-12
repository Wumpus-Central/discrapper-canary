n.d(t, {
    EM: () => m,
    Tt: () => g,
    cv: () => h,
    sx: () => E
});
var r = n(73800),
    i = n(442837),
    a = n(128363),
    o = n(581883),
    s = n(914010);
n(709054);
var l = n(915486),
    c = n(68985),
    u = n(211644),
    d = n(605236),
    _ = n(57207),
    f = n(526761);
function p(e, t, n, o) {
    let s = (0, u.ZP)((t) => null != e && t.currentlyShown.has(e)),
        l = (0, a.xG)(),
        _ = (0, i.e7)([c.Z], () => null != e && c.Z.hasUserHitDCCap(e));
    return (
        r.useEffect(() => {
            if (null != e)
                return (
                    (0, d.kk)(
                        e,
                        {
                            groupName: n,
                            guildId: t,
                            version: o
                        },
                        l
                    ),
                    () => {
                        if (null == e) return;
                        let t = !c.Z.hasUserHitDCCap();
                        (0, u.gE)(
                            {
                                content: e,
                                groupName: n
                            },
                            t
                        );
                    }
                );
        }, [e, n, t, _, l, o]),
        s && null != e ? e : null
    );
}
function h(e, t) {
    let n = (0, i.e7)([o.Z], () => {
            var e;
            return null == (e = o.Z.settings.userContent) ? void 0 : e.dismissedContents;
        }),
        a = (0, i.e7)([s.Z], () => s.Z.getGuildId()),
        c = (0, _.i)(e),
        u = null;
    return (
        o.Z.hasLoaded(f.yP.PRELOADED_USER_SETTINGS) ? (u = c.find((e) => null == n || !(0, l.jl)(n, e))) : null != n && (u = c.find((e) => !(0, l.jl)(n, e))),
        [
            p(u, a, t),
            r.useCallback(
                (e, n) => {
                    null != u &&
                        (0, d.EW)(u, {
                            dismissAction: e,
                            groupName: t,
                            guildId: a,
                            forceTrack: n
                        });
                },
                [u, t, a]
            )
        ]
    );
}
function m(e, t, n) {
    let a = (0, i.e7)([o.Z], () => {
            var t, n, r;
            return null !== e ? (null == (r = o.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates) || null == (t = n[e]) ? void 0 : t.lastDismissedVersion) : void 0;
        }),
        l = (0, i.e7)([s.Z], () => s.Z.getGuildId()),
        c = null;
    if (null != e) {
        let n = !(0, _.B)(e);
        o.Z.hasLoaded(f.yP.PRELOADED_USER_SETTINGS) ? (c = n && (null == a || a < t) ? e : null) : null != a && (c = n && a < t ? e : null);
    }
    return [
        p(c, l, n, t),
        r.useCallback(
            (e, r) => {
                null != c &&
                    (0, d.wH)(c, t, {
                        dismissAction: e,
                        groupName: n,
                        guildId: l,
                        forceTrack: r,
                        version: t
                    });
            },
            [c, n, l, t]
        )
    ];
}
function g(e, t, n) {
    let a = (0, i.e7)([o.Z], () => {
            var t, n, r;
            return null !== e ? (null == (r = o.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates) || null == (t = n[e]) ? void 0 : t.lastDismissedAtMs) : void 0;
        }),
        l = null != a ? (Number.isNaN(Number(a)) ? void 0 : Number(a)) : void 0,
        c = (0, i.e7)([s.Z], () => s.Z.getGuildId()),
        u = null;
    if (null != e) {
        let n = !(0, _.B)(e),
            r = void 0 === l ? 0 : l + t.cooldownDurationMs,
            i = Date.now(),
            a = null == t.showAfterTimestamp || (i >= t.showAfterTimestamp && (null != l ? l : 0) <= t.showAfterTimestamp);
        o.Z.hasLoaded(f.yP.PRELOADED_USER_SETTINGS) ? (u = n && a && (null == l || i >= r) ? e : null) : null != l && (u = n && a && i >= r ? e : null);
    }
    return [
        p(u, c, n),
        r.useCallback(
            (e, t) => {
                null != u &&
                    (0, d.Ow)(u, {
                        dismissAction: e,
                        groupName: n,
                        guildId: c,
                        forceTrack: t
                    });
            },
            [u, n, c]
        )
    ];
}
function E(e, t, n, a) {
    let o = (0, i.e7)([s.Z], () => s.Z.getGuildId()),
        l = null;
    return (
        null == e || (0, d.UJ)(e, n, t) || (l = e),
        [
            p(l, o, a),
            r.useCallback(
                (e, t) => {
                    null != l &&
                        (0, d.JO)(l, n, {
                            dismissAction: e,
                            groupName: a,
                            guildId: o,
                            forceTrack: t
                        });
                },
                [l, a, o, n]
            )
        ]
    );
}
