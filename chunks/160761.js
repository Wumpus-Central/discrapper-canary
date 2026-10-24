n.d(t, { AA: () => y, Bo: () => C, DP: () => m, PP: () => D, Tr: () => L, Vu: () => O, b5: () => R, eE: () => N });
var i = n(582128),
    r = n(17928),
    a = n(554146),
    s = n(590209),
    l = n(617617),
    o = n(967198),
    d = n(174459),
    c = n(935208),
    u = n(460288),
    _ = n(199773),
    E = n(47899),
    A = n(826673),
    h = n(501419),
    f = n(958872),
    I = n(652215),
    p = n(355097);
function T(e, t, n, o, c) {
    let u = (0, E.Ay)((t) => null != e && t.currentlyShown.has(e)),
        [A, f] = (0, s.eK)(),
        T = null != e && (0, h.NZ)(e, A, f),
        m = (0, r.bG)([_.A], () => null != e && _.A.hasUserHitDCCap(e, t)),
        g = i.useRef(t);
    return (
        (g.current = t),
        i.useEffect(() => {
            if (null != e) {
                var t;
                return (
                    l.A.hasLoaded(p.oD.PRELOADED_USER_SETTINGS) ||
                        ((t = g.current),
                        d.default.track(I.HAw.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
                            content_type: a.M[e],
                            group_name: n ?? null,
                            latest_version: o ?? null,
                            guild_id: t ?? null,
                            snowflake_id: c ?? null,
                        })),
                    (0, h.Vh)(e, { groupName: n, guildId: g.current, version: o, snowflakeId: c }, A, f),
                    () => {
                        if (null == e) return;
                        let t = !_.A.hasUserHitDCCap();
                        (0, E.pd)({ content: e, groupName: n }, t);
                    }
                );
            }
        }, [e, n, m, T, o, c]),
        u && null != e ? e : null
    );
}
function m(e, t) {
    let n = (0, r.bG)([l.A], () => l.A.settings.userContent?.dismissedContents),
        a = (0, r.bG)([o.A], () => o.A.getGuildId()),
        s = (0, f.Sg)(e),
        d = null;
    return (
        l.A.hasLoaded(p.oD.PRELOADED_USER_SETTINGS)
            ? (d = s.find((e) => null == n || !(0, u.c0)(n, e)))
            : null != n && (d = s.find((e) => !(0, u.c0)(n, e))),
        [
            T(d, a, t),
            i.useCallback(
                (e, n) => {
                    null != d && (0, A.Dr)(d, { dismissAction: e, groupName: t, guildId: a, forceTrack: n });
                },
                [d, t, a],
            ),
        ]
    );
}
let g = {};
function S(e) {
    return (0, r.bG)(
        [l.A],
        () => (null !== e ? l.A.settings.userContent?.recurringDismissibleContentStates?.[e] : null) ?? g,
    );
}
function N(e, t, n) {
    let { lastDismissedVersion: a } = S(e),
        s = (0, r.bG)([o.A], () => o.A.getGuildId()),
        d = null;
    if (null != e) {
        let n = !(0, f.P3)(e);
        l.A.hasLoaded(p.oD.PRELOADED_USER_SETTINGS)
            ? (d = n && (null == a || a < t) ? e : null)
            : null != a && (d = n && a < t ? e : null);
    }
    return [
        T(d, s, n, t),
        i.useCallback(
            (e, i) => {
                null != d && (0, h.$l)(d, t, { dismissAction: e, groupName: n, guildId: s, forceTrack: i, version: t });
            },
            [d, n, s, t],
        ),
    ];
}
function C(e, t, n) {
    let { lastDismissedAtMs: a, numTimesDismissed: s } = S(e),
        l = (0, r.bG)([o.A], () => o.A.getGuildId()),
        d = null;
    return (
        null != e && (d = v(!(0, f.P3)(e), a, s, t) ? e : null),
        [
            T(d, l, n),
            i.useCallback(
                (e, t) => {
                    null != d && (0, h.uh)(d, { dismissAction: e, groupName: n, guildId: l, forceTrack: t });
                },
                [d, n, l],
            ),
        ]
    );
}
function O(e, t, n) {
    let { lastDismissedObjectId: a } = S(e),
        s = (0, r.bG)([o.A], () => o.A.getGuildId()),
        d = null;
    if (null != e) {
        let n = !(0, f.P3)(e);
        l.A.hasLoaded(p.oD.PRELOADED_USER_SETTINGS)
            ? (d = n && (null == a || 1 === c.default.compare(t, a)) ? e : null)
            : null != a && (d = n && 1 === c.default.compare(t, a) ? e : null);
    }
    return [
        T(d, s, n, void 0, t),
        i.useCallback(
            (e, i) => {
                null != d && (0, h.qr)(d, t, { dismissAction: e, groupName: n, guildId: s, forceTrack: i });
            },
            [d, n, s, t],
        ),
    ];
}
function R(e, t, n, a) {
    let s = (0, r.bG)([l.A], () => l.A.getGuildDismissedContentState(n)),
        o = null != e ? (null == s ? null : s?.[e]) : null,
        d = o?.lastDismissedObjectId,
        u = null;
    if (null != e && "" !== t) {
        let n = !(0, f.P3)(e);
        l.A.hasLoaded(p.oD.PRELOADED_USER_SETTINGS)
            ? (u = n && (null == d || 1 === c.default.compare(t, d)) ? e : null)
            : null != d && (u = n && 1 === c.default.compare(t, d) ? e : null);
    }
    return [
        T(u, n, a, void 0, t),
        i.useCallback(
            (e, i) => {
                null != u && (0, A.in)(u, t, n, { dismissAction: e, groupName: a, guildId: n, forceTrack: i });
            },
            [u, a, n, t],
        ),
    ];
}
function L(e, t, n, a) {
    let s = (0, r.bG)([o.A], () => o.A.getGuildId()),
        l = null;
    return (
        null == e || (0, h.j6)(e, n, t) || (l = e),
        [
            T(l, s, a, void 0, n),
            i.useCallback(
                (e, t) => {
                    null != l && (0, h.qr)(l, n, { dismissAction: e, groupName: a, guildId: s, forceTrack: t });
                },
                [l, a, s, n],
            ),
        ]
    );
}
function y(e, t, n) {
    let a = (0, r.bG)([l.A], () => l.A.getGuildDismissedContentState(t)),
        s = (0, f.Sg)(e),
        o = null;
    return (
        l.A.hasLoaded(p.oD.PRELOADED_USER_SETTINGS)
            ? (o = s.find((e) => null == a || null == a[e] || !1 === a[e].dismissed))
            : null != a && (o = s.find((e) => null == a[e] || !1 === a[e].dismissed)),
        [
            T(o, t, n),
            i.useCallback(
                (e, i) => {
                    null != o && (0, A.dX)(o, t, { dismissAction: e, groupName: n, guildId: t, forceTrack: i });
                },
                [o, n, t],
            ),
        ]
    );
}
function D(e, t, n, a) {
    let s = (0, r.bG)([l.A], () => l.A.getGuildDismissedContentState(t)),
        o = null != e ? (null == s ? null : s?.[e]) : null,
        d = o?.numTimesDismissed,
        c = null;
    return (
        null != e && (c = v(!(0, f.P3)(e), o?.lastDismissedAtMs, d, n) ? e : null),
        [
            T(c, t, a),
            i.useCallback(
                (e, n) => {
                    null != c && (0, A.KO)(c, t, { dismissAction: e, groupName: a, guildId: t, forceTrack: n });
                },
                [c, a, t],
            ),
        ]
    );
}
function v(e, t, n, i) {
    let r = null != t ? (Number.isNaN(Number(t)) ? void 0 : Number(t)) : void 0,
        a = void 0 === r ? 0 : r + i.cooldownDurationMs,
        s = Date.now(),
        o = null == i.showAfterTimestamp || (s >= i.showAfterTimestamp && (r ?? 0) <= i.showAfterTimestamp),
        d = null == i.numTimesToRecur || 0 === i.numTimesToRecur || null == n || n < i.numTimesToRecur;
    return (
        (l.A.hasLoaded(p.oD.PRELOADED_USER_SETTINGS) || (null != r && null != n)) &&
        e &&
        o &&
        (null == r || s >= a) &&
        d
    );
}
