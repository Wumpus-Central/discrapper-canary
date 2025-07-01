n.d(t, {
    EM: () => g,
    Tt: () => E,
    cv: () => m,
    sx: () => b
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
    d = n(266454),
    f = n(605236),
    _ = n(57207),
    p = n(526761);
function h(e, t, n, o) {
    let s = (0, u.ZP)((t) => null != e && t.currentlyShown.has(e)),
        l = (0, a.xG)(),
        d = (0, i.e7)([c.Z], () => null != e && c.Z.hasUserHitDCCap(e));
    return (
        r.useEffect(() => {
            if (null != e)
                return (
                    (0, f.kk)(
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
        }, [e, n, t, d, l, o]),
        s && null != e ? e : null
    );
}
function m(e, t) {
    let n = (0, i.e7)([o.Z], () => {
            var e;
            return null == (e = o.Z.settings.userContent) ? void 0 : e.dismissedContents;
        }),
        a = (0, i.e7)([s.Z], () => s.Z.getGuildId()),
        c = (0, _.i)(e),
        u = null;
    return (
        o.Z.hasLoaded(p.yP.PRELOADED_USER_SETTINGS) ? (u = c.find((e) => null == n || !(0, l.jl)(n, e))) : null != n && (u = c.find((e) => !(0, l.jl)(n, e))),
        [
            h(u, a, t),
            r.useCallback(
                (e, n) => {
                    null != u &&
                        (0, d.Q3)(u, {
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
function g(e, t, n) {
    let a = (0, i.e7)([o.Z], () => {
            var t, n, r;
            return null !== e ? (null == (r = o.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates) || null == (t = n[e]) ? void 0 : t.lastDismissedVersion) : void 0;
        }),
        l = (0, i.e7)([s.Z], () => s.Z.getGuildId()),
        c = null;
    if (null != e) {
        let n = !(0, _.B)(e);
        o.Z.hasLoaded(p.yP.PRELOADED_USER_SETTINGS) ? (c = n && (null == a || a < t) ? e : null) : null != a && (c = n && a < t ? e : null);
    }
    return [
        h(c, l, n, t),
        r.useCallback(
            (e, r) => {
                null != c &&
                    (0, f.wH)(c, t, {
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
function E(e, t, n) {
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
        o.Z.hasLoaded(p.yP.PRELOADED_USER_SETTINGS) ? (u = n && a && (null == l || i >= r) ? e : null) : null != l && (u = n && a && i >= r ? e : null);
    }
    return [
        h(u, c, n),
        r.useCallback(
            (e, t) => {
                null != u &&
                    (0, f.Ow)(u, {
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
function b(e, t, n, a) {
    let o = (0, i.e7)([s.Z], () => s.Z.getGuildId()),
        l = null;
    return (
        null == e || (0, f.UJ)(e, n, t) || (l = e),
        [
            h(l, o, a),
            r.useCallback(
                (e, t) => {
                    null != l &&
                        (0, f.JO)(l, n, {
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
