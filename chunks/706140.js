let r;
n.d(t, {
    EM: () => T,
    Tt: () => A,
    cv: () => v,
    sx: () => N,
    xT: () => C,
    zH: () => P,
});
var i = n(473749),
    a = n(442837),
    o = n(704215),
    s = n(128363),
    l = n(581883),
    c = n(914010),
    u = n(626135),
    d = n(709054),
    f = n(915486),
    p = n(68985),
    _ = n(211644),
    m = n(266454),
    h = n(605236),
    g = n(57207),
    E = n(981631),
    b = n(526761);
function y(e, t, n, r) {
    u.default.track(E.rMx.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
        content_type: o.z[e],
        group_name: null != n ? n : null,
        latest_version: null != r ? r : null,
        guild_id: null != t ? t : null,
    });
}
function O(e, t, n, o) {
    let c = (0, _.ZP)((t) => null != e && t.currentlyShown.has(e)),
        u = (0, s.xG)(),
        d = (0, a.e7)(null != r ? [r] : [], () => (null == r ? void 0 : r.getFocusedPID())),
        f = (0, a.e7)([p.Z], () => null != e && p.Z.hasUserHitDCCap(e, t));
    return (
        i.useEffect(() => {
            if (null != e)
                return (
                    l.Z.hasLoaded(b.yP.PRELOADED_USER_SETTINGS) || y(e, t, n, o),
                    (0, h.kk)(
                        e,
                        {
                            groupName: n,
                            guildId: t,
                            version: o,
                        },
                        u,
                        d,
                    ),
                    () => {
                        if (null == e) return;
                        let t = !p.Z.hasUserHitDCCap();
                        (0, _.gE)(
                            {
                                content: e,
                                groupName: n,
                            },
                            t,
                        );
                    }
                );
        }, [e, n, t, f, u, o, d]),
        c && null != e ? e : null
    );
}
function v(e, t) {
    let n = (0, a.e7)([l.Z], () => {
            var e;
            return null == (e = l.Z.settings.userContent) ? void 0 : e.dismissedContents;
        }),
        r = (0, a.e7)([c.Z], () => c.Z.getGuildId()),
        o = (0, g.ig)(e),
        s = null;
    return (
        l.Z.hasLoaded(b.yP.PRELOADED_USER_SETTINGS)
            ? (s = o.find((e) => null == n || !(0, f.jl)(n, e)))
            : null != n && (s = o.find((e) => !(0, f.jl)(n, e))),
        [
            O(s, r, t),
            i.useCallback(
                (e, n) => {
                    null != s &&
                        (0, m.Q3)(s, {
                            dismissAction: e,
                            groupName: t,
                            guildId: r,
                            forceTrack: n,
                        });
                },
                [s, t, r],
            ),
        ]
    );
}
r = n(808506).default;
let S = {};
function I(e) {
    return (0, a.e7)([l.Z], () => {
        var t, n;
        let r =
            null !== e
                ? null == (n = l.Z.settings.userContent) || null == (t = n.recurringDismissibleContentStates)
                    ? void 0
                    : t[e]
                : null;
        return null != r ? r : S;
    });
}
function T(e, t, n) {
    let { lastDismissedVersion: r } = I(e),
        o = (0, a.e7)([c.Z], () => c.Z.getGuildId()),
        s = null;
    if (null != e) {
        let n = !(0, g.Bh)(e);
        l.Z.hasLoaded(b.yP.PRELOADED_USER_SETTINGS)
            ? (s = n && (null == r || r < t) ? e : null)
            : null != r && (s = n && r < t ? e : null);
    }
    return [
        O(s, o, n, t),
        i.useCallback(
            (e, r) => {
                null != s &&
                    (0, h.wH)(s, t, {
                        dismissAction: e,
                        groupName: n,
                        guildId: o,
                        forceTrack: r,
                        version: t,
                    });
            },
            [s, n, o, t],
        ),
    ];
}
function A(e, t, n) {
    let { lastDismissedAtMs: r, numTimesDismissed: o } = I(e),
        s = (0, a.e7)([c.Z], () => c.Z.getGuildId()),
        l = null;
    return (
        null != e && (l = R(!(0, g.Bh)(e), r, o, t) ? e : null),
        [
            O(l, s, n),
            i.useCallback(
                (e, t) => {
                    null != l &&
                        (0, h.Ow)(l, {
                            dismissAction: e,
                            groupName: n,
                            guildId: s,
                            forceTrack: t,
                        });
                },
                [l, n, s],
            ),
        ]
    );
}
function C(e, t, n) {
    let { lastDismissedObjectId: r } = I(e),
        o = (0, a.e7)([c.Z], () => c.Z.getGuildId()),
        s = null;
    if (null != e) {
        let n = !(0, g.Bh)(e);
        l.Z.hasLoaded(b.yP.PRELOADED_USER_SETTINGS)
            ? (s = n && (null == r || 1 === d.default.compare(t, r)) ? e : null)
            : null != r && (s = n && 1 === d.default.compare(t, r) ? e : null);
    }
    return [
        O(s, o, n),
        i.useCallback(
            (e, r) => {
                null != s &&
                    (0, h.JO)(s, t, {
                        dismissAction: e,
                        groupName: n,
                        guildId: o,
                        forceTrack: r,
                    });
            },
            [s, n, o, t],
        ),
    ];
}
function N(e, t, n, r) {
    let o = (0, a.e7)([c.Z], () => c.Z.getGuildId()),
        s = null;
    return (
        null == e || (0, h.UJ)(e, n, t) || (s = e),
        [
            O(s, o, r),
            i.useCallback(
                (e, t) => {
                    null != s &&
                        (0, h.JO)(s, n, {
                            dismissAction: e,
                            groupName: r,
                            guildId: o,
                            forceTrack: t,
                        });
                },
                [s, r, o, n],
            ),
        ]
    );
}
function P(e, t, n) {
    let r = (0, a.e7)([l.Z], () => l.Z.getGuildDismissedContentState(t)),
        o = (0, g.ig)(e),
        s = null;
    return (
        l.Z.hasLoaded(b.yP.PRELOADED_USER_SETTINGS)
            ? (s = o.find((e) => null == r || null == r[e] || !1 === r[e].dismissed))
            : null != r && (s = o.find((e) => null == r[e] || !1 === r[e].dismissed)),
        [
            O(s, t, n),
            i.useCallback(
                (e, r) => {
                    null != s &&
                        (0, m.wE)(s, t, {
                            dismissAction: e,
                            groupName: n,
                            guildId: t,
                            forceTrack: r,
                        });
                },
                [s, n, t],
            ),
        ]
    );
}
function R(e, t, n, r) {
    let i = null != t ? (Number.isNaN(Number(t)) ? void 0 : Number(t)) : void 0,
        a = void 0 === i ? 0 : i + r.cooldownDurationMs,
        o = Date.now(),
        s = null == r.showAfterTimestamp || (o >= r.showAfterTimestamp && (null != i ? i : 0) <= r.showAfterTimestamp),
        c = null == i || o >= a,
        u = null == r.numTimesToRecur || 0 === r.numTimesToRecur || null == n || n < r.numTimesToRecur;
    return (l.Z.hasLoaded(b.yP.PRELOADED_USER_SETTINGS) || (null != i && null != n)) && e && s && c && u;
}
