n.d(t, {
    EM: () => O,
    Tt: () => v,
    cv: () => y,
    sx: () => I,
    zH: () => T
});
var r = n(73800),
    i = n(442837),
    o = n(704215),
    a = n(128363),
    s = n(581883),
    l = n(914010),
    c = n(626135);
n(709054);
var u = n(915486),
    d = n(68985),
    f = n(211644),
    _ = n(266454),
    p = n(605236),
    h = n(57207),
    m = n(981631),
    g = n(526761);
function E(e, t, n, r) {
    c.default.track(m.rMx.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
        content_type: o.z[e],
        group_name: null != n ? n : null,
        latest_version: null != r ? r : null,
        guild_id: null != t ? t : null
    });
}
function b(e, t, n, o) {
    let l = (0, f.ZP)((t) => null != e && t.currentlyShown.has(e)),
        c = (0, a.xG)(),
        u = (0, i.e7)([d.Z], () => null != e && d.Z.hasUserHitDCCap(e, t));
    return (
        r.useEffect(() => {
            if (null != e)
                return (
                    s.Z.hasLoaded(g.yP.PRELOADED_USER_SETTINGS) || E(e, t, n, o),
                    (0, p.kk)(
                        e,
                        {
                            groupName: n,
                            guildId: t,
                            version: o
                        },
                        c
                    ),
                    () => {
                        if (null == e) return;
                        let t = !d.Z.hasUserHitDCCap();
                        (0, f.gE)(
                            {
                                content: e,
                                groupName: n
                            },
                            t
                        );
                    }
                );
        }, [e, n, t, u, c, o]),
        l && null != e ? e : null
    );
}
function y(e, t) {
    let n = (0, i.e7)([s.Z], () => {
            var e;
            return null == (e = s.Z.settings.userContent) ? void 0 : e.dismissedContents;
        }),
        o = (0, i.e7)([l.Z], () => l.Z.getGuildId()),
        a = (0, h.ig)(e),
        c = null;
    return (
        s.Z.hasLoaded(g.yP.PRELOADED_USER_SETTINGS) ? (c = a.find((e) => null == n || !(0, u.jl)(n, e))) : null != n && (c = a.find((e) => !(0, u.jl)(n, e))),
        [
            b(c, o, t),
            r.useCallback(
                (e, n) => {
                    null != c &&
                        (0, _.Q3)(c, {
                            dismissAction: e,
                            groupName: t,
                            guildId: o,
                            forceTrack: n
                        });
                },
                [c, t, o]
            )
        ]
    );
}
function O(e, t, n) {
    let o = (0, i.e7)([s.Z], () => {
            var t, n, r;
            return null !== e ? (null == (r = s.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates) || null == (t = n[e]) ? void 0 : t.lastDismissedVersion) : void 0;
        }),
        a = (0, i.e7)([l.Z], () => l.Z.getGuildId()),
        c = null;
    if (null != e) {
        let n = !(0, h.Bh)(e);
        s.Z.hasLoaded(g.yP.PRELOADED_USER_SETTINGS) ? (c = n && (null == o || o < t) ? e : null) : null != o && (c = n && o < t ? e : null);
    }
    return [
        b(c, a, n, t),
        r.useCallback(
            (e, r) => {
                null != c &&
                    (0, p.wH)(c, t, {
                        dismissAction: e,
                        groupName: n,
                        guildId: a,
                        forceTrack: r,
                        version: t
                    });
            },
            [c, n, a, t]
        )
    ];
}
function v(e, t, n) {
    let o = (0, i.e7)([s.Z], () => {
            var t, n, r;
            return null !== e ? (null == (r = s.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates) || null == (t = n[e]) ? void 0 : t.lastDismissedAtMs) : void 0;
        }),
        a = (0, i.e7)([l.Z], () => l.Z.getGuildId()),
        c = null;
    return (
        null != e && (c = S(!(0, h.Bh)(e), o, t) ? e : null),
        [
            b(c, a, n),
            r.useCallback(
                (e, t) => {
                    null != c &&
                        (0, p.Ow)(c, {
                            dismissAction: e,
                            groupName: n,
                            guildId: a,
                            forceTrack: t
                        });
                },
                [c, n, a]
            )
        ]
    );
}
function I(e, t, n, o) {
    let a = (0, i.e7)([l.Z], () => l.Z.getGuildId()),
        s = null;
    return (
        null == e || (0, p.UJ)(e, n, t) || (s = e),
        [
            b(s, a, o),
            r.useCallback(
                (e, t) => {
                    null != s &&
                        (0, p.JO)(s, n, {
                            dismissAction: e,
                            groupName: o,
                            guildId: a,
                            forceTrack: t
                        });
                },
                [s, o, a, n]
            )
        ]
    );
}
function T(e, t, n) {
    let o = (0, i.e7)([s.Z], () => s.Z.getGuildDismissedContentState(t)),
        a = (0, h.ig)(e),
        l = null;
    return (
        s.Z.hasLoaded(g.yP.PRELOADED_USER_SETTINGS) ? (l = a.find((e) => null == o || null == o[e] || !1 === o[e].dismissed)) : null != o && (l = a.find((e) => null == o[e] || !1 === o[e].dismissed)),
        [
            b(l, t, n),
            r.useCallback(
                (e, r) => {
                    null != l &&
                        (0, _.wE)(l, t, {
                            dismissAction: e,
                            groupName: n,
                            guildId: t,
                            forceTrack: r
                        });
                },
                [l, n, t]
            )
        ]
    );
}
function S(e, t, n) {
    let r = null != t ? (Number.isNaN(Number(t)) ? void 0 : Number(t)) : void 0,
        i = void 0 === r ? 0 : r + n.cooldownDurationMs,
        o = Date.now(),
        a = null == n.showAfterTimestamp || (o >= n.showAfterTimestamp && (null != r ? r : 0) <= n.showAfterTimestamp);
    return s.Z.hasLoaded(g.yP.PRELOADED_USER_SETTINGS) ? e && a && (null == r || o >= i) : null != r && e && a && o >= i;
}
