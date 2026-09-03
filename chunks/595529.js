n.d(t, {
    b5: () => D,
    Bo: () => L,
    gc: () => P,
    AA: () => b,
    PP: () => M,
    eE: () => R,
    Vu: () => y,
    DP: () => N,
    Tr: () => v,
});
var i = n(582128),
    r = n(17928),
    a = n(554146),
    s = n(626584),
    l = n(184809),
    o = n(41984),
    d = n(296027);
new s.A("OverlayUtils");
var c = n(617617),
    u = n(967198),
    _ = n(174459),
    E = n(935208),
    A = n(460288),
    h = n(199773),
    I = n(558845),
    f = n(826673),
    p = n(367727),
    T = n(958872),
    m = n(652215),
    g = n(355097);
function S(e, t, s, u, E) {
    let A,
        f,
        T = (0, I.Ay)((t) => null != e && t.currentlyShown.has(e)),
        [S, N] =
            ((A = n(773371).default),
            (f = [d.default, A, l.default]),
            (0, r.yK)(f, () => {
                let e = (function (e) {
                    if (__OVERLAY__) return l.default.isInstanceLocked();
                    let t = d.default.getOverlayRenderingTrackedGames();
                    return 0 !== t.length && t.some((t) => t.overlayMethod !== o.Ue.Disabled && e.isInputLocked(t.pid));
                })(A);
                return [e, e ? A.getFocusedPID() : null];
            })),
        C = null != e && (0, p.NZ)(e, S, N),
        O = (0, r.bG)([h.A], () => null != e && h.A.hasUserHitDCCap(e, t)),
        R = i.useRef(t);
    return (
        (R.current = t),
        i.useEffect(() => {
            if (null != e) {
                var t;
                return (
                    c.A.hasLoaded(g.oD.PRELOADED_USER_SETTINGS) ||
                        ((t = R.current),
                        _.default.track(m.HAw.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
                            content_type: a.M[e],
                            group_name: s ?? null,
                            latest_version: u ?? null,
                            guild_id: t ?? null,
                            snowflake_id: E ?? null,
                        })),
                    (0, p.Vh)(e, { groupName: s, guildId: R.current, version: u, snowflakeId: E }, S, N),
                    () => {
                        if (null == e) return;
                        let t = !h.A.hasUserHitDCCap();
                        (0, I.pd)({ content: e, groupName: s }, t);
                    }
                );
            }
        }, [e, s, O, C, u, E]),
        T && null != e ? e : null
    );
}
function N(e, t) {
    let n = (0, r.bG)([c.A], () => c.A.settings.userContent?.dismissedContents),
        a = (0, r.bG)([u.A], () => u.A.getGuildId()),
        s = (0, T.Sg)(e),
        l = null;
    return (
        c.A.hasLoaded(g.oD.PRELOADED_USER_SETTINGS)
            ? (l = s.find((e) => null == n || !(0, A.c0)(n, e)))
            : null != n && (l = s.find((e) => !(0, A.c0)(n, e))),
        [
            S(l, a, t),
            i.useCallback(
                (e, n) => {
                    null != l && (0, f.Dr)(l, { dismissAction: e, groupName: t, guildId: a, forceTrack: n });
                },
                [l, t, a],
            ),
        ]
    );
}
let C = {};
function O(e) {
    return (0, r.bG)(
        [c.A],
        () => (null !== e ? c.A.settings.userContent?.recurringDismissibleContentStates?.[e] : null) ?? C,
    );
}
function R(e, t, n) {
    let { lastDismissedVersion: a } = O(e),
        s = (0, r.bG)([u.A], () => u.A.getGuildId()),
        l = null;
    if (null != e) {
        let n = !(0, T.P3)(e);
        c.A.hasLoaded(g.oD.PRELOADED_USER_SETTINGS)
            ? (l = n && (null == a || a < t) ? e : null)
            : null != a && (l = n && a < t ? e : null);
    }
    return [
        S(l, s, n, t),
        i.useCallback(
            (e, i) => {
                null != l && (0, p.$l)(l, t, { dismissAction: e, groupName: n, guildId: s, forceTrack: i, version: t });
            },
            [l, n, s, t],
        ),
    ];
}
function L(e, t, n) {
    let { lastDismissedAtMs: a, numTimesDismissed: s } = O(e),
        l = (0, r.bG)([u.A], () => u.A.getGuildId()),
        o = null;
    return (
        null != e && (o = U(!(0, T.P3)(e), a, s, t) ? e : null),
        [
            S(o, l, n),
            i.useCallback(
                (e, t) => {
                    null != o && (0, p.uh)(o, { dismissAction: e, groupName: n, guildId: l, forceTrack: t });
                },
                [o, n, l],
            ),
        ]
    );
}
function y(e, t, n) {
    let { lastDismissedObjectId: a } = O(e),
        s = (0, r.bG)([u.A], () => u.A.getGuildId()),
        l = null;
    if (null != e) {
        let n = !(0, T.P3)(e);
        c.A.hasLoaded(g.oD.PRELOADED_USER_SETTINGS)
            ? (l = n && (null == a || 1 === E.default.compare(t, a)) ? e : null)
            : null != a && (l = n && 1 === E.default.compare(t, a) ? e : null);
    }
    return [
        S(l, s, n, void 0, t),
        i.useCallback(
            (e, i) => {
                null != l && (0, p.qr)(l, t, { dismissAction: e, groupName: n, guildId: s, forceTrack: i });
            },
            [l, n, s, t],
        ),
    ];
}
function D(e, t, n, a) {
    let s = (0, r.bG)([c.A], () => c.A.getGuildDismissedContentState(n)),
        l = null != e ? (null == s ? null : s?.[e]) : null,
        o = l?.lastDismissedObjectId,
        d = null;
    if (null != e) {
        let n = !(0, T.P3)(e);
        c.A.hasLoaded(g.oD.PRELOADED_USER_SETTINGS)
            ? (d = n && (null == o || 1 === E.default.compare(t, o)) ? e : null)
            : null != o && (d = n && 1 === E.default.compare(t, o) ? e : null);
    }
    return [
        S(d, n, a, void 0, t),
        i.useCallback(
            (e, i) => {
                null != d && (0, f.in)(d, t, n, { dismissAction: e, groupName: a, guildId: n, forceTrack: i });
            },
            [d, a, n, t],
        ),
    ];
}
function v(e, t, n, a) {
    let s = (0, r.bG)([u.A], () => u.A.getGuildId()),
        l = null;
    return (
        null == e || (0, p.j6)(e, n, t) || (l = e),
        [
            S(l, s, a, void 0, n),
            i.useCallback(
                (e, t) => {
                    null != l && (0, p.qr)(l, n, { dismissAction: e, groupName: a, guildId: s, forceTrack: t });
                },
                [l, a, s, n],
            ),
        ]
    );
}
function b(e, t, n) {
    let a = (0, r.bG)([c.A], () => c.A.getGuildDismissedContentState(t)),
        s = (0, T.Sg)(e),
        l = null;
    return (
        c.A.hasLoaded(g.oD.PRELOADED_USER_SETTINGS)
            ? (l = s.find((e) => null == a || null == a[e] || !1 === a[e].dismissed))
            : null != a && (l = s.find((e) => null == a[e] || !1 === a[e].dismissed)),
        [
            S(l, t, n),
            i.useCallback(
                (e, i) => {
                    null != l && (0, f.dX)(l, t, { dismissAction: e, groupName: n, guildId: t, forceTrack: i });
                },
                [l, n, t],
            ),
        ]
    );
}
function M(e, t, n, a) {
    let s = (0, r.bG)([c.A], () => c.A.getGuildDismissedContentState(t)),
        l = null != e ? (null == s ? null : s?.[e]) : null,
        o = l?.numTimesDismissed,
        d = null;
    return (
        null != e && (d = U(!(0, T.P3)(e), l?.lastDismissedAtMs, o, n) ? e : null),
        [
            S(d, t, a),
            i.useCallback(
                (e, n) => {
                    null != d && (0, f.KO)(d, t, { dismissAction: e, groupName: a, guildId: t, forceTrack: n });
                },
                [d, a, t],
            ),
        ]
    );
}
function P(e) {
    let t = (0, r.bG)([c.A], () => c.A.settings.userContent?.dismissedContents);
    return e.filter((e) => null != t && !(0, A.c0)(t, e));
}
function U(e, t, n, i) {
    let r = null != t ? (Number.isNaN(Number(t)) ? void 0 : Number(t)) : void 0,
        a = void 0 === r ? 0 : r + i.cooldownDurationMs,
        s = Date.now(),
        l = null == i.showAfterTimestamp || (s >= i.showAfterTimestamp && (r ?? 0) <= i.showAfterTimestamp),
        o = null == i.numTimesToRecur || 0 === i.numTimesToRecur || null == n || n < i.numTimesToRecur;
    return (
        (c.A.hasLoaded(g.oD.PRELOADED_USER_SETTINGS) || (null != r && null != n)) &&
        e &&
        l &&
        (null == r || s >= a) &&
        o
    );
}
