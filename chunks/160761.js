"use strict";
let r;
n.d(t, { Bo: () => N, DP: () => S, Ty: () => w, Uq: () => D, Vu: () => R, _L: () => L, eE: () => b, hI: () => O });
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
    h = n(771781),
    p = n(826673),
    g = n(367727),
    E = n(757792),
    A = n(652215),
    I = n(355097);
function T(e, t, n, r) {
    c.default.track(A.HAw.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
        content_type: s.M[e],
        group_name: n ?? null,
        latest_version: r ?? null,
        guild_id: t ?? null,
    });
}
function y(e, t, n, s) {
    let u = (0, h.Ay)((t) => null != e && t.currentlyShown.has(e)),
        c = (0, o.yq)(),
        d = (0, a.bG)(null != r ? [r] : [], () => r?.getFocusedPID()),
        _ = (0, a.bG)([f.A], () => null != e && f.A.hasUserHitDCCap(e, t));
    return (
        i.useEffect(() => {
            if (null != e)
                return (
                    l.A.hasLoaded(I.oD.PRELOADED_USER_SETTINGS) || T(e, t, n, s),
                    (0, g.Vh)(e, { groupName: n, guildId: t, version: s }, c, d),
                    () => {
                        if (null == e) return;
                        let t = !f.A.hasUserHitDCCap();
                        (0, h.pd)({ content: e, groupName: n }, t);
                    }
                );
        }, [e, n, t, _, c, s, d]),
        u && null != e ? e : null
    );
}
function S(e, t) {
    let n = (0, a.bG)([l.A], () => l.A.settings.userContent?.dismissedContents),
        r = (0, a.bG)([u.A], () => u.A.getGuildId()),
        s = (0, E.Sg)(e),
        o = null;
    return (
        l.A.hasLoaded(I.oD.PRELOADED_USER_SETTINGS)
            ? (o = s.find((e) => null == n || !(0, _.c0)(n, e)))
            : null != n && (o = s.find((e) => !(0, _.c0)(n, e))),
        [
            y(o, r, t),
            i.useCallback(
                (e, n) => {
                    null != o && (0, p.Dr)(o, { dismissAction: e, groupName: t, guildId: r, forceTrack: n });
                },
                [o, t, r],
            ),
        ]
    );
}
r = n(242286).default;
let v = {};
function C(e) {
    return (0, a.bG)(
        [l.A],
        () => (null !== e ? l.A.settings.userContent?.recurringDismissibleContentStates?.[e] : null) ?? v,
    );
}
function b(e, t, n) {
    let { lastDismissedVersion: r } = C(e),
        s = (0, a.bG)([u.A], () => u.A.getGuildId()),
        o = null;
    if (null != e) {
        let n = !(0, E.P3)(e);
        l.A.hasLoaded(I.oD.PRELOADED_USER_SETTINGS)
            ? (o = n && (null == r || r < t) ? e : null)
            : null != r && (o = n && r < t ? e : null);
    }
    return [
        y(o, s, n, t),
        i.useCallback(
            (e, r) => {
                null != o && (0, g.$l)(o, t, { dismissAction: e, groupName: n, guildId: s, forceTrack: r, version: t });
            },
            [o, n, s, t],
        ),
    ];
}
function N(e, t, n) {
    let { lastDismissedAtMs: r, numTimesDismissed: s } = C(e),
        o = (0, a.bG)([u.A], () => u.A.getGuildId()),
        l = null;
    return (
        null != e && (l = x(!(0, E.P3)(e), r, s, t) ? e : null),
        [
            y(l, o, n),
            i.useCallback(
                (e, t) => {
                    null != l && (0, g.uh)(l, { dismissAction: e, groupName: n, guildId: o, forceTrack: t });
                },
                [l, n, o],
            ),
        ]
    );
}
function R(e, t, n) {
    let { lastDismissedObjectId: r } = C(e),
        s = (0, a.bG)([u.A], () => u.A.getGuildId()),
        o = null;
    if (null != e) {
        let n = !(0, E.P3)(e);
        l.A.hasLoaded(I.oD.PRELOADED_USER_SETTINGS)
            ? (o = n && (null == r || 1 === d.default.compare(t, r)) ? e : null)
            : null != r && (o = n && 1 === d.default.compare(t, r) ? e : null);
    }
    return [
        y(o, s, n),
        i.useCallback(
            (e, r) => {
                null != o && (0, g.qr)(o, t, { dismissAction: e, groupName: n, guildId: s, forceTrack: r });
            },
            [o, n, s, t],
        ),
    ];
}
function O(e, t, n, r) {
    let s = (0, a.bG)([l.A], () => l.A.getGuildDismissedContentState(n)),
        o = null != e ? (null == s ? null : s?.[e]) : null,
        u = o?.lastDismissedObjectId,
        c = null;
    if (null != e) {
        let n = !(0, E.P3)(e);
        l.A.hasLoaded(I.oD.PRELOADED_USER_SETTINGS)
            ? (c = n && (null == u || 1 === d.default.compare(t, u)) ? e : null)
            : null != u && (c = n && 1 === d.default.compare(t, u) ? e : null);
    }
    return [
        y(c, n, r),
        i.useCallback(
            (e, i) => {
                null != c && (0, p.in)(c, t, n, { dismissAction: e, groupName: r, guildId: n, forceTrack: i });
            },
            [c, r, n, t],
        ),
    ];
}
function D(e, t, n, r) {
    let s = (0, a.bG)([u.A], () => u.A.getGuildId()),
        o = null;
    return (
        null == e || (0, g.j6)(e, n, t) || (o = e),
        [
            y(o, s, r),
            i.useCallback(
                (e, t) => {
                    null != o && (0, g.qr)(o, n, { dismissAction: e, groupName: r, guildId: s, forceTrack: t });
                },
                [o, r, s, n],
            ),
        ]
    );
}
function L(e, t, n) {
    let r = (0, a.bG)([l.A], () => l.A.getGuildDismissedContentState(t)),
        s = (0, E.Sg)(e),
        o = null;
    return (
        l.A.hasLoaded(I.oD.PRELOADED_USER_SETTINGS)
            ? (o = s.find((e) => null == r || null == r[e] || !1 === r[e].dismissed))
            : null != r && (o = s.find((e) => null == r[e] || !1 === r[e].dismissed)),
        [
            y(o, t, n),
            i.useCallback(
                (e, r) => {
                    null != o && (0, p.dX)(o, t, { dismissAction: e, groupName: n, guildId: t, forceTrack: r });
                },
                [o, n, t],
            ),
        ]
    );
}
function w(e, t, n, r) {
    let s = (0, a.bG)([l.A], () => l.A.getGuildDismissedContentState(t)),
        o = null != e ? (null == s ? null : s?.[e]) : null,
        u = o?.numTimesDismissed,
        c = null;
    return (
        null != e && (c = x(!(0, E.P3)(e), o?.lastDismissedAtMs, u, n) ? e : null),
        [
            y(c, t, r),
            i.useCallback(
                (e, n) => {
                    null != c && (0, p.KO)(c, t, { dismissAction: e, groupName: r, guildId: t, forceTrack: n });
                },
                [c, r, t],
            ),
        ]
    );
}
function x(e, t, n, r) {
    let i = null != t ? (Number.isNaN(Number(t)) ? void 0 : Number(t)) : void 0,
        a = void 0 === i ? 0 : i + r.cooldownDurationMs,
        s = Date.now(),
        o = null == r.showAfterTimestamp || (s >= r.showAfterTimestamp && (i ?? 0) <= r.showAfterTimestamp),
        u = null == i || s >= a,
        c = null == r.numTimesToRecur || 0 === r.numTimesToRecur || null == n || n < r.numTimesToRecur;
    return (l.A.hasLoaded(I.oD.PRELOADED_USER_SETTINGS) || (null != i && null != n)) && e && o && u && c;
}
