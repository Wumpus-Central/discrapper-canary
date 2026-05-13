"use strict";
let i;
n.d(t, { Ty: () => x, _L: () => P, Bo: () => D, hI: () => w, eE: () => b, Vu: () => L, DP: () => v, Tr: () => M });
var r = n(64700),
    s = n(17928),
    a = n(554146),
    o = n(206885),
    l = n(626584),
    u = n(773371),
    c = n(184809),
    d = n(41984),
    _ = n(296027);
new l.A("OverlayUtils");
var f = n(617617),
    h = n(967198),
    p = n(174459),
    E = n(935208),
    m = n(460288),
    g = n(199773),
    A = n(558845),
    I = n(826673),
    T = n(367727),
    S = n(757792),
    N = n(652215),
    y = n(355097);
function C(e, t, n, o, l) {
    let h = (0, A.Ay)((t) => null != e && t.currentlyShown.has(e)),
        E = (0, s.bG)([_.default, u.default, c.default], () => {
            if (__OVERLAY__) return c.default.isInstanceLocked();
            let e = _.default.getOverlayRenderingTrackedGames();
            return 0 !== e.length && e.some((e) => e.overlayMethod !== d.Ue.Disabled && u.default.isInputLocked(e.pid));
        }),
        m = (0, s.bG)(null != i ? [i] : [], () => i?.getFocusedPID()),
        I = (0, s.bG)([g.A], () => null != e && g.A.hasUserHitDCCap(e, t)),
        S = r.useRef(t);
    return (
        (S.current = t),
        r.useEffect(() => {
            if (null != e) {
                var t;
                return (
                    f.A.hasLoaded(y.oD.PRELOADED_USER_SETTINGS) ||
                        ((t = S.current),
                        p.default.track(N.HAw.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
                            content_type: a.M[e],
                            group_name: n ?? null,
                            latest_version: o ?? null,
                            guild_id: t ?? null,
                            snowflake_id: l ?? null,
                        })),
                    (0, T.Vh)(e, { groupName: n, guildId: S.current, version: o, snowflakeId: l }, E, m),
                    () => {
                        if (null == e) return;
                        let t = !g.A.hasUserHitDCCap();
                        (0, A.pd)({ content: e, groupName: n }, t);
                    }
                );
            }
        }, [e, n, I, E, o, m, l]),
        h && null != e ? e : null
    );
}
function v(e, t) {
    let n = (0, s.bG)([f.A], () => f.A.settings.userContent?.dismissedContents),
        i = (0, s.bG)([h.A], () => h.A.getGuildId()),
        a = (0, S.Sg)(e),
        o = null;
    return (
        f.A.hasLoaded(y.oD.PRELOADED_USER_SETTINGS)
            ? (o = a.find((e) => null == n || !(0, m.c0)(n, e)))
            : null != n && (o = a.find((e) => !(0, m.c0)(n, e))),
        [
            C(o, i, t),
            r.useCallback(
                (e, n) => {
                    null != o && (0, I.Dr)(o, { dismissAction: e, groupName: t, guildId: i, forceTrack: n });
                },
                [o, t, i],
            ),
        ]
    );
}
i = o.O ? n(773371).default : null;
let O = {};
function R(e) {
    return (0, s.bG)(
        [f.A],
        () => (null !== e ? f.A.settings.userContent?.recurringDismissibleContentStates?.[e] : null) ?? O,
    );
}
function b(e, t, n) {
    let { lastDismissedVersion: i } = R(e),
        a = (0, s.bG)([h.A], () => h.A.getGuildId()),
        o = null;
    if (null != e) {
        let n = !(0, S.P3)(e);
        f.A.hasLoaded(y.oD.PRELOADED_USER_SETTINGS)
            ? (o = n && (null == i || i < t) ? e : null)
            : null != i && (o = n && i < t ? e : null);
    }
    return [
        C(o, a, n, t),
        r.useCallback(
            (e, i) => {
                null != o && (0, T.$l)(o, t, { dismissAction: e, groupName: n, guildId: a, forceTrack: i, version: t });
            },
            [o, n, a, t],
        ),
    ];
}
function D(e, t, n) {
    let { lastDismissedAtMs: i, numTimesDismissed: a } = R(e),
        o = (0, s.bG)([h.A], () => h.A.getGuildId()),
        l = null;
    return (
        null != e && (l = U(!(0, S.P3)(e), i, a, t) ? e : null),
        [
            C(l, o, n),
            r.useCallback(
                (e, t) => {
                    null != l && (0, T.uh)(l, { dismissAction: e, groupName: n, guildId: o, forceTrack: t });
                },
                [l, n, o],
            ),
        ]
    );
}
function L(e, t, n) {
    let { lastDismissedObjectId: i } = R(e),
        a = (0, s.bG)([h.A], () => h.A.getGuildId()),
        o = null;
    if (null != e) {
        let n = !(0, S.P3)(e);
        f.A.hasLoaded(y.oD.PRELOADED_USER_SETTINGS)
            ? (o = n && (null == i || 1 === E.default.compare(t, i)) ? e : null)
            : null != i && (o = n && 1 === E.default.compare(t, i) ? e : null);
    }
    return [
        C(o, a, n, void 0, t),
        r.useCallback(
            (e, i) => {
                null != o && (0, T.qr)(o, t, { dismissAction: e, groupName: n, guildId: a, forceTrack: i });
            },
            [o, n, a, t],
        ),
    ];
}
function w(e, t, n, i) {
    let a = (0, s.bG)([f.A], () => f.A.getGuildDismissedContentState(n)),
        o = null != e ? (null == a ? null : a?.[e]) : null,
        l = o?.lastDismissedObjectId,
        u = null;
    if (null != e) {
        let n = !(0, S.P3)(e);
        f.A.hasLoaded(y.oD.PRELOADED_USER_SETTINGS)
            ? (u = n && (null == l || 1 === E.default.compare(t, l)) ? e : null)
            : null != l && (u = n && 1 === E.default.compare(t, l) ? e : null);
    }
    return [
        C(u, n, i, void 0, t),
        r.useCallback(
            (e, r) => {
                null != u && (0, I.in)(u, t, n, { dismissAction: e, groupName: i, guildId: n, forceTrack: r });
            },
            [u, i, n, t],
        ),
    ];
}
function M(e, t, n, i) {
    let a = (0, s.bG)([h.A], () => h.A.getGuildId()),
        o = null;
    return (
        null == e || (0, T.j6)(e, n, t) || (o = e),
        [
            C(o, a, i, void 0, n),
            r.useCallback(
                (e, t) => {
                    null != o && (0, T.qr)(o, n, { dismissAction: e, groupName: i, guildId: a, forceTrack: t });
                },
                [o, i, a, n],
            ),
        ]
    );
}
function P(e, t, n) {
    let i = (0, s.bG)([f.A], () => f.A.getGuildDismissedContentState(t)),
        a = (0, S.Sg)(e),
        o = null;
    return (
        f.A.hasLoaded(y.oD.PRELOADED_USER_SETTINGS)
            ? (o = a.find((e) => null == i || null == i[e] || !1 === i[e].dismissed))
            : null != i && (o = a.find((e) => null == i[e] || !1 === i[e].dismissed)),
        [
            C(o, t, n),
            r.useCallback(
                (e, i) => {
                    null != o && (0, I.dX)(o, t, { dismissAction: e, groupName: n, guildId: t, forceTrack: i });
                },
                [o, n, t],
            ),
        ]
    );
}
function x(e, t, n, i) {
    let a = (0, s.bG)([f.A], () => f.A.getGuildDismissedContentState(t)),
        o = null != e ? (null == a ? null : a?.[e]) : null,
        l = o?.numTimesDismissed,
        u = null;
    return (
        null != e && (u = U(!(0, S.P3)(e), o?.lastDismissedAtMs, l, n) ? e : null),
        [
            C(u, t, i),
            r.useCallback(
                (e, n) => {
                    null != u && (0, I.KO)(u, t, { dismissAction: e, groupName: i, guildId: t, forceTrack: n });
                },
                [u, i, t],
            ),
        ]
    );
}
function U(e, t, n, i) {
    let r = null != t ? (Number.isNaN(Number(t)) ? void 0 : Number(t)) : void 0,
        s = void 0 === r ? 0 : r + i.cooldownDurationMs,
        a = Date.now(),
        o = null == i.showAfterTimestamp || (a >= i.showAfterTimestamp && (r ?? 0) <= i.showAfterTimestamp),
        l = null == i.numTimesToRecur || 0 === i.numTimesToRecur || null == n || n < i.numTimesToRecur;
    return (
        (f.A.hasLoaded(y.oD.PRELOADED_USER_SETTINGS) || (null != r && null != n)) &&
        e &&
        o &&
        (null == r || a >= s) &&
        l
    );
}
