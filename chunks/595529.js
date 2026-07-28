"use strict";
let i;
n.d(t, { b5: () => M, Bo: () => v, AA: () => U, eE: () => D, PP: () => w, Vu: () => b, Tr: () => P, DP: () => R });
var r = n(582128),
    a = n(17928),
    s = n(554146),
    l = n(206885),
    o = n(626584),
    d = n(773371),
    c = n(184809),
    u = n(41984),
    _ = n(296027);
new o.A("OverlayUtils");
var E = n(617617),
    A = n(967198),
    h = n(174459),
    I = n(935208),
    f = n(460288),
    p = n(199773),
    T = n(558845),
    m = n(826673),
    g = n(367727),
    S = n(757792),
    N = n(652215),
    C = n(355097);
function O(e, t, n, l, o) {
    let A = (0, T.Ay)((t) => null != e && t.currentlyShown.has(e)),
        I = (0, a.bG)([_.default, d.default, c.default], () => {
            if (__OVERLAY__) return c.default.isInstanceLocked();
            let e = _.default.getOverlayRenderingTrackedGames();
            return 0 !== e.length && e.some((e) => e.overlayMethod !== u.Ue.Disabled && d.default.isInputLocked(e.pid));
        }),
        f = (0, a.bG)(null != i ? [i] : [], () => i?.getFocusedPID()),
        m = (0, a.bG)([p.A], () => null != e && p.A.hasUserHitDCCap(e, t)),
        S = r.useRef(t);
    return (
        (S.current = t),
        r.useEffect(() => {
            if (null != e) {
                var t;
                return (
                    E.A.hasLoaded(C.oD.PRELOADED_USER_SETTINGS) ||
                        ((t = S.current),
                        h.default.track(N.HAw.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
                            content_type: s.M[e],
                            group_name: n ?? null,
                            latest_version: l ?? null,
                            guild_id: t ?? null,
                            snowflake_id: o ?? null,
                        })),
                    (0, g.Vh)(e, { groupName: n, guildId: S.current, version: l, snowflakeId: o }, I, f),
                    () => {
                        if (null == e) return;
                        let t = !p.A.hasUserHitDCCap();
                        (0, T.pd)({ content: e, groupName: n }, t);
                    }
                );
            }
        }, [e, n, m, I, l, f, o]),
        A && null != e ? e : null
    );
}
function R(e, t) {
    let n = (0, a.bG)([E.A], () => E.A.settings.userContent?.dismissedContents),
        i = (0, a.bG)([A.A], () => A.A.getGuildId()),
        s = (0, S.Sg)(e),
        l = null;
    return (
        E.A.hasLoaded(C.oD.PRELOADED_USER_SETTINGS)
            ? (l = s.find((e) => null == n || !(0, f.c0)(n, e)))
            : null != n && (l = s.find((e) => !(0, f.c0)(n, e))),
        [
            O(l, i, t),
            r.useCallback(
                (e, n) => {
                    null != l && (0, m.Dr)(l, { dismissAction: e, groupName: t, guildId: i, forceTrack: n });
                },
                [l, t, i],
            ),
        ]
    );
}
i = l.O ? n(773371).default : null;
let L = {};
function y(e) {
    return (0, a.bG)(
        [E.A],
        () => (null !== e ? E.A.settings.userContent?.recurringDismissibleContentStates?.[e] : null) ?? L,
    );
}
function D(e, t, n) {
    let { lastDismissedVersion: i } = y(e),
        s = (0, a.bG)([A.A], () => A.A.getGuildId()),
        l = null;
    if (null != e) {
        let n = !(0, S.P3)(e);
        E.A.hasLoaded(C.oD.PRELOADED_USER_SETTINGS)
            ? (l = n && (null == i || i < t) ? e : null)
            : null != i && (l = n && i < t ? e : null);
    }
    return [
        O(l, s, n, t),
        r.useCallback(
            (e, i) => {
                null != l && (0, g.$l)(l, t, { dismissAction: e, groupName: n, guildId: s, forceTrack: i, version: t });
            },
            [l, n, s, t],
        ),
    ];
}
function v(e, t, n) {
    let { lastDismissedAtMs: i, numTimesDismissed: s } = y(e),
        l = (0, a.bG)([A.A], () => A.A.getGuildId()),
        o = null;
    return (
        null != e && (o = G(!(0, S.P3)(e), i, s, t) ? e : null),
        [
            O(o, l, n),
            r.useCallback(
                (e, t) => {
                    null != o && (0, g.uh)(o, { dismissAction: e, groupName: n, guildId: l, forceTrack: t });
                },
                [o, n, l],
            ),
        ]
    );
}
function b(e, t, n) {
    let { lastDismissedObjectId: i } = y(e),
        s = (0, a.bG)([A.A], () => A.A.getGuildId()),
        l = null;
    if (null != e) {
        let n = !(0, S.P3)(e);
        E.A.hasLoaded(C.oD.PRELOADED_USER_SETTINGS)
            ? (l = n && (null == i || 1 === I.default.compare(t, i)) ? e : null)
            : null != i && (l = n && 1 === I.default.compare(t, i) ? e : null);
    }
    return [
        O(l, s, n, void 0, t),
        r.useCallback(
            (e, i) => {
                null != l && (0, g.qr)(l, t, { dismissAction: e, groupName: n, guildId: s, forceTrack: i });
            },
            [l, n, s, t],
        ),
    ];
}
function M(e, t, n, i) {
    let s = (0, a.bG)([E.A], () => E.A.getGuildDismissedContentState(n)),
        l = null != e ? (null == s ? null : s?.[e]) : null,
        o = l?.lastDismissedObjectId,
        d = null;
    if (null != e) {
        let n = !(0, S.P3)(e);
        E.A.hasLoaded(C.oD.PRELOADED_USER_SETTINGS)
            ? (d = n && (null == o || 1 === I.default.compare(t, o)) ? e : null)
            : null != o && (d = n && 1 === I.default.compare(t, o) ? e : null);
    }
    return [
        O(d, n, i, void 0, t),
        r.useCallback(
            (e, r) => {
                null != d && (0, m.in)(d, t, n, { dismissAction: e, groupName: i, guildId: n, forceTrack: r });
            },
            [d, i, n, t],
        ),
    ];
}
function P(e, t, n, i) {
    let s = (0, a.bG)([A.A], () => A.A.getGuildId()),
        l = null;
    return (
        null == e || (0, g.j6)(e, n, t) || (l = e),
        [
            O(l, s, i, void 0, n),
            r.useCallback(
                (e, t) => {
                    null != l && (0, g.qr)(l, n, { dismissAction: e, groupName: i, guildId: s, forceTrack: t });
                },
                [l, i, s, n],
            ),
        ]
    );
}
function U(e, t, n) {
    let i = (0, a.bG)([E.A], () => E.A.getGuildDismissedContentState(t)),
        s = (0, S.Sg)(e),
        l = null;
    return (
        E.A.hasLoaded(C.oD.PRELOADED_USER_SETTINGS)
            ? (l = s.find((e) => null == i || null == i[e] || !1 === i[e].dismissed))
            : null != i && (l = s.find((e) => null == i[e] || !1 === i[e].dismissed)),
        [
            O(l, t, n),
            r.useCallback(
                (e, i) => {
                    null != l && (0, m.dX)(l, t, { dismissAction: e, groupName: n, guildId: t, forceTrack: i });
                },
                [l, n, t],
            ),
        ]
    );
}
function w(e, t, n, i) {
    let s = (0, a.bG)([E.A], () => E.A.getGuildDismissedContentState(t)),
        l = null != e ? (null == s ? null : s?.[e]) : null,
        o = l?.numTimesDismissed,
        d = null;
    return (
        null != e && (d = G(!(0, S.P3)(e), l?.lastDismissedAtMs, o, n) ? e : null),
        [
            O(d, t, i),
            r.useCallback(
                (e, n) => {
                    null != d && (0, m.KO)(d, t, { dismissAction: e, groupName: i, guildId: t, forceTrack: n });
                },
                [d, i, t],
            ),
        ]
    );
}
function G(e, t, n, i) {
    let r = null != t ? (Number.isNaN(Number(t)) ? void 0 : Number(t)) : void 0,
        a = void 0 === r ? 0 : r + i.cooldownDurationMs,
        s = Date.now(),
        l = null == i.showAfterTimestamp || (s >= i.showAfterTimestamp && (r ?? 0) <= i.showAfterTimestamp),
        o = null == i.numTimesToRecur || 0 === i.numTimesToRecur || null == n || n < i.numTimesToRecur;
    return (
        (E.A.hasLoaded(C.oD.PRELOADED_USER_SETTINGS) || (null != r && null != n)) &&
        e &&
        l &&
        (null == r || s >= a) &&
        o
    );
}
