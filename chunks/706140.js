n.d(t, {
    EM: () => I,
    Tt: () => T,
    cv: () => y,
    sx: () => S,
    zH: () => A,
});
var r = n(647438),
    i = n(442837),
    a = n(704215),
    o = n(128363),
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
        content_type: a.z[e],
        group_name: null != n ? n : null,
        latest_version: null != r ? r : null,
        guild_id: null != t ? t : null,
    });
}
function b(e, t, n, a) {
    let l = (0, f.ZP)((t) => null != e && t.currentlyShown.has(e)),
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
                            version: a,
                        },
                        c,
                    ),
                    () => {
                        if (null == e) return;
                        let t = !d.Z.hasUserHitDCCap();
                        (0, f.gE)(
                            {
                                content: e,
                                groupName: n,
                            },
                            t,
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
        s.Z.hasLoaded(g.yP.PRELOADED_USER_SETTINGS)
            ? (c = o.find((e) => null == n || !(0, u.jl)(n, e)))
            : null != n && (c = o.find((e) => !(0, u.jl)(n, e))),
        [
            b(c, a, t),
            r.useCallback(
                (e, n) => {
                    null != c &&
                        (0, _.Q3)(c, {
                            dismissAction: e,
                            groupName: t,
                            guildId: a,
                            forceTrack: n,
                        });
                },
                [c, t, a],
            ),
        ]
    );
}
let O = {};
function v(e) {
    return (0, i.e7)([s.Z], () => {
        var t, n;
        let r =
            null !== e
                ? null == (n = s.Z.settings.userContent) || null == (t = n.recurringDismissibleContentStates)
                    ? void 0
                    : t[e]
                : null;
        return null != r ? r : O;
    });
}
function I(e, t, n) {
    let { lastDismissedVersion: a } = v(e),
        o = (0, i.e7)([l.Z], () => l.Z.getGuildId()),
        c = null;
    if (null != e) {
        let n = !(0, h.Bh)(e);
        s.Z.hasLoaded(g.yP.PRELOADED_USER_SETTINGS)
            ? (c = n && (null == a || a < t) ? e : null)
            : null != a && (c = n && a < t ? e : null);
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
                        version: t,
                    });
            },
            [c, n, o, t],
        ),
    ];
}
function T(e, t, n) {
    let { lastDismissedAtMs: a, numTimesDismissed: o } = v(e),
        s = (0, i.e7)([l.Z], () => l.Z.getGuildId()),
        c = null;
    return (
        null != e && (c = C(!(0, h.Bh)(e), a, o, t) ? e : null),
        [
            b(c, s, n),
            r.useCallback(
                (e, t) => {
                    null != c &&
                        (0, p.Ow)(c, {
                            dismissAction: e,
                            groupName: n,
                            guildId: s,
                            forceTrack: t,
                        });
                },
                [c, n, s],
            ),
        ]
    );
}
function S(e, t, n, a) {
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
                            forceTrack: t,
                        });
                },
                [s, a, o, n],
            ),
        ]
    );
}
function A(e, t, n) {
    let a = (0, i.e7)([s.Z], () => s.Z.getGuildDismissedContentState(t)),
        o = (0, h.ig)(e),
        l = null;
    return (
        s.Z.hasLoaded(g.yP.PRELOADED_USER_SETTINGS)
            ? (l = o.find((e) => null == a || null == a[e] || !1 === a[e].dismissed))
            : null != a && (l = o.find((e) => null == a[e] || !1 === a[e].dismissed)),
        [
            b(l, t, n),
            r.useCallback(
                (e, r) => {
                    null != l &&
                        (0, _.wE)(l, t, {
                            dismissAction: e,
                            groupName: n,
                            guildId: t,
                            forceTrack: r,
                        });
                },
                [l, n, t],
            ),
        ]
    );
}
function C(e, t, n, r) {
    let i = null != t ? (Number.isNaN(Number(t)) ? void 0 : Number(t)) : void 0,
        a = void 0 === i ? 0 : i + r.cooldownDurationMs,
        o = Date.now(),
        l = null == r.showAfterTimestamp || (o >= r.showAfterTimestamp && (null != i ? i : 0) <= r.showAfterTimestamp),
        c = null == i || o >= a,
        u = null == r.numTimesToRecur || 0 === r.numTimesToRecur || null == n || n < r.numTimesToRecur;
    return (s.Z.hasLoaded(g.yP.PRELOADED_USER_SETTINGS) || (null != i && null != n)) && e && l && c && u;
}
