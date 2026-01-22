let r;
n.d(t, {
    Bo: () => T,
    DP: () => A,
    Uq: () => R,
    Vu: () => C,
    _L: () => w,
    eE: () => I,
    hI: () => N,
});
var i = n(64700),
    a = n(311907),
    s = n(554146),
    o = n(590209),
    l = n(617617),
    c = n(967198),
    u = n(954571),
    d = n(661191),
    f = n(460288),
    p = n(199773),
    _ = n(771781),
    h = n(826673),
    m = n(367727),
    g = n(757792),
    E = n(652215),
    b = n(355097);
function y(e, t, n, r) {
    u.default.track(E.HAw.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
        content_type: s.M[e],
        group_name: null != n ? n : null,
        latest_version: null != r ? r : null,
        guild_id: null != t ? t : null,
    });
}
function O(e, t, n, s) {
    let c = (0, _.Ay)((t) => null != e && t.currentlyShown.has(e)),
        u = (0, o.yq)(),
        d = (0, a.bG)(null != r ? [r] : [], () => (null == r ? void 0 : r.getFocusedPID())),
        f = (0, a.bG)([p.A], () => null != e && p.A.hasUserHitDCCap(e, t));
    return (
        i.useEffect(() => {
            if (null != e)
                return (
                    l.A.hasLoaded(b.oD.PRELOADED_USER_SETTINGS) || y(e, t, n, s),
                    (0, m.Vh)(
                        e,
                        {
                            groupName: n,
                            guildId: t,
                            version: s,
                        },
                        u,
                        d,
                    ),
                    () => {
                        if (null == e) return;
                        let t = !p.A.hasUserHitDCCap();
                        (0, _.pd)(
                            {
                                content: e,
                                groupName: n,
                            },
                            t,
                        );
                    }
                );
        }, [e, n, t, f, u, s, d]),
        c && null != e ? e : null
    );
}
function A(e, t) {
    let n = (0, a.bG)([l.A], () => {
            var e;
            return null == (e = l.A.settings.userContent) ? void 0 : e.dismissedContents;
        }),
        r = (0, a.bG)([c.A], () => c.A.getGuildId()),
        s = (0, g.Sg)(e),
        o = null;
    return (
        l.A.hasLoaded(b.oD.PRELOADED_USER_SETTINGS)
            ? (o = s.find((e) => null == n || !(0, f.c0)(n, e)))
            : null != n && (o = s.find((e) => !(0, f.c0)(n, e))),
        [
            O(o, r, t),
            i.useCallback(
                (e, n) => {
                    null != o &&
                        (0, h.Dr)(o, {
                            dismissAction: e,
                            groupName: t,
                            guildId: r,
                            forceTrack: n,
                        });
                },
                [o, t, r],
            ),
        ]
    );
}
r = n(242286).default;
let v = {};
function S(e) {
    return (0, a.bG)([l.A], () => {
        var t, n;
        let r =
            null !== e
                ? null == (n = l.A.settings.userContent) || null == (t = n.recurringDismissibleContentStates)
                    ? void 0
                    : t[e]
                : null;
        return null != r ? r : v;
    });
}
function I(e, t, n) {
    let { lastDismissedVersion: r } = S(e),
        s = (0, a.bG)([c.A], () => c.A.getGuildId()),
        o = null;
    if (null != e) {
        let n = !(0, g.P3)(e);
        l.A.hasLoaded(b.oD.PRELOADED_USER_SETTINGS)
            ? (o = n && (null == r || r < t) ? e : null)
            : null != r && (o = n && r < t ? e : null);
    }
    return [
        O(o, s, n, t),
        i.useCallback(
            (e, r) => {
                null != o &&
                    (0, m.$l)(o, t, {
                        dismissAction: e,
                        groupName: n,
                        guildId: s,
                        forceTrack: r,
                        version: t,
                    });
            },
            [o, n, s, t],
        ),
    ];
}
function T(e, t, n) {
    let { lastDismissedAtMs: r, numTimesDismissed: s } = S(e),
        o = (0, a.bG)([c.A], () => c.A.getGuildId()),
        l = null;
    return (
        null != e && (l = P(!(0, g.P3)(e), r, s, t) ? e : null),
        [
            O(l, o, n),
            i.useCallback(
                (e, t) => {
                    null != l &&
                        (0, m.uh)(l, {
                            dismissAction: e,
                            groupName: n,
                            guildId: o,
                            forceTrack: t,
                        });
                },
                [l, n, o],
            ),
        ]
    );
}
function C(e, t, n) {
    let { lastDismissedObjectId: r } = S(e),
        s = (0, a.bG)([c.A], () => c.A.getGuildId()),
        o = null;
    if (null != e) {
        let n = !(0, g.P3)(e);
        l.A.hasLoaded(b.oD.PRELOADED_USER_SETTINGS)
            ? (o = n && (null == r || 1 === d.default.compare(t, r)) ? e : null)
            : null != r && (o = n && 1 === d.default.compare(t, r) ? e : null);
    }
    return [
        O(o, s, n),
        i.useCallback(
            (e, r) => {
                null != o &&
                    (0, m.qr)(o, t, {
                        dismissAction: e,
                        groupName: n,
                        guildId: s,
                        forceTrack: r,
                    });
            },
            [o, n, s, t],
        ),
    ];
}
function N(e, t, n, r) {
    let s = (0, a.bG)([l.A], () => l.A.getGuildDismissedContentState(n)),
        o = null != e ? (null == s ? null : null == s ? void 0 : s[e]) : null,
        c = null == o ? void 0 : o.lastDismissedObjectId,
        u = null;
    if (null != e) {
        let n = !(0, g.P3)(e);
        l.A.hasLoaded(b.oD.PRELOADED_USER_SETTINGS)
            ? (u = n && (null == c || 1 === d.default.compare(t, c)) ? e : null)
            : null != c && (u = n && 1 === d.default.compare(t, c) ? e : null);
    }
    return [
        O(u, n, r),
        i.useCallback(
            (e, i) => {
                null != u &&
                    (0, h.in)(u, t, n, {
                        dismissAction: e,
                        groupName: r,
                        guildId: n,
                        forceTrack: i,
                    });
            },
            [u, r, n, t],
        ),
    ];
}
function R(e, t, n, r) {
    let s = (0, a.bG)([c.A], () => c.A.getGuildId()),
        o = null;
    return (
        null == e || (0, m.j6)(e, n, t) || (o = e),
        [
            O(o, s, r),
            i.useCallback(
                (e, t) => {
                    null != o &&
                        (0, m.qr)(o, n, {
                            dismissAction: e,
                            groupName: r,
                            guildId: s,
                            forceTrack: t,
                        });
                },
                [o, r, s, n],
            ),
        ]
    );
}
function w(e, t, n) {
    let r = (0, a.bG)([l.A], () => l.A.getGuildDismissedContentState(t)),
        s = (0, g.Sg)(e),
        o = null;
    return (
        l.A.hasLoaded(b.oD.PRELOADED_USER_SETTINGS)
            ? (o = s.find((e) => null == r || null == r[e] || !1 === r[e].dismissed))
            : null != r && (o = s.find((e) => null == r[e] || !1 === r[e].dismissed)),
        [
            O(o, t, n),
            i.useCallback(
                (e, r) => {
                    null != o &&
                        (0, h.dX)(o, t, {
                            dismissAction: e,
                            groupName: n,
                            guildId: t,
                            forceTrack: r,
                        });
                },
                [o, n, t],
            ),
        ]
    );
}
function P(e, t, n, r) {
    let i = null != t ? (Number.isNaN(Number(t)) ? void 0 : Number(t)) : void 0,
        a = void 0 === i ? 0 : i + r.cooldownDurationMs,
        s = Date.now(),
        o = null == r.showAfterTimestamp || (s >= r.showAfterTimestamp && (null != i ? i : 0) <= r.showAfterTimestamp),
        c = null == i || s >= a,
        u = null == r.numTimesToRecur || 0 === r.numTimesToRecur || null == n || n < r.numTimesToRecur;
    return (l.A.hasLoaded(b.oD.PRELOADED_USER_SETTINGS) || (null != i && null != n)) && e && o && c && u;
}
