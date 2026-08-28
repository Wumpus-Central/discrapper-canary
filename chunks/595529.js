"use strict";
n.d(t, {
    b5: () => b,
    Bo: () => D,
    gc: () => w,
    AA: () => P,
    PP: () => U,
    eE: () => y,
    Vu: () => v,
    DP: () => O,
    Tr: () => M,
});
var i = n(582128),
    r = n(17928),
    a = n(554146),
    s = n(206885),
    l = n(626584),
    o = n(773371),
    d = n(184809),
    c = n(41984),
    u = n(296027);
new l.A("OverlayUtils");
var _ = n(617617),
    E = n(967198),
    A = n(174459),
    h = n(935208),
    I = n(460288),
    f = n(199773),
    p = n(558845),
    T = n(826673),
    m = n(367727),
    g = n(958872),
    S = n(652215),
    N = n(355097);
function C(e, t, l, E, h) {
    let I = (0, p.Ay)((t) => null != e && t.currentlyShown.has(e)),
        T = (0, r.bG)([u.default, o.default, d.default], () => {
            if (__OVERLAY__) return d.default.isInstanceLocked();
            let e = u.default.getOverlayRenderingTrackedGames();
            return 0 !== e.length && e.some((e) => e.overlayMethod !== c.Ue.Disabled && o.default.isInputLocked(e.pid));
        }),
        g = s.O ? n(773371).default : null,
        C = (0, r.bG)(null != g ? [g] : [], () => g?.getFocusedPID()),
        O = (0, r.bG)([f.A], () => null != e && f.A.hasUserHitDCCap(e, t)),
        R = i.useRef(t);
    return (
        (R.current = t),
        i.useEffect(() => {
            if (null != e) {
                var t;
                return (
                    _.A.hasLoaded(N.oD.PRELOADED_USER_SETTINGS) ||
                        ((t = R.current),
                        A.default.track(S.HAw.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
                            content_type: a.M[e],
                            group_name: l ?? null,
                            latest_version: E ?? null,
                            guild_id: t ?? null,
                            snowflake_id: h ?? null,
                        })),
                    (0, m.Vh)(e, { groupName: l, guildId: R.current, version: E, snowflakeId: h }, T, C),
                    () => {
                        if (null == e) return;
                        let t = !f.A.hasUserHitDCCap();
                        (0, p.pd)({ content: e, groupName: l }, t);
                    }
                );
            }
        }, [e, l, O, T, E, C, h]),
        I && null != e ? e : null
    );
}
function O(e, t) {
    let n = (0, r.bG)([_.A], () => _.A.settings.userContent?.dismissedContents),
        a = (0, r.bG)([E.A], () => E.A.getGuildId()),
        s = (0, g.Sg)(e),
        l = null;
    return (
        _.A.hasLoaded(N.oD.PRELOADED_USER_SETTINGS)
            ? (l = s.find((e) => null == n || !(0, I.c0)(n, e)))
            : null != n && (l = s.find((e) => !(0, I.c0)(n, e))),
        [
            C(l, a, t),
            i.useCallback(
                (e, n) => {
                    null != l && (0, T.Dr)(l, { dismissAction: e, groupName: t, guildId: a, forceTrack: n });
                },
                [l, t, a],
            ),
        ]
    );
}
let R = {};
function L(e) {
    return (0, r.bG)(
        [_.A],
        () => (null !== e ? _.A.settings.userContent?.recurringDismissibleContentStates?.[e] : null) ?? R,
    );
}
function y(e, t, n) {
    let { lastDismissedVersion: a } = L(e),
        s = (0, r.bG)([E.A], () => E.A.getGuildId()),
        l = null;
    if (null != e) {
        let n = !(0, g.P3)(e);
        _.A.hasLoaded(N.oD.PRELOADED_USER_SETTINGS)
            ? (l = n && (null == a || a < t) ? e : null)
            : null != a && (l = n && a < t ? e : null);
    }
    return [
        C(l, s, n, t),
        i.useCallback(
            (e, i) => {
                null != l && (0, m.$l)(l, t, { dismissAction: e, groupName: n, guildId: s, forceTrack: i, version: t });
            },
            [l, n, s, t],
        ),
    ];
}
function D(e, t, n) {
    let { lastDismissedAtMs: a, numTimesDismissed: s } = L(e),
        l = (0, r.bG)([E.A], () => E.A.getGuildId()),
        o = null;
    return (
        null != e && (o = G(!(0, g.P3)(e), a, s, t) ? e : null),
        [
            C(o, l, n),
            i.useCallback(
                (e, t) => {
                    null != o && (0, m.uh)(o, { dismissAction: e, groupName: n, guildId: l, forceTrack: t });
                },
                [o, n, l],
            ),
        ]
    );
}
function v(e, t, n) {
    let { lastDismissedObjectId: a } = L(e),
        s = (0, r.bG)([E.A], () => E.A.getGuildId()),
        l = null;
    if (null != e) {
        let n = !(0, g.P3)(e);
        _.A.hasLoaded(N.oD.PRELOADED_USER_SETTINGS)
            ? (l = n && (null == a || 1 === h.default.compare(t, a)) ? e : null)
            : null != a && (l = n && 1 === h.default.compare(t, a) ? e : null);
    }
    return [
        C(l, s, n, void 0, t),
        i.useCallback(
            (e, i) => {
                null != l && (0, m.qr)(l, t, { dismissAction: e, groupName: n, guildId: s, forceTrack: i });
            },
            [l, n, s, t],
        ),
    ];
}
function b(e, t, n, a) {
    let s = (0, r.bG)([_.A], () => _.A.getGuildDismissedContentState(n)),
        l = null != e ? (null == s ? null : s?.[e]) : null,
        o = l?.lastDismissedObjectId,
        d = null;
    if (null != e) {
        let n = !(0, g.P3)(e);
        _.A.hasLoaded(N.oD.PRELOADED_USER_SETTINGS)
            ? (d = n && (null == o || 1 === h.default.compare(t, o)) ? e : null)
            : null != o && (d = n && 1 === h.default.compare(t, o) ? e : null);
    }
    return [
        C(d, n, a, void 0, t),
        i.useCallback(
            (e, i) => {
                null != d && (0, T.in)(d, t, n, { dismissAction: e, groupName: a, guildId: n, forceTrack: i });
            },
            [d, a, n, t],
        ),
    ];
}
function M(e, t, n, a) {
    let s = (0, r.bG)([E.A], () => E.A.getGuildId()),
        l = null;
    return (
        null == e || (0, m.j6)(e, n, t) || (l = e),
        [
            C(l, s, a, void 0, n),
            i.useCallback(
                (e, t) => {
                    null != l && (0, m.qr)(l, n, { dismissAction: e, groupName: a, guildId: s, forceTrack: t });
                },
                [l, a, s, n],
            ),
        ]
    );
}
function P(e, t, n) {
    let a = (0, r.bG)([_.A], () => _.A.getGuildDismissedContentState(t)),
        s = (0, g.Sg)(e),
        l = null;
    return (
        _.A.hasLoaded(N.oD.PRELOADED_USER_SETTINGS)
            ? (l = s.find((e) => null == a || null == a[e] || !1 === a[e].dismissed))
            : null != a && (l = s.find((e) => null == a[e] || !1 === a[e].dismissed)),
        [
            C(l, t, n),
            i.useCallback(
                (e, i) => {
                    null != l && (0, T.dX)(l, t, { dismissAction: e, groupName: n, guildId: t, forceTrack: i });
                },
                [l, n, t],
            ),
        ]
    );
}
function U(e, t, n, a) {
    let s = (0, r.bG)([_.A], () => _.A.getGuildDismissedContentState(t)),
        l = null != e ? (null == s ? null : s?.[e]) : null,
        o = l?.numTimesDismissed,
        d = null;
    return (
        null != e && (d = G(!(0, g.P3)(e), l?.lastDismissedAtMs, o, n) ? e : null),
        [
            C(d, t, a),
            i.useCallback(
                (e, n) => {
                    null != d && (0, T.KO)(d, t, { dismissAction: e, groupName: a, guildId: t, forceTrack: n });
                },
                [d, a, t],
            ),
        ]
    );
}
function w(e) {
    let t = (0, r.bG)([_.A], () => _.A.settings.userContent?.dismissedContents);
    return e.filter((e) => null != t && !(0, I.c0)(t, e));
}
function G(e, t, n, i) {
    let r = null != t ? (Number.isNaN(Number(t)) ? void 0 : Number(t)) : void 0,
        a = void 0 === r ? 0 : r + i.cooldownDurationMs,
        s = Date.now(),
        l = null == i.showAfterTimestamp || (s >= i.showAfterTimestamp && (r ?? 0) <= i.showAfterTimestamp),
        o = null == i.numTimesToRecur || 0 === i.numTimesToRecur || null == n || n < i.numTimesToRecur;
    return (
        (_.A.hasLoaded(N.oD.PRELOADED_USER_SETTINGS) || (null != r && null != n)) &&
        e &&
        l &&
        (null == r || s >= a) &&
        o
    );
}
