n.d(t, {
    EM: () => O,
    Tt: () => v,
    cv: () => y,
    sx: () => I,
    zH: () => T
});
var r = n(73800),
    i = n(442837),
    a = n(704215),
    o = n(128363),
    s = n(581883),
    l = n(914010),
    c = n(626135);
n(709054);
var u = n(915486),
    d = n(68985),
    _ = n(211644),
    f = n(266454),
    p = n(605236),
    h = n(57207),
    m = n(981631),
    g = n(526761);
function E(e, t, n, r) {
    c.default.track(m.rMx.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
        content_type: a.z[e],
        group_name: null != n ? n : null,
        latest_version: null != r ? r : null,
        guild_id: null != t ? t : null
    });
}
function b(e, t, n, a) {
    let l = (0, _.ZP)((t) => null != e && t.currentlyShown.has(e)),
        c = (0, o.xG)(),
        u = (0, i.e7)([d.Z], () => null != e && d.Z.hasUserHitDCCap(e, t));
    return (
        r.useEffect(() => {
            if (null != e)
                return (
                    s.Z.hasLoaded(g.yP.PRELOADED_USER_SETTINGS) || E(e, t, n, a),
                    (0, p.kk)(
                        e,
                        {
                            groupName: n,
                            guildId: t,
                            version: a
                        },
                        c
                    ),
                    () => {
                        if (null == e) return;
                        let t = !d.Z.hasUserHitDCCap();
                        (0, _.gE)(
                            {
                                content: e,
                                groupName: n
                            },
                            t
                        );
                    }
                );
        }, [e, n, t, u, c, a]),
        l && null != e ? e : null
    );
}
function y(e, t) {
    let n = (0, i.e7)([s.Z], () => {
            var e;
            return null == (e = s.Z.settings.userContent) ? void 0 : e.dismissedContents;
        }),
        a = (0, i.e7)([l.Z], () => l.Z.getGuildId()),
        o = (0, h.ig)(e),
        c = null;
    return (
        s.Z.hasLoaded(g.yP.PRELOADED_USER_SETTINGS) ? (c = o.find((e) => null == n || !(0, u.jl)(n, e))) : null != n && (c = o.find((e) => !(0, u.jl)(n, e))),
        [
            b(c, a, t),
            r.useCallback(
                (e, n) => {
                    null != c &&
                        (0, f.Q3)(c, {
                            dismissAction: e,
                            groupName: t,
                            guildId: a,
                            forceTrack: n
                        });
                },
                [c, t, a]
            )
        ]
    );
}
function O(e, t, n) {
    let a = (0, i.e7)([s.Z], () => {
            var t, n, r;
            return null !== e ? (null == (r = s.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates) || null == (t = n[e]) ? void 0 : t.lastDismissedVersion) : void 0;
        }),
        o = (0, i.e7)([l.Z], () => l.Z.getGuildId()),
        c = null;
    if (null != e) {
        let n = !(0, h.Bh)(e);
        s.Z.hasLoaded(g.yP.PRELOADED_USER_SETTINGS) ? (c = n && (null == a || a < t) ? e : null) : null != a && (c = n && a < t ? e : null);
    }
    return [
        b(c, o, n, t),
        r.useCallback(
            (e, r) => {
                null != c &&
                    (0, p.wH)(c, t, {
                        dismissAction: e,
                        groupName: n,
                        guildId: o,
                        forceTrack: r,
                        version: t
                    });
            },
            [c, n, o, t]
        )
    ];
}
function v(e, t, n) {
    let a = (0, i.e7)([s.Z], () => {
            var t, n, r;
            return null !== e ? (null == (r = s.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates) || null == (t = n[e]) ? void 0 : t.lastDismissedAtMs) : void 0;
        }),
        o = (0, i.e7)([l.Z], () => l.Z.getGuildId()),
        c = null;
    return (
        null != e && (c = S(!(0, h.Bh)(e), a, t) ? e : null),
        [
            b(c, o, n),
            r.useCallback(
                (e, t) => {
                    null != c &&
                        (0, p.Ow)(c, {
                            dismissAction: e,
                            groupName: n,
                            guildId: o,
                            forceTrack: t
                        });
                },
                [c, n, o]
            )
        ]
    );
}
function I(e, t, n, a) {
    let o = (0, i.e7)([l.Z], () => l.Z.getGuildId()),
        s = null;
    return (
        null == e || (0, p.UJ)(e, n, t) || (s = e),
        [
            b(s, o, a),
            r.useCallback(
                (e, t) => {
                    null != s &&
                        (0, p.JO)(s, n, {
                            dismissAction: e,
                            groupName: a,
                            guildId: o,
                            forceTrack: t
                        });
                },
                [s, a, o, n]
            )
        ]
    );
}
function T(e, t, n) {
    let a = (0, i.e7)([s.Z], () => s.Z.getGuildDismissedContentState(t)),
        o = (0, h.ig)(e),
        l = null;
    return (
        s.Z.hasLoaded(g.yP.PRELOADED_USER_SETTINGS) ? (l = o.find((e) => null == a || null == a[e] || !1 === a[e].dismissed)) : null != a && (l = o.find((e) => null == a[e] || !1 === a[e].dismissed)),
        [
            b(l, t, n),
            r.useCallback(
                (e, r) => {
                    null != l &&
                        (0, f.wE)(l, t, {
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
        a = Date.now(),
        o = null == n.showAfterTimestamp || (a >= n.showAfterTimestamp && (null != r ? r : 0) <= n.showAfterTimestamp);
    return s.Z.hasLoaded(g.yP.PRELOADED_USER_SETTINGS) ? e && o && (null == r || a >= i) : null != r && e && o && a >= i;
}
