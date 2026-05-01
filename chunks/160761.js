let i;
n.d(t, { Bo: () => g, DP: () => m, Tr: () => b, Ty: () => P, Vu: () => L, _L: () => M, eE: () => R, hI: () => D });
var a = n(64700),
    r = n(17928),
    s = n(554146),
    l = n(206885),
    o = n(590209),
    d = n(617617),
    c = n(967198),
    _ = n(954571),
    E = n(935208),
    u = n(460288),
    A = n(199773),
    I = n(771781),
    T = n(826673),
    h = n(367727),
    S = n(757792),
    N = n(652215),
    f = n(355097);
function p(e, t, n, l) {
    let c = (0, I.Ay)((t) => null != e && t.currentlyShown.has(e)),
        E = (0, o.yq)(),
        u = (0, r.bG)(null != i ? [i] : [], () => i?.getFocusedPID()),
        T = (0, r.bG)([A.A], () => null != e && A.A.hasUserHitDCCap(e, t)),
        S = a.useRef(t);
    return (
        (S.current = t),
        a.useEffect(() => {
            if (null != e) {
                var t;
                return (
                    d.A.hasLoaded(f.oD.PRELOADED_USER_SETTINGS) ||
                        ((t = S.current),
                        _.default.track(N.HAw.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
                            content_type: s.M[e],
                            group_name: n ?? null,
                            latest_version: l ?? null,
                            guild_id: t ?? null,
                        })),
                    (0, h.Vh)(e, { groupName: n, guildId: S.current, version: l }, E, u),
                    () => {
                        if (null == e) return;
                        let t = !A.A.hasUserHitDCCap();
                        (0, I.pd)({ content: e, groupName: n }, t);
                    }
                );
            }
        }, [e, n, T, E, l, u]),
        c && null != e ? e : null
    );
}
function m(e, t) {
    let n = (0, r.bG)([d.A], () => d.A.settings.userContent?.dismissedContents),
        i = (0, r.bG)([c.A], () => c.A.getGuildId()),
        s = (0, S.Sg)(e),
        l = null;
    return (
        d.A.hasLoaded(f.oD.PRELOADED_USER_SETTINGS)
            ? (l = s.find((e) => null == n || !(0, u.c0)(n, e)))
            : null != n && (l = s.find((e) => !(0, u.c0)(n, e))),
        [
            p(l, i, t),
            a.useCallback(
                (e, n) => {
                    null != l && (0, T.Dr)(l, { dismissAction: e, groupName: t, guildId: i, forceTrack: n });
                },
                [l, t, i],
            ),
        ]
    );
}
i = l.O ? n(773371).default : null;
let O = {};
function C(e) {
    return (0, r.bG)(
        [d.A],
        () => (null !== e ? d.A.settings.userContent?.recurringDismissibleContentStates?.[e] : null) ?? O,
    );
}
function R(e, t, n) {
    let { lastDismissedVersion: i } = C(e),
        s = (0, r.bG)([c.A], () => c.A.getGuildId()),
        l = null;
    if (null != e) {
        let n = !(0, S.P3)(e);
        d.A.hasLoaded(f.oD.PRELOADED_USER_SETTINGS)
            ? (l = n && (null == i || i < t) ? e : null)
            : null != i && (l = n && i < t ? e : null);
    }
    return [
        p(l, s, n, t),
        a.useCallback(
            (e, i) => {
                null != l && (0, h.$l)(l, t, { dismissAction: e, groupName: n, guildId: s, forceTrack: i, version: t });
            },
            [l, n, s, t],
        ),
    ];
}
function g(e, t, n) {
    let { lastDismissedAtMs: i, numTimesDismissed: s } = C(e),
        l = (0, r.bG)([c.A], () => c.A.getGuildId()),
        o = null;
    return (
        null != e && (o = U(!(0, S.P3)(e), i, s, t) ? e : null),
        [
            p(o, l, n),
            a.useCallback(
                (e, t) => {
                    null != o && (0, h.uh)(o, { dismissAction: e, groupName: n, guildId: l, forceTrack: t });
                },
                [o, n, l],
            ),
        ]
    );
}
function L(e, t, n) {
    let { lastDismissedObjectId: i } = C(e),
        s = (0, r.bG)([c.A], () => c.A.getGuildId()),
        l = null;
    if (null != e) {
        let n = !(0, S.P3)(e);
        d.A.hasLoaded(f.oD.PRELOADED_USER_SETTINGS)
            ? (l = n && (null == i || 1 === E.default.compare(t, i)) ? e : null)
            : null != i && (l = n && 1 === E.default.compare(t, i) ? e : null);
    }
    return [
        p(l, s, n),
        a.useCallback(
            (e, i) => {
                null != l && (0, h.qr)(l, t, { dismissAction: e, groupName: n, guildId: s, forceTrack: i });
            },
            [l, n, s, t],
        ),
    ];
}
function D(e, t, n, i) {
    let s = (0, r.bG)([d.A], () => d.A.getGuildDismissedContentState(n)),
        l = null != e ? (null == s ? null : s?.[e]) : null,
        o = l?.lastDismissedObjectId,
        c = null;
    if (null != e) {
        let n = !(0, S.P3)(e);
        d.A.hasLoaded(f.oD.PRELOADED_USER_SETTINGS)
            ? (c = n && (null == o || 1 === E.default.compare(t, o)) ? e : null)
            : null != o && (c = n && 1 === E.default.compare(t, o) ? e : null);
    }
    return [
        p(c, n, i),
        a.useCallback(
            (e, a) => {
                null != c && (0, T.in)(c, t, n, { dismissAction: e, groupName: i, guildId: n, forceTrack: a });
            },
            [c, i, n, t],
        ),
    ];
}
function b(e, t, n, i) {
    let s = (0, r.bG)([c.A], () => c.A.getGuildId()),
        l = null;
    return (
        null == e || (0, h.j6)(e, n, t) || (l = e),
        [
            p(l, s, i),
            a.useCallback(
                (e, t) => {
                    null != l && (0, h.qr)(l, n, { dismissAction: e, groupName: i, guildId: s, forceTrack: t });
                },
                [l, i, s, n],
            ),
        ]
    );
}
function M(e, t, n) {
    let i = (0, r.bG)([d.A], () => d.A.getGuildDismissedContentState(t)),
        s = (0, S.Sg)(e),
        l = null;
    return (
        d.A.hasLoaded(f.oD.PRELOADED_USER_SETTINGS)
            ? (l = s.find((e) => null == i || null == i[e] || !1 === i[e].dismissed))
            : null != i && (l = s.find((e) => null == i[e] || !1 === i[e].dismissed)),
        [
            p(l, t, n),
            a.useCallback(
                (e, i) => {
                    null != l && (0, T.dX)(l, t, { dismissAction: e, groupName: n, guildId: t, forceTrack: i });
                },
                [l, n, t],
            ),
        ]
    );
}
function P(e, t, n, i) {
    let s = (0, r.bG)([d.A], () => d.A.getGuildDismissedContentState(t)),
        l = null != e ? (null == s ? null : s?.[e]) : null,
        o = l?.numTimesDismissed,
        c = null;
    return (
        null != e && (c = U(!(0, S.P3)(e), l?.lastDismissedAtMs, o, n) ? e : null),
        [
            p(c, t, i),
            a.useCallback(
                (e, n) => {
                    null != c && (0, T.KO)(c, t, { dismissAction: e, groupName: i, guildId: t, forceTrack: n });
                },
                [c, i, t],
            ),
        ]
    );
}
function U(e, t, n, i) {
    let a = null != t ? (Number.isNaN(Number(t)) ? void 0 : Number(t)) : void 0,
        r = void 0 === a ? 0 : a + i.cooldownDurationMs,
        s = Date.now(),
        l = null == i.showAfterTimestamp || (s >= i.showAfterTimestamp && (a ?? 0) <= i.showAfterTimestamp),
        o = null == i.numTimesToRecur || 0 === i.numTimesToRecur || null == n || n < i.numTimesToRecur;
    return (
        (d.A.hasLoaded(f.oD.PRELOADED_USER_SETTINGS) || (null != a && null != n)) &&
        e &&
        l &&
        (null == a || s >= r) &&
        o
    );
}
