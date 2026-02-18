"use strict";
let r;
n.d(t, { Bo: () => R, DP: () => v, Ty: () => x, Uq: () => L, Vu: () => O, _L: () => w, eE: () => N, hI: () => D });
var i = n(64700),
    a = n(311907),
    s = n(554146),
    o = n(206885),
    l = n(590209),
    u = n(617617),
    c = n(967198),
    d = n(954571),
    _ = n(661191),
    f = n(460288),
    h = n(199773),
    p = n(771781),
    g = n(826673),
    E = n(367727),
    A = n(757792),
    I = n(652215),
    T = n(355097);
function y(e, t, n, r) {
    d.default.track(I.HAw.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
        content_type: s.M[e],
        group_name: n ?? null,
        latest_version: r ?? null,
        guild_id: t ?? null,
    });
}
function S(e, t, n, s) {
    let o = (0, p.Ay)((t) => null != e && t.currentlyShown.has(e)),
        c = (0, l.yq)(),
        d = (0, a.bG)(null != r ? [r] : [], () => r?.getFocusedPID()),
        _ = (0, a.bG)([h.A], () => null != e && h.A.hasUserHitDCCap(e, t));
    return (
        i.useEffect(() => {
            if (null != e)
                return (
                    u.A.hasLoaded(T.oD.PRELOADED_USER_SETTINGS) || y(e, t, n, s),
                    (0, E.Vh)(e, { groupName: n, guildId: t, version: s }, c, d),
                    () => {
                        if (null == e) return;
                        let t = !h.A.hasUserHitDCCap();
                        (0, p.pd)({ content: e, groupName: n }, t);
                    }
                );
        }, [e, n, t, _, c, s, d]),
        o && null != e ? e : null
    );
}
function v(e, t) {
    let n = (0, a.bG)([u.A], () => u.A.settings.userContent?.dismissedContents),
        r = (0, a.bG)([c.A], () => c.A.getGuildId()),
        s = (0, A.Sg)(e),
        o = null;
    return (
        u.A.hasLoaded(T.oD.PRELOADED_USER_SETTINGS)
            ? (o = s.find((e) => null == n || !(0, f.c0)(n, e)))
            : null != n && (o = s.find((e) => !(0, f.c0)(n, e))),
        [
            S(o, r, t),
            i.useCallback(
                (e, n) => {
                    null != o && (0, g.Dr)(o, { dismissAction: e, groupName: t, guildId: r, forceTrack: n });
                },
                [o, t, r],
            ),
        ]
    );
}
r = o.O ? n(242286).default : null;
let C = {};
function b(e) {
    return (0, a.bG)(
        [u.A],
        () => (null !== e ? u.A.settings.userContent?.recurringDismissibleContentStates?.[e] : null) ?? C,
    );
}
function N(e, t, n) {
    let { lastDismissedVersion: r } = b(e),
        s = (0, a.bG)([c.A], () => c.A.getGuildId()),
        o = null;
    if (null != e) {
        let n = !(0, A.P3)(e);
        u.A.hasLoaded(T.oD.PRELOADED_USER_SETTINGS)
            ? (o = n && (null == r || r < t) ? e : null)
            : null != r && (o = n && r < t ? e : null);
    }
    return [
        S(o, s, n, t),
        i.useCallback(
            (e, r) => {
                null != o && (0, E.$l)(o, t, { dismissAction: e, groupName: n, guildId: s, forceTrack: r, version: t });
            },
            [o, n, s, t],
        ),
    ];
}
function R(e, t, n) {
    let { lastDismissedAtMs: r, numTimesDismissed: s } = b(e),
        o = (0, a.bG)([c.A], () => c.A.getGuildId()),
        l = null;
    return (
        null != e && (l = P(!(0, A.P3)(e), r, s, t) ? e : null),
        [
            S(l, o, n),
            i.useCallback(
                (e, t) => {
                    null != l && (0, E.uh)(l, { dismissAction: e, groupName: n, guildId: o, forceTrack: t });
                },
                [l, n, o],
            ),
        ]
    );
}
function O(e, t, n) {
    let { lastDismissedObjectId: r } = b(e),
        s = (0, a.bG)([c.A], () => c.A.getGuildId()),
        o = null;
    if (null != e) {
        let n = !(0, A.P3)(e);
        u.A.hasLoaded(T.oD.PRELOADED_USER_SETTINGS)
            ? (o = n && (null == r || 1 === _.default.compare(t, r)) ? e : null)
            : null != r && (o = n && 1 === _.default.compare(t, r) ? e : null);
    }
    return [
        S(o, s, n),
        i.useCallback(
            (e, r) => {
                null != o && (0, E.qr)(o, t, { dismissAction: e, groupName: n, guildId: s, forceTrack: r });
            },
            [o, n, s, t],
        ),
    ];
}
function D(e, t, n, r) {
    let s = (0, a.bG)([u.A], () => u.A.getGuildDismissedContentState(n)),
        o = null != e ? (null == s ? null : s?.[e]) : null,
        l = o?.lastDismissedObjectId,
        c = null;
    if (null != e) {
        let n = !(0, A.P3)(e);
        u.A.hasLoaded(T.oD.PRELOADED_USER_SETTINGS)
            ? (c = n && (null == l || 1 === _.default.compare(t, l)) ? e : null)
            : null != l && (c = n && 1 === _.default.compare(t, l) ? e : null);
    }
    return [
        S(c, n, r),
        i.useCallback(
            (e, i) => {
                null != c && (0, g.in)(c, t, n, { dismissAction: e, groupName: r, guildId: n, forceTrack: i });
            },
            [c, r, n, t],
        ),
    ];
}
function L(e, t, n, r) {
    let s = (0, a.bG)([c.A], () => c.A.getGuildId()),
        o = null;
    return (
        null == e || (0, E.j6)(e, n, t) || (o = e),
        [
            S(o, s, r),
            i.useCallback(
                (e, t) => {
                    null != o && (0, E.qr)(o, n, { dismissAction: e, groupName: r, guildId: s, forceTrack: t });
                },
                [o, r, s, n],
            ),
        ]
    );
}
function w(e, t, n) {
    let r = (0, a.bG)([u.A], () => u.A.getGuildDismissedContentState(t)),
        s = (0, A.Sg)(e),
        o = null;
    return (
        u.A.hasLoaded(T.oD.PRELOADED_USER_SETTINGS)
            ? (o = s.find((e) => null == r || null == r[e] || !1 === r[e].dismissed))
            : null != r && (o = s.find((e) => null == r[e] || !1 === r[e].dismissed)),
        [
            S(o, t, n),
            i.useCallback(
                (e, r) => {
                    null != o && (0, g.dX)(o, t, { dismissAction: e, groupName: n, guildId: t, forceTrack: r });
                },
                [o, n, t],
            ),
        ]
    );
}
function x(e, t, n, r) {
    let s = (0, a.bG)([u.A], () => u.A.getGuildDismissedContentState(t)),
        o = null != e ? (null == s ? null : s?.[e]) : null,
        l = o?.numTimesDismissed,
        c = null;
    return (
        null != e && (c = P(!(0, A.P3)(e), o?.lastDismissedAtMs, l, n) ? e : null),
        [
            S(c, t, r),
            i.useCallback(
                (e, n) => {
                    null != c && (0, g.KO)(c, t, { dismissAction: e, groupName: r, guildId: t, forceTrack: n });
                },
                [c, r, t],
            ),
        ]
    );
}
function P(e, t, n, r) {
    let i = null != t ? (Number.isNaN(Number(t)) ? void 0 : Number(t)) : void 0,
        a = void 0 === i ? 0 : i + r.cooldownDurationMs,
        s = Date.now(),
        o = null == r.showAfterTimestamp || (s >= r.showAfterTimestamp && (i ?? 0) <= r.showAfterTimestamp),
        l = null == i || s >= a,
        c = null == r.numTimesToRecur || 0 === r.numTimesToRecur || null == n || n < r.numTimesToRecur;
    return (u.A.hasLoaded(T.oD.PRELOADED_USER_SETTINGS) || (null != i && null != n)) && e && o && l && c;
}
