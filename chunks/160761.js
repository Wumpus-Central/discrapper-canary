"use strict";
let r;
n.d(t, { Bo: () => b, DP: () => y, Ty: () => w, Uq: () => D, Vu: () => R, _L: () => L, eE: () => C, hI: () => O });
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
    m = n(826673),
    E = n(367727),
    g = n(757792),
    A = n(652215),
    I = n(355097);
function T(e, t, n, r) {
    d.default.track(A.HAw.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
        content_type: a.M[e],
        group_name: n ?? null,
        latest_version: r ?? null,
        guild_id: t ?? null,
    });
}
function S(e, t, n, a) {
    let o = (0, h.Ay)((t) => null != e && t.currentlyShown.has(e)),
        c = (0, l.yq)(),
        d = (0, s.bG)(null != r ? [r] : [], () => r?.getFocusedPID()),
        _ = (0, s.bG)([p.A], () => null != e && p.A.hasUserHitDCCap(e, t)),
        f = i.useRef(t);
    return (
        (f.current = t),
        i.useEffect(() => {
            if (null != e)
                return (
                    u.A.hasLoaded(I.oD.PRELOADED_USER_SETTINGS) || T(e, f.current, n, a),
                    (0, E.Vh)(e, { groupName: n, guildId: f.current, version: a }, c, d),
                    () => {
                        if (null == e) return;
                        let t = !p.A.hasUserHitDCCap();
                        (0, h.pd)({ content: e, groupName: n }, t);
                    }
                );
        }, [e, n, _, c, a, d]),
        o && null != e ? e : null
    );
}
function y(e, t) {
    let n = (0, s.bG)([u.A], () => u.A.settings.userContent?.dismissedContents),
        r = (0, s.bG)([c.A], () => c.A.getGuildId()),
        a = (0, g.Sg)(e),
        o = null;
    return (
        u.A.hasLoaded(I.oD.PRELOADED_USER_SETTINGS)
            ? (o = a.find((e) => null == n || !(0, f.c0)(n, e)))
            : null != n && (o = a.find((e) => !(0, f.c0)(n, e))),
        [
            S(o, r, t),
            i.useCallback(
                (e, n) => {
                    null != o && (0, m.Dr)(o, { dismissAction: e, groupName: t, guildId: r, forceTrack: n });
                },
                [o, t, r],
            ),
        ]
    );
}
r = o.O ? n(242286).default : null;
let v = {};
function N(e) {
    return (0, s.bG)(
        [u.A],
        () => (null !== e ? u.A.settings.userContent?.recurringDismissibleContentStates?.[e] : null) ?? v,
    );
}
function C(e, t, n) {
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
        S(o, a, n, t),
        i.useCallback(
            (e, r) => {
                null != o && (0, E.$l)(o, t, { dismissAction: e, groupName: n, guildId: a, forceTrack: r, version: t });
            },
            [o, n, a, t],
        ),
    ];
}
function b(e, t, n) {
    let { lastDismissedAtMs: r, numTimesDismissed: a } = N(e),
        o = (0, s.bG)([c.A], () => c.A.getGuildId()),
        l = null;
    return (
        null != e && (l = x(!(0, g.P3)(e), r, a, t) ? e : null),
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
function R(e, t, n) {
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
        S(o, a, n),
        i.useCallback(
            (e, r) => {
                null != o && (0, E.qr)(o, t, { dismissAction: e, groupName: n, guildId: a, forceTrack: r });
            },
            [o, n, a, t],
        ),
    ];
}
function O(e, t, n, r) {
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
        S(c, n, r),
        i.useCallback(
            (e, i) => {
                null != c && (0, m.in)(c, t, n, { dismissAction: e, groupName: r, guildId: n, forceTrack: i });
            },
            [c, r, n, t],
        ),
    ];
}
function D(e, t, n, r) {
    let a = (0, s.bG)([c.A], () => c.A.getGuildId()),
        o = null;
    return (
        null == e || (0, E.j6)(e, n, t) || (o = e),
        [
            S(o, a, r),
            i.useCallback(
                (e, t) => {
                    null != o && (0, E.qr)(o, n, { dismissAction: e, groupName: r, guildId: a, forceTrack: t });
                },
                [o, r, a, n],
            ),
        ]
    );
}
function L(e, t, n) {
    let r = (0, s.bG)([u.A], () => u.A.getGuildDismissedContentState(t)),
        a = (0, g.Sg)(e),
        o = null;
    return (
        u.A.hasLoaded(I.oD.PRELOADED_USER_SETTINGS)
            ? (o = a.find((e) => null == r || null == r[e] || !1 === r[e].dismissed))
            : null != r && (o = a.find((e) => null == r[e] || !1 === r[e].dismissed)),
        [
            S(o, t, n),
            i.useCallback(
                (e, r) => {
                    null != o && (0, m.dX)(o, t, { dismissAction: e, groupName: n, guildId: t, forceTrack: r });
                },
                [o, n, t],
            ),
        ]
    );
}
function w(e, t, n, r) {
    let a = (0, s.bG)([u.A], () => u.A.getGuildDismissedContentState(t)),
        o = null != e ? (null == a ? null : a?.[e]) : null,
        l = o?.numTimesDismissed,
        c = null;
    return (
        null != e && (c = x(!(0, g.P3)(e), o?.lastDismissedAtMs, l, n) ? e : null),
        [
            S(c, t, r),
            i.useCallback(
                (e, n) => {
                    null != c && (0, m.KO)(c, t, { dismissAction: e, groupName: r, guildId: t, forceTrack: n });
                },
                [c, r, t],
            ),
        ]
    );
}
function x(e, t, n, r) {
    let i = null != t ? (Number.isNaN(Number(t)) ? void 0 : Number(t)) : void 0,
        s = void 0 === i ? 0 : i + r.cooldownDurationMs,
        a = Date.now(),
        o = null == r.showAfterTimestamp || (a >= r.showAfterTimestamp && (i ?? 0) <= r.showAfterTimestamp),
        l = null == i || a >= s,
        c = null == r.numTimesToRecur || 0 === r.numTimesToRecur || null == n || n < r.numTimesToRecur;
    return (u.A.hasLoaded(I.oD.PRELOADED_USER_SETTINGS) || (null != i && null != n)) && e && o && l && c;
}
