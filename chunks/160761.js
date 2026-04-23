"use strict";
let r;
n.d(t, { Bo: () => C, DP: () => S, Tr: () => b, Ty: () => L, Vu: () => O, _L: () => D, eE: () => v, hI: () => R });
var i = n(64700),
    s = n(311907),
    a = n(554146),
    o = n(206885),
    l = n(590209),
    u = n(617617),
    c = n(967198),
    d = n(954571),
    _ = n(661191),
    f = n(460288),
    p = n(199773),
    h = n(771781),
    E = n(826673),
    m = n(367727),
    g = n(757792),
    A = n(652215),
    I = n(355097);
function T(e, t, n, o) {
    let c = (0, h.Ay)((t) => null != e && t.currentlyShown.has(e)),
        _ = (0, l.yq)(),
        f = (0, s.bG)(null != r ? [r] : [], () => r?.getFocusedPID()),
        E = (0, s.bG)([p.A], () => null != e && p.A.hasUserHitDCCap(e, t)),
        g = i.useRef(t);
    return (
        (g.current = t),
        i.useEffect(() => {
            if (null != e) {
                var t;
                return (
                    u.A.hasLoaded(I.oD.PRELOADED_USER_SETTINGS) ||
                        ((t = g.current),
                        d.default.track(A.HAw.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
                            content_type: a.M[e],
                            group_name: n ?? null,
                            latest_version: o ?? null,
                            guild_id: t ?? null,
                        })),
                    (0, m.Vh)(e, { groupName: n, guildId: g.current, version: o }, _, f),
                    () => {
                        if (null == e) return;
                        let t = !p.A.hasUserHitDCCap();
                        (0, h.pd)({ content: e, groupName: n }, t);
                    }
                );
            }
        }, [e, n, E, _, o, f]),
        c && null != e ? e : null
    );
}
function S(e, t) {
    let n = (0, s.bG)([u.A], () => u.A.settings.userContent?.dismissedContents),
        r = (0, s.bG)([c.A], () => c.A.getGuildId()),
        a = (0, g.Sg)(e),
        o = null;
    return (
        u.A.hasLoaded(I.oD.PRELOADED_USER_SETTINGS)
            ? (o = a.find((e) => null == n || !(0, f.c0)(n, e)))
            : null != n && (o = a.find((e) => !(0, f.c0)(n, e))),
        [
            T(o, r, t),
            i.useCallback(
                (e, n) => {
                    null != o && (0, E.Dr)(o, { dismissAction: e, groupName: t, guildId: r, forceTrack: n });
                },
                [o, t, r],
            ),
        ]
    );
}
r = o.O ? n(242286).default : null;
let y = {};
function N(e) {
    return (0, s.bG)(
        [u.A],
        () => (null !== e ? u.A.settings.userContent?.recurringDismissibleContentStates?.[e] : null) ?? y,
    );
}
function v(e, t, n) {
    let { lastDismissedVersion: r } = N(e),
        a = (0, s.bG)([c.A], () => c.A.getGuildId()),
        o = null;
    if (null != e) {
        let n = !(0, g.P3)(e);
        u.A.hasLoaded(I.oD.PRELOADED_USER_SETTINGS)
            ? (o = n && (null == r || r < t) ? e : null)
            : null != r && (o = n && r < t ? e : null);
    }
    return [
        T(o, a, n, t),
        i.useCallback(
            (e, r) => {
                null != o && (0, m.$l)(o, t, { dismissAction: e, groupName: n, guildId: a, forceTrack: r, version: t });
            },
            [o, n, a, t],
        ),
    ];
}
function C(e, t, n) {
    let { lastDismissedAtMs: r, numTimesDismissed: a } = N(e),
        o = (0, s.bG)([c.A], () => c.A.getGuildId()),
        l = null;
    return (
        null != e && (l = w(!(0, g.P3)(e), r, a, t) ? e : null),
        [
            T(l, o, n),
            i.useCallback(
                (e, t) => {
                    null != l && (0, m.uh)(l, { dismissAction: e, groupName: n, guildId: o, forceTrack: t });
                },
                [l, n, o],
            ),
        ]
    );
}
function O(e, t, n) {
    let { lastDismissedObjectId: r } = N(e),
        a = (0, s.bG)([c.A], () => c.A.getGuildId()),
        o = null;
    if (null != e) {
        let n = !(0, g.P3)(e);
        u.A.hasLoaded(I.oD.PRELOADED_USER_SETTINGS)
            ? (o = n && (null == r || 1 === _.default.compare(t, r)) ? e : null)
            : null != r && (o = n && 1 === _.default.compare(t, r) ? e : null);
    }
    return [
        T(o, a, n),
        i.useCallback(
            (e, r) => {
                null != o && (0, m.qr)(o, t, { dismissAction: e, groupName: n, guildId: a, forceTrack: r });
            },
            [o, n, a, t],
        ),
    ];
}
function R(e, t, n, r) {
    let a = (0, s.bG)([u.A], () => u.A.getGuildDismissedContentState(n)),
        o = null != e ? (null == a ? null : a?.[e]) : null,
        l = o?.lastDismissedObjectId,
        c = null;
    if (null != e) {
        let n = !(0, g.P3)(e);
        u.A.hasLoaded(I.oD.PRELOADED_USER_SETTINGS)
            ? (c = n && (null == l || 1 === _.default.compare(t, l)) ? e : null)
            : null != l && (c = n && 1 === _.default.compare(t, l) ? e : null);
    }
    return [
        T(c, n, r),
        i.useCallback(
            (e, i) => {
                null != c && (0, E.in)(c, t, n, { dismissAction: e, groupName: r, guildId: n, forceTrack: i });
            },
            [c, r, n, t],
        ),
    ];
}
function b(e, t, n, r) {
    let a = (0, s.bG)([c.A], () => c.A.getGuildId()),
        o = null;
    return (
        null == e || (0, m.j6)(e, n, t) || (o = e),
        [
            T(o, a, r),
            i.useCallback(
                (e, t) => {
                    null != o && (0, m.qr)(o, n, { dismissAction: e, groupName: r, guildId: a, forceTrack: t });
                },
                [o, r, a, n],
            ),
        ]
    );
}
function D(e, t, n) {
    let r = (0, s.bG)([u.A], () => u.A.getGuildDismissedContentState(t)),
        a = (0, g.Sg)(e),
        o = null;
    return (
        u.A.hasLoaded(I.oD.PRELOADED_USER_SETTINGS)
            ? (o = a.find((e) => null == r || null == r[e] || !1 === r[e].dismissed))
            : null != r && (o = a.find((e) => null == r[e] || !1 === r[e].dismissed)),
        [
            T(o, t, n),
            i.useCallback(
                (e, r) => {
                    null != o && (0, E.dX)(o, t, { dismissAction: e, groupName: n, guildId: t, forceTrack: r });
                },
                [o, n, t],
            ),
        ]
    );
}
function L(e, t, n, r) {
    let a = (0, s.bG)([u.A], () => u.A.getGuildDismissedContentState(t)),
        o = null != e ? (null == a ? null : a?.[e]) : null,
        l = o?.numTimesDismissed,
        c = null;
    return (
        null != e && (c = w(!(0, g.P3)(e), o?.lastDismissedAtMs, l, n) ? e : null),
        [
            T(c, t, r),
            i.useCallback(
                (e, n) => {
                    null != c && (0, E.KO)(c, t, { dismissAction: e, groupName: r, guildId: t, forceTrack: n });
                },
                [c, r, t],
            ),
        ]
    );
}
function w(e, t, n, r) {
    let i = null != t ? (Number.isNaN(Number(t)) ? void 0 : Number(t)) : void 0,
        s = void 0 === i ? 0 : i + r.cooldownDurationMs,
        a = Date.now(),
        o = null == r.showAfterTimestamp || (a >= r.showAfterTimestamp && (i ?? 0) <= r.showAfterTimestamp),
        l = null == r.numTimesToRecur || 0 === r.numTimesToRecur || null == n || n < r.numTimesToRecur;
    return (
        (u.A.hasLoaded(I.oD.PRELOADED_USER_SETTINGS) || (null != i && null != n)) &&
        e &&
        o &&
        (null == i || a >= s) &&
        l
    );
}
