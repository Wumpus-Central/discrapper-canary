"use strict";
let r;
n.d(t, { Bo: () => b, DP: () => y, Uq: () => O, Vu: () => N, _L: () => D, eE: () => C, hI: () => R });
var i = n(64700),
    a = n(311907),
    s = n(554146),
    o = n(590209),
    l = n(617617),
    u = n(967198),
    c = n(954571),
    d = n(661191),
    _ = n(460288),
    f = n(199773),
    p = n(771781),
    h = n(826673),
    m = n(367727),
    g = n(757792),
    E = n(652215),
    A = n(355097);
function I(e, t, n, r) {
    c.default.track(E.HAw.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
        content_type: s.M[e],
        group_name: n ?? null,
        latest_version: r ?? null,
        guild_id: t ?? null,
    });
}
function T(e, t, n, s) {
    let u = (0, p.Ay)((t) => null != e && t.currentlyShown.has(e)),
        c = (0, o.yq)(),
        d = (0, a.bG)(null != r ? [r] : [], () => r?.getFocusedPID()),
        _ = (0, a.bG)([f.A], () => null != e && f.A.hasUserHitDCCap(e, t));
    return (
        i.useEffect(() => {
            if (null != e)
                return (
                    l.A.hasLoaded(A.oD.PRELOADED_USER_SETTINGS) || I(e, t, n, s),
                    (0, m.Vh)(e, { groupName: n, guildId: t, version: s }, c, d),
                    () => {
                        if (null == e) return;
                        let t = !f.A.hasUserHitDCCap();
                        (0, p.pd)({ content: e, groupName: n }, t);
                    }
                );
        }, [e, n, t, _, c, s, d]),
        u && null != e ? e : null
    );
}
function y(e, t) {
    let n = (0, a.bG)([l.A], () => l.A.settings.userContent?.dismissedContents),
        r = (0, a.bG)([u.A], () => u.A.getGuildId()),
        s = (0, g.Sg)(e),
        o = null;
    return (
        l.A.hasLoaded(A.oD.PRELOADED_USER_SETTINGS)
            ? (o = s.find((e) => null == n || !(0, _.c0)(n, e)))
            : null != n && (o = s.find((e) => !(0, _.c0)(n, e))),
        [
            T(o, r, t),
            i.useCallback(
                (e, n) => {
                    null != o && (0, h.Dr)(o, { dismissAction: e, groupName: t, guildId: r, forceTrack: n });
                },
                [o, t, r],
            ),
        ]
    );
}
r = n(242286).default;
let S = {};
function v(e) {
    return (0, a.bG)(
        [l.A],
        () => (null !== e ? l.A.settings.userContent?.recurringDismissibleContentStates?.[e] : null) ?? S,
    );
}
function C(e, t, n) {
    let { lastDismissedVersion: r } = v(e),
        s = (0, a.bG)([u.A], () => u.A.getGuildId()),
        o = null;
    if (null != e) {
        let n = !(0, g.P3)(e);
        l.A.hasLoaded(A.oD.PRELOADED_USER_SETTINGS)
            ? (o = n && (null == r || r < t) ? e : null)
            : null != r && (o = n && r < t ? e : null);
    }
    return [
        T(o, s, n, t),
        i.useCallback(
            (e, r) => {
                null != o && (0, m.$l)(o, t, { dismissAction: e, groupName: n, guildId: s, forceTrack: r, version: t });
            },
            [o, n, s, t],
        ),
    ];
}
function b(e, t, n) {
    let { lastDismissedAtMs: r, numTimesDismissed: s } = v(e),
        o = (0, a.bG)([u.A], () => u.A.getGuildId()),
        l = null;
    return (
        null != e && (l = L(!(0, g.P3)(e), r, s, t) ? e : null),
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
function N(e, t, n) {
    let { lastDismissedObjectId: r } = v(e),
        s = (0, a.bG)([u.A], () => u.A.getGuildId()),
        o = null;
    if (null != e) {
        let n = !(0, g.P3)(e);
        l.A.hasLoaded(A.oD.PRELOADED_USER_SETTINGS)
            ? (o = n && (null == r || 1 === d.default.compare(t, r)) ? e : null)
            : null != r && (o = n && 1 === d.default.compare(t, r) ? e : null);
    }
    return [
        T(o, s, n),
        i.useCallback(
            (e, r) => {
                null != o && (0, m.qr)(o, t, { dismissAction: e, groupName: n, guildId: s, forceTrack: r });
            },
            [o, n, s, t],
        ),
    ];
}
function R(e, t, n, r) {
    let s = (0, a.bG)([l.A], () => l.A.getGuildDismissedContentState(n)),
        o = null != e ? (null == s ? null : s?.[e]) : null,
        u = o?.lastDismissedObjectId,
        c = null;
    if (null != e) {
        let n = !(0, g.P3)(e);
        l.A.hasLoaded(A.oD.PRELOADED_USER_SETTINGS)
            ? (c = n && (null == u || 1 === d.default.compare(t, u)) ? e : null)
            : null != u && (c = n && 1 === d.default.compare(t, u) ? e : null);
    }
    return [
        T(c, n, r),
        i.useCallback(
            (e, i) => {
                null != c && (0, h.in)(c, t, n, { dismissAction: e, groupName: r, guildId: n, forceTrack: i });
            },
            [c, r, n, t],
        ),
    ];
}
function O(e, t, n, r) {
    let s = (0, a.bG)([u.A], () => u.A.getGuildId()),
        o = null;
    return (
        null == e || (0, m.j6)(e, n, t) || (o = e),
        [
            T(o, s, r),
            i.useCallback(
                (e, t) => {
                    null != o && (0, m.qr)(o, n, { dismissAction: e, groupName: r, guildId: s, forceTrack: t });
                },
                [o, r, s, n],
            ),
        ]
    );
}
function D(e, t, n) {
    let r = (0, a.bG)([l.A], () => l.A.getGuildDismissedContentState(t)),
        s = (0, g.Sg)(e),
        o = null;
    return (
        l.A.hasLoaded(A.oD.PRELOADED_USER_SETTINGS)
            ? (o = s.find((e) => null == r || null == r[e] || !1 === r[e].dismissed))
            : null != r && (o = s.find((e) => null == r[e] || !1 === r[e].dismissed)),
        [
            T(o, t, n),
            i.useCallback(
                (e, r) => {
                    null != o && (0, h.dX)(o, t, { dismissAction: e, groupName: n, guildId: t, forceTrack: r });
                },
                [o, n, t],
            ),
        ]
    );
}
function L(e, t, n, r) {
    let i = null != t ? (Number.isNaN(Number(t)) ? void 0 : Number(t)) : void 0,
        a = void 0 === i ? 0 : i + r.cooldownDurationMs,
        s = Date.now(),
        o = null == r.showAfterTimestamp || (s >= r.showAfterTimestamp && (i ?? 0) <= r.showAfterTimestamp),
        u = null == i || s >= a,
        c = null == r.numTimesToRecur || 0 === r.numTimesToRecur || null == n || n < r.numTimesToRecur;
    return (l.A.hasLoaded(A.oD.PRELOADED_USER_SETTINGS) || (null != i && null != n)) && e && o && u && c;
}
